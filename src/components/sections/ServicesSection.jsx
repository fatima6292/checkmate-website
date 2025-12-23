'use client';

import React, { useState, useEffect } from 'react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Initialize with default indices (0 for all services)
  const [imageIndices, setImageIndices] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  // Cypentra Services with image arrays for rotation
  const services = [
    {
      id: 'fullstack',
      title: 'Full-Stack Development',
      subtitle: 'End-to-End Solutions',
      description: 'Complete development solutions from frontend to backend, delivering scalable applications that grow with your business.',
      features: [
        'React, Next.js & modern frameworks',
        'Node.js & Python backends',
        'RESTful APIs & GraphQL',
        'Database optimization'
      ],
      images: [
        '/images/Services/Full-stack-service/full-stack.jpg',
        '/images/Services/Full-stack-service/frontend.png',
        '/images/Services/Full-stack-service/backend-dev.png',
        '/images/Services/Full-stack-service/api-integration.jpg',
        '/images/Services/Full-stack-service/database.jpg',
      ],
      accent: '#3B82F6',
      route: '/services/fullstack-development',
    },
    {
      id: 'software',
      title: 'Software Engineering',
      subtitle: 'Custom Solutions',
      description: 'Custom software built with clean architecture and scalable design patterns for long-term success.',
      features: [
        'Custom backend systems',
        'Business logic architecture',
        'Third-party integrations',
        'Deployment pipelines'
      ],
      images: [
        '/images/Services/Software-Engineering/software-engineering.jpg',
        '/images/Services/Software-Engineering/system-artitecture.webp',
        '/images/Services/Software-Engineering/Agile.webp',
        '/images/Services/Software-Engineering/code-quality.png',
        '/images/Services/Software-Engineering/Performance-Optimization.webp',
      ],
      accent: '#8B5CF6',
      route: '/services/software-engineering',
    },
    {
      id: 'devops',
      title: 'DevOps & Cloud',
      subtitle: 'Infrastructure Excellence',
      description: 'Infrastructure automation and CI/CD pipelines ensuring reliable, scalable, and secure applications.',
      features: [
        'AWS, GCP & Azure setup',
        'CI/CD automation',
        '24/7 monitoring systems',
        'Infrastructure as Code'
      ],
      images: [
        '/images/Services/Deveops/cloud-infrastructure.webp',
        '/images/Services/Deveops/CI-CD.jpg',
        '/images/Services/Deveops/container-orchestration.jpg',
        '/images/Services/Deveops/Security-Monitoring.jpg',
        '/images/Services/Deveops/cloud-devops.png',
      ],
      accent: '#06B6D4',
      route: '/services/devops-cloud-security',
    },
    {
      id: 'security',
      title: 'Data Security',
      subtitle: 'Protection & Compliance',
      description: 'Comprehensive security solutions and compliance support to protect your data.',
      features: [
        'Security audits',
        'SOC 2 & GDPR compliance',
        'Encrypted backups',
        'Incident response'
      ],
      images: [
        '/images/Services/Compliance/compliance.webp',
        '/images/Services/Compliance/data-encryption.jpeg',
        '/images/Services/Compliance/access-control.jpg',
        '/images/Services/Compliance/secuirity-assesment.jpg',
        '/images/Services/Compliance/compliance-managment.avif',
      ],
      accent: '#10B981',
      route: '/services/data-security',
    },
    {
      id: 'ai',
      title: 'AI & Machine Learning',
      subtitle: 'Intelligent Automation',
      description: 'AI-powered solutions to automate processes, gain insights, and enhance user experiences.',
      features: [
        'Custom AI models',
        'NLP & chatbots',
        'Computer vision',
        'Predictive analytics'
      ],
      images: [
        '/images/Services/AI-ML/ai-ml.webp',
        '/images/Services/AI-ML/data-analytics.webp',
        '/images/Services/AI-ML/Deep-learning.png',
        '/images/Services/AI-ML/ml-modals.jpg',
        '/images/Services/AI-ML/AI-integrations.jpg',
      ],
      accent: '#F59E0B',
      route: '/services/ai-machine-learning',
    },
    {
      id: 'automation',
      title: 'Process Automation',
      subtitle: 'Workflow Optimization',
      description: 'Streamline workflows and eliminate manual tasks with intelligent automation solutions.',
      features: [
        'Workflow orchestration',
        'API integrations',
        'RPA solutions',
        'Automated testing'
      ],
      images: [
        '/images/Services/process-automation/processs-automation.jpeg',
        '/images/Services/process-automation/work-flow-automation.avif',
        '/images/Services/process-automation/RPA.webp',
        '/images/Services/process-automation/BPI.jpg',
        '/images/Services/process-automation/sceduling.webp',
      ],
      accent: '#EF4444',
      route: '/services/process-automation',
    }
  ];

  // Auto-rotate images for each service card
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndices(prev => {
        const newIndices = { ...prev };
        services.forEach((service, index) => {
          const currentIdx = prev[index] ?? 0;
          newIndices[index] = (currentIdx + 1) % service.images.length;
        });
        return newIndices;
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="services-section">
      {/* Background overlay */}
      <div className="bg-overlay" />

      {/* Animated gradient orb */}
      <div className="orb orb-3" />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Our Services</span>
          <h2 className="section-title">
            Professional
            <span className="title-highlight"> Packaged </span>
            Services
          </h2>
          <p className="section-description">
            Secure Development & Cloud Ops, powered by expert engineers.
            From full-stack applications to cloud infrastructure, we deliver scalable solutions.
          </p>
        </div>

        {/* Featured Service - Large Card */}
        <div className="featured-service">
          <div
            className="featured-card"
            style={{ '--accent': services[activeService].accent }}
          >
            <div className="featured-media-wrapper">
              {/* Featured Carousel */}
              <div className="carousel-container">
                {services[activeService].images.map((image, idx) => (
                  <img
                    key={`featured-${activeService}-${idx}`}
                    src={image}
                    alt={`${services[activeService].title} - ${idx + 1}`}
                    className={`carousel-image ${idx === imageIndices[activeService] ? 'active' : ''}`}
                  />
                ))}
                <div className="carousel-dots">
                  {services[activeService].images.map((_, idx) => (
                    <span
                      key={`featured-dot-${idx}`}
                      className={`dot ${idx === imageIndices[activeService] ? 'active' : ''}`}
                    />
                  ))}
                </div>
              </div>
              <div className="featured-media-overlay" />
              <div className="featured-badge">
                <span className="badge-dot" />
                Featured Service
              </div>
            </div>

            <div className="featured-content">
              <span className="featured-subtitle">{services[activeService].subtitle}</span>
              <h3 className="featured-title">{services[activeService].title}</h3>
              <p className="featured-description">{services[activeService].description}</p>

              <div className="featured-features">
                {services[activeService].features.map((feature, idx) => (
                  <div key={idx} className="featured-feature">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a href={services[activeService].route} className="featured-cta">
                <span>Explore Service</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${activeService === index ? 'active' : ''}`}
              style={{ '--accent': service.accent, '--delay': `${index * 0.1}s` }}
              onClick={() => setActiveService(index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-media-wrapper">
                {/* Card Carousel */}
                <div className="carousel-container">
                  {service.images.map((image, idx) => (
                    <img
                      key={`card-${index}-${idx}`}
                      src={image}
                      alt={`${service.title} - ${idx + 1}`}
                      className={`carousel-image ${idx === imageIndices[index] ? 'active' : ''}`}
                    />
                  ))}
                  <div className="carousel-dots">
                    {service.images.map((_, idx) => (
                      <span
                        key={`card-dot-${index}-${idx}`}
                        className={`dot ${idx === imageIndices[index] ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="card-media-overlay" />

                {/* Service number */}
                <span className="card-number">0{index + 1}</span>

                {/* Active indicator */}
                {activeService === index && (
                  <div className="active-indicator">
                    <span className="indicator-dot" />
                    Active
                  </div>
                )}
              </div>

              <div className="card-content">
                <h4 className="card-title">{service.title}</h4>
                <p className="card-subtitle">{service.subtitle}</p>

                <div className="card-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>

              {/* Hover border effect */}
              <div className="card-border" />
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .services-section {
          position: relative;
          padding: 120px 0;
          background-image: url(/formbg.png);
          background-size: auto;
          background-position: center;
          background-repeat: repeat;
          background-color: #ffffff;
          overflow: hidden;
          margin-top: -1px;
        }

        .bg-overlay {
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.88);
          z-index: 0;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          z-index: 0;
          animation: float 20s ease-in-out infinite;
        }

        .orb-3 {
          width: 250px;
          height: 250px;
          background: #8B5CF6;
          top: 50%;
          right: 20%;
          animation-delay: -14s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -30px) scale(1.05); }
          50% { transform: translate(-20px, 20px) scale(0.95); }
          75% { transform: translate(20px, 10px) scale(1.02); }
        }

        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-badge {
          display: inline-block;
          padding: 0.5rem 1.25rem;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          color: white;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 1.5rem;
          font-family: var(--font-syne), 'Syne', sans-serif;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 1.5rem;
          font-family: var(--font-sora), 'Sora', sans-serif;
          line-height: 1.2;
        }

        .title-highlight {
          background: linear-gradient(135deg, var(--color-secondary), var(--color-primary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-description {
          font-size: 1.15rem;
          max-width: 650px;
          margin: 0 auto;
          color: #475569;
          line-height: 1.7;
          font-family: var(--font-syne), 'Syne', sans-serif;
        }

        /* ==================== */
        /* CAROUSEL STYLES      */
        /* ==================== */
        .carousel-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #e2e8f0;
        }

        .carousel-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1.2s ease-in-out;
        }

        .carousel-image.active {
          opacity: 1;
          z-index: 1;
        }

        .carousel-dots {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          z-index: 10;
        }

        .carousel-dots .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
        }

        .carousel-dots .dot.active {
          background: white;
          width: 18px;
          border-radius: 3px;
        }

        /* ==================== */
        /* FEATURED CARD        */
        /* ==================== */
        .featured-service {
          margin-bottom: 3rem;
        }

        .featured-card {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .featured-media-wrapper {
          position: relative;
          height: 500px;
          overflow: hidden;
        }

        .featured-media-wrapper .carousel-container {
          height: 100%;
        }

        .featured-card:hover .carousel-container {
          transform: scale(1.02);
        }

        .featured-card .carousel-container {
          transition: transform 0.6s ease;
        }

        .featured-media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.1) 0%,
            transparent 50%,
            rgba(0, 0, 0, 0.2) 100%
          );
          z-index: 2;
          pointer-events: none;
        }

        .featured-badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #0F172A;
          font-family: var(--font-syne), 'Syne', sans-serif;
          z-index: 5;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: var(--accent);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }

        .featured-content {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .featured-subtitle {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 0.75rem;
          font-family: var(--font-syne), 'Syne', sans-serif;
        }

        .featured-title {
          font-size: 2rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 1rem;
          font-family: var(--font-sora), 'Sora', sans-serif;
        }

        .featured-description {
          font-size: 1.05rem;
          color: #64748B;
          line-height: 1.7;
          margin-bottom: 2rem;
          font-family: var(--font-syne), 'Syne', sans-serif;
        }

        .featured-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .featured-feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: #334155;
          font-family: var(--font-syne), 'Syne', sans-serif;
        }

        .featured-feature svg {
          color: var(--accent);
          flex-shrink: 0;
        }

        .featured-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: var(--accent);
          color: white;
          font-weight: 600;
          font-size: 1rem;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          width: fit-content;
          font-family: var(--font-syne), 'Syne', sans-serif;
        }

        .featured-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .featured-cta svg {
          transition: transform 0.3s ease;
        }

        .featured-cta:hover svg {
          transform: translateX(4px);
        }

        /* ==================== */
        /* SERVICE CARDS GRID   */
        /* ==================== */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1rem;
        }

        .service-card {
          position: relative;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeInUp 0.6s ease forwards;
          animation-delay: var(--delay);
          opacity: 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-card:hover,
        .service-card.active {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .service-card.active {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
        }

        .card-media-wrapper {
          position: relative;
          height: 140px;
          overflow: hidden;
        }

        .card-media-wrapper .carousel-container {
          height: 100%;
        }

        .service-card:hover .carousel-container {
          transform: scale(1.1);
        }

        .service-card .carousel-container {
          transition: transform 0.5s ease;
        }

        /* Smaller dots for card thumbnails */
        .card-media-wrapper .carousel-dots {
          bottom: 8px;
        }

        .card-media-wrapper .carousel-dots .dot {
          width: 4px;
          height: 4px;
        }

        .card-media-wrapper .carousel-dots .dot.active {
          width: 12px;
        }

        .card-media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.5) 0%,
            transparent 60%
          );
          z-index: 2;
          pointer-events: none;
        }

        .card-number {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: white;
          opacity: 0.8;
          font-family: var(--font-sora), 'Sora', sans-serif;
          z-index: 3;
        }

        .active-indicator {
          position: absolute;
          bottom: 0.75rem;
          left: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.75rem;
          background: white;
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: 600;
          color: #0F172A;
          font-family: var(--font-syne), 'Syne', sans-serif;
          z-index: 3;
        }

        .indicator-dot {
          width: 6px;
          height: 6px;
          background: var(--accent);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        .card-content {
          padding: 1rem;
          position: relative;
        }

        .card-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.25rem;
          font-family: var(--font-sora), 'Sora', sans-serif;
          line-height: 1.3;
        }

        .card-subtitle {
          font-size: 0.75rem;
          color: #64748B;
          font-family: var(--font-syne), 'Syne', sans-serif;
        }

        .card-arrow {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent);
          color: white;
          border-radius: 50%;
          opacity: 0;
          transform: translate(10px, 10px);
          transition: all 0.3s ease;
        }

        .service-card:hover .card-arrow,
        .service-card.active .card-arrow {
          opacity: 1;
          transform: translate(0, 0);
        }

        .card-border {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          border: 2px solid transparent;
          transition: border-color 0.3s ease;
          pointer-events: none;
        }

        .service-card:hover .card-border {
          border-color: var(--accent);
        }

        /* ==================== */
        /* RESPONSIVE           */
        /* ==================== */
        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 992px) {
          .featured-card {
            grid-template-columns: 1fr;
          }

          .featured-media-wrapper {
            height: 300px;
          }

          .featured-content {
            padding: 2rem;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 80px 0;
          }

          .container {
            padding: 0 1.25rem;
          }

          .section-header {
            margin-bottom: 3rem;
          }

          .section-badge {
            font-size: 0.75rem;
            padding: 0.4rem 1rem;
          }

          .section-description {
            font-size: 1rem;
          }

          .featured-media-wrapper {
            height: 250px;
          }

          .featured-content {
            padding: 1.5rem;
          }

          .featured-title {
            font-size: 1.5rem;
          }

          .featured-features {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }

          .featured-feature {
            font-size: 0.9rem;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }

          .card-media-wrapper {
            height: 100px;
          }

          .card-content {
            padding: 0.75rem;
          }

          .card-title {
            font-size: 0.8rem;
          }

          .card-subtitle {
            font-size: 0.7rem;
          }

          .card-arrow {
            width: 28px;
            height: 28px;
            bottom: 0.75rem;
            right: 0.75rem;
          }

          .card-arrow svg {
            width: 16px;
            height: 16px;
          }
        }

        @media (max-width: 480px) {
          .services-section {
            padding: 60px 0;
          }

          .featured-media-wrapper {
            height: 200px;
          }

          .featured-badge {
            font-size: 0.7rem;
            padding: 0.5rem 0.75rem;
          }

          .featured-title {
            font-size: 1.25rem;
          }

          .featured-description {
            font-size: 0.95rem;
          }

          .featured-cta {
            width: 100%;
            justify-content: center;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .card-media-wrapper {
            height: 80px;
          }

          .card-number {
            font-size: 0.65rem;
          }

          .active-indicator {
            font-size: 0.6rem;
            padding: 0.25rem 0.5rem;
          }

          .card-media-wrapper .carousel-dots {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;