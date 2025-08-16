import { useState, useEffect, useRef  } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DiJava, DiPython, DiDocker, DiPostgresql } from 'react-icons/di';
import { SiC, SiCplusplus, SiKubernetes, SiSpringboot, SiFlutter, SiMysql } from 'react-icons/si';
import { Server, Pointer, Cloud, Brain, Shield, Mail, Github, X, Menu, Linkedin, User, Briefcase, FolderOpen, MessageSquare,FileText, Send, ExternalLink} from 'lucide-react';
import sedai from './assets/logos/sedai.svg';
import cdit from './assets/logos/cdit.jpeg';

function App() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isClickScrolling = useRef(false);

   const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const mobileMenuContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 } // Delay between each item appearing
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 } // Reverse stagger on exit
    }
  };

  const mobileMenuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const aboutRightColumnVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.4 }
    }
  };

  const skillsGridVariants = {
    hidden: { },
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const skillIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) {
        return;
      }

      const sections = ['about', 'experience', 'projects', 'contact'];
      // This offset should be roughly your navbar's height + a small buffer
      const scrollOffset = 150;
      const scrollPosition = window.scrollY + scrollOffset;

      // Check if we are above the 'about' section
      const aboutSection = document.getElementById('about');
      if (aboutSection && scrollPosition < aboutSection.offsetTop) {
        setActiveSection(''); // No section is active in the Hero area
        return;
      }

      // If we've scrolled past the top, find the current active section
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
      description: 'Developed a deep learning system for handwritten Malayalam text recognition from PDFs.',
      logo: cdit
    },
  ];

  const projects = [
    {
      title: 'Antartma',
      description: 'Developed an empathetic mental health chatbot offering AI-driven conversations, personalized self-care, and crisis detection with a soft, responsive UI.',
      tech: ['Python', 'Streamlit', 'Google Gemini', 'TextBlob/NLTK', 'JSON']
},
    {
      title: 'SIC Emulation Framework',
      description: 'Built a full SIC emulator with RAM, Control Unit, control signals, loader, and two-pass assembler for instruction execution and debugging.',
      tech: ['C++', 'Bash', 'gtest', 'gdb', 'Make']
    }
,{
      title: 'SafeWatch',
      description: 'Built a safety and alert application with features like donations, rescue team tracking, and real-time notifications from authorities using an SQLite backend.',
      tech: ['Flutter', 'SQLite']
    },
    {
      title: 'EnviroBin Network',
      description: 'Developed a waste management system enabling citizens to book garbage collection slots, make payments, and access FAQs through a user-friendly Java Swing interface.',
      tech: ['Java', 'Swing', 'MySQL']
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
          <button 
            onClick={scrollToTop} 
            className="text-2xl font-bold text-white ml-4 md:ml-10 cursor-pointer"
          >
            Devanand M S
          </button>

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
        <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-gray-900/95 pb-4"
            variants={mobileMenuContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col items-center space-y-4">
              {[
                { id: 'about', label: 'About', icon: User },
                { id: 'experience', label: 'Experience', icon: Briefcase },
                { id: 'projects', label: 'Projects', icon: FolderOpen },
                { id: 'contact', label: 'Contact', icon: MessageSquare }
              ].map(({ id, label, icon: Icon }) => (
                // Change button to motion.button and apply item variants
                <motion.button
                  key={id}
                  variants={mobileMenuItemVariants}
                  onClick={() => {
                    scrollToSection(id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-1/2 flex justify-center items-center space-x-2 px-3 py-3 rounded-md transition-all duration-200 ${
                    activeSection === id
                      ? 'text-blue-400 bg-blue-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Icon size={22} />
                  <span>{label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>

      <main className="overflow-x-hidden">

        {/* Hero Section */}
        <section className="relative flex items-center justify-center bg-gradient-to-br from-gray-950 via-blue-950/30 to-purple-900/20 overflow-hidden">
          {/* Background elements (unchanged) */}
          <div className="absolute top-1/4 -left-40 w-[28rem] h-[28rem] bg-blue-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/5 to-black/40"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-[0.04]"></div>

          {/* === Main Content === */}
          <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center px-4 sm:px-6 lg:px-8 py-[15rem]">
            
            {/* Left Image with animation */}
            <motion.div 
              className="flex justify-center md:justify-end"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }} // Changed to whileInView
              viewport={{ once: false }} // This makes the animation repeat
              transition={{ duration: 0.8 }}
            >
              <img
                src="Devanand.jpg"
                alt="Profile"
                className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full object-contain p-2 animate-float"
                style={{ backgroundColor: '#189ad8' }}
              />
            </motion.div>

            {/* Right Text with STAGGERED animation */}
            <motion.div 
              className="space-y-6 text-center md:text-left"
              initial="hidden"
              whileInView="visible" // Changed to whileInView
              viewport={{ once: false, amount: 0.2 }} // Repeats animation and triggers it earlier
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-7xl font-bold text-white"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                Hi, I'm <span className="text-blue-400">Devanand M S</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-2xl text-gray-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                Software Developer passionate about AI, Machine Learning, Cybersecurity & Cloud Technologies
              </motion.p>

              {/* === CTA Buttons (Restored) === */}
              <motion.div 
                className="flex justify-center md:justify-start space-x-4 pt-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <a
                  href="https://drive.google.com/file/d/1SuY0wGzCOhG6sdJTtFsY6nyU9Nl5yT2G/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <FileText size={20} />
                  <span>My Resume</span>
                </a>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Send size={20} />
                  <span>Contact Me</span>
                </button>
              </motion.div>

              {/* === Social Links (Restored) === */}
              <motion.div 
                className="flex justify-center md:justify-start space-x-4 pt-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <a href="https://github.com/dms2004" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200">
                  <Github size={30} />
                </a>
                <a href="https://www.linkedin.com/in/devanand-m-s-40a656258/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200">
                  <Linkedin size={30} />
                </a>
                <a href="mailto:devanandms2004@gmail.com" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200">
                  <Mail size={30} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* About Section */}
        <motion.section 
          id="about" 
          className="py-32 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              About <span className="text-blue-400">Me</span>
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-24 items-start">
              
              {/* === CHILD 1: The Left Column (with all content restored) === */}
              <motion.div 
                className="space-y-10"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-center md:text-center mb-6">
                  Who am I ?
                </h2>
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="flex items-start space-x-6 p-6 bg-gray-800 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-gray-700">
                    <div>
                      <area.icon className="w-8 h-8 text-blue-400 mt-1" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{area.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
              
              {/* === CHILD 2: The Right Column (with corrected animation) === */}
              <motion.div 
                className="space-y-10"
                variants={aboutRightColumnVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              > 
                <h2 className="text-2xl font-bold text-center md:text-center mb-6">
                  My Skills
                </h2>
                <motion.div 
                  className="grid grid-cols-4 gap-6 text-center"
                  variants={skillsGridVariants}
                >
                  {techSkills.map((skill, index) => (
                    <motion.div 
                      key={index} 
                      className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl
                                transition-all duration-300 group"
                      variants={skillIconVariants}
                      whileHover={{ y: -5, backgroundColor: "#374151" }} // hover:bg-gray-700
                    >
                      <skill.icon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 group-hover:text-gray-400 transition-colors" />
                      <span className="mt-3 text-xs sm:text-sm font-semibold text-white">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          id="experience" 
          className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              Professional <span className="text-blue-400">Experience</span>
            </motion.h2>
            
            <motion.div 
              className="space-y-8"
              variants={{
                visible: { transition: { staggerChildren: 0.3 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-6 p-8 bg-gray-800 rounded-xl
                            transition-colors duration-300"
                  // --- Animation changed here ---
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 }, // Changed from y: 50 to scale: 0.8
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } // Changed from y: 0 to scale: 1
                  }}
                  // --- Hover effect changed here ---
                  whileHover={{ scale: 1.05, backgroundColor: "#374151" }} // Changed from y: -8 to scale: 1.05
                >
                  {/* Logo on the left */}
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
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects" 
          className="py-32 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              Featured <span className="text-blue-400">Projects</span>
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              {projects.map((project, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-800 p-8 rounded-xl transition-colors duration-200" // Removed conflicting hover classes
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 }, // Starts scaled down
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } // Scales up to full size
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: "#374151" }} // Preserves hover effect (gray-700)
                >
                  <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 text-justify">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact" 
          className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-800/50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          transition={{ staggerChildren: 0.2 }} // This will help sequence the elements
        >
          <div className="max-w-6xl mx-auto text-center relative">
            {/* Wrapper for your content */}
            <div className="relative z-10">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-16"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                Get In <span className="text-blue-400">Touch</span>
              </motion.h2>
              
              <div className="max-w-2xl mx-auto">
                <motion.p 
                  className="text-lg text-gray-300 mb-12"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  I'm always interested in new opportunities and exciting projects. 
                  Let's connect and discuss how we can work together.
                </motion.p>
                
                {/* Your Resume Button */}
                <motion.div 
                  className="mb-12"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <a 
                    href="https://drive.google.com/file/d/1SuY0wGzCOhG6sdJTtFsY6nyU9Nl5yT2G/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink size={20} />
                    <span>View My Resume</span>
                  </a>
                </motion.div>
                
                {/* Your Contact Cards */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
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
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section> 

      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-gray-800">
        <p className="text-gray-400">
          © 2025 Devanand M S. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;