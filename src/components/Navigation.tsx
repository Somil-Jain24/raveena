
import React from 'react';
import { MapPin, Quote, Award, Image, Book, Gamepad, Film, PieChart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  target: string;
}

const Navigation = () => {
  const navItems: NavItem[] = [
    { icon: <MapPin size={18} />, label: "Raveena HQ", target: "#hq" },
    { icon: <Quote size={18} />, label: "Quotes", target: "#quotes" },
    { icon: <Award size={18} />, label: "Awards", target: "#awards" },
    { icon: <Image size={18} />, label: "Meme Generator", target: "#memes" },
    { icon: <Book size={18} />, label: "Life Lessons", target: "#lessons" },
    { icon: <Gamepad size={18} />, label: "Mini Game", target: "#game" },
    { icon: <Film size={18} />, label: "Behind Scenes", target: "#bts" },
    { icon: <PieChart size={18} />, label: "Experiments", target: "#experiments" },
    { icon: <Sparkles size={18} />, label: "Predictions", target: "#predictions" },
  ];

  const scrollToSection = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm py-2 px-4">
      <div className="container mx-auto">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {navItems.map((item, index) => (
            <Button 
              key={index} 
              variant="ghost" 
              size="sm"
              className="whitespace-nowrap flex items-center gap-1 hover:bg-raveena-light"
              onClick={() => scrollToSection(item.target)}
            >
              {item.icon}
              <span>{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
