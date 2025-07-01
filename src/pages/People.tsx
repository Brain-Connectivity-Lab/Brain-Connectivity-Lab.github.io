import React from 'react';
import { Star, Award, BookOpen, GraduationCap, Users, Zap, Mail, Linkedin } from 'lucide-react';

interface Member {
  name: string;
  role: string;
  bio: string;
  email?: string;
  image: string;
  specialization: string;
  links?: { title: string; url: string; }[];
}

interface TeamCategory {
  category: string;
  icon: React.ComponentType<any>;
  color: string;
  members: Member[];
}

const People = () => {
  const teamStructure: TeamCategory[] = [
    {
      category: "Principal Investigator",
      icon: Star,
      color: "from-orange-500 to-red-500",
      members: [
        {
          name: "Dr. Bharat Biswal",
          role: "Distinguished Professor of Biomedical Engineering; Director, Center for Brain Imaging; Principal Investigator, Brain Connectivity Lab",
          bio: "Dr. Bharat Biswal is a pioneering figure in functional neuroimaging, widely recognized for his seminal 1995 paper, \"Functional connectivity in the motor cortex of resting human brain using echo-planar MRI\". This work established the field of resting-state fMRI (rs-fMRI) and the study of functional connectivity, creating a paradigm shift in neuroscience. As Director of NJIT's Center for Brain Imaging, his research uses techniques like fMRI and fNIRS to advance the understanding and treatment of neurodegenerative diseases such as Alzheimer's, Parkinson's, and Tourette syndrome, as well as brain injuries and natural aging. Dr. Biswal's lab focuses on developing clinical biomarkers by analyzing large-scale neuroimaging datasets and investigating the connections between the brain's gray and white matter to track disease progression and assess therapeutic interventions.",
          email: "bbiswal@njit.edu",
          image: "/images/biswal.jpg",
          specialization: "Resting-state fMRI, Brain Connectivity",
          links: [
            { title: "NJIT Profile", url: "https://people.njit.edu/profile/biswal" },
            { title: "NJIT Board Profile", url: "https://www.njit.edu/boards/biswal" },
            { title: "Google Scholar", url: "https://scholar.google.com/citations?user=FJ8WWDYAAAAJ" }
          ]
        }
      ]
    },
    {
      category: "Research Professor",
      icon: Award,
      color: "from-blue-500 to-purple-500",
      members: [
        {
          name: "Dr. Xin Di",
          role: "Research Professor, Department of Biomedical Engineering",
          bio: "Dr. Xin Di's research centers on human brain connectivity and the organization of brain networks using fMRI. He develops and applies computational models to measure how brain connectivity changes during various mental states, including cognitive tasks and naturalistic conditions like watching movies. A significant portion of his work focuses on understanding brain development, aging, and the neural mechanisms of mental conditions, particularly Autism Spectrum Disorder (ASD).",
          email: "xdi@njit.edu",
          image: "/images/xindi.jpg",
          specialization: "Computational Neuroscience, Network Analysis",
          links: [
            { title: "NJIT Profile", url: "https://people.njit.edu/profile/dixin" },
            { title: "Personal Website", url: "http://www.dixin.info/" },
            { title: "Google Scholar", url: "https://scholar.google.com/citations?user=wDjD46gAAAAJ" }
          ]
        }
      ]
    },
    {
      category: "Postdoctoral Researchers",
      icon: BookOpen,
      color: "from-green-500 to-teal-500",
      members: [
        {
          name: "Dr. Sukesh Das",
          role: "Postdoctoral Research Associate",
          bio: "Dr. Das's research centers on neuroimage (fMRI) analysis using advanced signal processing and machine learning techniques. He investigates functional brain connectivity in neurodegenerative disorders and currently focuses on estimating reliable functional networks in gray and white matter to understand connectivity changes in temporal lobe epilepsy (TLE).",
          email: "sdas@njit.edu",
          image: "/images/sukesh.jpg",
          specialization: "Machine Learning, Clinical Applications",
          links: [
            { title: "LinkedIn", url: "https://www.linkedin.com/in/sukesh-kumar-das-1a819512/" },
            { title: "Personal Page", url: "https://sites.google.com/view/sukeshkumardas/home?pli=1" }
          ]
        },
        {
          name: "Dr. Priyanka Mittal",
          role: "Postdoctoral Research Associate",
          bio: "Dr. Mittal uses signal processing and machine learning for neuroimaging and medical image analysis. Her recent work explores dynamic changes in the brain's functional connectivity in response to movie stimuli.",
          email: "pmittal@njit.edu",
          image: "/images/priyanka.jpg",
          specialization: "fMRI Methods, Data Preprocessing",
          links: [
            { title: "LinkedIn", url: "https://www.linkedin.com/in/priyankamittal-pm/" }
          ]
        }
      ]
    },
    {
      category: "PhD Students",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500",
      members: [
        {
          name: "Le Gao",
          role: "PhD Student in Computer Science (co-advised with Dr. Zhi Wei)",
          bio: "Le's research involves gaze prediction using fMRI data with deep learning models, alongside analyses of age effects and viewing behavior.",
          email: "lg123@njit.edu",
          image: "/images/legao.jpg",
          specialization: "Aging, Multimodal Imaging"
        },
        {
          name: "Pratik Jain",
          role: "PhD Student",
          bio: "Pratik studies functional connectivity patterns in neurodevelopmental disorders using advanced fMRI analysis techniques.",
          email: "pj456@njit.edu",
          image: "/images/pratik.jpg",
          specialization: "Neurodevelopmental Disorders, fMRI",
          links: [
            { title: "LinkedIn", url: "https://www.linkedin.com/in/pratik-jain5/" }
          ]
        }
      ]
    },
    {
      category: "Master's Students",
      icon: BookOpen,
      color: "from-yellow-500 to-orange-500",
      members: [
        {
          name: "Kartikeya Kulkarni",
          role: "Research Assistant / M.S. in Biomedical Engineering Student",
          bio: "Kartikeya's work involves brain connectivity, Diffusion Tensor Imaging (DTI), and machine learning for neuroimaging. He is developing pipelines to integrate DTI and resting-state fMRI to study structure-function relationships and identify connectivity markers for cognitive and psychiatric conditions.",
          email: "kk797@njit.edu",
          image: "/images/kartikeya.jpg",
          specialization: "DTI, Structure-Function Relationships",
          links: [
            { title: "LinkedIn", url: "https://linkedin.com/in/kulkarni-kartikeya-4853691b8" }
          ]
        },
        {
          name: "Dev Jariwala",
          role: "Masters Student",
          bio: "Working on brain connectivity analysis methods and developing tools for neuroimaging data visualization.",
          email: "djariwala@njit.edu",
          image: "/brain-icon.svg",
          specialization: "Data Visualization, Analysis Methods"
        }
      ]
    },
    {
      category: "Undergraduate Students",
      icon: Zap,
      color: "from-indigo-500 to-blue-500",
      members: [
        {
          name: "Nabin Robin Lee",
          role: "Undergraduate Researcher (mentored by Dr. Xin Di)",
          bio: "Nabin's Audio-Visual Cognitive Mapping project involves using machine learning to analyze and classify audio from videos to find correlations between auditory patterns and neural activation in fMRI datasets.",
          email: "robin@njit.edu",
          image: "/brain-icon.svg",
          specialization: "Audio-Visual Analysis, Machine Learning",
          links: [
            { title: "LinkedIn", url: "https://www.linkedin.com/in/nr-lee/" }
          ]
        },
        {
          name: "Sudarshan Ganapathy",
          role: "Undergraduate Research Assistant",
          bio: "Sudarshan uses tools like AFNI, SPM, and MATLAB to research changes in the brain's white matter throughout pregnancy.",
          email: "spg38@njit.edu",
          image: "/images/sudarshan.jpg",
          specialization: "White Matter Analysis, AFNI/SPM",
          links: [
            { title: "LinkedIn", url: "https://www.linkedin.com/in/sudarshan-ganapathy-521a11241/" }
          ]
        },
        {
          name: "Nilesh",
          role: "Undergraduate Student",
          bio: "Exploring computational neuroscience and contributing to software development for neuroimaging analysis.",
          email: "nilesh@njit.edu",
          image: "/brain-icon.svg",
          specialization: "Computational Methods, Software"
        }
      ]
    },
    {
      category: "High School Student",
      icon: Star,
      color: "from-pink-500 to-rose-500",
      members: [
        {
          name: "Yamin Baba",
          role: "High School Student",
          bio: "Early researcher gaining exposure to neuroscience and brain connectivity research through mentorship programs.",
          email: "ybaba@njit.edu",
          image: "/brain-icon.svg",
          specialization: "Early Research, Mentorship"
        }
      ]
    },
    {
      category: "Research Assistants",
      icon: Users,
      color: "from-teal-500 to-cyan-500",
      members: [
        {
          name: "Rebecca Engels",
          role: "Research Assistant",
          bio: "Supporting fNIRS data collection and analysis for cognitive neuroscience studies and brain connectivity research.",
          email: "rengels@njit.edu",
          image: "/brain-icon.svg",
          specialization: "fNIRS, Cognitive Studies"
        },
        {
          name: "George Hanna",
          role: "Data Analyst",
          bio: "George works on extracting heart rate (HR) and respiratory rate (RR) signals from fNIRS scans and analyzing Theory of Mind during movie-watching fMRI studies.",
          email: "gbh6@njit.edu",
          image: "/images/george.jpg",
          specialization: "fMRI Preprocessing, Quality Control",
          links: [
            { title: "LinkedIn", url: "https://www.linkedin.com/in/george-b-hanna/" },
            { title: "Google Scholar", url: "https://scholar.google.com/citations?user=h5c6DaEAAAAJ&hl=en" }
          ]
        },
        {
          name: "Pranav Kowadkar",
          role: "Data Analyst",
          bio: "Pranav is developing a chat-based Retrieval-Augmented Generation (RAG) pipeline for interactive analysis of Neurosynth fMRI data. He is also replicating deep learning models to identify gender differences in the functional brain organization of individuals with autism.",
          email: "psk@njit.edu",
          image: "/images/pranav.jpg",
          specialization: "Pipeline Development, Software Tools",
          links: [
            { title: "LinkedIn", url: "https://linkedin.com/in/pkowadkar" },
            { title: "Portfolio", url: "https://p-kowadkar.github.io" }
          ]
        }
      ]
    },
    {
      category: "Alumni",
      icon: Award,
      color: "from-gray-500 to-slate-500",
      members: [
        {
          name: "Dr. Rui Yuan",
          role: "System Architect | ASML",
          bio: "Former lab member now working as a System Architect at ASML.",
          image: "/images/rui.jpg",
          specialization: "System Architecture, Neuroimaging",
          links: [
            { title: "LinkedIn", url: "https://www.linkedin.com/in/rui-yuan-applicant/" },
            { title: "Google Scholar", url: "https://scholar.google.com/citations?user=h8_wSLkAAAAJ&hl=en" }
          ]
        },
        {
          name: "Dr. Donna Chen",
          role: "Scientific Consultant | NIRx Medical Technologies",
          bio: "Former lab member now working as a Scientific Consultant at NIRx Medical Technologies.",
          image: "/images/donna.jpg",
          specialization: "fNIRS, Neuroimaging Consulting",
          links: [
            { title: "LinkedIn", url: "https://www.linkedin.com/in/donna-chen-1b245a19b/" },
            { title: "Google Scholar", url: "https://scholar.google.com/citations?user=3DTGyZ4AAAAJ&hl=en" }
          ]
        }
      ]
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-orange-500">Our Research Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A diverse, multi-level team advancing brain connectivity research through collaboration and innovation
          </p>
        </div>

        {/* Team Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">16</div>
            <div className="text-sm text-gray-400">Total Members</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">8</div>
            <div className="text-sm text-gray-400">Academic Levels</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">2</div>
            <div className="text-sm text-gray-400">Faculty</div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
            <div className="text-sm text-gray-400">Students</div>
          </div>
        </div>

        {teamStructure.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16">
            <div className="flex items-center mb-8">
              <div className={`bg-gradient-to-r ${section.color} p-3 rounded-lg mr-4`}>
                <section.icon className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">{section.category}</h2>
                <div className="text-sm text-gray-400 mt-1">
                  {section.members.length} member{section.members.length > 1 ? 's' : ''}
                </div>
              </div>
            </div>
            
            <div className={`grid gap-8 ${
              section.members.length === 1 
                ? 'md:grid-cols-1 lg:grid-cols-2 max-w-4xl' 
                : section.members.length === 2 
                  ? 'md:grid-cols-2' 
                  : section.members.length === 3
                    ? 'md:grid-cols-2 lg:grid-cols-3'
                    : 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            }`}>
              {section.members.map((person, personIndex) => {
                const linkedInLink = person.links?.find(link => link.title.toLowerCase().includes('linkedin'));

                return (
                  <div 
                    key={personIndex} 
                    className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 group"
                  >
                    <div className="relative">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className={`absolute top-3 right-3 bg-gradient-to-r ${section.color} px-3 py-1 rounded-full`}>
                        <span className="text-white text-xs font-medium">
                          {section.category === "Principal Investigator" ? "PI" :
                          section.category === "Research Professor" ? "Prof" :
                          section.category === "Postdoctoral Researchers" ? "Postdoc" :
                          section.category === "PhD Students" ? "PhD" :
                          section.category === "Research Assistants" ? "RA" :
                          section.category === "Master's Students" ? "MS" :
                          section.category === "Undergraduate Students" ? "UG" : 
                          section.category === "High School Student" ? "HS" : "Alumni"}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-orange-400">{person.name}</h3>
                      <p className="text-orange-300 font-medium mb-3">{person.role}</p>
                      
                      <div className="mb-4">
                        <div className="text-xs text-gray-400 mb-2">Specialization:</div>
                        <div className="text-sm text-blue-300 font-medium">{person.specialization}</div>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{person.bio}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-3">
                          {person.email && (
                            <a
                              href={`mailto:${person.email}`}
                              className="text-gray-400 hover:text-orange-500 transition-colors"
                              title="Email"
                            >
                              <Mail size={18} />
                            </a>
                          )}
                          {linkedInLink && (
                            <a
                              href={linkedInLink.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-orange-500 transition-colors"
                              title={linkedInLink.title}
                            >
                              <Linkedin size={18} />
                            </a>
                          )}
                        </div>
                        {person.email && (
                          <div className="text-xs text-gray-500">
                            {person.email.split('@')[0]}
                          </div>
                        )}
                      </div>
                      
                      {person.links && person.links.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-700">
                          <div className="text-xs text-gray-400 mb-2">Links:</div>
                          <div className="flex flex-wrap gap-2">
                            {person.links.map((link, linkIndex) => (
                              <a 
                                key={linkIndex}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded transition-colors"
                              >
                                {link.title}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}

        {/* Join Our Team Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg p-8 text-center border border-orange-500/20">
            <h3 className="text-3xl font-bold mb-4 text-orange-500">Join Our Team</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate researchers at all levels to join our mission of understanding brain connectivity. 
              From high school students to postdocs, there's a place for you in our lab.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-orange-500 hover:bg-orange-600 transition-colors px-6 py-3 rounded-lg font-semibold"
              >
                Contact Us
              </a>
              <a 
                href="#" 
                className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors px-6 py-3 rounded-lg font-semibold"
              >
                View Opportunities
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;