'use client';

import { useState, useSyncExternalStore } from 'react';
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

const shuffleArray = <T,>(items: T[]) => [...items].sort(() => Math.random() - 0.5);

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
  text.trim().toLowerCase().replace(/^sudo\s+/, '').replace(/\s+/g, ' ');

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

    const correct = normalizeAnswer(userAnswer) === normalizeAnswer(question.answer);
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

  const nextQuestion = () => {
    if (!selectedCategory) return;
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
              v3.1.0 — PROGRESS PERSISTENCE → PER-CATEGORY RESETS → SVG AVATAR
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
            {categories.map((category) => {
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
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#38bdf8' }}>
            Quiz Complete!
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <StatTile label="SCORE" value={`${score}/${totalAnswered}`} />
            <StatTile label="ACCURACY" value={`${accuracy}%`} />
            <StatTile label="STREAK 🔥" value={`${streak}`} />
            <StatTile label="WRONG QUEUE" value={`${wrongQueue.length}`} />
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
                onKeyDown={(e) => {
                  if (e.key === 'Enter') checkAnswer();
                }}
                placeholder="Type your command here..."
                style={{
                  color: '#38bdf8',
                  background: '#1f2937',
                  border: '2px solid #38bdf8',
                  fontFamily: 'monospace',
                  fontSize: '1.125rem',
                }}
                className="w-full p-4 rounded-lg focus:outline-none"
                autoFocus
              />
              <button
                onClick={checkAnswer}
                className="w-full py-3 rounded-lg transition-colors text-lg font-semibold"
                style={{ background: '#38bdf8', color: '#111827', border: '1px solid #38bdf8' }}
              >
                Check Answer
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div
                style={{
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  background: isCorrect ? '#1a3a1a' : '#23303f',
                  border: `2px solid ${isCorrect ? '#38bdf8' : '#ff4444'}`,
                }}
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{isCorrect ? '✅' : '❌'}</span>
                  <span style={{ fontWeight: 'bold', color: isCorrect ? '#38bdf8' : '#ff4444' }}>
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                  </span>
                </div>
                <div className="font-mono text-lg mb-2" style={{ color: '#38bdf8' }}>
                  Your answer: <span style={{ color: isCorrect ? '#38bdf8' : '#ff4444' }}>{userAnswer}</span>
                </div>
                {!isCorrect && (
                  <div className="font-mono text-lg" style={{ color: '#38bdf8' }}>
                    Correct answer:{' '}
                    <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>{currentQuestion.answer}</span>
                  </div>
                )}
              </div>

              <div
                style={{
                  background: '#111827',
                  padding: '1.5rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #38bdf8',
                  boxShadow: '0 0 10px rgba(56,189,248,0.2)',
                }}
              >
                <h3 className="font-semibold mb-3" style={{ color: '#38bdf8' }}>📚 Deep Explanation</h3>
                <p style={{ color: '#38bdf8', marginBottom: '1rem' }}>{currentQuestion.explanation}</p>

                <h4 className="font-semibold mb-2" style={{ color: '#38bdf8' }}>🎯 When to Use</h4>
                <p style={{ color: '#38bdf8', marginBottom: '1rem' }}>{currentQuestion.usage}</p>

                <h4 className="font-semibold mb-2" style={{ color: '#38bdf8' }}>🧠 Memory Technique</h4>
                <p style={{ color: '#38bdf8', marginBottom: '1rem', fontStyle: 'italic' }}>
                  {currentQuestion.memoryTip}
                </p>

                <h4 className="font-semibold mb-2" style={{ color: '#38bdf8' }}>💡 Examples</h4>
                <ul className="space-y-1 mb-4">
                  {currentQuestion.examples.map((example, index) => (
                    <li
                      key={index}
                      style={{
                        fontFamily: 'monospace',
                        fontSize: '0.875rem',
                        background: '#1f2937',
                        padding: '0.5rem',
                        borderRadius: '0.25rem',
                        border: '1px solid #38bdf8',
                        color: '#38bdf8',
                      }}
                    >
                      {example}
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold mb-2" style={{ color: '#38bdf8' }}>🖥️ Terminal Output Example</h4>
                <div
                  style={{
                    background: '#111827',
                    color: '#38bdf8',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    fontFamily: 'monospace',
                    fontSize: '0.875rem',
                    overflowX: 'auto',
                    border: '1px solid #38bdf8',
                  }}
                >
                  <pre style={{ color: '#38bdf8' }}>{currentQuestion.outputExample}</pre>
                </div>
              </div>

              <button
                onClick={nextQuestion}
                className="w-full py-3 rounded-lg transition-colors text-lg font-semibold"
                style={{ background: '#38bdf8', color: '#111827', border: '1px solid #38bdf8' }}
              >
                {currentQuestionIndex < currentQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const StatTile = ({ label, value }: { label: string; value: string }) => (
  <div className="p-3 rounded-lg" style={{ background: '#1f2937', border: '1px solid #38bdf8' }}>
    <div className="text-2xl font-bold" style={{ color: '#38bdf8' }}>{value}</div>
    <div className="text-sm" style={{ color: '#38bdf8' }}>{label}</div>
  </div>
);

const CategoryMeta = ({
  progress,
  onReset,
}: {
  progress: CategoryProgress | undefined;
  onReset: () => void;
}) => {
  const best = progress?.best;
  const resume = progress?.resume;
  const hasAny = Boolean(best || resume);

  if (!hasAny) {
    return (
      <div className="mt-3 flex items-center justify-between text-xs" style={{ color: '#38bdf8', opacity: 0.55 }}>
        <span>No attempts yet</span>
      </div>
    );
  }

  return (
    <div className="mt-3 flex items-center justify-between gap-2 text-xs" style={{ color: '#38bdf8' }}>
      <div className="flex flex-col items-start gap-1">
        {best ? (
          <span>
            BEST: <strong>{best.score}/{best.total}</strong> · {best.accuracy}% · 🔥{best.bestStreak}
          </span>
        ) : (
          <span style={{ opacity: 0.6 }}>No completed run yet</span>
        )}
        {resume && (
          <span style={{ opacity: 0.85 }}>
            IN PROGRESS: {resume.currentIndex + 1}/{resume.questionIds.length} · {resume.score}✓
          </span>
        )}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onReset();
        }}
        className="px-2 py-1 rounded transition-colors"
        style={{
          background: 'transparent',
          color: '#38bdf8',
          border: '1px solid #38bdf8',
          fontSize: '0.7rem',
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
        }}
        title="Reset this category's progress"
      >
        ↺ RESET
      </button>
    </div>
  );
};
