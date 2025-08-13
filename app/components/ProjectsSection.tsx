'use client';

import React, { useState } from 'react';
import {
    FaUserShield,
    FaRegImage,
    FaTerminal,
} from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi2';
import { IoChevronDownSharp } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
    title: string;
    overview: string;
    achievements: string[];
    techStack: string[];
    icon: React.ReactNode;
}

const projects: Project[] = [
    {
        title: 'Portfolio Website',
        overview:
            'Built a responsive portfolio using React and Tailwind CSS to showcase my full-stack projects, resume, linkedin and github links. It features layered backgrounds, interactive sections, and optimized performance across devices.',
        achievements: [
            'Custom grid and image layering for visual depth',
            'Integrated GitHub, LinkedIn, Gmail, and Resume links',
            'Responsive design with smooth scroll and transitions',
            'SEO-friendly structure with clean routing',
        ],
        techStack: ['React.js', 'Tailwind CSS', 'Next.js', 'TypeScript'],
        icon: <FaUserShield className="text-xl text-[#3b82f6]" />,
    },
    {
        title: 'Holygrail Content Generator',
        overview:
            'A web-based content automation tool built with Flask and OpenAI API, featuring a responsive UI and hosted on GCP for scalability.',
        achievements: [
            'Responsive UI using HTML, CSS, Bootstrap',
            'Interactive frontend with JavaScript and jQuery',
            'Flask backend with OpenAI API integration',
            'Hosted on Google Cloud Platform',
            'Web dashboard for content management',
            'Version control with Git',
        ],
        techStack: ['JavaScript', 'Python', 'Flask', 'OpenAI API'],
        icon: <HiOutlineDocumentText className="text-xl text-[#3b82f6]" />,
    },
    {
        title: 'AI Image Generator',
        overview:
            'A Flask-based web app that uses OpenAI’s DALL·E API to generate custom images from user prompts with real-time preview and download.',
        achievements: [
            'Flask backend with DALL·E API integration',
            'Prompt-based image generation with negative prompts',
            'Real-time preview of generated images',
            'Responsive design for all devices',
            'Error handling and input validation',
            'Download option for generated visuals',
        ],
        techStack: ['JavaScript', 'Python', 'Flask', 'DALL·E API'],
        icon: <FaRegImage className="text-xl text-[#3b82f6]" />,
    },
    {
        title: 'PubMed CLI Tool',
        overview:
            'Built a command-line tool using Python and Biopython to fetch biomedical research articles authored by individuals affiliated with industry from PubMed. It supports CSV export, modular design, and robust error handling for seamless research workflows.',
        achievements: [
            'Flexible CLI with argparse for custom queries',
            'CSV export for downstream analysis',
            'Published on TestPyPI for easy installation',
            'Handles API limits and errors gracefully',
        ],
        techStack: ['Python', 'Biopython', 'Entrez API', 'Poetry'],
        icon: <FaTerminal className="text-xl text-[#3b82f6]" />,
    },
];

export const ProjectsSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleProject = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="work" className="py-12 sm:py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-4xl font-bold mb-12 text-center text-gray-900">
                    Featured Projects
                </h2>

                <div className="space-y-8">
                    {projects.map((project, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={project.title}
                                className="rounded-xl shadow-sm border overflow-hidden transition-all duration-300"
                            >
                                {/* Header */}
                                <button
                                    onClick={() => toggleProject(index)}
                                    className={`w-full flex items-center justify-between px-6 py-4 transition-all ${
                                        isActive
                                            ? 'bg-[#e0f2ff]'
                                            : 'bg-white hover:bg-gray-50'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        {project.icon}
                                        <h3 className="text-lg sm:text-xl font-bold tracking-wide text-black">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <IoChevronDownSharp
                                        className={`text-xl transition-transform ${
                                            isActive
                                                ? 'rotate-180 text-[#3b82f6]'
                                                : 'rotate-0 text-gray-500'
                                        }`}
                                    />
                                </button>

                                {/* Animated Content */}
                                <AnimatePresence initial={false}>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div className="px-6 py-6 bg-[#f9fbfd] border-t border-[#e0f2ff] space-y-6">
                                                {/* Overview */}
                                                <div>
                                                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                                                        Project Overview
                                                    </h4>
                                                    <p className="text-base text-gray-700">
                                                        {project.overview}
                                                    </p>
                                                </div>

                                                {/* Achievements */}
                                                <div>
                                                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                                                        Key Achievements
                                                    </h4>
                                                    <ul className="list-disc list-inside space-y-2 text-base text-gray-700">
                                                        {project.achievements.map((point) => (
                                                            <li key={point}>
                                                                {point}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Tech Stack Buttons */}
                                                <div className="flex flex-wrap gap-3">
                                                    {project.techStack.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-4 py-1.5 rounded-full text-sm font-bold text-black bg-gradient-to-r from-[#cce7ff] via-[#60a5fa] to-[#3b82f6] shadow-sm transition-all"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
