import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Kayalvizhi - Full Stack Developer',
    description:
        'Welcome to my portfolio! I am Kayalvizhi, a passionate full stack developer creating modern, responsive, and user-friendly applications. Specializing in Python, Flask, and JavaScript, I build engaging digital experiences and powerful CLI tools.',
    keywords: [
        'Full Stack Developer',
        'Python Developer',
        'Flask Developer',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Responsive Design',
        'UI/UX',
        'Web Accessibility',
        'Performance Optimization',
        'Modern Web Development',
        'Progressive Web Apps',
        'CLI Tools',
        'OpenAI API',
        'Google Cloud Platform',
        'Kayalvizhi',
    ],
    authors: [{ name: 'Kayalvizhi' }],
    creator: 'Kayalvizhi',
    openGraph: {
        title: 'Kayalvizhi - Full Stack Developer Portfolio',
        description: 'Passionate full stack developer crafting modern and engaging digital experiences. Explore my projects and development expertise.',
        url: 'https://your-domain.com',
        siteName: 'Kayalvizhi - Portfolio',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Kayalvizhi - Full Stack Developer Portfolio',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kayalvizhi - Full Stack Developer',
        description: 'Passionate full stack developer crafting modern and engaging digital experiences. Explore my projects and development expertise.',
        creator: '@kayalvizhi',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <main className="min-h-screen w-full relative overflow-x-hidden bg-white text-gray-900">
                    {children}
                </main>
            </body>
        </html>
    );
}
