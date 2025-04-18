
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useOnboarding } from '@/contexts/OnboardingContext';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Home,
  Calendar,
  Activity,
  Package,
  Heart,
  FileText
} from 'lucide-react';

interface TourStep {
  id: string;
  title: string;
  description: string;
  elementToHighlight: string;
  position: 'top' | 'right' | 'bottom' | 'left' | 'center';
  icon: JSX.Element;
}

const tourSteps: TourStep[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    description: 'View your health overview, upcoming appointments, and recent activities all in one place.',
    elementToHighlight: 'menu-dashboard',
    position: 'right',
    icon: <Home className="h-5 w-5 text-healthBlue" />
  },
  {
    id: 'appointments',
    title: 'Appointments',
    description: 'Schedule, reschedule, or cancel appointments with your healthcare providers.',
    elementToHighlight: 'menu-appointments',
    position: 'right',
    icon: <Calendar className="h-5 w-5 text-healthBlue" />
  },
  {
    id: 'monitoring',
    title: 'Health Monitoring',
    description: 'Track your vitals and health metrics, connect your wearables and smart devices.',
    elementToHighlight: 'menu-monitoring',
    position: 'right',
    icon: <Activity className="h-5 w-5 text-healthBlue" />
  },
  {
    id: 'prescriptions',
    title: 'Prescriptions',
    description: 'View and manage your prescriptions, setup refill reminders, and order medications.',
    elementToHighlight: 'menu-prescriptions',
    position: 'right',
    icon: <Package className="h-5 w-5 text-healthBlue" />
  },
  {
    id: 'wellness',
    title: 'Wellness Programs',
    description: 'Explore personalized wellness programs, nutrition plans, and fitness goals.',
    elementToHighlight: 'menu-wellness',
    position: 'right',
    icon: <Heart className="h-5 w-5 text-healthBlue" />
  },
  {
    id: 'records',
    title: 'Health Records',
    description: 'Access your secure, blockchain-verified health records and share them with healthcare providers.',
    elementToHighlight: 'menu-records',
    position: 'right',
    icon: <FileText className="h-5 w-5 text-healthBlue" />
  },
];

const TourScreen: React.FC = () => {
  const { prevStep, nextStep, setHighlightedElement, setIsTourActive } = useOnboarding();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const currentStep = tourSteps[currentStepIndex];

  useEffect(() => {
    setIsTourActive(true);
    
    return () => {
      setIsTourActive(false);
      setHighlightedElement(null);
    };
  }, [setIsTourActive, setHighlightedElement]);

  useEffect(() => {
    // Find the element to highlight and update the tooltip position
    const highlight = (elementId: string) => {
      const element = document.getElementById(elementId);
      if (element) {
        setHighlightedElement(elementId);
        
        const rect = element.getBoundingClientRect();
        const position = currentStep.position;
        
        // Set tooltip position based on the specified position
        if (position === 'right') {
          setTooltipPosition({ 
            top: rect.top + rect.height / 2 - 100, 
            left: rect.right + 20 
          });
        } else if (position === 'left') {
          setTooltipPosition({ 
            top: rect.top + rect.height / 2 - 100, 
            left: rect.left - 330 
          });
        } else if (position === 'top') {
          setTooltipPosition({ 
            top: rect.top - 220, 
            left: rect.left + rect.width / 2 - 160 
          });
        } else if (position === 'bottom') {
          setTooltipPosition({ 
            top: rect.bottom + 20, 
            left: rect.left + rect.width / 2 - 160 
          });
        } else {
          // Center position - used as fallback
          setTooltipPosition({ 
            top: window.innerHeight / 2 - 100, 
            left: window.innerWidth / 2 - 160 
          });
        }
      } else {
        // If element is not found, place tooltip in center
        setTooltipPosition({ 
          top: window.innerHeight / 2 - 100, 
          left: window.innerWidth / 2 - 160 
        });
      }
    };

    highlight(currentStep.elementToHighlight);
    
    // Add a scroll event listener to update the position when scrolling
    const handleScroll = () => {
      highlight(currentStep.elementToHighlight);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [currentStep, setHighlightedElement]);

  const handleNext = () => {
    if (currentStepIndex < tourSteps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      nextStep();
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    } else {
      prevStep();
    }
  };

  const handleSkip = () => {
    nextStep();
  };

  const progress = ((currentStepIndex + 1) / tourSteps.length) * 100;

  return (
    <AnimatePresence>
      <motion.div
        key={currentStepIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="fixed shadow-lg bg-white rounded-lg p-4 w-80 z-50"
        style={{
          top: tooltipPosition.top,
          left: tooltipPosition.left,
        }}
      >
        <div className="absolute top-2 right-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleSkip} 
            className="h-6 w-6 rounded-full"
          >
            <X size={14} />
          </Button>
        </div>
        
        <div className="mb-3 flex items-center">
          <div className="p-2 rounded-full bg-blue-50 mr-3">
            {currentStep.icon}
          </div>
          <h3 className="font-medium text-lg">{currentStep.title}</h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{currentStep.description}</p>
        
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
          <div 
            className="bg-healthBlue h-1.5 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
          >
            <ChevronLeft size={16} className="mr-1" />
            Previous
          </Button>
          <Button 
            size="sm" 
            onClick={handleNext}
          >
            {currentStepIndex < tourSteps.length - 1 ? 'Next' : 'Finish Tour'}
            <ChevronRight size={16} className="ml-1" />
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TourScreen;
