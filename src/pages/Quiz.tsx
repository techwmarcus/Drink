import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, RefreshCcw } from "lucide-react";
import { Link } from "react-router-dom";

const QUESTIONS = [
  {
    id: 1,
    question: "It's 2 AM. Where are you?",
    options: [
      { text: "Deep in a gaming session", type: "midnight" },
      { text: "At a late-night diner", type: "original" },
      { text: "Scrolling memes in bed", type: "solar" },
    ]
  },
  {
    id: 2,
    question: "Pick a vibe:",
    options: [
      { text: "Neon lights & synthwave", type: "midnight" },
      { text: "Vintage leather & vinyl", type: "original" },
      { text: "Chaos & loud music", type: "solar" },
    ]
  },
  {
    id: 3,
    question: "Your ideal snack pairing?",
    options: [
      { text: "Spicy chips", type: "solar" },
      { text: "Classic burger", type: "original" },
      { text: "Sour candy", type: "midnight" },
    ]
  }
];

const RESULTS = {
  original: {
    name: "THE ORIGINAL",
    desc: "You respect the classics but do it your way. You're the main character.",
    color: "bg-brand-red"
  },
  midnight: {
    name: "MIDNIGHT VOID",
    desc: "You thrive in the dark. Zero sugar, zero sleep, 100% focus.",
    color: "bg-brand-purple"
  },
  solar: {
    name: "SOLAR FLARE",
    desc: "You're unpredictable and bring the heat wherever you go.",
    color: "bg-brand-accent text-brand-dark"
  }
};

export function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (type: string) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);
    
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const counts = answers.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const maxType = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    return RESULTS[maxType as keyof typeof RESULTS];
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-brand-dark z-0" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-[100px] z-0" />

      <div className="max-w-2xl w-full mx-auto px-4 relative z-10">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-md"
            >
              <div className="mb-8 flex justify-between items-center text-sm font-bold text-brand-light/50 uppercase tracking-widest">
                <span>Question {currentQ + 1} of {QUESTIONS.length}</span>
                <span>Find Your Flavor</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-10">
                {QUESTIONS[currentQ].question}
              </h2>
              
              <div className="space-y-4">
                {QUESTIONS[currentQ].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt.type)}
                    className="w-full text-left p-6 rounded-xl border border-white/10 hover:border-brand-accent hover:bg-white/5 transition-all group flex justify-between items-center"
                  >
                    <span className="text-xl font-medium">{opt.text}</span>
                    <ArrowRight className="w-5 h-5 text-brand-accent opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all" />
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <span className="text-brand-accent font-bold tracking-widest uppercase mb-4 block">Your Match</span>
              <div className={`inline-block p-12 rounded-3xl mb-8 ${getResult().color}`}>
                <h2 className="text-5xl md:text-7xl font-display font-black mb-4">
                  {getResult().name}
                </h2>
                <p className="text-xl font-medium opacity-90 max-w-md mx-auto">
                  {getResult().desc}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-brand-dark rounded-full font-bold text-lg hover:bg-gray-200 transition-colors">
                  Claim Your 15% Off
                </button>
                <button onClick={resetQuiz} className="px-8 py-4 bg-white/10 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                  <RefreshCcw className="w-5 h-5" />
                  Retake Quiz
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
