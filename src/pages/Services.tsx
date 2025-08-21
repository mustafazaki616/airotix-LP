import PageLayout from "@/components/PageLayout";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Eye, Shield, Cog, Camera, Zap, Target, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Eye className="w-12 h-12 text-blue-400" />,
      title: "Real-Time Defect Detection",
      description: "Advanced computer vision algorithms that identify manufacturing defects in real-time, reducing waste and improving product quality.",
      features: [
        "Sub-millisecond detection speed",
        "99.9% accuracy rate",
        "Integration with existing production lines",
        "Customizable defect classification"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-green-400" />,
      title: "AI-Powered Quality Control",
      description: "Automated quality assurance systems that ensure consistent product standards across your entire manufacturing process.",
      features: [
        "Automated pass/fail decisions",
        "Statistical quality reporting",
        "Trend analysis and predictions",
        "Compliance documentation"
      ]
    },
    {
      icon: <Cog className="w-12 h-12 text-purple-400" />,
      title: "Industrial Automation with Vision AI",
      description: "Complete automation solutions that combine computer vision with robotic systems for enhanced productivity.",
      features: [
        "Robotic guidance systems",
        "Automated sorting and packaging",
        "Process optimization",
        "Predictive maintenance alerts"
      ]
    },
    {
      icon: <Camera className="w-12 h-12 text-orange-400" />,
      title: "Surveillance & Security Analytics",
      description: "Intelligent video analytics for enhanced security monitoring and threat detection in industrial environments.",
      features: [
        "Perimeter intrusion detection",
        "Personnel safety monitoring",
        "Equipment tampering alerts",
        "Behavioral analysis"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Increased Efficiency",
      description: "Reduce manual inspection time by up to 90% with automated vision systems"
    },
    {
      icon: <Target className="w-8 h-8 text-red-400" />,
      title: "Enhanced Accuracy",
      description: "Achieve consistent quality standards with AI-powered precision detection"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      title: "Cost Reduction",
      description: "Lower operational costs through reduced waste and improved productivity"
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Services - AIROTIX Technologies"
        description="Discover AIROTIX's comprehensive computer vision and AI automation services for industrial applications, quality control, and security analytics."
        keywords={["computer vision services", "AI automation", "quality control", "defect detection", "industrial automation", "surveillance analytics"]}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="text-blue-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              AIROTIX builds intelligent systems that can see, understand, and act. We specialize in computer vision for industrial and commercial use, and we also deliver AI process automations and custom app/software development to tie everything together.
            </p>
            <p className="text-lg text-blue-300 max-w-2xl mx-auto">
              Our goal is simple: turn cameras, data, and workflows into measurable business outcomes—fewer defects, faster decisions, safer operations, and smarter products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Vision AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your operations with cutting-edge computer vision technology designed for industrial excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <Eye className="w-12 h-12 text-blue-400" />
                <h3 className="text-2xl font-bold text-gray-900 ml-4">
                  Computer Vision Solutions
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We design and deploy real-time vision systems that work on the edge or in the cloud.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Defect detection & quality inspection (textile, packaging, FMCG, automotive parts)</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Object tracking & counting (production lines, warehouses, retail shelves)</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Safety & compliance analytics (PPE detection, zone intrusion, fall/accident alerts)</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>OCR & visual data extraction (labels, gauges, meters, invoices, forms)</span>
                </li>
              </ul>
              <div className="text-sm text-blue-600 bg-blue-50 p-4 rounded-lg">
                <strong>How we deliver:</strong> dataset strategy & labeling, model training (YOLOv8/PyTorch/TensorFlow), edge deployment (NVIDIA Jetson/ONNX), live dashboards & alerts, maintenance & continuous improvement.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <Cog className="w-12 h-12 text-purple-400" />
                <h3 className="text-2xl font-bold text-gray-900 ml-4">
                  AI Automations for Businesses
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We automate repetitive knowledge work with LLMs and workflow engines.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Ticket triage & response drafting (Jira/ServiceDesk/Slack/MS Teams)</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Document/Email automations (summaries, classification, routing, approvals)</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Ops copilots for SOP guidance, data lookup, and decision support</span>
                </li>
              </ul>
              <div className="text-sm text-purple-600 bg-purple-50 p-4 rounded-lg">
                <strong>How we deliver:</strong> integration with your tools, guardrails & approvals, analytics on time-saved and accuracy.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <Shield className="w-12 h-12 text-green-400" />
                <h3 className="text-2xl font-bold text-gray-900 ml-4">
                  App & Software Development
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We build the software around your AI systems.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Web & mobile apps (React/Next.js, Flutter)</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>APIs & backends (ASP.NET Core, Node.js)</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Real-time dashboards for production lines, alerts, reports, and audit trails</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Secure deployment (Docker/K8s or simple VM installs) and CI/CD</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engagement Model Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven engagement model ensures successful AI implementation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Discover
              </h3>
              <p className="text-gray-600">
                Site walk-throughs, sample data, KPI definition
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cog className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Prototype
              </h3>
              <p className="text-gray-600">
                Rapid PoC on your data to prove accuracy & latency
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Deploy
              </h3>
              <p className="text-gray-600">
                Edge devices/cameras, dashboards, alerts, integrations
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Scale
              </h3>
              <p className="text-gray-600">
                Model monitoring, retraining, and new use cases
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why AIROTIX?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for real-world industrial conditions with measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Built for Real-Time
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Industrial conditions with sub-second response times
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <Target className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Accuracy + Latency
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Targets defined up front with guaranteed performance
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                End-to-End
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Vision models, automations, and the software users touch
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Clear ROI
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Less rework, fewer manual hours, higher throughput
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how AIROTIX's computer vision solutions can revolutionize your industrial processes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/about" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;