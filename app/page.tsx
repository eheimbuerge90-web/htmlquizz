'use client';

import { useState } from 'react';
import { questions, categories, Question } from './data/questions';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [streak, setStreak] = useState(0);
  const [wrongQueue, setWrongQueue] = useState<Question[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const startCategory = (categoryId: string) => {
    const categoryQuestions = questions.filter(q => q.category === categoryId);
    setCurrentQuestions(categoryQuestions);
    setCurrentQuestionIndex(0);
    setSelectedCategory(categoryId);
    setScore(0);
    setTotalAnswered(0);
    setStreak(0);
    setWrongQueue([]);
    setUserAnswer('');
    setShowExplanation(false);
  };

  const startAllCategories = () => {
    const allQuestions = [...questions].sort(() => Math.random() - 0.5);
    setCurrentQuestions(allQuestions);
    setCurrentQuestionIndex(0);
    setSelectedCategory('ALL');
    setScore(0);
    setTotalAnswered(0);
    setStreak(0);
    setWrongQueue([]);
    setUserAnswer('');
    setShowExplanation(false);
  };

  const checkAnswer = () => {
    if (!currentQuestions[currentQuestionIndex]) return;

    const correct = userAnswer.trim().toLowerCase() === currentQuestions[currentQuestionIndex].answer.toLowerCase();
    setIsCorrect(correct);
    setShowExplanation(true);

    if (correct) {
      setScore(score + 1);
      setStreak(streak + 1);
    } else {
      setStreak(0);
      setWrongQueue([...wrongQueue, currentQuestions[currentQuestionIndex]]);
    }

    setTotalAnswered(totalAnswered + 1);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer('');
      setShowExplanation(false);
    } else {
      // Quiz complete
      setSelectedCategory(null);
    }
  };

  const retryWrongQuestions = () => {
    if (wrongQueue.length > 0) {
      setCurrentQuestions([...wrongQueue]);
      setCurrentQuestionIndex(0);
      setWrongQueue([]);
      setUserAnswer('');
      setShowExplanation(false);
    }
  };

  const accuracy = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0;

  if (!selectedCategory) {
    return (
      <div className="min-h-screen p-8" style={{background: '#0a0a0a'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-6">
              <div className="w-48 h-48 mx-auto mb-6 relative">
                {/* Enhanced Penguin Avatar */}
                <div className="w-full h-full bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 rounded-full shadow-2xl border-4" style={{borderColor: '#00ff41', boxShadow: '0 0 20px rgba(0,255,65,0.4)'}} >
                  {/* Penguin Body */}
                  <div className="absolute inset-2 bg-gradient-to-b from-slate-800 to-slate-900 rounded-full">
                    {/* White Belly */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-gradient-to-t from-white to-slate-100 rounded-t-full"></div>

                    {/* Penguin Head */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-20 bg-gradient-to-b from-slate-700 to-slate-800 rounded-full">
                      {/* Eyes */}
                      <div className="absolute top-3 left-3 w-3 h-3 bg-white rounded-full">
                        <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-black rounded-full"></div>
                      </div>
                      <div className="absolute top-3 right-3 w-3 h-3 bg-white rounded-full">
                        <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-black rounded-full"></div>
                      </div>

                      {/* Beak */}
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-sm"></div>
                    </div>

                    {/* Flippers */}
                    <div className="absolute top-8 -left-1 w-6 h-12 bg-gradient-to-r from-slate-700 to-slate-800 rounded-r-full transform rotate-12"></div>
                    <div className="absolute top-8 -right-1 w-6 h-12 bg-gradient-to-l from-slate-700 to-slate-800 rounded-l-full transform -rotate-12"></div>

                    {/* Feet */}
                    <div className="absolute -bottom-1 left-6 w-4 h-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-b-lg"></div>
                    <div className="absolute -bottom-1 right-6 w-4 h-3 bg-gradient-to-l from-orange-400 to-orange-500 rounded-b-lg"></div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full animate-pulse"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-lg animate-bounce">
                  💻
                </div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-lg animate-bounce" style={{animationDelay: '0.5s'}}>
                  🐧
                </div>
              </div>
              <h1 className="text-6xl font-bold mb-4" style={{color: '#00ff41', textShadow: '0 0 20px #00ff41'}}>
                LINUX DRILL
              </h1>
              <p className="text-xl mb-2 font-mono" style={{color: '#00ff41'}}>{`// TERMINAL MASTERY THROUGH BRUTE FORCE REPETITION //`}</p>
              <p className="text-lg" style={{color: '#00ff41'}}>v3.0.0 — MEMORY TECHNIQUES → OUTPUT EXAMPLES → ENHANCED AVATAR</p>
            </div>

            <button
              onClick={() => startCategory('DAILY TIPS')}
              className="mb-8 px-8 py-4 text-white rounded-xl hover:transition-all transform hover:scale-105 shadow-lg"
              style={{background: '#00ff41', color: '#0a0a0a', fontWeight: 'bold', border: '2px solid #00ff41'}}
            >
              📚 Daily Linux Tips & Best Practices Quiz
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => startCategory(category.id)}
                className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                style={{background: '#0a0a0a', border: '2px solid #00ff41', boxShadow: '0 0 10px rgba(0,255,65,0.2)'}}
              >
                <div className="text-left">
                  <h3 className="text-lg font-semibold mb-2" style={{color: '#00ff41'}}>{category.name}</h3>
                  <p className="text-sm mb-3" style={{color: '#00ff41'}}>{category.count} questions</p>
                  <div style={{color: '#00ff41', fontWeight: 'bold'}}>▶ START DRILL</div>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={startAllCategories}
              className="text-white px-12 py-6 rounded-xl hover:transition-all transform hover:scale-105 shadow-lg text-xl font-bold"
              style={{background: '#00ff41', color: '#0a0a0a', border: '2px solid #00ff41'}}
            >
              🔥 DRILL ALL CATEGORIES — RANDOM MIX — FULL GAUNTLET 🔥
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = currentQuestions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="min-h-screen p-8 flex items-center justify-center" style={{background: '#0a0a0a'}}>
        <div className="rounded-xl shadow-lg p-8 text-center max-w-md" style={{border: '2px solid #00ff41', boxShadow: '0 0 20px rgba(0,255,65,0.3)', background: '#0a0a0a'}}>
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-4" style={{color: '#00ff41'}}>Quiz Complete!</h2>
          <div className="space-y-2 mb-6">
            <p className="text-lg" style={{color: '#00ff41'}}>Score: <span className="font-bold">{score}/{totalAnswered}</span></p>
            <p className="text-lg" style={{color: '#00ff41'}}>Accuracy: <span className="font-bold">{accuracy}%</span></p>
            <p className="text-lg" style={{color: '#00ff41'}}>Best Streak: <span className="font-bold">{streak}</span></p>
          </div>
          <div className="space-y-3">
            {wrongQueue.length > 0 && (
              <button
                onClick={retryWrongQuestions}
                className="w-full py-3 rounded-lg transition-colors"
                style={{background: '#00ff41', color: '#0a0a0a', fontWeight: 'bold', border: '1px solid #00ff41'}}
              >
                Retry Wrong Questions ({wrongQueue.length})
              </button>
            )}
            <button
              onClick={() => setSelectedCategory(null)}
              className="w-full py-3 rounded-lg transition-colors"
              style={{background: '#00ff41', color: '#0a0a0a', fontWeight: 'bold', border: '1px solid #00ff41'}}
            >
              Back to Categories
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8" style={{background: '#0a0a0a'}}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="rounded-xl shadow-lg p-6 mb-6" style={{border: '2px solid #00ff41', boxShadow: '0 0 20px rgba(0,255,65,0.3)', background: '#0a0a0a'}}>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold" style={{color: '#00ff41'}}>LINUX DRILL</h1>
            <button
              onClick={() => setSelectedCategory(null)}
              className="px-4 py-2 rounded-lg transition-colors"
              style={{background: '#00ff41', color: '#0a0a0a', fontWeight: 'bold', border: '1px solid #00ff41'}}
            >
              Exit Quiz
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded-lg" style={{background: '#1a1a1a', border: '1px solid #00ff41'}}>
              <div className="text-2xl font-bold" style={{color: '#00ff41'}}>{score}/{totalAnswered}</div>
              <div className="text-sm" style={{color: '#00ff41'}}>SCORE</div>
            </div>
            <div className="p-3 rounded-lg" style={{background: '#1a1a1a', border: '1px solid #00ff41'}}>
              <div className="text-2xl font-bold" style={{color: '#00ff41'}}>{accuracy}%</div>
              <div className="text-sm" style={{color: '#00ff41'}}>ACCURACY</div>
            </div>
            <div className="p-3 rounded-lg" style={{background: '#1a1a1a', border: '1px solid #00ff41'}}>
              <div className="text-2xl font-bold" style={{color: '#00ff41'}}>{streak}</div>
              <div className="text-sm" style={{color: '#00ff41'}}>STREAK 🔥</div>
            </div>
            <div className="p-3 rounded-lg" style={{background: '#1a1a1a', border: '1px solid #00ff41'}}>
              <div className="text-2xl font-bold" style={{color: '#00ff41'}}>{wrongQueue.length}</div>
              <div className="text-sm" style={{color: '#00ff41'}}>WRONG QUEUE</div>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-sm mb-1" style={{color: '#00ff41'}}>
              Category: <span className="font-semibold">{selectedCategory}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2" style={{background: '#1a1a1a', border: '1px solid #00ff41'}}>
              <div
                className="h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`, background: '#00ff41' }}
              ></div>
            </div>
            <div className="text-sm mt-1" style={{color: '#00ff41'}}>
              Question {currentQuestionIndex + 1} of {currentQuestions.length}
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="rounded-xl shadow-lg p-8 mb-6" style={{border: '2px solid #00ff41', boxShadow: '0 0 20px rgba(0,255,65,0.3)', background: '#0a0a0a'}}>
          <h2 className="text-xl font-semibold mb-6" style={{color: '#00ff41'}}>
            {currentQuestion.question}
          </h2>

          {!showExplanation ? (
            <div className="space-y-4">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
                placeholder="Type your command here..."
                style={{color: '#00ff41', background: '#1a1a1a', border: '2px solid #00ff41', fontFamily: 'monospace', fontSize: '1.125rem'}}
                className="w-full p-4 rounded-lg focus:outline-none"
                autoFocus
              />
              <button
                onClick={checkAnswer}
                className="w-full py-3 rounded-lg transition-colors text-lg font-semibold"
                style={{background: '#00ff41', color: '#0a0a0a', border: '1px solid #00ff41'}}
              >
                Check Answer
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div style={{padding: '1rem', borderRadius: '0.5rem', background: isCorrect ? '#1a3a1a' : '#3a1a1a', border: `2px solid ${isCorrect ? '#00ff41' : '#ff4444'}`}}>
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{isCorrect ? '✅' : '❌'}</span>
                  <span style={{fontWeight: 'bold', color: isCorrect ? '#00ff41' : '#ff4444'}}>
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                  </span>
                </div>
                <div className="font-mono text-lg mb-2" style={{color: '#00ff41'}}>
                  Your answer: <span style={{color: isCorrect ? '#00ff41' : '#ff4444'}}>{userAnswer}</span>
                </div>
                {!isCorrect && (
                  <div className="font-mono text-lg" style={{color: '#00ff41'}}>
                    Correct answer: <span style={{color: '#00ff41', fontWeight: 'bold'}}>{currentQuestion.answer}</span>
                  </div>
                )}
              </div>

              <div style={{background: '#0a0a0a', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #00ff41', boxShadow: '0 0 10px rgba(0,255,65,0.2)'}}>
                <h3 className="font-semibold mb-3" style={{color: '#00ff41'}}>📚 Deep Explanation</h3>
                <p style={{color: '#00ff41', marginBottom: '1rem'}}>{currentQuestion.explanation}</p>

                <h4 className="font-semibold mb-2" style={{color: '#00ff41'}}>🎯 When to Use</h4>
                <p style={{color: '#00ff41', marginBottom: '1rem'}}>{currentQuestion.usage}</p>

                <h4 className="font-semibold mb-2" style={{color: '#00ff41'}}>🧠 Memory Technique</h4>
                <p style={{color: '#00ff41', marginBottom: '1rem', fontStyle: 'italic'}}>{currentQuestion.memoryTip}</p>

                <h4 className="font-semibold mb-2" style={{color: '#00ff41'}}>💡 Examples</h4>
                <ul className="space-y-1 mb-4">
                  {currentQuestion.examples.map((example, index) => (
                    <li key={index} style={{fontFamily: 'monospace', fontSize: '0.875rem', background: '#1a1a1a', padding: '0.5rem', borderRadius: '0.25rem', border: '1px solid #00ff41', color: '#00ff41'}}>
                      {example}
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold mb-2" style={{color: '#00ff41'}}>🖥️ Terminal Output Example</h4>
                <div style={{background: '#0a0a0a', color: '#00ff41', padding: '1rem', borderRadius: '0.5rem', fontFamily: 'monospace', fontSize: '0.875rem', overflowX: 'auto', border: '1px solid #00ff41'}}>
                  <pre style={{color: '#00ff41'}}>{currentQuestion.outputExample}</pre>
                </div>
              </div>

              <button
                onClick={nextQuestion}
                className="w-full py-3 rounded-lg transition-colors text-lg font-semibold"
                style={{background: '#00ff41', color: '#0a0a0a', border: '1px solid #00ff41'}}
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
