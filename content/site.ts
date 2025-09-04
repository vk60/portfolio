export const site = {
  name: "Vikas Yadav • Portfolio",
  owner: "Vikas yadav",
  url: "https://example.com",
  tagline: "Full‑stack developer crafting delightful web experiences.",
  location: "India",
  availability: "Open to freelance & full‑time opportunities",
  links: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
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
  "Prisma", "Auth",  
];

export const projects = [
  {
    title: "E-Commerce",
    description: "A full fledge application with User Authentication.",
    stack: ["Next.js", "Bootstrap", "MongoDb","React-icons"],
    href: "https://examp.com",
    repo: "https://github.com/vk60/E-commerce",
    image:"/ecommerce.png",
  },
  {
    title: "AI Chat",
    description: "A chat Ai give repsonse in normal as well as in stream",
    stack: ["Next.js", "Openai","Tailwindcss"],
    href: "https://example.com",
    repo: "https://github.com/vk60/chatwithai",
    image:"/chatai1jpg.jpg",
  },
  {
    title: "Movie Max",
    description: "A Movie Websit using nextjs,that show many Categories",
    stack: ["Nextjs", "Bootstrap","Itunes APi"],
    href: "https://example.com",
    repo: "https://github.com/vk60/MovieMax",
    image:"/ Moviemax.jpeg",
  },
  {
    title: "Ai Thumbnail",
    description: "This app helps to build thumbnails.",
    stack: ["Nextjs", "Tailwindcss","OpenAi"],
    href: "https://example.com",
    repo: "https://github.com/vk60/aithumbnail",
    image:"/thumbnailgererator.png",
  },
  {
    title: "Next-Auth",
    description: "A app represents the authentication such as login,signup,logout etc..",
    stack: ["Nextjs", "Tailwindcss","next-auth","MongoDb"],
    href: "https://example.com",
    repo: "https://github.com/vk60/nextauthapplication",
    image:"/ nextauth.jpeg",
  },
  {
    title: "Video Confrence APP",
    description: "A app helps to connect with people through videocall",
    stack: ["Nextjs","Tailwindcss","Zegocloud"],
    href: "https://example.com",
    repo: "https://github.com/vk60/Video-confrence",
    
    image:"/ videoconfrrence.png"
  },
  {
    title: "Music Web",
    description: "Music website which is fully animated and responsive",
    stack: ["Nextjs","Tailwindcss","Typescript","Background-beams","meteors"],
    href: "https://example.com",
    repo: "https://github.com/vk60/Video-confrence",
    image:"/musicweb.png"
  },
  {
    title: "Javascript Basic Projects",
    description: "A basic 10 javascript projects which is beginers friendly easy to understand.",
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
