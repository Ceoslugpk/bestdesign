import React from 'react';
import { CheckCircle, AlertCircle, Server, Database, Mail, Globe, Shield, Zap } from 'lucide-react';

const ServerStatus: React.FC = () => {
  // In a real implementation, this would fetch from an API
  const serverStatus = {
    webServers: { status: 'operational', uptime: 99.998, load: 23 },
    databases: { status: 'operational', uptime: 99.995, load: 45 },
    email: { status: 'operational', uptime: 99.992, load: 32 },
    dns: { status: 'operational', uptime: 100, load: 15 },
    cdn: { status: 'operational', uptime: 99.999, load: 28 },
    network: { status: 'operational', uptime: 99.997, load: 40 }
  };

  const datacenters = [
    { 
      name: 'North America', 
      location: 'New York, USA', 
      status: 'operational',
      metrics: {
        network: '0.8ms',
        cpu: '45%',
        memory: '62%',
        storage: '58%'
      }
    },
    { 
      name: 'Europe', 
      location: 'Frankfurt, Germany', 
      status: 'operational',
      metrics: {
        network: '1.2ms',
        cpu: '38%',
        memory: '55%',
        storage: '42%'
      }
    },
    { 
      name: 'Asia Pacific', 
      location: 'Singapore', 
      status: 'operational',
      metrics: {
        network: '1.5ms',
        cpu: '42%',
        memory: '58%',
        storage: '51%'
      }
    },
    { 
      name: 'Australia', 
      location: 'Sydney, Australia', 
      status: 'operational',
      metrics: {
        network: '1.8ms',
        cpu: '35%',
        memory: '48%',
        storage: '45%'
      }
    }
  ];

  const getStatusIcon = (status: string) => {
    return status === 'operational' ? (
      <CheckCircle className="h-5 w-5 text-green-500" />
    ) : (
      <AlertCircle className="h-5 w-5 text-yellow-500" />
    );
  };

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'webServers':
        return <Server className="h-6 w-6 text-blue-500" />;
      case 'databases':
        return <Database className="h-6 w-6 text-blue-500" />;
      case 'email':
        return <Mail className="h-6 w-6 text-blue-500" />;
      case 'dns':
        return <Globe className="h-6 w-6 text-blue-500" />;
      case 'cdn':
        return <Zap className="h-6 w-6 text-blue-500" />;
      case 'network':
        return <Shield className="h-6 w-6 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Real-Time Infrastructure Status
          </h2>
          <p className="text-lg text-gray-600">
            Monitor our global infrastructure performance with real-time metrics and status updates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* System Status */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">System Services</h3>
            </div>
            
            <div className="divide-y divide-gray-200">
              {Object.entries(serverStatus).map(([service, data]) => (
                <div key={service} className="p-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {getServiceIcon(service)}
                    <div>
                      <h4 className="font-medium text-gray-900 capitalize">
                        {service.replace(/([A-Z])/g, ' $1').trim()}
                      </h4>
                      <p className="text-sm text-gray-500">{data.uptime}% uptime last 30 days</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <div className="hidden md:block">
                      <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: `${data.load}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Load: {data.load}%</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(data.status)}
                      <span className={`font-medium ${
                        data.status === 'operational' ? 'text-green-500' : 'text-yellow-500'
                      }`}>
                        {data.status === 'operational' ? 'Operational' : 'Issues Detected'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Centers Status */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Global Data Centers</h3>
            </div>
            
            <div className="divide-y divide-gray-200">
              {datacenters.map((datacenter, index) => (
                <div key={index} className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-medium text-gray-900">{datacenter.name}</h4>
                      <p className="text-sm text-gray-500">{datacenter.location}</p>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      datacenter.status === 'operational' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {datacenter.status === 'operational' ? 'Operational' : 'Issues Detected'}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Network</p>
                      <p className="font-medium text-gray-900">{datacenter.metrics.network}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">CPU</p>
                      <p className="font-medium text-gray-900">{datacenter.metrics.cpu}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Memory</p>
                      <p className="font-medium text-gray-900">{datacenter.metrics.memory}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Storage</p>
                      <p className="font-medium text-gray-900">{datacenter.metrics.storage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Incident History */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">Recent Incidents</h3>
          </div>
          <div className="p-6">
            <div className="text-center text-gray-500">
              No incidents reported in the last 30 days
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerStatus;