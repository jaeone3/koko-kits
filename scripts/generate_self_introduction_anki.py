from pathlib import Path

from anki_builder import build_anki_deck


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "files" / "en"
DECK_ID = 1747900005000

CARDS: list[tuple[str, str]] = [
    ("How do you open a formal introduction with your name?",
     "안녕하세요, 저는 제임스입니다.<br>Annyeonghaseyo, jeoneun Jeimseu-imnida.<br>Hello, I'm James."),
    ("How do you say “I studied marketing” formally?",
     "마케팅을 공부했습니다.<br>Maketingeul gongbuhaesseumnida.<br>I studied marketing."),
    ("How do you say “I'm learning Korean” in formal register?",
     "한국어를 배우고 있습니다.<br>Hangugeoreul baeugo itseumnida.<br>I'm learning Korean."),
    ("How do you express strong interest in a field?",
     "이 분야에 관심이 많습니다.<br>I bunyae gwansimi manseumnida.<br>I'm very interested in this field."),
    ("How do you close a formal introduction politely?",
     "잘 부탁드립니다.<br>Jal butakdeurimnida.<br>Thank you in advance."),
    ("Interviewer says: 간단히 자기소개 부탁드립니다. How do you open?",
     "안녕하세요, 저는 제임스입니다.<br>Hello, I'm James."),
    ("You want to mention your motivation. What do you say?",
     "이 분야에 관심이 많습니다.<br>I'm very interested in this field."),
    ("You finish your introduction. What is the expected closer?",
     "잘 부탁드립니다.<br>Thank you in advance."),
    ("Translate: 저는 제임스입니다.", "I'm James."),
    ("Translate: 마케팅을 공부했습니다.", "I studied marketing."),
    ("Translate: 이 분야에 관심이 많습니다.", "I'm very interested in this field."),
    ("Translate: 잘 부탁드립니다.", "Thank you in advance. (Please look after me.)"),
]


def main() -> None:
    build_anki_deck(
        out_apkg=OUT_DIR / "career-self-introduction.apkg",
        out_tsv=OUT_DIR / "career-self-introduction-anki.tsv",
        deck_id=DECK_ID,
        deck_name="Koko Kits::Self Introduction",
        deck_desc="Korean self introduction phrases from Koko Kits.",
        cards=CARDS,
        tags="self introduction interview koko",
    )
    print(f"Wrote {(OUT_DIR / 'career-self-introduction.apkg').relative_to(ROOT)}")
    print(f"Wrote {(OUT_DIR / 'career-self-introduction-anki.tsv').relative_to(ROOT)}")


if __name__ == "__main__":
    main()
