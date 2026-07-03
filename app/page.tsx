'use client';

import { useState, useSyncExternalStore, useEffect, type ReactNode } from 'react';
import { questions, categories, Question } from './data/questions';

const STORAGE_KEY = 'linux-drill:v2';
const ALL_KEY = 'ALL';

type Best = {
  score: number;
  total: number;
  accuracy: number;
  bestStreak: number;
  completedAt: number;
};

type Resume = {
  questionIds: string[];
  currentIndex: number;
  score: number;
  totalAnswered: number;
  streak: number;
  bestStreak: number;
  wrongIds: string[];
};

type CategoryProgress = { best?: Best; resume?: Resume };
type Store = Record<string, CategoryProgress>;

const shuffleArray = <T,>(items: T[]) => {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const prepareCategoryQuestions = (categoryQuestions: Question[]) => {
  const total = categoryQuestions.length;
  const easyCount = Math.ceil(total / 3);
  const mediumCount = Math.ceil((total - easyCount) / 2);
  const easy = shuffleArray(categoryQuestions.slice(0, easyCount));
  const medium = shuffleArray(categoryQuestions.slice(easyCount, easyCount + mediumCount));
  const hard = shuffleArray(categoryQuestions.slice(easyCount + mediumCount));
  return [...easy, ...medium, ...hard];
};

const buildShuffledCategoryQuestions = () =>
  categories.flatMap((category) => {
    const grouped = questions.filter((q) => q.category === category.id);
    return prepareCategoryQuestions(grouped);
  });

const questionsForCategory = (categoryId: string) => {
  if (categoryId === ALL_KEY) return buildShuffledCategoryQuestions();
  return prepareCategoryQuestions(questions.filter((q) => q.category === categoryId));
};

const questionsById = new Map(questions.map((q) => [q.id, q]));
const hydrateQuestions = (ids: string[]) =>
  ids.map((id) => questionsById.get(id)).filter((q): q is Question => Boolean(q));

const normalizeAnswer = (text: string) =>
  text
    .trim()
    .toLowerCase()
    .replace(/^sudo\s+/, '')
    .replace(/"/g, "'")
    .replace(/\s+/g, ' ');

const isAnswerCorrect = (typed: string, question: Question) => {
  const normalized = normalizeAnswer(typed);
  if (normalized === normalizeAnswer(question.answer)) return true;
  return (question.altAnswers ?? []).some((alt) => normalized === normalizeAnswer(alt));
};

const EMPTY_STORE: Store = {};
let cachedStore: Store | null = null;
const storeListeners = new Set<() => void>();

const readClientStore = (): Store => {
  if (cachedStore) return cachedStore;
  if (typeof window === 'undefined') {
    cachedStore = EMPTY_STORE;
    return cachedStore;
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    cachedStore = raw ? (JSON.parse(raw) as Store) : {};
  } catch {
    cachedStore = {};
  }
  return cachedStore;
};

const subscribeStore = (cb: () => void) => {
  storeListeners.add(cb);
  return () => {
    storeListeners.delete(cb);
  };
};

const getServerStoreSnapshot = () => EMPTY_STORE;

const writeStore = (mutator: (draft: Store) => void) => {
  const current = readClientStore();
  const next: Store = JSON.parse(JSON.stringify(current));
  mutator(next);
  cachedStore = next;
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* quota or disabled — ignore */
    }
  }
  storeListeners.forEach((fn) => fn());
};

const PenguinAvatar = () => (
  <svg
    viewBox="0 0 200 200"
    role="img"
    aria-label="Linux Drill penguin mascot"
    className="w-48 h-48 mx-auto mb-6"
    style={{ filter: 'drop-shadow(0 0 18px rgba(56,189,248,0.55))' }}
  >
    <defs>
      <radialGradient id="bgGlow" cx="50%" cy="45%" r="55%">
        <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="body" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1f2937" />
        <stop offset="100%" stopColor="#0b1220" />
      </linearGradient>
      <linearGradient id="belly" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#cbd5e1" />
      </linearGradient>
      <linearGradient id="beak" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
    </defs>

    <circle cx="100" cy="100" r="96" fill="url(#bgGlow)" />
    <circle cx="100" cy="100" r="92" fill="none" stroke="#38bdf8" strokeWidth="3" opacity="0.9" />

    <ellipse cx="100" cy="120" rx="58" ry="68" fill="url(#body)" />
    <ellipse cx="100" cy="135" rx="36" ry="48" fill="url(#belly)" />

    <ellipse cx="100" cy="70" rx="42" ry="40" fill="url(#body)" />

    <circle cx="86" cy="68" r="9" fill="#f8fafc" />
    <circle cx="114" cy="68" r="9" fill="#f8fafc" />
    <circle cx="88" cy="70" r="4" fill="#0b1220" />
    <circle cx="116" cy="70" r="4" fill="#0b1220" />
    <circle cx="89" cy="69" r="1.4" fill="#38bdf8" />
    <circle cx="117" cy="69" r="1.4" fill="#38bdf8" />

    <path d="M92 84 Q100 92 108 84 Q100 96 92 84 Z" fill="url(#beak)" stroke="#b45309" strokeWidth="0.8" />

    <path d="M48 110 Q38 140 56 168 Q62 150 60 130 Z" fill="url(#body)" />
    <path d="M152 110 Q162 140 144 168 Q138 150 140 130 Z" fill="url(#body)" />

    <ellipse cx="86" cy="184" rx="14" ry="5" fill="url(#beak)" />
    <ellipse cx="114" cy="184" rx="14" ry="5" fill="url(#beak)" />

    <circle cx="100" cy="100" r="92" fill="none" stroke="#38bdf8" strokeWidth="1" opacity="0.35" />
  </svg>
);

/**
 * EVOLVING AVATAR
 * Tux levels up with every correct answer:
 *  - the progress ring, tick dots, aura hue, and body size change on EVERY point
 *  - 24 named gear evolutions unlock spread across the drill, so a full run
 *    walks through (almost) as many visible forms as there are questions
 */
type Evolution = { name: string; node: ReactNode };

const EVOLUTIONS: Evolution[] = [
  {
    name: 'chmod +sparkle',
    node: (
      <g fill="#7dd3fc">
        <path d="M78 56 L80 60 L84 62 L80 64 L78 68 L76 64 L72 62 L76 60 Z" />
        <path d="M124 56 L126 60 L130 62 L126 64 L124 68 L122 64 L118 62 L122 60 Z" />
      </g>
    ),
  },
  {
    name: '/boot Boots',
    node: (
      <g>
        <rect x="70" y="176" width="28" height="11" rx="5" fill="#f97316" stroke="#b45309" strokeWidth="1.5" />
        <rect x="102" y="176" width="28" height="11" rx="5" fill="#f97316" stroke="#b45309" strokeWidth="1.5" />
      </g>
    ),
  },
  {
    name: 'Scarf of $HOME',
    node: (
      <g>
        <path d="M62 98 Q100 114 138 98 L138 108 Q100 124 62 108 Z" fill="#f43f5e" stroke="#9f1239" strokeWidth="1" />
        <rect x="118" y="106" width="12" height="24" rx="3" fill="#f43f5e" stroke="#9f1239" strokeWidth="1" />
      </g>
    ),
  },
  {
    name: 'Terminal Belly',
    node: (
      <g>
        <rect x="87" y="124" width="26" height="16" rx="3" fill="#0b1220" stroke="#38bdf8" strokeWidth="1.2" />
        <text x="92" y="136" fontSize="10" fontFamily="monospace" fill="#38bdf8">{'>_'}</text>
      </g>
    ),
  },
  {
    name: 'Kernel Beanie',
    node: (
      <g>
        <path d="M62 54 Q100 16 138 54 L138 60 Q100 40 62 60 Z" fill="#6366f1" stroke="#4338ca" strokeWidth="1.5" />
        <circle cx="100" cy="22" r="6" fill="#a5b4fc" />
      </g>
    ),
  },
  {
    name: 'Nerd Specs',
    node: (
      <g stroke="#fbbf24" strokeWidth="2.5" fill="none">
        <circle cx="86" cy="68" r="10.5" />
        <circle cx="114" cy="68" r="10.5" />
        <path d="M96.5 68 L103.5 68" />
      </g>
    ),
  },
  {
    name: 'Utility Belt',
    node: (
      <g>
        <path d="M46 142 Q100 158 154 142" stroke="#94a3b8" strokeWidth="6" fill="none" />
        <rect x="93" y="144" width="14" height="11" rx="2" fill="#fbbf24" stroke="#b45309" strokeWidth="1" />
      </g>
    ),
  },
  {
    name: 'Cargo Straps',
    node: (
      <g stroke="#64748b" strokeWidth="5" strokeLinecap="round">
        <path d="M72 98 L84 146" />
        <path d="M128 98 L116 146" />
      </g>
    ),
  },
  {
    name: 'Mech Keyboard',
    node: (
      <g>
        <rect x="74" y="152" width="52" height="17" rx="3" fill="#0b1220" stroke="#38bdf8" strokeWidth="1.3" />
        {[78, 86, 94, 102, 110, 118].map((x) => (
          <rect key={x} x={x} y="156" width="6" height="4" rx="1" fill="#38bdf8" opacity="0.8" />
        ))}
        <rect x="84" y="162" width="32" height="4" rx="1" fill="#38bdf8" opacity="0.6" />
      </g>
    ),
  },
  {
    name: 'Daemon Audio',
    node: (
      <g>
        <path d="M58 62 Q100 4 142 62" stroke="#e2e8f0" strokeWidth="6" fill="none" strokeLinecap="round" />
        <circle cx="59" cy="67" r="8" fill="#e2e8f0" />
        <circle cx="141" cy="67" r="8" fill="#e2e8f0" />
      </g>
    ),
  },
  {
    name: 'Power Bracers',
    node: (
      <g>
        <rect x="44" y="128" width="15" height="11" rx="3" fill="#f59e0b" stroke="#b45309" strokeWidth="1" />
        <rect x="141" y="128" width="15" height="11" rx="3" fill="#f59e0b" stroke="#b45309" strokeWidth="1" />
      </g>
    ),
  },
  {
    name: 'Cape of Cron',
    node: (
      <g fill="#7c3aed" opacity="0.85">
        <path d="M44 102 L26 178 L56 166 Z" />
        <path d="M156 102 L174 178 L144 166 Z" />
      </g>
    ),
  },
  {
    name: 'Shoulder Daemon',
    node: (
      <g>
        <path d="M139 92 Q139 82 147 82 Q155 82 155 92 L155 98 L152 95 L149 98 L146 95 L143 98 L139 98 Z" fill="#f8fafc" opacity="0.95" />
        <circle cx="144.5" cy="88" r="1.4" fill="#0b1220" />
        <circle cx="150.5" cy="88" r="1.4" fill="#0b1220" />
      </g>
    ),
  },
  {
    name: 'Kernel Graduate',
    node: (
      <g>
        <polygon points="100,24 142,40 100,56 58,40" fill="#0b1220" stroke="#38bdf8" strokeWidth="1.5" />
        <path d="M132 44 L132 58" stroke="#fbbf24" strokeWidth="2" />
        <circle cx="132" cy="61" r="3" fill="#fbbf24" />
      </g>
    ),
  },
  {
    name: 'Aura of Uptime',
    node: (
      <g fill="none" stroke="#38bdf8">
        <circle cx="100" cy="100" r="97" strokeWidth="1.5" opacity="0.55" />
        <circle cx="100" cy="100" r="90" strokeWidth="1" strokeDasharray="4 6" opacity="0.45" />
      </g>
    ),
  },
  {
    name: 'Fork Lightning',
    node: (
      <g fill="#fde047" opacity="0.9">
        <polygon points="30,100 38,100 33,112 42,112 28,132 33,118 24,118" />
        <polygon points="170,100 162,100 167,112 158,112 172,132 167,118 176,118" />
      </g>
    ),
  },
  {
    name: 'Laser Focus',
    node: (
      <g stroke="#f43f5e" strokeWidth="2" opacity="0.85" strokeLinecap="round">
        <path d="M88 70 L68 79" />
        <path d="M116 70 L136 79" />
      </g>
    ),
  },
  {
    name: 'Jet Boosters',
    node: (
      <g fill="#fb923c" opacity="0.9">
        <path d="M76 188 Q84 204 92 188 Q84 196 76 188 Z" />
        <path d="M108 188 Q116 204 124 188 Q116 196 108 188 Z" />
      </g>
    ),
  },
  {
    name: 'Satellite Uplink',
    node: (
      <g>
        <ellipse cx="100" cy="104" rx="93" ry="26" fill="none" stroke="#7dd3fc" strokeWidth="1" opacity="0.5" />
        <circle cx="12" cy="112" r="4" fill="#7dd3fc" />
        <circle cx="188" cy="96" r="4" fill="#7dd3fc" />
      </g>
    ),
  },
  {
    name: 'Matrix Rain',
    node: (
      <g fontFamily="monospace" fontSize="8" fill="#4ade80" opacity="0.6">
        <text x="14" y="48">1</text>
        <text x="14" y="60">0</text>
        <text x="14" y="72">1</text>
        <text x="182" y="56">0</text>
        <text x="182" y="68">1</text>
        <text x="182" y="80">0</text>
      </g>
    ),
  },
  {
    name: 'Golden Trim',
    node: <ellipse cx="100" cy="120" rx="59" ry="69" fill="none" stroke="#fbbf24" strokeWidth="2.5" opacity="0.9" />,
  },
  {
    name: 'Root Crown',
    node: (
      <path
        d="M80 32 L86 12 L95 26 L100 8 L105 26 L114 12 L120 32 Z"
        fill="#fbbf24"
        stroke="#b45309"
        strokeWidth="1.5"
      />
    ),
  },
  {
    name: 'HA Halo',
    node: <ellipse cx="100" cy="6" rx="26" ry="5" fill="none" stroke="#fef08a" strokeWidth="3" opacity="0.9" />,
  },
  {
    name: 'TUX PRIME',
    node: (
      <g stroke="#fef08a" strokeWidth="3" opacity="0.8" strokeLinecap="round">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <path
              key={deg}
              d={`M${100 + 72 * Math.cos(rad)} ${100 + 72 * Math.sin(rad)} L${100 + 96 * Math.cos(rad)} ${100 + 96 * Math.sin(rad)}`}
            />
          );
        })}
      </g>
    ),
  },
];

const evolutionStage = (score: number, total: number) => {
  const safeTotal = Math.max(total, 1);
  const ratio = Math.min(score / safeTotal, 1);
  const unlocked =
    score === 0 ? 0 : Math.max(1, Math.min(EVOLUTIONS.length, Math.round(ratio * EVOLUTIONS.length)));
  return { ratio, unlocked };
};

const EvolvingAvatar = ({ score, total, size = 'w-36 h-36' }: { score: number; total: number; size?: string }) => {
  const { ratio, unlocked } = evolutionStage(score, total);
  const stageName = unlocked === 0 ? 'Fresh Boot' : EVOLUTIONS[unlocked - 1].name;
  const scale = 0.78 + 0.3 * ratio;
  const hue = (score * 47) % 360;
  const ringRadius = 94;
  const ringLength = 2 * Math.PI * ringRadius;
  const safeTotal = Math.max(total, 1);
  const showDots = safeTotal <= 72;
  return (
    <div className="flex flex-col items-center shrink-0">
      <svg
        viewBox="0 0 200 200"
        className={size}
        role="img"
        aria-label={`Avatar — evolution ${unlocked} of ${EVOLUTIONS.length}: ${stageName}`}
      >
        <defs>
          <radialGradient id="evGlow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="evBody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1f2937" />
            <stop offset="100%" stopColor="#0b1220" />
          </linearGradient>
          <linearGradient id="evBelly" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          <linearGradient id="evBeak" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>

        <g key={score} className="evo-pop">
          <circle cx="100" cy="100" r="96" fill="url(#evGlow)" />

          {/* progress ring — hue shifts with every correct answer */}
          <g style={{ filter: `hue-rotate(${hue}deg)` }}>
            <circle cx="100" cy="100" r={ringRadius} fill="none" stroke="#1f2937" strokeWidth="4" />
            <circle
              cx="100"
              cy="100"
              r={ringRadius}
              fill="none"
              stroke="#38bdf8"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${ringLength * ratio} ${ringLength}`}
              transform="rotate(-90 100 100)"
            />
            {/* one tick dot per correct answer */}
            {showDots &&
              Array.from({ length: Math.min(score, safeTotal) }).map((_, i) => {
                const angle = (i / safeTotal) * 2 * Math.PI - Math.PI / 2;
                return (
                  <circle
                    key={i}
                    cx={100 + (ringRadius + 4) * Math.cos(angle)}
                    cy={100 + (ringRadius + 4) * Math.sin(angle)}
                    r="1.8"
                    fill="#7dd3fc"
                  />
                );
              })}
          </g>

          {/* the penguin grows as it levels */}
          <g transform={`translate(100 100) scale(${scale}) translate(-100 -100)`}>
            <ellipse cx="100" cy="120" rx="58" ry="68" fill="url(#evBody)" />
            <ellipse cx="100" cy="135" rx="36" ry="48" fill="url(#evBelly)" />
            <ellipse cx="100" cy="70" rx="42" ry="40" fill="url(#evBody)" />
            <circle cx="86" cy="68" r="9" fill="#f8fafc" />
            <circle cx="114" cy="68" r="9" fill="#f8fafc" />
            <circle cx="88" cy="70" r="4" fill="#0b1220" />
            <circle cx="116" cy="70" r="4" fill="#0b1220" />
            <circle cx="89" cy="69" r="1.4" fill="#38bdf8" />
            <circle cx="117" cy="69" r="1.4" fill="#38bdf8" />
            <path d="M92 84 Q100 92 108 84 Q100 96 92 84 Z" fill="url(#evBeak)" stroke="#b45309" strokeWidth="0.8" />
            <path d="M48 110 Q38 140 56 168 Q62 150 60 130 Z" fill="url(#evBody)" />
            <path d="M152 110 Q162 140 144 168 Q138 150 140 130 Z" fill="url(#evBody)" />
            <ellipse cx="86" cy="184" rx="14" ry="5" fill="url(#evBeak)" />
            <ellipse cx="114" cy="184" rx="14" ry="5" fill="url(#evBeak)" />

            {/* unlocked gear, in evolution order */}
            {EVOLUTIONS.slice(0, unlocked).map((evo, i) => (
              <g key={i}>{evo.node}</g>
            ))}
          </g>
        </g>
      </svg>
      <div className="text-xs font-bold mt-1 text-center" style={{ color: '#38bdf8' }}>
        EVO {unlocked}/{EVOLUTIONS.length} · {stageName}
      </div>
    </div>
  );
};

export default function Home() {
  const store = useSyncExternalStore(subscribeStore, readClientStore, getServerStoreSnapshot);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [wrongQueue, setWrongQueue] = useState<Question[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (showExplanation) {
          nextQuestion();
        } else if (userAnswer.trim()) {
          checkAnswer();
        }
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showExplanation, userAnswer, currentQuestionIndex, currentQuestions, wrongQueue]);

  const writeResume = (categoryId: string, snapshot: {
    list: Question[];
    index: number;
    score: number;
    totalAnswered: number;
    streak: number;
    bestStreak: number;
    wrong: Question[];
  }) => {
    writeStore((draft) => {
      const entry = draft[categoryId] ?? {};
      entry.resume = {
        questionIds: snapshot.list.map((q) => q.id),
        currentIndex: snapshot.index,
        score: snapshot.score,
        totalAnswered: snapshot.totalAnswered,
        streak: snapshot.streak,
        bestStreak: snapshot.bestStreak,
        wrongIds: snapshot.wrong.map((q) => q.id),
      };
      draft[categoryId] = entry;
    });
  };

  const recordBest = (categoryId: string, finalScore: number, finalTotal: number, finalBestStreak: number) => {
    if (finalTotal === 0) return;
    const accuracy = Math.round((finalScore / finalTotal) * 100);
    writeStore((draft) => {
      const entry = draft[categoryId] ?? {};
      const prev = entry.best;
      const isBetter =
        !prev ||
        accuracy > prev.accuracy ||
        (accuracy === prev.accuracy && finalScore > prev.score) ||
        (accuracy === prev.accuracy && finalScore === prev.score && finalBestStreak > prev.bestStreak);
      if (isBetter) {
        entry.best = {
          score: finalScore,
          total: finalTotal,
          accuracy,
          bestStreak: finalBestStreak,
          completedAt: Date.now(),
        };
      }
      delete entry.resume;
      draft[categoryId] = entry;
    });
  };

  const resetCategory = (categoryId: string, label: string) => {
    if (typeof window !== 'undefined' && !window.confirm(`Reset progress for "${label}"? This clears best stats and any saved run.`)) {
      return;
    }
    writeStore((draft) => {
      delete draft[categoryId];
    });
  };

  const enterCategory = (categoryId: string) => {
    const saved = store[categoryId]?.resume;
    if (saved) {
      const list = hydrateQuestions(saved.questionIds);
      if (list.length === saved.questionIds.length && list.length > 0) {
        setCurrentQuestions(list);
        setCurrentQuestionIndex(Math.min(saved.currentIndex, list.length - 1));
        setScore(saved.score);
        setTotalAnswered(saved.totalAnswered);
        setStreak(saved.streak);
        setBestStreak(saved.bestStreak);
        setWrongQueue(hydrateQuestions(saved.wrongIds));
        setSelectedCategory(categoryId);
        setUserAnswer('');
        setShowExplanation(false);
        return;
      }
    }
    const list = questionsForCategory(categoryId);
    setCurrentQuestions(list);
    setCurrentQuestionIndex(0);
    setScore(0);
    setTotalAnswered(0);
    setStreak(0);
    setBestStreak(0);
    setWrongQueue([]);
    setSelectedCategory(categoryId);
    setUserAnswer('');
    setShowExplanation(false);
  };

  const checkAnswer = () => {
    const question = currentQuestions[currentQuestionIndex];
    if (!question || !selectedCategory) return;

    const correct = isAnswerCorrect(userAnswer, question);
    setIsCorrect(correct);
    setShowExplanation(true);

    const nextScore = correct ? score + 1 : score;
    const nextStreak = correct ? streak + 1 : 0;
    const nextBestStreak = Math.max(bestStreak, nextStreak);
    const nextTotalAnswered = totalAnswered + 1;
    const nextWrong = correct ? wrongQueue : [...wrongQueue, question];

    setScore(nextScore);
    setStreak(nextStreak);
    setBestStreak(nextBestStreak);
    setTotalAnswered(nextTotalAnswered);
    if (!correct) setWrongQueue(nextWrong);

    writeResume(selectedCategory, {
      list: currentQuestions,
      index: currentQuestionIndex,
      score: nextScore,
      totalAnswered: nextTotalAnswered,
      streak: nextStreak,
      bestStreak: nextBestStreak,
      wrong: nextWrong,
    });
  };

  const revealAnswer = () => {
    const question = currentQuestions[currentQuestionIndex];
    if (!question || !selectedCategory) return;

    setIsCorrect(false);
    setShowExplanation(true);
    setUserAnswer('(revealed)');

    const nextStreak = 0;
    const nextTotalAnswered = totalAnswered + 1;
    const alreadyQueued = wrongQueue.some((q) => q.id === question.id);
    const nextWrong = alreadyQueued ? wrongQueue : [...wrongQueue, question];

    setStreak(nextStreak);
    setTotalAnswered(nextTotalAnswered);
    setWrongQueue(nextWrong);

    writeResume(selectedCategory, {
      list: currentQuestions,
      index: currentQuestionIndex,
      score,
      totalAnswered: nextTotalAnswered,
      streak: nextStreak,
      bestStreak,
      wrong: nextWrong,
    });
  };

  const nextQuestion = () => {
    if (!selectedCategory) return;

    // ✅ SPACED REPETITION FIX: Re-insert wrong questions early
    // 40% chance to inject a missed question 2-4 positions ahead
    if (wrongQueue.length > 0 && Math.random() < 0.4) {
      const wrongToRetry = wrongQueue[Math.floor(Math.random() * wrongQueue.length)];
      const spacingGap = 2 + Math.floor(Math.random() * 3); // 2-4 positions
      const insertPos = Math.min(currentQuestionIndex + spacingGap, currentQuestions.length);

      const updatedQuestions = [...currentQuestions];
      updatedQuestions.splice(insertPos, 0, wrongToRetry);
      setCurrentQuestions(updatedQuestions);

      // Remove from wrongQueue to avoid duplicates
      const updatedWrong = wrongQueue.filter((q) => q.id !== wrongToRetry.id);
      setWrongQueue(updatedWrong);

      // Update resume with new state
      writeResume(selectedCategory, {
        list: updatedQuestions,
        index: currentQuestionIndex + 1,
        score,
        totalAnswered,
        streak,
        bestStreak,
        wrong: updatedWrong,
      });
    }

    if (currentQuestionIndex < currentQuestions.length - 1) {
      const newIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(newIndex);
      setUserAnswer('');
      setShowExplanation(false);
      writeResume(selectedCategory, {
        list: currentQuestions,
        index: newIndex,
        score,
        totalAnswered,
        streak,
        bestStreak,
        wrong: wrongQueue,
      });
    } else {
      recordBest(selectedCategory, score, totalAnswered, bestStreak);
      setSelectedCategory(null);
    }
  };

  const retryWrongQuestions = () => {
    if (wrongQueue.length === 0 || !selectedCategory) return;
    const retryList = [...wrongQueue];
    setCurrentQuestions(retryList);
    setCurrentQuestionIndex(0);
    setWrongQueue([]);
    setUserAnswer('');
    setShowExplanation(false);
    writeResume(selectedCategory, {
      list: retryList,
      index: 0,
      score,
      totalAnswered,
      streak,
      bestStreak,
      wrong: [],
    });
  };

  const exitQuiz = () => {
    setSelectedCategory(null);
  };

  const accuracy = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0;

  if (!selectedCategory) {
    const dailyProgress = store['DAILY TIPS'];
    const allProgress = store[ALL_KEY];

    return (
      <div className="min-h-screen p-8" style={{ background: '#111827' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <PenguinAvatar />
            <h1 className="text-6xl font-bold mb-4" style={{ color: '#38bdf8', textShadow: '0 0 20px #38bdf8' }}>
              LINUX DRILL
            </h1>
            <p className="text-xl mb-2 font-mono" style={{ color: '#38bdf8' }}>
              {`// TERMINAL MASTERY THROUGH BRUTE FORCE REPETITION //`}
            </p>
            <p className="text-lg" style={{ color: '#38bdf8' }}>
              v3.5.0 — EVOLVING AVATAR + ALT ANSWERS + AUDITED QUESTIONS
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 mb-10">
            <button
              onClick={() => enterCategory('DAILY TIPS')}
              className="px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg"
              style={{ background: '#38bdf8', color: '#111827', fontWeight: 'bold', border: '2px solid #38bdf8' }}
            >
              📚 Daily Linux Tips & Best Practices Quiz
            </button>
            <CategoryMeta
              progress={dailyProgress}
              onReset={() => resetCategory('DAILY TIPS', 'Daily Linux Tips')}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {categories.filter((category) => category.id !== 'DAILY TIPS').map((category) => {
              const progress = store[category.id];
              return (
                <div
                  key={category.id}
                  className="p-6 rounded-xl shadow-lg transition-all"
                  style={{
                    background: '#111827',
                    border: '2px solid #38bdf8',
                    boxShadow: '0 0 10px rgba(56,189,248,0.2)',
                  }}
                >
                  <button
                    onClick={() => enterCategory(category.id)}
                    className="text-left w-full transition-transform hover:scale-[1.01]"
                  >
                    <h3 className="text-lg font-semibold mb-1" style={{ color: '#38bdf8' }}>
                      {category.name}
                    </h3>
                    <p className="text-sm mb-3" style={{ color: '#38bdf8', opacity: 0.85 }}>
                      {category.count} questions
                    </p>
                    <div style={{ color: '#38bdf8', fontWeight: 'bold' }}>
                      {progress?.resume ? '▶ RESUME DRILL' : '▶ START DRILL'}
                    </div>
                  </button>
                  <CategoryMeta
                    progress={progress}
                    onReset={() => resetCategory(category.id, category.name)}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex flex-col items-center gap-2">
            <button
              onClick={() => enterCategory(ALL_KEY)}
              className="px-12 py-6 rounded-xl transition-all transform hover:scale-105 shadow-lg text-xl font-bold"
              style={{ background: '#38bdf8', color: '#111827', border: '2px solid #38bdf8' }}
            >
              🔥 DRILL ALL CATEGORIES — RANDOM MIX — FULL GAUNTLET 🔥
            </button>
            <CategoryMeta
              progress={allProgress}
              onReset={() => resetCategory(ALL_KEY, 'All Categories')}
            />
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = currentQuestions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="min-h-screen p-8 flex items-center justify-center" style={{ background: '#111827' }}>
        <div
          className="rounded-xl shadow-lg p-8 text-center max-w-md"
          style={{ border: '2px solid #38bdf8', boxShadow: '0 0 20px rgba(56,189,248,0.3)', background: '#111827' }}
        >
          <div className="mb-4 flex justify-center">
            <EvolvingAvatar score={score} total={currentQuestions.length} size="w-44 h-44" />
          </div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#38bdf8' }}>
            🎉 Quiz Complete!
          </h2>
          <div className="space-y-2 mb-6">
            <p className="text-lg" style={{ color: '#38bdf8' }}>
              Score: <span className="font-bold">{score}/{totalAnswered}</span>
            </p>
            <p className="text-lg" style={{ color: '#38bdf8' }}>
              Accuracy: <span className="font-bold">{accuracy}%</span>
            </p>
            <p className="text-lg" style={{ color: '#38bdf8' }}>
              Best Streak: <span className="font-bold">{bestStreak}</span>
            </p>
          </div>
          <div className="space-y-3">
            {wrongQueue.length > 0 && (
              <button
                onClick={retryWrongQuestions}
                className="w-full py-3 rounded-lg transition-colors"
                style={{ background: '#38bdf8', color: '#111827', fontWeight: 'bold', border: '1px solid #38bdf8' }}
              >
                Retry Wrong Questions ({wrongQueue.length})
              </button>
            )}
            <button
              onClick={exitQuiz}
              className="w-full py-3 rounded-lg transition-colors"
              style={{ background: '#38bdf8', color: '#111827', fontWeight: 'bold', border: '1px solid #38bdf8' }}
            >
              Back to Categories
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8" style={{ background: '#111827' }}>
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-xl shadow-lg p-6 mb-6"
          style={{ border: '2px solid #38bdf8', boxShadow: '0 0 20px rgba(56,189,248,0.3)', background: '#111827' }}
        >
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold" style={{ color: '#38bdf8' }}>
              LINUX DRILL
            </h1>
            <button
              onClick={exitQuiz}
              className="px-4 py-2 rounded-lg transition-colors"
              style={{ background: '#38bdf8', color: '#111827', fontWeight: 'bold', border: '1px solid #38bdf8' }}
            >
              Exit Quiz
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <EvolvingAvatar score={score} total={currentQuestions.length} />
            <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <StatTile label="SCORE" value={`${score}/${totalAnswered}`} />
              <StatTile label="ACCURACY" value={`${accuracy}%`} />
              <StatTile label="STREAK 🔥" value={`${streak}`} />
              <StatTile label="WRONG QUEUE" value={`${wrongQueue.length}`} />
            </div>
          </div>

          <div className="mt-4">
            <div className="text-sm mb-1" style={{ color: '#38bdf8' }}>
              Category: <span className="font-semibold">{selectedCategory}</span>
            </div>
            <div
              className="w-full rounded-full h-2"
              style={{ background: '#1f2937', border: '1px solid #38bdf8' }}
            >
              <div
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`,
                  background: '#38bdf8',
                }}
              />
            </div>
            <div className="text-sm mt-1" style={{ color: '#38bdf8' }}>
              Question {currentQuestionIndex + 1} of {currentQuestions.length}
            </div>
          </div>
        </div>

        <div
          className="rounded-xl shadow-lg p-8 mb-6"
          style={{ border: '2px solid #38bdf8', boxShadow: '0 0 20px rgba(56,189,248,0.3)', background: '#111827' }}
        >
          <h2 className="text-xl font-semibold mb-6" style={{ color: '#38bdf8' }}>
            {currentQuestion.question}
          </h2>

          {!showExplanation ? (
            <div className="space-y-4">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Type your answer here... (Press Enter to submit)"
                className="w-full px-4 py-3 rounded-lg font-mono text-lg"
                style={{
                  background: '#1f2937',
                  border: '2px solid #38bdf8',
                  color: '#38bdf8',
                }}
                autoFocus
              />
              <div className="flex gap-3">
                <button
                  onClick={checkAnswer}
                  disabled={!userAnswer.trim()}
                  className="flex-1 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
                  style={{
                    background: userAnswer.trim() ? '#38bdf8' : '#64748b',
                    color: '#111827',
                  }}
                >
                  Check Answer
                </button>
                <button
                  onClick={revealAnswer}
                  className="flex-1 py-3 rounded-lg font-semibold transition-colors"
                  style={{ background: '#64748b', color: '#111827' }}
                >
                  Reveal Answer
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div
                className="p-4 rounded-lg"
                style={{
                  background: isCorrect ? '#065f46' : '#7c2d12',
                  border: `2px solid ${isCorrect ? '#38bdf8' : '#f97316'}`,
                }}
              >
                <div
                  style={{ color: isCorrect ? '#86efac' : '#fed7aa' }}
                  className="font-semibold text-lg mb-2"
                >
                  {isCorrect ? '✅ Correct!' : '❌ Incorrect'}
                </div>
                <div
                  style={{ color: isCorrect ? '#d1fae5' : '#fed7aa' }}
                  className="font-mono text-sm"
                >
                  Correct Answer: <span className="font-bold">{currentQuestion.answer}</span>
                </div>
                {userAnswer !== '(revealed)' && (
                  <div
                    style={{ color: isCorrect ? '#a7f3d0' : '#fbddc6' }}
                    className="font-mono text-sm mt-2"
                  >
                    Your Answer: <span className="font-bold">{userAnswer || '(blank)'}</span>
                  </div>
                )}
              </div>

              <div style={{ color: '#38bdf8' }}>
                <h3 className="font-semibold mb-2">Explanation:</h3>
                <p className="mb-4">{currentQuestion.explanation}</p>
                <h3 className="font-semibold mb-2">When to Use:</h3>
                <p className="mb-4">{currentQuestion.usage}</p>
                {currentQuestion.outputExample && (
                  <>
                    <h3 className="font-semibold mb-2">Example Output:</h3>
                    <div className="bg-black bg-opacity-40 p-3 rounded font-mono text-sm mb-4 border border-cyan-900 overflow-auto max-h-32">
                      <pre style={{ color: '#86efac' }}>{currentQuestion.outputExample}</pre>
                    </div>
                  </>
                )}
                {currentQuestion.examples && currentQuestion.examples.length > 0 && (
                  <>
                    <h3 className="font-semibold mb-2">More Examples:</h3>
                    <ul style={{ color: '#a7f3d0' }} className="text-sm space-y-1 list-disc list-inside">
                      {currentQuestion.examples.map((ex, i) => (
                        <li key={i}>{ex}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <button
                onClick={nextQuestion}
                className="w-full py-4 rounded-lg font-bold text-lg transition-colors"
                style={{ background: '#38bdf8', color: '#111827' }}
              >
                Continue (or press Enter)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="p-4 rounded-lg"
      style={{ border: '2px solid #38bdf8', boxShadow: '0 0 10px rgba(56,189,248,0.2)', background: '#1f2937' }}
    >
      <div className="text-xs font-bold mb-1" style={{ color: '#38bdf8', opacity: 0.7 }}>
        {label}
      </div>
      <div className="text-2xl font-bold" style={{ color: '#38bdf8' }}>
        {value}
      </div>
    </div>
  );
}

function CategoryMeta({ progress, onReset }: { progress?: CategoryProgress; onReset: () => void }) {
  if (!progress?.best && !progress?.resume) return null;

  return (
    <div className="mt-3 space-y-1 text-xs" style={{ color: '#38bdf8', opacity: 0.7 }}>
      {progress.best && (
        <>
          <div>Best: {progress.best.score}/{progress.best.total} ({progress.best.accuracy}%)</div>
          <div>Streak: {progress.best.bestStreak}</div>
        </>
      )}
      {progress.resume && <div>📌 Progress saved</div>}
      <button
        onClick={onReset}
        className="text-xs underline hover:opacity-100 transition-opacity"
        style={{ color: '#38bdf8', opacity: 0.6 }}
      >
        Reset
      </button>
    </div>
  );
}
