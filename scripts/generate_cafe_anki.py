from pathlib import Path

from anki_builder import build_anki_deck


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "files" / "en"
DECK_ID = 1747900001000

CARDS: list[tuple[str, str]] = [
    ("How do you order one iced Americano politely?",
     "아이스 아메리카노 하나 주세요.<br>Aiseu amerikano hana juseyo.<br>One iced Americano, please."),
    ("How do you say “To go, please” in Korean?",
     "포장해 주세요.<br>Pojanghae juseyo.<br>To go, please."),
    ("How do you say “I'll drink it here” in Korean?",
     "여기서 마실게요.<br>Yeogiseo masilgeyo.<br>I'll drink it here."),
    ("How do you say “I'll pay by card” in Korean?",
     "카드로 할게요.<br>Kadeuro halgeyo.<br>I'll pay by card."),
    ("How do you ask for a receipt in Korean?",
     "영수증 주세요.<br>Yeongsujeung juseyo.<br>Can I get a receipt?"),
    ("Staff says: 뭐 드릴까요? What is a natural reply?",
     "아이스 아메리카노 하나 주세요.<br>One iced Americano, please."),
    ("Staff says: 드시고 가세요? You want it to go. What do you say?",
     "포장해 주세요.<br>To go, please."),
    ("Staff says: 드시고 가세요? You want to drink it there. What do you say?",
     "여기서 마실게요.<br>I'll drink it here."),
    ("You are paying. What phrase tells staff you will use a card?",
     "카드로 할게요.<br>I'll pay by card."),
    ("After paying, what phrase asks for the receipt?",
     "영수증 주세요.<br>Can I get a receipt?"),
    ("Translate: 아이스 아메리카노 하나 주세요.", "One iced Americano, please."),
    ("Translate: 포장해 주세요.", "To go, please."),
]


def main() -> None:
    build_anki_deck(
        out_apkg=OUT_DIR / "travel-cafe-ordering.apkg",
        out_tsv=OUT_DIR / "travel-cafe-ordering-anki.tsv",
        deck_id=DECK_ID,
        deck_name="Koko Kits::Cafe Ordering",
        deck_desc="Korean cafe ordering phrases from Koko Kits.",
        cards=CARDS,
        tags="cafe ordering koko",
    )
    print(f"Wrote {(OUT_DIR / 'travel-cafe-ordering.apkg').relative_to(ROOT)}")
    print(f"Wrote {(OUT_DIR / 'travel-cafe-ordering-anki.tsv').relative_to(ROOT)}")


if __name__ == "__main__":
    main()
