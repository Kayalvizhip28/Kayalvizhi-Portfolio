'use client';

import React, { useState } from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botField: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      console.log('Sending form:', form); // ✅ Debug log

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log('Response:', data); // ✅ Debug log

      if (res.ok && data.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '', botField: '' });
      } else {
        setErrorMsg(data.error || 'Something went wrong.');
        setStatus('error');
      }
    } catch (err) {
      console.error('Network error:', err);
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto pt-12 sm:pt-20 px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl">
            Let’s connect and discuss opportunities
          </p>
        </div>

        {/* Grid Layout with Controlled Card Width */}
        <div className="flex flex-col md:flex-row md:justify-center md:gap-12 gap-y-10">
          {/* Contact Info Card */}
          <div className="bg-white rounded-xl shadow-md px-6 py-8 flex flex-col justify-start w-full md:w-[320px] min-h-[400px]">
            <h3 className="text-xl font-semibold text-blue-600 mb-8 text-center">
              Contact Information
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <a
                  href="mailto:kayalp2001@gmail.com"
                  className="text-gray-700 hover:text-blue-600 transition-colors text-sm"
                >
                  kayalp2001@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <span className="text-gray-700 text-sm">
                  Chennai, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <FaPhoneAlt className="w-4 h-4" />
                </div>
                <a
                  href="tel:+916374855981"
                  className="text-gray-700 hover:text-blue-600 transition-colors text-sm"
                >
                  +91 6374855981
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <FaLinkedin className="w-4 h-4" />
                </div>
                <a
                  href="https://www.linkedin.com/in/kayalvizhip28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors text-sm"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Message Form Card */}
          <div className="bg-white rounded-xl shadow-md px-6 py-8 flex flex-col justify-start w-full md:w-[320px] min-h-[400px]">
            <form className="space-y-5" onSubmit={onSubmit}>
              {/* Hidden honeypot (bots fill this, humans don't) */}
              <input
                type="text"
                name="botField"
                value={form.botField}
                onChange={handleChange}
                className="hidden"
                autoComplete="off"
                tabIndex={-1}
              />

              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject (optional)"
                value={form.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full px-6 py-2 rounded-lg font-medium text-sm transition-opacity text-white ${
                  status === 'loading'
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90'
                }`}
              >
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>

              {/* Messages */}
              {status === 'success' && (
                <p className="text-green-600 text-sm text-center">
                  ✅ Thanks! Your message has been sent.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-sm text-center">
                  ❌ {errorMsg || 'Something went wrong. Please try again.'}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white w-full mt-16">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-8">
          <p className="text-base text-white sm:text-left w-full sm:w-auto mb-4 sm:mb-0">
            © 2025 Kayalvizhi P. All rights reserved.
          </p>
          <div className="flex gap-6 sm:gap-8">
            <a
              href="https://www.linkedin.com/in/kayalvizhip28"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Kayalvizhip28"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="mailto:kayalp2001@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
            <a
              href="tel:+916374855981"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaPhoneAlt className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

