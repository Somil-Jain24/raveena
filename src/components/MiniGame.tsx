
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gamepad2, Check, X, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Question {
  text: string;
  options: string[];
  correctIndex: number;
}

const MiniGame = () => {
  const { toast } = useToast();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);

  const questions: Question[] = [
    {
      text: "What's Raveena's favorite 'emergency exit phrase'?",
      options: [
        "Sorry, I'm busy fixing Somil's love life.",
        "Chill, let me handle this drama.",
        "I need to go water my imaginary plants.",
        "My coffee is getting cold, talk later."
      ],
      correctIndex: 0
    },
    {
      text: "What food can Raveena never resist?",
      options: [
        "Coffee",
        "Pizza",
        "Chocolates",
        "All of the above"
      ],
      correctIndex: 3
    },
    {
      text: "What's Raveena's go-to reaction when Somil shares his poetry?",
      options: [
        "Genuine appreciation",
        "Supportive feedback",
        "Eye-rolling and sarcasm",
        "Immediate change of topic"
      ],
      correctIndex: 2
    },
    {
      text: "How does Raveena solve most friendship problems?",
      options: [
        "Deep emotional conversations",
        "Sending memes until everyone laughs",
        "Ignoring until it resolves itself",
        "Creating a detailed PowerPoint presentation"
      ],
      correctIndex: 1
    }
  ];

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (index: number) => {
    if (selectedOptionIndex !== null) return; // Already answered
    
    setSelectedOptionIndex(index);
    
    if (index === currentQuestion.correctIndex) {
      setScore(score + 1);
      toast({
        title: "Correct! 🎉",
        description: "You really know Raveena!",
        duration: 2000,
      });
    } else {
      toast({
        title: "Wrong! 😅",
        description: "Raveena is disappointed but not surprised",
        variant: "destructive",
        duration: 2000,
      });
    }

    // Move to next question after delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOptionIndex(null);
      } else {
        setGameCompleted(true);
      }
    }, 1500);
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setScore(0);
    setGameCompleted(false);
  };

  const getFeedback = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "Perfect! Raveena is impressed you know her so well!";
    if (percentage >= 75) return "Not bad! You're definitely in Raveena's inner circle.";
    if (percentage >= 50) return "Hmm... Raveena expected better from you.";
    return "Oh no! Do you even know Raveena at all?";
  };

  return (
    <section id="game" className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 gradient-text flex items-center justify-center gap-2">
          <Gamepad2 size={28} />
          How Well Do You Know Raveena?
        </h2>
        <p className="text-center text-gray-600 italic mb-8">Let's see if Somil remembers anything 😂</p>

        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardContent className="p-6">
            {!gameCompleted ? (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-sm font-medium text-gray-500">
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </p>
                  <p className="text-sm font-medium">
                    Score: <span className="text-raveena-purple">{score}</span>
                  </p>
                </div>

                <h3 className="text-xl font-bold mb-6">{currentQuestion.text}</h3>

                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className={`w-full justify-start text-left h-auto py-3 px-4 ${
                        selectedOptionIndex === index
                          ? index === currentQuestion.correctIndex
                            ? "bg-green-50 border-green-400"
                            : "bg-red-50 border-red-400"
                          : "hover:bg-purple-50"
                      }`}
                      disabled={selectedOptionIndex !== null}
                      onClick={() => handleOptionClick(index)}
                    >
                      <div className="flex items-center w-full">
                        <span className="flex-grow">{option}</span>
                        {selectedOptionIndex === index && (
                          index === currentQuestion.correctIndex ? 
                            <Check size={20} className="text-green-600" /> : 
                            <X size={20} className="text-red-600" />
                        )}
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold mb-2">
                  Quiz Complete!
                </h3>
                <p className="text-xl mb-4">
                  Your Score: <span className="text-raveena-purple font-bold">{score}/{questions.length}</span>
                </p>
                <p className="mb-6 italic">{getFeedback()}</p>
                
                <Button 
                  onClick={resetGame}
                  className="bg-gradient-to-r from-raveena-purple to-raveena-pink text-white"
                >
                  <RefreshCw size={18} className="mr-2" />
                  Play Again
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MiniGame;
