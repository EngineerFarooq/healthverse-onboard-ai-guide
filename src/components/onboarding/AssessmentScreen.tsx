
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useOnboarding } from '@/contexts/OnboardingContext';
import { ChevronLeft, ChevronRight, BrainCircuit, Loader2 } from 'lucide-react';

const questions = [
  {
    id: 'blockchain_knowledge',
    question: 'How familiar are you with blockchain technology?',
    options: [
      { value: 'none', label: 'Not familiar at all' },
      { value: 'beginner', label: 'I understand the basics' },
      { value: 'intermediate', label: 'I have some experience with blockchain' },
      { value: 'advanced', label: 'I am very experienced with blockchain' },
    ],
  },
  {
    id: 'healthcare_dapps',
    question: 'Have you used healthcare dApps before?',
    options: [
      { value: 'none', label: 'Never' },
      { value: 'few', label: 'One or two' },
      { value: 'several', label: 'Several different ones' },
      { value: 'many', label: 'I use them regularly' },
    ],
  },
  {
    id: 'crypto_wallets',
    question: 'How comfortable are you with using cryptocurrency wallets?',
    options: [
      { value: 'not', label: 'Not comfortable at all' },
      { value: 'somewhat', label: 'Somewhat comfortable' },
      { value: 'very', label: 'Very comfortable' },
      { value: 'expert', label: 'Expert level' },
    ],
  },
  {
    id: 'health_data',
    question: 'How do you currently manage your health records?',
    options: [
      { value: 'paper', label: 'Paper-based records' },
      { value: 'doctors', label: 'My healthcare providers manage them' },
      { value: 'apps', label: 'Using health apps/platforms' },
      { value: 'digital', label: 'Digital formats (not app-based)' },
    ],
  },
];

const AssessmentScreen: React.FC = () => {
  const { prevStep, nextStep, updateAssessmentAnswer, assessmentAnswers, setUserSkillLevel } = useOnboarding();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Simulate ML analysis
      setIsAnalyzing(true);
      setTimeout(() => {
        // Determine skill level based on answers
        const values = Object.values(assessmentAnswers);
        const hasAdvanced = values.some(v => ['advanced', 'expert', 'many'].includes(v));
        const hasBeginnerOrNone = values.some(v => ['none', 'not', 'paper'].includes(v));
        
        let skillLevel: 'beginner' | 'intermediate' | 'advanced' = 'intermediate';
        if (hasAdvanced && !hasBeginnerOrNone) {
          skillLevel = 'advanced';
        } else if (hasBeginnerOrNone) {
          skillLevel = 'beginner';
        }
        
        setUserSkillLevel(skillLevel);
        setIsAnalyzing(false);
        nextStep();
      }, 2500);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      prevStep();
    }
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleSelectOption = (value: string) => {
    updateAssessmentAnswer(currentQuestion.id, value);
  };

  if (isAnalyzing) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-6 bg-white rounded-xl shadow-lg max-w-md w-full"
      >
        <div className="flex flex-col items-center justify-center py-8">
          <div className="relative mb-8">
            <BrainCircuit size={64} className="text-healthPurple animate-pulse" />
            <div className="absolute inset-0 bg-healthPurple/10 rounded-full animate-ping"></div>
          </div>
          <h2 className="text-xl font-semibold mb-4 text-center">Analyzing Your Responses</h2>
          <p className="text-gray-600 text-center mb-6">
            Our AI is processing your answers to create a personalized experience
          </p>
          <div className="w-full max-w-xs mb-4">
            <Progress value={75} className="h-2" />
          </div>
          <div className="flex items-center justify-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <p className="text-sm text-gray-500">Please wait...</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={currentQuestionIndex}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md"
    >
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-500">Question {currentQuestionIndex + 1} of {questions.length}</p>
            <Progress value={progress} className="h-2 w-24" />
          </div>
          <CardTitle>{currentQuestion.question}</CardTitle>
          <CardDescription>
            Your answers help us personalize your experience
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={assessmentAnswers[currentQuestion.id] || ''}
            onValueChange={handleSelectOption}
            className="space-y-3"
          >
            {currentQuestion.options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2 rounded-md border p-3 hover:bg-gray-50">
                <RadioGroupItem
                  value={option.value}
                  id={`${currentQuestion.id}-${option.value}`}
                />
                <Label
                  htmlFor={`${currentQuestion.id}-${option.value}`}
                  className="flex-1 cursor-pointer"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handlePrev}>
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={!assessmentAnswers[currentQuestion.id]}
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Analyze Results'}
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default AssessmentScreen;
