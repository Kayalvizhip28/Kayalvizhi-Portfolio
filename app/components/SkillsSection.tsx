'use client';
import React, { useState } from 'react';
import {
  FaCode,
  FaServer,
  FaCloud,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaProjectDiagram,
  FaGoogle,
  FaDocker,
  FaSyncAlt,
  FaChartLine
} from 'react-icons/fa';

export const SkillsSection = () => {
  const categories = [
    {
      key: 'frontend',
      title: 'Frontend',
      icon: <FaCode />,
      skills: [
        {
          name: 'HTML5',
          tag: 'Accessibility',
          description:
            'Semantic HTML5 markup with WAI-ARIA for accessibility and SEO optimization.',
          icon: <FaHtml5 className="text-orange-500 animate-bounce" />,
        },
        {
          name: 'CSS3',
          tag: 'Bootstrap',
          description:
            'Modern CSS including Flexbox, Grid, animations, and responsive design patterns.',
          icon: <FaCss3Alt className="text-blue-500 animate-bounce" />,
        },
        {
          name: 'JavaScript (ES6+)',
          tag: 'ES6+',
          description:
            'Modern JavaScript including async/await, modules, and asynchronous programming.',
          icon: <FaJsSquare className="text-yellow-500 animate-bounce" />,
        },
        {
          name: 'React.js',
          tag: 'Hooks',
          description:
            'Building component-based UIs with hooks, context API, and performance optimization.',
          icon: <FaReact className="text-cyan-500 animate-bounce" />,
        },
      ],
    },
    {
      key: 'backend',
      title: 'Backend',
      icon: <FaServer />,
      skills: [
        {
          name: 'Python & Flask',
          tag: 'REST APIs',
          description:
            'Developing scalable backend services and RESTful APIs using Python and Flask.',
          icon: <FaPython className="text-blue-400 animate-bounce" />,
        },
        {
          name: 'Node.js',
          tag: 'Server-side',
          description:
            'Building fast, scalable server-side applications using Node.js event-driven architecture.',
          icon: <FaNodeJs className="text-green-500 animate-bounce" />,
        },
        {
          name: 'MySQL',
          tag: 'Relational DB',
          description:
            'Designing, querying, and managing relational databases using MySQL.',
          icon: <FaDatabase className="text-indigo-500 animate-bounce" />,
        },
        {
          name: 'RESTful API Design',
          tag: 'Swagger',
          description:
            'Designing and implementing RESTful services with versioning and proper documentation.',
          icon: <FaProjectDiagram className="text-pink-500 animate-bounce" />,
        },
      ],
    },
    {
      key: 'devops',
      title: 'DevOps',
      icon: <FaCloud />,
      skills: [
        {
          name: 'Google Cloud Platform',
          tag: 'Deployment',
          description:
            'Deploying web apps and managing services using GCP App Engine and Cloud Run.',
          icon: <FaGoogle className="text-red-500 animate-bounce" />,
        },
        {
          name: 'Docker & Kubernetes',
          tag: 'Containers',
          description:
            'Containerizing applications and orchestrating services with Docker and Kubernetes.',
          icon: <FaDocker className="text-blue-400 animate-bounce" />,
        },
        {
          name: 'CI/CD',
          tag: 'Automation',
          description:
            'Automating builds and deployments using GitHub Actions and Cloud Build.',
          icon: <FaSyncAlt className="text-green-500 animate-bounce" />,
        },
        {
          name: 'Agile & Waterfall',
          tag: 'SDLC',
          description:
            'Collaborating in Agile and Waterfall environments with sprint planning.',
          icon: <FaChartLine className="text-purple-500 animate-bounce" />,
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState('frontend');

  return (
    <section id="skills-section" className="py-16 px-4 bg-gray-100 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-900">
          Technical Expertise
        </h2>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold transition-all ${
                activeCategory === cat.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              <span className="text-2xl">{cat.icon}</span>
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories
            .find((cat) => cat.key === activeCategory)
            ?.skills.map((skill) => (
              <div
                key={skill.name}
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-400 transition-all transform hover:-translate-y-2 hover:shadow-lg w-full h-[280px] flex flex-col text-center"
              >
                {/* Top Section */}
                <div className="flex-1 flex flex-col items-center justify-start">
                  <div className="text-5xl mb-4">{skill.icon}</div>
                  <h4 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition mb-2">
                    {skill.name}
                  </h4>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Tag at bottom */}
                <div className="mt-4">
                  <span className="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                    {skill.tag}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Empty gray spacer */}
      <div className="bg-gray-100 py-8 sm:py-12"></div>

      {/* Professional Journey */}
      <div
        id="professional-journey"
        className="max-w-6xl mx-auto px-4 pt-12 sm:pt-20"
      >
        <h2 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-16 text-center text-gray-900">
          Professional Journey
        </h2>
        <div className="rounded-lg p-6 shadow-sm hover:shadow-md transition-all transform hover:scale-[1.02] bg-white">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl animate-bounce">🧑‍💻</span>
              <h3 className="text-xl font-bold text-gray-900">
                Software Engineer Trainee
              </h3>
            </div>
            <p className="text-base text-gray-700 mb-4">
              <strong>CorestratAI Solutions Private Limited</strong> — May 2024 to April 2025
            </p>
            <ul className="list-disc list-inside text-base text-gray-700 space-y-2">
              <li>
                Delivered functional web development projects using Bootstrap,
                JavaScript, jQuery, Python, and Flask
              </li>
              <li>
                Collaborated with cross-functional teams to build scalable and
                responsive UIs
              </li>
              <li>
                Gained hands-on experience with GCP deployment and version
                control using Git
              </li>
              <li>
                Developed reusable UI components and integrated dynamic data
                rendering for real-time updates
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
