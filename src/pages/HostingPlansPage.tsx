import React from 'react';
import HostingPlans from '../components/HostingPlans';
import CTASection from '../components/CTASection';
import { Server, Cpu, HardDrive, Database, Clock, Settings } from 'lucide-react';

const HostingPlansPage: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hosting Plans</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Select the perfect hosting solution for your website or application, backed by our 30-day money-back guarantee.
          </p>
        </div>
      </div>

      {/* Hosting Plans */}
      <HostingPlans />

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Detailed Plan Comparison
            </h2>
            <p className="text-lg text-gray-600">
              Compare our hosting plans side by side to find the perfect solution for your needs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-4 px-6 text-left text-gray-600 font-semibold">Feature</th>
                  <th className="py-4 px-6 text-center text-gray-600 font-semibold">Shared Hosting</th>
                  <th className="py-4 px-6 text-center text-blue-700 font-semibold">VPS Hosting</th>
                  <th className="py-4 px-6 text-center text-gray-600 font-semibold">Dedicated Server</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 text-gray-800 font-medium">Storage</td>
                  <td className="py-4 px-6 text-center text-gray-700">10 GB SSD</td>
                  <td className="py-4 px-6 text-center text-gray-700 bg-blue-50">50 GB NVMe</td>
                  <td className="py-4 px-6 text-center text-gray-700">500 GB NVMe</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-800 font-medium">Bandwidth</td>
                  <td className="py-4 px-6 text-center text-gray-700">Unmetered</td>
                  <td className="py-4 px-6 text-center text-gray-700 bg-blue-50">Unmetered</td>
                  <td className="py-4 px-6 text-center text-gray-700">Unmetered</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-800 font-medium">CPU Cores</td>
                  <td className="py-4 px-6 text-center text-gray-700">Shared</td>
                  <td className="py-4 px-6 text-center text-gray-700 bg-blue-50">4 vCPU</td>
                  <td className="py-4 px-6 text-center text-gray-700">8 Dedicated Cores</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-800 font-medium">RAM</td>
                  <td className="py-4 px-6 text-center text-gray-700">2 GB</td>
                  <td className="py-4 px-6 text-center text-gray-700 bg-blue-50">8 GB</td>
                  <td className="py-4 px-6 text-center text-gray-700">32 GB</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-800 font-medium">Websites</td>
                  <td className="py-4 px-6 text-center text-gray-700">1</td>
                  <td className="py-4 px-6 text-center text-gray-700 bg-blue-50">Unlimited</td>
                  <td className="py-4 px-6 text-center text-gray-700">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-800 font-medium">Free Domain</td>
                  <td className="py-4 px-6 text-center text-gray-700">✓</td>
                  <td className="py-4 px-6 text-center text-gray-700 bg-blue-50">✓</td>
                  <td className="py-4 px-6 text-center text-gray-700">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-800 font-medium">Free SSL Certificate</td>
                  <td className="py-4 px-6 text-center text-gray-700">✓</td>
                  <td className="py-4 px-6 text-center text-gray-700 bg-blue-50">✓</td>
                  <td className="py-4 px-6 text-center text-gray-700">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-800 font-medium">Control Panel</td>
                  <td className="py-4 px-6 text-center text-gray-700">cPanel</td>
                  <td className="py-4 px-6 text-center text-gray-700 bg-blue-50">cPanel/WHM</td>
                  <td className="py-4 px-6 text-center text-gray-700">Full Access</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-800 font-medium">Daily Backups</td>
                  <td className="py-4 px-6 text-center text-gray-700">✗</td>
                  <td className="py-4 px-6 text-center text-gray-700 bg-blue-50">✓</td>
                  <td className="py-4 px-6 text-center text-gray-700">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-800 font-medium">DDoS Protection</td>
                  <td className="py-4 px-6 text-center text-gray-700">Basic</td>
                  <td className="py-4 px-6 text-center text-gray-700 bg-blue-50">Advanced</td>
                  <td className="py-4 px-6 text-center text-gray-700">Enterprise</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-800 font-medium">Root Access</td>
                  <td className="py-4 px-6 text-center text-gray-700">✗</td>
                  <td className="py-4 px-6 text-center text-gray-700 bg-blue-50">✓</td>
                  <td className="py-4 px-6 text-center text-gray-700">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-800 font-medium">Price</td>
                  <td className="py-4 px-6 text-center text-gray-700">$4.99/mo</td>
                  <td className="py-4 px-6 text-center font-bold text-blue-700 bg-blue-50">$19.99/mo</td>
                  <td className="py-4 px-6 text-center text-gray-700">$89.99/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              All Plans Include
            </h2>
            <p className="text-lg text-gray-600">
              Every hosting plan comes with these essential features to ensure your website's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Server className="h-8 w-8 text-blue-500" />,
                title: "99.9% Uptime Guarantee",
                description: "We stand behind our reliability with a 99.9% uptime SLA on all hosting plans."
              },
              {
                icon: <Database className="h-8 w-8 text-blue-500" />,
                title: "Free Website Migration",
                description: "Our expert team will handle the entire migration process for you, at no additional cost."
              },
              {
                icon: <Clock className="h-8 w-8 text-blue-500" />,
                title: "24/7 Support",
                description: "Access our knowledgeable support team anytime via live chat, email, or phone."
              },
              {
                icon: <Settings className="h-8 w-8 text-blue-500" />,
                title: "Easy-to-Use Control Panel",
                description: "Manage your hosting, domains, and applications with our intuitive control panel."
              },
              {
                icon: <Cpu className="h-8 w-8 text-blue-500" />,
                title: "Latest Technology",
                description: "Benefit from cutting-edge server hardware and software for optimal performance."
              },
              {
                icon: <HardDrive className="h-8 w-8 text-blue-500" />,
                title: "One-Click Installer",
                description: "Install over 400 applications with a single click, from WordPress to Magento."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default HostingPlansPage;