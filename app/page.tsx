"use client";

import { useState } from "react";

const LINKEDIN = "https://www.linkedin.com/in/baliram-suryawanshi-0b07a9338/";
const GITHUB = "https://github.com/baliram-ls";
const LEGALMATE_GITHUB = "https://github.com/baliram-ls/legalmate-ai";
const LEGALMATE_DEMO = "https://legalmate-ai-deploy.vercel.app/";
const ATTENDLOCK_GITHUB = "https://github.com/baliram-ls/attendlock";
const EMAIL = "suryawanshibaliram90@gmail.com";

const skills = [
  { group: "Languages", items: ["Java", "Python", "C", "JavaScript", "SQL", "HTML", "CSS"] },
  { group: "Frameworks and tools", items: ["Flask", "Next.js", "Android", "REST APIs", "Git", "GitHub", "VS Code"] },
];

const css = `
*{box-sizing:border-box;margin:0;padding:0}
.pf{--bg:#0b0f16;--card:#111722;--line:#232c3b;--accent:#4c9aff;--text:#e8edf4;--mut:#9aa6b8;background:var(--bg);color:var(--text);font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;min-height:100vh;overflow-x:hidden;line-height:1.6}
.pf a{color:inherit;text-decoration:none}
.wrap{max-width:900px;margin:0 auto;padding:0 20px}
.nav{position:sticky;top:0;z-index:50;background:var(--bg);border-bottom:1px solid var(--line)}
.nav .wrap{display:flex;align-items:center;justify-content:space-between;height:56px}
.logo{font-size:16px;font-weight:600}
.links{display:flex;gap:28px;font-size:14px;color:var(--mut)}
.links a:hover{color:var(--text)}
.btn{display:inline-block;border-radius:4px;padding:10px 18px;font-size:14px;font-weight:500;border:1px solid var(--line)}
.btn.pri{background:var(--accent);border-color:var(--accent);color:#08101c}
.btn.sec:hover{border-color:var(--accent)}
.burger{display:none;background:none;border:1px solid var(--line);color:var(--text);border-radius:4px;padding:6px 12px;font-size:14px;cursor:pointer}
.mnav{display:none}
.hero{padding:72px 0 40px}
.hero h1{font-size:40px;line-height:1.15;font-weight:700;margin-bottom:8px}
.hero .sub{color:var(--accent);font-size:16px;margin-bottom:18px}
.hero p{color:var(--mut);font-size:16px;max-width:560px;margin-bottom:26px}
.row{display:flex;flex-wrap:wrap;gap:12px}
section{padding:48px 0 8px;scroll-margin-top:60px}
h2{font-size:22px;margin-bottom:18px}
.about p{color:var(--mut);margin-bottom:14px;max-width:640px}
.facts{display:grid;grid-template-columns:160px 1fr;gap:10px 20px;margin:20px 0 24px;font-size:15px}
.facts dt{color:var(--mut)}
.proj{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.pc{background:var(--card);border:1px solid var(--line);border-radius:6px;padding:22px}
.pc h3{font-size:20px;margin-bottom:8px}
.pc p{font-size:14.5px;color:var(--mut);margin-bottom:14px}
.stack{font-size:13px;color:var(--text);margin-bottom:18px}
.stack span{color:var(--mut)}
.sk dl{display:grid;grid-template-columns:180px 1fr;gap:10px 20px;font-size:15px}
.sk dt{color:var(--mut)}
.contact p{color:var(--mut);margin-bottom:18px}
.cl{display:flex;flex-direction:column;gap:10px;max-width:420px}
.cl a{display:flex;justify-content:space-between;background:var(--card);border:1px solid var(--line);border-radius:4px;padding:12px 16px;font-size:14px}
.cl a:hover{border-color:var(--accent)}
.cl span{color:var(--mut)}
footer{border-top:1px solid var(--line);padding:22px 0;margin-top:48px}
footer .wrap{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:13px;color:var(--mut)}
footer a:hover{color:var(--text)}
@media(max-width:720px){
.links{display:none}
.burger{display:block}
.mnav.open{display:flex;flex-direction:column;background:var(--bg);border-bottom:1px solid var(--line);padding:4px 20px 12px}
.mnav a{padding:12px 0;font-size:15px;border-bottom:1px solid var(--line)}
.hero{padding-top:44px}
.hero h1{font-size:30px}
.proj{grid-template-columns:1fr}
.facts,.sk dl{grid-template-columns:1fr;gap:2px}
.facts dd,.sk dd{margin-bottom:10px}
}
`;

export default function Page() {
  const [open, setOpen] = useState(false);
  const nav = ["About", "Projects", "Skills", "Contact"];

  return (
    <div className="pf" id="home">
      <style>{css}</style>

      <header className="nav">
        <div className="wrap">
          <a className="logo" href="#home">Baliram Suryawanshi</a>
          <nav className="links">
            {nav.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>
            ))}
          </nav>
          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
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
        <div className="wrap">
          <h1>Baliram Suryawanshi</h1>
          <div className="sub">Computer Science student, Bengaluru</div>
          <p>
            I am a B.E. CSE student at Sambhram Institute of Technology. I build backend services and APIs in Python and Flask, and Android apps in Java.
          </p>
          <div className="row">
            <a className="btn pri" href="#projects">View projects</a>
            <a className="btn sec" href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn sec" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <section id="about" className="about">
        <div className="wrap">
          <h2>About</h2>
          <p>
            I am in the 5th semester of B.E. Computer Science and Engineering. I am currently focused on Java, data structures and algorithms, and backend development, including integrating AI APIs into applications.
          </p>
          <dl className="facts">
            <dt>Education</dt><dd>B.E. CSE, Sambhram Institute of Technology</dd>
            <dt>Currently learning</dt><dd>Advanced DSA and system design</dd>
            <dt>Looking for</dt><dd>Internships and collaboration on projects</dd>
          </dl>
          <a className="btn sec" href="/resume.pdf" download>Download resume</a>
        </div>
      </section>

      <section id="projects">
        <div className="wrap">
          <h2>Projects</h2>
          <div className="proj">
            <div className="pc">
              <h3>LegalMate AI</h3>
              <p>A legal information assistant. Users ask questions in plain language and get answers on topics such as property law and consumer rights.</p>
              <div className="stack"><span>Stack:</span> Python, Flask, Groq API, JavaScript</div>
              <div className="row">
                <a className="btn pri" href={LEGALMATE_DEMO} target="_blank" rel="noreferrer">Live demo</a>
                <a className="btn sec" href={LEGALMATE_GITHUB} target="_blank" rel="noreferrer">Source code</a>
              </div>
            </div>
            <div className="pc">
              <h3>AttendLock</h3>
              <p>An Android app for students to track attendance, view their timetable, and see how many classes they can miss per subject.</p>
              <div className="stack"><span>Stack:</span> Java, Android, XML</div>
              <div className="row">
                <a className="btn sec" href={ATTENDLOCK_GITHUB} target="_blank" rel="noreferrer">Source code</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="sk">
        <div className="wrap">
          <h2>Skills</h2>
          <dl>
            {skills.map((g) => (
              <div key={g.group} style={{ display: "contents" }}>
                <dt>{g.group}</dt>
                <dd>{g.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="wrap">
          <h2>Contact</h2>
          <p>Email is the fastest way to reach me.</p>
          <div className="cl">
            <a href={`mailto:${EMAIL}`}>Email <span>{EMAIL}</span></a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn <span>baliram-suryawanshi</span></a>
            <a href={GITHUB} target="_blank" rel="noreferrer">GitHub <span>baliram-ls</span></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} Baliram Suryawanshi</span>
          <a href="#home">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
