
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useOnboarding } from '@/contexts/OnboardingContext';

const WelcomeScreen: React.FC = () => {
  const { nextStep, skipOnboarding } = useOnboarding();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-white rounded-xl shadow-lg max-w-md w-full"
    >
      <div className="mb-6 flex justify-center">
        <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-healthBlue to-healthPurple flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center mb-2">Welcome to HealthVerse</h2>
      <p className="text-gray-600 text-center mb-6">
        Your personalized healthcare companion, powered by blockchain technology
      </p>

      <div className="space-y-4 mb-6">
        <div className="flex items-start">
          <div className="bg-healthBlue/10 p-2 rounded-full mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-healthDark">Personalized Experience</h3>
            <p className="text-sm text-gray-600">We'll customize your journey based on your knowledge level</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-healthTeal/10 p-2 rounded-full mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#14B8A6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
              <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
              <path d="M12 2v2" />
              <path d="M12 22v-2" />
              <path d="m17 20.66-1-1.73" />
              <path d="M11 10.27 7 3.34" />
              <path d="m20.66 17-1.73-1" />
              <path d="m3.34 7 1.73 1" />
              <path d="M14 12h8" />
              <path d="M2 12h2" />
              <path d="m20.66 7-1.73 1" />
              <path d="m3.34 17 1.73-1" />
              <path d="m17 3.34-1 1.73" />
              <path d="m7 20.66 1-1.73" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-healthDark">Interactive Tour</h3>
            <p className="text-sm text-gray-600">Get familiar with all the features and functions of our platform</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-healthPurple/10 p-2 rounded-full mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-healthDark">Demo Account</h3>
            <p className="text-sm text-gray-600">Explore using a demo account with sample data</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Button onClick={nextStep} size="lg" className="w-full">
          Let's Get Started
        </Button>
        <Button variant="outline" onClick={skipOnboarding} size="lg" className="w-full">
          Skip Onboarding
        </Button>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;
