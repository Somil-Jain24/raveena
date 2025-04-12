
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TestTube, BarChart, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PollOption {
  id: string;
  text: string;
  votes: number;
}

interface Poll {
  question: string;
  options: PollOption[];
}

const ExperimentsPoll = () => {
  const { toast } = useToast();
  const [voted, setVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  const [poll, setPoll] = useState<Poll>({
    question: "What would Raveena say when Somil forgets his anniversary?",
    options: [
      { id: "a", text: "Bas, ab sab kuch khatam", votes: 12 },
      { id: "b", text: "Yeh Somil kis tarah ka boyfriend hai!", votes: 45 },
      { id: "c", text: "Ghar jao, tum dono ke liye dinner order karo", votes: 8 },
      { id: "d", text: "Bhai, tum dono ke liye love ka matlab kya hai?", votes: 23 },
    ]
  });

  const handleVote = () => {
    if (!selectedOption) return;
    
    setPoll(prev => ({
      ...prev,
      options: prev.options.map(option => 
        option.id === selectedOption 
          ? { ...option, votes: option.votes + 1 } 
          : option
      )
    }));
    
    setVoted(true);
    
    toast({
      title: "Vote Recorded!",
      description: "Thank you for participating in Raveena's experiment",
      duration: 3000,
    });
  };

  const totalVotes = poll.options.reduce((sum, option) => sum + option.votes, 0);

  const calculatePercentage = (votes: number) => {
    return totalVotes === 0 ? 0 : Math.round((votes / totalVotes) * 100);
  };

  return (
    <section id="experiments" className="py-16 bg-purple-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 gradient-text flex items-center justify-center gap-2">
          <TestTube size={28} />
          Experiment with Raveena
        </h2>
        <p className="text-center text-gray-600 italic mb-8">Will She Save You This Time?</p>

        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-6">{poll.question}</h3>
            
            <div className="space-y-4">
              {poll.options.map((option) => (
                <div 
                  key={option.id} 
                  className={`border rounded-lg p-4 cursor-pointer transition-all 
                    ${selectedOption === option.id && !voted ? 'border-primary bg-primary/5' : ''}
                    ${voted ? 'pointer-events-none' : 'hover:bg-gray-50'}`}
                  onClick={() => !voted && setSelectedOption(option.id)}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{option.text}</span>
                    {voted && (
                      <span className="text-sm text-gray-500">
                        {calculatePercentage(option.votes)}%
                      </span>
                    )}
                  </div>
                  
                  {voted && (
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className={`h-2 rounded-full ${selectedOption === option.id ? 'bg-raveena-purple' : 'bg-gray-400'}`}
                        style={{ width: `${calculatePercentage(option.votes)}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-between items-center">
              {!voted ? (
                <Button 
                  onClick={handleVote} 
                  disabled={!selectedOption}
                  className="bg-gradient-to-r from-raveena-purple to-raveena-pink text-white"
                >
                  <Send size={18} className="mr-2" />
                  Submit Vote
                </Button>
              ) : (
                <p className="text-sm text-gray-600">
                  <BarChart size={16} className="inline mr-1" />
                  Total votes: {totalVotes}
                </p>
              )}
              
              {voted && (
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    setVoted(false);
                    setSelectedOption(null);
                  }}
                >
                  Vote Again
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ExperimentsPoll;
