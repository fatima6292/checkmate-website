'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import ChessFooter from '@/components/layout/ChessFooter';

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const aboutCards = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: 'Our Team',
      description: 'Meet the expert engineers and strategists behind cypentra.dev',
      link: '/about/team',
      color: 'var(--color-primary)'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18"></path>
          <path d="M5 21V7l8-4v18"></path>
          <path d="M19 21V11l-6-4"></path>
          <line x1="9" y1="9" x2="9" y2="9"></line>
          <line x1="9" y1="12" x2="9" y2="12"></line>
          <line x1="9" y1="15" x2="9" y2="15"></line>
          <line x1="9" y1="18" x2="9" y2="18"></line>
        </svg>
      ),
      title: 'Company',
      description: 'Learn about our mission, values, and commitment to excellence',
      link: '/about/company',
      color: 'var(--color-secondary)'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M12 1v6m0 6v6m9-9h-6m-6 0H3m15.364 6.364l-4.243-4.243m-4.242 0L5.636 17.364m12.728 0l-4.243-4.243m-4.242 0L5.636 6.636"></path>
        </svg>
      ),
      title: 'Our Process',
      description: 'Discover how we deliver exceptional software solutions',
      link: '/about/process',
      color: 'var(--color-primary)'
    }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We prioritize code quality, security, and maintainability in every project.'
    },
    {
      title: 'Client-Centric',
      description: 'Your success is our success. We work closely with you to achieve your goals.'
    },
    {
      title: 'Innovation',
      description: 'We stay ahead of the curve with cutting-edge technologies and best practices.'
    },
    {
      title: 'Transparency',
      description: 'Clear communication and honest feedback throughout the development process.'
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
            padding: isMobile ? '8rem 0 3rem' : '10rem 0 4rem',
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
                About Us
              </motion.h6>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-text"
                style={{
                  fontSize: isMobile ? '2rem' : '3.5rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  color: 'var(--text-on-light)',
                  fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                  lineHeight: 1.2,
                }}
              >
                Building the Future of
                <br />
                <span style={{ color: 'var(--color-secondary)' }}>Software Development</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  fontSize: isMobile ? '1rem' : '1.25rem',
                  maxWidth: '700px',
                  margin: '0 auto',
                  color: 'var(--text-on-light-muted)',
                  lineHeight: 1.6,
                  fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                }}
              >
                We are a team of passionate engineers and strategists dedicated to delivering exceptional software solutions that drive business growth and innovation.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* About Cards Section */}
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
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: isMobile ? '1.5rem' : '2rem',
              marginBottom: isMobile ? '3rem' : '4rem',
            }}>
              {aboutCards.map((card, index) => (
                <Link key={index} href={card.link} style={{ textDecoration: 'none' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    style={{
                      padding: isMobile ? '1.5rem' : '2rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      borderRadius: '16px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                      border: '1px solid rgba(0, 0, 0, 0.06)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      height: '100%',
                    }}
                  >
                    <div style={{
                      width: isMobile ? '50px' : '60px',
                      height: isMobile ? '50px' : '60px',
                      borderRadius: '12px',
                      backgroundColor: `${card.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                      color: card.color,
                    }}>
                      {card.icon}
                    </div>
                    <h3 style={{
                      fontSize: isMobile ? '1.125rem' : '1.25rem',
                      fontWeight: 700,
                      marginBottom: '0.75rem',
                      color: 'var(--text-on-light)',
                      fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                    }}>
                      {card.title}
                    </h3>
                    <p style={{
                      fontSize: isMobile ? '0.875rem' : '0.9375rem',
                      color: 'var(--text-on-light-muted)',
                      lineHeight: 1.6,
                      fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                      marginBottom: '1rem',
                    }}>
                      {card.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: card.color,
                      fontWeight: 600,
                      fontSize: isMobile ? '0.875rem' : '0.9375rem',
                      fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                    }}>
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
                        style={{ marginLeft: '0.5rem' }}
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

        {/* Our Values Section */}
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
                Our Core Values
              </h2>
              <p style={{
                fontSize: isMobile ? '0.9375rem' : '1.125rem',
                maxWidth: '700px',
                margin: '0 auto',
                color: 'var(--text-on-light-muted)',
                fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
              }}>
                The principles that guide everything we do
              </p>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: isMobile ? '1.5rem' : '2rem',
            }}>
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  style={{
                    padding: isMobile ? '1.5rem' : '2rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    borderLeft: `4px solid var(--color-secondary)`,
                  }}
                >
                  <h3 style={{
                    fontSize: isMobile ? '1.125rem' : '1.25rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    color: 'var(--text-on-light)',
                    fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                  }}>
                    {value.title}
                  </h3>
                  <p style={{
                    fontSize: isMobile ? '0.875rem' : '0.9375rem',
                    color: 'var(--text-on-light-muted)',
                    lineHeight: 1.6,
                    fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                  }}>
                    {value.description}
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
                padding: isMobile ? '2rem 1rem' : '3rem 2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(0, 0, 0, 0.06)',
              }}
            >
              <h2 style={{
                fontSize: isMobile ? '1.75rem' : '2.5rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: 'var(--text-on-light)',
                fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
              }}>
                Ready to Work Together?
              </h2>
              <p style={{
                fontSize: isMobile ? '0.9375rem' : '1.125rem',
                maxWidth: '600px',
                margin: '0 auto 2rem',
                color: 'var(--text-on-light-muted)',
                fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
              }}>
                Let's discuss how we can help bring your vision to life
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'var(--color-primary)' }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: isMobile ? '0.875rem 1.75rem' : '1rem 2.5rem',
                    backgroundColor: 'var(--color-secondary)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: isMobile ? '0.9375rem' : '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.2)',
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

