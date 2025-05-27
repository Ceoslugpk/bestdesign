import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Server, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin,
  Globe, Shield, Database, Cloud, Code, Box, Settings, Users,
  CreditCard, LifeBuoy, BookOpen, MessageSquare, Award, Clock,
  Cpu, Search, ArrowRight, Lock, Video, Activity
} from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Server className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">LouiseHost</span>
            </div>
            <p className="text-gray-400 mt-2">
              Premier web hosting solutions with unparalleled performance, 
              security, and 24/7 expert support. Your success is our priority.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>24/7 Support: +1 (800) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5" />
                <span>support@louisehost.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>123 Hosting Street, Server City, SC 10101</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Hosting Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Hosting Solutions</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-blue-400 font-medium mb-3">Popular Hosting</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/hosting/shared" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <Globe className="h-4 w-4" />
                      <span>Shared Hosting</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/hosting/vps" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <Server className="h-4 w-4" />
                      <span>VPS Hosting</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/hosting/dedicated" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <Cpu className="h-4 w-4" />
                      <span>Dedicated Servers</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/hosting/cloud" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <Cloud className="h-4 w-4" />
                      <span>Cloud Hosting</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-400 font-medium mb-3">Specialized</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/hosting/wordpress" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <Code className="h-4 w-4" />
                      <span>WordPress</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/hosting/ecommerce" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <Box className="h-4 w-4" />
                      <span>E-Commerce</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/hosting/database" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <Database className="h-4 w-4" />
                      <span>Database</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/hosting/managed" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <Settings className="h-4 w-4" />
                      <span>Managed</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Domain Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Domain Services</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-blue-400 font-medium mb-3">Registration</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/domains/search" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <Globe className="h-4 w-4" />
                      <span>Domain Search</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/domains/transfer" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <Shield className="h-4 w-4" />
                      <span>Domain Transfer</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/domains/bulk" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <Box className="h-4 w-4" />
                      <span>Bulk Registration</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/domains/whois" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <Search className="h-4 w-4" />
                      <span>WHOIS Lookup</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-400 font-medium mb-3">Management</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/domains/dns" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <Settings className="h-4 w-4" />
                      <span>DNS Management</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/domains/privacy" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <Shield className="h-4 w-4" />
                      <span>WHOIS Privacy</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/domains/forwarding" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <ArrowRight className="h-4 w-4" />
                      <span>Forwarding</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/domains/protection" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <Lock className="h-4 w-4" />
                      <span>Protection</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Support & Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support & Resources</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-blue-400 font-medium mb-3">Help & Support</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/support" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <LifeBuoy className="h-4 w-4" />
                      <span>Support Center</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/support/kb" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <BookOpen className="h-4 w-4" />
                      <span>Knowledge Base</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/support/chat" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <MessageSquare className="h-4 w-4" />
                      <span>Live Chat</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/support/ticket" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>Submit Ticket</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-400 font-medium mb-3">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/resources/blog" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <BookOpen className="h-4 w-4" />
                      <span>Blog</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources/tutorials" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <Video className="h-4 w-4" />
                      <span>Tutorials</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources/api" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <Code className="h-4 w-4" />
                      <span>API Docs</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources/status" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                      <Activity className="h-4 w-4" />
                      <span>Status</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 pt-12 pb-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-blue-400" />
              <div>
                <h4 className="font-semibold">Secure Payments</h4>
                <p className="text-sm text-gray-400">SSL encrypted checkout</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-8 w-8 text-blue-400" />
              <div>
                <h4 className="font-semibold">24/7 Support</h4>
                <p className="text-sm text-gray-400">Always here to help</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="h-8 w-8 text-blue-400" />
              <div>
                <h4 className="font-semibold">Money Back Guarantee</h4>
                <p className="text-sm text-gray-400">30-day guarantee</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="h-8 w-8 text-blue-400" />
              <div>
                <h4 className="font-semibold">Trusted by Millions</h4>
                <p className="text-sm text-gray-400">Worldwide customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {year} LouiseHost. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/terms" className="text-gray-500 hover:text-blue-400 transition-colors">Terms</Link>
              <Link to="/privacy" className="text-gray-500 hover:text-blue-400 transition-colors">Privacy</Link>
              <Link to="/security" className="text-gray-500 hover:text-blue-400 transition-colors">Security</Link>
              <Link to="/sitemap" className="text-gray-500 hover:text-blue-400 transition-colors">Sitemap</Link>
              <Link to="/legal" className="text-gray-500 hover:text-blue-400 transition-colors">Legal</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;