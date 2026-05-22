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
    title: "Korean Cafe Ordering",
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
        romanization: "Mwo deurilkkayo?",
      },
      {
        speaker: "Customer",
        korean: "아이스 아메리카노 하나 주세요.",
        english: "One iced Americano, please.",
        romanization: "Aiseu amerikano hana juseyo.",
      },
      {
        speaker: "Staff",
        korean: "드시고 가세요?",
        english: "For here?",
        romanization: "Deusigo gaseyo?",
      },
      {
        speaker: "Customer",
        korean: "포장해 주세요.",
        english: "To go, please.",
        romanization: "Pojanghae juseyo.",
      },
    ],
    quiz: [
      {
        role: "You are the customer.",
        prompt: "Staff says: 뭐 드릴까요?",
        promptTranslation: "What would you like?",
        question: "What do you say to order one iced Americano?",
        options: [
          {
            korean: "아이스 아메리카노 하나 주세요.",
            english: "One iced Americano, please.",
            romanization: "Aiseu amerikano hana juseyo.",
          },
          {
            korean: "포장해 주세요.",
            english: "To go, please.",
            romanization: "Pojanghae juseyo.",
          },
          {
            korean: "영수증 주세요.",
            english: "Can I get a receipt?",
            romanization: "Yeongsujeung juseyo.",
          },
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
        options: [
          {
            korean: "포장해 주세요.",
            english: "To go, please.",
            romanization: "Pojanghae juseyo.",
          },
          {
            korean: "여기서 마실게요.",
            english: "I'll drink it here.",
            romanization: "Yeogiseo masilgeyo.",
          },
          {
            korean: "카드로 할게요.",
            english: "I'll pay by card.",
            romanization: "Kadeuro halgeyo.",
          },
        ],
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
          {
            korean: "여기서 마실게요.",
            english: "I'll drink it here.",
            romanization: "Yeogiseo masilgeyo.",
          },
          {
            korean: "영수증 주세요.",
            english: "Can I get a receipt?",
            romanization: "Yeongsujeung juseyo.",
          },
          {
            korean: "아이스 아메리카노 하나 주세요.",
            english: "One iced Americano, please.",
            romanization: "Aiseu amerikano hana juseyo.",
          },
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
        options: [
          {
            korean: "영수증 주세요.",
            english: "Can I get a receipt?",
            romanization: "Yeongsujeung juseyo.",
          },
          {
            korean: "카드로 할게요.",
            english: "I'll pay by card.",
            romanization: "Kadeuro halgeyo.",
          },
          {
            korean: "포장해 주세요.",
            english: "To go, please.",
            romanization: "Pojanghae juseyo.",
          },
        ],
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
    status: "content-ready",
    title: "Korean Restaurant Ordering",
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
    phrases: [
      {
        korean: "두 명이요.",
        english: "Two people.",
        romanization: "Du myeong-iyo.",
        tip: "Use 한 명 (1), 두 명 (2), 세 명 (3) — 명 is the counter for people.",
      },
      {
        korean: "김치찌개 하나 주세요.",
        english: "One kimchi stew, please.",
        romanization: "Gimchijjigae hana juseyo.",
        tip: "Swap 김치찌개 for any dish; 하나 means one.",
      },
      {
        korean: "물 좀 주세요.",
        english: "Some water, please.",
        romanization: "Mul jom juseyo.",
        tip: "좀 softens the request — common at the table.",
      },
      {
        korean: "휴지 좀 주세요.",
        english: "Some tissues, please.",
        romanization: "Hyuji jom juseyo.",
        tip: "Korean restaurants don't always set napkins out — this is useful.",
      },
      {
        korean: "계산할게요.",
        english: "I'll pay / Check, please.",
        romanization: "Gyesanhalgeyo.",
        tip: "Say this at the counter — most Korean restaurants pay up front.",
      },
    ],
    dialogue: [
      {
        speaker: "Staff",
        korean: "몇 분이세요?",
        english: "How many people?",
        romanization: "Myeot bunisseyo?",
      },
      {
        speaker: "Customer",
        korean: "두 명이요.",
        english: "Two people.",
        romanization: "Du myeong-iyo.",
      },
      {
        speaker: "Staff",
        korean: "주문하시겠어요?",
        english: "Are you ready to order?",
        romanization: "Jumunhasigesseoyo?",
      },
      {
        speaker: "Customer",
        korean: "김치찌개 하나 주세요.",
        english: "One kimchi stew, please.",
        romanization: "Gimchijjigae hana juseyo.",
      },
    ],
    quiz: [
      {
        role: "You are the customer.",
        prompt: "Staff says: 몇 분이세요?",
        promptTranslation: "How many people?",
        question: "There are two of you. What do you say?",
        options: [
          {
            korean: "두 명이요.",
            english: "Two people.",
            romanization: "Du myeong-iyo.",
          },
          {
            korean: "김치찌개 하나 주세요.",
            english: "One kimchi stew, please.",
            romanization: "Gimchijjigae hana juseyo.",
          },
          {
            korean: "계산할게요.",
            english: "I'll pay / Check, please.",
            romanization: "Gyesanhalgeyo.",
          },
        ],
        answerIndex: 0,
        explanation:
          "Good. 두 명이요 uses 두 (two) + 명 (counter for people).",
      },
      {
        role: "You are the customer.",
        prompt: "Staff says: 주문하시겠어요?",
        promptTranslation: "Are you ready to order?",
        question: "You want one kimchi stew. What do you say?",
        options: [
          {
            korean: "김치찌개 하나 주세요.",
            english: "One kimchi stew, please.",
            romanization: "Gimchijjigae hana juseyo.",
          },
          {
            korean: "물 좀 주세요.",
            english: "Some water, please.",
            romanization: "Mul jom juseyo.",
          },
          {
            korean: "두 명이요.",
            english: "Two people.",
            romanization: "Du myeong-iyo.",
          },
        ],
        answerIndex: 0,
        explanation:
          "Good. [dish] 하나 주세요 is the basic ordering pattern.",
      },
      {
        role: "You are at the table.",
        prompt: "You need water mid-meal.",
        promptTranslation: "Asking for a refill.",
        question: "What do you say to the staff?",
        options: [
          {
            korean: "물 좀 주세요.",
            english: "Some water, please.",
            romanization: "Mul jom juseyo.",
          },
          {
            korean: "휴지 좀 주세요.",
            english: "Some tissues, please.",
            romanization: "Hyuji jom juseyo.",
          },
          {
            korean: "계산할게요.",
            english: "I'll pay / Check, please.",
            romanization: "Gyesanhalgeyo.",
          },
        ],
        answerIndex: 0,
        explanation: "Good. 물 좀 주세요 politely asks for water.",
      },
      {
        role: "You are finished eating.",
        prompt: "You walk up to the counter to settle the bill.",
        promptTranslation: "Time to pay.",
        question: "What do you say?",
        options: [
          {
            korean: "계산할게요.",
            english: "I'll pay / Check, please.",
            romanization: "Gyesanhalgeyo.",
          },
          {
            korean: "주문하시겠어요?",
            english: "Are you ready to order?",
            romanization: "Jumunhasigesseoyo?",
          },
          {
            korean: "물 좀 주세요.",
            english: "Some water, please.",
            romanization: "Mul jom juseyo.",
          },
        ],
        answerIndex: 0,
        explanation: "Good. 계산할게요 means \"I'll pay / Check, please.\"",
      },
    ],
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
    status: "content-ready",
    title: "Korean First Meeting",
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
    phrases: [
      {
        korean: "처음 뵙겠습니다.",
        english: "Nice to meet you. (formal first meeting)",
        romanization: "Cheoeum boepgesseumnida.",
        tip: "The standard polite opener for a true first meeting.",
      },
      {
        korean: "어디서 오셨어요?",
        english: "Where are you from?",
        romanization: "Eodiseo osyeosseoyo?",
        tip: "A common follow-up question after greetings.",
      },
      {
        korean: "저는 미국에서 왔어요.",
        english: "I'm from the U.S.",
        romanization: "Jeoneun migugeseo wasseoyo.",
        tip: "Swap 미국 for your country (한국 Korea, 일본 Japan, etc.).",
      },
      {
        korean: "한국어를 배우고 있어요.",
        english: "I'm learning Korean.",
        romanization: "Hangugeoreul baeugo isseoyo.",
        tip: "A natural reply when someone compliments your Korean.",
      },
      {
        korean: "만나서 반가워요.",
        english: "Nice to meet you.",
        romanization: "Mannaseo bangawoyo.",
        tip: "Use this to close out the introduction warmly.",
      },
    ],
    dialogue: [
      {
        speaker: "New Person",
        korean: "처음 뵙겠습니다. 어디서 오셨어요?",
        english: "Nice to meet you. Where are you from?",
        romanization: "Cheoeum boepgesseumnida. Eodiseo osyeosseoyo?",
      },
      {
        speaker: "You",
        korean: "저는 미국에서 왔어요.",
        english: "I'm from the U.S.",
        romanization: "Jeoneun migugeseo wasseoyo.",
      },
      {
        speaker: "New Person",
        korean: "한국어 잘하시네요.",
        english: "Your Korean is good.",
        romanization: "Hangugeo jalhasineyo.",
      },
      {
        speaker: "You",
        korean: "한국어를 배우고 있어요.",
        english: "I'm learning Korean.",
        romanization: "Hangugeoreul baeugo isseoyo.",
      },
    ],
    quiz: [
      {
        role: "You are meeting someone for the first time.",
        prompt: "You step forward to greet them formally.",
        promptTranslation: "It is the very first moment of the meeting.",
        question: "What do you say?",
        options: [
          {
            korean: "처음 뵙겠습니다.",
            english: "Nice to meet you. (formal first meeting)",
            romanization: "Cheoeum boepgesseumnida.",
          },
          {
            korean: "만나서 반가워요.",
            english: "Nice to meet you.",
            romanization: "Mannaseo bangawoyo.",
          },
          {
            korean: "어디서 오셨어요?",
            english: "Where are you from?",
            romanization: "Eodiseo osyeosseoyo?",
          },
        ],
        answerIndex: 0,
        explanation:
          "Good. 처음 뵙겠습니다 is the standard formal opener for a first meeting.",
      },
      {
        role: "You are the foreign learner.",
        prompt: "New person says: 어디서 오셨어요?",
        promptTranslation: "Where are you from?",
        question: "How do you reply naturally?",
        options: [
          {
            korean: "미국에서 왔어요.",
            english: "I'm from the U.S.",
            romanization: "Migugeseo wasseoyo.",
          },
          {
            korean: "한국어를 배우고 있어요.",
            english: "I'm learning Korean.",
            romanization: "Hangugeoreul baeugo isseoyo.",
          },
          {
            korean: "처음 뵙겠습니다.",
            english: "Nice to meet you. (formal first meeting)",
            romanization: "Cheoeum boepgesseumnida.",
          },
        ],
        answerIndex: 0,
        explanation:
          "Good. 미국에서 왔어요 means \"I'm from the U.S.\" Swap the country as needed.",
      },
      {
        role: "You are the foreign learner.",
        prompt: "New person says: 한국어 잘하시네요.",
        promptTranslation: "Your Korean is good.",
        question: "What is a humble, natural reply?",
        options: [
          {
            korean: "한국어를 배우고 있어요.",
            english: "I'm learning Korean.",
            romanization: "Hangugeoreul baeugo isseoyo.",
          },
          {
            korean: "어디서 오셨어요?",
            english: "Where are you from?",
            romanization: "Eodiseo osyeosseoyo?",
          },
          {
            korean: "만나서 반가워요.",
            english: "Nice to meet you.",
            romanization: "Mannaseo bangawoyo.",
          },
        ],
        answerIndex: 0,
        explanation:
          "Good. 한국어를 배우고 있어요 (or 아직 배우고 있어요) gently deflects the compliment.",
      },
      {
        role: "You are wrapping up the introduction.",
        prompt: "You shake hands and want to close warmly.",
        promptTranslation: "End of the introduction.",
        question: "What do you say?",
        options: [
          {
            korean: "만나서 반가워요.",
            english: "Nice to meet you.",
            romanization: "Mannaseo bangawoyo.",
          },
          {
            korean: "처음 뵙겠습니다.",
            english: "Nice to meet you. (formal first meeting)",
            romanization: "Cheoeum boepgesseumnida.",
          },
          {
            korean: "미국에서 왔어요.",
            english: "I'm from the U.S.",
            romanization: "Migugeseo wasseoyo.",
          },
        ],
        answerIndex: 0,
        explanation:
          "Good. 만나서 반가워요 closes the introduction with warmth.",
      },
    ],
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
    status: "content-ready",
    title: "Korean Texting",
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
    phrases: [
      {
        korean: "뭐 해?",
        english: "What are you doing?",
        romanization: "Mwo hae?",
        tip: "Casual 반말. Only use with close friends or peers — never seniors.",
      },
      {
        korean: "나 방금 도착했어.",
        english: "I just arrived.",
        romanization: "Na banggeum dochakhaesseo.",
        tip: "방금 = just now. Common when meeting up.",
      },
      {
        korean: "조금 늦을 것 같아.",
        english: "I think I'll be a little late.",
        romanization: "Jogeum neujeul geot gata.",
        tip: "-ㄹ 것 같아 softens to a guess (\"I think...\").",
      },
      {
        korean: "괜찮아?",
        english: "Are you ok?",
        romanization: "Gwaenchana?",
        tip: "Versatile — checking on someone or accepting an apology.",
      },
      {
        korean: "나중에 연락할게.",
        english: "I'll contact you later.",
        romanization: "Najunge yeollakhalge.",
        tip: "Use to politely end a chat when you're busy.",
      },
    ],
    dialogue: [
      {
        speaker: "Friend",
        korean: "뭐 해?",
        english: "What are you doing?",
        romanization: "Mwo hae?",
      },
      {
        speaker: "You",
        korean: "나 방금 도착했어.",
        english: "I just arrived.",
        romanization: "Na banggeum dochakhaesseo.",
      },
      {
        speaker: "Friend",
        korean: "미안, 조금 늦을 것 같아.",
        english: "Sorry, I think I'll be a little late.",
        romanization: "Mian, jogeum neujeul geot gata.",
      },
      {
        speaker: "You",
        korean: "괜찮아.",
        english: "It's fine.",
        romanization: "Gwaenchana.",
      },
    ],
    quiz: [
      {
        role: "You are chatting casually with a friend.",
        prompt: "Friend texts: 도착했어?",
        promptTranslation: "Are you here?",
        question: "You arrived a moment ago. What do you reply?",
        options: [
          {
            korean: "나 방금 도착했어.",
            english: "I just arrived.",
            romanization: "Na banggeum dochakhaesseo.",
          },
          {
            korean: "조금 늦을 것 같아.",
            english: "I think I'll be a little late.",
            romanization: "Jogeum neujeul geot gata.",
          },
          {
            korean: "나중에 연락할게.",
            english: "I'll contact you later.",
            romanization: "Najunge yeollakhalge.",
          },
        ],
        answerIndex: 0,
        explanation:
          "Good. 나 방금 도착했어 means \"I just arrived.\"",
      },
      {
        role: "You are running late.",
        prompt: "You need to warn your friend.",
        promptTranslation: "Heads up about delay.",
        question: "What do you text?",
        options: [
          {
            korean: "조금 늦을 것 같아.",
            english: "I think I'll be a little late.",
            romanization: "Jogeum neujeul geot gata.",
          },
          {
            korean: "괜찮아?",
            english: "Are you ok?",
            romanization: "Gwaenchana?",
          },
          {
            korean: "뭐 해?",
            english: "What are you doing?",
            romanization: "Mwo hae?",
          },
        ],
        answerIndex: 0,
        explanation:
          "Good. 조금 늦을 것 같아 softens it with \"I think...\" — natural for chat.",
      },
      {
        role: "Your friend just apologized for being late.",
        prompt: "Friend texts: 조금 늦을 것 같아.",
        promptTranslation: "I think I'll be a little late.",
        question: "What is a kind, casual reply?",
        options: [
          {
            korean: "괜찮아.",
            english: "It's fine.",
            romanization: "Gwaenchana.",
          },
          {
            korean: "뭐 해?",
            english: "What are you doing?",
            romanization: "Mwo hae?",
          },
          {
            korean: "나중에 연락할게.",
            english: "I'll contact you later.",
            romanization: "Najunge yeollakhalge.",
          },
        ],
        answerIndex: 0,
        explanation:
          "Good. 괜찮아 means \"it's okay\" — accepts the apology warmly.",
      },
      {
        role: "You are busy and can't chat right now.",
        prompt: "You want to end the chat politely.",
        promptTranslation: "Closing the conversation.",
        question: "What do you text?",
        options: [
          {
            korean: "나중에 연락할게.",
            english: "I'll contact you later.",
            romanization: "Najunge yeollakhalge.",
          },
          {
            korean: "괜찮아?",
            english: "Are you ok?",
            romanization: "Gwaenchana?",
          },
          {
            korean: "나 방금 도착했어.",
            english: "I just arrived.",
            romanization: "Na banggeum dochakhaesseo.",
          },
        ],
        answerIndex: 0,
        explanation:
          "Good. 나중에 연락할게 means \"I'll contact you later.\"",
      },
    ],
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
    status: "content-ready",
    title: "Korean Self Introduction",
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
    phrases: [
      {
        korean: "안녕하세요, 저는 제임스입니다.",
        english: "Hello, I'm James.",
        romanization: "Annyeonghaseyo, jeoneun Jeimseu-imnida.",
        tip: "Swap 제임스 for your own name; keep -입니다 for the formal register.",
      },
      {
        korean: "마케팅을 공부했습니다.",
        english: "I studied marketing.",
        romanization: "Maketingeul gongbuhaesseumnida.",
        tip: "Replace 마케팅 with your field (디자인 design, 개발 development, etc.).",
      },
      {
        korean: "한국어를 배우고 있습니다.",
        english: "I'm learning Korean.",
        romanization: "Hangugeoreul baeugo itseumnida.",
        tip: "Formal version of 배우고 있어요 — use -습니다 in interviews.",
      },
      {
        korean: "이 분야에 관심이 많습니다.",
        english: "I'm very interested in this field.",
        romanization: "I bunyae gwansimi manseumnida.",
        tip: "Signals motivation for the role without overpromising.",
      },
      {
        korean: "잘 부탁드립니다.",
        english: "Thank you in advance. (Please look after me.)",
        romanization: "Jal butakdeurimnida.",
        tip: "The standard polite closer when ending an introduction.",
      },
    ],
    dialogue: [
      {
        speaker: "Interviewer",
        korean: "간단히 자기소개 부탁드립니다.",
        english: "Please briefly introduce yourself.",
        romanization: "Gandanhi jagisogae butakdeurimnida.",
      },
      {
        speaker: "Applicant",
        korean: "안녕하세요, 저는 제임스입니다.",
        english: "Hello, I'm James.",
        romanization: "Annyeonghaseyo, jeoneun Jeimseu-imnida.",
      },
      {
        speaker: "Applicant",
        korean: "마케팅을 공부했고, 이 분야에 관심이 많습니다.",
        english: "I studied marketing and I'm very interested in this field.",
        romanization: "Maketingeul gongbuhaetgo, i bunyae gwansimi manseumnida.",
      },
      {
        speaker: "Applicant",
        korean: "잘 부탁드립니다.",
        english: "Thank you in advance.",
        romanization: "Jal butakdeurimnida.",
      },
    ],
    quiz: [
      {
        role: "You are the applicant.",
        prompt: "Interviewer says: 간단히 자기소개 부탁드립니다.",
        promptTranslation: "Please briefly introduce yourself.",
        question: "How do you open your introduction?",
        options: [
          {
            korean: "안녕하세요, 저는 제임스입니다.",
            english: "Hello, I'm James.",
            romanization: "Annyeonghaseyo, jeoneun Jeimseu-imnida.",
          },
          {
            korean: "잘 부탁드립니다.",
            english: "Thank you in advance.",
            romanization: "Jal butakdeurimnida.",
          },
          {
            korean: "이 분야에 관심이 많습니다.",
            english: "I'm very interested in this field.",
            romanization: "I bunyae gwansimi manseumnida.",
          },
        ],
        answerIndex: 0,
        explanation:
          "Good. Start with 안녕하세요, 저는 [name]입니다 to open formally.",
      },
      {
        role: "You are the applicant.",
        prompt: "You want to mention your study background.",
        promptTranslation: "Talking about academic background.",
        question: "How do you say you studied marketing?",
        options: [
          {
            korean: "마케팅을 공부했습니다.",
            english: "I studied marketing.",
            romanization: "Maketingeul gongbuhaesseumnida.",
          },
          {
            korean: "한국어를 배우고 있습니다.",
            english: "I'm learning Korean.",
            romanization: "Hangugeoreul baeugo itseumnida.",
          },
          {
            korean: "안녕하세요, 저는 제임스입니다.",
            english: "Hello, I'm James.",
            romanization: "Annyeonghaseyo, jeoneun Jeimseu-imnida.",
          },
        ],
        answerIndex: 0,
        explanation:
          "Good. 마케팅을 공부했습니다 means \"I studied marketing.\" Swap the field as needed.",
      },
      {
        role: "You are the applicant.",
        prompt: "You want to show motivation for the role.",
        promptTranslation: "Signaling interest in the field.",
        question: "What do you say?",
        options: [
          {
            korean: "이 분야에 관심이 많습니다.",
            english: "I'm very interested in this field.",
            romanization: "I bunyae gwansimi manseumnida.",
          },
          {
            korean: "마케팅을 공부했습니다.",
            english: "I studied marketing.",
            romanization: "Maketingeul gongbuhaesseumnida.",
          },
          {
            korean: "잘 부탁드립니다.",
            english: "Thank you in advance.",
            romanization: "Jal butakdeurimnida.",
          },
        ],
        answerIndex: 0,
        explanation:
          "Good. 이 분야에 관심이 많습니다 expresses strong interest in the field.",
      },
      {
        role: "You are the applicant.",
        prompt: "You are about to bow and finish the introduction.",
        promptTranslation: "Wrapping up.",
        question: "What is the standard closer?",
        options: [
          {
            korean: "잘 부탁드립니다.",
            english: "Thank you in advance.",
            romanization: "Jal butakdeurimnida.",
          },
          {
            korean: "한국어를 배우고 있습니다.",
            english: "I'm learning Korean.",
            romanization: "Hangugeoreul baeugo itseumnida.",
          },
          {
            korean: "안녕하세요, 저는 제임스입니다.",
            english: "Hello, I'm James.",
            romanization: "Annyeonghaseyo, jeoneun Jeimseu-imnida.",
          },
        ],
        answerIndex: 0,
        explanation:
          "Good. 잘 부탁드립니다 is the polite, expected closer.",
      },
    ],
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
    status: "content-ready",
    title: "Korean Job Interview",
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
    phrases: [
      {
        korean: "지원 동기를 말씀해 주세요.",
        english: "Please tell me why you applied.",
        romanization: "Jiwon donggireul malsseumhae juseyo.",
        tip: "A standard opener — recognize this, then answer with motivation.",
      },
      {
        korean: "이 회사에 관심이 많습니다.",
        english: "I'm very interested in this company.",
        romanization: "I hoesa-e gwansimi manseumnida.",
        tip: "A safe, polite motivation line — add a specific reason after.",
      },
      {
        korean: "제 장점은 책임감입니다.",
        english: "My strength is responsibility.",
        romanization: "Je jangjeomeun chaegimgam-imnida.",
        tip: "Swap 책임감 for 성실함 (diligence), 협동심 (teamwork), etc.",
      },
      {
        korean: "팀으로 일하는 것을 좋아합니다.",
        english: "I like working as a team.",
        romanization: "Timeuro ilhaneun geoseul joahamnida.",
        tip: "Useful for collaboration-focused roles.",
      },
      {
        korean: "감사합니다.",
        english: "Thank you.",
        romanization: "Gamsahamnida.",
        tip: "Standard formal close — bow slightly when saying it.",
      },
    ],
    dialogue: [
      {
        speaker: "Interviewer",
        korean: "지원 동기를 말씀해 주세요.",
        english: "Please tell me why you applied.",
        romanization: "Jiwon donggireul malsseumhae juseyo.",
      },
      {
        speaker: "Applicant",
        korean: "이 회사의 성장 가능성에 관심이 많습니다.",
        english: "I'm interested in this company's growth potential.",
        romanization: "I hoesa-ui seongjang ganeungseong-e gwansimi manseumnida.",
      },
      {
        speaker: "Interviewer",
        korean: "본인의 장점은 무엇인가요?",
        english: "What is your strength?",
        romanization: "Bonine jangjeomeun mueosingayo?",
      },
      {
        speaker: "Applicant",
        korean: "제 장점은 책임감입니다.",
        english: "My strength is responsibility.",
        romanization: "Je jangjeomeun chaegimgam-imnida.",
      },
    ],
    quiz: [
      {
        role: "You are the applicant.",
        prompt: "Interviewer says: 지원 동기를 말씀해 주세요.",
        promptTranslation: "Please tell me why you applied.",
        question: "How do you start your motivation answer?",
        options: [
          {
            korean: "이 회사에 관심이 많습니다.",
            english: "I'm very interested in this company.",
            romanization: "I hoesa-e gwansimi manseumnida.",
          },
          {
            korean: "제 장점은 책임감입니다.",
            english: "My strength is responsibility.",
            romanization: "Je jangjeomeun chaegimgam-imnida.",
          },
          {
            korean: "감사합니다.",
            english: "Thank you.",
            romanization: "Gamsahamnida.",
          },
        ],
        answerIndex: 0,
        explanation:
          "Good. 이 회사에 관심이 많습니다 opens your motivation cleanly.",
      },
      {
        role: "You are the applicant.",
        prompt: "Interviewer says: 본인의 장점은 무엇인가요?",
        promptTranslation: "What is your strength?",
        question: "How do you state your strength?",
        options: [
          {
            korean: "제 장점은 책임감입니다.",
            english: "My strength is responsibility.",
            romanization: "Je jangjeomeun chaegimgam-imnida.",
          },
          {
            korean: "팀으로 일하는 것을 좋아합니다.",
            english: "I like working as a team.",
            romanization: "Timeuro ilhaneun geoseul joahamnida.",
          },
          {
            korean: "이 회사에 관심이 많습니다.",
            english: "I'm very interested in this company.",
            romanization: "I hoesa-e gwansimi manseumnida.",
          },
        ],
        answerIndex: 0,
        explanation:
          "Good. 제 장점은 [trait]입니다 is the standard pattern.",
      },
      {
        role: "You are the applicant.",
        prompt: "You want to highlight collaboration skills.",
        promptTranslation: "Talking about teamwork.",
        question: "What do you say?",
        options: [
          {
            korean: "팀으로 일하는 것을 좋아합니다.",
            english: "I like working as a team.",
            romanization: "Timeuro ilhaneun geoseul joahamnida.",
          },
          {
            korean: "제 장점은 책임감입니다.",
            english: "My strength is responsibility.",
            romanization: "Je jangjeomeun chaegimgam-imnida.",
          },
          {
            korean: "지원 동기를 말씀해 주세요.",
            english: "Please tell me why you applied.",
            romanization: "Jiwon donggireul malsseumhae juseyo.",
          },
        ],
        answerIndex: 0,
        explanation:
          "Good. 팀으로 일하는 것을 좋아합니다 means \"I like working as a team.\"",
      },
      {
        role: "You are the applicant.",
        prompt: "The interview is wrapping up.",
        promptTranslation: "Final words.",
        question: "What is the formal close?",
        options: [
          {
            korean: "감사합니다.",
            english: "Thank you.",
            romanization: "Gamsahamnida.",
          },
          {
            korean: "괜찮아?",
            english: "Are you ok?",
            romanization: "Gwaenchana?",
          },
          {
            korean: "이 회사에 관심이 많습니다.",
            english: "I'm very interested in this company.",
            romanization: "I hoesa-e gwansimi manseumnida.",
          },
        ],
        answerIndex: 0,
        explanation:
          "Good. 감사합니다 is the formal \"thank you\" — bow slightly.",
      },
    ],
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
