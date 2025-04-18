
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import AppSidebar from '@/components/AppSidebar';
import { Button } from '@/components/ui/button';
import { useOnboarding } from '@/contexts/OnboardingContext';
import {
  Calendar,
  Pill,
  Activity,
  Clock,
  Plus,
  ChevronRight,
  Bell,
  FileText,
  Users,
  MoreHorizontal
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from '@/components/ui/progress';

const Dashboard: React.FC = () => {
  const { isTourActive } = useOnboarding();
  
  useEffect(() => {
    // Add IDs to elements that will be highlighted during the tour
    const setupTourElements = () => {
      const sidebarElements = {
        'menu-dashboard': 'Dashboard',
        'menu-appointments': 'Appointments',
        'menu-monitoring': 'Monitoring',
        'menu-prescriptions': 'Prescriptions',
        'menu-wellness': 'Wellness',
        'menu-records': 'Records',
      };
      
      // Find sidebar menu items by their text content and add IDs
      document.querySelectorAll('aside a').forEach(element => {
        const span = element.querySelector('span');
        if (span) {
          const text = span.textContent;
          const idKey = Object.keys(sidebarElements).find(
            key => sidebarElements[key as keyof typeof sidebarElements] === text
          );
          
          if (idKey) {
            element.id = idKey;
          }
        }
      });
    };
    
    // Call after a slight delay to ensure DOM is fully loaded
    setTimeout(setupTourElements, 500);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar isLoggedIn userName="John D." />
      
      <div className="flex flex-1">
        <AppSidebar />
        
        <main className="flex-1 p-4 md:p-6 ml-0 lg:ml-64">
          <div className="max-w-6xl mx-auto">
            <header className="mb-6">
              <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
              <p className="text-gray-600">Welcome back, John! Here's your health overview.</p>
            </header>
            
            {/* Quick Actions */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Button variant="outline" className="flex items-center justify-center gap-2 py-6">
                <Calendar className="h-5 w-5 text-healthBlue" />
                <span>Schedule Appointment</span>
              </Button>
              <Button variant="outline" className="flex items-center justify-center gap-2 py-6">
                <Pill className="h-5 w-5 text-healthTeal" />
                <span>Refill Prescription</span>
              </Button>
              <Button variant="outline" className="flex items-center justify-center gap-2 py-6">
                <Activity className="h-5 w-5 text-healthPurple" />
                <span>Track Vitals</span>
              </Button>
            </section>
            
            {/* Health Stats */}
            <section className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Health Overview</h2>
                <Button variant="ghost" size="sm">
                  <span>View All</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium flex items-center">
                      <Activity className="h-4 w-4 mr-2 text-healthBlue" />
                      Heart Rate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-bold">72</span>
                      <span className="text-gray-500 text-sm mb-1">BPM</span>
                    </div>
                    <p className="text-xs text-green-600 mt-1">Normal range</p>
                    <div className="mt-3 pt-3 border-t">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Resting</span>
                        <span>Active</span>
                      </div>
                      <Progress value={30} className="h-1" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium flex items-center">
                      <Activity className="h-4 w-4 mr-2 text-healthTeal" />
                      Blood Pressure
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-bold">120/80</span>
                      <span className="text-gray-500 text-sm mb-1">mmHg</span>
                    </div>
                    <p className="text-xs text-green-600 mt-1">Optimal</p>
                    <div className="mt-3 pt-3 border-t">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Last Week</span>
                        <span>Today</span>
                      </div>
                      <Progress value={75} className="h-1" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium flex items-center">
                      <Activity className="h-4 w-4 mr-2 text-healthPurple" />
                      Blood Glucose
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-bold">95</span>
                      <span className="text-gray-500 text-sm mb-1">mg/dL</span>
                    </div>
                    <p className="text-xs text-green-600 mt-1">Normal fasting range</p>
                    <div className="mt-3 pt-3 border-t">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Low</span>
                        <span>High</span>
                      </div>
                      <Progress value={40} className="h-1" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
            
            {/* Upcoming & Reminders */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <section className="lg:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
                  <Button variant="ghost" size="sm">
                    <Plus className="mr-1 h-4 w-4" />
                    <span>New</span>
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-0">
                      <div className="flex border-l-4 border-healthBlue">
                        <div className="py-4 px-5 flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-sm font-medium text-gray-500">APR</p>
                            <p className="text-2xl font-bold">23</p>
                          </div>
                        </div>
                        <div className="py-4 px-3 flex-1">
                          <h3 className="font-medium">Annual Physical Exam</h3>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>9:30 AM - 10:30 AM</span>
                            <span className="mx-2">•</span>
                            <span>Dr. Sarah Johnson</span>
                          </div>
                        </div>
                        <div className="p-4 flex items-center">
                          <Button variant="outline" size="sm">
                            Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-0">
                      <div className="flex border-l-4 border-healthTeal">
                        <div className="py-4 px-5 flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-sm font-medium text-gray-500">MAY</p>
                            <p className="text-2xl font-bold">05</p>
                          </div>
                        </div>
                        <div className="py-4 px-3 flex-1">
                          <h3 className="font-medium">Dental Check-up</h3>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>2:00 PM - 3:00 PM</span>
                            <span className="mx-2">•</span>
                            <span>Dr. Michael Chen</span>
                          </div>
                        </div>
                        <div className="p-4 flex items-center">
                          <Button variant="outline" size="sm">
                            Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="text-center">
                    <Button variant="link">
                      View All Appointments
                    </Button>
                  </div>
                </div>
              </section>
              
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Reminders</h2>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-red-100 mr-3">
                          <Pill className="h-4 w-4 text-red-500" />
                        </div>
                        <div>
                          <h3 className="font-medium">Take Medication</h3>
                          <p className="text-sm text-gray-500">Lisinopril - 10mg</p>
                          <p className="text-xs text-gray-500 mt-1">Today at 8:00 PM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-blue-100 mr-3">
                          <Bell className="h-4 w-4 text-healthBlue" />
                        </div>
                        <div>
                          <h3 className="font-medium">Prescription Refill</h3>
                          <p className="text-sm text-gray-500">Metformin is running low</p>
                          <p className="text-xs text-gray-500 mt-1">Due in 3 days</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-green-100 mr-3">
                          <FileText className="h-4 w-4 text-green-500" />
                        </div>
                        <div>
                          <h3 className="font-medium">Lab Results Ready</h3>
                          <p className="text-sm text-gray-500">Blood work from April 10</p>
                          <p className="text-xs text-gray-500 mt-1">Available now</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>
            
            {/* Care Team */}
            <section className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Your Care Team</h2>
                <Button variant="ghost" size="sm">
                  <span>Manage</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-0">
                    <div className="flex items-center p-4">
                      <div className="h-12 w-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center">
                        <Users className="h-6 w-6 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">Dr. Sarah Johnson</h3>
                        <p className="text-sm text-gray-500">Primary Care Physician</p>
                      </div>
                    </div>
                    <div className="border-t p-3 flex justify-between text-sm">
                      <Button variant="ghost" size="sm" className="h-8 text-healthBlue">
                        Message
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 text-healthBlue">
                        Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-0">
                    <div className="flex items-center p-4">
                      <div className="h-12 w-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center">
                        <Users className="h-6 w-6 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">Dr. Robert Chen</h3>
                        <p className="text-sm text-gray-500">Cardiologist</p>
                      </div>
                    </div>
                    <div className="border-t p-3 flex justify-between text-sm">
                      <Button variant="ghost" size="sm" className="h-8 text-healthBlue">
                        Message
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 text-healthBlue">
                        Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-0">
                    <div className="flex items-center p-4">
                      <div className="h-12 w-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center">
                        <Users className="h-6 w-6 text-gray-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">Emma Rodriguez</h3>
                        <p className="text-sm text-gray-500">Nutritionist</p>
                      </div>
                    </div>
                    <div className="border-t p-3 flex justify-between text-sm">
                      <Button variant="ghost" size="sm" className="h-8 text-healthBlue">
                        Message
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 text-healthBlue">
                        Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
