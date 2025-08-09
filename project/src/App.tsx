import { useState, useEffect, useRef  } from 'react';
import { DiJava, DiPython, DiDocker, DiPostgresql } from 'react-icons/di';
import { SiC, SiCplusplus, SiKubernetes, SiSpringboot, SiFlutter, SiMysql } from 'react-icons/si';
import { Server, Pointer, Cloud, Brain, Shield, Mail, Github, X, Menu, Linkedin, User, Briefcase, FolderOpen, MessageSquare,} from 'lucide-react';
import sedai from './assets/logos/sedai.svg';
import cdit from './assets/logos/cdit.jpeg';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add this check at the top
      if (isClickScrolling.current) {
        return; // Do nothing if a click-scroll is in progress
      }

      const sections = ['about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150; 

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    isClickScrolling.current = true; // Set the flag to true
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });

    // After 1 second, set the flag back to false
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000); 
  };

  const techSkills = [
    { name: 'C', icon: SiC },
    { name: 'C++', icon: SiCplusplus },
    { name: 'Java', icon: DiJava },
    { name: 'Python', icon: DiPython },
    { name: 'Spring Boot', icon: SiSpringboot },
    { name: 'Flutter', icon: SiFlutter },
    { name: 'Docker', icon: DiDocker },
    { name: 'Kubernetes', icon: SiKubernetes },
    { name: 'SQL', icon: SiMysql },
    { name: 'PostgreSQL', icon: DiPostgresql },
    { name: 'AI/ML', icon: Brain },
    { name: 'Cybersecurity', icon: Shield },
  ];

  const expertiseAreas = [
    {
      icon: Server,
      title: 'Backend Developer',
      description: 'Experienced in building fast, optimized servers and APIs.'
    },
    {
      icon: Pointer,
      title: 'Machine Learning Developer',
      description: 'Skilled to build deep learning and computer vision models.'
    },
    {
      icon: Cloud,
      title: 'Cloud Engineer',
      description: 'Deployed and managed apps on cloud platforms like AWS.'
    }
  ];

  const experiences = [
    {
      role: 'Research and Development Intern',
      company: 'Sedai',
      duration: 'June 2025 - July 2025',
      description: 'Built an API framework to classify application types from Kubernetes resource specifications.',
      logo: sedai
    },
    {
      role: 'Research and Development Intern',
      company: 'CDIT',
      duration: 'Oct 2024 - Mar 2025',
      description: 'Developed a deep learning system for handwritten Malayalam text recognition from PDFs..',
      logo: cdit
    },
  ];

  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Built a comprehensive analytics platform using machine learning algorithms for predictive insights.',
      tech: ['Python', 'TensorFlow', 'AWS', 'React']
    },
    {
      title: 'Cybersecurity Dashboard',
      description: 'Developed a real-time security monitoring dashboard with threat detection capabilities.',
      tech: ['Node.js', 'MongoDB', 'Socket.io', 'Vue.js']
    },{
      title: 'Cloud Infrastructure Automation',
      description: 'Created automated deployment pipelines and infrastructure management tools for cloud platforms.',
      tech: ['Docker', 'Kubernetes', 'Terraform', 'AWS']
    },
    {
      title: 'ML Model Deployment Pipeline',
      description: 'Designed and implemented a robust MLOps pipeline for model training and deployment.',
      tech: ['MLflow', 'Apache Airflow', 'FastAPI', 'PostgreSQL']
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          <div className="text-2xl font-bold text-white ml-4 md:ml-10">Devanand M S</div>

          {/* Desktop Menu (hidden on mobile) */}
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'about', label: 'About', icon: User },
              { id: 'experience', label: 'Experience', icon: Briefcase },
              { id: 'projects', label: 'Projects', icon: FolderOpen },
              { id: 'contact', label: 'Contact', icon: MessageSquare }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-200 ${
                  activeSection === id
                    ? 'text-blue-400 bg-blue-400/10'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <Icon size={22} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Hamburger Menu Button (visible on mobile) */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 pb-4">
            <div className="flex flex-col items-center space-y-4">
              {[
                { id: 'about', label: 'About', icon: User },
                { id: 'experience', label: 'Experience', icon: Briefcase },
                { id: 'projects', label: 'Projects', icon: FolderOpen },
                { id: 'contact', label: 'Contact', icon: MessageSquare }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    scrollToSection(id);
                    setIsMenuOpen(false); // Close menu on click
                  }}
                  className={`w-1/2 flex justify-center items-center space-x-2 px-3 py-3 rounded-md transition-all duration-200 ${
                    activeSection === id
                      ? 'text-blue-400 bg-blue-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Icon size={22} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center px-4 sm:px-6 lg:px-8 py-[15rem]">
          {/* Left Text Content */}
          <div className="flex justify-center md:justify-end">
            <img
              src="Devanand.jpg"
              alt="Profile"
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full object-contain p-2 animate-float"
              style={{ backgroundColor: '#189ad8' }} // Replace with your hex or rgb
            />
          </div>
          {/* Right Image or DMS Circle */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold text-white">
              Hi, I'm <span className="text-blue-400">Devanand M S</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300">
              Software Developer passionate about AI, Machine Learning, Cybersecurity & Cloud Technologies
            </p>

            {/* === CTA Buttons === */}
            <div className="flex justify-center md:justify-start space-x-4 pt-2">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                My Projects
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </button>
            </div>
            
            <div className="flex justify-center md:justify-start space-x-4 pt-4">
              <a href="https://github.com/dms2004" target="_blank" rel="noopener noreferrer" 
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200">
                <Github size={30} />
              </a>
              <a href="https://www.linkedin.com/in/devanand-m-s-40a656258/" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200">
                <Linkedin size={30} />
              </a>
              <a href="mailto:devanandms2004@gmail.com"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200">
                <Mail size={30} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            About <span className="text-blue-400">Me</span>
          </h2>
          
          {/* This is the main 2-column grid container. It should have only TWO direct children. */}
          <div className="grid md:grid-cols-2 gap-24 items-start">
            
            {/* === CHILD 1: The Left Column === */}
            <div className="space-y-10"> {/* Increased vertical spacing */}
              <h2 className="text-2xl font-bold text-center md:text-center mb-6">
                Who am I ?
              </h2>
              
              {/* We now map over the expertiseAreas array instead of using <p> tags */}
              {expertiseAreas.map((area, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 bg-gray-800 rounded-xl
                       transition-all duration-300 transform hover:-translate-y-2 hover:bg-gray-700"
                >
                  <div>
                    <area.icon className="w-8 h-8 text-blue-400 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{area.title}</h3>  
                    <p className="text-gray-300 leading-relaxed">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* === CHILD 2: The Right Column (wrapper for heading and icons) === */}
            <div className="space-y-10"> 
              <h2 className="text-2xl font-bold text-center md:text-center mb-6">
                My Skills
              </h2>
              
              <div className="grid grid-cols-4 gap-6 text-center">
                {techSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl
                              transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <skill.icon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 group-hover:text-gray-400 transition-colors" />
                    <span className="mt-3 text-xs sm:text-sm font-semibold text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div> {/* The 2-column grid container closes here */}
        </div>
      </section>

      {/* Experience Section */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Professional <span className="text-blue-400">Experience</span>
            </h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-6 p-8 bg-gray-800 rounded-xl
                            transition-all duration-300 transform hover:-translate-y-2 hover:bg-gray-700"
                >
                  {/* Logo on the left (Updated to use <img> tag) */}
                  <div className="w-12 h-12 flex-shrink-0">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      className="w-full h-full object-contain" 
                    />
                  </div>

                  {/* Text content on the right */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.duration}</span>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-200 hover:transform hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 mb-12">
              I'm always interested in new opportunities and exciting projects. 
              Let's connect and discuss how we can work together.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <a href="mailto:devanandms2004@gmail.com" 
                 className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors duration-200 group">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="font-semibold text-white mb-2">Email</h3>
              </a>
              
              <a href="https://github.com/dms2004" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors duration-200 group">
                <Github className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="font-semibold text-white mb-2">GitHub</h3>
              </a>
              
              <a href="https://www.linkedin.com/in/devanand-m-s-40a656258/" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors duration-200 group">
                <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-800">
        <p className="text-gray-400">
          © 2025 Devanand M S. Built with passion and modern web technologies.
        </p>
      </footer>
    </div>
  );
}

export default App;