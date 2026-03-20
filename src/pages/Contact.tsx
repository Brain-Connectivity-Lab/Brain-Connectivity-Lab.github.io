import React from 'react';
import { Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-orange-500">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our research team for collaborations, inquiries, or to learn more about our work
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 max-w-2xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-8 text-white text-center">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-orange-500/10 p-4 rounded-full mb-4">
                    <MapPin size={32} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                    <p className="text-gray-300 text-lg">
                      650, Fenster Hall <br />
                      Department of Biomedical Engineering<br />
                      New Jersey Institute of Technology<br />
                      Newark, NJ 07102
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-gray-700"></div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-orange-500/10 p-4 rounded-full mb-4">
                    <Mail size={32} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <a 
                      href="mailto:biswal@njit.edu" 
                      className="text-orange-400 hover:text-orange-300 transition-colors text-lg font-medium"
                    >
                      biswal@njit.edu
                    </a>
                    <p className="text-gray-400 mt-2">Dr. Bharat Biswal • Principal Investigator</p>
                  </div>
                </div>

                <div className="w-full h-px bg-gray-700"></div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-orange-500/10 p-4 rounded-full mb-4">
                    <Clock size={32} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Office Hours</h3>
                    <p className="text-gray-300 text-lg">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      <span className="text-gray-400 text-sm">By appointment only</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-500 text-center">Quick Links</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#" 
                  className="flex items-center bg-gray-700 px-4 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-600 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  NJIT Biomedical Engineering
                </a>
                <a 
                  href="#" 
                  className="flex items-center bg-gray-700 px-4 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-600 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Google Scholar Profile
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-orange-500">Visit Our Lab</h3>
              <p className="text-gray-300 mb-6">
                We're located at the New Jersey Institute of Technology in Newark, NJ. 
              </p>
              
              {/* Map Open Links
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <a 
                  href="https://maps.google.com/?q=Fenster+Hall,+NJIT,+Newark,+NJ+07102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-600 transition-colors px-6 py-3 rounded-lg text-white font-medium"
                >
                  <ExternalLink size={18} className="text-orange-500" />
                  <span>Open in Google Maps</span>
                </a>
                <a 
                  href="http://maps.apple.com/?q=Fenster+Hall,+NJIT,+Newark,+NJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-600 transition-colors px-6 py-3 rounded-lg text-white font-medium"
                >
                  <ExternalLink size={18} className="text-orange-500" />
                  <span>Open in Apple Maps</span>
                </a>
              </div> */}

              {/* Embedded Interactive Map */}
              <div className="bg-gray-700 h-96 rounded-lg overflow-hidden shadow-lg border border-gray-600">
                <iframe
                  src="https://maps.google.com/maps?q=Fenster%20Hall,%20NJIT,%20Newark,%20NJ&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lab Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;