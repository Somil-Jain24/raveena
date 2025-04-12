
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

interface Firework {
  id: number;
  x: number;
  y: number;
  color: string;
}

const ThankYou = () => {
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const [fireworkCount, setFireworkCount] = useState(0);

  const triggerFireworks = () => {
    // Create multiple fireworks
    const count = 5;
    const newFireworks: Firework[] = [];
    
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const x = 20 + Math.random() * 60; // Random position across width (20-80%)
        const y = 30 + Math.random() * 40; // Random position in upper area (30-70%)
        const colors = ['#9b87f5', '#D946EF', '#FFC107', '#4CAF50', '#2196F3'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        const newFirework = {
          id: fireworkCount + i,
          x,
          y,
          color
        };
        
        setFireworks(prev => [...prev, newFirework]);
        
        // Remove firework after animation completes
        setTimeout(() => {
          setFireworks(prev => prev.filter(f => f.id !== newFirework.id));
        }, 1000);
      }, i * 300);
    }
    
    setFireworkCount(fireworkCount + count);
  };

  useEffect(() => {
    // Initial fireworks on component mount
    triggerFireworks();
    
    // Cleanup any remaining fireworks on unmount
    return () => {
      setFireworks([]);
    };
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
          Thank You Raveena!
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          For being the CEO of Friendship & Love, the ultimate matchmaker, and the Queen of Sarcasm! 👑
        </p>
        
        <Button
          onClick={triggerFireworks}
          className="bg-gradient-to-r from-raveena-purple to-raveena-pink text-white text-lg px-6 py-6 h-auto rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <Sparkles size={20} className="mr-2" />
          Celebrate Raveena! 🎉
        </Button>
        
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="text-2xl">👋</Button>
          <Button variant="outline" className="text-2xl">😍</Button>
          <Button variant="outline" className="text-2xl">😒</Button>
          <Button variant="outline" className="text-2xl">🤣</Button>
          <Button variant="outline" className="text-2xl">❤️</Button>
          <Button variant="outline" className="text-2xl">🔥</Button>
          <Button variant="outline" className="text-2xl">🙏</Button>
          <Button variant="outline" className="text-2xl">✨</Button>
        </div>
      </div>
      
      {/* Fireworks */}
      {fireworks.map(firework => (
        <div
          key={firework.id}
          className="absolute animate-firework rounded-full"
          style={{
            left: `${firework.x}%`,
            top: `${firework.y}%`,
            backgroundColor: firework.color,
            width: '10px',
            height: '10px',
            boxShadow: `0 0 20px 10px ${firework.color}`,
          }}
        />
      ))}
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-100 to-transparent opacity-30" />
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-pink-100 opacity-40" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-purple-100 opacity-60" />
    </section>
  );
};

export default ThankYou;
