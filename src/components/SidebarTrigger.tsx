
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarTriggerProps {
  className?: string;
}

export const SidebarTrigger: React.FC<SidebarTriggerProps> = ({ className }) => {
  const toggleSidebar = () => {
    // This will be implemented with a sidebar context later
    const event = new CustomEvent('toggle-sidebar');
    window.dispatchEvent(event);
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleSidebar}
      className={cn(className)}
    >
      <Menu size={20} />
    </Button>
  );
};
