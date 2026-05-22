import type { Category, Kit } from "../types";

export const categories: Category[] = [
  {
    slug: "travel",
    title: "Travel",
    description: "Order, ask, and move through Korea with practical phrases.",
    sortOrder: 1,
  },
  {
    slug: "korean-life",
    title: "Korean Life",
    description: "Handle everyday social moments and casual messages.",
    sortOrder: 2,
  },
  {
    slug: "career",
    title: "Career",
    description: "Practice simple Korean for work, interviews, and introductions.",
    sortOrder: 3,
  },
];

export const kits: Kit[] = [
  {
    slug: "cafe-ordering",
    category: "travel",
    locale: "en",
    sortOrder: 1,
    status: "content-ready",
    title: "Korean Cafe Ordering Kit",
    description: "Learn how to order coffee in Korean naturally.",
    level: "Beginner",
    purpose: "Order at a Korean cafe.",
    roles: [
      {
        name: "Staff",
        description: "Takes the order and asks whether the drink is for here.",
      },
      {
        name: "Customer",
        description: "Orders a drink, chooses takeout or dine-in, and pays.",
      },
    ],
    phrases: [
      {
        korean: "아이스 아메리카노 하나 주세요.",
        english: "One iced Americano, please.",
        romanization: "Aiseu amerikano hana juseyo.",
        tip: "Use 하나 for one item and 주세요 to make the order polite.",
      },
      {
        korean: "포장해 주세요.",
        english: "To go, please.",
        romanization: "Pojanghae juseyo.",
        tip: "Use this when you want the drink or food packed to take away.",
      },
      {
        korean: "여기서 마실게요.",
        english: "I'll drink it here.",
        romanization: "Yeogiseo masilgeyo.",
        tip: "A natural answer when staff asks if the drink is for here.",
      },
      {
        korean: "카드로 할게요.",
        english: "I'll pay by card.",
        romanization: "Kadeuro halgeyo.",
        tip: "Use this at checkout before tapping or inserting your card.",
      },
      {
        korean: "영수증 주세요.",
        english: "Can I get a receipt?",
        romanization: "Yeongsujeung juseyo.",
        tip: "Use this after payment when you need the printed receipt.",
      },
    ],
    dialogue: [
      {
        speaker: "Staff",
        korean: "뭐 드릴까요?",
        english: "What would you like?",
      },
      {
        speaker: "Customer",
        korean: "아이스 아메리카노 하나 주세요.",
        english: "One iced Americano, please.",
      },
      {
        speaker: "Staff",
        korean: "드시고 가세요?",
        english: "For here?",
      },
      {
        speaker: "Customer",
        korean: "포장해 주세요.",
        english: "To go, please.",
      },
    ],
    quiz: [
      {
        role: "You are the customer.",
        prompt: "Staff says: 뭐 드릴까요?",
        promptTranslation: "What would you like?",
        question: "What do you say to order one iced Americano?",
        options: [
          "아이스 아메리카노 하나 주세요.",
          "포장해 주세요.",
          "영수증 주세요.",
        ],
        answerIndex: 0,
        explanation:
          "Good. This is how you order one iced Americano politely.",
      },
      {
        role: "You are the customer.",
        prompt: "Staff says: 드시고 가세요?",
        promptTranslation: "For here?",
        question: "You want your drink to go. What do you say?",
        options: ["포장해 주세요.", "여기서 마실게요.", "카드로 할게요."],
        answerIndex: 0,
        explanation:
          "Good. Use 포장해 주세요 when you want the drink packed to take away.",
      },
      {
        role: "You are the customer.",
        prompt: "Staff says: 드시고 가세요?",
        promptTranslation: "For here?",
        question: "You want to drink it at the cafe. What do you say?",
        options: [
          "여기서 마실게요.",
          "영수증 주세요.",
          "아이스 아메리카노 하나 주세요.",
        ],
        answerIndex: 0,
        explanation:
          "Good. 여기서 마실게요 means you will drink it here.",
      },
      {
        role: "You are the customer.",
        prompt: "Staff points to the card reader.",
        promptTranslation: "It is time to pay.",
        question: "You want to pay by card. What do you say?",
        options: ["영수증 주세요.", "카드로 할게요.", "포장해 주세요."],
        answerIndex: 1,
        explanation: "Good. 카드로 할게요 is the phrase for paying by card.",
      },
    ],
    assets: {
      pdf: "/files/en/travel-cafe-ordering.pdf",
      anki: "/files/en/travel-cafe-ordering.apkg",
    },
    cta: {
      label: "Practice this in Koko",
      href: "/go/travel-cafe-ordering-koko",
    },
  },
  {
    slug: "restaurant-ordering",
    category: "travel",
    locale: "en",
    sortOrder: 2,
    status: "planned",
    title: "Korean Restaurant Ordering Kit",
    description: "Say how many people and order food at a Korean restaurant.",
    level: "Beginner",
    purpose: "Order food in a Korean restaurant.",
    roles: [
      {
        name: "Staff",
        description: "Seats guests and asks for the order.",
      },
      {
        name: "Customer",
        description: "Says the party size and orders food.",
      },
    ],
    phrases: [],
    dialogue: [],
    quiz: [],
    assets: {
      pdf: "/files/en/travel-restaurant-ordering.pdf",
      anki: "/files/en/travel-restaurant-ordering.apkg",
    },
    cta: {
      label: "Practice this in Koko",
      href: "/go/travel-restaurant-ordering-koko",
    },
  },
  {
    slug: "first-meeting",
    category: "korean-life",
    locale: "en",
    sortOrder: 1,
    status: "planned",
    title: "Korean First Meeting Kit",
    description: "Practice basic greetings when meeting someone new.",
    level: "Beginner",
    purpose: "Introduce yourself in a first meeting.",
    roles: [
      {
        name: "New Person",
        description: "Asks basic first-meeting questions.",
      },
      {
        name: "You",
        description: "Answers where you are from and what you are learning.",
      },
    ],
    phrases: [],
    dialogue: [],
    quiz: [],
    assets: {
      pdf: "/files/en/korean-life-first-meeting.pdf",
      anki: "/files/en/korean-life-first-meeting.apkg",
    },
    cta: {
      label: "Practice this in Koko",
      href: "/go/korean-life-first-meeting-koko",
    },
  },
  {
    slug: "texting",
    category: "korean-life",
    locale: "en",
    sortOrder: 2,
    status: "planned",
    title: "Korean Texting Kit",
    description: "Reply naturally in short Korean chat messages.",
    level: "Beginner",
    purpose: "Send short, natural Korean replies.",
    roles: [
      {
        name: "Friend",
        description: "Sends short casual messages.",
      },
      {
        name: "You",
        description: "Replies naturally in a Korean chat style.",
      },
    ],
    phrases: [],
    dialogue: [],
    quiz: [],
    assets: {
      pdf: "/files/en/korean-life-texting.pdf",
      anki: "/files/en/korean-life-texting.apkg",
    },
    cta: {
      label: "Practice this in Koko",
      href: "/go/korean-life-texting-koko",
    },
  },
  {
    slug: "self-introduction",
    category: "career",
    locale: "en",
    sortOrder: 1,
    status: "planned",
    title: "Korean Self Introduction Kit",
    description: "Give a simple self introduction in a formal setting.",
    level: "Beginner",
    purpose: "Introduce yourself in professional Korean.",
    roles: [
      {
        name: "Interviewer",
        description: "Asks for a brief self introduction.",
      },
      {
        name: "Applicant",
        description: "Introduces background and interest.",
      },
    ],
    phrases: [],
    dialogue: [],
    quiz: [],
    assets: {
      pdf: "/files/en/career-self-introduction.pdf",
      anki: "/files/en/career-self-introduction.apkg",
    },
    cta: {
      label: "Practice this in Koko",
      href: "/go/career-self-introduction-koko",
    },
  },
  {
    slug: "job-interview",
    category: "career",
    locale: "en",
    sortOrder: 2,
    status: "planned",
    title: "Korean Job Interview Kit",
    description: "Practice simple answers for basic interview questions.",
    level: "Beginner",
    purpose: "Answer basic Korean interview questions.",
    roles: [
      {
        name: "Interviewer",
        description: "Asks basic interview questions.",
      },
      {
        name: "Applicant",
        description: "Answers with simple professional phrases.",
      },
    ],
    phrases: [],
    dialogue: [],
    quiz: [],
    assets: {
      pdf: "/files/en/career-job-interview.pdf",
      anki: "/files/en/career-job-interview.apkg",
    },
    cta: {
      label: "Practice this in Koko",
      href: "/go/career-job-interview-koko",
    },
  },
];
