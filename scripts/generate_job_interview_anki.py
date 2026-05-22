from pathlib import Path

from anki_builder import build_anki_deck


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "files" / "en"
DECK_ID = 1747900011000

CARDS: list[tuple[str, str]] = [
    ("Recognize: 지원 동기를 말씀해 주세요. What is the interviewer asking?",
     "지원 동기를 말씀해 주세요.<br>Jiwon donggireul malsseumhae juseyo.<br>Please tell me why you applied."),
    ("How do you say “I'm very interested in this company”?",
     "이 회사에 관심이 많습니다.<br>I hoesa-e gwansimi manseumnida.<br>I'm very interested in this company."),
    ("How do you say “My strength is responsibility”?",
     "제 장점은 책임감입니다.<br>Je jangjeomeun chaegimgam-imnida.<br>My strength is responsibility."),
    ("How do you say “I like working as a team”?",
     "팀으로 일하는 것을 좋아합니다.<br>Timeuro ilhaneun geoseul joahamnida.<br>I like working as a team."),
    ("How do you close the interview with “Thank you”?",
     "감사합니다.<br>Gamsahamnida.<br>Thank you."),
    ("Interviewer asks about your motivation. What is a safe opener?",
     "이 회사에 관심이 많습니다.<br>I'm very interested in this company."),
    ("Interviewer asks: 본인의 장점은 무엇인가요? Reply.",
     "제 장점은 책임감입니다.<br>My strength is responsibility."),
    ("You want to highlight collaboration. What do you say?",
     "팀으로 일하는 것을 좋아합니다.<br>I like working as a team."),
    ("Translate: 지원 동기를 말씀해 주세요.", "Please tell me why you applied."),
    ("Translate: 이 회사에 관심이 많습니다.", "I'm very interested in this company."),
    ("Translate: 제 장점은 책임감입니다.", "My strength is responsibility."),
    ("Translate: 감사합니다.", "Thank you."),
]


def main() -> None:
    build_anki_deck(
        out_apkg=OUT_DIR / "career-job-interview.apkg",
        out_tsv=OUT_DIR / "career-job-interview-anki.tsv",
        deck_id=DECK_ID,
        deck_name="Koko Kits::Job Interview",
        deck_desc="Korean job interview phrases from Koko Kits.",
        cards=CARDS,
        tags="job interview career koko",
    )
    print(f"Wrote {(OUT_DIR / 'career-job-interview.apkg').relative_to(ROOT)}")
    print(f"Wrote {(OUT_DIR / 'career-job-interview-anki.tsv').relative_to(ROOT)}")


if __name__ == "__main__":
    main()
