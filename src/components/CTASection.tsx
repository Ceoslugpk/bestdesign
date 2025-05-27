import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-10 md:p-16 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 md:flex justify-between items-center">
              <div className="md:w-7/12 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Launch Your Website?
                </h2>
                <p className="text-xl text-blue-100 mb-6">
                  Get started with LouiseHost today and experience the perfect balance of performance, reliability, and support.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "30-day money-back guarantee",
                    "24/7 expert support",
                    "Free domain for 1 year",
                    "Free SSL certificates"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-300 mr-2 flex-shrink-0" />
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    Get Started
                  </button>
                  <button className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors flex items-center justify-center">
                    View Plans <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="md:w-4/12 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
                <h3 className="text-xl font-bold text-white mb-4">Start with our most popular plan</h3>
                
                <div className="bg-white bg-opacity-10 p-4 rounded-lg mb-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-lg font-semibold text-white">VPS Hosting</h4>
                    <div>
                      <span className="text-sm text-blue-200 line-through mr-1">$29.99</span>
                      <span className="text-white font-bold">$19.99</span>
                    </div>
                  </div>
                  <p className="text-blue-100 text-sm mb-3">Perfect for growing businesses</p>
                  <ul className="space-y-2 mb-4">
                    {[
                      "50 GB NVMe Storage",
                      "4 vCPU Cores",
                      "8 GB RAM",
                      "Unlimited Bandwidth",
                      "Free Domain + SSL"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-blue-100">
                        <CheckCircle className="h-4 w-4 text-blue-300 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">
                    Select Plan
                  </button>
                </div>
                
                <div className="text-center">
                  <p className="text-blue-100 text-sm">
                    Not sure which plan is right for you?
                  </p>
                  <button className="text-white font-medium hover:underline mt-1">
                    Contact sales for a custom quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;