'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import ChessFooter from '@/components/layout/ChessFooter';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 'fullstack',
      title: 'Full-Stack Development',
      description: 'Complete end-to-end development solutions from frontend to backend, delivering scalable applications that grow with your business.',
      url: '/services/fullstack-development',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      gradient: '#0F172A',
    },
    {
      id: 'software',
      title: 'Software Engineering',
      description: 'Custom software solutions built with clean architecture, best practices, and scalable design patterns for long-term success.',
      url: '/services/software-engineering',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
      gradient: '#0F172A',
    },
    {
      id: 'devops',
      title: 'DevOps & Cloud',
      description: 'Infrastructure automation, CI/CD pipelines, and cloud security to ensure your applications are reliable, scalable, and secure.',
      url: '/services/devops-cloud-security',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      ),
      gradient: '#0F172A',
    },
    {
      id: 'ai',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by AI and machine learning to automate processes, gain insights, and enhance user experiences.',
      url: '/services/ai-machine-learning',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44L2 22v-7a2.5 2.5 0 0 1 2.5-2.5h5z" />
          <path d="M14 2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-4" />
        </svg>
      ),
      gradient: '#0F172A',
    },
    {
      id: 'automation',
      title: 'Process Automation',
      description: 'Streamline workflows and eliminate manual tasks with intelligent automation solutions that boost efficiency and reduce errors.',
      url: '/services/process-automation',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      gradient: '#0F172A',
    },
    {
      id: 'security',
      title: 'Data Security & Compliance',
      description: 'Comprehensive security solutions and compliance support to protect your data and meet regulatory requirements.',
      url: '/services/data-security-compliance',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      gradient: '#0F172A',
    },
  ];

  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section
          style={{
            position: 'relative',
            padding: '140px 0 100px',
            background: 'linear-gradient(180deg, #ffffff 0%, #f0f4f8 100%)',
            overflow: 'hidden',
          }}
        >
          {/* Background decorative elements */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'url(/formbg.png)',
              backgroundSize: 'auto',
              backgroundPosition: 'center',
              backgroundRepeat: 'repeat',
              opacity: 0.3,
              zIndex: 0,
            }}
          />

          <div
            style={{
              position: 'absolute',
              top: '-50%',
              right: '-10%',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.1) 0%, rgba(15, 23, 42, 0.05) 100%)',
              filter: 'blur(80px)',
              zIndex: 0,
            }}
          />

          <div
            style={{
              position: 'absolute',
              bottom: '-30%',
              left: '-5%',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.08) 0%, rgba(15, 23, 42, 0.03) 100%)',
              filter: 'blur(60px)',
              zIndex: 0,
            }}
          />

          <div
            style={{
              maxWidth: '1400px',
              margin: '0 auto',
              padding: '0 2rem',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <button
                  style={{
                    padding: '0.5rem 1.25rem',
                    border: '2px solid #0F172A',
                    borderRadius: '50px',
                    background: 'transparent',
                    color: '#0F172A',
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '2rem',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  Our Services
                </button>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  fontSize: '4rem',
                  fontWeight: '700',
                  lineHeight: '1.1',
                  marginBottom: '1.5rem',
                  color: '#0F172A',
                  fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                }}
              >
                Professional Technology
                <br />
                <span style={{ color: '#0F172A' }}>Services</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  fontSize: '1.25rem',
                  lineHeight: '1.8',
                  color: '#4A5568',
                  marginBottom: '2.5rem',
                  fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                }}
              >
                From full-stack development to AI solutions, we deliver comprehensive technology services that drive your business forward.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section
          style={{
            padding: '100px 0',
            backgroundImage: 'url(/formbg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
              zIndex: 0,
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              maxWidth: '1400px',
              margin: '0 auto',
              padding: '0 2rem',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                textAlign: 'center',
                marginBottom: '4rem',
              }}
            >
              <h2
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#0F172A',
                  marginBottom: '1rem',
                  fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                }}
              >
                Explore Our Services
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  color: '#4A5568',
                  maxWidth: '600px',
                  margin: '0 auto',
                  fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                }}
              >
                Comprehensive solutions tailored to your business needs
              </p>
            </motion.div>

            <div
              className="services-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2.5rem',
              }}
            >
              {services.map((service, index) => (
                <Link key={service.id} href={service.url} style={{ textDecoration: 'none' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    style={{
                      background: '#ffffff',
                      borderRadius: '16px',
                      padding: '2.5rem',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
                    }}
                  >
                    {/* Gradient Background */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: service.gradient,
                        zIndex: 1,
                      }}
                    />

                    {/* Icon Container */}
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '16px',
                        background: service.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ffffff',
                        marginBottom: '1.5rem',
                        position: 'relative',
                        zIndex: 2,
                      }}
                    >
                      {service.icon}
                    </div>

                    {/* Content */}
                    <h3
                      style={{
                        fontSize: '1.75rem',
                        fontWeight: '700',
                        color: '#0F172A',
                        marginBottom: '1rem',
                        fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '1rem',
                        color: '#4A5568',
                        lineHeight: '1.7',
                        marginBottom: '1.5rem',
                        flexGrow: 1,
                        fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#0F172A',
                        fontSize: '0.9375rem',
                        fontWeight: '600',
                        fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                      }}
                    >
                      Learn More
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            padding: '100px 0',
            background: '#0F172A',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              padding: '0 2rem',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '1.5rem',
                  fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                }}
              >
                Ready to Get Started?
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: '2.5rem',
                  lineHeight: '1.7',
                  fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                }}
              >
                Let's discuss how our services can help transform your business and drive growth.
              </p>
              <Link href="/contact">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'inline-block',
                    padding: '1rem 2.5rem',
                    background: '#ffffff',
                    color: '#0F172A',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                    transition: 'all 0.3s ease',
                  }}
                >
                  Contact Us Today
                </motion.a>
              </Link>
            </motion.div>
        </div>
        </section>
      </main>
      <ChessFooter />

      <style jsx global>{`
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </>
  );
}
