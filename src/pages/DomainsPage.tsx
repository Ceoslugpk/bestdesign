import React, { useState } from 'react';
import { Search, Check, Shield, Zap, RefreshCw } from 'lucide-react';
import CTASection from '../components/CTASection';

const DomainsPage: React.FC = () => {
  const [domainQuery, setDomainQuery] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);
  
  // In a real implementation, this would call an API to check domain availability
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (domainQuery.trim()) {
      setSearchPerformed(true);
    }
  };

  const domainExtensions = [
    { ext: '.com', price: 8.99, available: true },
    { ext: '.net', price: 9.99, available: true },
    { ext: '.org', price: 10.99, available: true },
    { ext: '.io', price: 29.99, available: false },
    { ext: '.co', price: 19.99, available: true },
    { ext: '.dev', price: 14.99, available: true },
    { ext: '.info', price: 7.99, available: true },
    { ext: '.me', price: 12.99, available: true }
  ];

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Domain Registration</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Find and register your perfect domain name to establish your online presence.
          </p>
        </div>
      </div>

      {/* Domain Search */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Find Your Perfect Domain Name
            </h2>
            <form onSubmit={handleSearch} className="mb-8">
              <div className="flex flex-col md:flex-row">
                <div className="relative flex-grow mb-4 md:mb-0">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={domainQuery}
                    onChange={(e) => setDomainQuery(e.target.value)}
                    placeholder="Enter your domain name"
                    className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-md md:rounded-r-none text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-4 rounded-md md:rounded-l-none hover:bg-blue-700 transition-all"
                >
                  Search
                </button>
              </div>
            </form>
            
            {searchPerformed && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Results for "{domainQuery}"</h3>
                <div className="divide-y divide-gray-200">
                  {domainExtensions.map((domain, index) => (
                    <div key={index} className="py-4 flex justify-between items-center">
                      <div className="flex items-center">
                        {domain.available ? (
                          <Check className="h-5 w-5 text-green-500 mr-3" />
                        ) : (
                          <span className="h-5 w-5 flex items-center justify-center text-red-500 mr-3">✗</span>
                        )}
                        <span className="font-medium text-gray-900">{domainQuery}{domain.ext}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-bold text-gray-900 mr-4">${domain.price}/year</span>
                        <button
                          className={`px-4 py-2 rounded-md text-sm font-medium ${
                            domain.available 
                              ? 'bg-blue-600 text-white hover:bg-blue-700' 
                              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          }`}
                          disabled={!domain.available}
                        >
                          {domain.available ? 'Add to Cart' : 'Unavailable'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              {['.com', '.net', '.org', '.io', '.co', '.biz'].map((ext) => (
                <div key={ext} className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm">
                  {ext}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Domain Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need for Your Domain
            </h2>
            <p className="text-lg text-gray-600">
              Our domain registration service includes all the features you need to secure and manage your online identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-blue-500" />,
                title: "Free WHOIS Privacy",
                description: "Keep your personal information private with complimentary WHOIS privacy protection on all domains."
              },
              {
                icon: <RefreshCw className="h-8 w-8 text-blue-500" />,
                title: "Easy Domain Transfer",
                description: "Seamlessly transfer your existing domains to LouiseHost with our simple transfer process."
              },
              {
                icon: <Zap className="h-8 w-8 text-blue-500" />,
                title: "DNS Management",
                description: "Take full control of your domain's DNS records with our intuitive management interface."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Domain Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transparent Domain Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Competitive pricing for all popular domain extensions with no hidden fees.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-4 px-6 text-left text-gray-600 font-semibold">Domain Extension</th>
                    <th className="py-4 px-6 text-center text-gray-600 font-semibold">Registration</th>
                    <th className="py-4 px-6 text-center text-gray-600 font-semibold">Renewal</th>
                    <th className="py-4 px-6 text-center text-gray-600 font-semibold">Transfer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { ext: '.com', reg: 8.99, renewal: 10.99, transfer: 8.99 },
                    { ext: '.net', reg: 9.99, renewal: 11.99, transfer: 9.99 },
                    { ext: '.org', reg: 10.99, renewal: 12.99, transfer: 10.99 },
                    { ext: '.io', reg: 29.99, renewal: 29.99, transfer: 29.99 },
                    { ext: '.co', reg: 19.99, renewal: 19.99, transfer: 19.99 },
                    { ext: '.biz', reg: 7.99, renewal: 9.99, transfer: 7.99 },
                    { ext: '.info', reg: 7.99, renewal: 9.99, transfer: 7.99 },
                    { ext: '.me', reg: 12.99, renewal: 14.99, transfer: 12.99 }
                  ].map((domain, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-4 px-6 text-gray-900 font-medium">{domain.ext}</td>
                      <td className="py-4 px-6 text-center text-gray-700">${domain.reg}/year</td>
                      <td className="py-4 px-6 text-center text-gray-700">${domain.renewal}/year</td>
                      <td className="py-4 px-6 text-center text-gray-700">${domain.transfer}/year</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * All domains include free WHOIS privacy protection and DNS management.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default DomainsPage;