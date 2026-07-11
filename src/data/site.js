// ============================================================================
//  DATOS DEL PORTAFOLIO  —  edita este archivo para actualizar el contenido.
// ============================================================================

export const profile = {
  name: 'José Ignacio',
  lastName: 'Cartagena Medina',
  fullName: 'José Ignacio Cartagena Medina',
  initials: 'JICM',
  title: 'Ingeniero en Conectividad y Redes',
  tagline: 'Ingeniero en Conectividad y Redes · foco en Ciberseguridad',
  location: 'Linderos, Buin · Santiago, Chile',
  languages: 'Español (nativo) · Inglés',
  availability: 'Full-time · Turnos · Remoto',
  focus: 'Infraestructura · Redes · Seguridad',
  email: 'jcartagena708@gmail.com',
  phone: '+56935463614',
  phonePretty: '+56 9 3546 3614',
  linkedin: 'https://www.linkedin.com/in/jos%C3%A9-ignacio-cartagena-medina-a998b8215/',
  linkedinPretty: 'linkedin.com/in/josé-ignacio-cartagena-medina',
  website: 'https://trickmiin.github.io/',
  cv: '/cv/CV_Jose_Cartagena.pdf',
  // roles que se escriben con efecto máquina en el hero
  roles: [
    'Infrastructure & Systems Engineer',
    'Administrador de Redes (CCNA/CCNP)',
    'Virtualización · VMware & Proxmox',
    'Ciberseguridad en formación',
    'SysAdmin · Linux & Windows Server',
  ],
  heroDesc:
    'Administración de infraestructura, virtualización, monitoreo y respaldos, avanzando hacia la seguridad de la información: auditoría, gestión de riesgos y respuesta ante incidentes.',
};

export const stats = [
  { n: 9, label: 'Certificaciones Cisco/UAndes' },
  { n: 9, label: 'Módulos Microsoft Azure AI' },
  { n: 2, label: 'Títulos en Redes' },
  { n: 1, label: 'Máster en curso' },
];

export const about = {
  paragraphs: [
    'Soy <b>Ingeniero en Conectividad y Redes</b> con sólida experiencia en soporte técnico y administración de infraestructura tecnológica, adquirida en mi desempeño en <b>ALDARIS</b>.',
    'Cuento con conocimientos en gestión de sistemas, redes y plataformas tecnológicas, destacando por un enfoque orientado a la <b>eficiencia operativa</b>, la <b>seguridad de la información</b> y la <b>continuidad de los servicios</b>.',
    'Me caracterizo por ser un profesional proactivo, con capacidad de trabajo en equipo y resolución de problemas en entornos exigentes. Actualmente curso un <b>Máster en Ciberseguridad</b>, consolidando mi transición hacia la defensa y el aseguramiento de infraestructuras críticas.',
  ],
  facts: [
    { k: 'OPS', variant: '', text: '<b>Soporte N2 e infraestructura</b> — levantamiento de servidores, continuidad y resolución en producción.' },
    { k: 'SEC', variant: 'cyan', text: '<b>Seguridad de la información</b> — auditoría, gestión de riesgos, análisis de vulnerabilidades y respuesta a incidentes.' },
    { k: 'NET', variant: 'violet', text: '<b>Redes empresariales</b> — switching, routing, segmentación y automatización (CCNA/CCNP).' },
  ],
};

export const experience = [
  {
    role: 'Ingeniero en Conectividad y Redes',
    company: 'ALDARIS',
    place: 'Santiago, Chile',
    when: 'dic. 2024 – jul. 2025',
    bullets: [
      'Administración de infraestructura de red y entornos virtualizados con <b>VMware</b> y <b>Proxmox</b>.',
      'Gestión de respaldos con <b>Nakivo</b> y <b>Transporter</b>, asegurando continuidad y recuperación.',
      'Monitoreo proactivo de servicios y equipos con <b>Zabbix</b>.',
      'Levantamiento y administración de servidores <b>Linux</b> y <b>Windows Server</b>.',
      'Administración de sitios web en <b>WordPress</b> y soporte técnico de <b>nivel 2</b>.',
    ],
    tags: [
      { t: 'VMware', v: 'green' }, { t: 'Proxmox', v: 'green' }, { t: 'Zabbix', v: 'cyan' },
      { t: 'Nakivo', v: 'cyan' }, { t: 'Linux', v: '' }, { t: 'Windows Server', v: '' },
      { t: 'WordPress', v: 'violet' }, { t: 'Soporte N2', v: '' },
    ],
  },
];

export const skillGroups = [
  {
    title: 'Infraestructura & Sistemas',
    icon: 'server',
    skills: [
      { name: 'Proxmox VE', level: 90 },
      { name: 'VMware (vSphere/ESXi)', level: 80 },
      { name: 'Linux Server', level: 80 },
      { name: 'Windows Server', level: 75 },
      { name: 'Backups (Nakivo)', level: 80 },
    ],
  },
  {
    title: 'Redes & Operación',
    icon: 'network',
    skills: [
      { name: 'Switching & Routing', level: 90 },
      { name: 'VLANs / Segmentación', level: 85 },
      { name: 'Monitoreo (Zabbix)', level: 80 },
      { name: 'Automatización de red', level: 70 },
      { name: 'WordPress (admin)', level: 75 },
    ],
  },
  {
    title: 'Ciberseguridad',
    icon: 'shield',
    skills: [
      { name: 'Seguridad de redes', level: 80 },
      { name: 'Análisis de vulnerabilidades', level: 75 },
      { name: 'Pruebas de penetración', level: 70 },
      { name: 'Gestión de incidentes', level: 70 },
      { name: 'Gestión de riesgos / GRC', level: 65 },
    ],
  },
];

export const softSkills = [
  'Comunicación efectiva', 'Adaptabilidad', 'Toma de decisiones', 'Gestión del tiempo',
  'Trabajo en equipo', 'Pensamiento estratégico', 'Liderazgo', 'Resolución de problemas',
];

export const education = [
  {
    flag: '🇪🇸 España',
    year: '2027 · en curso',
    title: 'Máster Universitario en Ciberseguridad',
    inst: 'VIU — Universidad Internacional de Valencia',
    desc: 'Especialización en seguridad de la información y ciberseguridad con enfoque técnico en auditoría de sistemas, gestión de riesgos y gobierno TI. Análisis de vulnerabilidades, gestión de incidentes, respuesta ante ciberataques, continuidad de negocio y forense digital.',
  },
  {
    flag: '🇨🇱 San Bernardo',
    year: '2025 · titulado',
    title: 'Ingeniería en Conectividad y Redes',
    inst: 'DUOC UC',
    desc: 'Formación en diseño, implementación y administración de redes, infraestructura de sistemas y servicios tecnológicos.',
  },
  {
    flag: '🇨🇱 Puente Alto',
    year: '2015 · titulado',
    title: 'Técnico de Nivel Superior en Farmacia',
    inst: 'INACAP — U. Tecnológica de Chile',
    desc: 'Base técnica previa, con foco en procedimientos, rigurosidad y atención al detalle.',
  },
];

// Insignias Cisco verificables en Credly
export const ciscoBadges = [
  { title: 'CCNA: Switching, Routing and Wireless Essentials', img: '/img/ccna-switching-routing-and-wireless-essentials.1.png', url: 'https://www.credly.com/badges/0f768e74-fdc1-4377-82bd-57985f0ce75b/public_url' },
  { title: 'CCNA: Enterprise Networking, Security & Automation', img: '/img/ccna-enterprise-networking-security-and-automation.png', url: 'https://www.credly.com/badges/47cfb20f-7986-46cd-b520-1332ae6326f0/public_url' },
  { title: 'CCNP: Core Networking', img: '/img/ccnp-core-networking.png', url: 'https://www.credly.com/badges/e0903876-2f7f-4078-9ead-a9ce028033ee/public_url' },
  { title: 'CCNP: Advanced Routing', img: '/img/ccnp-advanced-routing.png', url: 'https://www.credly.com/badges/5d4ae9ba-10cb-4191-b5b5-34e7d4cadb12/public_url' },
  { title: 'Network Security', img: '/img/network-security.png', url: 'https://www.credly.com/badges/9f105464-2897-419e-a083-8575f595bf06/public_url' },
];

// Certificados de Ciberseguridad (Coursera · U. de los Andes)
export const cyberCerts = [
  { title: 'Ciberseguridad — Programa especializado', sub: '3 cursos · verificar ↗', img: '/certificados/coursera-ciberseguridad-specialization.jpeg', url: 'https://coursera.org/verify/specialization/6RHVWYNJE3B5' },
  { title: 'Principios y Regulaciones de Seguridad de la Información', sub: 'verificar ↗', img: '/certificados/coursera-principios-seguridad.jpeg', url: 'https://coursera.org/verify/AB0A54IDWEFZ' },
  { title: 'Seguridad en la Red', sub: 'verificar ↗', img: '/certificados/coursera-seguridad-en-la-red.jpeg', url: 'https://coursera.org/verify/5OQ9VUO0SGSP' },
  { title: 'Vulnerabilidades y Pruebas de Penetración', sub: 'verificar ↗', img: '/certificados/coursera-vulnerabilidades-pentesting.jpeg', url: 'https://coursera.org/verify/AYCILZRZTGBE' },
];

// Módulos Microsoft Learn (Azure AI Fundamentals)
export const msLearn = [
  { title: 'Conceptos básicos de IA', url: 'https://learn.microsoft.com/api/achievements/share/es-es/JOSEIGNACIOCARTAGENAMEDINA-5385/9X8Z74PU?sharingId=792702710764021C' },
  { title: 'Azure AI: Introducción a AI', url: 'https://learn.microsoft.com/api/achievements/share/es-es/JOSEIGNACIOCARTAGENAMEDINA-5385/WZAY34HN?sharingId=792702710764021C' },
  { title: 'Aspectos básicos del aprendizaje automático', url: 'https://learn.microsoft.com/api/achievements/share/es-es/JOSEIGNACIOCARTAGENAMEDINA-5385/87XDJUHW?sharingId=792702710764021C' },
  { title: 'Aspectos básicos de los servicios de Azure AI', url: 'https://learn.microsoft.com/api/achievements/share/es-es/JOSEIGNACIOCARTAGENAMEDINA-5385/2B4EAGAV?sharingId=792702710764021C' },
  { title: 'Aspectos básicos de Computer Vision', url: 'https://learn.microsoft.com/api/achievements/share/es-es/JOSEIGNACIOCARTAGENAMEDINA-5385/DCG5KFPJ?sharingId=792702710764021C' },
  { title: 'Azure AI: Computer Vision', url: 'https://learn.microsoft.com/api/achievements/share/es-es/JOSEIGNACIOCARTAGENAMEDINA-5385/ESJBEJ5P?sharingId=792702710764021C' },
  { title: 'Aspectos básicos del reconocimiento facial', url: 'https://learn.microsoft.com/api/achievements/share/es-es/JOSEIGNACIOCARTAGENAMEDINA-5385/J96LD3JT?sharingId=792702710764021C' },
  { title: 'Reconocimiento óptico de caracteres (OCR)', url: 'https://learn.microsoft.com/api/achievements/share/es-es/JOSEIGNACIOCARTAGENAMEDINA-5385/ZKPQZPD2?sharingId=792702710764021C' },
  { title: 'Análisis de texto con el servicio de lenguaje', url: 'https://learn.microsoft.com/api/achievements/share/es-es/JOSEIGNACIOCARTAGENAMEDINA-5385/WZAYWUZN?sharingId=792702710764021C' },
];

export const nav = [
  { href: '#about', label: 'sobre-mi' },
  { href: '#experience', label: 'experiencia' },
  { href: '#skills', label: 'skills' },
  { href: '#education', label: 'educación' },
  { href: '#certs', label: 'certificaciones' },
  { href: '#contact', label: 'contacto' },
];
