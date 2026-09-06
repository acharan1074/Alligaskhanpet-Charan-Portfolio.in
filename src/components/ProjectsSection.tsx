import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  githubUrl: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Shreshtha Daily Mart',
    category: 'MULTI-MODULE E-COMMERCE PLATFORM',
    description:
      'Multi-vendor e-commerce platform supporting modules for Grocery, Food, Milk & Dairy, Pharmacy, Shop, and Parcel delivery services. Designed responsive UI, product/category presentation, and scalable application workflows for local commerce.',
    githubUrl: 'https://github.com/acharan1074',
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'REST APIs', 'E-Commerce'],
    metrics: [
      { label: 'SERVICES', value: 'Grocery, Food, Parcel' },
      { label: 'ARCHITECTURE', value: 'Multi-Vendor & Module' },
      { label: 'SCALE', value: 'Local Commerce Platform' },
    ],
  },
  {
    number: '02',
    title: 'Online Gatepass Management System',
    category: 'FULL-STACK WEB APPLICATION',
    description:
      'Multi-panel hostel gatepass platform with dedicated portals for Students, Wardens, Security, Admins, and Super Admins. Features outing request workflows, parent approval mechanisms, QR-based security verification, and return tracking.',
    githubUrl: 'https://github.com/acharan1074',
    tech: ['React.js', 'Django', 'PostgreSQL', 'REST APIs', 'Role-Based Access', 'Security'],
    metrics: [
      { label: 'PANELS', value: '5 Role-Based Portals' },
      { label: 'SECURITY', value: 'QR Verification' },
      { label: 'WORKFLOW', value: 'Approval & Outing Tracking' },
    ],
  },
  {
    number: '03',
    title: 'Crown N Bloom Website',
    category: 'PROFESSIONAL BUSINESS WEBSITE',
    description:
      'Professional corporate business website designed and developed with a responsive, modern user interface. Features reusable UI components, clear service/business sections, intuitive navigation, and high-performance branding.',
    githubUrl: 'https://github.com/acharan1074',
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'UI/UX'],
    metrics: [
      { label: 'TYPE', value: 'Corporate Website' },
      { label: 'UI/UX', value: 'Responsive & Modern' },
      { label: 'FOCUS', value: 'High Performance & SEO' },
    ],
  },
  {
    number: '04',
    title: 'VGiga FiberNet Website',
    category: 'ISP & BROADBAND PORTAL',
    description:
      'Professional ISP and business website developed for a fiber internet service provider. Created responsive pages to present high-speed internet plans, broadband services, and company information with an easy-to-navigate interface.',
    githubUrl: 'https://github.com/acharan1074',
    tech: ['React.js', 'JavaScript', 'CSS3', 'Tailwind CSS', 'Responsive Layout'],
    metrics: [
      { label: 'INDUSTRY', value: 'Fiber Internet Service' },
      { label: 'OFFERINGS', value: 'Broadband Plans Catalog' },
      { label: 'EXPERIENCE', value: 'Mobile & Desktop First' },
    ],
  },
  {
    number: '05',
    title: 'Hospital Management Website',
    category: 'HEALTHCARE MANAGEMENT SYSTEM',
    description:
      'Web-based healthcare solution designed to organize hospital-related information, patient records, doctor scheduling, department directories, and administrative activities into a centralized, easy-to-use digital system.',
    githubUrl: 'https://github.com/acharan1074',
    tech: ['React.js', 'Node.js', 'MySQL / PostgreSQL', 'REST APIs', 'Tailwind CSS'],
    metrics: [
      { label: 'DOMAIN', value: 'Healthcare Management' },
      { label: 'MODULES', value: 'Patients & Scheduling' },
      { label: 'RELIABILITY', value: 'Secure Data Handling' },
    ],
  },
  {
    number: '06',
    title: 'Face Recognition Attendance System',
    category: 'AI & COMPUTER VISION SYSTEM',
    description:
      'Real-time automated attendance tracking system using computer vision. Developed face-recognition functionality using Python and OpenCV with live face detection, feature extraction, and automated log recording.',
    githubUrl: 'https://github.com/acharan1074',
    tech: ['Python', 'OpenCV', 'Face Detection', 'Computer Vision', 'NumPy'],
    metrics: [
      { label: 'VISION ENGINE', value: 'OpenCV Real-Time' },
      { label: 'DETECTION', value: 'Live Face Recognition' },
      { label: 'APPLICATION', value: 'Automated Attendance' },
    ],
  },
  {
    number: '07',
    title: 'Handwritten Digit Recognition',
    category: 'MACHINE LEARNING / CLASSIFICATION',
    description:
      'Machine learning project to classify handwritten digit images from pixel data. Built an SVM-based classification model using Python and scikit-learn, with comprehensive image preprocessing and accuracy evaluation metrics.',
    githubUrl: 'https://github.com/acharan1074',
    tech: ['Python', 'scikit-learn', 'SVM', 'Image Processing', 'NumPy'],
    metrics: [
      { label: 'ALGORITHM', value: 'Support Vector Machine' },
      { label: 'FRAMEWORK', value: 'scikit-learn' },
      { label: 'EVALUATION', value: 'High Accuracy Score' },
    ],
  },
  {
    number: '08',
    title: 'Loan Approval Prediction',
    category: 'MACHINE LEARNING / PREDICTIVE MODELING',
    description:
      'Predictive machine learning model for loan approval assessment based on applicant financial attributes. Implemented a Logistic Regression model with structured data cleaning, feature preprocessing, and risk scoring.',
    githubUrl: 'https://github.com/acharan1074',
    tech: ['Python', 'scikit-learn', 'Logistic Regression', 'Data Analysis', 'Feature Prep'],
    metrics: [
      { label: 'MODEL', value: 'Logistic Regression' },
      { label: 'PIPELINE', value: 'Data Prep & Modeling' },
      { label: 'OBJECTIVE', value: 'Credit Risk Prediction' },
    ],
  },
  {
    number: '09',
    title: 'Weather Application',
    category: 'LIVE API & DYNAMIC WEB APPLICATION',
    description:
      'Interactive real-time weather forecasting application with live meteorological API integration, location search, temperature conversions, atmospheric risk metrics, and responsive mobile-first UI.',
    githubUrl: 'https://github.com/acharan1074',
    tech: ['JavaScript', 'React.js', 'Weather API', 'CSS3 / Tailwind', 'REST APIs'],
    metrics: [
      { label: 'DATA SOURCE', value: 'Live Weather API' },
      { label: 'FEATURES', value: 'Global Location Search' },
      { label: 'RESPONSIVENESS', value: 'Mobile & Desktop' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to unfold the system architecture cards. Each platform was built to solve complex operational challenges.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        {/* React Bits Stacking Deck */}
<ScrollStack
  itemDistance={20}
  itemScale={0.035}
  itemStackDistance={28}
  stackPosition="15%"
  scaleEndPosition="6%"
  baseScale={0.88}
  useWindowScroll={true}
>
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                        // ARCHITECTURE METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#A8988B]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>VIEW ON GITHUB</span>
                      <span className="text-xs">↗</span>
                    </a>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;
