export default function Home() {
  const projects = [
    {
      name: "LegalMate AI",
      type: "AI · LegalTech",
      description:
        "An AI-powered legal information assistant that helps users explore legal topics through a conversational interface.",
      tech: ["Python", "Flask", "Groq API", "JavaScript"],
      github: "https://github.com/baliram-ls",
      demo: "https://baliram-portfolio-two.vercel.app",
    },
    {
      name: "AttendLock",
      type: "Android · Productivity",
      description:
        "An attendance tracking app designed to help students monitor attendance and understand their class attendance status.",
      tech: ["Java", "XML", "Android Studio"],
      github: "https://github.com/baliram-ls",
    },
    {
      name: "Developer Portfolio",
      type: "Web · Personal",
      description:
        "My personal portfolio showcasing projects, technical skills, education, and contact information.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      github: "https://github.com/baliram-ls/my-portfolio",
    },
  ];

  const skills = [
    "Java",
    "Python",
    "C",
    "DSA",
    "REST APIs",
    "Flask",
    "Next.js",
    "React",
    "SQL / DBMS",
    "Git",
    "GitHub",
  ];

  return (
    <main className="min-h-screen bg-[#0b0d12] text-slate-200">
      <nav className="sticky top-0 z-10 border-b border-white/10 bg-[#0b0d12]/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <a href="#home" className="font-mono text-lg font-bold text-white">
            baliram<span className="text-sky-400">.</span>
          </a>

          <div className="flex gap-4 text-sm text-slate-400 sm:gap-6">
            <a href="#about" className="hover:text-sky-400">About</a>
            <a href="#projects" className="hover:text-sky-400">Projects</a>
            <a href="#skills" className="hover:text-sky-400">Skills</a>
            <a href="#contact" className="hover:text-sky-400">Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-24 md:grid-cols-[1.4fr_0.6fr] md:py-32">
        <div>
          <p className="mb-5 font-mono text-sm text-sky-400">
            B.E. CSE · 5th Semester · Bengaluru
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            Building software.
            <br />
            <span className="text-sky-400">Solving problems.</span>
          </h1>

          <p className="mt-6 max-w-xl leading-7 text-slate-400">
            I’m Baliram Suryawanshi, a Computer Science Engineering student
            focused on Java, backend development, APIs, databases, and
            practical software projects. I’m looking for opportunities to
            learn from experienced engineers and contribute to real products.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-lg bg-sky-400 px-5 py-3 font-semibold text-slate-950 hover:bg-sky-300">
              Explore projects
            </a>
            <a href="https://github.com/baliram-ls" target="_blank" rel="noreferrer" className="rounded-lg border border-white/15 px-5 py-3 font-semibold hover:border-sky-400">
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#111722] p-6 font-mono text-sm shadow-xl">
          <p className="mb-5 text-slate-500">~/baliram</p>
          <p><span className="text-sky-400">role</span>: student developer</p>
          <p className="mt-3"><span className="text-sky-400">focus</span>: backend & APIs</p>
          <p className="mt-3"><span className="text-sky-400">language</span>: Java</p>
          <p className="mt-3"><span className="text-sky-400">status</span>: learning & building</p>
        </div>
      </section>

      <section id="about" className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <p className="font-mono text-sm text-sky-400">01 / ABOUT</p>
          <h2 className="mt-3 text-3xl font-bold text-white">A little about me.</h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-400">
            I study Computer Science and Engineering at Sambhram Institute
            of Technology, Bengaluru. I enjoy understanding how software
            works, solving programming problems, and turning ideas into
            useful applications. I’m developing my skills in Java, data
            structures, backend engineering, and databases through consistent
            practice and personal projects.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 p-5">
              <p className="text-sm text-slate-500">Education</p>
              <p className="mt-2 font-semibold text-white">B.E. Computer Science & Engineering</p>
              <p className="mt-1 text-sm text-slate-400">Sambhram Institute of Technology, Bengaluru</p>
            </div>
            <div className="rounded-xl border border-white/10 p-5">
              <p className="text-sm text-slate-500">Current focus</p>
              <p className="mt-2 font-semibold text-white">Software Engineering</p>
              <p className="mt-1 text-sm text-slate-400">Java · DSA · Backend development</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <p className="font-mono text-sm text-sky-400">02 / PROJECTS</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Selected work.</h2>
          <p className="mt-3 text-slate-400">Projects built to learn, solve problems, and improve my engineering skills.</p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="flex flex-col rounded-2xl border border-white/10 bg-[#111722] p-6 transition hover:-translate-y-1 hover:border-sky-400/50">
                <p className="font-mono text-xs text-sky-400">{project.type}</p>
                <h3 className="mt-3 text-xl font-bold text-white">{project.name}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-400">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4 text-sm font-semibold">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-200 hover:text-sky-400">
                    GitHub ↗
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="text-sky-400 hover:text-sky-300">
                      Live demo ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <p className="font-mono text-sm text-sky-400">03 / SKILLS</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Tools I’m learning and using.</h2>
          <div className="mt-7 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-lg border border-white/10 bg-[#111722] px-4 py-2 text-sm text-slate-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <p className="font-mono text-sm text-sky-400">04 / EDUCATION</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Education.</h2>
          <div className="mt-7 rounded-2xl border border-white/10 bg-[#111722] p-6">
            <p className="text-sm text-sky-400">Currently pursuing</p>
            <h3 className="mt-2 text-xl font-bold text-white">B.E. Computer Science and Engineering</h3>
            <p className="mt-2 text-slate-400">Sambhram Institute of Technology · Bengaluru, Karnataka</p>
            <p className="mt-2 text-sm text-slate-500">5th semester</p>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <p className="font-mono text-sm text-sky-400">05 / CONTACT</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Let’s connect.</h2>
          <p className="mt-4 max-w-xl leading-7 text-slate-400">
            I’m interested in software engineering internships, backend
            development, and collaborating on useful projects.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="mailto:suryawanshibaliram90@gmail.com" className="rounded-lg bg-sky-400 px-5 py-3 font-semibold text-slate-950 hover:bg-sky-300">
              Email me
            </a>
            <a href="https://www.linkedin.com/in/baliram-suryawanshi-0b07a9338/" target="_blank" rel="noreferrer" className="rounded-lg border border-white/15 px-5 py-3 font-semibold hover:border-sky-400">
              LinkedIn ↗
            </a>
            <a href="https://github.com/baliram-ls" target="_blank" rel="noreferrer" className="rounded-lg border border-white/15 px-5 py-3 font-semibold hover:border-sky-400">
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-7 text-center text-sm text-slate-500">
        © 2026 Baliram Suryawanshi · Built with Next.js and Tailwind CSS.
      </footer>
    </main>
  );
}
