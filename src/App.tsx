import GlitchText from "./components/GlitchText"
import BubbleMenu from "./components/BubbleMenu"
import DotGrid from "./components/DotGrid"
import ScrollReveal from "./components/ScrollReveal"
import ElectricBorder from "./components/ElectricBorder"
import TiltedCard from './components/TiltedCard';
import ecommerce from "../src/assets/images/ecommerce.jpg";
import NoteLock from "../src/assets/images/NoteLock.jpg";
import Portfolio from "../src/assets/images/Portfolio.jpeg";
import ClickGame from "./components/clickGame";
import VisitorCounter from "./components/visitorCounter";


const projects = [
  {
    title: "NoteLock-secure notes app",
    image: NoteLock,
    desc: "NoteLock is a secure, PIN-protected personal notes application that combines the visual appeal of Google Keep's colorful card system with robust organization features",
    tech: ["Node.js", "Docker", "React with Typescript","", "MongoDB"],
    github: "https://github.com/Sameal11/NoteLock",
    live: "https://notelock-31bb.onrender.com/",
  },
  {
    title: "Portfolio Website",
    image: Portfolio,
    desc: "A personal portfolio website showcasing projects, skills, and experience with modern UI, animations, and responsive design. Built to present professional work and achievements effectively.",
    tech: ["Vercel", "", "typeScript", "React", "TailwindCSS"],
    github: "https://github.com/Sameal11/Sameal11",
    live: "https://samael11.vercel.app",
  },

  {
    title: "E-Commerce Platform",
    image: ecommerce,
    desc: "This is an E-Commerce web application that allows users to browse products, add them to the cart, and make purchases. It includes features like product listing, shopping cart, wishlist, and user authentication.",
    tech: ["HTML", "css", "js", "MYSQL", "Python"],
    github: "https://github.com/yourname/ecommerce",
    live: "https://shop-demo.vercel.app",
  },
];

const items = [
  {
    label: "home",
    href: "#home",
    ariaLabel: "Home",
    rotation: -8,
    hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
  },
  {
    label: "techstack",
    href: "#techstack",
    ariaLabel: "About",
    rotation: 8,
    hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
  },
  {
    label: "projects",
    href: "#projects",
    ariaLabel: "Projects",
    rotation: 8,
    hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
  },
  {
    label: "about",
    href: "#about",
    ariaLabel: "Blog",
    rotation: 8,
    hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
  },
  {
    label: "websites visited",
    href: "#Statistics",
    ariaLabel: "Contact",
    rotation: -8,
    hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
  },
  {
    label: "game",
    href: "#game",
    ariaLabel: "Mini Game",
    rotation: 8,
    hoverStyles: { bgColor: "#22c55e", textColor: "#ffffff" },
  },

]

const techCategories = [
  {
    title: "Frontend",
    color: "#7df9ff",
    items: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Next.js"],
  },
  {
    title: "Backend",
    color: "#ff007f",
    items: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    title: "Tools & DevOps",
    color: "#9d4edd",
    items: ["Git", "Docker", "AWS", "CI/CD", "Vercel"],
  },
  {
    title: "Cyber Security",
    color: "#f97316",
    items: ["Burp Suite", "Nmap", "Wireshark", "Metasploit", "OWASP Top 10"],
  },
] as const

export default function App() {
  return (
    <main className="w-full bg-black text-white relative">

      {/* ===== GLOBAL GRID BACKGROUND (VISIBLE EVERYWHERE) ===== */}
      <div className="fixed inset-0 z-0 pointer-events-none will-change-transform translate-z-0">
        <DotGrid />
      </div>
      {/* Bubble Menu */}
        <div className="absolute top-6 right-6 z-20">
          <BubbleMenu
            logo={
              <span style={{ fontWeight: 700, color: "black" }}>
                Bored 😩😎{" "}
                <a
                  href="https://your-game-url.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline", color: "black" }}
                >
                  click me
                </a>
              </span>
            }

            items={items}
            menuAriaLabel="Toggle navigation"
            menuBg="#ffffff"
            menuContentColor="#111111"
            useFixedPosition={true}
            animationEase="back.out(1.5)"
            animationDuration={0.5}
            staggerDelay={0.12}
            closeOnItemClick={true}
          />
        </div>

      {/* ================= HERO ================= */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
          <GlitchText speed={0.7} enableShadows enableOnHover>
            Hi, I’m Aryan 👋
          </GlitchText>

          <p className="mt-6 text-lg text-gray-400 max-w-xl">
            Full-stack developer focused on building clean, scalable, and
            performance-driven web applications.
          </p>
          <h4 className="mt-4 text-sm text-gray-500">
            Scroll down to see my work 👇
          </h4>
           {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              {/* Download Resume Button */}
              <a
                href="https://drive.google.com/uc?export=download&id=1Z-ldWaf2lVzHOGjPF4SAnTSjS2Jqzy-o"
                download
                className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
              >
                Download Resume
              </a>

              {/* Second Button – Customize as you like */}
              <a
                href="#projects"
                className="px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition"
              >
                View Projects
              </a>
              <a
                href="#game"
                className="px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition"
              >
                Game
              </a>

            </div>
        </div>
      </section>

      {/* ================= TECH SECTION ================= */}
      <section id="techstack" className="relative z-10 py-24 md:py-32 px-4 md:px-6 text-white">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
          <div>
            <ScrollReveal textClassName="text-3xl md:text-4xl font-bold tracking-tight">
              Tech stack that powers my work.
            </ScrollReveal>

            <p className="mt-4 text-gray-400 max-w-xl">
              From polished frontends to production-ready backends and hardened infrastructure,
              these are the technologies I reach for to ship fast and safely.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="space-y-2">
                <p className="font-semibold text-white/80">Frontend focus</p>
                <p className="text-gray-400">
                  Component-driven UIs, responsive layouts, nuanced motion, and accessibility baked in.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-white/80">Backend &amp; security</p>
                <p className="text-gray-400">
                  API design, databases, CI/CD pipelines, cloud deployments, and application hardening.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {techCategories.map((category) => (
              <ElectricBorder
                key={category.title}
                color={category.color}
                speed={1}
                chaos={0.12}
                style={{ borderRadius: 28 }}
              >
                <div className="p-5 sm:p-6 flex flex-col gap-3">
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {category.items.map((tech) => (
                      <li
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-200 backdrop-blur-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </ElectricBorder>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="relative z-10 py-32 px-6  text-white">
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <TiltedCard
              key={i}
              imageSrc={p.image}
              altText={p.title}
              captionText={p.title}
              containerHeight="350px"
              containerWidth="350px"
              imageHeight="350px"
              imageWidth="350px"
              rotateAmplitude={10}
              scaleOnHover={1.06}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent

              overlayContent={
                <div className="p-4 text-white bg-black/70 rounded-lg">

                  <h3 className="text-lg font-bold mb-2">
                    {p.title}
                  </h3>

                  <p className="text-sm mb-3 opacity-80">
                    {p.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-800 rounded text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 text-sm">
                    <a
                      href={p.github}
                      target="_blank"
                      className="text-blue-400 hover:underline"
                    >
                      GitHub
                    </a>

                    <a
                      href={p.live}
                      target="_blank"
                      className="text-green-400 hover:underline"
                    >
                      Live Demo
                    </a>
                  </div>

                </div>
              }
            />
          ))}
        </div>

      </section>

      {/* ================= ABOUT ================= */}
      <section id="contact" className="relative z-10 py-24 px-6  text-white">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">

          {/* LEFT - SOCIAL LINKS */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Let’s work together</h2>

            <p className="text-gray-400">
              Have a project in mind or just want to say hi?
            </p>

            <div className="flex flex-col gap-4 mt-6">
              <a href="https://in.linkedin.com/in/aryan-raj-arya-6449a92b1" target="_blank"
                className="px-4 py-3 bg-blue-700 rounded-md hover:bg-blue-600 transition">
                LinkedIn
              </a>

              <a href="https://github.com/Sameal11" target="_blank"
                className="px-4 py-3 bg-gray-800 rounded-md hover:bg-gray-700 transition">
                GitHub
              </a>

              <a href="https://instagram.com/yourusername" target="_blank"
                className="px-4 py-3 bg-pink-600 rounded-md hover:bg-pink-500 transition">
                Instagram
              </a>
            </div>
          </div>


          {/* MIDDLE - VISITOR COUNTER */}
          <div className="flex items-start justify-center">
            <VisitorCounter />
          </div>


          {/* RIGHT - CONTACT FORM */}
          <div className="bg-black/50 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>

            <form
              action="https://formspree.io/f/xreaednj"
              method="POST"
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="p-3 rounded bg-gray-800 border border-gray-700"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="p-3 rounded bg-gray-800 border border-gray-700"
              />

              <textarea
                name="message"
                placeholder="Project details or message..."
                required
                rows={4}
                className="p-3 rounded bg-gray-800 border border-gray-700"
              />

              <button
                type="submit"
                className="px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

      </section>

      {/* ================= GAME SECTION ================= */}     
      <section id="game" className="relative z-10 py-24 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Bored? Play a Game!</h2>

          <ClickGame />
        </div>
      </section>


    </main>
  )
}
