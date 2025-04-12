
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface AreaProps {
  id: string;
  title: string;
  description: string;
  emoji: string;
  x: string;
  y: string;
  width: string;
  height: string;
  color: string;
}

const RaveenaMap = () => {
  const [activeArea, setActiveArea] = useState<string | null>(null);

  const areas: AreaProps[] = [
    {
      id: 'love-factory',
      title: 'Love Life Factory',
      description: 'Where she builds your relationships like Legos',
      emoji: '🧱',
      x: '10%',
      y: '20%',
      width: '30%',
      height: '35%',
      color: 'bg-pink-200',
    },
    {
      id: 'sarcasm-zone',
      title: 'Sarcasm Zone',
      description: 'Beware, entering this space is a one-way ticket to getting roasted',
      emoji: '🌶️',
      x: '60%',
      y: '15%',
      width: '30%',
      height: '30%',
      color: 'bg-red-200',
    },
    {
      id: 'wisdom-corner',
      title: 'Raveena\'s Wisdom Corner',
      description: 'Where all the advice comes with a side of memes',
      emoji: '😂',
      x: '25%',
      y: '65%',
      width: '45%',
      height: '25%',
      color: 'bg-purple-200',
    },
  ];

  const handleAreaClick = (id: string) => {
    setActiveArea(activeArea === id ? null : id);
  };

  return (
    <section id="hq" className="py-16 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 gradient-text">The "Raveena HQ" Map</h2>
      
      <Card className="max-w-3xl mx-auto bg-white shadow-lg">
        <CardContent className="p-6">
          <div className="relative w-full h-[400px] border-4 border-dashed border-purple-300 rounded-xl bg-blue-50 overflow-hidden">
            {/* Floor plan visual representation */}
            {areas.map((area) => (
              <div
                key={area.id}
                className={`absolute map-area ${area.color} ${activeArea === area.id ? 'ring-4 ring-primary' : ''}`}
                style={{
                  top: area.y,
                  left: area.x,
                  width: area.width,
                  height: area.height,
                  borderRadius: '10px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                }}
                onClick={() => handleAreaClick(area.id)}
              >
                <div className="p-3 h-full flex flex-col justify-between">
                  <h3 className="font-bold text-sm sm:text-base flex items-center gap-1">
                    {area.title} <span className="text-xl">{area.emoji}</span>
                  </h3>
                  {activeArea === area.id && (
                    <p className="text-xs sm:text-sm mt-1 text-gray-700">{area.description}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Decorative elements */}
            <div className="absolute bottom-5 right-5 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-xl">
              ☕
            </div>
            <div className="absolute top-5 left-5 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              🪴
            </div>
            <div className="absolute bottom-10 left-10 w-12 h-8 bg-gray-200 rounded-sm flex items-center justify-center text-sm">
              💻
            </div>
          </div>
          <p className="text-center mt-4 text-gray-600 italic">Click on an area to learn more about Raveena's legendary spaces!</p>
        </CardContent>
      </Card>
    </section>
  );
};

export default RaveenaMap;
