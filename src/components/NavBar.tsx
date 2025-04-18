
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  User, 
  LogOut, 
  Bell, 
  Menu,
  ChevronDown
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from './SidebarTrigger';

interface NavBarProps {
  isLoggedIn?: boolean;
  userName?: string;
  startOnboarding?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ 
  isLoggedIn = false, 
  userName = "", 
  startOnboarding 
}) => {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  return (
    <header className="border-b bg-white py-3 sticky top-0 z-40">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="lg:hidden" />
          <Link to="/" className="flex items-center">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-healthBlue to-healthPurple mr-2"></div>
            <span className="text-xl font-semibold text-healthDark">HealthVerse</span>
          </Link>
          <nav className="hidden md:flex ml-8 space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Services <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Teleconsultation</DropdownMenuItem>
                <DropdownMenuItem>Medicine Delivery</DropdownMenuItem>
                <DropdownMenuItem>Health Records</DropdownMenuItem>
                <DropdownMenuItem>Smart Devices</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost">Resources</Button>
            <Button variant="ghost">About Us</Button>
            <Button variant="ghost">Contact</Button>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              <Button 
                size="icon" 
                variant="ghost" 
                className="relative"
                onClick={() => toast({
                  title: "Notifications",
                  description: "You have no new notifications"
                })}
              >
                <Bell size={18} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-healthPurple text-white flex items-center justify-center">
                      <User size={14} />
                    </div>
                    <span className="hidden md:inline-block">{userName || "User"}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>My Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Help Center</DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2" size={16} />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Get Started</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
