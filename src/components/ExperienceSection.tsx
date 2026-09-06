// src/components/ExperienceSection.tsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RouteStop {
  id: string;
  year: string;
  tag: string;
  title: string;
  organization: string;
  description: string;
}

const journey: RouteStop[] = [
  {
    id: '01',
    year: 'PRESENT',
    tag: 'WORK EXPERIENCE',
    title: 'TECHNICAL SUPPORT',
    organization: 'SMRU',
    description:
      'Provide technical support for day-to-day computer and software issues. Troubleshoot hardware, software, network, and system problems; assist staff with computer applications, printers, internet connectivity, and technical setups.',
  },
  {
    id: '02',
    year: '2024',
    tag: 'AI & ML INTERNSHIP',
    title: 'AI / ML DEVELOPER INTERN',
    organization: 'DEXTERITY',
    description:
      'Hands-on AI and Machine Learning internship at Dexterity focusing on data preparation, training predictive algorithms, computer vision pipelines, and deploying intelligent machine learning solutions.',
  },
  {
    id: '03',
    year: '2023 - 2024',
    tag: 'WEB DEV INTERNSHIP',
    title: 'WEB DEVELOPMENT INTERN',
    organization: 'SKILL VERTEX',
    description:
      'Completed Web Development internship at Skill Vertex, designing and developing responsive web applications, modern UI components, and integrating frontend with backend REST services.',
  },
  {
    id: '04',
    year: '2023 - 2024',
    tag: 'TRAINING & CERTIFICATION',
    title: 'NXT WAVE & DIGITAL MARKETING',
    organization: 'PROFESSIONAL CERTIFICATIONS',
    description:
      'Completed specialized full-stack tech training and certification through NXT WAVE, alongside a professional Digital Marketing Certification.',
  },
  {
    id: '05',
    year: '2022 - 2026',
    tag: 'B.TECH (75%)',
    title: 'B.TECH — CSE (AI & ML)',
    organization: "ST. MARY'S GROUP OF INSTITUTIONS (AFFILIATED TO JNTUH)",
    description:
      'B.Tech in Computer Science & Engineering specializing in Artificial Intelligence & Machine Learning with a 75% aggregate. Affiliated to JNTU Hyderabad.',
  },
  {
    id: '06',
    year: '2020 - 2022',
    tag: 'INTERMEDIATE (62%)',
    title: 'INTERMEDIATE — 62%',
    organization: 'USHODAYA JUNIOR COLLEGE',
    description:
      'Completed Intermediate education with 62%, building strong analytical foundations in Mathematics, Physics, and Chemistry.',
  },
  {
    id: '07',
    year: '2019 - 2020',
    tag: 'SSC (95%)',
    title: 'SSC — 95%',
    organization: 'TS MODEL SCHOOL & JUNIOR COLLEGE',
    description:
      'Completed Secondary School Certificate (SSC) with distinction (95%), demonstrating academic discipline and consistency.',
  },
];

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-4 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D4AF37]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            04 / CAREER &amp; EDUCATION
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              EXPERIENCE &amp;
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              MILESTONES.
            </span>
          </h2>
        </motion.div>

        {/* Minimalist Route Map */}
        <div className="relative w-full">
          
          {/* Background Track */}
          <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-[#8C6D4F]/20" />
          
          {/* Animated Gold Track */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#C99E5D] to-[#8C6D4F]/10 shadow-[0_0_10px_#D4AF37] origin-top"
          />

          <div className="space-y-12">
            {journey.map((stop, idx) => (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Desktop Year (Left side of track) */}
                <div className="hidden md:block w-[140px] shrink-0 pr-8 pt-0.5 text-right">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors">
                    {stop.year}
                  </span>
                </div>

                {/* Route Node */}
                <div className="absolute left-[19px] md:left-[140px] top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className="absolute w-6 h-6 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 group-hover:scale-150 transition-all duration-700 ease-out" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#120F0C] border border-[#8C6D4F] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_12px_#D4AF37] transition-colors duration-300" />
                </div>

                {/* Content (Right side of track) */}
                <div className="ml-14 md:ml-12 pl-2">
                  {/* Mobile Year & Tag */}
                  <div className="flex items-center space-x-2 mb-1.5">
                    <span className="md:hidden text-[10px] font-mono tracking-[0.2em] text-[#D4AF37]">
                      {stop.year}
                    </span>
                    <span className="text-[9px] font-mono tracking-[0.2em] uppercase px-2 py-0.5 border border-[#8C6D4F]/30 bg-[#14100D] text-[#D4AF37] rounded-sm">
                      {stop.tag}
                    </span>
                  </div>

                  <h3
                    className="text-3xl sm:text-4xl tracking-wide text-white group-hover:text-[#F7E7C4] transition-colors mb-1 leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {stop.title}
                  </h3>
                  
                  <span 
                    className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#8C6D4F] mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.organization}
                  </span>
                  
                  <p 
                    className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-[1.7] max-w-lg group-hover:text-[#D5CBC0] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
