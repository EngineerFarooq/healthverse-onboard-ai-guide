
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useOnboarding } from '@/contexts/OnboardingContext';
import { CheckCircle, Star } from 'lucide-react';

const CompletionScreen: React.FC = () => {
  const { skipOnboarding, userSkillLevel } = useOnboarding();

  let skillLevelText = 'intermediate';
  let features: string[] = [];

  if (userSkillLevel === 'beginner') {
    skillLevelText = 'beginner';
    features = [
      'Simplified dashboard with guided explanations',
      'Step-by-step tutorials for common tasks',
      'Extra help tooltips and explanations',
      'Beginner-friendly terminology'
    ];
  } else if (userSkillLevel === 'advanced') {
    skillLevelText = 'advanced';
    features = [
      'Advanced dashboard with detailed analytics',
      'Blockchain transaction details and controls',
      'API access and developer options',
      'Advanced data visualization tools'
    ];
  } else {
    features = [
      'Standard dashboard with all key features',
      'Balanced information density',
      'Smart suggestions and workflows',
      'Normal terminology with tooltips'
    ];
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-6 bg-white rounded-xl shadow-lg max-w-md w-full text-center"
    >
      <div className="mb-6 flex justify-center">
        <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle size={42} className="text-green-600" />
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-2">Onboarding Complete!</h2>
      <p className="text-gray-600 mb-6">
        Your experience has been personalized for a <span className="font-medium">{skillLevelText}</span> user
      </p>

      <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
        <h3 className="font-medium mb-3 flex items-center">
          <Star size={18} className="text-healthPurple mr-2" />
          Your Personalized Experience Includes:
        </h3>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-healthBlue mr-2">•</span>
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button onClick={skipOnboarding} size="lg" className="w-full">
        Start Using HealthVerse
      </Button>
    </motion.div>
  );
};

export default CompletionScreen;
