
import React, { useState } from 'react';
import { Award, Trophy, Crown, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AwardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const AwardCeremony = () => {
  const [selectedAward, setSelectedAward] = useState<number | null>(null);

  const awards: AwardProps[] = [
    {
      title: "Best Matchmaker",
      description: "Raveena, for making Somil less awkward",
      icon: <Heart size={24} />,
      color: "border-pink-400",
    },
    {
      title: "Most Sarcastic Advice",
      description: "Raveena, for giving love life tips that come with a side of roast",
      icon: <Trophy size={24} />,
      color: "border-amber-400",
    },
    {
      title: "Best Friend in Crisis",
      description: "Raveena, for always being there when Somil needed help... and a little meme therapy",
      icon: <Crown size={24} />,
      color: "border-purple-400",
    }
  ];

  const handleAwardClick = (index: number) => {
    setSelectedAward(selectedAward === index ? null : index);
  };

  return (
    <section id="awards" className="py-16 container mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold gradient-text">
          <Award className="inline mr-2 text-yellow-500" size={28} />
          The Raveena Award Show
          <Award className="inline ml-2 text-yellow-500" size={28} />
        </h2>
        <p className="text-gray-600 italic mt-2">Honoring excellence in friendship and sarcasm</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {awards.map((award, index) => (
          <div 
            key={index} 
            className={`award-card ${award.color} ${selectedAward === index ? 'ring-2 ring-primary' : ''}`}
            onClick={() => handleAwardClick(index)}
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-50 rounded-bl-3xl flex items-center justify-center">
              {award.icon}
            </div>
            
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center mb-4">
              <Award size={28} className="text-white" />
            </div>
            
            <h3 className="text-xl font-bold mb-2 text-center">{award.title}</h3>
            <p className="text-center text-gray-600">{award.description}</p>
            
            {selectedAward === index && (
              <div className="mt-4 animate-fade-in">
                <Button 
                  size="sm"
                  variant="outline" 
                  className="text-xs bg-gradient-to-r from-yellow-100 to-yellow-200 border-yellow-300"
                >
                  <Trophy size={14} className="mr-1 text-yellow-600" />
                  Applaud 👏
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-10">
        <Button 
          variant="outline" 
          className="bg-gradient-to-r from-yellow-100 to-yellow-200 border border-yellow-300"
        >
          <Trophy size={16} className="mr-2 text-yellow-600" /> 
          Nominate Raveena for More Awards 🏆
        </Button>
      </div>
    </section>
  );
};

export default AwardCeremony;
