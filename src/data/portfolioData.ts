import type { 
  PersonalInfo, 
  SkillItem, 
  ProjectItem, 
  SolutionCategory, 
  LearningModule, 
  EngineeringPrinciple 
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Adil Khan',
  location: 'Landikotal, Khyber Pakhtunkhwa, Pakistan',
  education: 'Completed FSc (Intermediate Education)',
  currentStage: 'Beginner AI Engineer & Independent Builder',
  currentProgram: 'SMIT Agentic AI Engineer Program',
  duration: '12-Month Intensive Curriculum',
  mainHeadline: 'Building Intelligent Automation for the Future of E-commerce.',
  supportingHeadline:
    "I'm Adil Khan, an aspiring AI Engineer focused on building AI-powered automation, intelligent agents, and scalable systems for modern e-commerce businesses.",
  shortIntroduction:
    'I am developing my engineering skills through Python, workflow automation, APIs, and Agentic AI. My focus is on transforming repetitive e-commerce operations into intelligent, efficient, and scalable business systems.',
  professionalIdentity: [
    'AI Automation',
    'Agentic AI Systems',
    'E-commerce Engineering',
    'Shopify Automation'
  ],
  primaryFocusAreas: [
    {
      title: 'AI Automation',
      description: 'Designing deterministic workflows, webhooks, and API pipelines that eradicate redundant manual store operations.',
      tag: 'Workflows & APIs'
    },
    {
      title: 'Agentic AI Systems',
      description: 'Engineering goal-driven agents with tool calling, context engineering, and decision loops for dynamic e-commerce tasks.',
      tag: 'Autonomous Agents'
    },
    {
      title: 'E-commerce Engineering',
      description: 'Focusing on Shopify and Shopify Plus architecture, catalog intelligence, and end-to-end customer lifecycle automation.',
      tag: 'Shopify & Retail'
    }
  ],
  contact: {
    githubUrl: 'https://github.com/adilkhan2428/Adil-Porfolio',
    linkedinUrl: 'https://www.linkedin.com/in/adil-khan-265a08405/',
    phone: '03279158970',
    formattedPhone: '+92 327 9158970',
    email: 'adilkha2428@gmail.com',
    locationDisplay: 'Landikotal, Khyber Pakhtunkhwa, Pakistan'
  },
  values: [
    {
      title: 'Engineering Mindset',
      description: 'Prioritizing architectural clarity, defensive error handling, and reliability over quick fragile hacks.',
      icon: 'Cpu'
    },
    {
      title: 'Continuous Learning',
      description: 'Iterating through daily coding labs, deep documentation dives, and the 12-month SMIT Agentic curriculum.',
      icon: 'GraduationCap'
    },
    {
      title: 'Business Problem Solving',
      description: 'Always identifying operational bottlenecks, merchant pains, and actual business ROI before picking a tool.',
      icon: 'Target'
    }
  ]
};

export const technicalSkills: SkillItem[] = [
  // Category 1: Current Foundations
  {
    id: 'f-python',
    name: 'Python',
    category: 'Current Foundations',
    status: 'Currently Learning',
    description: 'Core syntax, data structures, scripting, clean functions, and scripting automation.',
    relevanceToEcommerce: 'Data manipulation, backend scripts, and autonomous agent loops.'
  },
  {
    id: 'f-oop',
    name: 'Object-Oriented Programming',
    category: 'Current Foundations',
    status: 'Currently Learning',
    description: 'Classes, encapsulation, inheritance, modularity, and clean architectural design.',
    relevanceToEcommerce: 'Structuring robust multi-agent entities and business logic.'
  },
  {
    id: 'f-numpy',
    name: 'NumPy',
    category: 'Current Foundations',
    status: 'Currently Learning',
    description: 'Vectorized operations, array manipulations, and mathematical foundation.',
    relevanceToEcommerce: 'Numerical analysis of order metrics and price elasticity.'
  },
  {
    id: 'f-pandas',
    name: 'Pandas',
    category: 'Current Foundations',
    status: 'Practicing Through Projects',
    description: 'Dataframe processing, data cleaning, filtering, aggregation, and CSV parsing.',
    relevanceToEcommerce: 'Processing multi-thousand SKU catalog feeds and order history exports.'
  },
  {
    id: 'f-git',
    name: 'Git & GitHub',
    category: 'Current Foundations',
    status: 'Practicing Through Projects',
    description: 'Version control, branch management, collaborative workflows, and repository hygiene.',
    relevanceToEcommerce: 'Version-controlled automation scripts and infrastructure as code.'
  },
  {
    id: 'f-prompt',
    name: 'Prompt Engineering',
    category: 'Current Foundations',
    status: 'Practicing Through Projects',
    description: 'Few-shot prompting, structured JSON outputs, system persona design, and constraint framing.',
    relevanceToEcommerce: 'Extracting clean JSON attributes from messy supplier product sheets.'
  },
  {
    id: 'f-fundamentals',
    name: 'AI Fundamentals',
    category: 'Current Foundations',
    status: 'Currently Learning',
    description: 'Foundations of generative models, token economics, temperature controls, and model benchmarks.',
    relevanceToEcommerce: 'Evaluating which model is cost-effective for high-volume store tasks.'
  },

  // Category 2: Automation Technologies
  {
    id: 'a-n8n',
    name: 'n8n',
    category: 'Automation Technologies',
    status: 'Practicing Through Projects',
    description: 'Self-hosted & cloud workflow orchestration, conditional routing, loops, and error triggers.',
    relevanceToEcommerce: 'Connecting Shopify webhooks to warehouse APIs, Slack, and email notifications.'
  },
  {
    id: 'a-webhooks',
    name: 'Webhooks',
    category: 'Automation Technologies',
    status: 'Practicing Through Projects',
    description: 'Event-driven architecture, webhook verification, payload validation, and retry logic.',
    relevanceToEcommerce: 'Triggering real-time automations on orders/create and inventory/levels_update.'
  },
  {
    id: 'a-rest',
    name: 'REST APIs',
    category: 'Automation Technologies',
    status: 'Practicing Through Projects',
    description: 'HTTP methods, authorization headers, rate limiting handling, and endpoint consumption.',
    relevanceToEcommerce: 'Interfacing with Shopify Admin REST API, Klaviyo, and shipping carriers.'
  },
  {
    id: 'a-json',
    name: 'JSON',
    category: 'Automation Technologies',
    status: 'Practicing Through Projects',
    description: 'Data serialization, deep schema traversal, JSON schema validation, and transformations.',
    relevanceToEcommerce: 'Formatting payloads between disparate e-commerce databases and AI agents.'
  },
  {
    id: 'a-workflow',
    name: 'Workflow Design',
    category: 'Automation Technologies',
    status: 'Practicing Through Projects',
    description: 'State machine logic, idempotent operations, rollback strategies, and modular flow separation.',
    relevanceToEcommerce: 'Preventing duplicate order processing or accidental multi-shipments.'
  },
  {
    id: 'a-shopify-flow',
    name: 'Shopify Flow',
    category: 'Automation Technologies',
    status: 'Currently Learning',
    description: 'Native Shopify automation triggers, conditions, actions, and custom app triggers.',
    relevanceToEcommerce: 'Automating high-risk order tagging and VIP customer tier assignments.'
  },
  {
    id: 'a-integrations',
    name: 'API Integrations',
    category: 'Automation Technologies',
    status: 'Currently Learning',
    description: 'End-to-end integration mapping between e-commerce ERPs, CRMs, and store frontends.',
    relevanceToEcommerce: 'Bridging Shopify stores to external logistics and marketing pipelines.'
  },

  // Category 3: Agentic AI — Learning Roadmap
  {
    id: 'ag-llm',
    name: 'LLM Integration',
    category: 'Agentic AI — Learning Roadmap',
    status: 'Currently Learning',
    description: 'Interfacing with OpenAI, Anthropic Claude, and Gemini APIs with structured schemas.',
    relevanceToEcommerce: 'Semantic customer query resolution and natural language product search.'
  },
  {
    id: 'ag-agent-dev',
    name: 'AI Agent Development',
    category: 'Agentic AI — Learning Roadmap',
    status: 'Currently Learning',
    description: 'Building autonomous loops with ReAct patterns, thought-action-observation cycles.',
    relevanceToEcommerce: 'Autonomous return policy triage and refund eligibility verification.'
  },
  {
    id: 'ag-tool-calling',
    name: 'Tool Calling',
    category: 'Agentic AI — Learning Roadmap',
    status: 'Currently Learning',
    description: 'Function calling schemas, argument generation, and tool execution error recovery.',
    relevanceToEcommerce: 'Equipping agents to query live inventory levels or track carrier tracking numbers.'
  },
  {
    id: 'ag-context',
    name: 'Context Engineering',
    category: 'Agentic AI — Learning Roadmap',
    status: 'Currently Learning',
    description: 'Dynamic prompt assembly, window budgeting, message history pruning, and few-shot injection.',
    relevanceToEcommerce: 'Providing the agent with customer order history without blowing token budgets.'
  },
  {
    id: 'ag-sdks',
    name: 'Agent SDKs',
    category: 'Agentic AI — Learning Roadmap',
    status: 'Future Learning',
    description: 'OpenAI Agents SDK, Google ADK, LangChain, and LangGraph architectures.',
    relevanceToEcommerce: 'Building scalable, standardized agent components with built-in state managers.'
  },
  {
    id: 'ag-multi-agent',
    name: 'Multi-Agent Orchestration',
    category: 'Agentic AI — Learning Roadmap',
    status: 'Future Learning',
    description: 'Hierarchical supervisors, peer-to-peer message routing, and consensus resolution.',
    relevanceToEcommerce: 'Separating duties: Support Agent, Fraud Agent, and Fulfillment Agent collaborating.'
  },
  {
    id: 'ag-rag',
    name: 'RAG Systems',
    category: 'Agentic AI — Learning Roadmap',
    status: 'Future Learning',
    description: 'Embeddings, vector indexing, hybrid retrieval, re-ranking, and grounded generation.',
    relevanceToEcommerce: 'Querying massive product manuals, return policies, and shipping FAQs accurately.'
  },
  {
    id: 'ag-memory',
    name: 'Agent Memory',
    category: 'Agentic AI — Learning Roadmap',
    status: 'Future Learning',
    description: 'Short-term buffer memory, episodic memory, and long-term semantic persistence.',
    relevanceToEcommerce: 'Remembering returning customer preferences, past sizes, and communication styles.'
  },

  // Category 4: Backend & Infrastructure — Future Development
  {
    id: 'b-fastapi',
    name: 'FastAPI',
    category: 'Backend & Infrastructure — Future Development',
    status: 'Future Learning',
    description: 'High-performance asynchronous REST microservices in Python with automatic OpenAPI docs.',
    relevanceToEcommerce: 'Serving custom AI webhook listener endpoints with ultra-low latency.'
  },
  {
    id: 'b-postgres',
    name: 'PostgreSQL',
    category: 'Backend & Infrastructure — Future Development',
    status: 'Future Learning',
    description: 'Relational data modeling, transactional guarantees (ACID), JSONB fields, and indexing.',
    relevanceToEcommerce: 'Storing durable order logs, agent audit trails, and customer profiles.'
  },
  {
    id: 'b-sqlalchemy',
    name: 'SQLAlchemy / SQLModel',
    category: 'Backend & Infrastructure — Future Development',
    status: 'Future Learning',
    description: 'Object-Relational Mapping (ORM) and declarative database schema definition.',
    relevanceToEcommerce: 'Type-safe database transactions for order processing services.'
  },
  {
    id: 'b-redis',
    name: 'Redis',
    category: 'Backend & Infrastructure — Future Development',
    status: 'Future Learning',
    description: 'In-memory caching, pub/sub messaging, rate limiting, and session state storage.',
    relevanceToEcommerce: 'Caching high-demand flash-sale inventory and buffering agent API rate limits.'
  },
  {
    id: 'b-mcp',
    name: 'MCP Servers',
    category: 'Backend & Infrastructure — Future Development',
    status: 'Future Learning',
    description: 'Model Context Protocol server implementations for standardizing tool interfaces.',
    relevanceToEcommerce: 'Exposing Shopify Admin and ERP functions via standard MCP protocol to any agent.'
  },
  {
    id: 'b-a2a',
    name: 'A2A Protocol',
    category: 'Backend & Infrastructure — Future Development',
    status: 'Future Learning',
    description: 'Agent-to-Agent communication protocols, contract negotiation, and task delegation.',
    relevanceToEcommerce: 'Allowing store agents to communicate directly with supplier/vendor agents.'
  },
  {
    id: 'b-docker',
    name: 'Docker',
    category: 'Backend & Infrastructure — Future Development',
    status: 'Future Learning',
    description: 'Containerization, reproducible deployment environments, and multi-container Docker Compose.',
    relevanceToEcommerce: 'Packaging n8n, worker queues, and FastAPI microservices for reliable server deploys.'
  },
  {
    id: 'b-microservices',
    name: 'Microservices & Dapr',
    category: 'Backend & Infrastructure — Future Development',
    status: 'Future Learning',
    description: 'Distributed application runtime, event pub/sub, state management, and service discovery.',
    relevanceToEcommerce: 'Scaling large retail automation backends independently under heavy traffic surges.'
  },
  {
    id: 'b-cloud',
    name: 'Cloud Deployment',
    category: 'Backend & Infrastructure — Future Development',
    status: 'Future Learning',
    description: 'Deploying secure, resilient web services to production cloud hosting platforms.',
    relevanceToEcommerce: 'Ensuring 99.9% uptime for business-critical automated fulfillment systems.'
  }
];

export const featuredProjects: ProjectItem[] = [
  {
    id: 'proj-python-catalog-cleaner',
    name: 'E-commerce Catalog Analyzer & CSV Sanitizer',
    category: 'Python Projects',
    status: 'Active Prototype',
    statusNote: 'Current hands-on laboratory project built during SMIT Python module.',
    problem:
      'Dropshippers and multi-vendor Shopify merchants frequently receive messy supplier CSV catalogs with missing barcodes, non-standardized pricing floats, inconsistent variants, and duplicate SKUs that crash Shopify bulk imports.',
    solutionArchitecture:
      'A modular Python application utilizing Pandas to ingest disparate supplier data feeds, validate required Shopify fields against a strict schema, calculate profit margins dynamically, and export clean, formatted import-ready datasets.',
    technologies: ['Python 3.12', 'Pandas', 'NumPy', 'Regex', 'CSV Engine'],
    workflowDiagramDescription:
      'Supplier CSV -> Validation Rules -> Missing Field Imputer -> Margin Calculator -> Shopify Schema Formatter -> Export',
    workflowSteps: [
      { step: 1, title: 'Input Ingestion', detail: 'Parses unstructured multi-format supplier catalog spreadsheets and CSVs.' },
      { step: 2, title: 'Data Cleaning', detail: 'Normalizes SKU capitalization, strips whitespace, and identifies missing barcodes.' },
      { step: 3, title: 'Margin Modeling', detail: 'Applies currency conversion and dynamic tiered markups across product categories.' },
      { step: 4, title: 'Shopify Export', detail: 'Generates a validated CSV compliant with Shopify Admin bulk import standards.' }
    ],
    githubUrl: 'https://github.com/adilkhan2428/Adil-Porfolio',
    isDemonstrationOnly: true,
    keyFeatures: [
      'Automated detection of duplicate product handles and SKUs',
      'Configurable profit margin and tax calculation matrices',
      'Memory-efficient chunk-by-chunk processing for multi-megabyte feeds',
      'Zero external dependencies beyond standard scientific Python libraries'
    ]
  },
  {
    id: 'proj-n8n-order-routing',
    name: 'Multi-Channel Order Webhook & Notification Engine',
    category: 'Business Automation',
    status: 'In Development',
    statusNote: 'Active workflow prototype currently being tested in sandbox n8n environment.',
    problem:
      'Store owners miss critical high-value orders and warehouse stock-outs when forced to constantly refresh their Shopify dashboard or wait for generic email alerts.',
    solutionArchitecture:
      'An event-driven n8n workflow triggered via secure HMAC-verified Shopify webhooks. Orders above specific thresholds are immediately categorized, transformed into structured cards, and routed to dedicated team communication channels with action buttons.',
    technologies: ['n8n', 'Shopify Webhooks', 'REST APIs', 'JSON Transformation', 'Discord/Slack API'],
    workflowDiagramDescription:
      'Shopify Order Created Webhook -> HMAC Validation -> Payload Parser -> High-Value Filter -> Multi-Channel Dispatcher',
    workflowSteps: [
      { step: 1, title: 'Webhook Trigger', detail: 'Listens for order/created event with security header inspection.' },
      { step: 2, title: 'Data Extraction', detail: 'Extracts customer lifetime value, line items, and risk score.' },
      { step: 3, title: 'Decision Branching', detail: 'Routes VIP orders, high-fraud flags, or international deliveries into separate flows.' },
      { step: 4, title: 'Instant Notification', detail: 'Delivers actionable alerts with quick-fulfillment links directly to staff.' }
    ],
    githubUrl: 'https://github.com/adilkhan2428/Adil-Porfolio',
    isDemonstrationOnly: true,
    keyFeatures: [
      'Cryptographic HMAC SHA256 header validation for store security',
      'Eliminates polling delays with sub-second event-driven triggers',
      'Graceful error catcher node that buffers failed deliveries for retry',
      'Completely self-hostable to eliminate expensive per-zap SaaS fees'
    ]
  },
  {
    id: 'proj-shopify-stock-guard',
    name: 'Intelligent Low-Stock Alert & Reorder Estimator',
    category: 'Shopify Automation',
    status: 'Architecture & Design',
    statusNote: 'Architectural blueprint and logic flow designed for upcoming practical implementation.',
    problem:
      'Fast-moving e-commerce brands suffer revenue loss due to stockouts of top-performing items because native alerts lack sales velocity context.',
    solutionArchitecture:
      'A scheduled Python & Shopify GraphQL/REST integration that compares current variant inventory against the 7-day average sales run-rate, predicting exact days of remaining inventory and flagging critical thresholds.',
    technologies: ['Shopify REST API', 'Python', 'Automated Scheduling', 'JSON Schema'],
    workflowDiagramDescription:
      'Hourly Cron -> Shopify Inventory API -> Sales Velocity Formula -> Run-Rate Calculation -> Priority Alerting Table',
    workflowSteps: [
      { step: 1, title: 'Inventory Fetch', detail: 'Queries active variants and current available quantities across locations.' },
      { step: 2, title: 'Velocity Calculation', detail: 'Computes items sold per day over moving 7-day and 30-day windows.' },
      { step: 3, title: 'Run-Out Estimation', detail: 'Divides on-hand stock by velocity to compute estimated days before stockout.' },
      { step: 4, title: 'Digest Generation', detail: 'Compiles prioritized reorder recommendation for store procurement.' }
    ],
    githubUrl: 'https://github.com/adilkhan2428/Adil-Porfolio',
    isDemonstrationOnly: true,
    keyFeatures: [
      'Distinguishes between slow-moving and fast-trending product variants',
      'Considers location-specific inventory for multi-warehouse stores',
      'Protects against unexpected weekend stockout spikes'
    ]
  },
  {
    id: 'proj-ai-intent-classifier',
    name: 'Customer Support Intent Classifier & Router',
    category: 'AI Agent Projects',
    status: 'Active Prototype',
    statusNote: 'Prompt engineering and structured output prototype built with Claude & OpenAI APIs.',
    problem:
      'Customer support teams are overwhelmed by generic inquiries ("Where is my order?", "Can I change my address?"), spending 60%+ of their day answering repetitive questions instead of complex buyer issues.',
    solutionArchitecture:
      'A structured context-engineered AI agent that ingests raw incoming customer messages, parses intent into strict categorical schemas, extracts critical entities (order numbers, email, postal code), and generates context-aware draft responses.',
    technologies: ['Python', 'OpenAI API', 'JSON Schema Mode', 'Prompt Engineering', 'Context Design'],
    workflowDiagramDescription:
      'Raw Customer Message -> System Prompt Sanitizer -> LLM Structured Schema -> Intent & Entity Extraction -> Draft Generator',
    workflowSteps: [
      { step: 1, title: 'Message Ingestion', detail: 'Receives raw customer text from email, contact form, or chat.' },
      { step: 2, title: 'Intent Classification', detail: 'Categorizes into: Order Tracking, Return Request, Product Inquiry, or Escalation.' },
      { step: 3, title: 'Entity Extraction', detail: 'Isolates order ID (#1042), email, and postal code using strict JSON output mode.' },
      { step: 4, title: 'Response Framing', detail: 'Prepares safe, policy-compliant draft with placeholder for tracking status.' }
    ],
    githubUrl: 'https://github.com/adilkhan2428/Adil-Porfolio',
    isDemonstrationOnly: true,
    keyFeatures: [
      'Guaranteed JSON formatting via constrained decoding / schema enforcement',
      'System-level guardrails preventing hallucinated refund promises',
      'Sentiment polarity analysis to identify frustrated customers for urgent human review',
      'Zero training required: leverages advanced context engineering'
    ]
  },
  {
    id: 'proj-rag-product-knowledge',
    name: 'Shopify Store Policy & Catalog RAG System',
    category: 'RAG & Knowledge Systems',
    status: 'Planned Prototype',
    statusNote: 'Part of SMIT Module 2 learning roadmap; system architecture blueprint prepared.',
    problem:
      'Large e-commerce stores with hundreds of products and complex return policies struggle with customer confusion. Standard keyword search cannot answer nuanced questions like "Which jacket is waterproof and suitable for sub-zero weather?".',
    solutionArchitecture:
      'A Retrieval-Augmented Generation (RAG) pipeline that embeds product descriptions, specs, return policies, and FAQs into vector storage, retrieving relevant chunks to answer buyer queries with precise citations.',
    technologies: ['Python', 'Vector Embeddings', 'ChromaDB / pgvector', 'RAG Pipeline', 'LangChain'],
    workflowDiagramDescription:
      'Catalog & Policy Docs -> Chunking -> Vector Embeddings -> Semantic Similarity Search -> Grounded LLM Response',
    workflowSteps: [
      { step: 1, title: 'Document Chunking', detail: 'Splits product specifications and return terms into semantic segments.' },
      { step: 2, title: 'Vectorization', detail: 'Generates mathematical dense embeddings for every product attribute.' },
      { step: 3, title: 'Query Matching', detail: 'Matches natural language buyer questions against closest product vectors.' },
      { step: 4, title: 'Cited Response', detail: 'Generates factual answers citing exact product titles and policy rules.' }
    ],
    githubUrl: 'https://github.com/adilkhan2428/Adil-Porfolio',
    isDemonstrationOnly: true,
    keyFeatures: [
      'Direct factual grounding to eliminate product feature hallucinations',
      'Real-time link generation directly to the matching Shopify product URL',
      'Understands colloquial shopping queries and conversational follow-ups'
    ]
  },
  {
    id: 'proj-multi-agent-returns',
    name: 'Autonomous Multi-Agent Order & Return Triager',
    category: 'Multi-Agent Systems',
    status: 'Planned Prototype',
    statusNote: 'Design specifications ready for SMIT Module 2 & 3 multi-agent orchestration projects.',
    problem:
      'Handling return requests requires checking order eligibility dates, verifying item tags, determining restock fee rules, and updating inventory—a multi-step friction point that delays customer refunds.',
    solutionArchitecture:
      'A multi-agent team comprising: (1) Ingestion Agent (parses customer request), (2) Policy Agent (evaluates Shopify store return eligibility window), (3) Shipping Agent (generates return label instructions), and (4) Supervisor Agent (conducts final sanity check).',
    technologies: ['Multi-Agent Orchestration', 'LangGraph', 'Tool Calling', 'Shopify Admin API', 'FastAPI'],
    workflowDiagramDescription:
      'Customer Request -> Ingestion Agent -> Policy Agent -> Logistics Agent -> Supervisor Approval -> Resolution',
    workflowSteps: [
      { step: 1, title: 'Customer Intake', detail: 'Agent gathers item reason, photos, and order identifier.' },
      { step: 2, title: 'Eligibility Audit', detail: 'Policy Agent queries fulfillment date; checks if within 30-day window.' },
      { step: 3, title: 'Label & Instructions', detail: 'Logistics Agent selects correct warehouse and issues return steps.' },
      { step: 4, title: 'Human Checkpoint', detail: 'If refund value exceeds $150, pauses for merchant one-click confirmation.' }
    ],
    githubUrl: 'https://github.com/adilkhan2428/Adil-Porfolio',
    isDemonstrationOnly: true,
    keyFeatures: [
      'Specialized agent roles prevent prompt bloat and single-agent confusion',
      'Human-in-the-loop approval thresholds for high monetary liability cases',
      'Deterministic tool calling with strict parameter validation'
    ]
  },
  {
    id: 'proj-production-ai-infra',
    name: 'Enterprise Shopify Event-Driven Automation Infrastructure',
    category: 'Production AI Systems',
    status: 'Planned Prototype',
    statusNote: 'Capstone engineering goal aligned with SMIT Module 4 Production & Scale roadmap.',
    problem:
      'High-volume Shopify Plus stores processing thousands of orders during Black Friday/Cyber Monday (BFCM) crash simple automation tools due to API rate limits, duplicate webhook retries, and unhandled network drops.',
    solutionArchitecture:
      'A resilient containerized backend architecture featuring FastAPI webhook receivers, Redis message queues for buffering traffic surges, PostgreSQL for idempotent state management, and Docker deployment.',
    technologies: ['FastAPI', 'Redis Queue', 'PostgreSQL', 'Docker', 'MCP Protocol', 'Observability'],
    workflowDiagramDescription:
      'Shopify Influx -> Ingress Gateway -> Redis Buffer -> Distributed Workers -> Database State -> Monitoring',
    workflowSteps: [
      { step: 1, title: 'High-Speed Ingress', detail: 'FastAPI microservice acknowledges webhooks in <50ms with 200 OK.' },
      { step: 2, title: 'Queue Buffering', detail: 'Pushes raw payloads into Redis queue to smooth out spikes.' },
      { step: 3, title: 'Worker Processing', detail: 'Background workers consume messages adhering to Shopify rate limits.' },
      { step: 4, title: 'Audited Persistence', detail: 'Records complete execution trace in PostgreSQL with retry timestamps.' }
    ],
    githubUrl: 'https://github.com/adilkhan2428/Adil-Porfolio',
    isDemonstrationOnly: true,
    keyFeatures: [
      'Guaranteed idempotency: guarantees no order is fulfilled twice on webhook retries',
      'Resilient backpressure handling during high-traffic sales flash events',
      'Structured OpenTelemetry tracing for complete visibility into pipeline lag'
    ]
  }
];

export const ecommerceSolutions: SolutionCategory[] = [
  {
    id: 'sol-shopify-automation',
    title: 'Shopify Store Automation',
    icon: 'ShoppingBag',
    tagline: 'Eliminating repetitive daily merchant operations with dependable event-driven automation.',
    overview:
      'Modern online retailers lose hours every day to manual order checks, stock tagging, and customer notifications. My goal is to build automated workflows that listen to store events in real-time and execute the right operational actions with zero human delay.',
    capabilities: [
      'Automated order processing and validation',
      'Order confirmation and status notification workflows',
      'Automated order tagging, customer tiering, and routing',
      'Real-time inventory level monitoring across locations',
      'Automated low-stock and out-of-stock emergency alerts',
      'Product data and catalog synchronization across sales channels',
      'Customer profile and purchase history synchronization',
      'Automated refund, return, and cancellation handling workflows',
      'Fulfillment tracking notifications with direct carrier links',
      'Returns management and exchange intake flows',
      'Native Shopify Flow advanced automation rules',
      'Third-party application and logistics integrations'
    ],
    architecturalComponents: [
      'Shopify Admin REST & GraphQL APIs',
      'Webhook Listeners with HMAC Verification',
      'n8n / Python Automation Microservices',
      'Shopify Flow Custom Triggers'
    ],
    realWorldScenario:
      'A customer places a $300 order. The workflow validates payment risk, tags the order as VIP, reserves items in the closest fulfillment warehouse, and triggers a personalized priority notification.',
    futureProjectPlaceholder: 'Real-World Project: Shopify Flow & Custom Webhook Sync Lab (In Progress)'
  },
  {
    id: 'sol-customer-support',
    title: 'AI-Powered Customer Support',
    icon: 'MessageSquareText',
    tagline: 'Intelligent, grounded conversational agents that resolve customer queries 24/7.',
    overview:
      'Customer support should be instantaneous, accurate, and empathetic. By engineering AI agents with access to real-time order data and store policies, stores can instantly answer standard queries while escalating sensitive issues to humans.',
    capabilities: [
      'AI customer support assistants with store knowledge',
      'Order-status AI agents with real-time tracking lookups',
      'Product recommendation assistants based on buyer preferences',
      'Customer inquiry classification and priority tagging',
      'Automated email draft generation with policy citations',
      'WhatsApp and omnichannel customer support integration',
      'Real-time customer intent and sentiment detection',
      'Intelligent human-agent escalation with full summary context',
      'Multilingual customer support for international shoppers'
    ],
    architecturalComponents: [
      'LLM APIs with Strict Guardrails',
      'Retrieval-Augmented Generation (RAG) on Store Policies',
      'Tool Calling into Order Tracking APIs',
      'Human-in-the-Loop Handover Triggers'
    ],
    realWorldScenario:
      'A buyer asks: "I need to change my shipping address for order #4891 before it ships." The agent verifies the order is still unfulfilled, requests the new address, updates the shipping address via API, and notifies the warehouse.',
    futureProjectPlaceholder: 'Real-World Project: Multi-Turn E-commerce Support Agent (Upcoming)'
  },
  {
    id: 'sol-marketing-crm',
    title: 'Intelligent Marketing & CRM',
    icon: 'TrendingUp',
    tagline: 'Transforming customer data into dynamic, automated retention and conversion pipelines.',
    overview:
      'Generic email blasts generate unsubscribes. Intelligent e-commerce systems analyze customer buying behavior to deliver relevant, personalized communication at the exact moment of highest purchase intent.',
    capabilities: [
      'Dynamic customer segmentation based on purchase frequency & AOV',
      'Automated lead qualification for high-ticket e-commerce brands',
      'High-converting abandoned cart recovery sequences',
      'Personalized product recommendation email campaigns',
      'Customer lifecycle automation (First purchase -> Repeat -> Loyal VIP)',
      'Bidirectional CRM synchronization (Klaviyo, HubSpot, Shopify)',
      'Proactive win-back and churn-prevention workflows',
      'AI-powered marketing copy generation aligned with brand voice',
      'Customer feedback and review sentiment analysis'
    ],
    architecturalComponents: [
      'Customer Lifetime Value (LTV) Calculation Scripts',
      'Event-Triggered Webhook Pipelines',
      'Marketing Platform APIs (Klaviyo, Mailchimp)',
      'Sentiment Analysis Models'
    ],
    realWorldScenario:
      'A customer has bought two items in 45 days. The system detects their interest in a complementary category, tags their CRM profile, and queues a personalized, discount-free recommendation email.',
    futureProjectPlaceholder: 'Real-World Project: Predictive Cart Recovery & RFM Segmentation Engine (Upcoming)'
  },
  {
    id: 'sol-product-intelligence',
    title: 'Product & Catalog Intelligence',
    icon: 'PackageCheck',
    tagline: 'Scaling e-commerce catalog enrichment and SEO optimization with AI precision.',
    overview:
      'Managing hundreds of products with messy supplier data, missing tags, and inconsistent descriptions harms conversion rates and search rankings. Catalog intelligence pipelines automate ingestion, cleanup, and SEO optimization at scale.',
    capabilities: [
      'AI-generated, brand-tailored product descriptions',
      'Automated product taxonomy and category classification',
      'Automated product attribute extraction from raw specs',
      'Bulk catalog enrichment for multi-vendor marketplaces',
      'Product image analysis and visual tag generation',
      'Product data validation and error auditing before publishing',
      'SEO metadata, title tag, and rich snippet generation',
      'Product information synchronization across international storefronts'
    ],
    architecturalComponents: [
      'Multimodal LLMs for Image & Text Analysis',
      'Pandas / Python Data Cleansing Scripts',
      'Shopify Bulk Operations API',
      'Schema.org Structured Data Generators'
    ],
    realWorldScenario:
      'A merchant uploads 500 new technical outdoor garments with only raw supplier spec sheets. The pipeline generates unique, SEO-optimized descriptions, extracts color/size/material attributes, and tags variants automatically.',
    futureProjectPlaceholder: 'Real-World Project: Automated Catalog Bulk Enrichment Script (Planned)'
  },
  {
    id: 'sol-bi-analytics',
    title: 'Business Intelligence & Analytics',
    icon: 'BarChart3',
    tagline: 'Translating noisy store numbers into clear, actionable executive intelligence.',
    overview:
      'Merchants often suffer from data overload. By combining programmatic data pipelines with language models, store owners can receive automated daily executive briefings and ask plain-English questions about their store performance.',
    capabilities: [
      'Automated daily/weekly executive sales and profit reporting',
      'Net revenue and gross margin trend analysis',
      'Order volume and seasonal trend pattern analysis',
      'Predictive inventory forecasting based on moving averages',
      'Customer Lifetime Value (CLV) cohort analysis',
      'Return-rate and refund root cause analysis by SKU',
      'Unified business performance KPI dashboards',
      'AI-generated executive management summaries',
      'Natural-language business querying (Ask: "Which product had highest refund rate?")'
    ],
    architecturalComponents: [
      'SQL / Pandas Analytical Processing',
      'Automated Scheduled Aggregation Tasks',
      'Telegram / Slack Executive Bot Dispatchers',
      'Interactive Charting & Metric Visualizations'
    ],
    realWorldScenario:
      'Every morning at 8:00 AM, the store founder receives a 3-bullet briefing: yesterday\'s net revenue, top 3 bestselling items, and an alert flagging a spike in returns on SKU #8819 due to sizing confusion.',
    futureProjectPlaceholder: 'Real-World Project: Automated Shopify Daily Briefing Bot (Planned)'
  },
  {
    id: 'sol-agentic-systems',
    title: 'Agentic E-commerce Systems',
    icon: 'Bot',
    tagline: 'Autonomous multi-agent ecosystems working in concert to operate complex workflows.',
    overview:
      'The future of e-commerce isn\'t just simple "if this then that" recipes. It is dynamic, multi-agent systems where intelligent agents collaborate, delegate, use external tools, monitor for anomalies, and defer to humans when stakes are high.',
    capabilities: [
      'Autonomous order-processing agents with exception handling',
      'Multi-agent collaborative customer support teams',
      'AI inventory management and supplier reorder agents',
      'Intelligent competitive product and price research agents',
      'Agentic sales assistants for personalized high-ticket sales',
      'Multi-agent business workflow orchestration (LangGraph / ADK)',
      'AI-powered operations monitoring and anomaly alerts',
      'Exception detection, fraud flagging, and self-healing retries',
      'Human-in-the-loop approval systems for high-value actions'
    ],
    architecturalComponents: [
      'LangGraph State Machines & ReAct Frameworks',
      'Tool Calling against Shopify & Warehouse APIs',
      'Shared Memory & Episodic Store State',
      'Human Escalation Checkpoints'
    ],
    realWorldScenario:
      'An anomaly occurs: 50 orders arrive within 2 minutes from the same IP range. The Security Agent freezes the orders, the Inventory Agent preserves stock, and the Supervisor Agent alerts the merchant with evidence.',
    futureProjectPlaceholder: 'Real-World Project: Multi-Agent E-commerce Ops Sandbox (Upcoming)'
  },
  {
    id: 'sol-enterprise-infra',
    title: 'Enterprise E-commerce Infrastructure',
    icon: 'Server',
    tagline: 'Robust, secure, and horizontally scalable backends designed for enterprise reliability.',
    overview:
      'High-growth brands processing millions in gross merchandise value require rock-solid infrastructure. I aim to engineer systems that are secure, asynchronous, compliant with international data standards, and resilient under traffic peaks.',
    capabilities: [
      'Custom AI-powered backend microservices (FastAPI & Python)',
      'Scalable, asynchronous automation architecture with Redis queues',
      'Secure, documented custom REST & GraphQL APIs',
      'MCP (Model Context Protocol) based tool integrations',
      'Agent-to-Agent (A2A) standardized communication interfaces',
      'Database-driven business applications (PostgreSQL, SQLModel)',
      'Event-driven architecture with zero-data-loss guarantees',
      'Distributed agent worker pools with load balancing',
      'End-to-end monitoring, structured logging, and observability',
      'Secure containerized cloud deployment and infrastructure'
    ],
    architecturalComponents: [
      'Docker Containerization & Multi-Stage Builds',
      'FastAPI + PostgreSQL + Redis Stack',
      'OpenTelemetry Distributed Tracing',
      'Role-Based API Authentication & TLS Encryption'
    ],
    realWorldScenario:
      'During a flash sale with 10,000 concurrent shoppers, incoming webhook traffic is buffered safely into Redis, processed asynchronously without hitting Shopify rate limits, and logged for auditing.',
    futureProjectPlaceholder: 'Real-World Project: Resilient Shopify Webhook Ingress Architecture (Long-term)'
  }
];

export const learningModules: LearningModule[] = [
  {
    id: 'mod-1',
    moduleNumber: 1,
    title: 'AI Foundations & Automation',
    badge: 'Module 1 — Active Core',
    status: 'In Progress',
    statusDetails: 'Actively studying and coding daily in SMIT 12-month program; building foundations.',
    topics: [
      { title: 'AI Fundamentals', completed: true },
      { title: 'n8n Workflow Automation', completed: true },
      { title: 'Python Programming', completed: true },
      { title: 'Object-Oriented Programming (OOP)', completed: true },
      { title: 'Advanced Python', completed: false },
      { title: 'Prompt Engineering', completed: true },
      { title: 'Context Engineering', completed: false },
      { title: 'Claude Code', completed: false },
      { title: 'First Coded AI Agent', completed: false }
    ],
    focusDescription:
      'Mastering pure Python syntax, algorithmic thinking, object-oriented principles, and combining them with visual workflow engines like n8n and REST APIs.',
    outcomeMilestone:
      'Build and run deterministic automations and first standalone coded Python AI agents with structured output.'
  },
  {
    id: 'mod-2',
    moduleNumber: 2,
    title: 'Agent Intelligence Layer',
    badge: 'Module 2 — Upcoming',
    status: 'Not Started',
    statusDetails: 'Scheduled in SMIT curriculum roadmap following completion of Python foundation.',
    topics: [
      { title: 'OpenAI Agents SDK', completed: false },
      { title: 'Google ADK', completed: false },
      { title: 'LangChain', completed: false },
      { title: 'LangGraph', completed: false },
      { title: 'Short-Term Memory', completed: false },
      { title: 'Long-Term Memory', completed: false },
      { title: 'RAG (Retrieval-Augmented Generation)', completed: false },
      { title: 'Vector Databases (ChromaDB / pgvector)', completed: false },
      { title: 'Agentic Design Patterns (ReAct, Reflection)', completed: false },
      { title: 'Multi-Agent Systems & Coordination', completed: false }
    ],
    focusDescription:
      'Moving from static scripts to dynamic agentic loops: giving models state, memory, external tool access, and orchestrating multiple agents to divide complex jobs.',
    outcomeMilestone:
      'Deploy autonomous multi-agent systems that research, execute tools, and handle errors without human hand-holding.'
  },
  {
    id: 'mod-3',
    moduleNumber: 3,
    title: 'Backend & Agent Collaboration',
    badge: 'Module 3 — Planned',
    status: 'Not Started',
    statusDetails: 'Scheduled in SMIT curriculum roadmap for high-performance backend systems.',
    topics: [
      { title: 'FastAPI', completed: false },
      { title: 'PostgreSQL', completed: false },
      { title: 'SQLModel & SQLAlchemy', completed: false },
      { title: 'Database Migrations (Alembic)', completed: false },
      { title: 'REST APIs & Webhook Ingress', completed: false },
      { title: 'MCP Servers (Model Context Protocol)', completed: false },
      { title: 'A2A Protocol (Agent-to-Agent)', completed: false },
      { title: 'Agent Evaluation & Benchmarking', completed: false },
      { title: 'LLM Economics & Cost Optimization', completed: false },
      { title: 'Tracing and Observability (LangSmith / OpenTelemetry)', completed: false },
      { title: 'Autonomous Agents in Production', completed: false }
    ],
    focusDescription:
      'Transforming research prototypes into enterprise services with real databases, asynchronous APIs, MCP standardization, and rigorous cost/latency profiling.',
    outcomeMilestone:
      'Ship production-ready backend microservices that host and monitor intelligent agent networks.'
  },
  {
    id: 'mod-4',
    moduleNumber: 4,
    title: 'Production & Scale',
    badge: 'Module 4 — Enterprise Capstone',
    status: 'Not Started',
    statusDetails: 'Final phase of SMIT 12-month program focused on production architecture.',
    topics: [
      { title: 'Docker Containerization', completed: false },
      { title: 'Microservices Architecture', completed: false },
      { title: 'Dapr Distributed Application Runtime', completed: false },
      { title: 'DACA Architecture', completed: false },
      { title: 'Production Infrastructure', completed: false },
      { title: 'AI Ethics & Guardrails', completed: false },
      { title: 'Security, Secret Management & Compliance', completed: false },
      { title: 'Production Cloud Deployment', completed: false },
      { title: 'Enterprise AI Systems Integration', completed: false }
    ],
    focusDescription:
      'Deploying, securing, and scaling distributed AI architectures capable of withstanding real enterprise traffic spikes with ironclad reliability.',
    outcomeMilestone:
      'Architect and deploy high-availability enterprise autonomous systems ready to serve international brands.'
  }
];

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    number: 1,
    title: 'Understand the business problem before selecting technology.',
    coreInsight:
      'Never choose a complex multi-agent framework when a simple webhook and a three-line Python script solves the merchant’s problem faster, cheaper, and with higher reliability.',
    ecommerceContext:
      'Store owners care about inventory accuracy, customer response time, and profitability—not what LLM model you ran.',
    icon: 'Compass'
  },
  {
    number: 2,
    title: 'Design systems before implementing workflows.',
    coreInsight:
      'A clear architectural diagram, explicit data contracts, and defined error handling states save hundreds of hours of debugging messy, fragile workflows.',
    ecommerceContext:
      'Drafting the exact webhook lifecycle and state transitions before connecting Shopify avoids duplicate orders.',
    icon: 'GitFork'
  },
  {
    number: 3,
    title: 'Build for reliability, not just successful demonstrations.',
    coreInsight:
      'Anyone can build a demo that works once under ideal conditions. Real engineering is handling 504 gateway timeouts, invalid JSON payloads, and network disconnects gracefully.',
    ecommerceContext:
      'Ensuring exponential backoff and persistent retry queues so no customer order is dropped during warehouse outages.',
    icon: 'ShieldCheck'
  },
  {
    number: 4,
    title: 'Use AI where it creates measurable value.',
    coreInsight:
      'AI is not a silver bullet for every task. Deterministic operations belong in deterministic code; generative and cognitive capabilities belong where unstructured complexity exists.',
    ecommerceContext:
      'Calculate shipping fees with standard code; use AI to interpret vague customer return justifications.',
    icon: 'Scale'
  },
  {
    number: 5,
    title: 'Design with security, scalability, and maintainability in mind.',
    coreInsight:
      'Protect secrets, validate webhook HMAC signatures, ensure data schemas are strictly typed, and document code so future engineers can maintain it easily.',
    ecommerceContext:
      'Handling customer PII (Personally Identifiable Information) with strict security and adhering to store API limits.',
    icon: 'Lock'
  },
  {
    number: 6,
    title: 'Keep humans involved in sensitive business decisions.',
    coreInsight:
      'Autonomous systems must know their limits. Build human-in-the-loop checkpoints for high-liability decisions like large refunds, legal disputes, or inventory write-offs.',
    ecommerceContext:
      'Let the AI formulate the refund recommendation, but require a one-click merchant confirmation for orders above $100.',
    icon: 'UserCheck'
  },
  {
    number: 7,
    title: 'Continuously evaluate and improve system performance.',
    coreInsight:
      'Track token usage, monitor latency, calculate cost-per-execution, and run continuous evals to ensure AI prompts and automated tools do not drift over time.',
    ecommerceContext:
      'Regularly reviewing customer satisfaction scores and execution metrics to fine-tune store support prompts.',
    icon: 'Activity'
  }
];

export const futureVisionArchitecture = {
  heading: 'Beyond Automation: Toward Autonomous E-commerce',
  subheading:
    'The evolution from isolated script execution to a synchronized network of intelligent agents operating e-commerce storefronts with human oversight.',
  layers: [
    {
      id: 'layer-store',
      level: 1,
      name: 'Shopify Store & Channels',
      tag: 'Event Producers',
      description: 'The front-line commercial interface where customer interactions, orders, checkouts, and inventory events happen in real time.',
      components: ['Shopify Storefront', 'Shopify Plus Admin', 'Checkout & POS', 'Customer Portal']
    },
    {
      id: 'layer-ingress',
      level: 2,
      name: 'APIs & Event Webhooks',
      tag: 'Ingress & Security Layer',
      description: 'Captures incoming HTTP webhooks, authenticates HMAC signatures, validates JSON payloads, and prevents duplicate deliveries.',
      components: ['HMAC Verifier', 'Event Ingress Gateway', 'Idempotency Key Cache', 'FastAPI Webhook Listeners']
    },
    {
      id: 'layer-orchestration',
      level: 3,
      name: 'Central Orchestration Layer',
      tag: 'Brain & State Coordinator',
      description: 'Evaluates the incoming business event, checks current store operational state, and dispatches tasks to specialized agent workers.',
      components: ['Task Dispatcher', 'Workflow State Engine', 'Priority Event Queue', 'Rate Limit Controller']
    },
    {
      id: 'layer-agents',
      level: 4,
      name: 'Specialized AI Agents Network',
      tag: 'Autonomous Cognitive Agents',
      description: 'Dedicated intelligent agents equipped with specialized tools, deterministic constraints, and domain-specific context.',
      agents: [
        {
          name: 'Customer Support Agent',
          role: 'Handles multi-channel queries, order tracking inquiries, and policy FAQs.'
        },
        {
          name: 'Order Management Agent',
          role: 'Validates line items, detects fraud flags, routes warehouse fulfillment, and coordinates returns.'
        },
        {
          name: 'Inventory Agent',
          role: 'Monitors multi-location stock levels, computes sales velocity, and flags replenishment needs.'
        },
        {
          name: 'Marketing Agent',
          role: 'Performs customer RFM segmentation, manages abandoned cart triggers, and tailors recommendations.'
        },
        {
          name: 'Analytics Agent',
          role: 'Analyzes daily revenue streams, returns patterns, and prepares plain-English executive briefings.'
        }
      ]
    },
    {
      id: 'layer-memory',
      level: 5,
      name: 'Shared Database & Memory',
      tag: 'Persistence & Context Layer',
      description: 'Unifies operational order databases with vector memory for semantic search and episodic store context.',
      components: ['PostgreSQL (ACID Order State)', 'Vector Database (RAG Knowledge)', 'Redis (Ephemeral Cache & Queue)', 'Audit Log Repository']
    },
    {
      id: 'layer-governance',
      level: 6,
      name: 'Monitoring, Evaluation & Human Approval',
      tag: 'Safety & Governance Checkpoint',
      description: 'Ensures system transparency. Sensitive actions pause here for merchant approval before touching financial or inventory assets.',
      components: ['One-Click Merchant Approval UI', 'OpenTelemetry Tracing', 'LLM Cost & Latency Evals', 'Safety Guardrail Validator']
    },
    {
      id: 'layer-outcomes',
      level: 7,
      name: 'Realized Business Outcomes',
      tag: 'Tangible Merchant Value',
      description: 'The end goal of autonomous systems: lower operational overhead, zero dropped orders, and faster customer satisfaction.',
      components: ['Near-Zero Manual Order Friction', '24/7 Grounded Customer Resolution', 'Predictive Stockout Prevention', 'Scalable Operations at Fraction of Cost']
    }
  ]
};
