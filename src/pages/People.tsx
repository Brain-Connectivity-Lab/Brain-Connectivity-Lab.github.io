import React from 'react';
import { Star, Award, BookOpen, GraduationCap, Users, Zap, Mail, Linkedin, Link as LinkIcon, Globe, Building } from 'lucide-react';

const GoogleScholarIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#4285F4"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.0468 9.38992C10.7487 9.38992 9.53721 10.3703 9.53721 11.9168C9.53721 13.4357 10.7766 14.4162 12.0747 14.4162C13.3727 14.4162 14.5842 13.4357 14.5842 11.9168C14.5842 10.3703 13.3448 9.38992 12.0468 9.38992ZM12.0628 13.7845C11.1963 13.7845 10.4697 13.0298 10.4697 11.9168C10.4697 10.8322 11.2243 10.0215 12.0628 10.0215C12.9292 10.0215 13.6559 10.8039 13.6559 11.9168C13.6559 13.0016 12.9013 13.7845 12.0628 13.7845Z" fill="white"/>
    <path d="M5.293 8.35122L12.0465 5L18.8 8.35122L12.0465 11.7024L5.293 8.35122Z" fill="white"/>
    <rect x="17.6836" y="9.46826" width="0.837313" height="4.46566" fill="white"/>
    <path d="M17.2651 14.4849C17.2651 15.1783 17.8272 15.7405 18.5206 15.7405C19.2141 15.7405 19.7762 15.1783 19.7762 14.4849C19.7762 13.7914 19.2141 13.2293 18.5206 13.2293C17.8272 13.2293 17.2651 13.7914 17.2651 14.4849Z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.0469 15.2818C13.666 15.2818 15.3966 14.6391 16.5134 13.2982L15.9038 12.8306C14.9961 13.9161 13.5678 14.4442 12.0469 14.4442C10.5259 14.4442 9.09765 13.9161 8.19 12.8306L7.58032 13.2982C8.69711 14.6391 10.4277 15.2818 12.0469 15.2818Z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.0469 19.4678C13.8824 19.4678 15.4214 18.5306 16.3268 17.1519C16.5057 16.8797 16.634 16.5779 16.6336 16.2625C16.6336 15.466 16.4897 14.7303 16.223 14.0759L15.4851 14.3736C15.7276 14.9686 15.8584 15.6373 15.8584 16.2625C15.8584 16.3113 15.8361 16.4039 15.6961 16.617C14.8967 17.835 13.5358 18.6657 12.0469 18.6657C10.558 18.6657 9.19702 17.835 8.39757 16.617C8.25759 16.4039 8.23533 16.3113 8.23533 16.2625C8.23533 15.6373 8.36608 14.9686 8.60855 14.3736L7.87063 14.0759C7.60395 14.7303 7.46001 15.466 7.46001 16.2625C7.45963 16.5779 7.58797 16.8797 7.76692 17.1519C8.67233 18.5306 10.2113 19.4678 12.0469 19.4678Z" fill="white"/>
  </svg>
);

const BoyAvatar = () => (
  <div className="w-full h-full bg-slate-800 border-[3px] border-blue-500/50 flex flex-col items-center justify-center text-blue-400">
    <svg viewBox="0 0 64 64" fill="currentColor" className="w-1/2 h-1/2 opacity-70">
      <circle cx="32" cy="20" r="12" />
      <path d="M32 36c-11.1 0-20 8.9-20 20h40c0-11.1-8.9-20-20-20z" />
    </svg>
  </div>
);

const GirlAvatar = () => (
  <div className="w-full h-full bg-slate-800 border-[3px] border-pink-500/50 flex flex-col items-center justify-center text-pink-400">
    <svg viewBox="0 0 64 64" fill="currentColor" className="w-1/2 h-1/2 opacity-70">
      <path d="M32 4C20 4 15 12 15 22v10c0 2.2 3 2.2 3 0V20c0-6 4-12 14-12s14 6 14 12v12c0 2.2 3 2.2 3 0V22C49 12 44 4 32 4z" />
      <circle cx="32" cy="24" r="10" />
      <path d="M32 38c-11.1 0-20 8.9-20 20h40c0-11.1-8.9-20-20-20z" />
    </svg>
  </div>
);

interface Member {
  name: string;
  role: string;
  bio: string;
  email?: string;
  image?: string;
  gender?: 'male' | 'female';
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
  const renderLinks = (person: Member) => {
    const allLinks: { title: string; url: string; type: string }[] = [];

    if (person.email) {
      allLinks.push({ title: "Email", url: `mailto:${person.email}`, type: "email" });
    }

    if (person.links) {
      allLinks.push(...person.links.map((link) => ({ ...link, type: link.title.toLowerCase() })));
    }

    if (allLinks.length === 0) {
      return null;
    }

    return (
      <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-gray-700">
        {allLinks.map((link, linkIndex) => {
          let Icon: any = LinkIcon;
          let iconClass = "text-gray-400";
          let buttonClass = "bg-gray-700 hover:bg-gray-600 border border-gray-600";

          if (link.type === "email") {
            Icon = Mail;
            iconClass = "text-orange-400";
          } else if (link.type.includes("linkedin")) {
            Icon = Linkedin;
            iconClass = "text-blue-400";
            buttonClass = "bg-[#0A66C2]/20 hover:bg-[#0A66C2]/30 border border-[#0A66C2]/40";
          } else if (link.type.includes("scholar")) {
            Icon = GoogleScholarIcon;
            buttonClass = "bg-[#4285F4]/10 hover:bg-[#4285F4]/20 border border-[#4285F4]/30";
          } else if (link.type.includes("portfolio") || link.type.includes("website") || link.type.includes("page")) {
            Icon = Globe;
            iconClass = "text-green-400";
          } else if (link.type.includes("njit") || link.type.includes("profile")) {
            Icon = Building;
            iconClass = "text-red-400";
          }

          return (
            <a
              key={linkIndex}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 text-sm text-gray-200 px-3 py-2 rounded-lg transition-colors ${buttonClass}`}
              title={link.title}
            >
              <Icon size={16} className={iconClass} />
              <span className="font-medium">{link.title}</span>
            </a>
          );
        })}
      </div>
    );
  };

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
          image: "/brain-connectivity-lab/images/biswal.png",
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
          image: "/brain-connectivity-lab/images/xindi.png",
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
          image: "/brain-connectivity-lab/images/sukesh.png",
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
          image: "/brain-connectivity-lab/images/priyanka.png",
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
          email: "lg282@njit.edu",
          image: "/brain-connectivity-lab/images/legao.png",
          specialization: "Aging, Multimodal Imaging"
        },
        {
          name: "Pratik Jain",
          role: "PhD Student",
          bio: "Pratik studies functional connectivity patterns in neurodevelopmental disorders using advanced fMRI analysis techniques.",
          email: "pj44@njit.edu",
          image: "/brain-connectivity-lab/images/pratik.png",
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
          image: "/brain-connectivity-lab/images/kartikeya.png",
          specialization: "DTI, Structure-Function Relationships",
          links: [
            { title: "LinkedIn", url: "https://linkedin.com/in/kulkarni-kartikeya-4853691b8" }
          ]
        }
      ]
    },
    {
      category: "Undergraduate Students",
      icon: Zap,
      color: "from-indigo-500 to-blue-500",
      members: [

      ]
    },
    {
      category: "Research Assistants",
      icon: Users,
      color: "from-teal-500 to-cyan-500",
      members: [
        {
          name: "Pranav Kowadkar",
          role: "Data Analyst",
          bio: "Pranav is developing a chat-based Retrieval-Augmented Generation (RAG) pipeline for interactive analysis of Neurosynth fMRI data. He is also replicating deep learning models to identify gender differences in the functional brain organization of individuals with autism.",
          email: "psk@njit.edu",
          image: "/brain-connectivity-lab/images/pranav.png",
          specialization: "Pipeline Development, Software Tools",
          links: [
            { title: "LinkedIn", url: "https://linkedin.com/in/pkowadkar" },
            { title: "Portfolio", url: "https://www.pkowadkar.com" }
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
          image: "/brain-connectivity-lab/images/rui.png",
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
          image: "/brain-connectivity-lab/images/donna.png",
          specialization: "fNIRS, Neuroimaging Consulting",
          links: [
            { title: "LinkedIn", url: "https://www.linkedin.com/in/donna-chen-1b245a19b/" },
            { title: "Google Scholar", url: "https://scholar.google.com/citations?user=3DTGyZ4AAAAJ&hl=en" }
          ]
        },
        {
          name: "George Hanna",
          role: "Data Analyst",
          bio: "Former lab member, now pursuing M.D. at Cooper Medical School of Rowan University.",
          email: "gbh6@njit.edu",
          image: "/brain-connectivity-lab/images/george.png",
          specialization: "fMRI Preprocessing, Quality Control",
          links: [
            { title: "LinkedIn", url: "https://www.linkedin.com/in/george-b-hanna/" },
            { title: "Google Scholar", url: "https://scholar.google.com/citations?user=h5c6DaEAAAAJ&hl=en" }
          ]
        },
        {
          name: "Dev Jariwala",
          role: "Graduate Research Assistant",
          bio: "Dev is working on creating py-WhiFuN : a python based toolbox to map the white matter functional networks of the human brain. He is also developing brain connectivity analysis methods and tools for neuroimaging data visualization.",
          email: "dj332@njit.edu",
          image: "/brain-connectivity-lab/images/dev.png",
          specialization: "Python, Data Visualization, Analysis Methods",
          links: [
            { title: "LinkedIn", url: "https://www.linkedin.com/in/devhjariwala" }
          ]
        },
        {
          name: "Nabin Robin Lee",
          role: "Undergraduate Research Assistant",
          bio: "Nabin's Audio-Visual Cognitive Mapping project involves using machine learning to analyze and classify audio from videos to find correlations between auditory patterns and neural activation in fMRI datasets.",
          email: "nl348@njit.edu",
          gender: "female",
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
          image: "/brain-connectivity-lab/images/sudarshan.png",
          specialization: "White Matter Analysis, AFNI/SPM",
          links: [
            { title: "LinkedIn", url: "https://www.linkedin.com/in/sudarshan-ganapathy-521a11241/" }
          ]
        },
        {
          name: "Nilesh Das",
          role: "Undergraduate Research Assistant",
          bio: "Exploring computational neuroscience and contributing to software development for neuroimaging analysis.",
          email: "nd475@njit.edu",
          gender: "male",
          specialization: "Computational Methods, Software"
        },
        {
          name: "Rebecca Engels",
          role: "Research Assistant",
          bio: "Supporting fNIRS data collection and analysis for cognitive neuroscience studies and brain connectivity research.",
          email: "rengels@njit.edu",
          gender: "female",
          specialization: "fNIRS, Cognitive Studies"
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
            
            {/* Special layout for Principal Investigator and Research Professor */}
            {(section.category === "Principal Investigator" || section.category === "Research Professor") ? (
              <div className="space-y-8">
                {section.members.map((person, personIndex) => {
                  

                  return (
                    <div 
                      key={personIndex} 
                      className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 group"
                    >
                      <div className="flex flex-col lg:flex-row">
                        {/* Photo Section */}
                        <div className="lg:w-80 lg:flex-shrink-0 relative">
                          {person.image ? (
                            <img
                              src={person.image}
                              alt={person.name}
                              className="w-full h-64 lg:h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                              style={{ objectPosition: 'center 80%' }}
                            />
                          ) : person.gender === 'female' ? (
                            <GirlAvatar />
                          ) : (
                            <BoyAvatar />
                          )}
                          <div className={`absolute top-3 right-3 bg-gradient-to-r ${section.color} px-3 py-1 rounded-full`}>
                            <span className="text-white text-xs font-medium">
                              {section.category === "Principal Investigator" ? "PI" : "Prof"}
                            </span>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex-1 p-6 lg:p-8">
                          <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-orange-400">{person.name}</h3>
                          <p className="text-orange-300 font-medium mb-4 text-lg">{person.role}</p>
                          
                          <div className="mb-6">
                            <div className="text-sm text-gray-400 mb-2">Specialization:</div>
                            <div className="text-base text-blue-300 font-medium">{person.specialization}</div>
                          </div>
                          
                          <p className="text-gray-300 text-base mb-6 leading-relaxed">{person.bio}</p>
                          
                          {renderLinks(person)}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              /* Original grid layout for other sections */
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
                  

                  return (
                    <div 
                      key={personIndex} 
                      className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 group"
                    >
                      <div className="relative aspect-square w-full">
                        {person.image ? (
                          <img
                            src={person.image}
                            alt={person.name}
                            className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : person.gender === 'female' ? (
                          <GirlAvatar />
                        ) : (
                          <BoyAvatar />
                        )}
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
                        
                        {renderLinks(person)}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
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