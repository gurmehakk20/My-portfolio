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
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  // {
  //   id: 1,
  //   name: 'Preksha Mahajan',
  //   position: 'Ex-Community Lead at Open Source Chandigarh',
  //   img: 'reviews/preksha.jpeg',
  //   linkedin: 'https://www.linkedin.com/in/preksha-mahajan-090359214/',
  //   review:
  //     'Gurmehak is a very skilled individual. Her role as a Technical Team Member under Open Source vertical has made a significant impact to our projects, events and team dynamics. She possesses a deep understanding of various programming languages and software development methodologies. I have no doubt that she will continue to excel and make substantial contributions in any future endeavors she undertakes. It is with great pleasure that I highly recommend Gurmehak for any position or opportunity that aligns with her skills and aspirations.',
  // },
  {
    id: 1,
    name: 'Jane Doe',
    position: 'CEO of Acme Corp',
    img: '/assets/Clients/review1.png',
    review:
      'Working with Gurmehak was a fantastic experience. She took our vision and turned it into a beautiful, functional website that perfectly represents our brand. Her attention to detail and dedication to quality is unmatched. Highly recommended!',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: '/assets/Clients/review2.png',
    review:
      'Gurmehak expertise in web development is truly impressive. She delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. She’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: '/assets/Clients/review3.png',
    review:
      'I can’t say enough good things about Gurmehak. She was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: '/assets/Clients/review4.png',
    review:
      'Gurmehak was a pleasure to work with. She understood our requirements perfectly and delivered a website that exceeded our expectations. Her skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Floralia- Florist E-commerce Platform',
    desc: 'Floralia is a beautifully designed e-commerce platform dedicated to florists. It offers a seamless shopping experience with features like product browsing, detailed flower descriptions, and a secure checkout process. Allows users to explore, like and purchase a wide variety of floral pots with ease.',
    
    href: 'https://floralia.vercel.app/',
    texture: '/Projects/Videos/floralia.mp4',
    logo: '/Projects/Logos/floralia.png',
    logoStyle: {
      backgroundColor: '#ffc9dbff', // Off-white background
      border: '0.2px solid #F57CA5', // Pink border
      boxShadow: '0px 0px 60px 0px #F57CA54D', // Soft pink glow
    },

    spotlight: '/Projects/Spotlight/spotlight1.png',
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
    desc: 'ILMKOSH is an innovative online book store web application that offers a vast collection of books across various genres. Users can easily browse, search, and publisj books through a user-friendly interface.',
    subdesc:
      'Built using MERN stack (MongoDB, Express.js, React.js, Node.js) and TailwindCSS, ILMKOSH provides a seamless and engaging experience for book lovers.',
    href: 'https://ilm-kosh.netlify.app/',
    texture: '/Projects/Videos/ilmkosh.mp4',
    logo: '/Projects/Logos/ilmkosh.jpg',
    logoStyle: { backgroundColor: '#2A1816', border: '0.2px solid #36201D', boxShadow: '0px 0px 60px 0px #AA3C304D', },
    spotlight: '/Projects/Spotlight/spotlight1.png',
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
        name: 'TypeScript',
        path: '/assets/logos/javascript.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/logos/framer.png',
      },
    ],
  },
  {
    title: 'CarePulse - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/Projects/textures/project/project3.mp4',
    logo: '/Projects/Logos/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/Projects/Spotlight/spotlight3.png',
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
        name: 'TypeScript',
        path: '/assets/logos/javascript.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/logos/framer.png',
      },
    ],
  },
  {
    title: 'Horizon - Online Banking Platform',
    desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    subdesc:
      'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/Projects/textures/project/project4.mp4',
    logo: '/Projects/Logos/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/Projects/Spotlight/spotlight4.png',
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
        name: 'TypeScript',
        path: '/assets/logos/javascript.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/logos/framer.png',
      },
    ],
  },
  {
    title: 'Imaginify - AI Photo Manipulation App',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/Projects/textures/project/project5.mp4',
    logo: '/Projects/Logos/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/Projects/Spotlight/spotlight5.png',
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
        name: 'TypeScript',
        path: '/assets/logos/javascript.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/logos/framer.png',
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
    name: 'OneSnack',
    pos: 'Internship - Web Developer',
    duration: 'July 2024 - Dec 2024',
    title: "During my internship, I contributed to designing and developing multiple core webpages for a gourmet snacks platform, focusing on creating a visually appealing interface and smooth user navigation. I collaborated with a team of 12 amazing developers, aligning design and functionality with brand goals, which helped improve user engagement and overall satisfaction.",
    icon: '/assets/logos/onesnack-logo.png',
    video: '/Projects/Videos/onesnack.mp4',
  },
  {
    id: 2,
    name: 'Open Source Chandigarh',
    pos: 'Technical Team Member',
    duration: 'Sept 2023 - June 2024',
    title: "I contributed to organizing and supporting multiple open-source-focused events, engaging over 100 participants. I assisted in conducting workshops on Git and GitHub, helping attendees improve their version control proficiency, and participated in initiatives that promoted awareness and active involvement in open-source practices.",
    icon: '/assets/logos/osc-logo.jpg',
    video: '/Projects/Videos/OSC.mp4',

  },
  
];
