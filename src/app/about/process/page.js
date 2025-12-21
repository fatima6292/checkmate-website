'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import ChessFooter from '@/components/layout/ChessFooter';
import Timeline from '@/components/sections/Timeline';

export default function ProcessPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const processStats = [
    { number: '6', label: 'Development Stages' },
    { number: '100%', label: 'Quality Assurance' },
    { number: '24/7', label: 'Support Available' },
    { number: 'Agile', label: 'Methodology' }
  ];

  const processBenefits = [
    {
      title: 'Transparent Communication',
      description: 'Regular updates and clear communication throughout every stage of development.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    },
    {
      title: 'Agile Methodology',
      description: 'Flexible, iterative approach that adapts to your changing needs and priorities.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    },
    {
      title: 'Quality First',
      description: 'Rigorous testing and code reviews ensure high-quality, maintainable solutions.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      )
    },
    {
      title: 'Scalable Solutions',
      description: 'Built with growth in mind, ensuring your application can scale with your business.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    }
  ];

  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section
          style={{
            position: 'relative',
            padding: isMobile ? '7rem 0 2.5rem' : '10rem 0 4rem',
            backgroundImage: 'url(/formbg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.70)',
            zIndex: 0,
            pointerEvents: 'none',
          }} />

          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: isMobile ? '0 1rem' : '0 2rem',
            position: 'relative',
            zIndex: 1,
            width: '100%',
            boxSizing: 'border-box',
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: 'center' }}
            >
              <motion.h6
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  fontSize: isMobile ? '0.8rem' : '0.875rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  marginBottom: '1rem',
                  fontFamily: "var(--font-syne), var(--font-bricolage), -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                Our Process
              </motion.h6>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-text"
                style={{
                  fontSize: isMobile ? '1.75rem' : '3.5rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  color: 'var(--text-on-light)',
                  fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                  lineHeight: 1.2,
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                }}
              >
                From Concept to
                {!isMobile && <br />}
                <span style={{ color: 'var(--color-secondary)' }}>Deployment</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  fontSize: isMobile ? '0.9375rem' : '1.25rem',
                  maxWidth: '700px',
                  margin: '0 auto',
                  color: 'var(--text-on-light-muted)',
                  lineHeight: 1.6,
                  padding: isMobile ? '0 0.5rem' : '0',
                  fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                }}
              >
                Our proven development process ensures your project is delivered on time, within budget, and built to scale with your business needs.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section
          style={{
            padding: isMobile ? '3rem 0' : '4rem 0',
            backgroundImage: 'url(/formbg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            zIndex: 0,
            pointerEvents: 'none',
          }} />

          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: isMobile ? '0 1rem' : '0 2rem',
            position: 'relative',
            zIndex: 1,
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              gap: isMobile ? '1rem' : '2rem',
            }}>
              {processStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  style={{
                    textAlign: 'center',
                    padding: isMobile ? '1rem' : '2rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                    style={{
                      fontSize: isMobile ? '1.75rem' : '3rem',
                      fontWeight: 700,
                      color: 'var(--color-secondary)',
                      marginBottom: '0.5rem',
                      fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div style={{
                    fontSize: isMobile ? '0.875rem' : '1rem',
                    color: 'var(--text-on-light-muted)',
                    fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <Timeline hideHeader={true} />

        {/* Process Benefits Section */}
        <section
          style={{
            padding: isMobile ? '3rem 0' : '4rem 0',
            backgroundImage: 'url(/formbg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            zIndex: 0,
            pointerEvents: 'none',
          }} />

          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: isMobile ? '0 1rem' : '0 2rem',
            position: 'relative',
            zIndex: 1,
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '3rem' }}
            >
              <h2 style={{
                fontSize: isMobile ? '1.75rem' : '2.5rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: 'var(--text-on-light)',
                fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
              }}>
                Why Our Process Works
              </h2>
              <p style={{
                fontSize: isMobile ? '0.9375rem' : '1.125rem',
                maxWidth: '700px',
                margin: '0 auto',
                color: 'var(--text-on-light-muted)',
                fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
              }}>
                Key benefits that set our development approach apart
              </p>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: isMobile ? '1.5rem' : '2rem',
            }}>
              {processBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  style={{
                    padding: isMobile ? '1.25rem' : '2rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '20px',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                  }}
                >
                  <div style={{
                    width: isMobile ? '50px' : '60px',
                    height: isMobile ? '50px' : '60px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--color-primary-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    marginBottom: '1.5rem',
                  }}>
                    {benefit.icon}
                  </div>
                  <h3 style={{
                    fontSize: isMobile ? '1.125rem' : '1.375rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    color: 'var(--text-on-light)',
                    fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                  }}>
                    {benefit.title}
                  </h3>
                  <p style={{
                    fontSize: isMobile ? '0.875rem' : '0.9375rem',
                    color: 'var(--text-on-light-muted)',
                    lineHeight: 1.6,
                    fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                  }}>
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            padding: isMobile ? '3rem 0' : '4rem 0',
            backgroundImage: 'url(/formbg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            zIndex: 0,
            pointerEvents: 'none',
          }} />

          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: isMobile ? '0 1rem' : '0 2rem',
            position: 'relative',
            zIndex: 1,
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                textAlign: 'center',
                padding: isMobile ? '2rem' : '3rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(0, 0, 0, 0.06)',
              }}
            >
              <h2 style={{
                fontSize: isMobile ? '1.5rem' : '2rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: 'var(--text-on-light)',
                fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
              }}>
                Ready to Start Your Project?
              </h2>
              <p style={{
                fontSize: isMobile ? '0.9375rem' : '1.125rem',
                color: 'var(--text-on-light-muted)',
                marginBottom: '2rem',
                fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
              }}>
                Let's discuss how our proven process can bring your vision to life
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: isMobile ? '0.875rem 2rem' : '1rem 2.5rem',
                    fontSize: isMobile ? '0.9375rem' : '1rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    backgroundColor: 'var(--color-secondary)',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get Started Today
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <ChessFooter />
    </>
  );
}

