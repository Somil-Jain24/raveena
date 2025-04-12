
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Image, Download, Shuffle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MemeGenerator = () => {
  const { toast } = useToast();
  const [selectedMeme, setSelectedMeme] = useState<number>(0);
  const [customText, setCustomText] = useState<string>("");
  
  const memeTemplates = [
    {
      name: "Raveena looking intense",
      text: "You still don't get it, do you?",
      backgroundClass: "bg-purple-100",
      emoji: "💀",
    },
    {
      name: "Fixing your life face",
      text: "This is my 'fixing your life' face",
      backgroundClass: "bg-pink-100",
      emoji: "😤",
    },
    {
      name: "Poetry reaction",
      text: "Bhai, no one wants your 'poetry'",
      backgroundClass: "bg-blue-100",
      emoji: "🙄",
    },
  ];

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomText(e.target.value);
  };

  const cycleMeme = () => {
    setSelectedMeme((prevIndex) => (prevIndex + 1) % memeTemplates.length);
  };

  const downloadMeme = () => {
    // In real implementation, this would capture the meme div and download it
    toast({
      title: "Meme Saved!",
      description: "Your custom Raveena meme has been saved",
      duration: 3000,
    });
  };

  return (
    <section id="memes" className="py-16 bg-purple-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 gradient-text">
          DIY Meme Generator
        </h2>
        <p className="text-center text-gray-600 italic mb-8">Create Your Own Raveena Quote</p>

        <div className="max-w-lg mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div 
                className={`${memeTemplates[selectedMeme].backgroundClass} aspect-[4/3] rounded-lg flex flex-col items-center justify-center p-8 mb-6 shadow-inner`}
              >
                <div className="text-6xl mb-4">{memeTemplates[selectedMeme].emoji}</div>
                <p className="text-xl font-comic font-bold text-center">
                  "{customText || memeTemplates[selectedMeme].text}"
                </p>
              </div>
              
              <div className="flex gap-3 mb-4">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={cycleMeme}
                >
                  <Shuffle size={18} className="mr-2" />
                  Change Template
                </Button>
                <Button 
                  className="flex-1 bg-gradient-to-r from-raveena-purple to-raveena-pink text-white"
                  onClick={downloadMeme}
                >
                  <Download size={18} className="mr-2" />
                  Save Meme
                </Button>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Custom Quote:
                </label>
                <Input
                  placeholder="Enter your own Raveena quote..."
                  value={customText}
                  onChange={handleTextChange}
                />
              </div>
            </CardContent>
          </Card>
          
          <p className="text-center text-sm text-gray-500 mt-4">
            Disclaimer: Raveena may or may not approve of your meme creation skills
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemeGenerator;
