
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Home,
  User,
  Calendar,
  PenLine,
  FileText,
  Heart,
  Activity,
  Package,
  HelpCircle,
  Settings,
  X
} from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: User, label: 'My Profile', path: '/profile' },
  { icon: Calendar, label: 'Appointments', path: '/appointments' },
  { icon: PenLine, label: 'Consultations', path: '/consultations' },
  { icon: FileText, label: 'Records', path: '/records' },
  { icon: Heart, label: 'Wellness', path: '/wellness' },
  { icon: Activity, label: 'Monitoring', path: '/monitoring' },
  { icon: Package, label: 'Prescriptions', path: '/prescriptions' },
];

const bottomNavItems = [
  { icon: HelpCircle, label: 'Help Center', path: '/help' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const AppSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleToggleSidebar = () => {
      setIsOpen(prev => !prev);
    };
    
    window.addEventListener('toggle-sidebar', handleToggleSidebar);
    
    return () => {
      window.removeEventListener('toggle-sidebar', handleToggleSidebar);
    };
  }, []);

  // Close sidebar on mobile when route changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    // Initialize based on screen size
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Overlay on mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside 
        className={cn(
          "fixed left-0 top-0 z-50 h-screen w-64 bg-white border-r transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Link to="/" className="flex items-center">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-healthBlue to-healthPurple mr-2"></div>
            <span className="text-xl font-semibold text-healthDark">HealthVerse</span>
          </Link>
          <button 
            className="lg:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="py-4 flex flex-col h-[calc(100%-64px)] justify-between">
          <nav className="px-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  location.pathname === item.path
                    ? "bg-healthBlue/10 text-healthBlue font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto px-4 space-y-1">
            {bottomNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  location.pathname === item.path
                    ? "bg-healthBlue/10 text-healthBlue font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;
