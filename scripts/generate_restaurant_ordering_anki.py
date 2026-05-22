from pathlib import Path

from anki_builder import build_anki_deck


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "files" / "en"
DECK_ID = 1747900007000

CARDS: list[tuple[str, str]] = [
    ("How do you say there are two of you (at a restaurant)?",
     "두 명이요.<br>Du myeong-iyo.<br>Two people."),
    ("How do you order one kimchi stew politely?",
     "김치찌개 하나 주세요.<br>Gimchijjigae hana juseyo.<br>One kimchi stew, please."),
    ("How do you politely ask for water at the table?",
     "물 좀 주세요.<br>Mul jom juseyo.<br>Some water, please."),
    ("How do you politely ask for tissues?",
     "휴지 좀 주세요.<br>Hyuji jom juseyo.<br>Some tissues, please."),
    ("How do you say “I'll pay / Check, please”?",
     "계산할게요.<br>Gyesanhalgeyo.<br>I'll pay / Check, please."),
    ("Staff says: 몇 분이세요? You are with one friend. What do you say?",
     "두 명이요.<br>Two people."),
    ("Staff says: 주문하시겠어요? You want one kimchi stew. What do you say?",
     "김치찌개 하나 주세요.<br>One kimchi stew, please."),
    ("You walk up to the counter to settle the bill. What do you say?",
     "계산할게요.<br>I'll pay / Check, please."),
    ("Translate: 두 명이요.", "Two people."),
    ("Translate: 김치찌개 하나 주세요.", "One kimchi stew, please."),
    ("Translate: 물 좀 주세요.", "Some water, please."),
    ("Translate: 계산할게요.", "I'll pay / Check, please."),
]


def main() -> None:
    build_anki_deck(
        out_apkg=OUT_DIR / "travel-restaurant-ordering.apkg",
        out_tsv=OUT_DIR / "travel-restaurant-ordering-anki.tsv",
        deck_id=DECK_ID,
        deck_name="Koko Kits::Restaurant Ordering",
        deck_desc="Korean restaurant ordering phrases from Koko Kits.",
        cards=CARDS,
        tags="restaurant ordering food koko",
    )
    print(f"Wrote {(OUT_DIR / 'travel-restaurant-ordering.apkg').relative_to(ROOT)}")
    print(f"Wrote {(OUT_DIR / 'travel-restaurant-ordering-anki.tsv').relative_to(ROOT)}")


if __name__ == "__main__":
    main()
