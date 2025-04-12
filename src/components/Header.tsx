
import React from 'react';
import { Crown, Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative py-6 px-4 sm:px-6 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-50 opacity-70"></div>
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <Crown className="h-8 w-8 text-yellow-500 animate-pulse-soft" />
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">Raveena HQ</h1>
          <Crown className="h-8 w-8 text-yellow-500 animate-pulse-soft" />
        </div>
        
        <div className="mt-2 flex items-center gap-2">
          <Heart className="h-5 w-5 text-raveena-pink animate-bounce-subtle" />
          <p className="text-xl md:text-2xl text-gray-600 font-medium italic">
            Where All The Magic Happens
          </p>
          <Heart className="h-5 w-5 text-raveena-pink animate-bounce-subtle" />
        </div>
        
        <p className="mt-4 text-lg text-center max-w-2xl">
          Welcome to the official headquarters of the CEO of Friendship & Love 🎩👑
        </p>
      </div>
      
      <div className="absolute bottom-0 w-full h-6 bg-gradient-to-r from-purple-200 to-pink-200 opacity-50"></div>
    </header>
  );
};

export default Header;
