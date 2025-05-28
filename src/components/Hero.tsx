import React, { useState } from 'react';
import { Search, Server, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [domainQuery, setDomainQuery] = useState('');
  const [domainExtension, setDomainExtension] = useState('.com');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Searching for: ${domainQuery}${domainExtension}`);
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl animate-float stagger-2"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-32 md:py-40 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slideInLeft">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Premium Web Hosting for <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-teal-200">Every Project</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-lg">
                Fast, secure, and reliable hosting with 99.9% uptime guarantee and 24/7 expert support.
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 space-y-4 animate-fadeIn stagger-2">
              <h2 className="text-xl font-semibold">Find Your Perfect Domain</h2>
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row">
                <div className="flex-1 flex mb-3 sm:mb-0">
                  <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={domainQuery}
                      onChange={(e) => setDomainQuery(e.target.value)}
                      placeholder="Type your domain name"
                      className="block w-full pl-10 pr-3 py-3 rounded-l-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <select
                    value={domainExtension}
                    onChange={(e) => setDomainExtension(e.target.value)}
                    className="bg-gray-100 border-gray-300 text-gray-900 py-0 px-3 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <option value=".com">.com</option>
                    <option value=".net">.net</option>
                    <option value=".org">.org</option>
                    <option value=".io">.io</option>
                    <option value=".co">.co</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-md hover:from-blue-700 hover:to-blue-600 transition-all sm:ml-3 transform hover:scale-105"
                >
                  Search
                </button>
              </form>
              <div className="flex flex-wrap gap-3 text-sm animate-fadeIn stagger-3">
                <div className="flex items-center bg-white bg-opacity-10 px-3 py-1 rounded-full transition-transform hover:scale-105">
                  <span className="font-medium">.com</span>
                  <span className="ml-2 text-blue-200">$8.99/yr</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-10 px-3 py-1 rounded-full transition-transform hover:scale-105">
                  <span className="font-medium">.net</span>
                  <span className="ml-2 text-blue-200">$9.99/yr</span>
                </div>
                <div className="flex items-center bg-white bg-opacity-10 px-3 py-1 rounded-full transition-transform hover:scale-105">
                  <span className="font-medium">.org</span>
                  <span className="ml-2 text-blue-200">$10.99/yr</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block animate-slideInRight">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-20 rounded-3xl transform rotate-3 animate-float"></div>
              <div className="relative bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 border border-white border-opacity-20 transition-transform hover:scale-105">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 animate-fadeIn">
                    <div className="bg-blue-500 bg-opacity-20 p-3 rounded-full">
                      <Server className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">High-Performance Servers</h3>
                      <p className="text-blue-100">NVMe SSDs & latest generation processors</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 animate-fadeIn stagger-2">
                    <div className="bg-green-500 bg-opacity-20 p-3 rounded-full">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Enhanced Security</h3>
                      <p className="text-blue-100">DDoS protection & daily malware scans</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 animate-fadeIn stagger-3">
                    <div className="bg-yellow-500 bg-opacity-20 p-3 rounded-full">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Blazing Fast Speed</h3>
                      <p className="text-blue-100">Global CDN & optimized servers</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 mt-4 border-t border-white border-opacity-10 animate-fadeIn stagger-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="block text-lg font-bold">99.9% Uptime</span>
                        <span className="text-sm text-blue-200">Guaranteed reliability</span>
                      </div>
                      <button className="px-4 py-2 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-all transform hover:scale-105">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;