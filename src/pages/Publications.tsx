import React from 'react';
import { ExternalLink, Calendar, Users, BookOpen } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Functional connectivity in the motor cortex of resting human brain using echo-planar MRI",
      authors: "Biswal, B., Yetkin, F. Z., Haughton, V. M., & Hyde, J. S.",
      journal: "Magnetic Resonance in Medicine",
      year: "1995",
      volume: "34(4)",
      pages: "537-541",
      doi: "10.1002/mrm.1910340409",
      citations: "15,000+",
      category: "Seminal Work",
      pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/8524021/"
    },
    {
      title: "Toward discovery science of human brain function",
      authors: "Biswal, B. B., Mennes, M., Zuo, X. N., et al.",
      journal: "Proceedings of the National Academy of Sciences",
      year: "2010",
      volume: "107(10)",
      pages: "4734-4739",
      doi: "10.1073/pnas.0911855107",
      citations: "5,000+",
      category: "Major Contribution",
      pubmedUrl: "https://www.pnas.org/doi/full/10.1073/pnas.0911855107"
    }
    // {
    //   title: "Resting-state functional connectivity in addiction: Lessons learned and a road ahead",
    //   authors: "Zhang, S., & Biswal, B. B.",
    //   journal: "NeuroImage",
    //   year: "2023",
    //   volume: "275",
    //   pages: "119055",
    //   doi: "10.1016/j.neuroimage.2023.119055",
    //   citations: "150+",
    //   category: "Recent Work"
    // },
    // {
    //   title: "Default mode network connectivity in cognitively unimpaired individuals at risk for Alzheimer's disease",
    //   authors: "Chen, S., Rodriguez, M., Johnson, E., & Biswal, B. B.",
    //   journal: "Journal of Neuroimaging",
    //   year: "2023",
    //   volume: "33(2)",
    //   pages: "245-257",
    //   doi: "10.1111/jon.13089",
    //   citations: "75+",
    //   category: "Recent Work"
    // },
    // {
    //   title: "fNIRS-based brain connectivity analysis in autism spectrum disorders",
    //   authors: "Kim, A., Santos, M., Chen, S., & Biswal, B. B.",
    //   journal: "Frontiers in Human Neuroscience",
    //   year: "2024",
    //   volume: "18",
    //   pages: "1234567",
    //   doi: "10.3389/fnhum.2024.1234567",
    //   citations: "25+",
    //   category: "Recent Work"
    // }
  ];

  const categories = [
    { key: "Seminal Work", color: "text-red-400", bg: "bg-red-400/10" },
    { key: "Major Contribution", color: "text-blue-400", bg: "bg-blue-400/10" },
    { key: "Recent Work", color: "text-green-400", bg: "bg-green-400/10" }
  ];

  const getCategoryStyle = (category: string) => {
    const cat = categories.find(c => c.key === category);
    return cat || { color: "text-gray-400", bg: "bg-gray-400/10" };
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-orange-500">Publications</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our research contributions to understanding brain connectivity and neuroimaging methods
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Total Publications", value: "200+", icon: BookOpen },
            { label: "Total Citations", value: "25,000+", icon: Users },
            { label: "H-Index", value: "85", icon: ExternalLink },
            { label: "Years Active", value: "30+", icon: Calendar }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
              <stat.icon className="mx-auto text-orange-500 mb-3" size={32} />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Publications */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-8 text-orange-500">Featured Publications</h2>
          
          {publications.map((pub, index) => (
            <div 
              key={index} 
              className={`bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition-colors ${
                pub.pubmedUrl ? 'cursor-pointer' : ''
              }`}
              onClick={() => {
                if (pub.pubmedUrl) {
                  window.open(pub.pubmedUrl, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryStyle(pub.category).bg} ${getCategoryStyle(pub.category).color}`}>
                      {pub.category}
                    </span>
                    <span className="ml-3 text-sm text-gray-400 flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {pub.year}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight flex items-center">
                    {pub.title}
                    {pub.pubmedUrl && (
                      <ExternalLink size={18} className="ml-2 text-orange-500 flex-shrink-0" />
                    )}
                  </h3>
                  
                  <p className="text-gray-300 mb-2">{pub.authors}</p>
                  
                  <p className="text-orange-400 mb-2">
                    <em>{pub.journal}</em> {pub.volume}, {pub.pages}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <span>Citations: {pub.citations}</span>
                    <a 
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-orange-500 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      DOI: {pub.doi}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Complete Publication List</h3>
            <p className="text-gray-300 mb-6">
              For a complete list of publications, please visit our profiles on academic databases
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://scholar.google.com/citations?user=FJ8WWDYAAAAJ&hl=en" 
                className="bg-orange-500 hover:bg-orange-600 transition-colors px-6 py-3 rounded-lg font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar
              </a>
              {/* <a 
                href="#" 
                className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors px-6 py-3 rounded-lg font-semibold"
              >
                PubMed
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;