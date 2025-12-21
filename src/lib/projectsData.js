export const projectsData = [
  {
    id: 1,
    title: "Terzo.ai",
    description:
      "Architected AI chatbot backend with LangChain for RAG pipelines and conversational AI agents. Implemented vector embeddings with Pinecone for semantic search and context retrieval. Built real-time chat interface using WebSockets with Redis pub/sub for message broadcasting.",
    tags: ["NestJS", "PostgreSQL", "LangChain", "OpenAI API", "Redis", "Docker", "Pinecone", "WebSockets"],
    imageUrl: "/mockup/terzo.ai.png",
    liveUrl: "https://terzo.ai",
    githubUrl: "",
    type: "ai",
    keyFeatures: [
      "AI chatbot with LangChain RAG pipelines",
      "Vector embeddings using Pinecone for semantic search",
      "Real-time chat with WebSockets and Redis pub/sub",
      "Queue-based architecture with Bull and Redis",
      "Async AI job processing with progress tracking"
    ],
    techDetails: "Built with NestJS backend architecture and PostgreSQL database. Implements LangChain for conversational AI and RAG pipelines. Uses Pinecone vector database for semantic search. Real-time communication through WebSockets and Redis pub/sub. Queue-based async processing with Bull."
  },
  {
    id: 2,
    title: "SimplyFlow",
    description:
      "Built workflow automation engine with n8n integration for custom trigger and action nodes. Implemented LangGraph-based AI agents for intelligent workflow decision making. Designed event-driven architecture with PostgreSQL triggers and real-time subscriptions.",
    tags: ["NestJS", "PostgreSQL", "n8n", "LangGraph", "Docker", "AWS", "Event-Driven"],
    imageUrl: "/mockup/simplyflow.com.png",
    liveUrl: "https://simplyflow.me",
    githubUrl: "",
    type: "backend",
    keyFeatures: [
      "Workflow automation engine with n8n integration",
      "LangGraph-based AI agents for intelligent decisions",
      "Event-driven architecture with PostgreSQL triggers",
      "Real-time subscriptions for workflow updates",
      "Containerized microservices on AWS ECS with auto-scaling"
    ],
    techDetails: "Developed using NestJS with PostgreSQL for data persistence. Integrated n8n for workflow automation with custom nodes. Uses LangGraph for AI-powered workflow intelligence. Deployed as containerized microservices on AWS ECS with auto-scaling and load balancing."
  },
  {
    id: 3,
    title: "Learning Management System",
    description:
      "Built comprehensive LMS backend with course management, enrollment, and progress tracking APIs. Implemented real-time notifications and live class features using WebSockets and Redis. Designed video streaming pipeline with AWS S3 and CloudFront.",
    tags: ["NestJS", "PostgreSQL", "WebSockets", "Redis", "AWS S3", "CloudFront", "CASL"],
    imageUrl: "/mockup/Learning-Management-System.jpg",
    liveUrl: "",
    githubUrl: "",
    type: "backend",
    keyFeatures: [
      "Course management and enrollment system",
      "Progress tracking with comprehensive APIs",
      "Real-time notifications using WebSockets and Redis",
      "Video streaming with AWS S3 and CloudFront",
      "RBAC system for admin, instructor, and student roles"
    ],
    techDetails: "Backend built with NestJS and PostgreSQL. Real-time features using WebSockets and Redis for notifications and live classes. Video content delivery through AWS S3 and CloudFront. RBAC implementation using CASL for permission management across different user roles."
  },
  {
    id: 4,
    title: "QuizApp Competition Platform",
    description:
      "Architected real-time quiz competition backend supporting 1000+ concurrent users. Implemented live leaderboard updates using WebSockets and Redis sorted sets. Built anti-cheating mechanisms with session validation and answer submission timeouts.",
    tags: ["NestJS", "PostgreSQL", "WebSockets", "Redis", "Bull", "Real-time"],
    imageUrl: "/mockup/quizapp.webp",
    liveUrl: "",
    githubUrl: "",
    type: "backend",
    keyFeatures: [
      "Real-time quiz platform for 1000+ concurrent users",
      "Live leaderboard with Redis sorted sets",
      "Anti-cheating mechanisms and session validation",
      "Answer submission timeouts",
      "Question bank with randomization and difficulty selection"
    ],
    techDetails: "Built with NestJS and PostgreSQL for robust backend. Real-time updates via WebSockets. Redis sorted sets for efficient leaderboard ranking. Bull queue for job processing. Implements security features like session validation and timeouts to prevent cheating."
  },
  {
    id: 5,
    title: "SafeStreet",
    description:
      "Developed geospatial backend using PostGIS for location-based incident queries and proximity alerts. Implemented real-time notification system using WebSockets and Redis pub/sub. Built RBAC system with CASL for admin, moderator, and user permission levels.",
    tags: ["NestJS", "PostgreSQL", "PostGIS", "Redis", "WebSockets", "Docker", "CASL"],
    imageUrl: "/mockup/safestreet.com.au.png",
    liveUrl: "https://safestreet.com.au",
    githubUrl: "",
    type: "backend",
    keyFeatures: [
      "Geospatial queries using PostGIS",
      "Location-based incident reporting and proximity alerts",
      "Real-time notifications with WebSockets and Redis pub/sub",
      "RBAC system using CASL for different permission levels",
      "Efficient caching reducing database load by 40%"
    ],
    techDetails: "Backend developed with NestJS and PostgreSQL with PostGIS extension for geospatial data. Real-time notification system using WebSockets and Redis pub/sub. RBAC implementation with CASL for admin, moderator, and user roles. Redis caching strategies achieving 40% reduction in database load."
  },
  {
    id: 6,
    title: "4Corners",
    description:
      "Built e-commerce backend with inventory management, order processing, and payment integration. Implemented Stripe webhook handlers for secure payment processing and subscription management. Designed optimistic locking for concurrent inventory updates.",
    tags: ["NestJS", "PostgreSQL", "Stripe API", "Redis", "Docker", "AWS S3"],
    imageUrl: "/mockup/4corners.png",
    liveUrl: "https://4corners.com",
    githubUrl: "",
    type: "backend",
    keyFeatures: [
      "E-commerce backend with inventory management",
      "Stripe integration for payments and subscriptions",
      "Optimistic locking preventing overselling",
      "File upload service with AWS S3 presigned URLs",
      "Image optimization pipeline"
    ],
    techDetails: "Developed with NestJS backend and PostgreSQL database. Stripe API integration for secure payment processing and subscription management. Implements optimistic locking for concurrent inventory updates. AWS S3 for file uploads with presigned URLs and image optimization."
  },
  {
    id: 7,
    title: "AutoPostMD",
    description:
      "Architected social media scheduling backend with Facebook Graph, Instagram Business, and LinkedIn APIs. Implemented job scheduling system with Bull queues for reliable post publishing. Built OAuth 2.0 integration flows for secure third-party platform authentication.",
    tags: ["Node.js", "PostgreSQL", "Facebook API", "Instagram API", "LinkedIn API", "Redis", "Bull"],
    imageUrl: "/mockup/fyp.png",
    liveUrl: "https://autopostmd.com",
    githubUrl: "",
    type: "backend",
    keyFeatures: [
      "Social media scheduling across multiple platforms",
      "Job scheduling with Bull queues for reliability",
      "OAuth 2.0 integration for secure authentication",
      "Rate limiting and retry mechanisms",
      "Support for Facebook, Instagram, and LinkedIn"
    ],
    techDetails: "Built with Node.js and PostgreSQL. Integrates Facebook Graph API, Instagram Business API, and LinkedIn API. Bull queue system for scheduled post publishing. OAuth 2.0 authentication flows for secure platform connections. Implements rate limiting and retry mechanisms for API quota management."
  },
  {
    id: 8,
    title: "GuardXP",
    description:
      "Architecting enterprise security operations platform with multi-tenant data isolation. Implementing fine-grained ABAC authorization using CASL with dynamic policy evaluation. Building real-time incident tracking with WebSocket connections and event sourcing.",
    tags: ["NestJS", "PostgreSQL", "CASL", "Docker", "AWS", "Turborepo", "WebSockets"],
    imageUrl: "/mockup/guardxp.net.png",
    liveUrl: "https://guardxp.net",
    githubUrl: "",
    type: "backend",
    keyFeatures: [
      "Multi-tenant enterprise security platform",
      "Fine-grained ABAC authorization with CASL",
      "Real-time incident tracking with WebSockets",
      "Event sourcing architecture",
      "Monorepo with shared libraries using Turborepo"
    ],
    techDetails: "Enterprise platform built with NestJS and PostgreSQL. Multi-tenant data isolation with row-level security. CASL for attribute-based access control with dynamic policies. Real-time incident tracking via WebSockets. Monorepo architecture using Turborepo for shared NestJS modules. In Progress."
  },
  {
    id: 9,
    title: "FitnessAds.ai",
    description:
      "Building AI-powered ad generation backend with LangChain RAG for personalized marketing content. Implementing AI chatbot for fitness consultation using LangGraph agent workflows. Designing analytics data pipeline for campaign performance tracking.",
    tags: ["NestJS", "PostgreSQL", "LangChain", "OpenAI API", "Docker", "LangGraph"],
    imageUrl: "/mockup/fitnessads.png",
    liveUrl: "https://fitnessads.ai",
    githubUrl: "",
    type: "ai",
    keyFeatures: [
      "AI-powered ad generation with LangChain RAG",
      "Fitness consultation chatbot using LangGraph",
      "Analytics pipeline for campaign performance",
      "Async job processing for bulk ad generation",
      "Progress tracking for ad generation jobs"
    ],
    techDetails: "Backend built with NestJS and PostgreSQL. LangChain RAG for personalized marketing content generation. LangGraph agent workflows for fitness consultation chatbot. Analytics data pipeline for tracking campaign performance. Async job processing with progress tracking. In Progress."
  }
];

