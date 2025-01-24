import React from 'react';
import { Menu, Home, Users, Settings, PenTool as Tool, FileText, Bell, LogOut } from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <Tool className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold">Drone PLM</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="p-4 space-y-2">
          <NavItem icon={<Home />} text="Dashboard" active />
          <NavItem icon={<FileText />} text="Documents" />
          <NavItem icon={<Tool />} text="Maintenance" />
          <NavItem icon={<Users />} text="Team" />
          <NavItem icon={<Bell />} text="Notifications" />
          <NavItem icon={<Settings />} text="Settings" />
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`${sidebarOpen ? 'lg:ml-64' : ''} transition-margin duration-300 ease-in-out`}>
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-4">
              <button className="p-1 rounded-full hover:bg-gray-100">
                <Bell className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium">Julien Quenneville</span>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}

function NavItem({ icon, text, active }: NavItemProps) {
  return (
    <a
      href="#"
      className={`flex items-center space-x-2 p-2 rounded-lg ${
        active
          ? 'bg-blue-50 text-blue-600'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}
