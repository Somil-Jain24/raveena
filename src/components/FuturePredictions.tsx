
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, RefreshCw } from 'lucide-react';

const FuturePredictions = () => {
  const [question, setQuestion] = useState<string>("");
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isShaking, setIsShaking] = useState(false);
  
  const predictions = [
    "Yes, but only if her future husband knows sarcasm as well as she does.",
    "Sure, but first, she needs to figure out which pizza to order for the wedding.",
    "She's waiting for the right matchmaker to come into her life... maybe Somil will get that job too?",
    "The magic 8-ball says: 'Ask again after Somil finds someone'.",
    "Absolutely! But her soulmate is still busy getting enough courage to handle her sass.",
    "The stars say yes, but the coffee grounds are more hesitant.",
    "When Raveena stops judging everyone's life choices, then yes.",
    "Legend has it, Raveena will marry someone who can outdo her in sarcasm. Still searching...",
    "Raveena's first priority is fixing everyone else's love life. Her own can wait.",
    "Only if her future partner passes the ultimate test: withstanding her unfiltered opinions."
  ];

  const generatePrediction = () => {
    if (!question.trim()) return;
    
    setIsShaking(true);
    setPrediction(null);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * predictions.length);
      setPrediction(predictions[randomIndex]);
      setIsShaking(false);
    }, 1000);
  };

  return (
    <section id="predictions" className="py-16 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2 gradient-text flex items-center justify-center gap-2">
        <Sparkles size={28} />
        Raveena's Future Predictions
      </h2>
      <p className="text-center text-gray-600 italic mb-8">So, Who's Next?</p>

      <div className="max-w-xl mx-auto">
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <div className="flex flex-col items-center">
              <div 
                className={`w-40 h-40 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-8 flex items-center justify-center shadow-lg ${
                  isShaking ? 'animate-pulse' : ''
                }`}
              >
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-indigo-300 to-purple-300 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
                    <span className="text-4xl">🔮</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ask the Fortune Teller:
                  </label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Will Raveena ever get married?"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      className="flex-grow"
                    />
                    <Button 
                      onClick={generatePrediction}
                      disabled={!question.trim() || isShaking}
                      className="bg-gradient-to-r from-raveena-purple to-raveena-pink text-white"
                    >
                      {isShaking ? (
                        <RefreshCw size={18} className="animate-spin" />
                      ) : (
                        "Ask"
                      )}
                    </Button>
                  </div>
                </div>
                
                {prediction && (
                  <div className="quote-card mt-6 animate-fade-in">
                    <p className="text-gray-800 font-medium">{prediction}</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FuturePredictions;
