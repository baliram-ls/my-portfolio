import type { Metadata } from "next";
import Image from "next/image";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import Nav from "./Nav";
import "./portfolio.css";

const sans = Inter_Tight({ subsets: ["latin"], weight: ["400", "500", "600"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400"], variable: "--mono" });

export const metadata: Metadata = {
  title: "Baliram Suryawanshi | Backend and Java Developer",
  description:
    "Portfolio of Baliram Suryawanshi, a Computer Science Engineering student in Bengaluru building backend systems, APIs and Android apps. Projects: LegalMate AI and AttendLock.",
};

const LINKEDIN = "https://www.linkedin.com/in/baliram-suryawanshi-0b07a9338/";
const GITHUB = "https://github.com/baliram-ls";
const EMAIL = "suryawanshibaliram90@gmail.com";
const RESUME = "/resume.pdf"; // put your real PDF at public/resume.pdf, or delete the resume line in About

function Ext({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr"> (opens in a new tab)</span>
    </a>
  );
}

/* Hero code visual. Tokens: [className, text]. Replace with a real snippet from your repo when you can. */
type Tok = [string, string];
const code: Tok[][] = [
  [["k", "from"], ["", " flask "], ["k", "import"], ["", " Flask, jsonify, request"]],
  [],
  [["", "app = "], ["f", "Flask"], ["", "(__name__)"]],
  [],
  [["f", '@app.post'], ["", "("], ["s", '"/api/ask"'], ["", ")"]],
  [["k", "def"], ["", " "], ["f", "ask"], ["", "():"]],
  [["", "    data = request.get_json(silent="], ["k", "True"], ["", ") "], ["k", "or"], ["", " {}"]],
  [["", "    question = (data.get("], ["s", '"question"'], ["", ") "], ["k", "or"], ["", " "], ["s", '""'], ["", ").strip()"]],
  [],
  [["", "    "], ["k", "if not"], ["", " question:"]],
  [["", "        "], ["k", "return"], ["", " jsonify(error="], ["s", '"question is required"'], ["", "), 400"]],
  [],
  [["", "    answer = "], ["f", "get_answer"], ["", "(question)"]],
  [["", "    "], ["k", "return"], ["", " jsonify(answer=answer), 200"]],
];

type Project = {
  name: string;
  category: string;
  problem: string;
  features: string[];
  stack: string[];
  links: { label: string; href: string }[];
  frame: "browser" | "phone";
  url?: string;
  image?: { src: string; width: number; height: number; alt: string }; // add screenshot files to /public
};

const projects: Project[] = [
  {
    name: "LegalMate AI",
    category: "Web application, AI assistant",
    problem:
      "Legal information is hard to read if you are not a lawyer. LegalMate lets you ask a question in plain language and get an answer written for a general reader.",
    features: [
      "Conversational question and answer on legal topics",
      "Shortcuts for common areas such as property law and consumer rights",
      "Answers generated through the Groq API from a Flask backend",
    ],
    stack: ["Python", "Flask", "Groq API", "JavaScript"],
    links: [
      { label: "Live demo", href: "https://legalmate-ai-deploy.vercel.app/" },
      { label: "Source code", href: "https://github.com/baliram-ls/legalmate-ai" },
    ],
    frame: "browser",
    url: "legalmate-ai-deploy.vercel.app",
    image: undefined, // e.g. { src: "/legalmate.png", width: 1440, height: 900, alt: "LegalMate AI home screen" }
  },
  {
    name: "AttendLock",
    category: "Android application",
    problem:
      "Students lose track of attendance until it is too late. AttendLock keeps the timetable and attendance in one place so you can see where you stand in each subject.",
    features: [
      "Timetable for the week",
      "Attendance percentage tracking",
      "Per-subject attendance view",
    ],
    stack: ["Java", "Android", "XML"],
    links: [{ label: "Source code", href: "https://github.com/baliram-ls/attendlock" }],
    frame: "phone",
    image: undefined, // e.g. { src: "/attendlock.png", width: 540, height: 1170, alt: "AttendLock attendance screen" }
  },
];

const skills = [
  { group: "Programming", items: "Python, C, JavaScript" },
  { group: "Backend", items: "Flask, REST APIs, SQL and database fundamentals" },
  { group: "Web", items: "HTML, CSS, JavaScript, Next.js" },
  { group: "Android", items: "Java and XML" },
  { group: "Tools", items: "Git, GitHub, VS Code" },
];

const used = [
  ["Flask", "Backend for LegalMate AI"],
  ["Groq API integration", "Calling an external AI API from the server in LegalMate AI"],
  ["Java and XML on Android", "Screens and logic in AttendLock"],
  ["Git and GitHub", "Version control for both projects"],
];

const learning = [
  ["REST API design", "Resources, status codes, consistent responses"],
  ["Databases and SQL", "Schema design, joins, indexes"],
  ["Authentication and authorization", "Sessions, tokens, roles"],
  ["Validation and error handling", "Rejecting bad input with clear errors"],
  ["Testing and debugging", "Unit tests and reading stack traces properly"],
  ["Performance and scalability", "Caching, query cost, basic system design"],
];

export default function Page() {
  return (
    <div className={`pf ${sans.className} ${mono.variable}`} id="top">
      <Nav />

      <main>
        <div className="wrap">
          <div className="hero">
            <div className="hero-grid">
              <div>
                <p className="status">B.E. Computer Science, 5th semester, Sambhram Institute of Technology, Bengaluru</p>
                <h1>Building backend systems, APIs, and software that solves real problems.</h1>
                <p className="lead">
                  I am a CSE student who writes mostly Java and is learning backend engineering. I build practical applications, and I am looking for a software engineering internship.
                </p>
                <div className="cta">
                  <a className="btn pri" href="#projects">View My Projects</a>
                  <Ext className="btn" href={GITHUB}>GitHub</Ext>
                </div>
                <div className="quick">
                  <Ext className="ul" href={LINKEDIN}>LinkedIn</Ext>
                  <Ext className="ul" href={GITHUB}>GitHub profile</Ext>
                  <a className="ul" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </div>
              </div>

              <div>
                <div className="editor" role="img" aria-label="Example Flask endpoint that validates input and returns JSON">
                  <div className="editor-top"><span>example_route.py</span><span>Python</span></div>
                  <pre aria-hidden="true">
                    <code>
                      {code.map((line, i) => (
                        <span className="ln" data-n={i + 1} key={i}>
                          {line.length === 0 ? " " : line.map(([c, t], j) => (c ? <span className={c} key={j}>{t}</span> : t))}
                        </span>
                      ))}
                    </code>
                  </pre>
                </div>
                <p className="cap">An example Flask endpoint with input validation.</p>
              </div>
            </div>
          </div>
        </div>

        <section id="about">
          <div className="wrap">
            <div className="sh"><h2>About</h2></div>
            <div className="about">
              <div>
                <p>
                  I am <strong>Baliram</strong>, a fifth-semester Computer Science student in Bengaluru. Java is the language I know best, and most of my coursework and practice, including data structures and algorithms, is in it.
                </p>
                <p>
                  I like building software because you can start with something that annoys you, like losing track of attendance, and end up with something that works. That is how AttendLock started.
                </p>
                <p>
                  I want to work on the backend: APIs, databases and the logic behind an application. Right now I am learning API design, SQL and testing properly. My goal is an internship, and later a backend role at a product company.
                </p>
              </div>
              <dl className="facts">
                <dt>Education</dt><dd>B.E. CSE, Sambhram Institute of Technology</dd>
                <dt>Semester</dt><dd>5th</dd>
                <dt>Main language</dt><dd>Java</dd>
                <dt>Looking for</dt><dd>Software engineering internship</dd>
                <dt>Resume</dt><dd><a className="ul" href={RESUME} download>Download PDF</a></dd>
              </dl>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="wrap">
            <div className="sh">
              <h2>Projects</h2>
              <p>Two projects I built and maintain on GitHub.</p>
            </div>
            {projects.map((p, i) => (
              <article className={`proj ${i % 2 ? "flip" : ""} ${p.image ? "" : "noimg"}`} key={p.name}>
                <div>
                  <h3>{p.name}</h3>
                  <p className="cat">{p.category}</p>
                  <p>{p.problem}</p>
                  <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
                  <div className="stack" aria-label="Technologies used">
                    {p.stack.map((s) => <span key={s}>{s}</span>)}
                  </div>
                  <div className="cta">
                    {p.links.map((l, k) => (
                      <Ext key={l.label} className={`btn ${k === 0 && p.links.length > 1 ? "pri" : ""}`} href={l.href}>{l.label}</Ext>
                    ))}
                  </div>
                </div>
                {p.image ? (
                  <div className="media">
                    <div className={`frame ${p.frame === "phone" ? "phone" : ""}`}>
                      {p.frame === "browser" && p.url ? <div className="url">{p.url}</div> : null}
                      <Image
                        src={p.image.src}
                        width={p.image.width}
                        height={p.image.height}
                        alt={p.image.alt}
                        sizes="(max-width: 900px) 100vw, 640px"
                      />
                    </div>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="skills">
          <div className="wrap">
            <div className="sh"><h2>Skills</h2></div>
            <div className="skills">
              <div className="lead-skill">
                <h3>Java</h3>
                <p>My strongest language. I use it for Android development in AttendLock and for data structures and algorithms practice. Backend fundamentals are what I am building on top of it.</p>
              </div>
              <dl>
                {skills.map((s) => (
                  <div className="skrow" key={s.group}>
                    <dt>{s.group}</dt>
                    <dd>{s.items}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="backend">
          <div className="wrap">
            <div className="sh">
              <h2>Backend focus</h2>
              <p>What I have used in projects, and what I am still learning. None of this has run in production.</p>
            </div>
            <div className="focus">
              <div className="col">
                <h3>Used in my projects</h3>
                <p>Visible in the repositories.</p>
                <ul>{used.map(([t, d]) => <li key={t}>{t}<span>{d}</span></li>)}</ul>
              </div>
              <div className="col">
                <h3>Currently learning</h3>
                <p>Not yet built into a project.</p>
                <ul>{learning.map(([t, d]) => <li key={t}>{t}<span>{d}</span></li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="wrap">
            <div className="contact">
              <div className="sh" style={{ marginBottom: 0 }}><h2>Contact</h2></div>
              <p>I am looking for an internship, and I am happy to talk about collaborations or small software projects. Email is the fastest way to reach me.</p>
              <a className="mail ul" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <div className="row">
                <Ext className="btn" href={LINKEDIN}>LinkedIn</Ext>
                <Ext className="btn" href={GITHUB}>GitHub</Ext>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} Baliram Suryawanshi</span>
          <a className="ul" href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
