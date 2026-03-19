import React from 'react';
import { Download, ExternalLink, Code, Database, Book, PenTool as Tool } from 'lucide-react';

const Resources = () => {
  const software = [
    {
      name: "SPM12",
      description: "Statistical Parametric Mapping software for fMRI analysis",
      type: "External Tool",
      link: "https://www.fil.ion.ucl.ac.uk/spm/",
      category: "analysis"
    },
    {
      name: "CONN Toolbox",
      description: "Functional connectivity toolbox for SPM",
      type: "MATLAB Toolbox",
      link: "https://web.conn-toolbox.org/",
      category: "connectivity"
    },
    {
      name: "REST Toolbox",
      description: "Resting-State fMRI Data Analysis Toolkit",
      type: "MATLAB/Python",
      link: "http://restfmri.net/",
      category: "analysis"
    },
    {
      name: "Brain Connectivity Analysis Suite",
      description: "Custom tools developed by our lab for connectivity analysis",
      type: "Lab Software",
      link: "#",
      category: "custom"
    }
  ];

  const datasets = [
    {
      name: "1000 Functional Connectomes Project",
      description: "Large-scale resting-state fMRI dataset",
      size: "1000+ subjects",
      access: "Open Access",
      link: "http://fcon_1000.projects.nitrc.org/"
    },
    {
      name: "Human Connectome Project",
      description: "High-resolution connectome data",
      size: "1200+ subjects",
      access: "Restricted",
      link: "https://www.humanconnectome.org/"
    },
    {
      name: "ADHD-200 Sample",
      description: "Resting-state fMRI data from ADHD and control subjects",
      size: "973 subjects",
      access: "Open Access",
      link: "http://fcon_1000.projects.nitrc.org/indi/adhd200/"
    }
  ];

  const protocols = [
    {
      title: "fMRI Data Preprocessing Protocol",
      description: "Step-by-step guide for preprocessing resting-state fMRI data",
      type: "PDF Guide",
      pages: "25 pages"
    },
    {
      title: "Functional Connectivity Analysis Pipeline",
      description: "Complete workflow for connectivity analysis",
      type: "Tutorial",
      pages: "15 pages"
    },
    {
      title: "fNIRS Data Collection Guidelines",
      description: "Best practices for fNIRS data acquisition",
      type: "Protocol",
      pages: "12 pages"
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-orange-500">Software & Resources</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tools, datasets, and protocols for neuroimaging research
          </p>
        </div>

        {/* Software Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white flex items-center">
            <Tool className="mr-3 text-orange-500" size={32} />
            Software Tools
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {software.map((tool, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-orange-400 mb-2">{tool.name}</h3>
                    <p className="text-gray-300 mb-3">{tool.description}</p>
                    <span className="inline-block px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                      {tool.type}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Code size={16} />
                    <span>{tool.category}</span>
                  </div>
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-orange-500 hover:text-orange-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Access</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Datasets */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white flex items-center">
            <Database className="mr-3 text-orange-500" size={32} />
            Datasets
          </h2>
          
          <div className="space-y-6">
            {datasets.map((dataset, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <h3 className="text-xl font-bold text-orange-400 mb-2">{dataset.name}</h3>
                    <p className="text-gray-300 mb-3">{dataset.description}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-gray-400">{dataset.size}</span>
                      <span className={`px-2 py-1 rounded ${
                        dataset.access === 'Open Access' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {dataset.access}
                      </span>
                    </div>
                  </div>
                  
                  <a
                    href={dataset.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 transition-colors px-4 py-2 rounded-lg font-semibold"
                  >
                    <Download size={16} />
                    <span>Access Dataset</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Protocols */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-white flex items-center">
            <Book className="mr-3 text-orange-500" size={32} />
            Protocols & Guides
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {protocols.map((protocol, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
                <h3 className="text-lg font-bold text-orange-400 mb-3">{protocol.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{protocol.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <span>{protocol.type} • {protocol.pages}</span>
                  </div>
                  <button className="flex items-center space-x-2 text-orange-500 hover:text-orange-400 transition-colors">
                    <Download size={16} />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Need Help?</h3>
            <p className="text-gray-300 mb-6">
              Contact us for assistance with software installation, data analysis, or protocol implementation
            </p>
            <a 
              href="/contact" 
              className="bg-orange-500 hover:bg-orange-600 transition-colors px-6 py-3 rounded-lg font-semibold inline-block"
            >
              Get Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
