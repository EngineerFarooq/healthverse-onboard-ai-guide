
import React from 'react';
import { Button } from "@/components/ui/button";
import { useOnboarding } from '@/contexts/OnboardingContext';
import { motion } from 'framer-motion';

const SURVEY_QUESTIONS = [
  {
    id: 'usefulness',
    question: 'How useful was the onboarding guide?',
    options: ['Very Useful', 'Somewhat Useful', 'Not Very Useful', 'Not Useful at All']
  },
  {
    id: 'clarity',
    question: 'How clear were the instructions and demonstrations?',
    options: ['Very Clear', 'Somewhat Clear', 'Not Very Clear', 'Not Clear at All']
  },
  {
    id: 'pacing',
    question: 'How was the pacing of the onboarding process?',
    options: ['Too Fast', 'Just Right', 'Too Slow']
  }
];

export const OnboardingSurvey: React.FC = () => {
  const { assessmentAnswers, updateAssessmentAnswer, nextStep } = useOnboarding();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Survey responses:', assessmentAnswers);
    nextStep();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Help Us Improve</h2>
      <p className="text-gray-600 mb-6">
        Please take a moment to share your feedback about the onboarding experience.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {SURVEY_QUESTIONS.map((q) => (
          <div key={q.id} className="space-y-3">
            <label className="block font-medium">{q.question}</label>
            <div className="space-y-2">
              {q.options.map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={q.id}
                    value={option}
                    checked={assessmentAnswers[q.id] === option}
                    onChange={() => updateAssessmentAnswer(q.id, option)}
                    className="form-radio h-4 w-4 text-healthBlue"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        
        <Button 
          type="submit"
          disabled={Object.keys(assessmentAnswers).length < SURVEY_QUESTIONS.length}
          className="w-full"
        >
          Submit Feedback
        </Button>
      </form>
    </motion.div>
  );
};
