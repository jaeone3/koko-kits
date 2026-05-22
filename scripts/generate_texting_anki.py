from pathlib import Path

from anki_builder import build_anki_deck


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "files" / "en"
DECK_ID = 1747900009000

CARDS: list[tuple[str, str]] = [
    ("Casually ask a friend “What are you doing?”",
     "뭐 해?<br>Mwo hae?<br>What are you doing? (casual)"),
    ("Text “I just arrived” casually.",
     "나 방금 도착했어.<br>Na banggeum dochakhaesseo.<br>I just arrived."),
    ("Text “I think I'll be a little late.”",
     "조금 늦을 것 같아.<br>Jogeum neujeul geot gata.<br>I think I'll be a little late."),
    ("Text “Are you ok?” casually.",
     "괜찮아?<br>Gwaenchana?<br>Are you ok?"),
    ("Text “I'll contact you later.”",
     "나중에 연락할게.<br>Najunge yeollakhalge.<br>I'll contact you later."),
    ("Friend texts: 도착했어? You just arrived. Reply.",
     "나 방금 도착했어.<br>I just arrived."),
    ("Friend says they'll be late. You want to say “it's ok.” Reply.",
     "괜찮아.<br>It's okay."),
    ("You can't chat right now. End the conversation politely.",
     "나중에 연락할게.<br>I'll contact you later."),
    ("Translate: 뭐 해?", "What are you doing? (casual)"),
    ("Translate: 나 방금 도착했어.", "I just arrived."),
    ("Translate: 조금 늦을 것 같아.", "I think I'll be a little late."),
    ("Translate: 괜찮아?", "Are you ok?"),
]


def main() -> None:
    build_anki_deck(
        out_apkg=OUT_DIR / "korean-life-texting.apkg",
        out_tsv=OUT_DIR / "korean-life-texting-anki.tsv",
        deck_id=DECK_ID,
        deck_name="Koko Kits::Texting",
        deck_desc="Korean casual texting phrases from Koko Kits.",
        cards=CARDS,
        tags="texting chat casual koko",
    )
    print(f"Wrote {(OUT_DIR / 'korean-life-texting.apkg').relative_to(ROOT)}")
    print(f"Wrote {(OUT_DIR / 'korean-life-texting-anki.tsv').relative_to(ROOT)}")


if __name__ == "__main__":
    main()
