import React from 'react';

export const WebCapabilitiesSection = () => {
    return (
        <section id="modern-web" className="py-12 sm:py-20 px-4 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-900">
                    Modern Web Capabilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {[
                        {
                            title: 'Progressive Web Apps',
                            icon: '📱',
                            features: [
                                'Responsive React layouts',
                                'Offline-ready UI components',
                                'Installable portfolio experience',
                            ],
                        },
                        {
                            title: 'Real-time Features',
                            icon: '⚡',
                            features: [
                                'Live form validation',
                                'Instant UI feedback',
                                'Real-time design previews',
                            ],
                        },
                        {
                            title: 'Browser APIs',
                            icon: '🔧',
                            features: [
                                'Intersection Observer for animations',
                                'Clipboard API for contact actions',
                                'LocalStorage for theme toggles',
                            ],
                        },
                        {
                            title: 'AI Integration',
                            icon: '🧠',
                            features: [
                                'AI-assisted layout suggestions',
                                'Prompt-based content generation',
                                'Design benchmarking with Copilot',
                            ],
                        },
                        {
                            title: 'Cloud Deployment',
                            icon: '☁️',
                            features: [
                                'Vercel & Netlify hosting',
                                'Scalable architecture',
                                'Optimized builds with React & Tailwind',
                            ],
                        },
                        {
                            title: 'Performance & Security',
                            icon: '🚀',
                            features: [
                                'Lazy loading & code splitting',
                                'Tailwind for atomic CSS',
                                'Secure contact forms with validation',
                            ],
                        },
                    ].map((category) => (
                        <div
                            key={category.title}
                            className="group bg-white p-6 rounded-lg hover:bg-gray-100 transition-all shadow-sm hover:shadow-md"
                        >
                            <div className="text-3xl mb-4">{category.icon}</div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{category.title}</h3>
                            <ul className="space-y-2">
                                {category.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="text-gray-600 group-hover:text-gray-700 transition-colors"
                                    >
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
