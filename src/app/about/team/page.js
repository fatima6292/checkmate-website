'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import ChessFooter from '@/components/layout/ChessFooter';
import ChessGrandmastersTeam from '@/components/sections/ChessGrandmastersTeam';

export default function TeamPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const teamStats = [
    { number: '10+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' }
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
                Our Team
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
                Meet the Experts
                {!isMobile && <br />}
                <span style={{ color: 'var(--color-secondary)' }}>Behind Our Success</span>
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
                Our diverse team of skilled professionals brings together expertise in development, design, and strategy to deliver exceptional results.
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
            width: '100%',
            boxSizing: 'border-box',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              gap: isMobile ? '0.75rem' : '2rem',
              width: '100%',
            }}>
              {teamStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  style={{
                    textAlign: 'center',
                    padding: isMobile ? '0.875rem' : '2rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    minWidth: 0,
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                    style={{
                      fontSize: isMobile ? '1.5rem' : '3rem',
                      fontWeight: 700,
                      color: 'var(--color-secondary)',
                      marginBottom: isMobile ? '0.375rem' : '0.5rem',
                      fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div style={{
                    fontSize: isMobile ? '0.75rem' : '1rem',
                    color: 'var(--text-on-light-muted)',
                    fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    lineHeight: 1.4,
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <ChessGrandmastersTeam hideHeader={true} />

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
            width: '100%',
            boxSizing: 'border-box',
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                textAlign: 'center',
                padding: isMobile ? '1.5rem' : '3rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                width: '100%',
                boxSizing: 'border-box',
                maxWidth: '100%',
              }}
            >
              <h2 style={{
                fontSize: isMobile ? '1.25rem' : '2rem',
                fontWeight: 700,
                marginBottom: isMobile ? '0.75rem' : '1rem',
                color: 'var(--text-on-light)',
                fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
              }}>
                Ready to Work With Us?
              </h2>
              <p style={{
                fontSize: isMobile ? '0.875rem' : '1.125rem',
                color: 'var(--text-on-light-muted)',
                marginBottom: isMobile ? '1.5rem' : '2rem',
                fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                padding: isMobile ? '0 0.5rem' : '0',
              }}>
                Let's discuss how our team can help bring your project to life
              </p>
              <Link href="/contact" style={{ display: 'inline-block', width: isMobile ? '100%' : 'auto' }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: isMobile ? '0.875rem 1.5rem' : '1rem 2.5rem',
                    fontSize: isMobile ? '0.875rem' : '1rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    backgroundColor: 'var(--color-secondary)',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                    transition: 'all 0.3s ease',
                    width: isMobile ? '100%' : 'auto',
                    boxSizing: 'border-box',
                  }}
                >
                  Get In Touch
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

