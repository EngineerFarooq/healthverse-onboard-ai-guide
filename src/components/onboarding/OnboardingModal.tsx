import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOnboarding } from '@/contexts/OnboardingContext';
import WelcomeScreen from './WelcomeScreen';
import AssessmentScreen from './AssessmentScreen';
import TourScreen from './TourScreen';
import DemoScreen from './DemoScreen';
import CompletionScreen from './CompletionScreen';
import { OnboardingSurvey } from './OnboardingSurvey';
import { ChatBot } from '../chat/ChatBot';

const OnboardingModal: React.FC = () => {
  const { currentStep } = useOnboarding();
  
  if (currentStep === 'inactive') {
    return null;
  }
  
  let ScreenComponent;
  
  switch (currentStep) {
    case 'welcome':
      ScreenComponent = WelcomeScreen;
      break;
    case 'assessment':
      ScreenComponent = AssessmentScreen;
      break;
    case 'tour':
      ScreenComponent = TourScreen;
      break;
    case 'demo':
      ScreenComponent = DemoScreen;
      break;
    case 'complete':
      ScreenComponent = CompletionScreen;
      break;
    default:
      return null;
  }

  // For tour screen, we don't need the modal background
  if (currentStep === 'tour') {
    return (
      <>
        <ScreenComponent />
        <ChatBot />
      </>
    );
  }
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      >
        {currentStep === 'complete' ? (
          <OnboardingSurvey />
        ) : (
          <ScreenComponent />
        )}
        <ChatBot />
      </motion.div>
    </AnimatePresence>
  );
};

export default OnboardingModal;
