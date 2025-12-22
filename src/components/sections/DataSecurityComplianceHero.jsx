'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const DataSecurityComplianceHero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="data-security-hero-section"
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 0 80px',
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
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.05) 100%)',
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
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.08) 0%, rgba(15, 23, 42, 0.03) 100%)',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
          <div
            className="data-security-hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Our Services Button */}
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
                  cursor: 'pointer',
                  marginBottom: '2rem',
                  fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  transition: 'all 0.3s ease',
                }}
               
              >
                Our Services
              </button>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="data-security-hero-heading"
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
              <span style={{ display: 'block', color: '#0F172A' }}>Data Security</span>
              <span
                style={{
                  display: 'block',
                  color: '#0F172A',
                }}
              >
                & Compliance
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="data-security-hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.8',
                color: '#4A5568',
                marginBottom: '2.5rem',
                maxWidth: '550px',
                fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
              }}
            >
              Protect your sensitive data and ensure regulatory compliance. Our comprehensive security solutions safeguard your information assets and help you meet industry standards and regulations.
            </motion.p>

            {/* Get a Quote Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link href="/contact">
                <motion.button
                  className="data-security-hero-cta-button"
                  whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(15, 23, 42, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '1rem 2.5rem',
                    borderRadius: '8px',
                    background: '#0F172A',
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.2)',
                  }}
                >
                  Get a Quote
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ transition: 'transform 0.3s ease' }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="data-security-hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              position: 'relative',
              height: '600px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
            }}
          >
            {/* Animated Border Elements */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: '#0F172A',
                transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left center',
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: 20,
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100%',
                background: '#0F172A',
                transform: isHovered ? 'scaleY(1)' : 'scaleY(0)',
                transformOrigin: 'top center',
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
                zIndex: 20,
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '4px',
                height: '100%',
                background: '#0F172A',
                transform: isHovered ? 'scaleY(1)' : 'scaleY(0)',
                transformOrigin: 'top center',
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
                zIndex: 20,
                pointerEvents: 'none',
              }}
            />
            {/* Image Container */}
            <div
              style={{
                width: '100%',
                height: '100%',
                background: '#0F172A',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '20px',
                overflow: 'hidden',
              }}
            >
              {/* Code Pattern Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: `
                    repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 2px, rgba(255,255,255,0.03) 3px),
                    repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 2px, rgba(255,255,255,0.03) 3px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Decorative Code Lines */}
              <div
                style={{
                  position: 'absolute',
                  top: '20%',
                  left: '10%',
                  color: 'rgba(255, 255, 255, 0.1)',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  lineHeight: '1.8',
                }}
              >
                <div>{'encrypt.data()'}</div>
                <div>{'audit.compliance()'}</div>
                <div>{'protect.assets()'}</div>
                <div>{'secure.access()'}</div>
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '25%',
                  right: '15%',
                  color: 'rgba(255, 255, 255, 0.1)',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  lineHeight: '1.8',
                }}
              >
                <div>{'gdpr.comply()'}</div>
                <div>{'security.scan()'}</div>
                <div>{'compliance.verify()'}</div>
              </div>

              {/* Overlay Text Bar */}
              <div
                style={{
                  position: 'absolute',
                  top: '40px',
                  left: 0,
                  right: 0,
                  background: 'rgba(0, 0, 0, 0.6)',
                  backdropFilter: 'blur(10px)',
                  padding: '1.5rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                  }}
                >
                  Data Security
                </div>
                <div
                  style={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                  }}
                >
                  Compliance
                </div>
              </div>

              {/* Center Icon/Visual */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '2rem',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.9)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          .data-security-hero-section {
            padding: 100px 0 60px !important;
          }
          
          .data-security-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          
          .data-security-hero-heading {
            font-size: 3rem !important;
          }
          
          .data-security-hero-image {
            height: 400px !important;
          }
        }
        
        @media (max-width: 768px) {
          .data-security-hero-section {
            padding: 80px 0 40px !important;
          }
          
          .data-security-hero-heading {
            font-size: 2.5rem !important;
          }
          
          .data-security-hero-description {
            font-size: 1rem !important;
          }
          
          .data-security-hero-image {
            height: 350px !important;
          }
        }
        
        @media (max-width: 480px) {
          .data-security-hero-heading {
            font-size: 2rem !important;
          }
          
          .data-security-hero-cta-button {
            padding: 0.875rem 2rem !important;
            font-size: 0.9375rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default DataSecurityComplianceHero;

