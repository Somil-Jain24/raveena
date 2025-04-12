
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Book, Coffee, HeartHandshake, Sprout } from 'lucide-react';

interface LessonCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  lessons: string[];
}

const LifeLessons = () => {
  const lessonCategories: LessonCategory[] = [
    {
      title: "How to Survive College and Crush Life",
      icon: <Coffee size={24} className="text-amber-600" />,
      color: "border-amber-400",
      lessons: [
        "Lesson 1: Keep your sarcasm sharp and your coffee sharper ☕",
        "Lesson 2: Friendships are about patience… and trolling the heck out of each other.",
        "Lesson 3: Always have emergency snacks for crisis management 🍫"
      ]
    },
    {
      title: "Love Life Hacks by Raveena",
      icon: <HeartHandshake size={24} className="text-pink-500" />,
      color: "border-pink-400",
      lessons: [
        "Step 1: Make them laugh. Step 2: Make them think you're cool.",
        "Step 3: Actually, just let me handle this, you go cry somewhere.",
        "Step 4: When in doubt, send a meme instead of your real feelings 😂"
      ]
    },
    {
      title: "Personal Growth & Development",
      icon: <Sprout size={24} className="text-green-600" />,
      color: "border-green-400",
      lessons: [
        "Pro tip: Grow like Raveena – with coffee, memes, and unfiltered truth. 😎",
        "Remember that judging others is a full-time job, do it with excellence",
        "Never miss an opportunity to remind Somil he's awkward 🙃"
      ]
    }
  ];

  return (
    <section id="lessons" className="py-16 container mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold gradient-text flex items-center justify-center gap-2">
          <Book size={28} />
          Raveena's Life Lessons
        </h2>
        <p className="text-gray-600 italic mt-2">Because She Knows It All</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {lessonCategories.map((category, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-purple-100 to-pink-50 p-4 rounded-t-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  {category.icon}
                </div>
                <h3 className="font-bold">{category.title}</h3>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4">
                  {category.lessons.map((lesson, i) => (
                    <li key={i} className={`lesson-card ${category.color}`}>
                      <p className="text-gray-800">{lesson}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LifeLessons;
