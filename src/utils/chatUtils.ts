
import { Message } from '@/types/chat';

const onboardingGuideData = {
  welcomeScreen: {
    description: 'First point of contact that presents HealthVerse\'s core value proposition, emphasizing personalized user journey, interactive application tour, and access to a demo account.',
    options: ['Start guided onboarding', 'Skip onboarding']
  },
  skillAssessment: {
    description: 'Evaluates user\'s prior knowledge in blockchain technology, healthcare dApps experience, cryptocurrency wallet use, and existing health record management methods.',
    outcomes: ['Classifies users as Beginner, Intermediate, or Advanced', 'Tailors content based on user type']
  },
  virtualTour: {
    features: ['Main dashboard', 'Appointment scheduling', 'Health monitoring', 'Prescription management', 'Wellness program tracking', 'Health records access'],
    components: ['Tooltips', 'Pop-up messages', 'Guided walkthroughs', 'Progress tracking']
  },
  demoAccount: {
    features: ['Pre-populated data', 'Guided tutorials', 'Interactive core functionalities'],
    examples: ['Scheduling appointments', 'Reviewing health records', 'Managing prescriptions']
  },
  completion: {
    steps: ['Progress summary', 'Interface customization', 'Main application access']
  }
};

export const getChatResponse = async (
  userMessage: string,
  conversationHistory: Message[]
): Promise<string> => {
  // Simple keyword-based response system
  const message = userMessage.toLowerCase();

  if (message.includes('welcome') || message.includes('start')) {
    return "The welcome screen is your first interaction with HealthVerse. It introduces you to the platform's core features and lets you choose between starting the guided onboarding process or skipping directly to the application.";
  }

  if (message.includes('assessment') || message.includes('skill')) {
    return "The skill assessment helps us personalize your experience. We'll ask about your familiarity with blockchain technology, healthcare dApps, cryptocurrency wallets, and how you currently manage health records. Based on your responses, we'll adjust the interface and guidance to match your expertise level.";
  }

  if (message.includes('tour') || message.includes('virtual')) {
    return "The virtual tour guides you through HealthVerse's key features with interactive tooltips and demonstrations. You'll explore the dashboard, appointment scheduling, health monitoring, prescriptions, wellness programs, and health records management. The tour includes progress tracking and can be paused or resumed at any time.";
  }

  if (message.includes('demo') || message.includes('practice')) {
    return "The demo account gives you hands-on experience with HealthVerse. You'll have access to pre-populated data and guided tutorials for core features like scheduling appointments, reviewing health records, and managing prescriptions. This lets you safely explore the platform before using it with your real healthcare data.";
  }

  if (message.includes('complete') || message.includes('finish')) {
    return "Upon completing the onboarding, you'll receive a summary of your progress, and the interface will be customized based on your assessed skill level. You'll then have full access to all HealthVerse features, with optional guidance available if needed.";
  }

  if (message.includes('help') || message.includes('what can you')) {
    return "I can help you understand the HealthVerse onboarding process, explain different features, and guide you through the platform. Feel free to ask about the welcome screen, skill assessment, virtual tour, demo account, or any specific feature you'd like to learn more about.";
  }

  // Default response if no specific keywords are matched
  return "I understand you're asking about HealthVerse. Could you please be more specific about what you'd like to know? I can explain the welcome screen, skill assessment, virtual tour, demo account, or any other aspect of the onboarding process.";
};
