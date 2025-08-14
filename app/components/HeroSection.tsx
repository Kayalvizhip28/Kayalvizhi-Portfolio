'use client';
import React, { useEffect } from 'react';

export const HeroSection = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-md">
          <div className="w-full px-4 py-4 flex items-center justify-between">
            {/* ✅ Left-Aligned Name */}
            <div className="text-lg sm:text-4xl font-bold tracking-wide">
              <span className="text-blue-400">Kayalvizhi</span>
              <span className="text-white"> P</span>
            </div>

            {/* ✅ Navigation Bar */}
            <nav className="space-x-4 sm:space-x-6 text-sm sm:text-base font-medium">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#skills-section" className="hover:text-blue-400 transition-colors">Technical Expertise</a>
              <a href="#professional-journey" className="hover:text-blue-400 transition-colors">Professional Journey</a>
              <a href="#work" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#modern-web" className="hover:text-blue-400 transition-colors">Modern Web Capabilities</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </nav>
          </div>
        </header>

        {/* Animated Background Grid */}
        <div className="absolute inset-0 grid-background-dark opacity-10">
          <div className="grid-overlay animate-pulse-slow"></div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden">
          {[
            { icon: '⚛️', delay: '0s', position: 'top-20 left-1/4' },
            { icon: '🚀', delay: '2s', position: 'top-40 right-1/3' },
          ].map((item, index) => (
            <div
              key={index}
              className={`absolute ${item.position} animate-float opacity-50`}
              style={{ animationDelay: item.delay }}
            >
              <span className="text-4xl">{item.icon}</span>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <section id="home" className="relative z-10 max-w-5xl mx-auto px-4 pt-24 pb-16">
          <div className="text-center space-y-6">
            {/* Name Section */}
            <div className="relative inline-block px-4 sm:px-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div>
              <h1 className="relative text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800 pb-2">
                Kayalvizhi
              </h1>
            </div>

            {/* Role & Description */}
            <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-3">
                  <span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
                  <h2 className="text-xl sm:text-2xl font-light tracking-wide text-blue-600">
                    Full Stack Developer
                  </h2>
                  <span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
                </div>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl px-4 sm:px-0">
                  Crafting exceptional digital experiences with modern web technologies
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div
                id="technical-expertise"
                className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-4 sm:px-0"
              >
                {['JavaScript', 'React.js', 'Python'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-blue-500/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 sm:px-0">
              <a href="#work" className="group relative inline-flex items-center justify-center">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-50 group-hover:opacity-75 transition"></div>
                <span className="relative px-6 sm:px-8 py-3 bg-white rounded-full inline-flex items-center justify-center w-full sm:w-auto">
                  View My Work
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>

              <a
                href="#contact"
                className="px-6 sm:px-8 py-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors border border-gray-200 hover:border-gray-300 text-center"
              >
                Get in Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1BEAA-byAJlW6hjf_ElHviuMgn1CMxRCm/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-50 group-hover:opacity-75 transition"></div>
                <span className="relative px-6 sm:px-8 py-3 bg-white rounded-full inline-flex items-center justify-center w-full sm:w-auto">
                  Download Resume
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
              {[
                { name: 'GitHub', icon: '🐙', href: '#' },
                { name: 'LinkedIn', icon: '💼', href: '#' },
                { name: 'Twitter', icon: '🐦', href: '#' },
                { name: 'Blog', icon: '✍️', href: '#' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group relative p-2 sm:p-3 hover:text-blue-600 transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform inline-block">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ About Section */}
        <section id="about" className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6">About Me</h2>

          {/* Light Blue Heading */}
          <h3 className="text-xl sm:text-2xl font-bold bg-blue-100 text-gray-900 px-4 py-2 rounded-md inline-block mb-4">
            Hello, I'm Kayalvizhi P — Web Developer
          </h3>

          {/* Extended Intro Paragraph */}
          <p className="text-lg text-gray-700 leading-relaxed mb-10 text-left">
            I am a Web Developer with 1 year of internship experience in user experience, user interface,
            and scalable application development. I specialize in API integration, full-stack development,
            and building robust, high-performance applications that deliver seamless digital experiences.
          </p>

          {/* Professional Values */}
          <div className="bg-white border border-gray-300 rounded-xl p-6 max-w-2xl mx-auto text-left shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🛡️</span>
              <h4 className="text-lg font-semibold text-gray-800">Professional Values</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              I believe in crafting <span className="text-black font-semibold">intuitive user experiences</span>, writing
              <span className="text-black font-semibold"> clean and maintainable code</span>, and continuously refining
              applications to achieve <span className="text-black font-semibold">optimal performance</span> and
              <span className="text-black font-semibold"> scalability</span>. My approach focuses on aligning
              <span className="text-black font-semibold"> technical solutions</span> with
              <span className="text-black font-semibold"> business objectives</span> to deliver
              <span className="text-black font-semibold"> lasting value</span>.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
