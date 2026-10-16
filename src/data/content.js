export const links = {
  email: 'mn.trassani@gmail.com',
  github: 'https://github.com/NahuelTrassani',
  linkedin: 'https://www.linkedin.com/in/mauro-nahuel-trassani',
}

const projects = [
  {
    id: 'pyo-react',
    image: 'projects/pyo-react.webp',
    demo: 'https://pyo-react.vercel.app',
    repo: 'https://github.com/NahuelTrassani/pyo-react',
    tags: ['React 19', 'Vite', 'React Router', 'Context API', 'Firebase'],
  },
  {
    id: 'admServicios',
    visual: 'api',
    repo: 'https://github.com/NahuelTrassani/admServicios',
    tags: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Zod', 'Socket.io', 'Vitest'],
  },
  {
    id: 'nvidia-chat',
    visual: 'chat',
    repo: 'https://github.com/NahuelTrassani/nvidia-chat',
    tags: ['React 19', 'Vite', 'LLM API', 'Markdown'],
  },
  {
    id: 'juego-mapa',
    image: 'projects/juego-mapa.webp',
    demo: 'https://nahueltrassani.github.io/juego-mapa-tactil/',
    repo: 'https://github.com/NahuelTrassani/juego-mapa-tactil',
    tags: ['JavaScript', 'HTML', 'CSS', 'Touch', 'Offline'],
  },
]

const more = [
  {
    id: 'pyo-vanilla',
    demo: 'https://nahueltrassani.github.io/Pimienta-Oregano/',
    repo: 'https://github.com/NahuelTrassani/Pimienta-Oregano',
    tags: ['JavaScript', 'Fetch', 'LocalStorage'],
  },
]

const skills = [
  { id: 'build', items: ['GeneXus 9 · 16 · 17 · 18', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'HTML', 'CSS'] },
  { id: 'data', items: ['SQL Server', 'MySQL', 'PostgreSQL', 'Oracle', 'DB2', 'MongoDB', 'SQLite'] },
  { id: 'integration', items: ['REST APIs', 'Postman', 'JSON', 'Socket.io', 'External Objects'] },
  { id: 'devops', items: ['Docker', 'Jenkins', 'Tomcat', 'IIS', 'Git', 'GitHub'] },
]

const certs = [
  { name: 'GeneXus 18 Analyst', org: 'GeneXus', date: '2025-06', score: '90/100' },
  { name: 'GeneXus 18 Jr Analyst', org: 'GeneXus', date: '2024-10', score: '89/100' },
  { name: { es: 'Programación Backend I', en: 'Backend Programming I' }, org: 'Coderhouse', date: '2026-09' },
  { name: 'React JS', org: 'Coderhouse', date: '2026-06' },
  { name: 'JavaScript', org: 'Coderhouse', date: '2026-02' },
  { name: { es: 'Desarrollo Web', en: 'Web Development' }, org: 'Coderhouse', date: '2025-08' },
]

export const shared = { projects, more, skills, certs }

export const content = {
  es: {
    nav: { about: 'Sobre mí', experience: 'Experiencia', projects: 'Proyectos', skills: 'Habilidades', contact: 'Contacto' },
    hero: {
      role: 'Software Engineer',
      tagline: 'Modernizo sistemas legacy y construyo lo que viene después: APIs REST, React y Node, sobre años de GeneXus en producción.',
      location: 'Neuquén, Argentina · GMT-3',
      cv: 'Descargar CV',
      cvFile: 'cv/Nahuel-Trassani-CV.pdf',
      contact: 'Escribime',
    },
    ui: { theme: 'Cambiar tema', lang: 'English', langLabel: 'Switch to English', demo: 'Ver demo', code: 'Código', present: 'Actualidad', more: 'Más proyectos', certs: 'Certificaciones', education: 'Formación' },
    about: [
      'Soy desarrollador con más de 7 años construyendo sistemas web y móviles empresariales de punta a punta, con GeneXus como stack principal: migraciones de legacy (GeneXus 9 a 17), apps móviles offline-first e integraciones REST sobre SQL Server, MySQL, Oracle y DB2, con Docker y CI/CD.',
      'Como recurso de consultora pasé por seguros, retail, servicios de campo, petróleo y gas, exportación agrícola, salud y administración pública. Disfruto los problemas difíciles de integración, donde hay que entender todo el sistema para resolverlos.',
      'Hoy sumo el stack JavaScript moderno: React en producción, migración de módulos GeneXus a servicios REST con front en React, y backends en Node con Express y TypeScript.',
    ],
    stats: [
      { value: '7+', label: 'años construyendo sistemas en producción' },
      { value: '7', label: 'industrias distintas' },
      { value: '150k', label: 'filas por día en procesos batch' },
      { value: '64', label: 'tablas en una app offline-first' },
    ],
    languages: 'Español nativo · Inglés intermedio (lectura y escritura técnica, y comprensión oral)',
    experience: [
      {
        company: 'Valkimia',
        role: 'GeneXus Developer',
        start: '2023',
        end: null,
        points: [
          'Migración del módulo de liquidación de siniestros de un sistema de seguros de GeneXus 9 a 17 (Java, Tomcat, K2BTools), con el legacy vivo en producción y entregas iterativas pantalla por pantalla junto a los usuarios finales.',
          'Referente técnico de los módulos core de la plataforma de gestión de una cadena de supermercados, sincronizada a diario con el ERP corporativo (AS/400): reposición, impresión de etiquetas y alertas de vencimiento con RPA.',
          'Integración de reposición automática (Relex): proceso batch diario de hasta 150.000 filas que genera órdenes de compra en borrador, revisión en el móvil y envío automático a proveedores.',
          'Transferencia de seis módulos core a un equipo externo entrante. Pipelines CI/CD con Jenkins hacia Tomcat, IIS y Docker.',
        ],
        tags: ['GeneXus 9 · 16 · 17 · 18', 'Java', '.NET', 'SQL Server', 'DB2', 'Jenkins', 'Docker'],
      },
      {
        company: 'Freelance',
        role: 'Empresa de servicios de campo',
        start: '2025-09',
        end: null,
        points: [
          'Migré un reporte de presentismo de una exportación Excel en GeneXus a un servicio REST consumido por una SPA en React, en producción con datos reales de liquidación.',
          'Reconstruí el proceso que genera el presentismo y las ausencias injustificadas bajaron de 145 a 37 en un mes (−74%). Validado con nueve controles SQL sobre 331 registros, sin diferencias.',
          'Único desarrollador de una app Android offline-first (GeneXus Smart Devices): base SQLite de 64 tablas con sincronización bidireccional, firma digital, fotos y lectura de QR. En producción desde julio de 2026.',
          'Migración del backend GeneXus a Node.js + Express + TypeScript sobre la misma base MySQL, módulo por módulo detrás de los fronts React existentes, empezando por la autenticación.',
        ],
        tags: ['GeneXus', 'React', 'Node.js', 'TypeScript', 'REST', 'MySQL', 'SQLite', 'Android'],
      },
      {
        company: 'Inenco SRL',
        role: 'GeneXus Developer',
        start: '2019',
        end: '2023',
        points: [
          'Desarrollé desde cero las apps móviles de dos sistemas: registro de trabajos de pozo para el sistema de hidrocarburos de una autoridad provincial, y gestión de pallets y contenedores para exportación frutícola.',
          'Mantenimiento y evolución de sistemas públicos: sesiones y expedientes de un concejo deliberante, y trazabilidad de un banco de leche humana.',
        ],
        tags: ['GeneXus', 'Smart Devices', 'Android'],
      },
    ],
    projects: {
      'pyo-react': {
        title: 'Pimienta & Orégano',
        kind: 'E-commerce en React',
        text: 'SPA para una fábrica de pastas: catálogo por categorías, detalle de producto, carrito global con Context API y checkout que guarda la orden en Firestore. La capa de servicios aísla el acceso a datos detrás del mismo contrato asíncrono que va a exponer la API propia.',
      },
      admServicios: {
        title: 'API de Turnos y Reservas',
        kind: 'Backend Node.js',
        text: 'API REST en cinco capas (router, controller, service, repository y DAO) sobre MongoDB Atlas. Filtros, orden y paginación resueltos en la base, validación con Zod en middleware, reservas con populate, vistas Handlebars en tiempo real con Socket.io y tests con Vitest.',
      },
      'nvidia-chat': {
        title: 'NVIDIA Chat',
        kind: 'React + modelos de lenguaje',
        text: 'Chat en React contra modelos de lenguaje vía NVIDIA NIM (Llama 3.1), con una API compatible con la de OpenAI. Respuestas en markdown con resaltado de código.',
      },
      'juego-mapa': {
        title: 'Juego de mapa táctil',
        kind: 'Juego para tótems',
        text: 'Juego para tótems de feria: se arrastra cada figura a su región del mapa. Sin dependencias y sin conexión. Todo el contenido vive en un objeto de configuración, así se adapta a otro evento sin tocar la lógica.',
      },
      'pyo-vanilla': {
        title: 'Pimienta & Orégano (JS)',
        kind: 'El origen del e-commerce',
        text: 'Carrito en JavaScript puro, con productos cargados por fetch y persistencia local.',
      },
    },
    skills: { build: 'Desarrollo', data: 'Bases de datos', integration: 'Integraciones', devops: 'DevOps' },
    education: [
      { name: 'Tecnicatura Universitaria en Desarrollo Web', org: 'Universidad Nacional del Comahue', period: '2018 – actualidad' },
      { name: 'Carrera Full Stack Developer', org: 'Coderhouse', period: '2025 – actualidad' },
    ],
    contact: {
      title: 'Contacto',
      text: 'Si tenés un proyecto o una posición donde pueda sumar, escribime.',
    },
    footer: 'Hecho con React y Vite.',
  },

  en: {
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
    hero: {
      role: 'Software Engineer',
      tagline: 'I modernize legacy systems and build what comes next: REST APIs, React and Node, on top of years of GeneXus in production.',
      location: 'Neuquén, Argentina · GMT-3',
      cv: 'Download resume',
      cvFile: 'cv/Nahuel-Trassani-Resume.pdf',
      contact: 'Get in touch',
    },
    ui: { theme: 'Toggle theme', lang: 'Español', langLabel: 'Cambiar a español', demo: 'Live demo', code: 'Code', present: 'Present', more: 'More projects', certs: 'Certifications', education: 'Education' },
    about: [
      'I am a software developer with 7+ years building enterprise web and mobile systems across the full development cycle, with GeneXus as my main stack: legacy modernization (GeneXus 9 to 17), offline-first mobile apps and REST integrations over SQL Server, MySQL, Oracle and DB2, with Docker and CI/CD.',
      'As a consultancy resource I have worked across insurance, retail, field services, oil and gas, agricultural export, healthcare and public administration. I enjoy hard integration problems, the kind you can only solve by understanding the whole system.',
      'Now expanding into the modern JavaScript stack: React in production, migrating GeneXus modules to REST services with React front ends, and Node backends with Express and TypeScript.',
    ],
    stats: [
      { value: '7+', label: 'years building production systems' },
      { value: '7', label: 'different industries' },
      { value: '150k', label: 'rows per day in batch processes' },
      { value: '64', label: 'tables in an offline-first app' },
    ],
    languages: 'Spanish: native · English: intermediate (technical reading and writing, and listening comprehension)',
    experience: [
      {
        company: 'Valkimia',
        role: 'GeneXus Developer',
        start: '2023',
        end: null,
        points: [
          'Migrating the claims-settlement module of a large insurance system from GeneXus 9 to 17 (Java, Tomcat, K2BTools) with the legacy system live in production, delivering screen by screen alongside end users.',
          'Technical owner of the core modules of a supermarket chain management platform, synchronized daily with the corporate ERP (AS/400): replenishment, label printing and product-expiry alerts with RPA.',
          'Automated replenishment integration (Relex): daily batch of up to 150,000 rows generating draft purchase orders, mobile review and automatic dispatch to suppliers.',
          'Handed over six core modules to an incoming external team. CI/CD pipelines with Jenkins to Tomcat, IIS and Docker.',
        ],
        tags: ['GeneXus 9 · 16 · 17 · 18', 'Java', '.NET', 'SQL Server', 'DB2', 'Jenkins', 'Docker'],
      },
      {
        company: 'Freelance',
        role: 'Field services company',
        start: '2025-09',
        end: null,
        points: [
          'Migrated a payroll-attendance report from a GeneXus Excel export to a REST service consumed by a React SPA, now in production with real payroll data.',
          'Rebuilt the attendance-generation process and cut unjustified absences from 145 to 37 in one month (−74%). Validated with nine SQL checks over 331 records, zero discrepancies.',
          'Sole developer of an offline-first Android app (GeneXus Smart Devices): 64-table SQLite database with bidirectional sync, digital signature, photos and QR scanning. In production since July 2026.',
          'Migrating the GeneXus backend to Node.js + Express + TypeScript over the same MySQL database, module by module behind the existing React front ends, starting with authentication.',
        ],
        tags: ['GeneXus', 'React', 'Node.js', 'TypeScript', 'REST', 'MySQL', 'SQLite', 'Android'],
      },
      {
        company: 'Inenco SRL',
        role: 'GeneXus Developer',
        start: '2019',
        end: '2023',
        points: [
          'Built from scratch the mobile apps of two systems: well-work logging for a provincial hydrocarbon authority, and pallet and container management for fruit export.',
          'Maintenance and evolution of public-sector systems: session and document workflow for a city council, and traceability for a human milk bank.',
        ],
        tags: ['GeneXus', 'Smart Devices', 'Android'],
      },
    ],
    projects: {
      'pyo-react': {
        title: 'Pimienta & Orégano',
        kind: 'React e-commerce',
        text: 'SPA for a pasta shop: category catalog, product detail, global cart with Context API and checkout that stores the order in Firestore. A service layer hides data access behind the same async contract the future API will expose.',
      },
      admServicios: {
        title: 'Booking & Scheduling API',
        kind: 'Node.js backend',
        text: 'Five-layer REST API (router, controller, service, repository and DAO) on MongoDB Atlas. Filtering, sorting and pagination in the database, Zod validation middleware, populated bookings, real-time Handlebars views with Socket.io and Vitest tests.',
      },
      'nvidia-chat': {
        title: 'NVIDIA Chat',
        kind: 'React + language models',
        text: 'React chat against language models through NVIDIA NIM (Llama 3.1), using an OpenAI-compatible API. Markdown answers with code highlighting.',
      },
      'juego-mapa': {
        title: 'Touch map game',
        kind: 'Kiosk game',
        text: 'Game for trade-show kiosks: drag each shape onto its region of the map. No dependencies and works offline. All content lives in a config object, so it adapts to a new event without touching the logic.',
      },
      'pyo-vanilla': {
        title: 'Pimienta & Orégano (JS)',
        kind: 'Where the e-commerce started',
        text: 'Shopping cart in plain JavaScript, with products loaded through fetch and local persistence.',
      },
    },
    skills: { build: 'Development', data: 'Databases', integration: 'Integrations', devops: 'DevOps' },
    education: [
      { name: 'University Technical Degree in Web Development', org: 'Universidad Nacional del Comahue', period: '2018 – present' },
      { name: 'Full Stack Developer Program', org: 'Coderhouse', period: '2025 – present' },
    ],
    contact: {
      title: 'Contact',
      text: 'If you have a project or a role where I can help, get in touch.',
    },
    footer: 'Built with React and Vite.',
  },
}
