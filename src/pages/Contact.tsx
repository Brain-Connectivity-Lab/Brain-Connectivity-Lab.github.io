import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-orange-500">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our research team for collaborations, inquiries, or to learn more about our work
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/10 p-3 rounded-lg">
                    <MapPin size={24} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Address</h3>
                    <p className="text-gray-300">
                      Department of Biomedical Engineering<br />
                      New Jersey Institute of Technology<br />
                      Newark, NJ 07102
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/10 p-3 rounded-lg">
                    <Mail size={24} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a 
                      href="mailto:biswal@njit.edu" 
                      className="text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      biswal@njit.edu
                    </a>
                    <p className="text-gray-400 text-sm mt-1">Dr. Bharat Biswal - Principal Investigator</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/10 p-3 rounded-lg">
                    <Phone size={24} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <a 
                      href="tel:+1-973-596-3549" 
                      className="text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      +1 (973) 596-3549
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/10 p-3 rounded-lg">
                    <Clock size={24} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Office Hours</h3>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      By appointment only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Quick Links</h3>
              <div className="space-y-3">
                <a 
                  href="#" 
                  className="flex items-center text-gray-300 hover:text-orange-400 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  NJIT Biomedical Engineering
                </a>
                <a 
                  href="#" 
                  className="flex items-center text-gray-300 hover:text-orange-400 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Google Scholar Profile
                </a>
                <a 
                  href="#" 
                  className="flex items-center text-gray-300 hover:text-orange-400 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  ResearchGate
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-white">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="collaboration">Research Collaboration</option>
                  <option value="student">Graduate Student Inquiry</option>
                  <option value="postdoc">Postdoc Position</option>
                  <option value="software">Software/Technical Support</option>
                  <option value="general">General Inquiry</option>
                  <option value="media">Media/Press</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors resize-vertical"
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 transition-colors px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>

            <p className="text-xs text-gray-400 mt-4">
              * Required fields. We typically respond within 24-48 hours during business days.
            </p>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Visit Our Lab</h3>
            <p className="text-gray-300 mb-6">
              We're located at the New Jersey Institute of Technology in Newark, NJ. 
              Lab visits are available by appointment.
            </p>
            <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="mx-auto text-orange-500 mb-4" />
                <p className="text-gray-400">Interactive map coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;