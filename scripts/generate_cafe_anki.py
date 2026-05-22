import html
import json
import random
import shutil
import sqlite3
import time
import zipfile
from hashlib import sha1
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "files" / "en"
BUILD_DIR = ROOT / ".anki_build"
DB_PATH = BUILD_DIR / "collection.anki2"
APKG_PATH = OUT_DIR / "travel-cafe-ordering.apkg"
TSV_PATH = OUT_DIR / "travel-cafe-ordering-anki.tsv"

DECK_ID = 1747900001000
MODEL_ID = 1747900002000

CARDS = [
    (
        "How do you order one iced Americano politely?",
        "아이스 아메리카노 하나 주세요.<br>Aiseu amerikano hana juseyo.<br>One iced Americano, please.",
    ),
    (
        "How do you say “To go, please” in Korean?",
        "포장해 주세요.<br>Pojanghae juseyo.<br>To go, please.",
    ),
    (
        "How do you say “I'll drink it here” in Korean?",
        "여기서 마실게요.<br>Yeogiseo masilgeyo.<br>I'll drink it here.",
    ),
    (
        "How do you say “I'll pay by card” in Korean?",
        "카드로 할게요.<br>Kadeuro halgeyo.<br>I'll pay by card.",
    ),
    (
        "How do you ask for a receipt in Korean?",
        "영수증 주세요.<br>Yeongsujeung juseyo.<br>Can I get a receipt?",
    ),
    (
        "Staff says: 뭐 드릴까요? What is a natural reply?",
        "아이스 아메리카노 하나 주세요.<br>One iced Americano, please.",
    ),
    (
        "Staff says: 드시고 가세요? You want it to go. What do you say?",
        "포장해 주세요.<br>To go, please.",
    ),
    (
        "Staff says: 드시고 가세요? You want to drink it there. What do you say?",
        "여기서 마실게요.<br>I'll drink it here.",
    ),
    (
        "You are paying. What phrase tells staff you will use a card?",
        "카드로 할게요.<br>I'll pay by card.",
    ),
    (
        "After paying, what phrase asks for the receipt?",
        "영수증 주세요.<br>Can I get a receipt?",
    ),
    (
        "Translate: 아이스 아메리카노 하나 주세요.",
        "One iced Americano, please.",
    ),
    (
        "Translate: 포장해 주세요.",
        "To go, please.",
    ),
]


def checksum(text: str) -> int:
    return int(sha1(text.encode("utf-8")).hexdigest()[:8], 16)


def guid(text: str) -> str:
    alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    seed = int(sha1(text.encode("utf-8")).hexdigest(), 16)
    rng = random.Random(seed)
    return "".join(rng.choice(alphabet) for _ in range(10))


def create_schema(conn: sqlite3.Connection) -> None:
    conn.executescript(
        """
        create table col (
          id integer primary key,
          crt integer not null,
          mod integer not null,
          scm integer not null,
          ver integer not null,
          dty integer not null,
          usn integer not null,
          ls integer not null,
          conf text not null,
          models text not null,
          decks text not null,
          dconf text not null,
          tags text not null
        );

        create table notes (
          id integer primary key,
          guid text not null,
          mid integer not null,
          mod integer not null,
          usn integer not null,
          tags text not null,
          flds text not null,
          sfld integer not null,
          csum integer not null,
          flags integer not null,
          data text not null
        );

        create table cards (
          id integer primary key,
          nid integer not null,
          did integer not null,
          ord integer not null,
          mod integer not null,
          usn integer not null,
          type integer not null,
          queue integer not null,
          due integer not null,
          ivl integer not null,
          factor integer not null,
          reps integer not null,
          lapses integer not null,
          left integer not null,
          odue integer not null,
          odid integer not null,
          flags integer not null,
          data text not null
        );

        create table graves (
          usn integer not null,
          oid integer not null,
          type integer not null
        );
        """
    )


def insert_collection(conn: sqlite3.Connection, now: int) -> None:
    model = {
        str(MODEL_ID): {
            "id": MODEL_ID,
            "name": "Koko Basic",
            "type": 0,
            "mod": now,
            "usn": 0,
            "sortf": 0,
            "did": DECK_ID,
            "tmpls": [
                {
                    "name": "Card 1",
                    "ord": 0,
                    "qfmt": "{{Front}}",
                    "afmt": "{{FrontSide}}<hr id=answer>{{Back}}",
                }
            ],
            "flds": [
                {"name": "Front", "ord": 0, "sticky": False, "rtl": False},
                {"name": "Back", "ord": 1, "sticky": False, "rtl": False},
            ],
            "css": ".card { font-family: Arial, sans-serif; font-size: 20px; text-align: left; color: #111; background: white; line-height: 1.45; }",
            "latexPre": "",
            "latexPost": "",
            "req": [[0, "all", [0]]],
            "vers": [],
        }
    }
    decks = {
        str(DECK_ID): {
            "id": DECK_ID,
            "name": "Koko Kits::Cafe Ordering",
            "desc": "Korean cafe ordering phrases from Koko Kits.",
            "mod": now,
            "usn": 0,
            "collapsed": False,
            "browserCollapsed": False,
            "conf": 1,
            "extendNew": 0,
            "extendRev": 0,
        }
    }
    dconf = {
        "1": {
            "id": 1,
            "name": "Default",
            "mod": now,
            "usn": 0,
            "maxTaken": 60,
            "autoplay": True,
            "timer": 0,
            "replayq": True,
            "new": {
                "delays": [1, 10],
                "ints": [1, 4, 7],
                "initialFactor": 2500,
                "separate": True,
                "order": 1,
                "perDay": 20,
                "bury": True,
            },
            "rev": {"perDay": 200, "ease4": 1.3, "fuzz": 0.05, "minSpace": 1},
            "lapse": {
                "delays": [10],
                "mult": 0,
                "minInt": 1,
                "leechFails": 8,
                "leechAction": 0,
            },
        }
    }
    conf = {"nextPos": len(CARDS) + 1, "activeDecks": [DECK_ID], "curDeck": DECK_ID}
    conn.execute(
        "insert into col values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        (
            1,
            now,
            now,
            now * 1000,
            11,
            0,
            0,
            0,
            json.dumps(conf),
            json.dumps(model),
            json.dumps(decks),
            json.dumps(dconf),
            "{}",
        ),
    )


def insert_cards(conn: sqlite3.Connection, now: int) -> None:
    note_base = now * 1000
    for index, (front, back) in enumerate(CARDS, start=1):
        nid = note_base + index
        cid = note_base + 1000 + index
        front_html = html.escape(front)
        back_html = back
        flds = f"{front_html}\x1f{back_html}"
        conn.execute(
            "insert into notes values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            (
                nid,
                guid(front),
                MODEL_ID,
                now,
                0,
                " cafe ordering koko ",
                flds,
                front_html,
                checksum(front_html),
                0,
                "",
            ),
        )
        conn.execute(
            "insert into cards values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            (
                cid,
                nid,
                DECK_ID,
                0,
                now,
                0,
                0,
                0,
                index,
                0,
                2500,
                0,
                0,
                0,
                0,
                0,
                0,
                "",
            ),
        )


def write_tsv() -> None:
    rows = ["Front\tBack"]
    for front, back in CARDS:
        rows.append(f"{front}\t{back.replace('<br>', ' / ')}")
    TSV_PATH.write_text("\n".join(rows) + "\n", encoding="utf-8")


def main() -> None:
    now = int(time.time())
    if BUILD_DIR.exists():
        shutil.rmtree(BUILD_DIR)
    BUILD_DIR.mkdir(parents=True)
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    conn = sqlite3.connect(DB_PATH)
    create_schema(conn)
    insert_collection(conn, now)
    insert_cards(conn, now)
    conn.commit()
    conn.close()

    write_tsv()

    with zipfile.ZipFile(APKG_PATH, "w", compression=zipfile.ZIP_DEFLATED) as package:
        package.write(DB_PATH, "collection.anki2")
        package.writestr("media", "{}")

    shutil.rmtree(BUILD_DIR)
    print(f"Wrote {APKG_PATH.relative_to(ROOT)}")
    print(f"Wrote {TSV_PATH.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
