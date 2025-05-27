import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Server, Globe, Shield, Cpu, HelpCircle, Menu, X, 
  Database, Cloud, Code, Box, Settings, Users, CreditCard,
  LifeBuoy, BookOpen, MessageSquare, Phone, Mail
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const megaMenus = {
    hosting: {
      title: 'Hosting Solutions',
      sections: [
        {
          title: 'Popular Hosting',
          items: [
            { icon: <Globe />, name: 'Shared Hosting', path: '/hosting/shared' },
            { icon: <Server />, name: 'VPS Hosting', path: '/hosting/vps' },
            { icon: <Cpu />, name: 'Dedicated Servers', path: '/hosting/dedicated' },
            { icon: <Cloud />, name: 'Cloud Hosting', path: '/hosting/cloud' }
          ]
        },
        {
          title: 'Specialized Hosting',
          items: [
            { icon: <Code />, name: 'WordPress Hosting', path: '/hosting/wordpress' },
            { icon: <Box />, name: 'E-Commerce Hosting', path: '/hosting/ecommerce' },
            { icon: <Database />, name: 'Database Hosting', path: '/hosting/database' },
            { icon: <Settings />, name: 'Managed Hosting', path: '/hosting/managed' }
          ]
        },
        {
          title: 'Features & Add-ons',
          items: [
            { icon: <Shield />, name: 'SSL Certificates', path: '/features/ssl' },
            { icon: <Cloud />, name: 'CDN Service', path: '/features/cdn' },
            { icon: <Database />, name: 'Daily Backups', path: '/features/backups' },
            { icon: <Settings />, name: 'Control Panel', path: '/features/cpanel' }
          ]
        }
      ]
    },
    domains: {
      title: 'Domain Services',
      sections: [
        {
          title: 'Registration',
          items: [
            { icon: <Globe />, name: 'Domain Search', path: '/domains/search' },
            { icon: <Box />, name: 'Bulk Registration', path: '/domains/bulk' },
            { icon: <Shield />, name: 'Domain Transfer', path: '/domains/transfer' },
            { icon: <Settings />, name: 'Domain Management', path: '/domains/manage' }
          ]
        },
        {
          title: 'Additional Services',
          items: [
            { icon: <Shield />, name: 'WHOIS Privacy', path: '/domains/privacy' },
            { icon: <Database />, name: 'DNS Management', path: '/domains/dns' },
            { icon: <Settings />, name: 'Domain Forwarding', path: '/domains/forwarding' },
            { icon: <Cloud />, name: 'Email Forwarding', path: '/domains/email' }
          ]
        },
        {
          title: 'Tools & Resources',
          items: [
            { icon: <Code />, name: 'WHOIS Lookup', path: '/tools/whois' },
            { icon: <Globe />, name: 'Domain Checker', path: '/tools/domain-check' },
            { icon: <Shield />, name: 'SSL Checker', path: '/tools/ssl-check' },
            { icon: <Settings />, name: 'DNS Checker', path: '/tools/dns-check' }
          ]
        }
      ]
    },
    support: {
      title: 'Support & Resources',
      sections: [
        {
          title: 'Help & Support',
          items: [
            { icon: <LifeBuoy />, name: 'Support Center', path: '/support' },
            { icon: <BookOpen />, name: 'Knowledge Base', path: '/support/kb' },
            { icon: <MessageSquare />, name: 'Live Chat', path: '/support/chat' },
            { icon: <Users />, name: 'Community Forum', path: '/support/forum' }
          ]
        },
        {
          title: 'Contact Us',
          items: [
            { icon: <Phone />, name: 'Phone Support', path: '/contact/phone' },
            { icon: <Mail />, name: 'Email Support', path: '/contact/email' },
            { icon: <MessageSquare />, name: 'Submit Ticket', path: '/contact/ticket' },
            { icon: <CreditCard />, name: 'Billing Support', path: '/contact/billing' }
          ]
        },
        {
          title: 'Resources',
          items: [
            { icon: <BookOpen />, name: 'Tutorials', path: '/resources/tutorials' },
            { icon: <Globe />, name: 'Blog', path: '/resources/blog' },
            { icon: <Users />, name: 'API Documentation', path: '/resources/api' },
            { icon: <Shield />, name: 'Status Page', path: '/resources/status' }
          ]
        }
      ]
    }
  };

  const navLinks = [
    { name: 'Hosting', path: '/hosting', megaMenu: 'hosting' },
    { name: 'Domains', path: '/domains', megaMenu: 'domains' },
    { name: 'Support', path: '/support', megaMenu: 'support' }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Server 
              className={`h-8 w-8 ${isScrolled ? 'text-blue-700' : 'text-white'}`} 
            />
            <span 
              className={`text-xl font-bold ${
                isScrolled ? 'text-blue-700' : 'text-white'
              }`}
            >
              LouiseHost
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => setActiveMegaMenu(link.megaMenu)}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center space-x-1 transition-colors ${
                    location.pathname === link.path 
                      ? isScrolled ? 'text-blue-700 font-semibold' : 'text-white font-semibold' 
                      : isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-gray-100 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                </Link>

                {/* Mega Menu */}
                {activeMegaMenu === link.megaMenu && megaMenus[link.megaMenu as keyof typeof megaMenus] && (
                  <div className="absolute top-full left-0 w-screen max-w-7xl -ml-72 pt-4">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6">
                      <div className="grid grid-cols-3 gap-8">
                        {megaMenus[link.megaMenu as keyof typeof megaMenus].sections.map((section, idx) => (
                          <div key={idx}>
                            <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                              {section.items.map((item, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link
                                    to={item.path}
                                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                                  >
                                    <span className="w-5 h-5">{item.icon}</span>
                                    <span>{item.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              className={`px-4 py-2 rounded-md ${
                isScrolled 
                  ? 'text-blue-700 border border-blue-700 hover:bg-blue-50'
                  : 'text-white border border-white hover:bg-white hover:bg-opacity-10'
              }`}
            >
              Login
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-md hover:from-blue-800 hover:to-blue-600 transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4">
          <div className="flex flex-col space-y-4">
            {Object.entries(megaMenus).map(([key, menu]) => (
              <div key={key} className="space-y-2">
                <h3 className="font-semibold text-gray-900">{menu.title}</h3>
                {menu.sections.map((section, idx) => (
                  <div key={idx} className="pl-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">{section.title}</h4>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link
                            to={item.path}
                            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="w-4 h-4">{item.icon}</span>
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
              <button className="w-full py-2 text-blue-700 border border-blue-700 rounded-md hover:bg-blue-50">
                Login
              </button>
              <button className="w-full py-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-md hover:from-blue-800 hover:to-blue-600">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;