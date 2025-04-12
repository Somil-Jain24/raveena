
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Quote, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface QuoteItem {
  text: string;
  emoji?: string;
}

const QuoteGenerator = () => {
  const { toast } = useToast();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState<number>(0);
  const [isRotating, setIsRotating] = useState<boolean>(false);
  
  const classicQuotes: QuoteItem[] = [
    { text: "Somil, tu itna bhi nahi samajhta!", emoji: "😡" },
    { text: "Aditi ko bol, I'm busy being a love guru", emoji: "💅" },
    { text: "Yogesh, tum dono ko match nahi kar rahe ho, main hi karungi.", emoji: "😤" },
    { text: "Kaha tum dono, main khana khane jaa rahi hoon, koi follow karna hai?", emoji: "🍔" }
  ];
  
  const randomAdvice: QuoteItem[] = [
    { text: "Stop overthinking and have a pizza", emoji: "🍕" },
    { text: "Your problem isn't that bad, you're just hungry", emoji: "🍪" },
    { text: "Just tell them you're busy fixing someone else's life", emoji: "🧠" },
    { text: "Is this really a problem or just a Somil-level drama?", emoji: "🎭" },
    { text: "Try being less awkward... actually, don't try at all", emoji: "😅" },
    { text: "Not even my wisdom can help this situation", emoji: "🤷‍♀️" },
    { text: "Have you considered that you might be the problem?", emoji: "🔍" },
    { text: "Coffee first, life crisis second", emoji: "☕" },
    { text: "This calls for emergency ice cream", emoji: "🍦" },
    { text: "Your love life needs more memes and less drama", emoji: "📱" }
  ];

  const getRandomQuote = () => {
    setIsRotating(true);
    const newIndex = Math.floor(Math.random() * randomAdvice.length);
    setCurrentQuoteIndex(newIndex);
    
    toast({
      title: "Wisdom Dispensed! ✨",
      description: `Raveena has blessed you with her insight`,
      duration: 3000,
    });
    
    setTimeout(() => setIsRotating(false), 500);
  };

  return (
    <section id="quotes" className="py-16 bg-purple-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 gradient-text">
          Raveena's Quotes
        </h2>
        <p className="text-center text-gray-600 italic mb-8">The "Did She Really Say That?" Collection</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Quote size={20} className="text-raveena-purple" />
              The Classics
            </h3>
            <div className="space-y-4">
              {classicQuotes.map((quote, index) => (
                <Card key={index} className="quote-card card-hover">
                  <CardContent className="p-0">
                    <p className="text-lg font-medium">"{quote.text}"</p>
                    <span className="text-2xl block mt-2">{quote.emoji}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Sparkles size={20} className="text-raveena-pink" />
              Random Wisdom Generator
            </h3>
            <Card className="bg-gradient-to-br from-purple-100 to-pink-50 shadow-md rounded-xl overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="h-40 w-full mb-4 flex items-center justify-center">
                  <div className="quote-card w-full transform transition-all">
                    <p className="text-lg font-medium">"{randomAdvice[currentQuoteIndex].text}"</p>
                    <span className="text-3xl block mt-4">{randomAdvice[currentQuoteIndex].emoji}</span>
                  </div>
                </div>
                <Button 
                  onClick={getRandomQuote}
                  className="bg-gradient-to-r from-raveena-purple to-raveena-pink text-white hover:opacity-90"
                >
                  <RefreshCw 
                    size={18} 
                    className={`mr-2 ${isRotating ? 'animate-spin' : ''}`} 
                  />
                  Click for Wisdom 🔮
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteGenerator;
