import GlitchText from "./components/GlitchText"
import BubbleMenu from "./components/BubbleMenu"
import DotGrid from "./components/DotGrid"
import ScrollReveal from "./components/ScrollReveal"
import ElectricBorder from "./components/ElectricBorder"

const items = [
  {
    label: "home",
    href: "#",
    ariaLabel: "Home",
    rotation: -8,
    hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
  },
  {
    label: "about",
    href: "#",
    ariaLabel: "About",
    rotation: 8,
    hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
  },
  {
    label: "projects",
    href: "#",
    ariaLabel: "Projects",
    rotation: 8,
    hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
  },
  {
    label: "blog",
    href: "#",
    ariaLabel: "Blog",
    rotation: 8,
    hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
  },
  {
    label: "contact",
    href: "#",
    ariaLabel: "Contact",
    rotation: -8,
    hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
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

      {/* ================= HERO ================= */}
      <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden">

        {/* Bubble Menu */}
        <div className="absolute top-6 right-6 z-20">
          <BubbleMenu
            logo={<span style={{ fontWeight: 700 }}>RB</span>}
            items={items}
            menuAriaLabel="Toggle navigation"
            menuBg="#ffffff"
            menuContentColor="#111111"
            useFixedPosition={false}
            animationEase="back.out(1.5)"
            animationDuration={0.5}
            staggerDelay={0.12}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
          <GlitchText speed={0.7} enableShadows enableOnHover>
            Hi, I’m Aryan 👋
          </GlitchText>

          <p className="mt-6 text-lg text-gray-400 max-w-xl">
            Full-stack developer focused on building clean, scalable, and
            performance-driven web applications.
          </p>
        </div>
      </section>

      {/* ================= TECH SECTION ================= */}
      <section className="relative z-10 py-24 md:py-32 px-4 md:px-6 text-white">
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
      <section id="projects" className="relative z-10 py-32 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-16">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="p-6 border border-gray-700 rounded-xl bg-black/60 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">
                Project One
              </h3>
              <p className="text-gray-400">
                A short description of what this project does and why it’s cool.
              </p>
            </div>

            <div className="p-6 border border-gray-700 rounded-xl bg-black/60 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">
                Project Two
              </h3>
              <p className="text-gray-400">
                Another project showcasing your skills and experience.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="relative z-10 py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-4">
            Let’s work together
          </h2>

          <p className="text-gray-300 mb-8">
            Have a project in mind or just want to say hi?
          </p>

          <button className="px-6 py-3 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-200 transition">
            Contact Me
          </button>

        </div>
      </section>

    </main>
  )
}
