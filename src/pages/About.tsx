
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              About AIROTIX Technologies
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12"
              >
                We're a technology company that focuses on building computer vision-powered solutions that help industries automate tasks that normally require human eyes. In simple words, we teach machines to see, understand, and make decisions from visual data.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-gray-600">
                    At AIROTIX, our mission is to bridge the gap between AI research and real-world business problems. 
                    We combine the latest advancements (YOLOv8, TensorFlow, PyTorch, OpenCV) with practical industry experience.
                  </p>
                  <p className="text-gray-600">
                    Our goal is to reduce inefficiencies, cut down human workload, and improve decision-making through 
                    computer vision and intelligent software solutions.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Real-Time Detection:</strong> Instant defect detection in textiles, manufacturing, and packaging industries.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Quality Control:</strong> AI-powered systems that ensure consistent product quality and reduce human error.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Industrial Automation:</strong> Vision AI integrated into machinery for faster, safer, and more accurate operations.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Security Analytics:</strong> Intelligent monitoring for unusual behavior detection and real-time analysis.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <p className="text-gray-600 mb-4">
                    AIROTIX was founded with the vision to make computer vision accessible to industries that need it most. 
                    We specialize in real-time defect detection, AI-powered quality control, industrial automation with vision AI, 
                    and surveillance & security analytics.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Beyond our core computer vision expertise, we also provide supporting services including web & mobile app development, 
                    AI & automation consulting, and custom enterprise software solutions to meet broader business needs.
                  </p>
                  <p className="text-gray-600">
                    Our solutions analyze products on moving production lines, detect defects like scratches, misprints, holes, or misalignments, 
                    and provide intelligent monitoring that can detect unusual behavior, count people, track objects, or analyze patterns in real-time.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Team</h2>
                <p className="text-gray-600 mb-8">
                  Our diverse team combines expertise in computer vision, machine learning, software engineering, 
                  AI development, and industry-specific knowledge to deliver comprehensive automation solutions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Dr. Sarah Chen",
                      role: "CEO and Founder",
                      bio: "Leading AIROTIX with expertise in computer vision and a passion for solving industrial challenges.",
                      image: "/lovable-uploads/aa5291bd-2417-4c1e-9a02-0bcc71a92507.png"
                    },
                    {
                      name: "Alex Rodriguez",
                      role: "AI/ML Engineer",
                      bio: "Developing cutting-edge machine learning models for real-time defect detection and automation.",
                      image: "/lovable-uploads/e502f601-c519-43a8-86f5-5fa89ae50d2f.png"
                    },
                    {
                      name: "Michael Zhang",
                      role: "Computer Vision Lead",
                      bio: "Expert in computer vision algorithms, leading our technical development and innovation efforts.",
                      image: "/lovable-uploads/3de85ddd-15e1-4216-9697-f91abb9a47ce.png"
                    },
                    {
                      name: "Lisa Kumar",
                      role: "Operations Director",
                      bio: "Ensuring smooth project delivery and client success across all AIROTIX implementations.",
                      image: "/lovable-uploads/a9bb9110-964a-43b0-a5ab-7162140cd133.png"
                    }
                  ].map((member, i) => (
                    <Card key={i} className="bg-gray-50 border border-gray-100 overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden">
                            <img 
                              src={member.image} 
                              alt={member.name} 
                              className="w-full h-full object-cover filter grayscale" 
                            />
                          </div>
                          <h3 className="font-bold text-lg">{member.name}</h3>
                          <p className="text-gray-500 text-sm mb-2">{member.role}</p>
                          <p className="text-gray-600 text-sm">{member.bio}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/careers" className="inline-flex items-center px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group">
                Join Our Team
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
