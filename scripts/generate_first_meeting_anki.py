from pathlib import Path

from anki_builder import build_anki_deck


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "files" / "en"
DECK_ID = 1747900003000

CARDS: list[tuple[str, str]] = [
    ("How do you greet someone formally for the first time?",
     "처음 뵙겠습니다.<br>Cheoeum boepgesseumnida.<br>Nice to meet you. (formal first meeting)"),
    ("How do you ask “Where are you from?” politely?",
     "어디서 오셨어요?<br>Eodiseo osyeosseoyo?<br>Where are you from?"),
    ("How do you say “I'm from the U.S.” in Korean?",
     "저는 미국에서 왔어요.<br>Jeoneun migugeseo wasseoyo.<br>I'm from the U.S."),
    ("How do you say “I'm learning Korean” in Korean?",
     "한국어를 배우고 있어요.<br>Hangugeoreul baeugo isseoyo.<br>I'm learning Korean."),
    ("How do you close an introduction with “Nice to meet you”?",
     "만나서 반가워요.<br>Mannaseo bangawoyo.<br>Nice to meet you."),
    ("New person says: 어디서 오셨어요? You are American. What do you say?",
     "미국에서 왔어요.<br>I'm from the U.S."),
    ("New person says: 한국어 잘하시네요. What is a humble reply?",
     "아직 배우고 있어요.<br>I'm still learning."),
    ("You shake hands after introducing yourself. What is the warm closer?",
     "만나서 반가워요.<br>Nice to meet you."),
    ("Translate: 처음 뵙겠습니다.", "Nice to meet you. (formal first meeting)"),
    ("Translate: 어디서 오셨어요?", "Where are you from?"),
    ("Translate: 한국어를 배우고 있어요.", "I'm learning Korean."),
    ("Translate: 만나서 반가워요.", "Nice to meet you."),
]


def main() -> None:
    build_anki_deck(
        out_apkg=OUT_DIR / "korean-life-first-meeting.apkg",
        out_tsv=OUT_DIR / "korean-life-first-meeting-anki.tsv",
        deck_id=DECK_ID,
        deck_name="Koko Kits::First Meeting",
        deck_desc="Korean first meeting phrases from Koko Kits.",
        cards=CARDS,
        tags="first meeting koko",
    )
    print(f"Wrote {(OUT_DIR / 'korean-life-first-meeting.apkg').relative_to(ROOT)}")
    print(f"Wrote {(OUT_DIR / 'korean-life-first-meeting-anki.tsv').relative_to(ROOT)}")


if __name__ == "__main__":
    main()
