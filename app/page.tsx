"use client";

import { useState } from "react";

const LINKEDIN = "https://www.linkedin.com/in/baliram-suryawanshi-0b07a9338/";
const GITHUB = "https://github.com/baliram-ls";
const LEGALMATE_GITHUB = "https://github.com/baliram-ls/legalmate-ai";
const LEGALMATE_DEMO = "https://legalmate-ai-deploy.vercel.app/";
const ATTENDLOCK_GITHUB = "https://github.com/baliram-ls/attendlock";
const EMAIL = "suryawanshibaliram90@gmail.com";

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const Ext = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

const GitIcon = ({ s = 18 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .5z" />
  </svg>
);

const InIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 11-.01 5 2.5 2.5 0 01.01-5zM3 9.75h4V21H3zM10 9.75h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-4.9c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V21h-4z" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const Icon = ({ d }: { d: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const skills: { name: string; color: string; label: string }[] = [
  { name: "Java", color: "#f89820", label: "J" },
  { name: "Python", color: "#3776ab", label: "Py" },
  { name: "C", color: "#5c8dbc", label: "C" },
  { name: "Flask", color: "#e5e7eb", label: "F" },
  { name: "REST APIs", color: "#94a3b8", label: "⚙" },
  { name: "SQL", color: "#4f8ff7", label: "DB" },
  { name: "HTML", color: "#e44d26", label: "5" },
  { name: "CSS", color: "#2965f1", label: "3" },
  { name: "JavaScript", color: "#f7df1e", label: "JS" },
  { name: "Android", color: "#3ddc84", label: "A" },
  { name: "Git", color: "#f05032", label: "◆" },
  { name: "GitHub", color: "#e5e7eb", label: "GH" },
  { name: "VS Code", color: "#23a9f2", label: "VS" },
  { name: "Next.js", color: "#ffffff", label: "N" },
];

const css = `
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
.pf{--bg:#050a14;--card:#0a1220;--line:rgba(120,150,200,.16);--blue:#1e90ff;--blue2:#27b3ff;--text:#f1f5f9;--mut:#9aa7ba;background:var(--bg);color:var(--text);font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;min-height:100vh;overflow-x:hidden;line-height:1.5}
.pf a{color:inherit;text-decoration:none}
.wrap{max-width:1000px;margin:0 auto;padding:0 20px}
.hl{color:var(--blue2)}
.nav{position:sticky;top:0;z-index:50;background:rgba(5,10,20,.88);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.nav .wrap{display:flex;align-items:center;justify-content:space-between;height:56px}
.logo{font-size:22px;font-weight:700;letter-spacing:-.5px}
.logo span{color:var(--blue2)}
.links{display:flex;gap:28px;font-size:13px;color:#c5cfdd}
.links a{padding:18px 0;border-bottom:2px solid transparent}
.links a:hover,.links a.act{color:var(--blue2);border-color:var(--blue2)}
.btn{display:inline-flex;align-items:center;gap:8px;border-radius:9px;padding:11px 20px;font-size:13px;font-weight:600;cursor:pointer;border:1px solid var(--line);transition:.2s}
.btn.pri{background:linear-gradient(90deg,#1e7bff,#27b3ff);border:0;color:#fff;box-shadow:0 6px 24px rgba(30,144,255,.28)}
.btn.pri:hover{transform:translateY(-2px)}
.btn.sec{background:rgba(255,255,255,.04)}
.btn.sec:hover{border-color:var(--blue2)}
.burger{display:none;background:none;border:1px solid var(--line);color:#fff;border-radius:8px;width:38px;height:38px;font-size:18px;cursor:pointer}
.mnav{display:none}
.hero{position:relative;padding:42px 0 30px;background:radial-gradient(ellipse at 80% 40%,rgba(20,90,220,.35),transparent 55%)}
.hero .wrap{position:relative;display:grid;grid-template-columns:1.1fr 1fr;gap:20px;align-items:center}
.badge{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.05);border:1px solid var(--line);border-radius:999px;padding:6px 14px;font-size:11.5px;color:#d3dbe8;margin-bottom:18px}
.badge i{width:9px;height:9px;background:var(--blue);border-radius:50%}
.hero h1{font-size:40px;line-height:1.1;font-weight:700;letter-spacing:-1px}
.hero h1 .l{font-weight:300}
.hero p.d{margin:20px 0 26px;color:var(--mut);font-size:14.5px;max-width:430px}
.row{display:flex;flex-wrap:wrap;gap:12px}
.soc{display:flex;flex-wrap:wrap;gap:22px;margin-top:22px;font-size:12.5px;color:#c5cfdd}
.soc a{display:flex;align-items:center;gap:8px}
.soc svg{color:var(--blue2)}
.vis{position:relative;height:330px}
.laptop{position:absolute;right:20px;top:40px;width:78%;height:210px;background:#0a0f1c;border:2px solid #1b2740;border-radius:10px 10px 4px 4px;transform:perspective(900px) rotateY(-14deg) rotateX(4deg);box-shadow:0 0 70px rgba(30,110,255,.45);padding:12px;overflow:hidden}
.laptop:after{content:"";position:absolute;left:-6%;right:-6%;bottom:-14px;height:12px;background:#1a2438;border-radius:0 0 12px 12px}
.laptop b{display:block;height:5px;border-radius:3px;margin-bottom:9px;background:#2d6cff;opacity:.8}
.laptop b:nth-child(3n){background:#27b3ff;width:55%}.laptop b:nth-child(3n+1){width:75%;background:#7a5cff}.laptop b:nth-child(3n+2){width:40%;background:#35d6a0}
.frame{position:absolute;right:0;top:0;width:120px;background:#080d18;border:1px solid var(--line);border-radius:8px;padding:14px;font-size:15px;line-height:1.3;color:#cbd5e1}
.frame u{display:block;width:26px;height:3px;background:var(--blue);margin-top:8px;text-decoration:none}
.books{position:absolute;left:0;bottom:30px;width:150px;font-size:12px;color:#aab6c8}
.books div{background:#0c1424;border:1px solid var(--line);padding:6px 24px;margin-bottom:2px}
.stats{display:grid;grid-template-columns:repeat(4,1fr);background:var(--card);border:1px solid var(--line);border-radius:14px;margin-top:6px}
.stat{display:flex;align-items:center;gap:14px;padding:18px 20px;border-right:1px solid var(--line)}
.stat:last-child{border:0}
.ico{width:42px;height:42px;border-radius:50%;background:rgba(30,144,255,.12);display:grid;place-items:center;color:var(--blue2);flex:none}
.stat b{display:block;font-size:14.5px}.stat small{color:var(--mut);font-size:12.5px}
section{padding:46px 0 10px;scroll-margin-top:60px}
.eyebrow{font-size:11.5px;letter-spacing:2.2px;font-weight:600;color:var(--blue2);text-transform:uppercase;margin-bottom:14px}
.about{display:grid;grid-template-columns:1fr 1.1fr;gap:34px;align-items:start}
.about h2{font-size:32px;line-height:1.15;letter-spacing:-.5px;margin-bottom:20px}
.about p{color:var(--mut);font-size:14px;margin-bottom:16px}
.about p strong{color:#fff;font-weight:600}
.cards{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:20px}
.card .ci{color:var(--blue2);margin-bottom:14px}
.card h4{font-size:14.5px;margin-bottom:4px}
.card p{font-size:13px;color:var(--mut);margin:0}
.ph{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
.ph a{font-size:12.5px;color:var(--blue2);display:flex;gap:6px;align-items:center}
.proj{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.pc{display:grid;grid-template-columns:1fr 1fr;gap:14px;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:22px}
.tag{font-size:10.5px;letter-spacing:1.4px;color:#b8c3d4;margin-bottom:12px;display:flex;gap:10px;align-items:center}
.tag span{border:1px solid var(--blue);color:var(--blue2);border-radius:5px;padding:2px 7px}
.pc h3{font-size:24px;margin-bottom:10px}
.pc p{font-size:13px;color:var(--mut);margin-bottom:16px}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:18px}
.chips span{background:#0f1a2e;border:1px solid var(--line);border-radius:8px;padding:6px 11px;font-size:11.5px;color:#d6deeb}
.pc .btn{padding:10px 18px}
.shot{background:#060b16;border:1px solid var(--line);border-radius:12px;padding:14px;text-align:center;font-size:10px;color:var(--mut);align-self:start;min-height:200px}
.shot h5{font-size:19px;color:#fff;margin:22px 0 2px}
.shot .in{display:flex;margin:12px 0;background:#0c1424;border:1px solid var(--line);border-radius:6px;padding:6px;text-align:left}
.shot .in i{margin-left:auto;background:var(--blue);width:18px;border-radius:4px}
.shot .g{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.shot .g div{background:#0c1424;border:1px solid var(--line);border-radius:6px;padding:8px 4px;font-size:9px}
.phone{border:3px solid var(--blue);border-radius:22px;padding:14px 10px;background:#060b16;text-align:center;align-self:start;font-size:10px;color:var(--mut)}
.phone h5{color:var(--blue2);font-size:15px;font-weight:500;margin-bottom:10px}
.phone .m{display:flex;justify-content:space-around;margin:12px 0}
.phone .m b{color:#fff;font-size:15px;display:block}
.phone .r{background:#0c1424;border-radius:6px;padding:7px;margin-top:6px;text-align:left}
.sk{display:flex;flex-wrap:wrap;gap:12px}
.sk span{display:flex;align-items:center;gap:10px;background:var(--card);border:1px solid var(--line);border-radius:10px;padding:10px 16px;font-size:13px}
.sk em{font-style:normal;font-size:10.5px;font-weight:800;min-width:22px;height:22px;border-radius:5px;display:grid;place-items:center;background:rgba(255,255,255,.06)}
.contact{display:grid;grid-template-columns:1fr 1fr;gap:34px;align-items:center;border-top:1px solid var(--line);margin-top:40px;padding:36px 0}
.contact h2{font-size:32px;line-height:1.15;margin:12px 0}
.contact p{color:var(--mut);font-size:13.5px}
.cl{display:flex;flex-direction:column;gap:10px;max-width:460px}
.cl a{display:flex;align-items:center;gap:14px;background:var(--card);border:1px solid var(--line);border-radius:10px;padding:14px 16px;font-size:13px;font-weight:500}
.cl a svg:first-child{color:var(--blue2)}
.cl a svg:last-child{margin-left:auto}
.cl a:hover{border-color:var(--blue2)}
footer{border-top:1px solid var(--line);padding:22px 0}
footer .wrap{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:12px;color:var(--mut)}
footer .f1{display:flex;align-items:center;gap:20px}
footer nav{display:flex;gap:26px;align-items:center}
.top{width:36px;height:36px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:#fff;cursor:pointer;display:grid;place-items:center}
@media(max-width:900px){.proj{grid-template-columns:1fr}.about{grid-template-columns:1fr}}
@media(max-width:720px){
.links,.nav .btn{display:none}
.burger{display:block}
.mnav.open{display:flex;flex-direction:column;background:#070d1a;border-bottom:1px solid var(--line);padding:8px 20px 16px}
.mnav a{padding:12px 0;font-size:14px;border-bottom:1px solid var(--line)}
.hero{padding-top:28px}
.hero .wrap{grid-template-columns:1fr}
.hero h1{font-size:34px}
.vis{height:250px;order:2}
.laptop{width:86%;height:170px;top:30px;right:0}
.frame{display:none}
.books{display:none}
.stats{grid-template-columns:1fr 1fr}
.stat{padding:14px;border-right:0;border-bottom:1px solid var(--line)}
.stat:nth-child(odd){border-right:1px solid var(--line)}
.stat:nth-last-child(-n+2){border-bottom:0}
.ico{width:36px;height:36px}
.about h2,.contact h2{font-size:27px}
.cards{grid-template-columns:1fr}
.pc{grid-template-columns:1fr}
.contact{grid-template-columns:1fr}
.cl{max-width:none}
footer .wrap{flex-direction:column;align-items:flex-start}
footer nav{gap:16px;flex-wrap:wrap}
}
`;
export default function Page() {
  const [open, setOpen] = useState(false);
  const nav = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];
  const id = (n: string) => (n === "Home" ? "home" : n.toLowerCase());

  return (
    <div className="pf" id="home">
      <style>{css}</style>

      <header className="nav">
        <div className="wrap">
          <a className="logo" href="#home">baliram<span>.</span></a>
          <nav className="links">
            {nav.map((n, i) => (
              <a key={n} href={`#${id(n)}`} className={i === 0 ? "act" : ""}>{n}</a>
            ))}
          </nav>
          <a className="btn pri" href="#contact">Let&apos;s Talk <Arrow /></a>
          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button>
        </div>
        <div className={`mnav ${open ? "open" : ""}`}>
          {nav.map((n) => (
            <a key={n} href={`#${id(n)}`} onClick={() => setOpen(false)}>{n}</a>
          ))}
        </div>
      </header>

      <div className="hero">
        <div className="wrap">
          <div>
            <div className="badge"><i /> B.E. CSE • Bengaluru, India</div>
            <h1>
              Hi, I&apos;m Baliram<br />
              <span className="l">I build software<br />that solves <span className="hl" style={{ fontWeight: 700 }}>real problems.</span></span>
            </h1>
            <p className="d">
              Computer Science student passionate about backend development, APIs, databases and AI-powered applications. I love turning ideas into useful products and constantly learning new technologies.
            </p>
            <div className="row">
              <a className="btn pri" href="#projects">View My Projects <Arrow /></a>
              <a className="btn sec" href={GITHUB} target="_blank" rel="noreferrer"><GitIcon s={20} /> GitHub <Ext /></a>
            </div>
            <div className="soc">
              <a href={LINKEDIN} target="_blank" rel="noreferrer"><InIcon /> LinkedIn</a>
              <a href={GITHUB} target="_blank" rel="noreferrer"><GitIcon /> GitHub</a>
              <a href={`mailto:${EMAIL}`}><MailIcon /> Email</a>
            </div>
          </div>
          <div className="vis" aria-hidden="true">
            <div className="frame">Good<br />Software<br />Better<br />People<u /></div>
            <div className="laptop">{Array.from({ length: 16 }).map((_, i) => <b key={i} />)}</div>
            <div className="books"><div>Build</div><div>Learn</div><div>Improve</div><div>Repeat</div></div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="stats">
          <div className="stat"><div className="ico"><Icon d="M2 9l10-5 10 5-10 5zM6 11v5c3 2.5 9 2.5 12 0v-5" /></div><div><b>5th Semester</b><small>B.E. CSE</small></div></div>
          <div className="stat"><div className="ico"><Icon d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></div><div><b>2+</b><small>Projects</small></div></div>
          <div className="stat"><div className="ico"><Icon d="M3 17l6-6 4 4 8-8M15 7h6v6" /></div><div><b>Always</b><small>Learning</small></div></div>
          <div className="stat"><div className="ico"><Icon d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zM12 12a2 2 0 100-4 2 2 0 000 4z" /></div><div><b>Bengaluru</b><small>India</small></div></div>
        </div>
      </div>

      <section id="about">
        <div className="wrap about">
          <div>
            <div className="eyebrow">About Me</div>
            <h2>Turning curiosity<br />into <span className="hl">useful software.</span></h2>
            <p>I&apos;m Baliram Suryawanshi, a <strong>Computer Science</strong> Engineering student at Sambhram Institute of Technology, Bengaluru. I enjoy solving programming problems and building real-world applications.</p>
            <p>I&apos;m currently focused on Java, Data Structures &amp; Algorithms, backend development and exploring AI integrations.</p>
            <a className="btn pri" href="/resume.pdf" download>Download Resume <Arrow /></a>
          </div>
          <div className="cards">
            <div className="card"><div className="ci"><Icon d="M12 22a10 10 0 110-20 10 10 0 010 20zM12 18a6 6 0 110-12 6 6 0 010 12zM12 14a2 2 0 110-4 2 2 0 010 4z" /></div><h4>Interests</h4><p>Backend systems, APIs, databases, AI and Android development.</p></div>
            <div className="card"><div className="ci"><Icon d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v14c-3-1-6-1-9 1-3-2-6-2-9-1zM12 6v14" /></div><h4>Currently Learning</h4><p>Advanced DSA, System Design, and building scalable backend projects.</p></div>
            <div className="card"><div className="ci"><Icon d="M5 19c0-6 4-12 14-14 0 10-6 14-12 14zM9 15l-4 4M14 10a1 1 0 100-2 1 1 0 000 2z" /></div><h4>Goal</h4><p>To work at a product based company and contribute to impactful products.</p></div>
            <div className="card"><div className="ci"><Icon d="M9 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM2 21c0-4 3-6 7-6s7 2 7 6M16 4a3.5 3.5 0 010 7M18 15c2.5.7 4 2.5 4 6" /></div><h4>Open To</h4><p>Internships, collaborations and opportunities to learn from experienced engineers.</p></div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="wrap">
          <div className="ph">
            <div className="eyebrow" style={{ margin: 0 }}>Featured Projects</div>
            <a href={GITHUB} target="_blank" rel="noreferrer">View all projects <Arrow /></a>
          </div>
          <div className="proj">
            <div className="pc">
              <div>
                <div className="tag"><span>01</span> AI · LEGALTECH</div>
                <h3>LegalMate AI</h3>
                <p>An AI-powered legal information assistant that helps users explore legal topics through a conversational interface.</p>
                <div className="chips"><span>Python</span><span>Flask</span><span>Groq API</span><span>JavaScript</span></div>
                <div className="row">
                  <a className="btn pri" href={LEGALMATE_DEMO} target="_blank" rel="noreferrer">Live Demo <Ext /></a>
                  <a className="btn sec" href={LEGALMATE_GITHUB} target="_blank" rel="noreferrer">GitHub <Ext /></a>
                </div>
              </div>
              <div className="shot">
                <h5>LegalMate <span className="hl">AI</span></h5>
                <div className="hl">Your AI Legal Assistant</div>
                <div>Get clear answers to your legal questions in simple language.</div>
                <div className="in">Ask a legal question...<i /></div>
                <div className="g"><div>Property Law<br />Property disputes, registration, etc.</div><div>Consumer Rights<br />Consumer protection, refunds, etc.</div></div>
              </div>
            </div>
            <div className="pc">
              <div>
                <div className="tag"><span>02</span> ANDROID · PRODUCTIVITY</div>
                <h3>AttendLock</h3>
                <p>An attendance tracking application designed to help students manage their attendance and understand their class status.</p>
                <div className="chips"><span>Java</span><span>Android</span><span>XML</span></div>
                <div className="row">
                  <a className="btn sec" href={ATTENDLOCK_GITHUB} target="_blank" rel="noreferrer">GitHub <Ext /></a>
                </div>
              </div>
              <div className="phone">
                <h5>AttendLock</h5>
                <div>Mon · Tue · Wed · Thu · Fri</div>
                <div className="m"><div><b className="hl">77.5%</b>Attendance</div><div><b>18/24</b>Classes</div></div>
                <div className="r">Timetable</div>
                <div className="r">Subject Analysis</div>
                <div className="r">AI Suggestions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <div className="eyebrow" style={{ color: "#fff" }}>Tech <span className="hl">Skills</span></div>
          <div className="sk">
            {skills.map((s) => <span key={s.name}><em style={{ color: s.color }}>{s.label}</em>{s.name}</span>)}
          </div>
        </div>
      </section>

      <div id="experience" />

      <section id="contact" style={{ padding: 0 }}>
        <div className="wrap contact">
          <div>
            <div className="eyebrow" style={{ color: "#fff", margin: 0 }}>Let&apos;s Connect</div>
            <h2>Let&apos;s build something<br />great <span className="hl">together.</span></h2>
            <p>I&apos;m always open to interesting projects, internships or just a good tech conversation.</p>
          </div>
          <div className="cl">
            <a href={`mailto:${EMAIL}`}><MailIcon /> {EMAIL} <Arrow /></a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer"><InIcon /> LinkedIn Profile <Arrow /></a>
            <a href={GITHUB} target="_blank" rel="noreferrer"><GitIcon s={20} /> GitHub Profile <Arrow /></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="f1">
            <span className="logo" style={{ fontSize: 18, color: "#fff" }}>baliram<span>.</span></span>
            <span>© {new Date().getFullYear()} Baliram Suryawanshi. All rights reserved.</span>
          </div>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            <button className="top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</button>
          </nav>
        </div>
      </footer>
    </div>
  );
}
