import { useState } from 'react'
import {
  ArrowDown, ArrowRight, ArrowUpRight, GitBranch, Mail, Code2, Database,
  Server, Cloud, Sparkles, ShieldCheck, GraduationCap, MapPin,
  BriefcaseBusiness, ExternalLink, Terminal, Menu, X, Check,
  Laptop, Workflow, HeartHandshake, ChevronRight
} from 'lucide-react'

const projects = [
  {
    id: 'lazydesk',
    number: '01',
    name: 'LazyDesk',
    eyebrow: 'OPEN-SOURCE AI · MVP IN PROGRESS',
    summary: 'Turn messy notes into clear summaries and actionable next steps.',
    detail: 'A local-first AI desk assistant with a React workspace and FastAPI backend. The hosted preview runs a clearly labelled deterministic demo; the Ollama model path is intended for local evaluation.',
    tags: ['React', 'FastAPI', 'Python', 'Ollama'],
    source: 'https://github.com/gauravbalade/LazyDesk',
    demo: 'https://lazydesk-web-final.onrender.com',
    visual: 'lazy',
    status: 'Explore demo'
  },
  {
    id: 'propertysetu',
    number: '02',
    name: 'PropertySetu',
    eyebrow: 'ACADEMIC FULL-STACK PROJECT',
    summary: 'A structured property record and visit-management workflow.',
    detail: 'An academic PropertyDesk application for owner profiles, property records, addresses, visit requests, and controlled status updates. It is a learning prototype—not an official government registration portal.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
    source: 'https://github.com/gauravbalade/propertysetu',
    visual: 'property',
    status: 'View source'
  }
]

const skills = [
  { name: 'Frontend', description: 'Interfaces and browser experiences', icon: Code2, items: ['React', 'JavaScript', 'HTML', 'CSS', 'Vite'] },
  { name: 'Backend', description: 'Application logic and APIs', icon: Server, items: ['Java', 'Spring Boot', 'REST APIs'] },
  { name: 'Data', description: 'Relational data and persistence', icon: Database, items: ['MySQL', 'SQL', 'JPA / Hibernate'] },
  { name: 'Workflow & Cloud', description: 'Tools for building and shipping', icon: Cloud, items: ['Git', 'GitHub', 'Postman', 'AWS · learning'] }
]

const journey = [
  {
    date: '2025 — 2026',
    title: 'Publicity Head · CSI-CATT, DMCE',
    text: 'Worked with the student chapter team to promote campus tech activities, including a Figma workshop and Frontend Face-Off.'
  },
  {
    date: '2026',
    title: 'Open-source building · LazyDesk',
    text: 'Explored an open-source AI workflow for turning unstructured notes into summaries and actionable tasks, with a focus on local-first processing.'
  },
  {
    date: 'ONGOING',
    title: 'Full-stack development · PropertySetu',
    text: 'Practising end-to-end application development through property records, validation, API design, and role-aware workflows.'
  }
]

const commandResponses = {
  help: 'Available commands: about · skills · projects · lazydesk · propertysetu · journey · github · leetcode · clear',
  about: 'I am Gaurav, a final-year Computer Engineering student in Maharashtra. I learn by building practical applications, debugging real issues, and improving one iteration at a time.',
  skills: 'Frontend: React, JavaScript, HTML, CSS. Backend: Java, Spring Boot, REST APIs. Data: MySQL, SQL, JPA/Hibernate. Workflow: Git, GitHub, Postman. Cloud: AWS fundamentals in progress.',
  projects: 'Two featured builds are available here: LazyDesk (open-source AI notes-to-actions MVP) and PropertySetu / PropertyDesk (academic property record and visit-management prototype).',
  lazydesk: 'LazyDesk is a local-first AI desk assistant. Its hosted preview uses deterministic demo mode; the Ollama model path is designed for local model testing. Try the live demo from the project card.',
  propertysetu: 'PropertySetu / PropertyDesk is an academic project for owner records, properties, addresses, visit requests, and status workflows. It is not an official government portal.',
  journey: 'My journey includes student chapter publicity work at CSI-CATT DMCE, open-source experimentation with LazyDesk, and ongoing full-stack development with PropertySetu.',
  github: 'Open github.com/gauravbalade to explore my repositories, source code, and ongoing work.',
  leetcode: 'I practise problem solving on LeetCode. Open leetcode.com/u/gauravbalade/ to see my profile and activity.'
}

function SectionHeading({ number, label, title, accent, note }) {
  return (
    <div className="section-heading">
      <div className="section-kicker"><span>{number}</span>{label}</div>
      <div className="section-heading-row">
        <h2>{title} <em>{accent}</em></h2>
        {note && <p>{note}</p>}
      </div>
    </div>
  )
}

function ProjectVisual({ type }) {
  if (type === 'lazy') {
    return (
      <div className="project-preview lazy-preview" aria-label="Illustrative LazyDesk workspace preview">
        <div className="preview-top"><span className="preview-brand"><span className="preview-logo">L</span> LazyDesk</span><span className="preview-pill">LOCAL-FIRST WORKFLOW</span></div>
        <div className="lazy-layout">
          <div className="lazy-notes"><small>YOUR NOTES</small><b>Project sync — rough notes</b><span className="note-line wide" /><span className="note-line" /><span className="note-line medium" /><span className="note-line wide" /><span className="note-line short" /></div>
          <div className="lazy-output"><small>TURN NOTES INTO ACTION</small><div className="summary-chip"><Check size={11}/> Summary ready</div><b>Next steps</b><span className="task-line"><i/>Confirm the API flow</span><span className="task-line"><i/>Review open questions</span><span className="task-line"><i/>Share the update</span></div>
        </div>
      </div>
    )
  }
  return (
    <div className="project-preview property-preview" aria-label="Illustrative PropertySetu record dashboard preview">
      <div className="preview-top"><span className="preview-brand"><span className="preview-logo property-logo">P</span> PropertyDesk</span><span className="preview-pill">RECORD MANAGEMENT</span></div>
      <div className="property-layout">
        <div className="property-metric"><small>PROPERTY RECORDS</small><b>01 <span>sample record</span></b><i className="metric-track"><i/></i></div>
        <div className="property-metric"><small>VISIT REQUESTS</small><b>02 <span>workflow states</span></b><i className="metric-track alternate"><i/></i></div>
      </div>
      <div className="record-table"><div className="record-row record-head"><span>RECORD</span><span>STATUS</span><span>TYPE</span></div><div className="record-row"><b>Owner profile</b><span className="record-status">Verified flow</span><span>Owner</span></div><div className="record-row"><b>Property entry</b><span className="record-status pending">Under review</span><span>Property</span></div></div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'command', text: 'help' },
    { type: 'response', text: 'Welcome to GauravOS. Explore this portfolio with short commands.' }
  ])
  const [terminalError, setTerminalError] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  function runCommand(rawCommand) {
    const command = rawCommand.trim().toLowerCase().replace(/^\$\s*/, '')
    if (!command) return
    if (command === 'clear') {
      setTerminalHistory([])
      setTerminalInput('')
      setTerminalError(false)
      return
    }
    const response = commandResponses[command]
    setTerminalHistory((history) => [
      ...history.slice(-5),
      { type: 'command', text: command },
      { type: 'response', text: response || 'I do not recognise that command. Type help to see the available commands.' }
    ])
    setTerminalError(!response)
    setTerminalInput('')
  }

  function submitCommand(event) {
    event.preventDefault()
    runCommand(terminalInput)
  }

  const suggestions = ['about', 'skills', 'projects', 'journey', 'github']

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Gaurav Balade home">
          <span className="brand-symbol">G<span>.</span></span>
          <span className="brand-name">GAURAV <b>BALADE</b></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={20}/> : <Menu size={20}/>}
        </button>
        <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#journey" onClick={closeMenu}>Journey</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's connect <ArrowUpRight size={14}/></a>
        </nav>
      </header>

      <main>
        <section className="hero page-width" id="home">
          <div className="hero-copy">
            <div className="availability"><span/> COMPUTER ENGINEERING · MAHARASHTRA, INDIA</div>
            <p className="hero-intro">Hello, I'm Gaurav.</p>
            <h1>I turn ideas into<br/><span>working software.</span></h1>
            <p className="hero-description">A final-year Computer Engineering student focused on full-stack development, practical problem-solving, and building products that make everyday workflows simpler.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <ArrowRight size={16}/></a>
              <a className="button button-outline" href="https://github.com/gauravbalade" target="_blank" rel="noreferrer"><GitBranch size={16}/> GitHub profile</a>
            </div>
            <div className="hero-links">
              <span><MapPin size={14}/> Maharashtra, India</span>
              <span className="hero-link-divider"/>
              <a href="https://leetcode.com/u/gauravbalade/" target="_blank" rel="noreferrer">Problem-solving practice <ArrowUpRight size={12}/></a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-top"><span className="panel-label"><span className="panel-live"/> CURRENT BUILD LOG</span><span className="panel-index">01 / 04</span></div>
            <div className="profile-row">
              <img className="profile-avatar" src="https://avatars.githubusercontent.com/u/159923687?v=4" alt="Gaurav Balade GitHub profile avatar"/>
              <div><b>Gaurav Balade</b><span>Developer · Lifelong learner</span></div>
              <a href="https://github.com/gauravbalade" target="_blank" rel="noreferrer" aria-label="Open GitHub profile"><GitBranch size={18}/></a>
            </div>
            <div className="build-log">
              <div className="build-log-heading"><span>FOCUS AREAS</span><span>LEARNING / BUILDING</span></div>
              <div className="build-item"><span className="build-icon purple"><Code2 size={16}/></span><span><b>Frontend experiences</b><small>React · JavaScript · responsive UI</small></span><span className="build-state">BUILDING</span></div>
              <div className="build-item"><span className="build-icon blue"><Server size={16}/></span><span><b>Backend systems</b><small>Java · Spring Boot · REST APIs</small></span><span className="build-state">BUILDING</span></div>
              <div className="build-item"><span className="build-icon green"><Database size={16}/></span><span><b>Data & persistence</b><small>MySQL · SQL · JPA</small></span><span className="build-state">PRACTISING</span></div>
              <div className="build-item"><span className="build-icon amber"><Cloud size={16}/></span><span><b>Cloud deployment</b><small>AWS · Vercel · hosting workflows</small></span><span className="build-state learning">LEARNING</span></div>
            </div>
            <div className="panel-footer"><span><span className="footer-dot"/> AVAILABLE FOR THE NEXT CHALLENGE</span><span>G / 2026</span></div>
          </div>
          <a href="#about" className="scroll-hint"><ArrowDown size={14}/> Scroll to explore</a>
        </section>

        <section className="intro-strip">
          <div className="page-width strip-inner">
            <span>CURIOUS BY NATURE</span><i/>
            <span>BUILDER BY PRACTICE</span><i/>
            <span>IMPROVING EVERY ITERATION</span>
          </div>
        </section>

        <section className="section page-width" id="about">
          <SectionHeading number="01" label="ABOUT ME" title="The person behind" accent="the projects." note="Good software starts with understanding the problem, not just writing the code."/>
          <div className="about-grid">
            <div className="about-lead-card">
              <div className="about-card-mark">G.</div>
              <span className="card-overline">A PRACTICAL MINDSET</span>
              <h3>Stay curious.<br/><em>Build with intent.</em><br/>Keep improving.</h3>
              <p>I enjoy the space between an idea and a working product.</p>
            </div>
            <div className="about-story">
              <p className="story-lead">I'm a final-year Computer Engineering student at Datta Meghe College of Engineering, Airoli. My interests sit around web development, backend engineering, and the small details that make software easier to use.</p>
              <p>Most of my learning happens hands-on: designing a page, connecting an API, modelling data, debugging an unexpected issue, and then refining the experience. I like understanding how the pieces fit together—not just getting a screen to look right.</p>
              <p>I'm currently strengthening my full-stack foundation while exploring cloud deployment and open-source development.</p>
              <div className="about-facts">
                <div><GraduationCap size={17}/><span><b>Education</b><small>Computer Engineering · DMCE</small></span></div>
                <div><Workflow size={17}/><span><b>Approach</b><small>Understand → build → test → improve</small></span></div>
                <div><HeartHandshake size={17}/><span><b>Interests</b><small>Useful products · open source · collaboration</small></span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="page-width section">
            <SectionHeading number="02" label="TECHNICAL TOOLKIT" title="Tools I use to" accent="make things work." note="A snapshot of technologies I have practised in coursework and projects, plus the cloud skills I'm growing."/>
            <div className="skills-grid">
              {skills.map(({name,description,icon:Icon,items}, index) => (
                <article className="skill-card" key={name}>
                  <div className="skill-card-top"><span className={'skill-icon skill-icon-' + index}><Icon size={19}/></span><span className="skill-index">0{index + 1}</span></div>
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <div className="skill-tags">{items.map((item) => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
            <p className="skill-disclaimer">I describe my skills honestly: some are hands-on strengths, others are active learning areas.</p>
          </div>
        </section>

        <section className="section page-width" id="work">
          <SectionHeading number="03" label="SELECTED WORK" title="Projects built around" accent="real problems." note="A closer look at the problem, the implementation choices, and what each project has taught me."/>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.id}>
                <ProjectVisual type={project.visual}/>
                <div className="project-content">
                  <div className="project-card-meta"><span>{project.number} / {project.eyebrow}</span><span className="project-status">{project.status === 'Explore demo' ? 'DEMO AVAILABLE' : 'SOURCE AVAILABLE'}</span></div>
                  <h3>{project.name}</h3>
                  <h4>{project.summary}</h4>
                  <p>{project.detail}</p>
                  <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-actions">
                    <a className="project-source" href={project.source} target="_blank" rel="noreferrer"><GitBranch size={15}/> Source code <ArrowUpRight size={13}/></a>
                    {project.demo && <a className="project-demo" href={project.demo} target="_blank" rel="noreferrer">Open demo <ExternalLink size={13}/></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="additional-work">
            <div className="additional-work-heading"><span>ALSO EXPLORED</span><p>Team-based academic work that added experience with collaboration, interface development, backend flows, and relational data.</p></div>
            <div className="additional-work-grid">
              <article><span className="mini-project-index">A / TEAM PROJECT</span><h4>Barber Shop Website</h4><p>Contributed to page structure, styling, and client-side interactions for a college team project.</p><div className="project-tags"><span>HTML</span><span>CSS</span><span>JavaScript</span></div></article>
              <article><span className="mini-project-index">B / TEAM PROJECT</span><h4>Bus Reservation System</h4><p>Contributed to a reservation workflow covering authentication, bus scheduling, ticket booking, and PostgreSQL data storage.</p><div className="project-tags"><span>Python</span><span>Django</span><span>PostgreSQL</span></div></article>
            </div>
          </div>
          <div className="work-note"><span><ShieldCheck size={17}/></span><p><b>Honest project notes.</b> PropertySetu is an academic prototype. LazyDesk's hosted preview uses deterministic demo mode; local-model inference is a separate local setup. Each project card links to its source for technical details.</p></div>
        </section>

        <section className="journey-section" id="journey">
          <div className="page-width section">
            <SectionHeading number="04" label="BEYOND THE CODE" title="A journey of" accent="building and learning." note="The work is technical, but the growth comes from collaboration, communication, and showing up consistently."/>
            <div className="journey-layout">
              <div className="journey-heading"><span className="journey-stamp"><BriefcaseBusiness size={23}/></span><h3>Experience is also<br/><em>what you do with it.</em></h3><p>From student communities to open-source experiments and academic builds, each step adds a different perspective.</p></div>
              <div className="timeline">{journey.map((item, index) => <article className="timeline-item" key={item.title}><div className="timeline-marker">{String(index + 1).padStart(2, '0')}</div><div><span className="timeline-date">{item.date}</span><h4>{item.title}</h4><p>{item.text}</p></div></article>)}</div>
            </div>
            <div className="milestones">
              <div className="milestone"><span className="milestone-icon"><Check size={15}/></span><div><small>UNSTOP · 2025</small><b>Winner — Round 1</b><p>Learning Boot Camp, Unstop Talent Park.</p></div></div>
              <div className="milestone"><span className="milestone-icon"><Check size={15}/></span><div><small>HACKTOBERFEST · 2024</small><b>Level 4 participant badge</b><p>Open-source participation and contribution practice.</p></div></div>
              <div className="milestone"><span className="milestone-icon"><Check size={15}/></span><div><small>ENSPIRE'26 · MARCH 2026</small><b>Ideathon participant</b><p>Intercollegiate event organised by E-Cell, DMCE.</p></div></div>
            </div>
          </div>
        </section>

        <section className="terminal-section" id="explore">
          <div className="page-width terminal-layout">
            <div className="terminal-copy">
              <div className="section-kicker terminal-kicker"><span>05</span> A SMALL INTERACTIVE EASTER EGG</div>
              <h2>Explore my portfolio<br/><em>like a developer.</em></h2>
              <p>Not every portfolio needs another carousel. This one has a tiny command line. Use it to discover my work, skills, and the way I approach problems.</p>
              <div className="terminal-hint"><Sparkles size={17}/><span><b>Visible hint:</b> type <code>help</code> into the prompt, or try one of the suggested commands.</span></div>
              <div className="command-suggestions"><span>TRY A COMMAND</span>{suggestions.map((command) => <button key={command} onClick={() => runCommand(command)}>{command}</button>)}</div>
            </div>
            <div className="terminal-window">
              <div className="terminal-titlebar"><div className="terminal-controls"><i/><i/><i/></div><span>gaurav@portfolio — visitor terminal</span><span className="terminal-live">LIVE</span></div>
              <div className="terminal-screen">
                <div className="terminal-welcome"><span className="terminal-avatar">G</span><span><b>GauravOS</b><small>Personal portfolio interface · v1.0</small></span></div>
                <div className="terminal-history" aria-live="polite">
                  {terminalHistory.map((entry, index) => entry.type === 'command'
                    ? <div className="terminal-command" key={index}><span>visitor@gaurav:~$</span> {entry.text}</div>
                    : <div className={terminalError && index === terminalHistory.length - 1 ? 'terminal-response terminal-error' : 'terminal-response'} key={index}>{entry.text}</div>
                  )}
                </div>
                <form className="terminal-form" onSubmit={submitCommand}>
                  <label htmlFor="visitor-command"><span>visitor@gaurav:~$</span></label>
                  <input id="visitor-command" value={terminalInput} onChange={(event) => setTerminalInput(event.target.value)} placeholder="type a command and press Enter..." autoComplete="off" spellCheck="false"/>
                  <button type="submit" aria-label="Run command"><ArrowRight size={16}/></button>
                </form>
              </div>
              <div className="terminal-bottom"><span><span/> INTERACTIVE SESSION</span><span>NO DATA IS SENT</span></div>
            </div>
          </div>
        </section>

        <section className="contact-section page-width" id="contact">
          <div className="contact-panel">
            <div className="contact-copy"><div className="section-kicker"><span>06</span> CONTACT</div><h2>Have a good problem?<br/><em>Let's work on it.</em></h2><p>I'm interested in software development opportunities, practical collaborations, and learning from people who build thoughtful products.</p></div>
            <div className="contact-actions">
              <a className="contact-link primary-contact" href="mailto:gauravbalade@gmail.com"><Mail size={17}/> Email me <ArrowUpRight size={15}/></a>
              <a className="contact-link" href="https://github.com/gauravbalade" target="_blank" rel="noreferrer"><GitBranch size={17}/> Explore my GitHub <ArrowUpRight size={15}/></a>
              <a className="contact-link" href="https://leetcode.com/u/gauravbalade/" target="_blank" rel="noreferrer"><Code2 size={17}/> LeetCode profile <ArrowUpRight size={15}/></a>
              <a className="contact-link" href="https://github.com/gauravbalade?tab=repositories" target="_blank" rel="noreferrer"><ExternalLink size={17}/> More repositories <ArrowUpRight size={15}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <a className="brand" href="#home"><span className="brand-symbol">G<span>.</span></span><span className="brand-name">GAURAV <b>BALADE</b></span></a>
        <span>Designed with intent. Built with curiosity. © {new Date().getFullYear()}</span>
        <div className="footer-links"><a href="https://github.com/gauravbalade" target="_blank" rel="noreferrer">GitHub</a><a href="#home">Back to top ↑</a></div>
      </footer>
    </>
  )
}

export default App
