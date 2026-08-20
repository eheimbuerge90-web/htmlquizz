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

// Splits a category into thirds (easy / medium / hard) by POSITION in the
// array, then shuffles within each third — never across thirds. This relies
// on questions.ts already listing each category's questions in roughly
// easy-to-hard order (true of every category as authored); shuffling the
// whole category instead would occasionally open a run on its hardest
// question, which defeats the "progressive difficulty" the app advertises.
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
    // A leading `sudo` is a privilege-escalation prefix, not part of the
    // command being tested — `apt update` and `sudo apt update` grade the
    // same. Quote style is likewise not what's being tested; the mobile
    // app's grader normalizes both the same way, and the two must agree or
    // the same typed answer could pass on one platform and fail on the other.
    .replace(/^sudo\s+/, '')
    .replace(/"/g, "'")
    .replace(/\s+/g, ' ');

const isAnswerCorrect = (typed: string, question: Question) => {
  const normalized = normalizeAnswer(typed);
  if (normalized === normalizeAnswer(question.answer)) return true;
  return (question.altAnswers ?? []).some((alt) => normalized === normalizeAnswer(alt));
};

// PROGRESS STORE — a hand-rolled external store (read via useSyncExternalStore
// below) instead of plain useState + a localStorage-writing useEffect. Two
// reasons: (1) Next.js prerenders this page on the server, where
// localStorage doesn't exist, so the very first read must be able to return
// a stable empty snapshot without throwing or mismatching what the client
// then hydrates with; getServerStoreSnapshot exists for exactly that. (2) A
// single JS-module-level cache (not per-component state) means every
// component reading progress — the category grid, the in-progress header,
// the completion screen — sees the same object identity and updates in
// lockstep the instant writeStore() runs, with no prop drilling or context.
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
    style={{ filter: 'drop-shadow(0 0 22px rgba(92,214,251,0.35))' }}
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
    <circle cx="100" cy="100" r="92" fill="none" stroke="var(--ld-accent)" strokeWidth="3" opacity="0.9" />

    <ellipse cx="100" cy="120" rx="58" ry="68" fill="url(#body)" />
    <ellipse cx="100" cy="135" rx="36" ry="48" fill="url(#belly)" />

    <ellipse cx="100" cy="70" rx="42" ry="40" fill="url(#body)" />

    <circle cx="86" cy="68" r="9" fill="#f8fafc" />
    <circle cx="114" cy="68" r="9" fill="#f8fafc" />
    <circle cx="88" cy="70" r="4" fill="#0b1220" />
    <circle cx="116" cy="70" r="4" fill="#0b1220" />
    <circle cx="89" cy="69" r="1.4" fill="var(--ld-accent)" />
    <circle cx="117" cy="69" r="1.4" fill="var(--ld-accent)" />

    <path d="M92 84 Q100 92 108 84 Q100 96 92 84 Z" fill="url(#beak)" stroke="#b45309" strokeWidth="0.8" />

    <path d="M48 110 Q38 140 56 168 Q62 150 60 130 Z" fill="url(#body)" />
    <path d="M152 110 Q162 140 144 168 Q138 150 140 130 Z" fill="url(#body)" />

    <ellipse cx="86" cy="184" rx="14" ry="5" fill="url(#beak)" />
    <ellipse cx="114" cy="184" rx="14" ry="5" fill="url(#beak)" />

    <circle cx="100" cy="100" r="92" fill="none" stroke="var(--ld-accent)" strokeWidth="1" opacity="0.35" />
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
        <rect x="87" y="124" width="26" height="16" rx="3" fill="#0b1220" stroke="var(--ld-accent)" strokeWidth="1.2" />
        <text x="92" y="136" fontSize="10" fontFamily="monospace" fill="var(--ld-accent)">{'>_'}</text>
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
        <rect x="74" y="152" width="52" height="17" rx="3" fill="#0b1220" stroke="var(--ld-accent)" strokeWidth="1.3" />
        {[78, 86, 94, 102, 110, 118].map((x) => (
          <rect key={x} x={x} y="156" width="6" height="4" rx="1" fill="var(--ld-accent)" opacity="0.8" />
        ))}
        <rect x="84" y="162" width="32" height="4" rx="1" fill="var(--ld-accent)" opacity="0.6" />
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
        <polygon points="100,24 142,40 100,56 58,40" fill="#0b1220" stroke="var(--ld-accent)" strokeWidth="1.5" />
        <path d="M132 44 L132 58" stroke="#fbbf24" strokeWidth="2" />
        <circle cx="132" cy="61" r="3" fill="#fbbf24" />
      </g>
    ),
  },
  {
    name: 'Aura of Uptime',
    node: (
      <g fill="none" stroke="var(--ld-accent)">
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
              stroke="var(--ld-accent)"
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
            <circle cx="89" cy="69" r="1.4" fill="var(--ld-accent)" />
            <circle cx="117" cy="69" r="1.4" fill="var(--ld-accent)" />
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
      <div className="ld-eyebrow mt-2 text-center">
        evo {unlocked}/{EVOLUTIONS.length} · {stageName}
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

  // checkAnswer/nextQuestion are deliberately left out of the dependency
  // array — they're plain consts re-created every render (not memoized), so
  // listing them would re-subscribe on every render instead of only when the
  // state the closure actually reads changes.
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showExplanation, userAnswer, currentQuestionIndex, currentQuestions, wrongQueue]);

  const accuracy = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0;

  if (!selectedCategory) {
    const dailyProgress = store['DAILY TIPS'];
    const allProgress = store[ALL_KEY];

    const totalQuestions = questions.length;
    // Daily Tips has its own featured card above, so it is kept out of the grid.
    // Insertion order of the categories array defines the section order.
    const groupedCategories = Array.from(
      categories
        .filter((category) => category.id !== 'DAILY TIPS')
        .reduce((acc, category) => {
          const list = acc.get(category.group) ?? [];
          list.push(category);
          acc.set(category.group, list);
          return acc;
        }, new Map<string, typeof categories>())
    );

    return (
      <div className="min-h-screen px-5 py-10 sm:px-8 sm:py-14">
        <div className="max-w-5xl mx-auto ld-enter">
          <header className="text-center mb-12">
            <PenguinAvatar />
            <h1 className="ld-title text-5xl sm:text-6xl mb-3">
              linux<span className="ld-caret">·</span>drill
            </h1>
            <p className="ld-subtitle max-w-xl mx-auto">
              Terminal fluency through deliberate practice. Type the real command —
              no multiple choice.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
              <span className="ld-chip">{totalQuestions} questions</span>
              <span className="ld-chip">{categories.length} categories</span>
              <span className="ld-chip">progress saved locally</span>
            </div>
          </header>

          <section className="mb-10">
            <div className="ld-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex-1">
                <div className="ld-eyebrow mb-1">Start here</div>
                <h2 className="text-lg font-semibold mb-1">Daily Linux Tips &amp; Best Practices</h2>
                <p className="ld-body text-sm">
                  A rotating set of habits and shortcuts worth knowing cold.
                </p>
                <CategoryMeta
                  progress={dailyProgress}
                  onReset={() => resetCategory('DAILY TIPS', 'Daily Linux Tips')}
                />
              </div>
              <button onClick={() => enterCategory('DAILY TIPS')} className="ld-btn ld-btn-primary sm:w-auto w-full">
                {dailyProgress?.resume ? 'Resume' : 'Start'} daily drill
              </button>
            </div>
          </section>

          {/* Sectioned rather than one flat grid. The bank went from 15 to 26
              categories; as a single wall of near-identical tiles it gives a
              learner no sense of where to start or how the topics relate. */}
          {groupedCategories.map(([group, cats]) => (
            <section key={group} className="mb-9">
              <div className="flex items-baseline gap-3 mb-3">
                <div className="ld-eyebrow">{group}</div>
                <div className="flex-1 h-px" style={{ background: 'var(--ld-border)' }} />
                <div className="ld-eyebrow">
                  {cats.reduce((n, c) => n + c.count, 0)}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cats.map((category) => {
                  const progress = store[category.id];
                  const pct = progress?.best
                    ? Math.round((progress.best.score / Math.max(progress.best.total, 1)) * 100)
                    : null;
                  return (
                    <div key={category.id} className="ld-tile p-5 flex flex-col">
                      <button
                        onClick={() => enterCategory(category.id)}
                        className="text-left w-full flex-1"
                      >
                        <h3 className="font-semibold mb-1">{category.name}</h3>
                        <p className="ld-body text-sm mb-4">{category.count} questions</p>
                        {pct !== null && (
                          <div className="mb-4">
                            <div className="ld-progress">
                              <div className="ld-progress-fill" style={{ width: `${pct}%` }} />
                            </div>
                            <div className="ld-eyebrow mt-1.5">best {pct}%</div>
                          </div>
                        )}
                        <span
                          className="ld-mono text-sm font-semibold"
                          style={{ color: 'var(--ld-accent)' }}
                        >
                          {progress?.resume ? 'resume →' : 'start →'}
                        </span>
                      </button>
                      <CategoryMeta
                        progress={progress}
                        onReset={() => resetCategory(category.id, category.name)}
                      />
                    </div>
                  );
                })}
              </div>
            </section>
          ))}

          <section className="ld-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-1">
              <div className="ld-eyebrow mb-1">Full gauntlet</div>
              <h2 className="text-lg font-semibold mb-1">All categories, shuffled</h2>
              <p className="ld-body text-sm">
                Every question in the bank, mixed and ramped from easy to hard.
              </p>
              <CategoryMeta
                progress={allProgress}
                onReset={() => resetCategory(ALL_KEY, 'All Categories')}
              />
            </div>
            <button onClick={() => enterCategory(ALL_KEY)} className="ld-btn ld-btn-secondary sm:w-auto w-full">
              {allProgress?.resume ? 'Resume' : 'Start'} full run
            </button>
          </section>
        </div>
      </div>
    );
  }

  const currentQuestion = currentQuestions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="min-h-screen px-5 py-10 flex items-center justify-center">
        <div className="ld-card p-8 text-center max-w-md w-full ld-enter">
          <div className="mb-5 flex justify-center">
            <EvolvingAvatar score={score} total={currentQuestions.length} size="w-40 h-40" />
          </div>
          <div className="ld-eyebrow mb-2">Run complete</div>
          <h2 className="ld-title text-3xl mb-6">{selectedCategory}</h2>

          <div className="grid grid-cols-3 gap-3 mb-7">
            <div className="ld-stat">
              <div className="ld-stat-label">Score</div>
              <div className="ld-stat-value">{score}/{totalAnswered}</div>
            </div>
            <div className="ld-stat">
              <div className="ld-stat-label">Accuracy</div>
              <div className={`ld-stat-value ${accuracy >= 80 ? 'is-success' : accuracy >= 50 ? 'is-warn' : ''}`}>
                {accuracy}%
              </div>
            </div>
            <div className="ld-stat">
              <div className="ld-stat-label">Best streak</div>
              <div className="ld-stat-value is-accent">{bestStreak}</div>
            </div>
          </div>

          <div className="space-y-3">
            {wrongQueue.length > 0 && (
              <button onClick={retryWrongQuestions} className="ld-btn ld-btn-primary w-full">
                Retry {wrongQueue.length} missed
              </button>
            )}
            <button onClick={exitQuiz} className="ld-btn ld-btn-ghost w-full">
              Back to categories
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-5 py-8 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="ld-card p-5 sm:p-6 mb-5">
          <div className="flex justify-between items-start gap-4 mb-5">
            <div className="min-w-0">
              <div className="ld-eyebrow mb-1">{selectedCategory}</div>
              <h1 className="ld-title text-xl">
                linux<span className="ld-caret">·</span>drill
              </h1>
            </div>
            <button onClick={exitQuiz} className="ld-btn ld-btn-ghost shrink-0">
              Exit
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <EvolvingAvatar score={score} total={currentQuestions.length} />
            <div className="flex-1 w-full grid grid-cols-2 sm:grid-cols-4 gap-3">
              <StatTile label="Score" value={`${score}/${totalAnswered}`} />
              <StatTile
                label="Accuracy"
                value={`${accuracy}%`}
                tone={accuracy >= 80 ? 'is-success' : accuracy >= 50 ? 'is-warn' : ''}
              />
              <StatTile label="Streak" value={`${streak}`} tone="is-accent" />
              <StatTile label="Missed" value={`${wrongQueue.length}`} />
            </div>
          </div>

          <div className="mt-5">
            <div className="ld-progress">
              <div
                className="ld-progress-fill"
                style={{ width: `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%` }}
              />
            </div>
            <div className="ld-eyebrow mt-2">
              Question {currentQuestionIndex + 1} / {currentQuestions.length}
            </div>
          </div>
        </div>

        <div className="ld-card p-5 sm:p-7 mb-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-6 leading-snug">
            {currentQuestion.question}
          </h2>

          {!showExplanation ? (
            <div className="space-y-4">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="type the command…"
                className="ld-input"
                autoFocus
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={checkAnswer}
                  disabled={!userAnswer.trim()}
                  className="ld-btn ld-btn-primary flex-1"
                >
                  Check answer
                </button>
                <button onClick={revealAnswer} className="ld-btn ld-btn-ghost flex-1">
                  Reveal
                </button>
              </div>
              <p className="ld-eyebrow text-center">Enter to submit</p>
            </div>
          ) : (
            <div className="space-y-6 ld-enter">
              <div className={`ld-verdict ${isCorrect ? 'ld-verdict-correct' : 'ld-verdict-wrong'}`}>
                <div className="ld-verdict-title mb-3">
                  {isCorrect ? 'Correct' : 'Not quite'}
                </div>
                <div className="text-sm mb-1.5">
                  <span className="ld-eyebrow">Answer</span>{' '}
                  <code className="ld-cmd ml-1">{currentQuestion.answer}</code>
                </div>
                {userAnswer !== '(revealed)' && !isCorrect && (
                  <div className="text-sm">
                    <span className="ld-eyebrow">You typed</span>{' '}
                    <code className="ld-cmd ml-1">{userAnswer || '(blank)'}</code>
                  </div>
                )}
              </div>

              <div>
                <div className="ld-section-label">What it does</div>
                <p className="ld-body mb-5">{currentQuestion.explanation}</p>

                <div className="ld-section-label">When to reach for it</div>
                <p className="ld-body mb-5">{currentQuestion.usage}</p>

                {currentQuestion.outputExample && (
                  <>
                    <div className="ld-section-label">Example output</div>
                    <div className="ld-code mb-5 max-h-44">{currentQuestion.outputExample}</div>
                  </>
                )}

                {currentQuestion.examples && currentQuestion.examples.length > 0 && (
                  <>
                    <div className="ld-section-label">Variations</div>
                    <ul className="space-y-1.5 mb-5">
                      {currentQuestion.examples.map((ex, i) => (
                        <li key={i} className="ld-mono text-sm ld-body">
                          <span style={{ color: 'var(--ld-text-dim)' }}>$ </span>
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {currentQuestion.memoryTip && (
                  <div className="ld-card-quiet p-4">
                    <div className="ld-section-label">Remember it</div>
                    <p className="ld-body text-sm">{currentQuestion.memoryTip}</p>
                  </div>
                )}
              </div>

              <button onClick={nextQuestion} className="ld-btn ld-btn-primary w-full">
                Continue
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatTile({ label, value, tone = '' }: { label: string; value: string; tone?: string }) {
  return (
    <div className="ld-stat">
      <div className="ld-stat-label">{label}</div>
      <div className={`ld-stat-value ${tone}`}>{value}</div>
    </div>
  );
}

function CategoryMeta({ progress, onReset }: { progress?: CategoryProgress; onReset: () => void }) {
  if (!progress?.best && !progress?.resume) return null;

  return (
    <div className="mt-4 pt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5"
         style={{ borderTop: '1px solid var(--ld-border)' }}>
      {progress.best && (
        <span className="ld-eyebrow">
          best {progress.best.score}/{progress.best.total} · streak {progress.best.bestStreak}
        </span>
      )}
      {progress.resume && <span className="ld-chip">saved</span>}
      <button onClick={onReset} className="ld-btn-link ml-auto">
        reset
      </button>
    </div>
  );
}
