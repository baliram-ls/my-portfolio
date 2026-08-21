export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <h1 className="text-xl font-bold">
          Baliram Suryawanshi<span className="text-cyan-400">.</span>
        </h1>

        <div className="hidden gap-6 text-sm text-slate-300 sm:flex">
          <a href="#about" className="hover:text-cyan-400">
            About
          </a>
          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>
          <a href="#skills" className="hover:text-cyan-400">
            Skills
          </a>
          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-[80vh] max-w-6xl items-center px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-cyan-400">
            Hello, I&apos;m
          </p>

          <h2 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Baliram Suryawanshi
          </h2>

          <h3 className="mt-4 text-2xl font-semibold text-slate-300 sm:text-3xl">
            Computer Science Engineering Student
          </h3>


          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I&apos;m a 5th-semester Computer Science Engineering student passionate about software development, problem solving
 and building real-world projects. I&apos;m continuously learning new technologies and improving my skills to become a better developer.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-700 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
<section
  id="about"
  className="border-t border-slate-800 px-6 py-24"
>
  <div className="mx-auto max-w-6xl">
    <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
      About Me
    </p>

    <div className="mt-4 grid gap-10 md:grid-cols-2 md:items-start">
      <div>
        <h2 className="text-3xl font-bold sm:text-4xl">
          Building my skills.
          <br />
          Building my future.
        </h2>

        <p className="mt-6 leading-8 text-slate-400">
          I&apos;m a B.E. Computer Science & Engineering student at
          Sambhram Institute of Technology, Bangalore. I enjoy turning
          ideas into practical software and learning by building real
          projects.
        </p>

        <p className="mt-4 leading-8 text-slate-400">
          I&apos;m focused on becoming a strong software engineer by
          combining problem solving with modern development skills.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm text-cyan-400">Education</p>
          <h3 className="mt-2 font-semibold">
            B.E. Computer Science
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            Sambhram Institute of Technology
            <br />
            Bangalore
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm text-cyan-400">Interests</p>
          <h3 className="mt-2 font-semibold">
            Development & DSA
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            Web development, Android, algorithms and problem solving.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:col-span-2">
          <p className="text-sm text-cyan-400">My Goal</p>
          <h3 className="mt-2 text-lg font-semibold">
            Build. Learn. Solve. Repeat.
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            To become a versatile software engineer who creates useful
            products and keeps learning throughout the journey.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  {/* Projects */}
<section
  id="projects"
  className="border-t border-slate-800 px-6 py-24"
>
  <div className="mx-auto max-w-6xl">
    <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
      Projects
    </p>

    <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <h2 className="text-3xl font-bold sm:text-4xl">
          Things I&apos;ve built.
        </h2>

        <p className="mt-3 max-w-2xl text-slate-400">
          A collection of projects where I turn ideas into working
          applications and learn by building.
        </p>
      </div>
    </div>

    {/* AttendLock */}
    <div className="group mt-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition hover:-translate-y-1 hover:border-cyan-400/50">
      <div className="p-7 sm:p-9">
        <div className="flex flex-col justify-between gap-6 sm:flex-row">
          <div>
            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
              Android App
            </span>

            <h3 className="mt-5 text-3xl font-bold">
              AttendLock
            </h3>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              A smart attendance tracking application designed to help
              students manage attendance, understand their attendance
              status, and make better decisions about their classes.
            </p>
          </div>

          <div className="text-sm text-slate-500 sm:text-right">
            <p>My Project</p>
            <p className="mt-1">2026</p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-7 flex flex-wrap gap-2">
          {[
            "Android",
            "Java",
            "XML",
            "Android Studio",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/baliram-ls"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View on GitHub →
          </a>

          <a
            href="#"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Project Details
          </a>
        </div>
      </div>
    </div>

    {/* Coming Soon */}
    <div className="mt-6 rounded-3xl border border-dashed border-slate-800 p-7 sm:p-9">
      <p className="text-sm text-cyan-400">
        More projects coming soon
      </p>

      <h3 className="mt-2 text-xl font-semibold">
        Building something new...
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        New projects will appear here as I build and learn.
      </p>
    </div>
  </div>
</section>
    {/* Skills */}
<section
  id="skills"
  className="border-t border-slate-800 px-6 py-24"
>
  <div className="mx-auto max-w-6xl">
    <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
      Skills
    </p>

    <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
      Tools I use to build things.
    </h2>

    <p className="mt-4 max-w-2xl text-slate-400">
      Technologies and computer science concepts I&apos;m learning and
      working with throughout my engineering journey.
    </p>

    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {/* Programming */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm font-semibold text-cyan-400">
          Programming
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {["C", "Java", "Python"].map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Web Development */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm font-semibold text-cyan-400">
          Web Development
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {["HTML", "CSS", "JavaScript", "React", "Next.js"].map(
            (skill) => (
              <span
                key={skill}
                className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>

      {/* Android */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm font-semibold text-cyan-400">
          Android Development
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {["Android", "Java", "XML", "Android Studio"].map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Core CS */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm font-semibold text-cyan-400">
          Core Computer Science
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {["DSA", "DBMS", "Operating Systems"].map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:col-span-2">
        <p className="text-sm font-semibold text-cyan-400">
          Tools & Workflow
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {["Git", "GitHub", "VS Code", "Android Studio"].map(
            (skill) => (
              <span
                key={skill}
                className="rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  </div>
</section>
   {/* Contact */}
<section id="contact" className="border-t border-slate-800 px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
      Contact
    </p>

    <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
      Let&apos;s connect.
    </h2>

    <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
      I&apos;m always interested in learning, collaborating, and building
      interesting projects. Feel free to reach out.
    </p>

    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="https://github.com/baliram-ls"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-slate-600 px-6 py-3 font-medium transition hover:border-cyan-400 hover:text-cyan-400"
      >
        GitHub →
      </a>

      <a
        href="https://www.linkedin.com/in/baliram-suryawanshi-0b07a9338/"
        className="rounded-full border border-slate-600 px-6 py-3 font-medium transition hover:border-cyan-400 hover:text-cyan-400"
      >
        LinkedIn →
      </a>

      <a
        href="mailto:suryawanshibaliram90@gmail.com"
        className="rounded-full border border-slate-600 px-6 py-3 font-medium transition hover:border-cyan-400 hover:text-cyan-400"
      >
        Email →
      </a>

      <a
      href="mailto:suryawanshibaliram90@gmail.com"
        className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
      >
        Resume · Coming Soon
      </a>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Baliram Suryawanshi. Built with Next.js.
      </footer>
    </main>
  );
}