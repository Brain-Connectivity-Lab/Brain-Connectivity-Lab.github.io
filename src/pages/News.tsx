import React from 'react';
import { Calendar, ExternalLink, Award, Users, BookOpen, Presentation } from 'lucide-react';

const News = () => {
  const news = [
    {
      date: "2024-03-15",
      title: "Lab Receives Major NIH Grant for Brain Connectivity Research",
      category: "Funding",
      icon: Award,
      summary: "Our lab has been awarded a $2.5M NIH grant to study brain connectivity changes in aging and neurodegenerative diseases.",
      content: "This five-year grant will support our research into how brain networks change with age and in conditions like Alzheimer's disease. The project will use both fMRI and fNIRS to track connectivity patterns longitudinally.",
      link: "#"
    },
    {
      date: "2024-02-28",
      title: "New Paper Published in Nature Neuroscience",
      category: "Publication",
      icon: BookOpen,
      summary: "Our latest research on resting-state networks in autism has been published in Nature Neuroscience.",
      content: "The study reveals novel insights into altered connectivity patterns in autism spectrum disorders, with potential implications for early diagnosis and intervention strategies.",
      link: "#"
    },
    {
      date: "2024-02-10",
      title: "Dr. Chen Presents at International Neuroimaging Conference",
      category: "Conference",
      icon: Presentation,
      summary: "Postdoc Dr. Sarah Chen presented our latest findings on machine learning applications in neuroimaging.",
      content: "The presentation showcased our novel deep learning approach for predicting cognitive outcomes from brain connectivity patterns, receiving excellent feedback from the international community.",
      link: "#"
    },
    {
      date: "2024-01-20",
      title: "Welcome New PhD Students!",
      category: "Team",
      icon: Users,
      summary: "We're excited to welcome three new PhD students to our lab this semester.",
      content: "Our new team members bring diverse backgrounds in neuroscience, computer science, and biomedical engineering, strengthening our interdisciplinary approach to brain connectivity research.",
      link: "#"
    },
    {
      date: "2023-12-05",
      title: "Lab Software Featured in NeuroImage Methods",
      category: "Publication",
      icon: BookOpen,
      summary: "Our open-source connectivity analysis toolkit has been featured in a special methods issue.",
      content: "The publication highlights our lab's commitment to open science and reproducible research practices, making our tools available to the broader neuroimaging community.",
      link: "#"
    },
    {
      date: "2023-11-18",
      title: "Collaborative Study with Clinical Partners Launched",
      category: "Collaboration",
      icon: Users,
      summary: "New multi-site study examining brain connectivity in depression treatment outcomes.",
      content: "This collaboration with three major medical centers will investigate how brain connectivity patterns can predict response to different depression treatments, potentially improving personalized medicine approaches.",
      link: "#"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Funding": "bg-green-500/20 text-green-400",
      "Publication": "bg-blue-500/20 text-blue-400",
      "Conference": "bg-purple-500/20 text-purple-400",
      "Team": "bg-orange-500/20 text-orange-400",
      "Collaboration": "bg-teal-500/20 text-teal-400"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/20 text-gray-400";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-orange-500">Lab News & Events</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with our latest research achievements, publications, and lab activities
          </p>
        </div>

        <div className="space-y-8">
          {news.map((item, index) => (
            <article key={index} className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500/10 p-3 rounded-lg flex-shrink-0">
                  <item.icon size={24} className="text-orange-500" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-400 flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {formatDate(item.date)}
                      </span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-3 leading-tight">
                    {item.title}
                  </h2>
                  
                  <p className="text-orange-300 font-medium mb-4">
                    {item.summary}
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {item.content}
                  </p>
                  
                  {item.link !== "#" && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-orange-500 hover:text-orange-400 transition-colors font-medium"
                    >
                      <span>Read more</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest updates on our research, 
              publications, and lab activities directly in your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button className="bg-orange-500 hover:bg-orange-600 transition-colors px-6 py-3 rounded-lg font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="text-xs text-gray-400 mt-4">
              We respect your privacy and will never share your email address.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;