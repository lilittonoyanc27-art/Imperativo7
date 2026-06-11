/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MatchItem, ConstructorChallenge, FixerChallenge, ReflexiveChallenge, DialogueLine, QuizQuestion } from './types';
import { Play, RotateCcw, CheckCircle2, AlertCircle, Award, Volume2, Trophy, HelpCircle, FileQuestion, MessageSquarePlus, RefreshCw } from 'lucide-react';

export default function GamesContainer() {
  const [activeGame, setActiveGame] = useState<number | null>(null);
  const [gameScore, setGameScore] = useState<number>(0);
  const [gamesCompleted, setGamesCompleted] = useState<number[]>([]);
  const [overallHighscore, setOverallHighscore] = useState<number>(() => {
    return Number(localStorage.getItem('imperativo_highscore') || '0');
  });

  const updateScore = (points: number) => {
    setGameScore((prev) => {
      const newScore = prev + points;
      if (newScore > overallHighscore) {
        setOverallHighscore(newScore);
        localStorage.setItem('imperativo_highscore', String(newScore));
      }
      return newScore;
    });
  };

  // -------------------------------------------------------------
  // GAME 1: Form Linker (Ձևերի համապատասխանեցում)
  // -------------------------------------------------------------
  const [g1LeftItems, setG1LeftItems] = useState<MatchItem[]>([]);
  const [g1RightItems, setG1RightItems] = useState<MatchItem[]>([]);
  const [g1SelectedLeft, setG1SelectedLeft] = useState<string | null>(null);
  const [g1SelectedRight, setG1SelectedRight] = useState<string | null>(null);
  const [g1MatchedIds, setG1MatchedIds] = useState<string[]>([]);
  const [g1FailedCount, setG1FailedCount] = useState<number>(0);

  const initGame1 = () => {
    const rawPairs = [
      { id: '1', spanish: 'Habla más despacio.', armenian: 'Խոսի՛ր ավելի դանդաղ։' },
      { id: '2', spanish: 'No hables comigo.', armenian: 'Ինձ հետ մի՛ խոսիր։' },
      { id: '3', spanish: 'Dámelo.', armenian: 'Տուր դա ինձ։' },
      { id: '4', spanish: 'No me lo des.', armenian: 'Մի՛ տուր դա ինձ։' },
      { id: '5', spanish: 'Haz la tarea.', armenian: 'Արա տնայինը։' },
      { id: '6', spanish: 'Levántate temprano.', armenian: 'Շուտ վեր կաց։' },
      { id: '7', spanish: 'No te vayas.', armenian: 'Մի՛ գնա։' },
      { id: '8', spanish: 'No digas mentiras.', armenian: 'Սուտ մի՛ ասա։' }
    ];

    // Select 5 random pairs
    const selected = [...rawPairs].sort(() => Math.random() - 0.5).slice(0, 5);

    setG1LeftItems([...selected].sort(() => Math.random() - 0.5));
    setG1RightItems([...selected].sort(() => Math.random() - 0.5));
    setG1SelectedLeft(null);
    setG1SelectedRight(null);
    setG1MatchedIds([]);
    setG1FailedCount(0);
  };

  const handleG1LeftClick = (id: string) => {
    if (g1MatchedIds.includes(id)) return;
    setG1SelectedLeft(id);
    if (g1SelectedRight) {
      verifyG1Pair(id, g1SelectedRight);
    }
  };

  const handleG1RightClick = (id: string) => {
    if (g1MatchedIds.includes(id)) return;
    setG1SelectedRight(id);
    if (g1SelectedLeft) {
      verifyG1Pair(g1SelectedLeft, id);
    }
  };

  const verifyG1Pair = (leftId: string, rightId: string) => {
    if (leftId === rightId) {
      setG1MatchedIds((p) => [...p, leftId]);
      updateScore(20);
    } else {
      setG1FailedCount((v) => v + 1);
    }
    setG1SelectedLeft(null);
    setG1SelectedRight(null);
  };

  // -------------------------------------------------------------
  // GAME 2: Conjugation Constructor (Խոնարհման կառուցող)
  // -------------------------------------------------------------
  const [g2Challenges, setG2Challenges] = useState<ConstructorChallenge[]>([]);
  const [g2Index, setG2Index] = useState<number>(0);
  const [g2UserLetters, setG2UserLetters] = useState<string[]>([]);
  const [g2Status, setG2Status] = useState<'pending' | 'correct' | 'wrong'>('pending');

  const initGame2 = () => {
    const raw: ConstructorChallenge[] = [
      { id: '1', verb: 'hacer', translation: 'անել', person: 'tú', armenianPerson: 'դու', isPositive: true, correctAnswer: 'haz', scrambledLetters: ['z', 'a', 'h', 'o', 'r'] },
      { id: '2', verb: 'decir', translation: 'ասել', person: 'tú', armenianPerson: 'դու', isPositive: true, correctAnswer: 'di', scrambledLetters: ['i', 'd', 'e', 's', 'p'] },
      { id: '3', verb: 'poner', translation: 'դնել', person: 'tú', armenianPerson: 'դու', isPositive: true, correctAnswer: 'pon', scrambledLetters: ['n', 'p', 'o', 'r', 'e'] },
      { id: '4', verb: 'venir', translation: 'գալ', person: 'tú', armenianPerson: 'դու', isPositive: true, correctAnswer: 'ven', scrambledLetters: ['v', 'e', 'n', 't', 's'] },
      { id: '5', verb: 'ir', translation: 'գնալ', person: 'tú', armenianPerson: 'դու', isPositive: true, correctAnswer: 've', scrambledLetters: ['e', 'v', 'a', 'r', 'd'] },
      { id: '6', verb: 'ser', translation: 'լինել', person: 'tú', armenianPerson: 'դու', isPositive: true, correctAnswer: 'sé', scrambledLetters: ['é', 's', 'r', 'v', 'o'] },
      { id: '7', verb: 'decir', translation: 'ասել', person: 'tú', armenianPerson: 'դու', isPositive: false, correctAnswer: 'no digas', scrambledLetters: ['n', 'o', ' ', 'd', 'i', 'g', 'a', 's', 'm', 't'] }
    ];
    setG2Challenges(raw.sort(() => Math.random() - 0.5));
    setG2Index(0);
    setG2UserLetters([]);
    setG2Status('pending');
  };

  const pressG2Letter = (letter: string, idx: number) => {
    if (g2Status !== 'pending') return;
    setG2UserLetters((u) => [...u, letter]);
  };

  const removeG2Letter = (idx: number) => {
    if (g2Status !== 'pending') return;
    setG2UserLetters((u) => u.filter((_, i) => i !== idx));
  };

  const checkG2Answer = () => {
    const current = g2Challenges[g2Index];
    const candidate = g2UserLetters.join('').trim().toLowerCase();
    if (candidate === current.correctAnswer.toLowerCase()) {
      setG2Status('correct');
      updateScore(30);
    } else {
      setG2Status('wrong');
    }
  };

  const nextG2 = () => {
    if (g2Index < g2Challenges.length - 1) {
      setG2Index((i) => i + 1);
      setG2UserLetters([]);
      setG2Status('pending');
    } else {
      // finish
      setActiveGame(null);
      if (!gamesCompleted.includes(2)) setGamesCompleted((c) => [...c, 2]);
    }
  };

  // -------------------------------------------------------------
  // GAME 3: Sentence Fixer (Սխալների ուղղում)
  // -------------------------------------------------------------
  const [g3Challenges, setG3Challenges] = useState<FixerChallenge[]>([]);
  const [g3Index, setG3Index] = useState<number>(0);
  const [g3SelectedOption, setG3SelectedOption] = useState<number | null>(null);
  const [g3IsChecked, setG3IsChecked] = useState<boolean>(false);

  const initGame3 = () => {
    const raw: FixerChallenge[] = [
      {
        id: '1',
        sentence: 'Ինչպե՞ս ճիշտ ասել. "Մի՛ վախեցիր" իսպաներենով։',
        armenianTranslation: 'Մի՛ վախեցիր',
        options: [
          { text: 'No tengas miedo.', isCorrect: true },
          { text: 'No ten miedo.', isCorrect: false },
          { text: 'No tenas miedo.', isCorrect: false }
        ],
        explanation: 'Tener բայի ժխտական հրամայականի tú ձևը ստացվում է Subjuntivo-ով՝ "no tengas"։'
      },
      {
        id: '2',
        sentence: 'Գտեք սխալը. "¡No levántate tarde!" (Ուշ վեր մի՛ կաց):',
        armenianTranslation: 'Ուշ վեր մի՛ կաց',
        options: [
          { text: 'No levantarse tarde.', isCorrect: false },
          { text: 'No te levantes tarde.', isCorrect: true },
          { text: 'No levántates tarde.', isCorrect: false }
        ],
        explanation: 'Ժխտական հրամայականում դերանունը միշտ դրվում է բայից առաջ և առանձին ("No te levantes")։'
      },
      {
        id: '3',
        sentence: 'Ինչպե՞ս է ճիշտ միացվում "da + le + lo" (Տուր դա նրան)։',
        armenianTranslation: 'Տուր դա նրան',
        options: [
          { text: 'Dálelo.', isCorrect: false },
          { text: 'Dálole.', isCorrect: false },
          { text: 'Dáselo.', isCorrect: true }
        ],
        explanation: 'Երբ "le" դերանունը նախորդում է "lo/la/los/las"-ին, այն դառնում է "se", իսկ դրականում կպչում է վերջից՝ "Dáselo"։'
      },
      {
        id: '4',
        sentence: 'Ինչպե՞ս ասել. "Խոսեք ավելի դանդաղ" (հարգական Դուք)։',
        armenianTranslation: 'Խոսե՛ք ավելի դանդաղ (հարգական Դուք)',
        options: [
          { text: 'Hable más despacio.', isCorrect: true },
          { text: 'Habla más despacio.', isCorrect: false },
          { text: 'Hablen más despacio.', isCorrect: false }
        ],
        explanation: 'Usted (Դուք) հարգալից ձևը "hablar" բայի համար կազմվում է "hable" (Subjuntivo) վերջավորությամբ։'
      }
    ];
    setG3Challenges(raw);
    setG3Index(0);
    setG3SelectedOption(null);
    setG3IsChecked(false);
  };

  const selectG3Option = (idx: number) => {
    if (g3IsChecked) return;
    setG3SelectedOption(idx);
  };

  const submitG3 = () => {
    if (g3SelectedOption === null) return;
    setG3IsChecked(true);
    const correct = g3Challenges[g3Index].options[g3SelectedOption].isCorrect;
    if (correct) {
      updateScore(25);
    }
  };

  const nextG3 = () => {
    if (g3Index < g3Challenges.length - 1) {
      setG3Index((i) => i + 1);
      setG3SelectedOption(null);
      setG3IsChecked(false);
    } else {
      setActiveGame(null);
      if (!gamesCompleted.includes(3)) setGamesCompleted((c) => [...c, 3]);
    }
  };

  // -------------------------------------------------------------
  // GAME 4: Reflexive Action (Վերադարձական բայեր)
  // -------------------------------------------------------------
  const [g4Challenges, setG4Challenges] = useState<ReflexiveChallenge[]>([]);
  const [g4Index, setG4Index] = useState<number>(0);
  const [g4SelectedAnswer, setG4SelectedAnswer] = useState<string | null>(null);
  const [g4IsChecked, setG4IsChecked] = useState<boolean>(false);

  const initGame4 = () => {
    const raw: ReflexiveChallenge[] = [
      {
        id: '1',
        verb: 'irse',
        instruction: 'Դրական, nosotros (Եկեք գնանք)',
        correctAnswer: 'vámonos',
        options: ['nos vayamos', 'vámonos', 'vamosnos', 'vamonos'],
        explanation: 'Irse բայի դրական nosotros ձևը "vámonos" է։ Բայի "-s" վերջավորությունը կորչում է "nos" կպչելիս։'
      },
      {
        id: '2',
        verb: 'levantarse',
        instruction: 'Ժխտական, tú (Մի՛ արթնացիր / վեր կաց ուշ)',
        correctAnswer: 'no te levantes',
        options: ['no levántate', 'no te levantas', 'no te levantes', 'no levantate'],
        explanation: 'Ժխտական tú ձև վերադարձական բայի համար. "no" + դերանուն + Subjuntivo բայ = "no te levantes"։'
      },
      {
        id: '3',
        verb: 'sentarse',
        instruction: 'Դրական, ustedes (Նստե՛ք)',
        correctAnswer: 'siéntense',
        options: ['sentense', 'siéntense', 'no se sienten', 'sientense'],
        explanation: 'Sentarse բայի դրական ustedes-ը արմատափոխվում է (e -> ie) և ստանում "se" վերջում՝ "siéntense"։'
      },
      {
        id: '4',
        verb: 'ducharse',
        instruction: 'Դրական, tú (Ցնցուղ ընդունիր)',
        correctAnswer: 'dúchate',
        options: ['dúchate', 'no te duches', 'duchate', 'te doucha'],
        explanation: 'Ducharse բայի դրական tú ձևը "dúchate" է։ Դերանունը կպչում է վերջում, և դրվում է շեշտադրման նշան։'
      }
    ];
    setG4Challenges(raw);
    setG4Index(0);
    setG4SelectedAnswer(null);
    setG4IsChecked(false);
  };

  const selectG4Choice = (choice: string) => {
    if (g4IsChecked) return;
    setG4SelectedAnswer(choice);
  };

  const submitG4 = () => {
    if (!g4SelectedAnswer) return;
    setG4IsChecked(true);
    if (g4SelectedAnswer === g4Challenges[g4Index].correctAnswer) {
      updateScore(25);
    }
  };

  const nextG4 = () => {
    if (g4Index < g4Challenges.length - 1) {
      setG4Index((i) => i + 1);
      setG4SelectedAnswer(null);
      setG4IsChecked(false);
    } else {
      setActiveGame(null);
      if (!gamesCompleted.includes(4)) setGamesCompleted((c) => [...c, 4]);
    }
  };

  // -------------------------------------------------------------
  // GAME 5: Dialogue Roleplay (Երկխոսության լրացում)
  // -------------------------------------------------------------
  const [g5Lines, setG5Lines] = useState<DialogueLine[]>([]);
  const [g5Index, setG5Index] = useState<number>(0);
  const [g5Selections, setG5Selections] = useState<string[]>([]);
  const [g5IsCompleted, setG5IsCompleted] = useState<boolean>(false);
  const [g5Feedback, setG5Feedback] = useState<string | null>(null);

  const initGame5 = () => {
    const raw: DialogueLine[] = [
      {
        id: '1',
        speaker: 'Profesora (Ուսուցչուհի)',
        textTemplate: 'Carlos, {blank}, por favor.',
        blankValue: 'lee el texto',
        fullText: 'Carlos, lee el texto, por favor.',
        armenianText: 'Կառլոս, կարդա տեքստը, խնդրում եմ։'
      },
      {
        id: '2',
        speaker: 'Profesora (Ուսուցչուհի)',
        textTemplate: 'Lucía, {blank} y escribe las palabras nuevas.',
        blankValue: 'escucha',
        fullText: 'Lucía, escucha y escribe las palabras nuevas.',
        armenianText: 'Լուսիա, լսիր և գրիր նոր բառերը։'
      },
      {
        id: '3',
        speaker: 'Profesora (Ուսուցչուհի)',
        textTemplate: 'Chicos, no {blank} muy alto. Trabajad juntos.',
        blankValue: 'habléis',
        fullText: 'Chicos, no habléis muy alto. Trabajad juntos.',
        armenianText: 'Երեխաներ, շատ բարձր մի՛ խոսեք։ Աշխատեք միասին։'
      },
      {
        id: '4',
        speaker: 'Profesora (Ուսուցչուհի)',
        textTemplate: 'Pregúntame. No {blank} miedo.',
        blankValue: 'tengas',
        fullText: 'Pregúntame. No tengas miedo.',
        armenianText: 'Հարցրու ինձ։ Մի՛ վախեցիր։'
      }
    ];
    setG5Lines(raw);
    setG5Index(0);
    setG5Selections(['lee el texto', 'no hables', 'escucha', 'habléis', 'tengas', 'seas'].sort(() => Math.random() - 0.5));
    setG5IsCompleted(false);
    setG5Feedback(null);
  };

  const handleG5Drop = (val: string) => {
    if (g5Feedback) return;
    const current = g5Lines[g5Index];
    if (val === current.blankValue) {
      setG5Feedback('Ճիշտ է! 🎉');
      updateScore(30);
    } else {
      setG5Feedback('Սխալ է, փորձեք նորից 🙁');
    }
  };

  const nextG5Line = () => {
    setG5Feedback(null);
    if (g5Index < g5Lines.length - 1) {
      setG5Index((i) => i + 1);
    } else {
      setG5IsCompleted(true);
      setActiveGame(null);
      if (!gamesCompleted.includes(5)) setGamesCompleted((c) => [...c, 5]);
    }
  };

  // -------------------------------------------------------------
  // GAME 6: Բազմակի ընտրությամբ թեստ (Diagnostic Quiz)
  // -------------------------------------------------------------
  const [g6Questions, setG6Questions] = useState<QuizQuestion[]>([]);
  const [g6Index, setG6Index] = useState<number>(0);
  const [g6Selected, setG6Selected] = useState<string | null>(null);
  const [g6IsChecked, setG6IsChecked] = useState<boolean>(false);

  const initGame6 = () => {
    const raw: QuizQuestion[] = [
      {
        id: '1',
        question: 'Ո՞րն է "ir" (գնալ) բայի դրական tú ձևը։',
        options: ['ve', 'vaya', 'no vayas', 'id'],
        correctAnswer: 've',
        armenianExplanation: 'Ir բայի դրական հրամայականի tú ձևը "ve" է։'
      },
      {
        id: '2',
        question: 'Ո՞րն է "no hables" ձևի դրական համապատասխանությունը (tú)։',
        options: ['hables', 'habla', 'hable', 'hablad'],
        correctAnswer: 'habla',
        armenianExplanation: 'Hablar բայի դրական tú ձևը "habla" է, իսկ ժխտականը՝ "no hables"։'
      },
      {
        id: '3',
        question: 'Ինչպե՞ս է թարգմանվում "No digas nada"։',
        options: ['Ոչինչ մի՛ ասա', 'Ասա ամեն ինչ', 'Մի՛ վախեցիր', 'Արի այստեղ'],
        correctAnswer: 'Ոչինչ մի՛ ասա',
        armenianExplanation: '"No digas nada" նշանակում է "Ոչինչ մի՛ ասա" (decir բայով)։'
      },
      {
        id: '4',
        question: 'Ո՞ր ձևն է սխալ vosotros դրական հրամայականում։',
        options: ['hablad', 'comed', 'vivid', 'no habléis'],
        correctAnswer: 'no habléis',
        armenianExplanation: '"no habléis" ձևը ժխտական է, ոչ թե դրական (դրականը՝ hablad)։'
      },
      {
        id: '5',
        question: 'Ի՞նչ է դառնում "le" դերանունը, երբ նրան հաջորդում է "lo"։',
        options: ['te', 'se', 'me', 'nos'],
        correctAnswer: 'se',
        armenianExplanation: 'Le/les + lo/la/los/las կառուցվածքում le/les-ը դառնում է "se"՝ dáselo, No se lo des։'
      }
    ];
    setG6Questions(raw);
    setG6Index(0);
    setG6Selected(null);
    setG6IsChecked(false);
  };

  const selectG6Choice = (opt: string) => {
    if (g6IsChecked) return;
    setG6Selected(opt);
  };

  const submitG6 = () => {
    if (!g6Selected) return;
    setG6IsChecked(true);
    if (g6Selected === g6Questions[g6Index].correctAnswer) {
      updateScore(20);
    }
  };

  const nextG6 = () => {
    if (g6Index < g6Questions.length - 1) {
      setG6Index((i) => i + 1);
      setG6Selected(null);
      setG6IsChecked(false);
    } else {
      setActiveGame(null);
      if (!gamesCompleted.includes(6)) setGamesCompleted((c) => [...c, 6]);
    }
  };

  const startSelectedGame = (gameId: number) => {
    setActiveGame(gameId);
    if (gameId === 1) initGame1();
    if (gameId === 2) initGame2();
    if (gameId === 3) initGame3();
    if (gameId === 4) initGame4();
    if (gameId === 5) initGame5();
    if (gameId === 6) initGame6();
  };

  const gameDetails = [
    { id: 1, name: "1. Ձևերի համապատասխանեցում", desc: "Միացրեք իսպաներեն հրամայականներն իրենց հայերեն թարգմանությունների հետ։", icon: RefreshCw },
    { id: 2, name: "2. Խոնարհման կառուցող", desc: "Հավաքեք բայի ճիշտ հրամայական ձևը տրված տառերից։", icon: Award },
    { id: 3, name: "3. Սխալների ուղղում", desc: "Գտեք և շտկեք սխալ կառուցվածքները, դիրքային դերանունները և այլն։", icon: Trophy },
    { id: 4, name: "4. Վերադարձական բայեր", desc: "Մարզեք -se վերջավորությամբ վերադարձական բայերի բարդ ձևերը (irse, levantarse)։", icon: HelpCircle },
    { id: 5, name: "5. Երկխոսության լրացում", desc: "Լրացրեք դասարանային երկխոսության բացթողումները (Բաժին 27)։", icon: MessageSquarePlus },
    { id: 6, name: "6. Բազմակի ընտրությամբ թեստ", desc: "Ստուգեք Ձեր ընդհանուր գիտելիքները 15-հարցանոց արագ թեստով։", icon: FileQuestion },
  ];

  return (
    <div className="space-y-6" id="games-view-container">
      {/* Highscore & Welcome bar */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-md flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span className="text-xs text-indigo-300 uppercase tracking-widest font-mono font-bold">Գիտելիքի Ստուգում</span>
          <h2 className="text-xl md:text-2xl font-black font-sans mt-1">Ինտերակտիվ Խաղերի Պորտալ</h2>
          <p className="text-xs text-gray-300 mt-1 max-w-lg">
            Ամրապնդեք Imperativo-ի կանոնները 6 տարբեր գրավիչ խաղերի միջոցով և կուտակեք միավորներ։
          </p>
        </div>

        <div className="flex gap-6 items-center bg-slate-800/80 px-5 py-3.5 rounded-2xl border border-slate-700/50 shrink-0">
          <div className="text-center">
            <span className="block text-[10px] text-gray-400 uppercase tracking-wider font-bold">Ընթացիկ միավոր</span>
            <span className="text-xl font-black text-amber-400 font-mono" id="game-current-score">{gameScore}</span>
          </div>
          <div className="w-px h-8 bg-slate-700"></div>
          <div className="text-center">
            <span className="block text-[10px] text-gray-400 uppercase tracking-wider font-bold">Ռեկորդային</span>
            <span className="text-xl font-black text-indigo-300 font-mono" id="game-highscore-score">{overallHighscore}</span>
          </div>
        </div>
      </div>

      {activeGame === null ? (
        /* Game Dashboard Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" id="games-dashboard-grid">
          {gameDetails.map((game) => {
            const IconComp = game.icon;
            const isCompleted = gamesCompleted.includes(game.id);

            return (
              <div
                key={game.id}
                className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:border-indigo-100 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-indigo-50/50 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    {isCompleted && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                        Անցած է
                      </span>
                    )}
                  </div>

                  <h3 className="text-md font-bold text-gray-950 font-sans group-hover:text-indigo-600 transition-colors">
                    {game.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                    {game.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-50 flex">
                  <button
                    onClick={() => startSelectedGame(game.id)}
                    className="w-full py-2 bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white transition-all text-xs font-bold rounded-xl flex items-center justify-center gap-1.5"
                    id={`start-game-btn-${game.id}`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Մեկնարկել Խաղը</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Active Game Arena wrapper */
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm" id={`game-arena-panel-${activeGame}`}>
          {/* Header */}
          <div className="flex justify-between items-center pb-4 border-b border-gray-100 mb-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-600">Խաղ {activeGame} / 6</span>
              <h3 className="text-lg font-bold text-gray-900">
                {gameDetails.find((g) => g.id === activeGame)?.name}
              </h3>
            </div>
            <button
              onClick={() => setActiveGame(null)}
              className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1.5 rounded-xl transition-all font-semibold"
              id="back-to-portal-btn"
            >
              Վերադառնալ պորտալ
            </button>
          </div>

          {/* GAME 1: Form Linker */}
          {activeGame === 1 && (
            <div className="space-y-6" id="game1-arena">
              <p className="text-xs text-gray-500 bg-indigo-50/50 p-3 rounded-lg border border-indigo-100/50">
                💡 <strong>Ինչպես խաղալ.</strong> Կտտացրեք ձախ սյունակի իսպաներեն արտահայտությանը, այնուհետև աջ սյունակի համապատասխան հայերեն թարգմանությանը։
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left pile (Spanish) */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Իսպաներեն (Spanish)</span>
                  {g1LeftItems.map((item) => {
                    const isMatched = g1MatchedIds.includes(item.id);
                    const isSelected = g1SelectedLeft === item.id;
                    return (
                      <button
                        key={item.id}
                        disabled={isMatched}
                        onClick={() => handleG1LeftClick(item.id)}
                        className={`w-full text-left p-3.5 rounded-xl text-xs font-mono font-bold border transition-all ${
                          isMatched
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                            : isSelected
                            ? 'bg-indigo-600 text-white border-indigo-600 scale-[1.01]'
                            : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-200'
                        }`}
                      >
                        {item.spanish}
                      </button>
                    );
                  })}
                </div>

                {/* Right pile (Armenian) */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Հայերեն (Armenian)</span>
                  {g1RightItems.map((item) => {
                    const isMatched = g1MatchedIds.includes(item.id);
                    const isSelected = g1SelectedRight === item.id;
                    return (
                      <button
                        key={item.id}
                        disabled={isMatched}
                        onClick={() => handleG1RightClick(item.id)}
                        className={`w-full text-left p-3.5 rounded-xl text-xs font-sans font-medium border transition-all ${
                          isMatched
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                            : isSelected
                            ? 'bg-indigo-600 text-white border-indigo-600 scale-[1.01]'
                            : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-200'
                        }`}
                      >
                        {item.armenian}
                      </button>
                    );
                  })}
                </div>
              </div>

              {g1MatchedIds.length === g1LeftItems.length ? (
                <div className="pt-6 border-t border-gray-100 text-center space-y-3">
                  <div className="text-emerald-600 font-bold flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Հրաշալի է! Դուք ճիշտ միացրեցիք բոլոր ձևերը 🎉</span>
                  </div>
                  <button
                    onClick={initGame1}
                    className="py-2.5 px-5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all"
                  >
                    Խաղալ ևս մեկ անգամ
                  </button>
                </div>
              ) : (
                <div className="text-right text-[11px] text-gray-400">
                  Սխալներ՝ {g1FailedCount}
                </div>
              )}
            </div>
          )}

          {/* GAME 2: Conjugation Constructor */}
          {activeGame === 2 && g2Challenges.length > 0 && (
            <div className="space-y-6" id="game2-arena">
              <div className="bg-slate-50 border border-gray-100 rounded-2xl p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Առաջադրանք {g2Index + 1} / {g2Challenges.length}</span>
                  <h4 className="text-lg font-black text-slate-800 mt-1 leading-tight">
                    Կազմե՛ք <span className="text-indigo-600 font-bold">"{g2Challenges[g2Index].verb}"</span> ({g2Challenges[g2Index].translation}) բայի հրամայական ձևը
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Անձ՝ <strong className="text-gray-700">{g2Challenges[g2Index].person} ({g2Challenges[g2Index].armenianPerson})</strong>, Տեսակ՝ <strong className="text-gray-700">{g2Challenges[g2Index].isPositive ? 'Դրական (Afirmativo)' : 'Ժխտական (Negativo)'}</strong>
                  </p>
                </div>
              </div>

              {/* Working space */}
              <div className="min-h-[80px] bg-slate-100 rounded-2xl border border-dashed border-gray-300 p-4 flex flex-wrap gap-2 items-center justify-center">
                {g2UserLetters.length === 0 ? (
                  <span className="text-xs text-gray-400">Կտտացրեք ներքևի տառերին՝ բառը հավաքելու համար...</span>
                ) : (
                  g2UserLetters.map((l, idx) => (
                    <button
                      key={idx}
                      onClick={() => removeG2Letter(idx)}
                      disabled={g2Status !== 'pending'}
                      className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-mono font-bold rounded-xl text-sm transition-all focus:outline-none"
                    >
                      {l}
                    </button>
                  ))
                )}
              </div>

              {/* Letters pile */}
              <div className="flex flex-wrap gap-2 justify-center">
                {g2Challenges[g2Index].scrambledLetters.map((letter, idx) => (
                  <button
                    key={idx}
                    disabled={g2Status !== 'pending'}
                    onClick={() => pressG2Letter(letter, idx)}
                    className="w-10 h-10 bg-white border border-gray-200 hover:border-indigo-600 hover:bg-indigo-50 font-mono font-black rounded-xl text-sm transition-all flex items-center justify-center text-slate-800 active:scale-95"
                  >
                    {letter}
                  </button>
                ))}
              </div>

              {/* Actions & Feedback */}
              <div className="pt-4 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => setG2UserLetters([])}
                    disabled={g2Status !== 'pending'}
                    className="p-2 text-xs border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-500 transition-all font-semibold"
                  >
                    Մաքրել
                  </button>
                  <button
                    onClick={checkG2Answer}
                    disabled={g2Status !== 'pending' || g2UserLetters.length === 0}
                    className="px-5 py-2 text-xs bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-all font-bold disabled:opacity-50"
                  >
                    Ստուգել պատասխանը
                  </button>
                </div>

                {g2Status === 'correct' && (
                  <div className="text-emerald-600 text-xs font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4.5 h-4.5" />
                    <span>Հրաշալի է! Ճիշտ է։ (+30 միավոր)</span>
                  </div>
                )}
                {g2Status === 'wrong' && (
                  <div className="text-red-500 text-xs font-bold flex items-center gap-1.5">
                    <AlertCircle className="w-4.5 h-4.5" />
                    <span>Սխալ է կազմված։ Ճիշտ պատասխանն է ՝ "{g2Challenges[g2Index].correctAnswer}"</span>
                  </div>
                )}

                {g2Status !== 'pending' && (
                  <button
                    onClick={nextG2}
                    className="px-5 py-2 text-xs bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-all font-bold"
                  >
                    {g2Index < g2Challenges.length - 1 ? 'Հաջորդը' : 'Ավարտել խաղը'}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* GAME 3: Sentence Fixer */}
          {activeGame === 3 && g3Challenges.length > 0 && (
            <div className="space-y-6" id="game3-arena">
              <div className="bg-slate-50 border border-gray-100 rounded-2xl p-4">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Հարց {g3Index + 1} / {g3Challenges.length}</span>
                <h4 className="text-md font-black text-slate-800 mt-1">
                  {g3Challenges[g3Index].sentence}
                </h4>
                {g3Challenges[g3Index].armenianTranslation && (
                  <p className="text-xs text-gray-500 mt-1 italic">
                    (Իմաստը ՝ {g3Challenges[g3Index].armenianTranslation})
                  </p>
                )}
              </div>

              {/* Options list */}
              <div className="space-y-2.5">
                {g3Challenges[g3Index].options.map((opt, oIdx) => {
                  const isSelected = g3SelectedOption === oIdx;
                  let cardClass = "bg-white border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/20";
                  if (isSelected) cardClass = "bg-indigo-50 border-indigo-500 text-indigo-900";
                  if (g3IsChecked) {
                    if (opt.isCorrect) cardClass = "bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold";
                    else if (isSelected) cardClass = "bg-red-50 border-red-500 text-red-900";
                  }

                  return (
                    <button
                      key={oIdx}
                      disabled={g3IsChecked}
                      onClick={() => selectG3Option(oIdx)}
                      className={`w-full text-left p-4 rounded-xl text-sm border transition-all flex items-center justify-between ${cardClass}`}
                    >
                      <span>{opt.text}</span>
                      {g3IsChecked && opt.isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  {!g3IsChecked ? (
                    <button
                      onClick={submitG3}
                      disabled={g3SelectedOption === null}
                      className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl disabled:opacity-50 transition-all"
                    >
                      Հաստատել պատասխանը
                    </button>
                  ) : (
                    <button
                      onClick={nextG3}
                      className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition-all"
                    >
                      {g3Index < g3Challenges.length - 1 ? 'Հաջորդ հարցը' : 'Ավարտել Խաղը'}
                    </button>
                  )}
                </div>

                {g3IsChecked && (
                  <p className="text-xs text-gray-600 bg-amber-50 border border-amber-200/60 p-3 rounded-xl flex-1 max-w-lg md:ml-4 leading-relaxed">
                    🎓 <strong>Մեկնաբանություն.</strong> {g3Challenges[g3Index].explanation}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* GAME 4: Reflexive Action */}
          {activeGame === 4 && g4Challenges.length > 0 && (
            <div className="space-y-6" id="game4-arena">
              <div className="bg-slate-50 border border-gray-100 rounded-2xl p-4">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Բացառություն {g4Index + 1} / {g4Challenges.length}</span>
                <h4 className="text-md font-black text-slate-800 mt-1 flex items-center gap-2">
                  <span>Բայ` <strong className="text-indigo-600">{g4Challenges[g4Index].verb}</strong></span>
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">վերադարձական</span>
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Հրահանգ ՝ <strong className="text-gray-700 font-semibold">{g4Challenges[g4Index].instruction}</strong>
                </p>
              </div>

              {/* Choices */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {g4Challenges[g4Index].options.map((opt, idx) => {
                  const isSelected = g4SelectedAnswer === opt;
                  let styleClass = "bg-white border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/10";
                  if (isSelected) styleClass = "bg-indigo-50 border-indigo-500 text-indigo-900";
                  if (g4IsChecked) {
                    if (opt === g4Challenges[g4Index].correctAnswer) styleClass = "bg-emerald-50 border-emerald-500 text-emerald-950 font-bold";
                    else if (isSelected) styleClass = "bg-red-50 border-red-500 text-red-950";
                  }

                  return (
                    <button
                      key={idx}
                      disabled={g4IsChecked}
                      onClick={() => selectG4Choice(opt)}
                      className={`text-left p-3.5 rounded-xl text-sm font-mono border transition-all flex items-center justify-between ${styleClass}`}
                    >
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  {!g4IsChecked ? (
                    <button
                      onClick={submitG4}
                      disabled={!g4SelectedAnswer}
                      className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl disabled:opacity-50 transition-all"
                    >
                      Գնահատել
                    </button>
                  ) : (
                    <button
                      onClick={nextG4}
                      className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition-all"
                    >
                      {g4Index < g4Challenges.length - 1 ? 'Հաջորդ հարցը' : 'Ավարտել'}
                    </button>
                  )}
                </div>

                {g4IsChecked && (
                  <p className="text-xs text-gray-600 bg-amber-50 border border-amber-200/60 p-3 rounded-xl flex-1 max-w-lg md:ml-4 leading-relaxed">
                    📖 <strong>Կանոն.</strong> {g4Challenges[g4Index].explanation}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* GAME 5: Dialogue Roleplay */}
          {activeGame === 5 && g5Lines.length > 0 && (
            <div className="space-y-6" id="game5-arena">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5" id="dialogue-chatbox">
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block mb-2">Երկխոսություն classroom-ում</span>
                <div className="space-y-2">
                  {g5Lines.slice(0, g5Index).map((line, i) => (
                    <div key={i} className="flex gap-2 text-xs border-l-2 border-emerald-400 pl-3.5 italic text-slate-500">
                      <span className="font-bold text-emerald-800">{line.speaker}:</span>
                      <span>{line.fullText}</span>
                    </div>
                  ))}

                  {/* Active prompt Line */}
                  <div className="flex gap-2 text-sm bg-white p-4 rounded-xl border border-indigo-100 shadow-sm">
                    <span className="font-extrabold text-indigo-700 w-24 shrink-0">{g5Lines[g5Index].speaker}:</span>
                    <div className="flex-1">
                      <p className="font-sans font-medium text-slate-900 border-b border-gray-150 pb-2 mb-2">
                        {g5Lines[g5Index].textTemplate.replace('{blank}', '______')}
                      </p>
                      <p className="text-xs text-slate-400">
                        Թարգմանությունը ՝ <strong>{g5Lines[g5Index].armenianText}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive choice drop layout */}
              <div className="space-y-4">
                <span className="text-xs font-bold text-gray-400 block">Ընտրեք ճիշտ բառը լրացնելու համար</span>
                <div className="flex flex-wrap gap-2.5">
                  {g5Selections.map((sel) => (
                    <button
                      key={sel}
                      disabled={!!g5Feedback && g5Feedback.includes('Ճիշտ')}
                      onClick={() => handleG5Drop(sel)}
                      className="px-4 py-2.5 bg-indigo-50 hover:bg-indigo-600 hover:text-white border border-indigo-100 rounded-xl text-xs font-bold font-mono transition-all text-indigo-800 active:scale-95"
                    >
                      {sel}
                    </button>
                  ))}
                </div>
              </div>

              {/* Feedback and next */}
              {g5Feedback && (
                <div className="p-4 rounded-xl flex items-center justify-between border bg-slate-50 border-slate-200">
                  <span className={`text-sm font-bold ${g5Feedback.includes('Ճիշտ') ? 'text-emerald-600' : 'text-red-500'}`}>
                    {g5Feedback}
                  </span>
                  {g5Feedback.includes('Ճիշտ') && (
                    <button
                      onClick={nextG5Line}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all"
                    >
                      {g5Index < g5Lines.length - 1 ? 'Շարունակել' : 'Ավարտել երկխոսությունը'}
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          {/* GAME 6: Comprehensive Quiz */}
          {activeGame === 6 && g6Questions.length > 0 && (
            <div className="space-y-6" id="game6-arena">
              <div className="bg-slate-50 border border-gray-100 rounded-2xl p-4">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Հարց {g6Index + 1} / {g6Questions.length}</span>
                <h4 className="text-md font-black text-slate-800 mt-1">
                  {g6Questions[g6Index].question}
                </h4>
              </div>

              <div className="space-y-2.5">
                {g6Questions[g6Index].options.map((opt, oIdx) => {
                  const isSelected = g6Selected === opt;
                  let cardClass = "bg-white border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/10";
                  if (isSelected) cardClass = "bg-indigo-50 border-indigo-500 text-indigo-900";
                  if (g6IsChecked) {
                    if (opt === g6Questions[g6Index].correctAnswer) cardClass = "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold";
                    else if (isSelected) cardClass = "bg-red-50 border-red-500 text-red-900";
                  }

                  return (
                    <button
                      key={oIdx}
                      disabled={g6IsChecked}
                      onClick={() => selectG6Choice(opt)}
                      className={`w-full text-left p-4 rounded-xl text-sm border transition-all flex items-center justify-between ${cardClass}`}
                    >
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  {!g6IsChecked ? (
                    <button
                      onClick={submitG6}
                      disabled={!g6Selected}
                      className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl disabled:opacity-50 transition-all"
                    >
                      Հանձնել
                    </button>
                  ) : (
                    <button
                      onClick={nextG6}
                      className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition-all"
                    >
                      {g6Index < g6Questions.length - 1 ? 'Հաջորդ հարցը' : 'Ավարտել ստուգարքը'}
                    </button>
                  )}
                </div>

                {g6IsChecked && (
                  <p className="text-xs text-gray-600 bg-amber-50 border border-amber-200/60 p-3 rounded-xl flex-1 max-w-lg md:ml-4 leading-relaxed font-sans">
                    💡 <strong>Բացատրություն.</strong> {g6Questions[g6Index].armenianExplanation}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
