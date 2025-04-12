
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import RaveenaMap from '@/components/RaveenaMap';
import QuoteGenerator from '@/components/QuoteGenerator';
import AwardCeremony from '@/components/AwardCeremony';
import MemeGenerator from '@/components/MemeGenerator';
import LifeLessons from '@/components/LifeLessons';
import MiniGame from '@/components/MiniGame';
import BehindTheScenes from '@/components/BehindTheScenes';
import ExperimentsPoll from '@/components/ExperimentsPoll';
import FuturePredictions from '@/components/FuturePredictions';
import ThankYou from '@/components/ThankYou';

const Index = () => {
  useEffect(() => {
    document.title = "Raveena HQ - Where All the Magic Happens";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <RaveenaMap />
      <QuoteGenerator />
      <AwardCeremony />
      <MemeGenerator />
      <LifeLessons />
      <MiniGame />
      <BehindTheScenes />
      <ExperimentsPoll />
      <FuturePredictions />
      <ThankYou />
    </div>
  );
};

export default Index;
