"""Reusable Anki deck (.apkg) builder for Koko Kits.

Generates a minimal Anki package: one note model (Koko Basic, two fields), one deck,
and a configurable list of cards. Writes both a .apkg and a parallel .tsv for review.
"""

from __future__ import annotations

import html
import json
import random
import shutil
import sqlite3
import time
import zipfile
from hashlib import sha1
from pathlib import Path
from typing import Iterable


SHARED_MODEL_ID = 1747900002000  # all Koko Kits share one note model


def checksum(text: str) -> int:
    return int(sha1(text.encode("utf-8")).hexdigest()[:8], 16)


def guid(text: str) -> str:
    alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    seed = int(sha1(text.encode("utf-8")).hexdigest(), 16)
    rng = random.Random(seed)
    return "".join(rng.choice(alphabet) for _ in range(10))


def _create_schema(conn: sqlite3.Connection) -> None:
    conn.executescript(
        """
        create table col (
          id integer primary key, crt integer not null, mod integer not null,
          scm integer not null, ver integer not null, dty integer not null,
          usn integer not null, ls integer not null,
          conf text not null, models text not null, decks text not null,
          dconf text not null, tags text not null
        );
        create table notes (
          id integer primary key, guid text not null, mid integer not null,
          mod integer not null, usn integer not null, tags text not null,
          flds text not null, sfld integer not null, csum integer not null,
          flags integer not null, data text not null
        );
        create table cards (
          id integer primary key, nid integer not null, did integer not null,
          ord integer not null, mod integer not null, usn integer not null,
          type integer not null, queue integer not null, due integer not null,
          ivl integer not null, factor integer not null, reps integer not null,
          lapses integer not null, left integer not null, odue integer not null,
          odid integer not null, flags integer not null, data text not null
        );
        create table graves (usn integer not null, oid integer not null, type integer not null);
        """
    )


def _insert_collection(
    conn: sqlite3.Connection,
    now: int,
    deck_id: int,
    deck_name: str,
    deck_desc: str,
    card_count: int,
) -> None:
    model = {
        str(SHARED_MODEL_ID): {
            "id": SHARED_MODEL_ID,
            "name": "Koko Basic",
            "type": 0,
            "mod": now,
            "usn": 0,
            "sortf": 0,
            "did": deck_id,
            "tmpls": [{
                "name": "Card 1",
                "ord": 0,
                "qfmt": "{{Front}}",
                "afmt": "{{FrontSide}}<hr id=answer>{{Back}}",
            }],
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
        str(deck_id): {
            "id": deck_id, "name": deck_name, "desc": deck_desc, "mod": now,
            "usn": 0, "collapsed": False, "browserCollapsed": False, "conf": 1,
            "extendNew": 0, "extendRev": 0,
        }
    }
    dconf = {
        "1": {
            "id": 1, "name": "Default", "mod": now, "usn": 0, "maxTaken": 60,
            "autoplay": True, "timer": 0, "replayq": True,
            "new": {"delays": [1, 10], "ints": [1, 4, 7], "initialFactor": 2500,
                    "separate": True, "order": 1, "perDay": 20, "bury": True},
            "rev": {"perDay": 200, "ease4": 1.3, "fuzz": 0.05, "minSpace": 1},
            "lapse": {"delays": [10], "mult": 0, "minInt": 1, "leechFails": 8, "leechAction": 0},
        }
    }
    conf = {"nextPos": card_count + 1, "activeDecks": [deck_id], "curDeck": deck_id}
    conn.execute(
        "insert into col values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        (1, now, now, now * 1000, 11, 0, 0, 0,
         json.dumps(conf), json.dumps(model), json.dumps(decks),
         json.dumps(dconf), "{}"),
    )


def _insert_cards(
    conn: sqlite3.Connection,
    now: int,
    deck_id: int,
    cards: list[tuple[str, str]],
    tags: str,
) -> None:
    note_base = now * 1000
    for index, (front, back) in enumerate(cards, start=1):
        nid = note_base + index
        cid = note_base + 1000 + index
        front_html = html.escape(front)
        flds = f"{front_html}\x1f{back}"
        conn.execute(
            "insert into notes values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            (nid, guid(front), SHARED_MODEL_ID, now, 0, f" {tags} ", flds,
             front_html, checksum(front_html), 0, ""),
        )
        conn.execute(
            "insert into cards values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            (cid, nid, deck_id, 0, now, 0, 0, 0, index, 0, 2500, 0, 0, 0, 0, 0, 0, ""),
        )


def build_anki_deck(
    out_apkg: Path,
    out_tsv: Path,
    deck_id: int,
    deck_name: str,
    deck_desc: str,
    cards: list[tuple[str, str]],
    tags: str = "",
    build_dir: Path | None = None,
) -> None:
    """Build a single .apkg + parallel .tsv for the given kit.

    cards: list of (front, back) where back may include <br> tags.
    tags: space-delimited Anki tag string (without surrounding spaces).
    """
    now = int(time.time())
    out_apkg.parent.mkdir(parents=True, exist_ok=True)
    out_tsv.parent.mkdir(parents=True, exist_ok=True)

    if build_dir is None:
        build_dir = out_apkg.parent / f".anki_build_{out_apkg.stem}"
    if build_dir.exists():
        shutil.rmtree(build_dir)
    build_dir.mkdir(parents=True)
    db_path = build_dir / "collection.anki2"

    conn = sqlite3.connect(db_path)
    try:
        _create_schema(conn)
        _insert_collection(conn, now, deck_id, deck_name, deck_desc, len(cards))
        _insert_cards(conn, now, deck_id, cards, tags)
        conn.commit()
    finally:
        conn.close()

    with zipfile.ZipFile(out_apkg, "w", compression=zipfile.ZIP_DEFLATED) as package:
        package.write(db_path, "collection.anki2")
        package.writestr("media", "{}")

    rows = ["Front\tBack"]
    for front, back in cards:
        rows.append(f"{front}\t{back.replace('<br>', ' / ')}")
    out_tsv.write_text("\n".join(rows) + "\n", encoding="utf-8")

    shutil.rmtree(build_dir)
