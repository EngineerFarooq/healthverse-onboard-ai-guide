
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useOnboarding } from '@/contexts/OnboardingContext';
import { Play, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface DemoFeature {
  id: string;
  title: string;
  description: string;
  demoGif: string;
  completed: boolean;
}

const DemoScreen: React.FC = () => {
  const { prevStep, nextStep } = useOnboarding();
  const [demoFeatures, setDemoFeatures] = useState<DemoFeature[]>([
    {
      id: 'appointments',
      title: 'Schedule an Appointment',
      description: 'Learn how to schedule a virtual or in-person appointment with your healthcare provider.',
      demoGif: 'appointment-demo.gif', // This would be a path to your actual GIF
      completed: false,
    },
    {
      id: 'records',
      title: 'Access Health Records',
      description: 'Securely access your health records and share them with healthcare providers.',
      demoGif: 'records-demo.gif',
      completed: false,
    },
    {
      id: 'prescriptions',
      title: 'Manage Prescriptions',
      description: 'View, refill, and manage your prescription medications.',
      demoGif: 'prescription-demo.gif',
      completed: false,
    },
  ]);
  
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [demoPlaying, setDemoPlaying] = useState(false);

  const handleStartDemo = (featureId: string) => {
    setActiveDemo(featureId);
    setDemoPlaying(true);
    
    // Simulate the demo completing after a few seconds
    setTimeout(() => {
      setDemoPlaying(false);
      setDemoFeatures(features => features.map(feature => 
        feature.id === featureId ? { ...feature, completed: true } : feature
      ));
    }, 3000);
  };

  const allDemosCompleted = demoFeatures.every(feature => feature.completed);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 bg-white rounded-xl shadow-lg max-w-2xl w-full"
    >
      <h2 className="text-2xl font-bold mb-2">Interactive Demo Account</h2>
      <p className="text-gray-600 mb-6">
        Experience HealthVerse with a pre-populated demo account. Watch guided tours or try it yourself.
      </p>

      {activeDemo ? (
        <div className="mb-6">
          <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center relative overflow-hidden mb-4">
            {demoPlaying ? (
              <div className="animate-pulse absolute inset-0 flex items-center justify-center bg-healthBlue/10">
                <div className="text-center">
                  <div className="inline-block rounded-full bg-white p-3 mb-2">
                    <Play size={24} className="text-healthBlue ml-1" />
                  </div>
                  <p className="text-healthBlue font-medium">Demo Playing...</p>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-healthPurple/10">
                <div className="text-center">
                  <div className="inline-block rounded-full bg-white p-3 mb-2">
                    <CheckCircle size={24} className="text-healthPurple" />
                  </div>
                  <p className="text-healthPurple font-medium">Demo Completed</p>
                </div>
              </div>
            )}
          </div>
          
          <Button 
            variant="outline" 
            onClick={() => setActiveDemo(null)}
            className="w-full"
          >
            Back to Demo List
          </Button>
        </div>
      ) : (
        <div className="space-y-4 mb-6">
          {demoFeatures.map((feature) => (
            <div 
              key={feature.id}
              className="border rounded-lg p-4 transition-all hover:shadow-md"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{feature.title}</h3>
                {feature.completed ? (
                  <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium flex items-center">
                    <CheckCircle size={12} className="mr-1" />
                    Completed
                  </div>
                ) : null}
              </div>
              <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
              <Button 
                variant={feature.completed ? "outline" : "default"}
                size="sm"
                onClick={() => handleStartDemo(feature.id)}
                className="w-full"
              >
                {feature.completed ? "Watch Again" : "Start Demo"}
              </Button>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between">
        <Button variant="outline" onClick={prevStep}>
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back
        </Button>
        <Button 
          onClick={nextStep}
          disabled={!allDemosCompleted}
        >
          Complete Onboarding
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
};

export default DemoScreen;
