'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
  index,
  isMobile,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ marginBottom: isMobile ? '2rem' : '3rem' }}
    >
      <div
        style={{
          position: 'relative',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backgroundImage: 'url(/formbg.png)',
          backgroundSize: 'auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          border: `2px solid rgba(0, 0, 0, 0.08)`,
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* White overlay for subtle background effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          zIndex: 0,
          pointerEvents: 'none',
        }} />

        {/* Decorative corner accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '128px',
            height: '128px',
            background: `linear-gradient(135deg, var(--color-secondary-light), transparent)`,
            borderRadius: '0 0 0 100%',
            zIndex: 1,
          }}
        />

        {/* Project Number Badge */}
        <div
          style={{
            position: 'absolute',
            top: isMobile ? '1rem' : '1.5rem',
            left: isMobile ? '1rem' : '1.5rem',
            zIndex: 2,
          }}
        >
          <div
            style={{
              width: isMobile ? '48px' : '56px',
              height: isMobile ? '48px' : '56px',
              borderRadius: '12px',
              background: 'var(--color-secondary)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: isMobile ? '1rem' : '1.125rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: 0,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Image Section */}
          <div
            style={{
              position: 'relative',
              padding: isMobile ? '2rem' : '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.05))',
              order: isMobile ? 1 : (index % 2 === 0 ? 1 : 2),
            }}
          >
            {/* Laptop Mockup Frame */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: isMobile ? '100%' : '480px',
              }}
            >
              {/* Laptop Screen */}
              <div
                style={{
                  position: 'relative',
                  background: 'var(--color-secondary)',
                  borderRadius: '8px 8px 0 0',
                  padding: '8px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                }}
              >
                {/* Screen Bezel */}
                <div
                  style={{
                    background: '#1a1a1a',
                    borderRadius: '4px 4px 0 0',
                    padding: '4px',
                  }}
                >
                  {/* Top Bar (Camera dot and status bar) */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: '4px',
                      padding: '2px 0',
                    }}
                  >
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        background: '#4a4a4a',
                        borderRadius: '50%',
                      }}
                    />
                  </div>
                  {/* Screen Content */}
                  <div
                    style={{
                      position: 'relative',
                      background: '#ffffff',
                      borderRadius: '2px',
                      overflow: 'hidden',
                      aspectRatio: '16/9',
                    }}
                  >
                    <Image
                      src={imageUrl}
                      alt={title}
                      fill
                      quality={95}
                      style={{ objectFit: 'contain' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
              {/* Laptop Base */}
              <div
                style={{
                  position: 'relative',
                  height: '8px',
                  background: `linear-gradient(to bottom, var(--color-secondary), var(--color-secondary-dark))`,
                  borderRadius: '0 0 8px 8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: '0 0 0 0',
                    height: '1px',
                    background: 'var(--color-secondary)',
                  }}
                />
              </div>
              {/* Laptop Bottom */}
              <div
                style={{
                  height: '4px',
                  background: 'var(--color-secondary-dark)',
                  borderRadius: '0 0 4px 4px',
                  width: '90%',
                  margin: '0 auto',
                }}
              />
            </div>
          </div>

          {/* Content Section */}
          <div
            style={{
              padding: isMobile ? '2rem' : '3rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              order: isMobile ? 2 : (index % 2 === 0 ? 2 : 1),
            }}
          >
            {/* Top accent line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '64px',
                height: '4px',
                background: 'var(--color-secondary)',
                borderRadius: '0 0 4px 0',
              }}
            />

            <div style={{ flex: 1 }}>
              {/* Category/Type Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '1rem',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--color-secondary)',
                  }}
                />
                <span
                  style={{
                    fontSize: isMobile ? '0.6875rem' : '0.75rem',
                    fontWeight: 600,
                    color: 'var(--color-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  Featured Project
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: isMobile ? '1.5rem' : '2rem',
                  fontWeight: 700,
                  color: 'var(--text-on-light)',
                  marginBottom: '1rem',
                  lineHeight: 1.2,
                  fontFamily: "var(--font-sora), 'Sora', var(--font-dm-sans), 'DM Sans', sans-serif",
                }}
              >
                {title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: 'var(--text-on-light-muted)',
                  lineHeight: 1.7,
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  marginBottom: '1.5rem',
                  fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                {description}
              </p>

              {/* Tech Stack Tags */}
              <div style={{ marginBottom: '1.5rem' }}>
                <p
                  style={{
                    fontSize: isMobile ? '0.6875rem' : '0.75rem',
                    fontWeight: 600,
                    color: 'var(--text-on-light-muted)',
                    marginBottom: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                  }}
                >
                  Tech Stack
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                  }}
                >
                  {tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      style={{
                        padding: isMobile ? '6px 12px' : '8px 16px',
                        background: `linear-gradient(135deg, var(--color-secondary-light), var(--color-primary-light))`,
                        color: 'var(--color-secondary)',
                        fontSize: isMobile ? '0.75rem' : '0.8125rem',
                        fontWeight: 500,
                        borderRadius: '8px',
                        border: `1px solid var(--color-secondary-light)`,
                        fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                paddingTop: '1.5rem',
                borderTop: `2px solid rgba(0, 0, 0, 0.08)`,
              }}
            >
              {githubUrl && (
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: isMobile ? '10px 20px' : '12px 24px',
                      background: 'rgba(0, 0, 0, 0.04)',
                      color: 'var(--text-on-light)',
                      borderRadius: '12px',
                      fontWeight: 500,
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: isMobile ? '0.875rem' : '0.9375rem',
                      fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'var(--color-secondary)';
                      e.target.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(0, 0, 0, 0.04)';
                      e.target.style.color = 'var(--text-on-light)';
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <span>View Code</span>
                  </motion.button>
                </Link>
              )}

              {liveUrl && (
                <Link
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: isMobile ? '10px 20px' : '12px 24px',
                      background: 'var(--color-secondary)',
                      color: '#ffffff',
                      borderRadius: '12px',
                      fontWeight: 500,
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: isMobile ? '0.875rem' : '0.9375rem',
                      fontFamily: "var(--font-syne), 'Syne', var(--font-bricolage), 'Bricolage Grotesque', sans-serif",
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'var(--color-secondary-dark)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'var(--color-secondary)';
                    }}
                  >
                    <span>Live Demo</span>
                    <svg
                      width="14"
                      height="14"
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
                  </motion.button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;

