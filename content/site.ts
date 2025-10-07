export const site = {
  name: "Vikas Yadav • Portfolio",
  owner: "Vikas yadav",
  url: "https://example.com",
  tagline: "Full‑stack developer crafting delightful web experiences.",
  location: "India",
  availability: "Open to freelance & full‑time opportunities",
  links: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/vikas-yadav-509956246",
    email: "vikasy.vy6060@gmail.com"
  }
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
] as const;

export const skills = [
  "Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", 
   "Auth",  
];

export const projects = [
  {
    id:"1",
    title: "E-Commerce",
    description: "A full-fledged e-commerce web application with secure user authentication and role-based access control. This project allows users to browse products, add them to a shopping cart, and complete purchases with a seamless checkout flow. It features a product management dashboard for admins to add, update, and remove products, while users can manage their profiles and order history. Built using Next.js for a fast and SEO-friendly frontend, MongoDB for scalable data storage, and Bootstrap/TailwindCSS for responsive UI design. The app also integrates payment simulation, product search, filtering, and responsive layouts to ensure a smooth shopping experience across devices. This project demonstrates my ability to design and implement complex full-stack applications while focusing on performance, usability, and maintainability.",
    stack: ["Next.js", "Bootstrap", "MongoDb","React-icons"],
    href: "https://examp.com",
    repo: "https://github.com/vk60/E-commerce",
    image:"/ecommerce.png",
  },
  {
    id:"2",
    title: "AI Chat",
    description: "AI Chat is an advanced chat application built with Next.js and OpenAI API integration. It supports both standard and streaming responses, making interactions seamless and natural. The project leverages TailwindCSS for modern responsive UI. It demonstrates real-time AI interactions and is great for learning how to integrate AI APIs into frontend applications.",
    stack: ["Next.js", "Openai","Tailwindcss"],
    href: "https://example.com",
    repo: "https://github.com/vk60/chatwithai",
    image:"/chatai1jpg.jpg",
  },
  {
    id:"3",
    title: "Movie Max",
    description: "Movie Max is a movie discovery platform that fetches and displays movie details using the iTunes API. Built with Next.js and Bootstrap, it showcases dynamic categories, search, and responsive layouts. The project focuses on API integration, routing, and UI presentation of entertainment data",
    stack: ["Nextjs", "Bootstrap","Itunes APi"],
    href: "https://moviemax60.netlify.app/",
    repo: "https://github.com/vk60/MovieMax",
    image:"/moviemax.png",
  },
  {
    id:"4",
    title: "Ai Thumbnail",
    description: "AI Thumbnail is an AI-powered tool for generating thumbnails quickly and efficiently. It integrates with the OpenAI API and provides a clean interface for users to design thumbnails for projects or videos. Built with Next.js and TailwindCSS, it demonstrates practical AI-assisted design features.",
    stack: ["Nextjs", "Tailwindcss","OpenAi"],
    href: "https://example.com",
    repo: "https://github.com/vk60/aithumbnail",
    image:"/thumbnailgererator.png",
  },
  {
    id:"5",
    title: "Next-Auth",
    description: "Next-Auth project demonstrates secure authentication in a Next.js application. It includes features such as signup, login, and logout using NextAuth.js and MongoDB. TailwindCSS provides a modern UI. This project is a great reference for building secure, production-ready authentication systems",
    stack: ["Nextjs", "Tailwindcss","next-auth","MongoDb"],
    href: "https://example.com",
    repo: "https://github.com/vk60/nextauthapplication",
    image:"/nextauth.jpeg",
  },
  {
    id:"6",
    title: "Video Confrence APP",
    description: "The Video Conference App allows users to join or host video meetings using Zegocloud’s real-time API. Built with Next.js and TailwindCSS, it focuses on providing a simple and intuitive video conferencing experience. It highlights how to integrate third-party SDKs into modern web apps.",
    stack: ["Nextjs","Tailwindcss","Zegocloud"],
    href: "https://example.com",
    repo: "https://github.com/vk60/Video-confrence",
    
    image:"/videoconfrrence.jpg"
  },
  {
    id:"7",
    title: "Music Web",
    description: "A fully animated and responsive music website built with Next.js, TailwindCSS, and TypeScript. The site provides an immersive user experience with smooth transitions, background beam effects, and interactive meteor animations. It is designed to showcase playlists, albums, and artist details with a modern UI and advanced features such as dynamic routing, API integration for fetching live music data, and mobile-first responsive design. This project demonstrates my ability to combine frontend animations with scalable backend solutions while maintaining performance and accessibility.",
    stack: ["Nextjs","Tailwindcss","Typescript","Background-beams","meteors"],
    href: "https://example.com",
    repo: "https://github.com/vk60/Video-confrence",
    image:"/musicweb.png"
  },
  {
    id:"8",
    title: "Javascript Basic Projects",
    description: "A collection of 10 beginner-friendly JavaScript projects, each focusing on a different fundamental concept of the language. These projects include simple games, interactive UI components, calculators, to-do lists, and form validations. The aim is to provide a hands-on way for beginners to understand core concepts like DOM manipulation, event handling, ES6 features, and basic algorithms. Each project is structured for clarity, with clean code and comments to help learners follow along easily. This repository serves as a practical starting point for anyone looking to improve their JavaScript skills by building real-world mini applications",
    stack: ["Html","Css","Javascript"],
    href: "https://example.com",
    repo: "https://github.com/vk60/javascriptsprojects",
    image:"/ksimages.jpeg"
  },
];

export const experience = [
  {
    role: "Full‑stack Developer",
    
    bullets: [
      "Built and shipped features used by 100k+ users using Next.js and Node.",
      "Improved page performance (LCP) by 38% through code‑splitting and caching.",
      "Led adoption of TypeScript and testing best practices."
    ]
  },
  {
    role: "Frontend Engineer",
    
    bullets: [
      "Developed a design system and accelerated delivery by 3×.",
      "Owned complex data‑viz features with virtualization."
    ]
  }
];
