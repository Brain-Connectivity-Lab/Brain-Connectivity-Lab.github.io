import React from 'react';
import { Brain, Network, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-90"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Brain size={80} className="mx-auto text-orange-500 mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Brain Connectivity Lab
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We decode the mysteries of brain networks using fMRI and computational neuroscience
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/research"
              className="bg-orange-500 hover:bg-orange-600 transition-colors px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Explore Our Research
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-orange-500">About Our Lab</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Led by <strong>Dr. Bharat Biswal</strong>, our lab is at the forefront of brain connectivity research. 
                We use cutting-edge neuroimaging techniques to understand how different brain regions communicate 
                and work together.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our research bridges neuroscience, computational methods, and clinical applications to advance 
                our understanding of the human brain in health and disease.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <Network size={48} className="mx-auto text-orange-500 mb-4" />
                <h3 className="font-semibold mb-2">fMRI Research</h3>
                <p className="text-sm text-gray-400">Advanced neuroimaging techniques</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <Zap size={48} className="mx-auto text-orange-500 mb-4" />
                <h3 className="font-semibold mb-2">Connectivity</h3>
                <p className="text-sm text-gray-400">Brain network analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">Research Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Resting State fMRI",
                description: "Investigating spontaneous brain activity patterns and their functional significance."
              },
              {
                title: "Functional Connectivity",
                description: "Mapping how brain regions communicate during rest and task performance."
              },
              {
                title: "Clinical Applications",
                description: "Translating research findings to understand neurological and psychiatric conditions."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg hover:bg-gray-750 transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-orange-400">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Questions?</h2>
          <p className="text-xl text-gray-300">
            Contact us at <a href="mailto:biswal@njit.edu" className="text-orange-500 hover:text-orange-400 font-semibold transition-colors">biswal@njit.edu</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;