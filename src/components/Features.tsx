import React from 'react';
import { Server, Shield, Clock, Database, Zap, Headphones } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Server className="h-8 w-8 text-blue-500" />,
      title: "High-Performance Servers",
      description: "Powered by latest generation Intel Xeon processors and NVMe SSDs for blazing fast performance."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Advanced Security",
      description: "Multi-layered security with DDoS protection, WAF, malware scanning, and automatic security updates."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      title: "99.9% Uptime Guarantee",
      description: "Redundant infrastructure, constant monitoring, and automatic failover ensure your site stays online."
    },
    {
      icon: <Database className="h-8 w-8 text-blue-500" />,
      title: "Daily Backups",
      description: "Automated daily backups with 30-day retention and one-click restoration for peace of mind."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      title: "One-Click Installer",
      description: "Install over 400 applications with a single click, including WordPress, Joomla, and Magento."
    },
    {
      icon: <Headphones className="h-8 w-8 text-blue-500" />,
      title: "24/7 Expert Support",
      description: "Our technical support team is available around the clock to assist you with any issues."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose LouiseHost?
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features designed to provide the best hosting experience for your websites and applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:bg-white"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;