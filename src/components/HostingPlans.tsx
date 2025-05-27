import React, { useState } from 'react';
import { Check, X, Cpu, Server, HardDrive, Globe, Code, Zap } from 'lucide-react';

const HostingPlans: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'wordpress' | 'vps'>('wordpress');

  const wordpressPlans = [
    {
      name: 'Starter',
      description: 'Perfect for personal blogs and small websites',
      icon: <Globe className="h-8 w-8" />,
      price: 5.99,
      popular: false,
      features: [
        { name: '1 WordPress Site', included: true },
        { name: '10 GB SSD Storage', included: true },
        { name: 'Free Domain for 1 Year', included: true },
        { name: 'Free SSL Certificate', included: true },
        { name: 'Daily Backups', included: false },
        { name: 'Staging Environment', included: false },
        { name: 'WP CLI Access', included: false },
        { name: 'White Label CDN', included: false },
      ],
    },
    {
      name: 'Professional',
      description: 'Ideal for business websites and online stores',
      icon: <Code className="h-8 w-8" />,
      price: 12.99,
      popular: true,
      features: [
        { name: '5 WordPress Sites', included: true },
        { name: '30 GB NVMe Storage', included: true },
        { name: 'Free Domain for 1 Year', included: true },
        { name: 'Free SSL Certificate', included: true },
        { name: 'Daily Backups', included: true },
        { name: 'Staging Environment', included: true },
        { name: 'WP CLI Access', included: true },
        { name: 'White Label CDN', included: false },
      ],
    },
    {
      name: 'Business',
      description: 'For high-traffic WordPress sites',
      icon: <Zap className="h-8 w-8" />,
      price: 24.99,
      popular: false,
      features: [
        { name: 'Unlimited WordPress Sites', included: true },
        { name: '100 GB NVMe Storage', included: true },
        { name: 'Free Domain for 1 Year', included: true },
        { name: 'Free SSL Certificate', included: true },
        { name: 'Daily Backups', included: true },
        { name: 'Staging Environment', included: true },
        { name: 'WP CLI Access', included: true },
        { name: 'White Label CDN', included: true },
      ],
    },
  ];

  const vpsPlans = [
    {
      name: 'Basic VPS',
      description: 'Entry-level VPS for development',
      icon: <Server className="h-8 w-8" />,
      price: 19.99,
      popular: false,
      features: [
        { name: '2 vCPU Cores', included: true },
        { name: '4 GB RAM', included: true },
        { name: '50 GB NVMe Storage', included: true },
        { name: 'Unmetered Bandwidth', included: true },
        { name: 'Root Access', included: true },
        { name: 'DDoS Protection', included: true },
        { name: 'Dedicated IP', included: false },
        { name: 'Server Monitoring', included: false },
      ],
    },
    {
      name: 'Professional VPS',
      description: 'For growing businesses and applications',
      icon: <Cpu className="h-8 w-8" />,
      price: 39.99,
      popular: true,
      features: [
        { name: '4 vCPU Cores', included: true },
        { name: '8 GB RAM', included: true },
        { name: '100 GB NVMe Storage', included: true },
        { name: 'Unmetered Bandwidth', included: true },
        { name: 'Root Access', included: true },
        { name: 'DDoS Protection', included: true },
        { name: 'Dedicated IP', included: true },
        { name: 'Server Monitoring', included: true },
      ],
    },
    {
      name: 'Enterprise VPS',
      description: 'High-performance VPS solution',
      icon: <HardDrive className="h-8 w-8" />,
      price: 79.99,
      popular: false,
      features: [
        { name: '8 vCPU Cores', included: true },
        { name: '16 GB RAM', included: true },
        { name: '200 GB NVMe Storage', included: true },
        { name: 'Unmetered Bandwidth', included: true },
        { name: 'Root Access', included: true },
        { name: 'DDoS Protection', included: true },
        { name: 'Dedicated IP', included: true },
        { name: 'Server Monitoring', included: true },
      ],
    },
  ];

  const activePlans = activeTab === 'wordpress' ? wordpressPlans : vpsPlans;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Hosting Plan
          </h2>
          <p className="text-xl text-gray-600">
            Powerful hosting solutions tailored to your needs, with 24/7 support and a 30-day money-back guarantee.
          </p>
          
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => setActiveTab('wordpress')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'wordpress'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              WordPress Hosting
            </button>
            <button
              onClick={() => setActiveTab('vps')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'vps'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              VPS Hosting
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activePlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-2 border-blue-500 shadow-lg transform hover:-translate-y-2' 
                  : 'border border-gray-200 shadow-md hover:-translate-y-1'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 bg-white">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className={`p-3 rounded-full mb-4 ${
                    plan.popular ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <div className="flex justify-center items-baseline mb-8">
                  <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-500'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingPlans;