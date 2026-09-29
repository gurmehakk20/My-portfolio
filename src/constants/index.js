export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Resume',
    href: '#resume',
  },
  {
    id: 5,
    name: 'Experience',
    href: '#experience',
  },
  {
    id: 6,
    name: 'Contact',
    href: '#contact',
  },
];

/** Real testimonials only — add entries here if you re-enable the Clients section. */
export const clientReviews = [
  {
    id: 1,
    name: 'Preksha Mahajan',
    position: 'Ex-Community Lead at Open Source Chandigarh',
    img: '/assets/Clients/review1.webp',
    linkedin: 'https://www.linkedin.com/in/preksha-mahajan-090359214/',
    review:
      'Gurmehak is a very skilled individual. Her role as a Technical Team Member under the Open Source vertical made a significant impact on our projects, events, and team dynamics. She has a strong grasp of programming languages and software development practices, and I highly recommend her for roles that match her skills and goals.',
  },
];

export const myProjects = [
  {
    title: 'Aarogya Care - Healthcare Platform',
    desc: 'Aarogya Care is a production-style healthcare platform: patients find specialists and book appointments, while doctors and admins manage schedules from role-based dashboards secured with JWT authentication.',
    subdesc:
      'Built on the MERN stack with Tailwind CSS: 15+ REST APIs for appointment booking, profile management and scheduling, secure image uploads via Cloudinary, and responsive dashboards built from reusable UI components.',
    href: 'https://aarogya-care-gamma.vercel.app/',
    admin: 'https://aarogya-care-admin.vercel.app/',
    texture: '/Projects/Videos/aarogya-care.mp4',
    logo: '/Projects/Logos/aarogya-care.webp',
    logoStyle: { backgroundColor: '#ffffff', border: '0.2px solid #2F80ED', boxShadow: '0px 0px 60px 0px rgba(47, 128, 237, 0.35)' },
    spotlight: '/Projects/Spotlight/spotlight2.webp',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/logos/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: '/assets/logos/node.webp',
      },
      {
        id: 3,
        name: 'Express.js',
        path: '/assets/logos/express.webp',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/logos/mongodb.webp',
      },
      {
        id: 5,
        name: 'TailwindCSS',
        path: '/assets/logos/tailwindcss.png',
      },
    ],
  },
  {
    title: 'Floralia- Florist E-commerce Platform',
    desc: 'Floralia is a florist-focused e-commerce front end: browse products, read detailed descriptions, save favorites, and complete a guided checkout flow.',
    subdesc:
      'I owned the UI and shopping journey in React, using Tailwind for layout and responsive states and Figma for the visual system.',
    href: 'https://floralia.vercel.app/',
    github: 'https://github.com/gurmehakk20/Floralia',
    texture: '/Projects/Videos/floralia.mp4',
    logo: '/Projects/Logos/floralia.webp',
    logoStyle: {
      backgroundColor: '#ffc9dbff', // Off-white background
      border: '0.2px solid #F57CA5', // Pink border
      boxShadow: '0px 0px 60px 0px #F57CA54D', // Soft pink glow
    },

    spotlight: '/Projects/Spotlight/spotlight1.webp',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/logos/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/logos/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Javascript',
        path: '/assets/logos/javascript.svg',
      },
      {
        id: 4,
        name: 'Figma',
        path: '/assets/logos/figma.svg',
      },
    ],
  },
  {
    title: 'ILMKOSH - Online Book Store Web-app',
    desc: 'ILMKOSH is a full-stack bookstore: browse and search titles, manage listings, and publish books through a MERN codebase with REST APIs and validation on both client and server.',
    subdesc:
      'Stack: MongoDB, Express, React, Node, and Tailwind. I focused on end-to-end flows from API design to responsive UI and data validation on both client and server.',
    href: 'https://ilmkosh.vercel.app/',
    github: 'https://github.com/gurmehakk20/ILMKOSH',
    texture: '/Projects/Videos/ilmkosh.mp4',
    logo: '/Projects/Logos/ilmkosh.webp',
    logoStyle: { backgroundColor: '#3E2C20', border: '0.2px solid #20160f', boxShadow: '0px 0px 60px 0px rgba(199, 176, 137, 0.28)', },
    spotlight: '/Projects/Spotlight/spotlight1.webp',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/logos/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/assets/logos/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Javascript',
        path: '/assets/logos/javascript.svg',
      },
      {
        id: 4,
        name: 'Express.js',
        path: '/assets/logos/express.webp',
      },
      {
        id: 5,
        name: 'Node.js',
        path: '/assets/logos/node.webp',
      },
      {
        id: 6,
        name: 'MongoDB',
        path: '/assets/logos/mongodb.webp',
      },
    ],
  },
  {
    title: 'CompileX- An Online IDE',
    desc: 'Browser-based IDE to create, run, and manage multiple code playgrounds with Judge0-backed execution, themes, and I/O consoles.',
    subdesc:
      'Built with React, CodeMirror, and Styled Components: multi-language execution via Judge0, editor themes, file upload/download, I/O consoles, local storage for multiple playgrounds, and fullscreen mode.',
    href: 'https://compilex-azure.vercel.app/',
    github: 'https://github.com/gurmehakk20/CompileX',
    texture: '/Projects/Videos/compileX.mp4',
    logo: '/assets/logos/compileX.webp',
    logoStyle: { backgroundColor: '#0D205B', border: '0.2px solid #4EA5FF', boxShadow: '0px 0px 60px 0px rgba(78, 165, 255, 0.35)', },
    spotlight: '/Projects/Spotlight/spotlight5.webp',
    tags: [
    {
      id: 1,
      name: 'React.js',
      path: '/assets/logos/react.svg',
    },
    {
      id: 2,
      name: 'CodeMirror',
      path: '/assets/logos/Baboon.svg',
    },
    {
      id: 3,
      name: 'JavaScript',
      path: '/assets/logos/javascript.svg',
    },
    {
      id: 4,
      name: 'Judge0 API',
      path: '/assets/logos/Judge0.webp',
    },
  ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Rocket Global Technologies',
    pos: 'Full Stack Developer Intern',
    duration: 'June 2026 - Present · Bengaluru',
    title: "Own the end-to-end integration of the mobile recharge workflow, building responsive Next.js interfaces, backend APIs and external integrations that support recharge transactions across multiple operators. Integrated multiple third-party vendors into the platform, implementing vendor-specific APIs and transaction workflows for seamless payment processing, and work directly with the founders and engineering stakeholders to turn product requirements and feedback into production-ready features, from development through delivery.",
    icon: '/assets/logos/rocket-global.webp', // placeholder monogram — swap in the official logo
  },
  {
    id: 2,
    name: 'Pratishthan Software Ventures',
    pos: 'Software Development Engineer Intern',
    duration: 'September 2025 - April 2026 · Bengaluru',
    title: "Integrated network directory validation logic for the UK BCS payment system and wrote component-test scripts to execute payment workflows, identify issues and debug integration failures. Developed and optimized backend services for UK payment systems including UKFPS, BACS and CHAPS, implementing payment workflows and validation requirements, and built and maintained unit tests and CI/CD automation to improve reliability across payment-processing workflows.",
    icon: '/assets/logos/pratisthan.webp',
  },
  {
    id: 3,
    name: 'OneSnack',
    pos: 'Internship - Web Developer',
    duration: 'July 2024 - Dec 2024',
    title: "During my internship, I contributed to designing and developing multiple core webpages for a gourmet snacks platform, focusing on creating a visually appealing interface and smooth user navigation. I collaborated with a team of 12 amazing developers, aligning design and functionality with brand goals, which helped improve user engagement and overall satisfaction.",
    icon: '/assets/logos/onesnack-logo.webp',
    video: '/Projects/Videos/onesnack.mp4',
  },
  {
    id: 4,
    name: 'Open Source Chandigarh',
    pos: 'Technical Team Member',
    duration: 'Sept 2023 - June 2024',
    title: "I contributed to organizing and supporting multiple open-source-focused events, engaging over 100 participants. I assisted in conducting workshops on Git and GitHub, helping attendees improve their version control proficiency, and participated in initiatives that promoted awareness and active involvement in open-source practices.",
    icon: '/assets/logos/osc-logo.webp',
    video: '/Projects/Videos/OSC.mp4',

  },
  
];
