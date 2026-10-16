"use client";

import { useState } from "react";
import { Inter_Tight } from "next/font/google";

const font = Inter_Tight({ subsets: ["latin"], weight: ["400", "500", "600"] });

const LINKEDIN = "https://www.linkedin.com/in/baliram-suryawanshi-0b07a9338/";
const GITHUB = "https://github.com/baliram-ls";
const EMAIL = "suryawanshibaliram90@gmail.com";

type Project = {
  name: string;
  type: string;
  desc: string;
  stack: string;
  image?: string; // add a screenshot path like "/legalmate.png" (put the file in /public)
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    name: "LegalMate AI",
    type: "Web app",
    desc: "A legal information assistant. You ask a question in plain language and get an answer on topics such as property law and consumer rights.",
    stack: "Python, Flask, Groq API, JavaScript",
    image: "",
    links: [
      { label: "Live demo", href: "https://legalmate-ai-deploy.vercel.app/" },
      { label: "Source code", href: "https://github.com/baliram-ls/legalmate-ai" },
    ],
  },
  {
    name: "AttendLock",
    type: "Android app",
    desc: "An attendance tracker for students. It shows your timetable, your attendance percentage, and how many classes you can miss in each subject.",
    stack: "Java, Android, XML",
    image: "",
    links: [{ label: "Source code", href: "https://github.com/baliram-ls/attendlock" }],
  },
];

const skills = [
  { group: "Languages", items: "Java, Python, C, JavaScript, SQL, HTML, CSS" },
  { group: "Backend", items: "Flask, REST APIs, SQL databases" },
  { group: "Frontend and mobile", items: "Next.js, Android (Java and XML)" },
  { group: "Tools", items: "Git, GitHub, VS Code" },
];

const css = `
*{box-sizing:border-box;margin:0;padding:0}
.pf{--bg:#efefec;--ink:#111;--mut:#5d5d58;--rule:#cdcdc7;background:var(--bg);color:var(--ink);min-height:100vh;overflow-x:hidden;line-height:1.5;-webkit-font-smoothing:antialiased}
.pf a{color:inherit;text-decoration:none}
.pf a:focus-visible,.pf button:focus-visible{outline:2px solid var(--ink);outline-offset:3px}
.wrap{max-width:1180px;margin:0 auto;padding:0 28px}
.ul{text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:4px}
.ul:hover{text-decoration-thickness:2px}
.small{font-size:13px;color:var(--mut)}

.nav{display:flex;align-items:center;justify-content:space-between;height:60px;font-size:14px}
.nav .name{font-weight:600;font-size:16px;letter-spacing:-.01em}
.nav ul{display:flex;gap:30px;list-style:none}
.nav ul a:hover,.nav .ml:hover{text-decoration:underline;text-underline-offset:4px}
.burger{display:none;background:none;border:0;font:inherit;font-size:14px;cursor:pointer;color:var(--ink)}
.mnav{display:none}

.hero{padding:56px 0 64px}
.hero .meta{font-size:13px;color:var(--mut);margin-bottom:28px}
.hero h1{font-size:clamp(40px,7.4vw,98px);line-height:1.02;font-weight:500;letter-spacing:-.045em;max-width:1000px}
.hero-bottom{display:grid;grid-template-columns:1fr 1fr;gap:48px;margin-top:72px;align-items:end}
.hero-bottom p{font-size:15px;max-width:380px;margin-bottom:22px}
.btn{display:inline-block;background:var(--ink);color:#fff!important;font-size:13px;font-weight:500;padding:12px 18px;border-radius:0}
.btn:hover{background:#333}
.latest .lh{display:flex;justify-content:space-between;font-size:12px;color:var(--mut);margin-bottom:8px}
.latest a{display:flex;justify-content:space-between;padding:12px 0;border-top:1px solid var(--rule);font-size:14px}
.latest a:last-child{border-bottom:1px solid var(--rule)}
.latest a:hover span:first-child{text-decoration:underline;text-underline-offset:4px}
.latest span:last-child{color:var(--mut)}

section{padding:72px 0 0;scroll-margin-top:20px}
.sh{display:flex;justify-content:space-between;align-items:baseline;border-top:1px solid var(--ink);padding-top:14px;margin-bottom:8px}
.sh h2{font-size:14px;font-weight:600}

.prow{display:grid;grid-template-columns:1fr 1.5fr 160px;gap:32px;padding:28px 0;border-bottom:1px solid var(--rule)}
.prow h3{font-size:30px;font-weight:500;letter-spacing:-.03em;line-height:1.1}
.prow .type{margin-top:6px}
.prow p{font-size:15px;max-width:520px;margin-bottom:12px}
.prow .stack{font-size:13px;color:var(--mut)}
.prow .links{display:flex;flex-direction:column;gap:6px;font-size:14px;align-items:flex-start}
.shot{grid-column:1/-1;width:100%;aspect-ratio:16/9;object-fit:cover;background:#dcdcd6;display:block}

.about{display:grid;grid-template-columns:1fr 1.5fr;gap:32px;padding:28px 0}
.about p{font-size:20px;line-height:1.4;letter-spacing:-.015em;max-width:640px;margin-bottom:18px}
.facts{display:grid;grid-template-columns:170px 1fr;gap:10px 20px;font-size:15px;margin-top:28px}
.facts dt{color:var(--mut)}

.skrow{display:grid;grid-template-columns:1fr 1.5fr;gap:32px;padding:14px 0;border-bottom:1px solid var(--rule);font-size:15px}
.skrow span:first-child{color:var(--mut)}

.contact{padding:28px 0 0}
.contact .big{display:inline-block;font-size:clamp(24px,4.6vw,60px);font-weight:500;letter-spacing:-.035em;line-height:1.1;word-break:break-all}
.contact .others{display:flex;gap:28px;margin-top:22px;font-size:15px}
.contact p{max-width:480px;margin:0 0 20px;font-size:15px}

footer{margin-top:96px;border-top:1px solid var(--rule);padding:20px 0 28px}
footer .wrap{display:flex;justify-content:space-between;font-size:13px;color:var(--mut)}

@media(max-width:820px){
.hero-bottom,.about,.skrow{grid-template-columns:1fr}
.hero-bottom{margin-top:48px;gap:36px}
.prow{grid-template-columns:1fr;gap:12px}
.prow .links{flex-direction:row;gap:20px;margin-top:4px}
}
@media(max-width:720px){
.wrap{padding:0 20px}
.nav ul,.nav .ml{display:none}
.burger{display:block}
.mnav.open{display:flex;flex-direction:column;border-top:1px solid var(--rule)}
.mnav a{padding:14px 0;border-bottom:1px solid var(--rule);font-size:15px}
.hero{padding:36px 0 48px}
.facts{grid-template-columns:1fr;gap:2px}
.facts dd{margin-bottom:12px}
.about p{font-size:18px}
}
@media(prefers-reduced-motion:reduce){*{transition:none!important}}
`;

export default function Page() {
  const [open, setOpen] = useState(false);
  const nav = ["Projects", "About", "Skills", "Contact"];

  return (
    <div className={`pf ${font.className}`} id="top">
      <style>{css}</style>

      <div className="wrap">
        <header>
          <div className="nav">
            <a className="name" href="#top">Baliram Suryawanshi</a>
            <ul>
              {nav.map((n) => (
                <li key={n}><a href={`#${n.toLowerCase()}`}>{n}</a></li>
              ))}
            </ul>
            <a className="ml ul" href={`mailto:${EMAIL}`}>Email me</a>
            <button className="burger" aria-expanded={open} onClick={() => setOpen(!open)}>
              {open ? "Close" : "Menu"}
            </button>
          </div>
          <div className={`mnav ${open ? "open" : ""}`}>
            {nav.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}>{n}</a>
            ))}
          </div>
        </header>

        <div className="hero">
          <div className="meta">(B.E. Computer Science, 5th semester, Bengaluru)</div>
          <h1>I build backend services, APIs and Android apps that people use.</h1>

          <div className="hero-bottom">
            <div>
              <p>
                I study at Sambhram Institute of Technology. I work in Python, Flask and Java, and I am looking for an internship where I can ship backend code.
              </p>
              <a className="btn" href="#projects">See projects</a>
            </div>
            <div className="latest">
              <div className="lh"><span>Projects</span><span>2</span></div>
              {projects.map((p) => (
                <a key={p.name} href="#projects">
                  <span>{p.name}</span>
                  <span>{p.type}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <section id="projects">
          <div className="sh"><h2>Projects</h2></div>
          {projects.map((p) => (
            <article className="prow" key={p.name}>
              <div>
                <h3>{p.name}</h3>
                <div className="type small">{p.type}</div>
              </div>
              <div>
                <p>{p.desc}</p>
                <div className="stack">{p.stack}</div>
              </div>
              <div className="links">
                {p.links.map((l) => (
                  <a key={l.label} className="ul" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                ))}
              </div>
              {p.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="shot" src={p.image} alt={`${p.name} screenshot`} />
              ) : null}
            </article>
          ))}
        </section>

        <section id="about">
          <div className="sh"><h2>About</h2></div>
          <div className="about">
            <div />
            <div>
              <p>
                I am a Computer Science student focused on Java, data structures and algorithms, and backend development. I like building tools that fix a problem I have run into myself, such as tracking attendance.
              </p>
              <dl className="facts">
                <dt>Education</dt><dd>B.E. CSE, Sambhram Institute of Technology</dd>
                <dt>Currently learning</dt><dd>Advanced DSA and system design</dd>
                <dt>Looking for</dt><dd>Internships and project collaboration</dd>
                <dt>Resume</dt><dd><a className="ul" href="/resume.pdf" download>Download PDF</a></dd>
              </dl>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="sh"><h2>Skills</h2></div>
          {skills.map((s) => (
            <div className="skrow" key={s.group}>
              <span>{s.group}</span>
              <span>{s.items}</span>
            </div>
          ))}
        </section>

        <section id="contact">
          <div className="sh"><h2>Contact</h2></div>
          <div className="contact">
            <p>Email is the fastest way to reach me.</p>
            <a className="big ul" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <div className="others">
              <a className="ul" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="ul" href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} Baliram Suryawanshi</span>
          <a className="ul" href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
