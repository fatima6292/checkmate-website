'use client';

import React, { useState, useEffect, useRef } from 'react';

const AutoScrollImage = ({
  imageSrc,
  height = 400,
  duration = 10,
  direction = 'up', // 'up' or 'down'
  borderRadius = '12px',
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(typeof height === 'number' ? height : 400);

  useEffect(() => {
    if (containerRef.current && height === '100%') {
      // If height is 100%, get the actual computed height
      const updateHeight = () => {
        if (containerRef.current) {
          const computedHeight = containerRef.current.offsetHeight;
          if (computedHeight > 0) {
            setContainerHeight(computedHeight);
          }
        }
      };

      // Initial measurement
      updateHeight();

      // Update on resize
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    } else if (typeof height === 'number') {
      setContainerHeight(height);
    }
  }, [height]);

  const actualHeight = height === '100%' ? containerHeight : height;

  return (
    <div
      ref={containerRef}
      className={`auto-scroll-container ${className}`}
      style={{
        height: height === '100%' ? '100%' : `${height}px`,
        borderRadius: borderRadius,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageSrc}
        alt="Scrolling content"
        className={`auto-scroll-image ${direction}`}
        style={{
          animationDuration: `${duration}s`,
          animationPlayState: isHovered ? 'paused' : 'running'
        }}
      />

      <style jsx>{`
        .auto-scroll-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          background: #1a1a1a;
        }

        .auto-scroll-image {
          width: 100%;
          position: absolute;
          left: 0;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        /* Scroll Up - Image moves from bottom to top */
        .auto-scroll-image.up {
          top: 0;
          animation-name: scrollUp;
        }

        /* Scroll Down - Image moves from top to bottom */
        .auto-scroll-image.down {
          bottom: 0;
          animation-name: scrollDown;
        }

        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(calc(-100% + ${actualHeight}px));
          }
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(calc(-100% + ${actualHeight}px));
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AutoScrollImage;

