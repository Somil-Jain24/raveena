
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Film, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Scene {
  title: string;
  description: string;
  emoji: string;
}

const BehindTheScenes = () => {
  const [currentScene, setCurrentScene] = useState(0);
  
  const scenes: Scene[] = [
    {
      title: "Scene 1",
      description: "Raveena, looking at Somil like \"Yeh kya kar raha hai?\"",
      emoji: "🤔"
    },
    {
      title: "Scene 2",
      description: "Somil's reaction: \"I don't know what to say.\"",
      emoji: "😶"
    },
    {
      title: "Scene 3",
      description: "Raveena writing down the perfect plan: \"Step 1: No more 'pyaar ka poetry' from Somil.\"",
      emoji: "📝"
    },
    {
      title: "Scene 4",
      description: "Raveena with Aditi, nodding like, \"This is going to be fun.\"",
      emoji: "😏"
    }
  ];

  const nextScene = () => {
    setCurrentScene((prev) => (prev + 1) % scenes.length);
  };

  const prevScene = () => {
    setCurrentScene((prev) => (prev - 1 + scenes.length) % scenes.length);
  };

  return (
    <section id="bts" className="py-16 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2 gradient-text flex items-center justify-center gap-2">
        <Film size={28} />
        Behind The Scenes
      </h2>
      <p className="text-center text-gray-600 italic mb-8">Making of the Raveena Masterplan</p>

      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-black text-white p-2 flex justify-between items-center">
              <div className="flex space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <span className="text-xs">raveena_masterplan.mp4</span>
              <div className="w-16"></div>
            </div>
            
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
              <div className="text-center p-6">
                <span className="text-8xl block mb-4 animate-bounce-subtle">{scenes[currentScene].emoji}</span>
                <h3 className="text-white text-xl font-bold mb-2">{scenes[currentScene].title}</h3>
                <p className="text-gray-300">{scenes[currentScene].description}</p>
              </div>
              
              <Button 
                variant="ghost" 
                size="icon"
                className="absolute left-2 text-white hover:bg-white/20"
                onClick={prevScene}
              >
                <ChevronLeft size={24} />
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon"
                className="absolute right-2 text-white hover:bg-white/20"
                onClick={nextScene}
              >
                <ChevronRight size={24} />
              </Button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1">
                {scenes.map((_, index) => (
                  <span 
                    key={index} 
                    className={`block w-2 h-2 rounded-full ${index === currentScene ? 'bg-white' : 'bg-gray-500'}`}
                  ></span>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800 text-white p-2 flex justify-center items-center space-x-4">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                ⏮ Prev
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/20">
                ▶️ Play
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/20">
                Next ⏭
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <p className="text-center text-gray-500 text-sm mt-4">
          *This is a dramatization. Any resemblance to actual events is purely intentional.
        </p>
      </div>
    </section>
  );
};

export default BehindTheScenes;
