import { ArrowRight, Code, Cpu, Layers, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const isMobile = useIsMobile();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <motion.div className="relative w-full" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container bg-black relative overflow-hidden h-[50vh] sm:h-[60vh] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full">
        <div className="absolute inset-0 bg-black w-full">
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-white"></div> */}
        </div>
        
        <div className="banner-overlay bg-transparent pt-20 sm:pt-24 md:pt-32 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
              {/* Left Column - Text Content */}
              <motion.div className="text-center lg:text-left" variants={itemVariants}>
                <motion.h1 className="banner-title text-white" variants={itemVariants}>Intelligent Systems That See, Understand, and Act</motion.h1>
                <motion.p className="banner-subtitle text-gray-300 mt-4 sm:mt-6" variants={itemVariants}>
                  AIROTIX builds intelligent systems that can see, understand, and act. We specialize in computer vision for industrial and commercial use, AI process automations, and custom app development to turn cameras, data, and workflows into measurable business outcomes.
                </motion.p>
                <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start items-center" variants={itemVariants}>
                {/* Styled as a button but using an anchor tag for project navigation */}
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={e => {
                    e.preventDefault();
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Explore Projects
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                {/* Using the Button component from shadcn but with custom styling to match the explore button */}
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={scrollToContact}
                >
                  Contact Us
                  <MessageSquare className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
              </motion.div>
              
              {/* Right Column - Spline Animation */}
              <motion.div className="hidden lg:block h-full" variants={itemVariants}>
                <div className="h-full min-h-[400px] relative overflow-hidden spline-container">
                  <Spline 
                    scene="https://prod.spline.design/vV7NiZMIPomHZZRI/scene.splinecode"
                    className="w-full h-full spline-animation"
                    style={{
                      background: '#000000',
                      backgroundColor: '#000000',
                    }}
                  />
                  
                  <div className="absolute inset-0 pointer-events-none z-10">
                     <style dangerouslySetInnerHTML={{
                       __html: `
                         .spline-container > div:last-child,
                         .spline-container > div > div:last-child,
                         .spline-container canvas + div,
                         .spline-container canvas ~ div,
                         .spline-animation > div:last-child,
                         .spline-animation canvas + div,
                         .spline-animation canvas ~ div {
                           display: none !important;
                           visibility: hidden !important;
                           opacity: 0 !important;
                         }
                       `
                     }} />
                   </div>

                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4" variants={containerVariants} initial="hidden" animate="visible" transition={{
        delay: 0.6
      }}>
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              <Cpu className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Computer Vision Solutions</h3>
            <p className="text-gray-600 text-xs md:text-sm">Real-time vision systems for defect detection, object tracking, safety analytics, and visual data extraction that work on edge or cloud.</p>
          </motion.div>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              <Code className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">AI Automations for Business</h3>
            <p className="text-gray-600 text-xs md:text-sm">Automate repetitive knowledge work with LLMs and workflow engines for ticket triage, document processing, and ops copilots.</p>
          </motion.div>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              <Layers className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">App & Software Development</h3>
            <p className="text-gray-600 text-xs md:text-sm">Web & mobile apps, real-time dashboards, APIs & backends, and secure deployment solutions that integrate with your AI systems.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
