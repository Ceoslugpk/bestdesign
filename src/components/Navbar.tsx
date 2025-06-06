import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  const [focusedMenuItem, setFocusedMenuItem] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!activeMegaMenu) return;

    switch (event.key) {
      case 'Escape':
        setActiveMegaMenu(null);
        break;
      case 'ArrowDown':
        event.preventDefault();
        break;
      case 'ArrowUp':
        event.preventDefault();
        break;
      case 'Tab':
        if (!event.shiftKey && focusedMenuItem === 'last') {
          setActiveMegaMenu(null);
        }
        break;
      default:
        break;
    }
  }, [activeMegaMenu, focusedMenuItem]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveMegaMenu(null);
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
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            aria-label="LouiseHost Home"
          >
            <Server 
              className={`h-8 w-8 ${isScrolled ? 'text-blue-700' : 'text-white'}`} 
              aria-hidden="true"
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
                <button
                  className={`flex items-center space-x-1 transition-colors ${
                    location.pathname === link.path 
                      ? isScrolled ? 'text-blue-700 font-semibold' : 'text-white font-semibold' 
                      : isScrolled ? 'text-gray-700 hover:text-blue-700' : 'text-gray-100 hover:text-white'
                  }`}
                  aria-expanded={activeMegaMenu === link.megaMenu}
                  aria-controls={`${link.megaMenu}-menu`}
                  aria-haspopup="true"
                >
                  <span>{link.name}</span>
                </button>

                {/* Mega Menu */}
                {activeMegaMenu === link.megaMenu && megaMenus[link.megaMenu as keyof typeof megaMenus] && (
                  <div 
                    id={`${link.megaMenu}-menu`}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4 w-[800px] max-w-[calc(100vw-2rem)]"
                    onMouseEnter={() => setActiveMegaMenu(link.megaMenu)}
                    onMouseLeave={() => setActiveMegaMenu(null)}
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6">
                      <div className="grid grid-cols-3 gap-8">
                        {megaMenus[link.megaMenu as keyof typeof megaMenus].sections.map((section, idx) => (
                          <div key={idx}>
                            <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
                            <ul className="space-y-2" role="menu">
                              {section.items.map((item, itemIdx) => (
                                <li key={itemIdx} role="none">
                                  <Link
                                    to={item.path}
                                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                                    role="menuitem"
                                    onClick={() => {
                                      setActiveMegaMenu(null);
                                      setMobileMenuOpen(false);
                                    }}
                                  >
                                    <span className="w-5 h-5" aria-hidden="true">{item.icon}</span>
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
              className={`px-4 py-2 rounded-md transition-colors ${
                isScrolled 
                  ? 'text-blue-700 border border-blue-700 hover:bg-blue-50'
                  : 'text-white border border-white hover:bg-white hover:bg-opacity-10'
              }`}
              aria-label="Login to your account"
            >
              Login
            </button>
            <button 
              className="px-4 py-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-md hover:from-blue-800 hover:to-blue-600 transition-all"
              aria-label="Get started with LouiseHost"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} aria-hidden="true" />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 top-[57px] bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="h-full overflow-y-auto pb-20">
          <div className="px-4 py-6 space-y-6">
            {Object.entries(megaMenus).map(([key, menu]) => (
              <div key={key} className="space-y-4">
                <h3 className="font-semibold text-gray-900 text-lg">{menu.title}</h3>
                {menu.sections.map((section, idx) => (
                  <div key={idx} className="pl-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">{section.title}</h4>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link
                            to={item.path}
                            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setActiveMegaMenu(null);
                            }}
                          >
                            <span className="w-4 h-4" aria-hidden="true">{item.icon}</span>
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
            <div className="flex flex-col space-y-4 pt-6 border-t border-gray-200">
              <button className="w-full py-3 text-blue-700 border border-blue-700 rounded-md hover:bg-blue-50 transition-colors">
                Login
              </button>
              <button className="w-full py-3 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-md hover:from-blue-800 hover:to-blue-600 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;