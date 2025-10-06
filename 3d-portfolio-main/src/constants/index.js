const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  // { text: "Ideas", imgPath: "/images/ideas.svg" },
  // { text: "Concepts", imgPath: "/images/concepts.svg" },
  // { text: "Designs", imgPath: "/images/designs.svg" },
  // { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1.2, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "'s of", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Adrian showcased strong practical expertise in React development, turning complex ideas into functional, interactive, and high-performing web applications through hands-on implementation.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "React Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and deployed fully functional React applications with reusable and modular components.",
      "Utilized React Hooks (useState, useEffect, useContext) to manage state and side effects effectively.",
      "Integrated RESTful APIs and handled real-time data rendering with efficient UI updates.",
      "Implemented routing, form handling, and component-based architectures for scalable front-end solutions.",
      "Styled applications using CSS Modules and Tailwind CSS, ensuring responsive and modern interfaces.",
      "Collaborated in team-based projects, practicing version control (Git/GitHub) and agile development workflows.",
      "Focused on performance optimization, debugging, and code refactoring to enhance user experience and maintainability.",
    ],
  },
  {
    review: "Adrian demonstrated strong skills in JavaScript and DOM manipulation, creating visually engaging and interactive web pages with clean, responsive CSS and efficient API integrations.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: " DOM Manipulation & JavaScript Developer",
    date: "June 2023 - Oct 2024",
    responsibilities: [
      "Built interactive web interfaces using pure JavaScript, manipulating the DOM for dynamic content updates.",
      "Fetched and displayed live data from public APIs, enhancing projects with real-time functionality.",
      "Styled layouts using pure CSS, focusing on responsiveness and clean design principles without external frameworks.",
      "Implemented event listeners and user interactions to improve engagement and interactivity.",
      "Optimized scripts for faster page rendering and smoother animations using native JavaScript methods.",
      "Practiced modular coding and debugging techniques to ensure maintainable and scalable front-end behavior.",
    ],
  },

  {
    review: "Adrian’s JavaScript development skills brought dynamic functionality and seamless user experiences to our web projects. His ability to write efficient, modular code greatly enhanced front-end performance.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "JavaScript Developer",
    date: "June 2023 - Oct 2024",
    responsibilities: [
      "Developed dynamic and interactive web components using core JavaScript (ES6+).",
      "Implemented DOM manipulation, event handling, and asynchronous programming for responsive UIs.",
      "Optimized front-end performance through efficient code structuring and reusable functions.",
      "Integrated RESTful APIs and managed real-time data rendering for enhanced user experience.",
      "Collaborated with UI/UX teams to create smooth, intuitive, and accessible user interactions.",
      "Debugged and refactored legacy scripts to improve maintainability and scalability.",
    ],
  },
  {
    review: "Adrian’s expertise in crafting accessible, responsive, and semantic web structures has significantly improved our website’s usability and SEO performance.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Front-End Developer (HTML & Semantic HTML)",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Developed clean, maintainable, and semantic HTML structures to enhance accessibility and SEO.",
      "Implemented responsive layouts using modern HTML5 elements ensuring cross-browser compatibility.",
      "Collaborated with designers and backend teams to create user-friendly, standards-compliant interfaces.",
      "Optimized web pages for faster load times and improved rendering performance.",
      "Ensured adherence to W3C standards and best practices for semantic markup and accessibility (WCAG).",
    ],
  },
  {
    review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "c++/oops Competitions",
    date: "June 2023 - Oct 2024",
    responsibilities: [
      "Actively participated in multiple inter-university and online programming competitions focused on Object-Oriented Programming (OOP) concepts.",
      "Solved complex algorithmic and logical problems using C++, emphasizing efficiency and clean code design.",
      "Collaborated in team-based coding challenges to design and implement real-world problem solutions under time constraints.",
      "Achieved consistent recognition for strong understanding of OOP principles, abstraction, inheritance, and polymorphism.",
      "Gained practical experience in competitive programming environments, enhancing analytical thinking and debugging skills."
    ],



  }, ,
  {
    review: "Adrian showed great enthusiasm and creativity while learning 3D modeling fundamentals, quickly adapting to new tools and techniques for visual design.",
    imgPath: "/images/exp4.png",
    logoPath: "/images/logo4.png",
    title: "3D Modeling (Beginner Level)",
    date: "Jan 2024 - Oct 2024",
    responsibilities: [
      "Explored the basics of 3D modeling using tools like Blender and SketchUp.",
      "Created simple 3D objects, environments, and prototypes for visualization practice.",
      "Learned essential modeling concepts such as meshes, textures, lighting, and rendering.",
      "Experimented with camera positioning, object scaling, and material adjustments to improve visual accuracy.",
      "Developed an understanding of 3D workflows and best practices for beginner-level projects.",
      "Collaborated with peers and followed tutorials to enhance creativity and technical confidence in 3D design.",
    ],
  },

  {
    review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "C++",
    date: "June 2023 - Oct 2024",
    responsibilities: [
      "Developed multiple academic and personal projects using Object-Oriented Programming principles in C++.",
      "Implemented data structures, algorithms, and file handling across various assignments to strengthen computational logic.",
      "Created several small-scale console-based and graphical games demonstrating creativity and problem-solving.",
      "Worked on modular and reusable code designs, ensuring scalability and maintainability of projects.",
      "Practiced debugging, performance tuning, and memory management to enhance software reliability and efficiency."
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
