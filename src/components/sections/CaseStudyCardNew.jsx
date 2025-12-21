'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AutoScrollImage from './AutoScrollImage';

const CaseStudyCardNew = ({
  title,
  description,
  tags,
  category,
  videoUrl,
  scrollImageUrl,
  imageUrl,
  caseStudyUrl,
  liveUrl,
  index,
  isMobile,
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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
          {/* Media Section */}
          <div
            style={{
              position: 'relative',
              padding: isMobile ? '2rem' : '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.05))',
            }}
          >
            {videoUrl ? (
              /* Video Display */
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: isMobile ? '100%' : '500px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  background: '#000',
                }}
              >
                <video
                  src={videoUrl}
                  controls
                  autoPlay={false}
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                />
              </div>
            ) : scrollImageUrl ? (
              /* Auto-scroll Image Display */
              <div style={{ width: '100%', maxWidth: isMobile ? '100%' : '500px' }}>
                <AutoScrollImage imageUrl={scrollImageUrl} isMobile={isMobile} />
              </div>
            ) : imageUrl ? (
              /* Regular Image Display */
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: isMobile ? '100%' : '500px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                }}
              >
                <img
                  src={imageUrl}
                  alt={title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </div>
            ) : null}
          </div>

          {/* Content Section */}
          <div
            style={{
              padding: isMobile ? '2rem' : '3rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
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
              {/* Category Badge */}
              {category && (
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
                    {category}
                  </span>
                </div>
              )}

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
              {tags && tags.length > 0 && (
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
              )}
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
              {caseStudyUrl && (
                <Link
                  href={caseStudyUrl}
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
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    <span>View Case Study</span>
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
                    <span>View Live Site</span>
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

export default CaseStudyCardNew;

