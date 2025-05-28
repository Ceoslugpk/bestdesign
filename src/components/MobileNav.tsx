import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Server, Globe, HelpCircle, Menu } from 'lucide-react';

const MobileNav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { icon: <Home size={24} />, label: 'Home', path: '/' },
    { icon: <Server size={24} />, label: 'Hosting', path: '/hosting' },
    { icon: <Globe size={24} />, label: 'Domains', path: '/domains' },
    { icon: <HelpCircle size={24} />, label: 'Support', path: '/support' },
    { icon: <Menu size={24} />, label: 'Menu', path: '/menu' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden safe-area-bottom">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
              location.pathname === item.path
                ? 'text-blue-600'
                : 'text-gray-600 hover:text-blue-600 active:text-blue-700'
            }`}
          >
            {item.icon}
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;