
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/NavBar';
import { useOnboarding } from '@/contexts/OnboardingContext';
import { 
  ShieldCheck, 
  Heart, 
  Calendar, 
  Tablets, 
  Clock, 
  ArrowRight,
  BadgeCheck,
  FileCheck,
  Lock
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const { startOnboarding } = useOnboarding();

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-healthDark leading-tight">
                Your Health, <span className="text-healthBlue">Secured</span> by Blockchain
              </h1>
              <p className="text-lg text-gray-600 mb-8 md:pr-10">
                HealthVerse provides a secure, blockchain-powered platform for managing your healthcare journey. Take control of your health data with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={startOnboarding} size="lg" className="px-8">
                  Try Demo Experience
                </Button>
                <Link to="/register">
                  <Button variant="outline" size="lg" className="px-8">
                    Create Account
                  </Button>
                </Link>
              </div>
              <div className="flex items-center mt-8">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                </div>
                <p className="ml-4 text-sm text-gray-600">Join 10,000+ users who trust HealthVerse</p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-4 border-b">
                    <div className="w-40 h-8 bg-gray-100 rounded-md"></div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-healthBlue/20 mr-3"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-100 rounded-md w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-100 rounded-md w-1/2"></div>
                      </div>
                    </div>
                    <div className="h-24 bg-gray-100 rounded-md w-full"></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-16 bg-gray-100 rounded-md"></div>
                      <div className="h-16 bg-gray-100 rounded-md"></div>
                    </div>
                    <div className="h-12 bg-gray-100 rounded-md w-full"></div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-healthPurple/10 rounded-2xl animate-float"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-healthBlue/10 rounded-2xl animate-float"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose HealthVerse</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our blockchain-powered platform offers a secure, transparent, and user-friendly approach to healthcare management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-50 rounded-lg inline-block mb-4">
                <ShieldCheck className="h-6 w-6 text-healthBlue" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                Your health data is encrypted and secured by blockchain technology, giving you full control over who can access it.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-teal-50 rounded-lg inline-block mb-4">
                <Heart className="h-6 w-6 text-healthTeal" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Holistic Care</h3>
              <p className="text-gray-600">
                Manage all aspects of your health journey in one place, from appointments to prescriptions and wellness plans.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-purple-50 rounded-lg inline-block mb-4">
                <Calendar className="h-6 w-6 text-healthPurple" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Smart Scheduling</h3>
              <p className="text-gray-600">
                Book appointments with healthcare providers, receive reminders, and attend virtual consultations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-50 rounded-lg inline-block mb-4">
                <Tablets className="h-6 w-6 text-healthBlue" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Medication Management</h3>
              <p className="text-gray-600">
                Keep track of prescriptions, set medication reminders, and order refills with ease.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-teal-50 rounded-lg inline-block mb-4">
                <FileCheck className="h-6 w-6 text-healthTeal" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Health Records</h3>
              <p className="text-gray-600">
                Store and access your health records securely, and share them with trusted healthcare providers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-purple-50 rounded-lg inline-block mb-4">
                <Clock className="h-6 w-6 text-healthPurple" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Real-time Monitoring</h3>
              <p className="text-gray-600">
                Connect with wearables and smart devices to monitor your health metrics in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-healthBlue to-healthPurple text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Healthcare Experience?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of users who have already taken control of their health journey with HealthVerse.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={startOnboarding}
                variant="secondary"
                size="lg"
                className="bg-white text-healthBlue hover:bg-gray-100"
              >
                Try Demo Experience
              </Button>
              <Link to="/register">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Create Free Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Patients and Providers</h2>
            <p className="text-lg text-gray-600">
              HealthVerse meets the highest standards of security and compliance in healthcare
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <Lock className="h-8 w-8 text-healthBlue" />
              </div>
              <h3 className="font-semibold mb-2">HIPAA Compliant</h3>
              <p className="text-gray-600 text-sm">
                Meets all privacy and security standards required by HIPAA
              </p>
            </div>
            
            <div className="p-6 border rounded-lg text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <BadgeCheck className="h-8 w-8 text-healthBlue" />
              </div>
              <h3 className="font-semibold mb-2">ISO 27001 Certified</h3>
              <p className="text-gray-600 text-sm">
                International standard for information security management
              </p>
            </div>
            
            <div className="p-6 border rounded-lg text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                <ShieldCheck className="h-8 w-8 text-healthBlue" />
              </div>
              <h3 className="font-semibold mb-2">End-to-End Encryption</h3>
              <p className="text-gray-600 text-sm">
                Your data is encrypted at rest and in transit
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-6">Trusted by leading healthcare organizations</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <div className="h-12 w-32 bg-gray-200 rounded"></div>
              <div className="h-12 w-32 bg-gray-200 rounded"></div>
              <div className="h-12 w-32 bg-gray-200 rounded"></div>
              <div className="h-12 w-32 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-50 py-12 mt-auto">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 rounded-md bg-gradient-to-br from-healthBlue to-healthPurple mr-2"></div>
                <span className="text-xl font-semibold text-healthDark">HealthVerse</span>
              </div>
              <p className="text-gray-600 max-w-xs">
                Your secure healthcare companion, powered by blockchain technology.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium mb-3">Product</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Features</li>
                  <li>Security</li>
                  <li>Pricing</li>
                  <li>Resources</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Company</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>About</li>
                  <li>Careers</li>
                  <li>Partners</li>
                  <li>Contact</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Legal</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Privacy</li>
                  <li>Terms</li>
                  <li>Security</li>
                  <li>Compliance</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 HealthVerse. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
