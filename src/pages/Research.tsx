import React from 'react';
import { Brain, Activity, Network, Database, BarChart3, Zap, Target, Microscope } from 'lucide-react';

const Research = () => {
  const researchAreas = [
    {
      title: "Functional MRI (fMRI)",
      icon: Brain,
      description: "Using BOLD signal to map brain activity patterns with high spatial resolution.",
      details: "We employ state-of-the-art fMRI techniques to investigate neural mechanisms underlying cognition and behavior."
    },
    {
      title: "Resting State fMRI",
      icon: Activity,
      description: "Studying spontaneous brain activity and intrinsic connectivity networks during rest.",
      details: "Our lab pioneered methods for analyzing resting-state networks and their clinical significance."
    },
    {
      title: "Functional Connectivity",
      icon: Network,
      description: "Mapping temporal correlations between brain regions to understand neural communication.",
      details: "We develop novel approaches to quantify and interpret functional connectivity patterns."
    },
    {
      title: "Atlas Based FC",
      icon: Database,
      description: "Using standardized brain atlases to study connectivity patterns across populations.",
      details: "Systematic approaches to parcellate the brain for robust connectivity analyses."
    },
    {
      title: "Independent Component Analysis",
      icon: BarChart3,
      description: "Data-driven methods to identify independent brain networks from complex fMRI data.",
      details: "Advanced statistical techniques to decompose brain signals into meaningful components."
    },
    {
      title: "Functional Near Infrared Spectroscopy (fNIRS)",
      icon: Zap,
      description: "Non-invasive optical neuroimaging to measure brain activity through hemodynamic responses.",
      details: "Portable neuroimaging technology for studying brain function in naturalistic settings."
    },
    {
      title: "Clinical Applications",
      icon: Target,
      description: "Translating connectivity research to understand neurological and psychiatric disorders.",
      details: "Applying our methods to study autism, ADHD, depression, and neurodegenerative diseases."
    },
    {
      title: "Methodological Development",
      icon: Microscope,
      description: "Developing new computational methods and analysis pipelines for neuroimaging data.",
      details: "Creating robust and reproducible tools for the neuroimaging community."
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-orange-500">Research Areas</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our multidisciplinary approach combines cutting-edge neuroimaging techniques with 
            computational methods to understand brain connectivity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500/10 p-3 rounded-lg flex-shrink-0">
                  <area.icon size={32} className="text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-orange-400">{area.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{area.description}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{area.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Process */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-500">Our Research Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Data Acquisition", desc: "High-quality fMRI and fNIRS data collection" },
              { step: "2", title: "Preprocessing", desc: "Quality control and artifact removal" },
              { step: "3", title: "Analysis", desc: "Advanced connectivity and network analysis" },
              { step: "4", title: "Translation", desc: "Clinical and theoretical applications" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-black">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;