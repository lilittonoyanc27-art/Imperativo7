/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Example {
  spanish: string;
  armenian: string;
}

export interface ConjugationTable {
  headers: string[];
  rows: string[][];
}

export interface Chapter {
  id: number;
  title: string;
  content: string;
  examples?: Example[];
  table?: ConjugationTable;
  additionalNotes?: string;
}

export interface VerbInfo {
  infinitive: string;
  translation: string;
  type: 'regular' | 'irregular' | 'stem-changing';
  group: '-ar' | '-er' | '-ir';
  change?: string; // e.g., 'e -> ie', 'o -> ue', 'e -> i', 'u -> ue'
  afirmativo: {
    tú: string;
    usted: string;
    nosotros: string;
    vosotros: string;
    ustedes: string;
  };
  negativo: {
    tú: string;
    usted: string;
    nosotros: string;
    vosotros: string;
    ustedes: string;
  };
}

// Game 1: Match Linker
export interface MatchItem {
  id: string;
  spanish: string;
  armenian: string;
}

// Game 2: Conjugation Constructor
export interface ConstructorChallenge {
  id: string;
  verb: string;
  translation: string;
  person: string; // e.g. "tú", "usted", etc.
  armenianPerson: string; // e.g. "դու", "Դուք"
  isPositive: boolean;
  correctAnswer: string;
  scrambledLetters: string[];
}

// Game 3: Sentence Fixer
export interface FixerChallenge {
  id: string;
  sentence: string;
  explanation: string;
  options: { text: string; isCorrect: boolean }[];
  armenianTranslation: string;
}

// Game 4: Reflexive Action
export interface ReflexiveChallenge {
  id: string;
  verb: string; // e.g., "irse"
  instruction: string; // e.g., "Ժխտական, tú"
  correctAnswer: string; // "no te vayas"
  options: string[];
  explanation: string;
}

// Game 5: Dialogue Roleplay
export interface DialogueLine {
  id: string;
  speaker: string; // "Profesora" | "Carlos" | "Lucía"
  textTemplate: string; // "Carlos, {blank}, por favor."
  blankValue: string; // "lee el texto"
  fullText: string;
  armenianText: string;
}

// Game 6: Quiz
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  armenianExplanation: string;
}
