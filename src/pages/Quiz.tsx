import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, RefreshCcw, Layout, Cloud, Play, Zap } from 'lucide-react';
import { QUIZ_QUESTIONS, SERVICES } from '../constants';
import { cn } from '../lib/utils';

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: string[]) => {
    const counts: Record<string, number> = {};
    finalAnswers.forEach(a => counts[a] = (counts[a] || 0) + 1);
    const winner = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    setResult(winner);
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
  };

  const recommendedService = SERVICES.find(s => s.id === result);

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-32 bg-gray-50">
      <div className="max-w-3xl w-full">
        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-[2.5rem] google-shadow overflow-hidden"
            >
              <div className="h-3 bg-google-blue w-full" />
              <div className="p-10 md:p-16">
                <div className="mb-12">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-3">
                      <img 
                        src="https://www.gstatic.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" 
                        alt="G" 
                        className="w-6 h-6"
                        referrerPolicy="no-referrer"
                      />
                      <span className="text-xs font-bold text-google-blue uppercase tracking-[0.2em]">
                        Step {currentStep + 1} of {QUIZ_QUESTIONS.length}
                      </span>
                    </div>
                    <div className="w-48 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-google-blue"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                      />
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                    {QUIZ_QUESTIONS[currentStep].question}
                  </h2>
                </div>

                <div className="space-y-4">
                  {QUIZ_QUESTIONS[currentStep].options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(option.value)}
                      className="w-full text-left p-8 rounded-2xl border border-gray-100 hover:border-google-blue hover:bg-blue-50/50 transition-all group flex justify-between items-center"
                    >
                      <span className="text-lg font-bold text-gray-700 group-hover:text-google-blue">{option.text}</span>
                      <div className="w-8 h-8 rounded-full border-2 border-gray-200 group-hover:border-google-blue group-hover:bg-google-blue flex items-center justify-center transition-all">
                        <ArrowRight className="w-4 h-4 text-transparent group-hover:text-white transition-all" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[3rem] google-shadow overflow-hidden"
            >
              <div className={cn(
                "h-3 w-full",
                result === 'workspace' ? "bg-google-blue" :
                result === 'cloud' ? "bg-google-red" : "bg-google-green"
              )} />
              <div className="p-10 md:p-20 text-center">
                <div className={cn(
                  "w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-10 google-shadow",
                  result === 'workspace' ? "bg-blue-50" :
                  result === 'cloud' ? "bg-red-50" : "bg-green-50"
                )}>
                  <img 
                    src={recommendedService?.logoUrl} 
                    alt={recommendedService?.title} 
                    className="w-16 h-16 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h2 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-4">Recommended Solution</h2>
                <h3 className="text-5xl font-bold text-gray-900 mb-8 tracking-tight">{recommendedService?.title}</h3>
                <p className="text-gray-500 mb-12 text-xl leading-relaxed font-medium max-w-2xl mx-auto">
                  Based on your business profile, we recommend starting with {recommendedService?.title}. 
                  It offers the most scalable path for your current goals.
                </p>

                <div className="bg-gray-50 p-10 rounded-[2.5rem] mb-12 text-left border border-gray-100">
                  <h4 className="font-bold text-xl mb-6 flex items-center">
                    <Zap className="w-6 h-6 text-google-yellow mr-3" />
                    Key Benefits for You:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recommendedService?.features.map((f, i) => (
                      <li key={i} className="flex items-start text-gray-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-google-green mr-3 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
                  <Link
                    to={`/${result}`}
                    className={cn(
                      "px-12 py-5 rounded-full text-xl font-bold transition-all google-shadow hover:google-shadow-hover",
                      result === 'workspace' ? "bg-google-blue text-white" :
                      result === 'cloud' ? "bg-google-red text-white" : "bg-google-green text-white"
                    )}
                  >
                    Explore Solution
                  </Link>
                  <button
                    onClick={reset}
                    className="flex items-center justify-center space-x-2 text-gray-400 hover:text-gray-900 font-bold px-8 py-5 transition-colors"
                  >
                    <RefreshCcw className="w-5 h-5" />
                    <span>Start Over</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
