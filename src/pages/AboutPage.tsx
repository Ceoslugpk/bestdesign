import React from 'react';
import { Server, Shield, Clock, Users, Globe, Award } from 'lucide-react';
import CTASection from '../components/CTASection';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About LouiseHost</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We're on a mission to make web hosting reliable, secure, and accessible for everyone.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Founded in 2023, LouiseHost was born from a simple belief: web hosting should be powerful yet easy to use, 
                  reliable yet affordable, and backed by genuinely helpful support.
                </p>
                <p>
                  We started as a small team of passionate technologists who were frustrated with the industry's status quo. 
                  Too many providers were offering outdated technology, confusing pricing models, and subpar customer service.
                </p>
                <p>
                  Today, LouiseHost has grown to serve thousands of customers across the globe, from individual bloggers 
                  to enterprise businesses. Throughout our growth, we've remained committed to our founding principles of 
                  technical excellence, transparency, and customer satisfaction.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-xl transform rotate-3 opacity-10"></div>
              <img 
                src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="LouiseHost team" 
                className="relative rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              These principles guide everything we do at LouiseHost, from product development to customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-blue-500" />,
                title: "Security First",
                description: "We prioritize the security of our customers' data and websites above all else, implementing the latest security measures and best practices."
              },
              {
                icon: <Clock className="h-8 w-8 text-blue-500" />,
                title: "Reliability",
                description: "We understand that downtime means lost business, which is why we invest heavily in redundant infrastructure and 24/7 monitoring."
              },
              {
                icon: <Users className="h-8 w-8 text-blue-500" />,
                title: "Customer Success",
                description: "Our customers' success is our success. We're committed to providing the tools, resources, and support needed for our customers to thrive online."
              },
              {
                icon: <Globe className="h-8 w-8 text-blue-500" />,
                title: "Innovation",
                description: "Technology evolves rapidly, and so do we. We're constantly exploring new technologies and methodologies to improve our services."
              },
              {
                icon: <Server className="h-8 w-8 text-blue-500" />,
                title: "Performance",
                description: "We believe in delivering blazing-fast performance through cutting-edge hardware, optimized configurations, and global infrastructure."
              },
              {
                icon: <Award className="h-8 w-8 text-blue-500" />,
                title: "Transparency",
                description: "We believe in honest communication, clear pricing, and setting realistic expectations. No hidden fees, no technical jargon, no surprises."
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Infrastructure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-blue-500 rounded-xl transform -rotate-3 opacity-10"></div>
              <img 
                src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="LouiseHost data center" 
                className="relative rounded-xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Infrastructure</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  At LouiseHost, we've built a global network of state-of-the-art data centers strategically located in 
                  North America, Europe, Asia, and Australia to ensure optimal performance for customers worldwide.
                </p>
                <p>
                  Our servers feature the latest Intel Xeon and AMD EPYC processors, NVMe SSDs for lightning-fast storage, 
                  and enterprise-grade networking equipment to deliver exceptional performance and reliability.
                </p>
                <p>
                  We've implemented multiple layers of redundancy at every level - from power supplies and network connections 
                  to cooling systems and backup generators - ensuring your website stays online even during unexpected events.
                </p>
                <p>
                  And with our proactive 24/7 monitoring systems, our technical team can identify and resolve potential 
                  issues before they impact your service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default AboutPage;