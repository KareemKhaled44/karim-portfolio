import { ArrowDownRight, ArrowUpRight, Award, Braces, BriefcaseBusiness, CheckCircle2, Code2, Database, Download, GitBranch, GraduationCap, Layers3, Mail, MapPin, Server, Sparkles } from "lucide-react";

const featuredProjects = [
  {
    index: "01",
    title: "Learn2Drive",
    label: "Driving academy platform",
    description: "A full-stack marketplace where learners discover academies, book courses with trainers, and manage their schedules — with a dedicated management dashboard for academies.",
    tags: ["Django REST", "React", "JWT", "Tailwind"],
    href: "https://learn-2-drive.onrender.com/",
    image: "/work/learn2drive-presentation.webp",
    imageAlt: "Learn2Drive platform presentation cover",
    accent: "cyan",
  },
  {
    index: "02",
    title: "Peak Health",
    label: "Supplement e-commerce",
    description: "A complete e-commerce experience with dynamic filtering, cart and wishlist flows, authentication, checkout, and a responsive customer dashboard.",
    tags: ["Django", "AJAX", "SQLite", "Tailwind"],
    href: "https://my-django-site-d0vm.onrender.com/",
    image: "/work/peak-health-showcase.webp",
    imageAlt: "Peak Health responsive supplement store showcase",
    accent: "violet",
  },
];

const otherProjects = [
  {
    title: "Gym Management System",
    description: "Member registration, subscriptions, attendance tracking, and automated expiry handling through an efficient Django Admin workflow.",
    tags: ["Django", "Python", "SQLite", "Django Admin"],
  },
  {
    title: "ChatFlow",
    description: "A chat app with account authentication, searchable profiles, direct conversations, and a responsive React interface.",
    tags: ["Django REST", "React", "Simple JWT", "Tailwind"],
    href: "https://github.com/KareemKhaled44/chatflow",
    linkLabel: "View source code",
    image: "/work/chatflow-visual.webp",
    imageAlt: "ChatFlow Canva concept artwork with a phone and chat bubbles",
  },
];

const skillGroups = [
  { icon: Server, title: "Backend", items: ["Django", "Django REST Framework", "Python", "REST APIs", "Authentication"] },
  { icon: Code2, title: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "HTML & CSS", "AJAX"] },
  { icon: Database, title: "Data & tools", items: ["SQLite", "Git & GitHub", "Axios", "Microsoft Excel", "Canva"] },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-orange-200 selection:text-slate-950">
      <div className="grid-overlay fixed inset-0 -z-10" aria-hidden="true" />
      <header className="sticky top-0 z-50 border-b border-black/8 bg-[#f7efe5]/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Main navigation">
          <a href="#top" className="group flex items-center gap-3 font-semibold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-[#d95d39]/30 bg-[#d95d39]/10 text-sm text-[#b74428] transition group-hover:rotate-6 group-hover:bg-[#d95d39]/20">KK</span>
            <span className="hidden sm:inline">Karim Khaled</span>
          </a>
          <div className="flex items-center gap-1 text-sm text-[#665d64] sm:gap-3">
            <a className="nav-link" href="#work">Work</a>
            <a className="nav-link" href="#design">Design</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section id="top" className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:px-12 lg:py-24">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#4b7f72]/25 bg-[#4b7f72]/10 px-3.5 py-2 text-sm text-[#38685d]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#4b7f72]" />
            Open to junior developer opportunities
          </div>
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.24em] text-[#b74428]">Developer & Oracle technology learner</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-0.055em] text-[#201a24] sm:text-7xl lg:text-[5.8rem]">
            Thoughtful products,
            <span className="gradient-text block">built from the inside out.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#665d64] sm:text-xl">
            I&apos;m Karim, a Cairo-based developer focused on Django backends and polished React experiences. Alongside web development, I&apos;m studying Oracle technologies and cloud foundations, with one Oracle certification earned and another in progress.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#work" className="primary-button">Explore my work <ArrowDownRight size={18} /></a>
            <a href="mailto:karimkfwazy44@gmail.com" className="secondary-button"><Mail size={17} /> Let&apos;s talk</a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#81757c]">
            <span className="flex items-center gap-2"><MapPin size={16} /> Cairo, Egypt</span>
            <a className="social-link" href="https://github.com/KareemKhaled44" target="_blank" rel="noreferrer"><GitBranch size={16} /> GitHub</a>
            <a className="social-link" href="https://www.linkedin.com/in/karim-khaled" target="_blank" rel="noreferrer"><BriefcaseBusiness size={16} /> LinkedIn</a>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[470px]" aria-label="Django and React development illustration">
          <div className="code-card absolute inset-[11%] rotate-3">
            <div className="mb-8 flex items-center justify-between">
              <span className="flex items-center gap-2 font-mono text-xs text-[#81757c]"><Braces size={15} /> portfolio.py</span>
              <span className="flex gap-1.5"><i /><i /><i /></span>
            </div>
            <div className="space-y-4 font-mono text-[13px] leading-6 sm:text-sm">
              <p><span className="text-[#b74428]">class</span> <span className="text-[#38685d]">Developer</span>:</p>
              <p className="pl-5"><span className="text-[#81757c]">name</span> = <span className="text-[#b36b32]">&quot;Karim Khaled&quot;</span></p>
              <p className="pl-5"><span className="text-[#81757c]">backend</span> = [<span className="text-[#b36b32]">&quot;Django&quot;</span>, <span className="text-[#b36b32]">&quot;DRF&quot;</span>]</p>
              <p className="pl-5"><span className="text-[#81757c]">exploring</span> = [<span className="text-[#b36b32]">&quot;Oracle&quot;</span>, <span className="text-[#b36b32]">&quot;Cloud&quot;</span>]</p>
              <p className="pl-5"><span className="text-[#b74428]">def</span> <span className="text-[#38685d]">build</span>(idea):</p>
              <p className="pl-10 text-[#665d64]"><span className="text-[#b74428]">return</span> idea.to_product()</p>
            </div>
          </div>
          <div className="floating-chip left-0 top-[8%]"><Server size={17} /> API-first</div>
          <div className="floating-chip bottom-[7%] right-0"><Sparkles size={17} /> Clean UI</div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><p className="eyebrow">Selected work</p><h2 className="section-title">Products I&apos;ve built.</h2></div>
            <p className="max-w-md text-base leading-7 text-[#81757c]">End-to-end projects shaped around real workflows, responsive interfaces, and maintainable backend logic.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <article key={project.title} className={`project-card ${project.accent}`}>
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between font-mono text-xs text-[#81757c]"><span>PROJECT / {project.index}</span><ArrowUpRight size={19} /></div>
                <a className="project-media mt-7" href={project.image} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} preview in full size`}>
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                  <span>Open full preview <ArrowUpRight size={15} /></span>
                </a>
                <div className="mt-8">
                  <p className="mb-2 text-sm font-medium text-[#81757c]">{project.label}</p>
                  <h3 className="text-3xl font-semibold tracking-tight text-[#201a24] sm:text-4xl">{project.title}</h3>
                  <p className="mt-4 max-w-xl leading-7 text-[#665d64]">{project.description}</p>
                </div>
                <div className="mt-7 flex flex-wrap gap-2">{project.tags.map((tag) => <span className="tech-pill" key={tag}>{tag}</span>)}</div>
                <a className="mt-8 inline-flex w-fit items-center gap-2 font-medium text-[#b74428] hover:text-[#38685d]" href={project.href} target="_blank" rel="noreferrer">View live project <ArrowUpRight size={17} /></a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {otherProjects.map((project) => (
            <article key={project.title} className="compact-project">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mb-3 font-mono text-xs uppercase tracking-[.15em] text-[#81757c]">Additional project</p>
                  <h3 className="text-2xl font-semibold tracking-tight text-[#201a24]">{project.title}</h3>
                </div>
                {"image" in project && project.image ? (
                  <a className="compact-project-preview" href={project.image} target="_blank" rel="noreferrer" aria-label="Open ChatFlow concept artwork in full size">
                    <img src={project.image} alt={project.imageAlt} loading="lazy" />
                  </a>
                ) : <Layers3 className="text-[#d95d39]" size={22} />}
              </div>
              <p className="mt-4 leading-7 text-[#81757c]">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span className="tech-pill" key={tag}>{tag}</span>)}</div>
              {"href" in project && project.href && <a className="mt-7 inline-flex w-fit items-center gap-2 font-medium text-[#b74428] hover:text-[#38685d]" href={project.href} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={17} /></a>}
            </article>
          ))}
        </div>
      </section>

      <section id="design" className="border-y border-black/8 bg-[#efe1d2]/35">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><p className="eyebrow">Visual design work</p><h2 className="section-title">A different side of how I build.</h2></div>
            <p className="max-w-md text-base leading-7 text-[#81757c]">Selected visual work that shows composition, product presentation, and attention to brand mood beyond the code.</p>
          </div>
          <article className="design-feature">
            <a className="design-media" href="/work/atrak-bianco-latte.webp" target="_blank" rel="noreferrer" aria-label="Open the Atrak Bianco Latte design in full size">
              <img src="/work/atrak-bianco-latte.webp" alt="Bianco Latte perfume advertisement created for Atrak" loading="lazy" />
              <span>View full design <ArrowUpRight size={15} /></span>
            </a>
            <div className="design-copy">
              <p className="font-mono text-xs uppercase tracking-[.18em] text-[#81757c]">Featured visual / 01</p>
              <p className="mt-7 text-sm font-medium text-[#81757c]">Perfume campaign concept</p>
              <h3 className="mt-2 text-4xl font-semibold tracking-[-.04em] text-[#201a24] sm:text-5xl">Atrak — Bianco Latte</h3>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#665d64]">A premium social-media product visual developed from an initial Canva direction and completed in Photoshop, with a focus on depth, contrast, and an elegant fragrance identity.</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Canva", "Adobe Photoshop", "Social Media Design"].map((tag) => <span className="tech-pill" key={tag}>{tag}</span>)}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="about" className="border-y border-black/8 bg-[#efe1d2]/35">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:px-12 lg:py-32">
          <div>
            <p className="eyebrow">About me</p>
            <h2 className="section-title">Curious by default. Practical by choice.</h2>
            <p className="mt-7 text-lg leading-8 text-[#665d64]">
              I&apos;m a Business Information Systems graduate with a 3.85 GPA and a strong interest in backend engineering. I enjoy taking a product from data model and API design to a clear, responsive interface.
            </p>
            <p className="mt-4 leading-7 text-[#81757c]">
              I&apos;m also building an Oracle-focused foundation: I hold the OCI Foundations Associate certification and am currently studying toward a second Oracle credential. This is an area I&apos;m growing into, alongside my hands-on development work.
            </p>
            <a href="/karim-khaled-cv.pdf" download className="secondary-button mt-8"><Download size={17} /> Download CV</a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article className="skill-card" key={group.title}>
                  <span className="skill-icon"><Icon size={21} /></span>
                  <h3 className="mt-6 text-lg font-semibold text-[#201a24]">{group.title}</h3>
                  <ul className="mt-5 space-y-3 text-sm text-[#81757c]">
                    {group.items.map((item) => <li className="flex items-center gap-2" key={item}><CheckCircle2 size={14} className="text-[#4b7f72]" />{item}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mb-12">
          <p className="eyebrow">Education & credentials</p>
          <h2 className="section-title">A foundation built to keep growing.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <article className="credential-card">
            <GraduationCap className="text-[#d95d39]" size={25} />
            <p className="mt-8 text-sm text-[#81757c]">Capital University</p>
            <h3 className="mt-2 text-xl font-semibold text-[#201a24]">Business Information Systems</h3>
            <p className="mt-4 font-mono text-sm text-[#b74428]">GPA 3.85</p>
          </article>
          <article className="credential-card">
            <Award className="text-[#4b7f72]" size={25} />
            <p className="mt-8 text-sm text-[#81757c]">Cisco Networking Academy</p>
            <h3 className="mt-2 text-xl font-semibold text-[#201a24]">Python Essentials</h3>
            <p className="mt-4 text-sm leading-6 text-[#81757c]">Programming fundamentals, data structures, control flow, functions, and problem solving.</p>
          </article>
          <article className="credential-card">
            <Award className="text-[#d95d39]" size={25} />
            <p className="mt-8 text-sm text-[#81757c]">Oracle</p>
            <h3 className="mt-2 text-xl font-semibold text-[#201a24]">OCI Foundations Associate</h3>
            <a className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#b74428] hover:text-[#38685d]" href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=B4CAF6949055C08BC8239D949488F2C6AFD1ACCD92FA4619506F152E6EF9F5EA" target="_blank" rel="noreferrer">View credential <ArrowUpRight size={15} /></a>
          </article>
          <article className="credential-card relative overflow-hidden">
            <span className="absolute right-5 top-5 rounded-full border border-[#d95d39]/20 bg-[#d95d39]/8 px-2.5 py-1 font-mono text-[11px] text-[#b74428]">IN PROGRESS</span>
            <Award className="text-[#d95d39]" size={25} />
            <p className="mt-8 text-sm text-[#81757c]">Oracle</p>
            <h3 className="mt-2 text-xl font-semibold text-[#201a24]">Next Oracle Credential</h3>
            <p className="mt-4 text-sm leading-6 text-[#81757c]">Currently expanding cloud and enterprise technology knowledge. Credential details will be added after completion.</p>
          </article>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 lg:px-12">
        <div className="contact-panel">
          <div>
            <p className="eyebrow">Have a role or project in mind?</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-.04em] text-[#201a24] sm:text-6xl">Let&apos;s build something useful together.</h2>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a href="mailto:karimkfwazy44@gmail.com" className="primary-button"><Mail size={18} /> Email me</a>
            <a href="https://www.linkedin.com/in/karim-khaled" target="_blank" rel="noreferrer" className="secondary-button"><BriefcaseBusiness size={18} /> LinkedIn</a>
          </div>
        </div>
        <footer className="flex flex-col gap-4 py-8 text-sm text-[#81757c] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Karim Khaled. Built with care and clean code.</p>
          <a href="#top" className="inline-flex items-center gap-2 hover:text-[#b74428]">Back to top <ArrowUpRight size={15} /></a>
        </footer>
      </section>
    </main>
  );
}
