import React, { useState, useEffect } from "react";
import {
  Code,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Zap,
  Users,
  MapPin,
  Mail,
  Phone,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  Menu,
  X,
} from "lucide-react";

const ModernITWebsite = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-500" />,
      title: "Custom Software Development",
      description:
        "Tailored solutions built with cutting-edge technologies to meet your unique business requirements.",
      technologies: ["React", "Node.js", "Python", "Java"],
    },
    {
      icon: <Smartphone className="w-12 h-12 text-green-500" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
      icon: <Cloud className="w-12 h-12 text-purple-500" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services for modern businesses.",
      technologies: ["AWS", "Azure", "Google Cloud", "DevOps"],
    },
    {
      icon: <Database className="w-12 h-12 text-orange-500" />,
      title: "AI & Machine Learning",
      description:
        "Intelligent solutions powered by artificial intelligence and machine learning to automate and optimize your business processes.",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision"],
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets and data.",
      technologies: ["Penetration Testing", "Security Audits", "Compliance"],
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "AI Integration & Automation",
      description:
        "Seamlessly integrate AI capabilities into your existing systems with intelligent automation and chatbot solutions.",
      technologies: ["ChatGPT API", "LangChain", "RPA", "NLP"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img
                src={`${import.meta.env.BASE_URL}/logo.png`}
                alt="DevStack Logo"
                className="h-12 w-auto"
              />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {["Home", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-200 inline-block"
              >
                Contact Us
              </a>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {["Home", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-200 inline-block text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Next-Level
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Software Solutions
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your business with cutting-edge technology solutions.
                We deliver innovative software, mobile apps, and AI-powered
                digital experiences that drive growth and success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-3 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-105">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-gray-900">150+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl blur-3xl opacity-20 transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border overflow-hidden">
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="font-bold text-xl text-gray-900">
                        Technology Stack
                      </div>
                      <div className="text-sm text-gray-500">
                        We Work With Latest Tech
                      </div>
                    </div>
                    <Zap className="w-8 h-8 text-yellow-500" />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center transform hover:scale-105 transition-transform">
                      <div className="text-3xl mb-2">⚛️</div>
                      <div className="text-sm font-semibold text-gray-800">
                        React
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl text-center transform hover:scale-105 transition-transform">
                      <div className="text-3xl mb-2">🤖</div>
                      <div className="text-sm font-semibold text-gray-800">
                        AI/ML
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center transform hover:scale-105 transition-transform">
                      <div className="text-3xl mb-2">🔷</div>
                      <div className="text-sm font-semibold text-gray-800">
                        Python
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl text-center transform hover:scale-105 transition-transform">
                      <div className="text-3xl mb-2">☁️</div>
                      <div className="text-sm font-semibold text-gray-800">
                        AWS
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-4 rounded-xl text-center transform hover:scale-105 transition-transform">
                      <div className="text-3xl mb-2">🧠</div>
                      <div className="text-sm font-semibold text-gray-800">
                        ChatGPT
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-xl text-center transform hover:scale-105 transition-transform">
                      <div className="text-3xl mb-2">🐳</div>
                      <div className="text-sm font-semibold text-gray-800">
                        Docker
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold">100+</div>
                        <div className="text-sm opacity-90">
                          Technologies Mastered
                        </div>
                      </div>
                      <Code className="w-10 h-10 opacity-80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="w-full mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Expertise
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Comprehensive IT Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end technology
              solutions that empower your business to thrive in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border border-gray-100 rounded-xl bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-purple-50 p-6"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="w-full text-gray-600 hover:bg-blue-50 hover:text-blue-600 py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="clients"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="w-full mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-green-100 to-blue-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Why Choose DevStack
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Your Trusted Technology Partner
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical excellence with business understanding to
              deliver solutions that drive real results for your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Expert Team
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our skilled developers and designers bring years of experience
                in cutting-edge technologies and modern development practices.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                AI-First Approach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We leverage cutting-edge AI technologies including GPT, machine
                learning, and intelligent automation to build smarter solutions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quality Assurance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Rigorous testing and quality checks ensure that every solution
                we deliver meets the highest standards of performance and
                security.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                On-Time Delivery
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We pride ourselves on meeting deadlines without compromising
                quality, ensuring your projects launch on schedule.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                24/7 Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock technical support and maintenance to keep your
                applications running smoothly at all times.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Scalable Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We build with the future in mind, creating scalable
                architectures that grow seamlessly with your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Get In Touch
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Ready to Start Your Project?
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Let's discuss how we can transform your ideas into powerful
                digital solutions. Our team is ready to bring your vision to
                life.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Our Office
                    </div>
                    <div className="text-gray-600">
                      Hinjewadi, Pune, Maharashtra 411057
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email Us</div>
                    <div className="text-gray-600">support@devstack.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Website</div>
                    <div className="text-gray-600">www.devstack.co.in</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Your first name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Your last name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..."
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-vertical"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-105"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center space-x-2">
                <img
                  src={`${import.meta.env.BASE_URL}/logo.png`}
                  alt="DevStack Logo"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-4">
                Transforming businesses through innovative technology solutions
                in Pune and beyond.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Software Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Data Analytics
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Hinjewadi, Pune</li>
                <li>Maharashtra 411057</li>
                <li>support@devstack.co.in</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DevStack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernITWebsite;
