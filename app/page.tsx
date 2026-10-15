const projects = [
  {
    number: "01",
    name: "LegalMate AI",
    category: "AI · LEGALTECH",
    description:
      "An AI-powered legal information assistant that helps users explore legal topics through a conversational interface.",
    tech: ["Python", "Flask", "Groq API"],
    github: "https://github.com/baliram-ls/legalmate-ai",
    demo: "https://legalmate-ai-deploy.vercel.app/",
  },
  {
    number: "02",
    name: "AttendLock",
    category: "ANDROID · PRODUCTIVITY",
    description:
      "An attendance tracking application designed to help students manage their attendance and understand their class status.",
    tech: ["Java", "Android", "XML"],
    github: "https://github.com/baliram-ls/attendlock",
  },
];

const skillGroups = [
  { name: "LANGUAGES", items: ["Java", "Python", "C"] },
  { name: "BACKEND", items: ["Flask", "REST APIs", "SQL basics"] },
  { name: "WEB", items: ["HTML", "CSS", "JavaScript", "Next.js"] },
  { name: "TOOLS", items: ["Git", "GitHub", "VS Code"] },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0b0d12] text-slate-200">
      <header className="sticky top-0 z-20 border-b border-white/[0.07] bg-[#0b0d12]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="text-lg font-bold tracking-tight text-white">
            baliram<span className="text-sky-400">.</span>
          </a>
          <div className="flex gap-4 text-sm text-slate-400 sm:gap-7">
            <a href="#about" className="transition hover:text-sky-400">About</a>
            <a href="#projects" className="transition hover:text-sky-400">Work</a>
            <a href="#skills" className="transition hover:text-sky-400">Skills</a>
            <a href="#contact" className="transition hover:text-sky-400">Contact</a>
          </div>
        </nav>
      </header>

      <section id="home" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="mb-6 flex items-center gap-3 font-mono text-xs tracking-widest text-sky-400 sm:text-sm">
            <span className="h-px w-7 bg-sky-400" />
            COMPUTER SCIENCE · BENGALURU, INDIA
          </p>
          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building software
            <span className="mt-2 block text-sky-400">that solves problems.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m Baliram Suryawanshi, a CSE student interested in Java,
            backend engineering, APIs, and building useful applications.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-lg bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
              Explore my work <span aria-hidden="true">↗</span>
            </a>
            <a href="https://github.com/baliram-ls" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-sky-400/60">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="mt-7 text-sm text-slate-500">
            B.E. Computer Science & Engineering · 5th semester
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rounded-3xl bg-sky-400/[0.06] blur-2xl" />
          <div className="relative rounded-2xl border border-white/10 bg-[#111620] p-5 shadow-2xl sm:p-6">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              <span className="ml-auto font-mono text-xs text-slate-500">developer.txt</span>
            </div>
            <div className="space-y-5 py-5 font-mono text-sm">
              <div>
                <p className="text-slate-500">01 / CURRENT FOCUS</p>
                <p className="mt-1 text-white">Java & problem solving</p>
              </div>
              <div>
                <p className="text-slate-500">02 / EXPLORING</p>
                <p className="mt-1 text-white">Backend · APIs · Databases</p>
              </div>
              <div>
                <p className="text-slate-500">03 / BUILDING</p>
                <p className="mt-1 text-sky-400">AI and Android projects</p>
              </div>
            </div>
            <div className="border-t border-white/10 pt-4 text-xs text-slate-500">
              learn(); &nbsp; build(); &nbsp; improve();
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 border-t border-white/[0.07]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="font-mono text-xs tracking-widest text-sky-400">01 / ABOUT</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">A little about me.</h2>
          </div>
          <div>
            <p className="text-base leading-8 text-slate-400">
              I&apos;m pursuing a B.E. in Computer Science and Engineering at
              Sambhram Institute of Technology, Bengaluru. I enjoy solving
              programming problems and turning ideas into working software.
              I&apos;m currently strengthening my Java, DSA, and backend
              fundamentals by building projects and practising consistently.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-xs text-slate-500">EDUCATION</p>
                <p className="mt-2 font-semibold text-white">B.E. Computer Science</p>
                <p className="mt-1 text-sm text-slate-400">Sambhram Institute of Technology</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <p className="text-xs text-slate-500">PRIMARY LANGUAGE</p>
                <p className="mt-2 font-semibold text-white">Java</p>
                <p className="mt-1 text-sm text-slate-400">DSA and software engineering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-20 border-t border-white/[0.07]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs tracking-widest text-sky-400">02 / SELECTED WORK</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Projects I&apos;ve built.</h2>
            </div>
            <a href="https://github.com/baliram-ls" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 transition hover:text-sky-400">
              More on GitHub ↗
            </a>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="group flex flex-col rounded-2xl border border-white/10 bg-[#10141d] p-6 transition duration-200 hover:-translate-y-1 hover:border-sky-400/40 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs tracking-wider text-sky-400">{project.category}</span>
                  <span className="font-mono text-xs text-slate-600">{project.number}</span>
                </div>
                <h3 className="mt-7 text-2xl font-bold text-white">{project.name}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-400">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-md border border-white/10 px-2.5 py-1.5 text-xs text-slate-300">{tech}</span>
                  ))}
                </div>
                <div className="mt-7 flex gap-5 border-t border-white/[0.07] pt-5 text-sm font-medium">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white transition hover:text-sky-400">
                    Source code ↗
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sky-400 transition hover:text-sky-300">
                      Live demo ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-20 border-t border-white/[0.07]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="font-mono text-xs tracking-widest text-sky-400">03 / TOOLKIT</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">Technologies I work with.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.name} className="rounded-xl border border-white/10 p-5">
                <h3 className="font-mono text-xs tracking-wider text-slate-500">{group.name}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-md bg-white/[0.05] px-2.5 py-1.5 text-sm text-slate-300">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 px-5 py-16 sm:px-8 sm:py-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs tracking-widest text-sky-400">04 / CONTACT</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Let&apos;s build something.</h2>
            <p className="mt-4 max-w-lg leading-7 text-slate-400">
              Interested in software engineering, backend development, or useful projects? I&apos;d be happy to connect.
            </p>
            <a href="mailto:suryawanshibaliram90@gmail.com" className="mt-6 inline-flex rounded-lg bg-sky-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-300">
              Get in touch ↗
            </a>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-slate-400">
            <a href="https://www.linkedin.com/in/baliram-suryawanshi-0b07a9338/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">LinkedIn ↗</a>
            <a href="https://github.com/baliram-ls" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">GitHub ↗</a>
            <a href="mailto:suryawanshibaliram90@gmail.com" className="hover:text-sky-400">Email ↗</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.07] px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Baliram Suryawanshi</p>
          <p>Designed and built with Next.js.</p>
        </div>
      </footer>
    </main>
  );
}
