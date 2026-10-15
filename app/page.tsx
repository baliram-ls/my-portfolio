const projects = [
  {
    number: "01",
    category: "AI · LEGALTECH",
    name: "LegalMate AI",
    description:
      "An AI-powered legal information assistant that helps users explore legal topics through a conversational interface.",
    stack: ["Python", "Flask", "Groq API"],
    demo: "https://legalmate-ai-deploy.vercel.app/",
    github: "https://github.com/baliram-ls/legalmate-ai",
    mark: "L.",
  },
  {
    number: "02",
    category: "ANDROID · PRODUCTIVITY",
    name: "AttendLock",
    description:
      "An attendance-tracking application designed to help students manage their timetable and understand their attendance.",
    stack: ["Java", "Android", "XML"],
    github: "https://github.com/baliram-ls/attendlock",
    mark: "A.",
  },
];

const skills = [
  "Java",
  "Data Structures & Algorithms",
  "REST APIs",
  "SQL",
  "Python",
  "Flask",
  "Git & GitHub",
  "Android",
  "Next.js",
];

const linkStyle =
  "inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium transition hover:border-sky-400/50 hover:bg-white/[0.05]";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090c11] text-[#f2f5fa]">
      <header className="sticky top-0 z-20 border-b border-white/[0.07] bg-[#090c11]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-semibold tracking-tight">
            baliram<span className="text-sky-400">.</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-400 sm:flex">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#skills">Skills</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-sky-200"
          >
            Let's talk ↗
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[1.15fr_0.85fr] md:py-32"
      >
        <div>
          <p className="mb-7 text-xs font-medium uppercase tracking-[0.22em] text-sky-400">
            Computer Science · Bengaluru, India
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Building useful software,
            <span className="mt-2 block text-slate-500">
              one problem at a time.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400">
            I'm Baliram Suryawanshi, a Computer Science Engineering student
            interested in Java, backend development, APIs, and building
            applications that solve real problems.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-sky-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Explore my work ↗
            </a>
            <a
              href="https://github.com/baliram-ls"
              target="_blank"
              rel="noreferrer"
              className={linkStyle}
            >
              GitHub ↗
            </a>
          </div>
          <p className="mt-7 text-sm text-slate-500">
            B.E. Computer Science & Engineering · 5th semester
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-sky-500/[0.08] blur-3xl" />
          <div className="relative rounded-3xl border border-white/10 bg-[#0e141d] p-6 shadow-2xl sm:p-8">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
              <span className="text-sm text-slate-400">A little about me</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>
            <p className="mt-8 font-mono text-sm text-sky-400">
              {"// Current direction"}
            </p>
            <p className="mt-3 text-2xl font-medium tracking-tight">
              Java & problem solving
            </p>
            <p className="mt-3 leading-7 text-slate-400">
              Learning the fundamentals, building projects, and getting better
              at writing software every day.
            </p>
            <div className="mt-8 space-y-4">
              {[
                ["01", "Backend development"],
                ["02", "APIs & databases"],
                ["03", "Practical projects"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="flex items-center gap-4 border-t border-white/[0.07] pt-4"
                >
                  <span className="font-mono text-xs text-sky-400">
                    {number}
                  </span>
                  <span className="text-sm text-slate-300">{label}</span>
                  <span className="ml-auto text-slate-600">↗</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-4">
          {[
            ["01", "Engineering student"],
            ["02", "Featured projects"],
            ["Java", "Primary language"],
            ["Bengaluru", "Based in India"],
          ].map(([value, label]) => (
            <div key={label} className="bg-[#0b1017] p-5 sm:p-7">
              <p className="text-xl font-medium tracking-tight">{value}</p>
              <p className="mt-2 text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="mx-auto grid max-w-6xl gap-10 border-t border-white/[0.07] px-6 py-24 md:grid-cols-2"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-sky-400">
            About
          </p>
          <h2 className="mt-5 max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Curious about how things work. Focused on building things that do.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-slate-400">
          <p>
            I'm pursuing a B.E. in Computer Science at Sambhram Institute of
            Technology, Bengaluru. I enjoy programming, solving problems, and
            learning by building.
          </p>
          <p>
            My current focus is strengthening Java and DSA while exploring
            backend engineering, APIs, databases, and software design.
          </p>
          <p>
            My goal is to become a strong software engineer and contribute to
            useful products with a good team.
          </p>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-6xl border-t border-white/[0.07] px-6 py-24"
      >
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-sky-400">
              Selected work
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Projects I've built.
            </h2>
          </div>
          <a
            href="https://github.com/baliram-ls"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-400 transition hover:text-sky-400"
          >
            More on GitHub ↗
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group rounded-3xl border border-white/[0.09] bg-[#0c1119] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  {project.number} / {project.category}
                </span>
                <span className="text-3xl font-semibold text-sky-400/80">
                  {project.mark}
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                {project.name}
              </h3>
              <p className="mt-3 min-h-20 leading-7 text-slate-400">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3 border-t border-white/[0.08] pt-6">
                {"demo" in project && project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-sky-400 px-4 py-2.5 text-sm font-medium text-slate-950 hover:bg-sky-300"
                  >
                    Live demo ↗
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={linkStyle}
                >
                  Source code ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="mx-auto max-w-6xl border-t border-white/[0.07] px-6 py-24"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-sky-400">
          Tools & technologies
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight">
          What I'm learning and using.
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/[0.09] bg-white/[0.02] px-4 py-3 text-sm text-slate-300 transition hover:border-sky-400/40"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl border-t border-white/[0.07] px-6 py-24"
      >
        <div className="rounded-3xl border border-white/[0.09] bg-[#0d131c] p-7 sm:p-12">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-400">
            Contact
          </p>
          <div className="mt-5 grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <h2 className="max-w-md text-3xl font-semibold tracking-tight sm:text-5xl">
                Let's build something useful.
              </h2>
              <p className="mt-4 leading-7 text-slate-400">
                Open to connecting with developers, collaborating on projects,
                and exploring internship opportunities.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:suryawanshibaliram90@gmail.com"
                className={linkStyle}
              >
                Email me <span className="ml-auto">↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/baliram-suryawanshi-0b07a9338/"
                target="_blank"
                rel="noreferrer"
                className={linkStyle}
              >
                LinkedIn <span className="ml-auto">↗</span>
              </a>
              <a
                href="https://github.com/baliram-ls"
                target="_blank"
                rel="noreferrer"
                className={linkStyle}
              >
                GitHub <span className="ml-auto">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-7 text-sm text-slate-500">
          <a href="#home" className="font-semibold text-white">
            baliram<span className="text-sky-400">.</span>
          </a>
          <span>© {new Date().getFullYear()} Baliram Suryawanshi</span>
          <a href="#home" className="transition hover:text-white">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
