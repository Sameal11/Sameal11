import GlitchText from "./components/GlitchText"
import BubbleMenu from "./components/BubbleMenu"
import DotGrid from "./components/DotGrid"
import ScrollReveal from "./components/ScrollReveal"
import ElectricBorder from "./components/ElectricBorder"
import ecommerce from "../src/assets/images/ecommerce.jpg";
import NoteLock from "../src/assets/images/NoteLock.jpg";
import Portfolio from "../src/assets/images/Portfolio.jpeg";
import SnakeGame from "./components/SnakeGame";
import VisitorCounter from "./components/visitorCounter";
import TimeWidget from "./components/TimeWidget";
import GithubProjectCard from "./components/GithubProjectCard";
import { Mail, Github, Linkedin, Instagram, ArrowRight } from "lucide-react";


const projects = [
  {
    title: "NoteLock-secure notes app",
    image: NoteLock,
    desc: "NoteLock is a secure, PIN-protected personal notes application that combines the visual appeal of Google Keep's colorful card system with robust organization features",
    tech: ["Node.js", "Docker", "React with Typescript", "", "MongoDB"],
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
      <div className="fixed inset-0 z-0 pointer-events-none will-change-transform translate-z-0 bg-black">
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

          <p className="mt-8 text-lg text-gray-400 max-w-xl font-light tracking-wide">
            Aspiring Developer and Cyber Security Student pursuing B.Tech CSE (Cyber Security) in SRM, focused on learning modern
            web development and building secure, scalable applications while continuously improving my technical skills
          </p>
          <div className="mt-6 flex items-center gap-4 text-xs font-mono text-gray-600">
            <span>[01] AVAILABLE FOR WORK</span>
            <span>//</span>
            <span>[02] BASED IN INDIA</span>
          </div>
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
      <section id="techstack" className="relative z-10 py-24 md:py-40 px-4 md:px-6 text-white min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-[1.2fr_1fr] items-start">
          <div>
            <ScrollReveal textClassName="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Tech stack that powers my work.
            </ScrollReveal>

            <p className="mt-6 text-gray-400 max-w-xl text-lg md:text-xl leading-relaxed">
              These are the technologies I use to build responsive frontends, structured backends, and
              secure-by-design
              applications as I continue developing my skills.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 text-base md:text-lg text-gray-300">
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
                <div className="p-5 sm:p-8 md:p-10 flex flex-col gap-5 bg-black h-full rounded-[28px]">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">{category.title}</h3>
                  <ul className="flex flex-wrap gap-3">
                    {category.items.map((tech) => (
                      <li
                        key={tech}
                        className="px-4 py-2 rounded-md border border-white/10 text-sm md:text-base text-gray-300 font-mono hover:border-white/30 transition-colors"
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
      <section id="projects" className="relative z-10 py-32 px-6 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal textClassName="text-4xl md:text-6xl font-bold tracking-tighter mb-16">
            Selected Works.
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-16">
            {projects.map((p, i) => (
              <GithubProjectCard
                key={i}
                title={p.title}
                image={p.image}
                desc={p.desc}
                tech={p.tech}
                github={p.github}
                live={p.live}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT / BENTO GRID ================= */}
      <section id="contact" className="relative z-10 py-24 px-6 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
              Let’s work together.
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
              Building something cool? I'm ready to help you ship it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">

            {/* 1. Contact Form (Large - 2x2 on Desktop) */}
            <div className="md:col-span-2 md:row-span-2 bg-black border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                <Mail className="w-6 h-6 text-gray-500" />
              </div>

              <h3 className="text-2xl font-bold mb-6 tracking-tight">Send a message</h3>

              <form action="https://formspree.io/f/xreaednj" method="POST" className="flex flex-col gap-4 h-full">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" name="name" placeholder="NAME" required className="bg-white/5 border border-white/10 p-3 rounded-lg text-sm focus:border-white/40 outline-none transition-colors placeholder:text-gray-600 font-mono" />
                  <input type="email" name="email" placeholder="EMAIL" required className="bg-white/5 border border-white/10 p-3 rounded-lg text-sm focus:border-white/40 outline-none transition-colors placeholder:text-gray-600 font-mono" />
                </div>
                <textarea name="message" placeholder="PROJECT DETAILS..." required rows={3} className="bg-white/5 border border-white/10 p-3 rounded-lg text-sm focus:border-white/40 outline-none transition-colors placeholder:text-gray-600 font-mono resize-none flex-grow" />
                <button type="submit" className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                  SEND MESSAGE <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* 2. Visitor Counter (1x1) */}
            <div className="md:col-span-1 md:row-span-1">
              <VisitorCounter />
            </div>

            {/* 3. Time Widget (1x1) */}
            <div className="md:col-span-1 md:row-span-1">
              <TimeWidget />
            </div>

            {/* 4. Social Stack (1x2 - Vertical Stack of links) */}
            <div className="md:col-span-1 md:row-span-2 flex flex-col gap-4">
              {/* LinkedIn */}
              <a href="https://in.linkedin.com/in/aryan-raj-arya-6449a92b1" target="_blank" className="flex-1 bg-black border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:bg-blue-600 hover:border-blue-600 transition-all group">
                <div className="flex justify-between items-start">
                  <span className="text-gray-500 group-hover:text-white font-mono text-xs">LINKEDIN</span>
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight">Connect</span>
              </a>

              {/* GitHub */}
              <a href="https://github.com/Sameal11" target="_blank" className="flex-1 bg-black border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 transition-all group">
                <div className="flex justify-between items-start">
                  <span className="text-gray-500 group-hover:text-white font-mono text-xs">GITHUB</span>
                  <Github className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight">Follow</span>
              </a>
            </div>

            {/* 5. Location / Extra (1x1) */}
            <div className="md:col-span-1 md:row-span-1 bg-black border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-colors">
              <span className="text-gray-500 font-mono text-xs">LOCATION</span>
              <div>
                <p className="text-2xl font-bold tracking-tight">Remote</p>
                <p className="text-sm text-gray-500">Available Worldwide</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= GAME SECTION ================= */}
      <section id="game" className="relative z-10 py-24 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Bored? Play a Game!</h2>

          <SnakeGame />
        </div>
      </section>

      {/* ================= GRAND FINALE FOOTER ================= */}
      <footer className="relative z-10 min-h-[100svh] w-full bg-black text-white overflow-hidden flex flex-col justify-between px-6 py-16">

        <div className="max-w-7xl mx-auto w-full flex flex-col justify-between flex-1">

          {/* Massive Call to Action */}
          <div className="relative mb-16">
            <h2 className="text-[12vw] leading-none font-bold tracking-tight font-dot text-center md:text-left uppercase relative z-10">
              LET'S<br />BUILD<br />TOGETHER
            </h2>

            {/* Decorative Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
          </div>


          {/* Bottom Section */}
          <div className="grid md:grid-cols-2 gap-12 items-end border-t border-white/10 pt-12">

            {/* Left: Manifesto */}
            <div>
              <p className="text-xl md:text-2xl font-google font-medium leading-relaxed max-w-md">
                Crafting digital experiences that leave a lasting impression.
              </p>

              <div className="flex flex-wrap gap-6 mt-8">
                <a
                  href="mailto:contact@aryan.dev"
                  className="text-gray-400 hover:text-white transition-colors font-google font-medium"
                >
                  contact@aryan.dev
                </a>

                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors font-google font-medium"
                >
                  Resumé
                </a>
              </div>
            </div>


            {/* Right: Socials & Copyright */}
            <div className="flex flex-col md:items-end gap-6 text-left md:text-right">

              {/* Social Icons */}
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/Sameal11" },
                  { icon: Linkedin, href: "#" },
                  { icon: Instagram, href: "#" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>


              {/* Copyright */}
              <p className="text-sm text-gray-500 font-google">
                © {new Date().getFullYear()} Aryan. All Rights Reserved.

                <span className="block mt-1 text-xs opacity-50 font-mono">
                  Local Time: {new Date().toLocaleTimeString()}
                </span>
              </p>

            </div>

          </div>

        </div>

      </footer>

    </main>
  )
}


