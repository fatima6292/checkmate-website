'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import ChessFooter from '@/components/layout/ChessFooter';

export default function CompanyPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '5+', label: 'Years Experience' }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Started with a vision to deliver exceptional software solutions'
    },
    {
      year: '2020',
      title: 'First Major Client',
      description: 'Successfully delivered our first enterprise-level project'
    },
    {
      year: '2022',
      title: 'Team Expansion',
      description: 'Grew our team to include specialized engineers and designers'
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Recognized for excellence in software development and innovation'
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
                Our Company
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
                Building Excellence,
                <br />
                <span style={{ color: 'var(--color-secondary)' }}>One Project at a Time</span>
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
                cypentra.dev is a software development company dedicated to delivering innovative, secure, and scalable solutions that help businesses thrive in the digital age.
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
              gap: isMobile ? '1.5rem' : '2rem',
            }}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  style={{
                    textAlign: 'center',
                    padding: isMobile ? '1.5rem' : '2rem',
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
                      fontSize: isMobile ? '2rem' : '3rem',
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

        {/* Mission & Vision Section */}
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
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: isMobile ? '2rem' : '3rem',
            }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  padding: isMobile ? '1.5rem' : '2.5rem',
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
                  marginBottom: '1.5rem',
                  color: 'var(--color-primary)',
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h2 style={{
                  fontSize: isMobile ? '1.5rem' : '2rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  color: 'var(--text-on-light)',
                  fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                }}>
                  Our Mission
                </h2>
                <p style={{
                  fontSize: isMobile ? '0.9375rem' : '1.0625rem',
                  color: 'var(--text-on-light-muted)',
                  lineHeight: 1.7,
                  fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                }}>
                  To empower businesses with cutting-edge software solutions that drive growth, enhance efficiency, and create lasting value. We combine technical expertise with strategic thinking to deliver solutions that exceed expectations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  padding: isMobile ? '1.5rem' : '2.5rem',
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
                  backgroundColor: 'var(--color-secondary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  color: 'var(--color-secondary)',
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h2 style={{
                  fontSize: isMobile ? '1.5rem' : '2rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  color: 'var(--text-on-light)',
                  fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                }}>
                  Our Vision
                </h2>
                <p style={{
                  fontSize: isMobile ? '0.9375rem' : '1.0625rem',
                  color: 'var(--text-on-light-muted)',
                  lineHeight: 1.7,
                  fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                }}>
                  To be the leading software development partner trusted by businesses worldwide for delivering innovative, secure, and scalable solutions that transform digital experiences and drive sustainable growth.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
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
                Our Journey
              </h2>
              <p style={{
                fontSize: isMobile ? '0.9375rem' : '1.125rem',
                maxWidth: '700px',
                margin: '0 auto',
                color: 'var(--text-on-light-muted)',
                fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
              }}>
                Key milestones in our company's growth
              </p>
            </motion.div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '1.5rem' : '2rem',
              position: 'relative',
            }}>
              {/* Timeline line */}
              {!isMobile && (
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: 0,
                  bottom: 0,
                  width: '2px',
                  backgroundColor: 'var(--color-secondary-light)',
                  transform: 'translateX(-50%)',
                  zIndex: 0,
                }} />
              )}

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : (index % 2 === 0 ? 'row' : 'row-reverse'),
                    alignItems: 'center',
                    gap: isMobile ? '1rem' : '2rem',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <div style={{
                    flex: 1,
                    padding: isMobile ? '1.5rem' : '2rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    maxWidth: isMobile ? '100%' : '45%',
                  }}>
                    <div style={{
                      display: 'inline-block',
                      padding: '0.375rem 0.875rem',
                      borderRadius: '50px',
                      backgroundColor: 'var(--color-secondary-light)',
                      color: 'var(--color-secondary)',
                      fontSize: isMobile ? '0.75rem' : '0.875rem',
                      fontWeight: 700,
                      marginBottom: '0.75rem',
                      fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                    }}>
                      {milestone.year}
                    </div>
                    <h3 style={{
                      fontSize: isMobile ? '1.125rem' : '1.375rem',
                      fontWeight: 700,
                      marginBottom: '0.5rem',
                      color: 'var(--text-on-light)',
                      fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                    }}>
                      {milestone.title}
                    </h3>
                    <p style={{
                      fontSize: isMobile ? '0.875rem' : '0.9375rem',
                      color: 'var(--text-on-light-muted)',
                      lineHeight: 1.6,
                      fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                    }}>
                      {milestone.description}
                    </p>
                  </div>

                  {!isMobile && (
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-secondary)',
                      border: '4px solid rgba(255, 255, 255, 0.95)',
                      boxShadow: '0 0 0 4px var(--color-secondary-light)',
                      flexShrink: 0,
                      zIndex: 2,
                    }} />
                  )}

                  <div style={{ flex: 1, maxWidth: isMobile ? '100%' : '45%' }} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <ChessFooter />
    </>
  );
}

