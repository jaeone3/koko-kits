export type Category = {
  slug: string;
  title: string;
  description: string;
  sortOrder: number;
};

export type Phrase = {
  korean: string;
  english: string;
  romanization: string;
  tip?: string;
};

export type DialogueLine = {
  speaker: string;
  korean: string;
  english: string;
};

export type Role = {
  name: string;
  description: string;
};

export type QuizQuestion = {
  role?: string;
  prompt?: string;
  promptTranslation?: string;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export type Kit = {
  slug: string;
  category: string;
  locale: "en";
  sortOrder: number;
  status: "content-ready" | "planned";
  title: string;
  description: string;
  level: string;
  purpose: string;
  roles: Role[];
  phrases: Phrase[];
  dialogue: DialogueLine[];
  quiz: QuizQuestion[];
  assets: {
    pdf: string;
    anki: string;
  };
  cta: {
    label: string;
    href: string;
  };
};
