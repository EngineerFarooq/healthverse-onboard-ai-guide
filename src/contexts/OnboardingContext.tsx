import React, { createContext, useContext, useState, ReactNode } from 'react';

type OnboardingStep = 
  | 'inactive'
  | 'welcome'
  | 'assessment'
  | 'tour'
  | 'demo'
  | 'complete'
  | 'survey';

interface OnboardingContextType {
  currentStep: OnboardingStep;
  progress: number;
  userSkillLevel: 'beginner' | 'intermediate' | 'advanced' | null;
  startOnboarding: () => void;
  skipOnboarding: () => void;
  goToStep: (step: OnboardingStep) => void;
  nextStep: () => void;
  prevStep: () => void;
  setUserSkillLevel: (level: 'beginner' | 'intermediate' | 'advanced') => void;
  assessmentAnswers: Record<string, string>;
  updateAssessmentAnswer: (questionId: string, answer: string) => void;
  highlightedElement: string | null;
  setHighlightedElement: (elementId: string | null) => void;
  isTourActive: boolean;
  setIsTourActive: (active: boolean) => void;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

const STEPS_ORDER: OnboardingStep[] = [
  'inactive',
  'welcome',
  'assessment',
  'tour',
  'demo',
  'complete',
  'survey'
];

export const OnboardingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('inactive');
  const [userSkillLevel, setUserSkillLevel] = useState<'beginner' | 'intermediate' | 'advanced' | null>(null);
  const [assessmentAnswers, setAssessmentAnswers] = useState<Record<string, string>>({});
  const [highlightedElement, setHighlightedElement] = useState<string | null>(null);
  const [isTourActive, setIsTourActive] = useState(false);

  const startOnboarding = () => {
    setCurrentStep('welcome');
  };

  const skipOnboarding = () => {
    setCurrentStep('inactive');
  };

  const goToStep = (step: OnboardingStep) => {
    setCurrentStep(step);
  };

  const nextStep = () => {
    const currentIndex = STEPS_ORDER.indexOf(currentStep);
    if (currentIndex < STEPS_ORDER.length - 1) {
      setCurrentStep(STEPS_ORDER[currentIndex + 1]);
    }
  };

  const prevStep = () => {
    const currentIndex = STEPS_ORDER.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(STEPS_ORDER[currentIndex - 1]);
    }
  };

  const updateAssessmentAnswer = (questionId: string, answer: string) => {
    setAssessmentAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  // Calculate progress percentage including the survey step
  const progress = currentStep === 'inactive' 
    ? 0 
    : Math.round(((STEPS_ORDER.indexOf(currentStep) - 1) / (STEPS_ORDER.length - 2)) * 100);

  return (
    <OnboardingContext.Provider
      value={{
        currentStep,
        progress,
        userSkillLevel,
        startOnboarding,
        skipOnboarding,
        goToStep,
        nextStep,
        prevStep,
        setUserSkillLevel,
        assessmentAnswers,
        updateAssessmentAnswer,
        highlightedElement, 
        setHighlightedElement,
        isTourActive,
        setIsTourActive
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
};
