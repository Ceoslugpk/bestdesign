import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to a form submission API in a real implementation
    console.log('Form submitted:', formData);
    alert('Message sent! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Our team is here to help. Reach out to us with any questions or concerns.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-xl p-8 text-center transition-all hover:shadow-lg">
              <div className="inline-flex items-center justify-center bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-700 mb-4">Our support team is available 24/7</p>
              <a href="tel:+18001234567" className="text-blue-600 font-medium hover:underline">+1 (800) 123-4567</a>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 text-center transition-all hover:shadow-lg">
              <div className="inline-flex items-center justify-center bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-700 mb-4">Send us an email anytime</p>
              <a href="mailto:support@louisehost.com" className="text-blue-600 font-medium hover:underline">support@louisehost.com</a>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 text-center transition-all hover:shadow-lg">
              <div className="inline-flex items-center justify-center bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-700 mb-4">Chat with our support team</p>
              <button className="text-blue-600 font-medium hover:underline">Start Chat</button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="Sales Inquiry">Sales Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Billing Question">Billing Question</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Office</h2>
              <div className="bg-gray-100 rounded-xl overflow-hidden mb-6">
                {/* This would be a Google Maps embed in a real implementation */}
                <div className="h-80 bg-gray-300 flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-gray-500" />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Headquarters</h3>
                    <p className="text-gray-700">
                      123 Hosting Street<br />
                      Server City, SC 10101<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday: 10:00 AM - 4:00 PM EST<br />
                      Sunday: Closed
                    </p>
                    <p className="text-gray-700 mt-2">
                      <span className="font-semibold">Note:</span> Technical support is available 24/7.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find quick answers to common questions about our services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How do I migrate my website to LouiseHost?",
                answer: "We offer free website migration services for all new customers. Our technical team will handle the entire process for you, ensuring a seamless transition with minimal downtime. Simply provide us with your current hosting credentials, and we'll take care of the rest."
              },
              {
                question: "Do you offer a money-back guarantee?",
                answer: "Yes, we offer a 30-day money-back guarantee on all our hosting plans. If you're not satisfied with our service within the first 30 days, you can request a full refund, no questions asked."
              },
              {
                question: "What kind of customer support do you provide?",
                answer: "We offer 24/7 customer support via live chat, email, and phone. Our support team consists of experienced hosting professionals who can assist with technical issues, account management, and general inquiries."
              },
              {
                question: "Can I upgrade my hosting plan later?",
                answer: "Absolutely! You can upgrade your hosting plan at any time through your account dashboard. The process is seamless and typically takes just a few minutes. We'll only charge you the prorated difference between your current plan and the new one."
              },
              {
                question: "Do you provide SSL certificates?",
                answer: "Yes, we provide free Let's Encrypt SSL certificates for all domains hosted on our platform. You can also purchase premium SSL certificates (EV, Wildcard) if needed for enhanced security and trust."
              }
            ].map((faq, index) => (
              <details 
                key={index} 
                className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 open:shadow-md"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <span className="text-blue-600">+</span>
                </summary>
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;