"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionProps, type Variants } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  Code2,
  Database,
  FileText,
  Github,
  GraduationCap,
  Handshake,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Presentation,
  Search,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

// Place the referenced logo files inside /public.
const META = {
  name: "Daniel Osman",
  title: "Business Analytics & AI Strategy Analyst",
  valueProposition:
    "Using data, AI, and business intelligence to turn complex problems into clearer decisions and measurable business impact.",
  about:
    "I enjoy working where data, technology, and business decisions meet. Most of my work has involved taking something complex — a large dataset, an unclear KPI movement, a repetitive process, or a technical model — and making it easier for people to understand and use. I am currently working in gaming analytics and AI at Tencent, after previously building an AI automation solution at VBTI that reduced operational costs by 75%. Long term, I want to keep moving toward business strategy, transformation, project evaluation, and executive decision support while keeping the technical skills that let me understand how the solutions actually work.",
  email: "danielosman5@gmail.com",
  phone: "+31 644799364",
  location: "Amsterdam, Netherlands — Jeddah, Saudi Arabia",
  linkedin: "https://www.linkedin.com/in/daniel-osman22",
  github: "https://github.com/Daniel5452",
  resumeUrl: "/Daniel-Resume.pdf",
  photoUrl: "/daniel_photo.png",
};

const SKILLS = [
  { name: "Strategic Problem-Solving", icon: Target },
  { name: "KPI & Performance Analysis", icon: BarChart3 },
  { name: "Business Intelligence", icon: TrendingUp },
  { name: "AI Strategy & Automation", icon: Brain },
  { name: "LLM Applications & Agents", icon: Sparkles },
  { name: "Forecasting & Anomaly Detection", icon: Search },
  { name: "Process Optimization", icon: Settings },
  { name: "Project Evaluation", icon: CheckCircle2 },
  { name: "Stakeholder Management", icon: Handshake },
  { name: "Cross-Functional Collaboration", icon: Users },
  { name: "Executive Reporting", icon: Presentation },
  { name: "UI/UX & Dashboard Development", icon: Code2 },
  { name: "Python, SQL & R", icon: Database },
  { name: "Financial & Impact Modeling", icon: TrendingUp },
  { name: "API & ETL Development", icon: Zap },
  { name: "Arabic & English — C2", icon: Languages },
];

const IMPACT = [
  {
    value: "75%",
    label: "Operational cost reduction",
    sublabel: "Delivered through an AI automation initiative",
  },
  {
    value: "4+",
    label: "Business domains",
    sublabel: "Gaming, consulting, public sector, and sustainability",
  },
  {
    value: "25K+",
    label: "Medical images analyzed",
    sublabel: "For a deep-learning classification project",
  },
  {
    value: "83%",
    label: "Detection precision achieved",
    sublabel: "In automated coral-reef monitoring",
  },
  {
    value: "284%",
    label: "Portfolio return achieved",
    sublabel: "Through collaborative market research and analysis",
  },
  {
    value: "2",
    label: "International career markets",
    sublabel: "Professional focus across the Netherlands and GCC",
  },
];


type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  period: string;
  duration: string;
  logo: string;
  tags: string[];
  bullets: string[];
  thesisUrl?: string;
  context?: string;
};

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Tencent Holdings Ltd.",
    location: "Amsterdam, Netherlands",
    role: "Data Science & Business Optimization Intern",
    period: "Apr. 2026 – Present",
    duration: "Current",
    logo: "/Tencent_logo.png",
    tags: ["Gaming Analytics", "LLMs", "Forecasting", "Executive Reporting"],
    bullets: [
      "Deliver KPI and player-behavior analysis to executives across multiple countries for globally recognized titles including Clash of Clans, Brawl Stars, Delta Force, and Dune: Awakening, covering revenue, retention, engagement, and monetization.",
      "Build executive dashboards, automated reports, and business presentations that make product performance easier to understand and support faster data-driven decisions.",
      "Research and implement anomaly detection, forecasting, and LLM-powered analytics capabilities to improve internal AI tools and business-intelligence workflows across Tencent studios.",
      "Translate complex analytical findings into practical recommendations while collaborating with analytics, data engineering, marketing, and product teams.",
    ],
  },
  {
    company: "VBTI Consultancy B.V.",
    location: "Eindhoven, Netherlands",
    role: "AI Engineering & Business Optimization Intern",
    period: "Feb. 2025 – Aug. 2025",
    duration: "6 months",
    logo: "/vbti_logo.jpg",
    thesisUrl: "/Daniel_Bsc_Thesis.pdf",
    tags: ["AI Transformation", "Cost Optimization", "Risk Assessment"],
    bullets: [
      "Built and deployed an AI-driven automation solution across multiple business units, contributing to a 75% reduction in operational costs and materially improving project profit margins.",
      "Developed a pseudo-labeling workflow that reduced repetitive manual processes and created a more scalable model-development cycle.",
      "Produced decision frameworks and risk assessments for senior management, connecting technical performance with financial and operational impact.",
      "Facilitated stakeholder workshops with technical and business teams to identify optimization opportunities and support implementation.",
    ],
  },
  {
    company: "Reef Support, via FruitPunch AI",
    location: "Eindhoven, Netherlands",
    role: "Environmental AI Strategy Consultant",
    period: "Sept. 2024 – Nov. 2024",
    duration: "3 months",
    logo: "/tue_logo.png",
    context: "University-sponsored consulting project",
    tags: ["Computer Vision", "Sustainability", "Stakeholder Research"],
    bullets: [
      "Developed an automated computer-vision system to monitor coral-reef health and reduce reliance on time-intensive manual assessment.",
      "Coordinated with research teams, marine specialists, and environmental stakeholders to define operational problems and measurable success criteria.",
      "Led development of a cost-effective monitoring framework that achieved 83% detection precision.",
      "Translated technical findings into strategic recommendations for conservation organizations and future implementation planning.",
    ],
  },
  {
    company: "London Metropolitan Police Service",
    location: "Eindhoven / London",
    role: "Data Science & Public Strategy Analytics Project",
    period: "Apr. 2024 – July 2024",
    duration: "4 months",
    logo: "/met_logo.png",
    context: "University-sponsored client project",
    tags: ["Public Strategy", "Random Forest", "Policy Analytics"],
    bullets: [
      "Advised the Metropolitan Police Service on community-relations strategy by analyzing use-of-force cases and borough-level performance.",
      "Built random-forest models to identify drivers of high-force incidents and translated model outputs into prioritized actions for resource allocation.",
      "Developed a benchmarking framework that surfaced departmental improvement opportunities and supported strategic planning.",
      "Managed collaboration across academic and government stakeholders, ensuring recommendations remained rigorous, actionable, and responsibly framed.",
    ],
  },
];

const PROJECTS = [
  {
    title: "LLM-Based Gaming Anomaly Detection",
    period: "2026",
    impact: "MSc thesis at the University of Amsterdam",
    description:
      "Designed and evaluated an AI-assisted anomaly-detection framework for gaming KPIs, combining forecasting, statistical detection, explainability, and LLM-based business analysis.",
    thesisUrl: "/Daniel_Msc_Thesis.pdf",
  },
  {
    title: "Financial Risk & Credit Intelligence Dashboard",
    period: "2024",
    impact: "Grade: 8/10",
    description:
      "Built an interactive Dash and Plotly platform for credit-risk assessment, portfolio monitoring, and strategic lending decisions.",
  },
  {
    title: "Thoracic Disease Classifier",
    period: "2024",
    impact: "25,000+ X-rays · Grade: 9/10",
    description:
      "Fine-tuned ResNet50 and EfficientNet-B7 models in PyTorch to classify thoracic diseases using GPU-accelerated medical-image processing.",
  },
  {
    title: "Airline Customer Experience Analytics",
    period: "2023",
    impact: "NLP · MongoDB · Twitter API",
    description:
      "Built a sentiment-analysis pipeline to identify customer-experience patterns for Lufthansa and American Airlines and convert them into actionable insights.",
  },
];

const EDUCATION = [
  {
    school: "University of Amsterdam",
    program: "MSc in Data Science and Business Analytics",
    period: "Sept. 2025 – Aug. 2026",
    location: "Amsterdam, Netherlands",
    logo: null,
    details:
      "Focus on machine learning, optimization, deep learning, impact evaluation, explainable AI, and trustworthy analytics. Thesis on LLM-based anomaly detection and business intelligence for gaming analytics.",
  },
  {
    school: "Eindhoven University of Technology",
    program: "BSc in Data Science · Grade: 7.5/10",
    period: "Aug. 2022 – Aug. 2025",
    location: "Eindhoven, Netherlands",
    logo: "/tue_logo.png",
    details:
      "Coursework across analytics, econometrics, NLP, optimization, data management, and statistical computing. Bachelor thesis graded 8.5/10.",
  },
  {
    school: "American International School of Jeddah",
    program: "High School Diploma · High Honors · GPA: 3.9/4",
    period: "2008 – 2022",
    location: "Jeddah, Saudi Arabia",
    logo: null,
    details:
      "International education with leadership activities in market analysis, investment research, and Model United Nations.",
  },
];

const FOCUS_AREAS = [
  "Strategic Decision Support",
  "AI-Enabled Business Transformation",
  "KPI & Corporate Performance Analytics",
  "Project and Investment Evaluation",
  "Executive Reporting & Communication",
  "Data Product and Dashboard Development",
];

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
};

const staggerContainer: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08 } },
};

type Skill = {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

function Marquee({ items }: { items: Skill[] }) {
  return (
    <div className="relative w-full overflow-hidden py-6">
      <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white via-white/80 to-transparent md:w-32" />
      <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white via-white/80 to-transparent md:w-32" />
      <motion.div
        className="flex w-max gap-3"
        animate={{ x: [-1100, 0] }}
        transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((skill, index) => {
          const Icon = skill.icon;
          return (
            <span
              key={`${skill.name}-${index}`}
              className="flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
            >
              <Icon size={16} className="text-blue-600" />
              {skill.name}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}

function Card({
  children,
  className = "",
  hover = false,
  ...props
}: React.ComponentProps<typeof motion.div> & { hover?: boolean }) {
  return (
    <motion.div
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${
        hover
          ? "transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
          : ""
      } ${className}`}
      whileHover={hover ? { y: -4 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.82]);
  const headerScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.985]);

  return (
    <div className="relative min-h-screen bg-white text-slate-800">
      <nav className="sticky top-0 z-50 border-b border-blue-200/40 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-4 py-4 md:px-6">
          <div className="flex items-center justify-start gap-5 overflow-x-auto text-sm md:justify-center md:gap-8">
            {[
              { href: "#experience", label: "Experience" },
              { href: "#education", label: "Education" },
              { href: "#projects", label: "Projects" },
              { href: META.linkedin, icon: Linkedin, label: "LinkedIn", external: true },
              { href: META.github, icon: Github, label: "GitHub", external: true },
              { href: META.resumeUrl, icon: FileText, label: "Resume", external: true },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="inline-flex shrink-0 items-center gap-2 font-medium text-slate-700 transition-colors hover:text-blue-700"
                whileHover={{ y: -1 }}
              >
                {link.icon && <link.icon size={16} />}
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      <motion.header
        className="relative z-10 mx-auto max-w-5xl px-6 pb-12 pt-16"
        style={{ opacity: headerOpacity, scale: headerScale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
            <MapPin size={16} />
            <span>{META.location}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mx-auto h-28 w-28 overflow-hidden rounded-2xl border-4 border-white bg-slate-100 shadow-lg ring-1 ring-slate-200"
          >
            <Image
              src={META.photoUrl}
              alt={`${META.name} portrait`}
              width={112}
              height={112}
              priority
              className="h-full w-full object-cover object-[center_28%]"
            />
          </motion.div>

          <div className="space-y-4">
            <h1 className="bg-gradient-to-r from-slate-900 via-blue-700 to-slate-900 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
              {META.name}
            </h1>
            <h2 className="text-xl font-medium text-slate-700 md:text-2xl">{META.title}</h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
              {META.valueProposition}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href={`mailto:${META.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-medium text-white shadow-lg transition-all hover:from-blue-700 hover:to-indigo-700"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={18} /> Contact
            </motion.a>
            <motion.a
              href={META.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-blue-300 px-8 py-4 font-medium text-slate-800 transition-all hover:border-blue-400 hover:bg-blue-50"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <FileText size={18} /> Resume
            </motion.a>
          </div>
        </motion.div>
      </motion.header>

      <section className="relative z-10 mb-16">
        <motion.div {...fadeUp} className="mb-6 text-center">
          <h2 className="mb-2 text-xl font-semibold text-slate-800">Core Competencies</h2>
          <p className="text-sm text-slate-600">Business thinking supported by hands-on technical experience</p>
        </motion.div>
        <Marquee items={SKILLS} />
      </section>

      <main className="relative z-10 mx-auto max-w-5xl space-y-16 px-6 pb-16">
        <section>
          <motion.div {...fadeUp}>
            <h2 className="mb-8 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-center text-3xl font-bold text-transparent">
              Selected Impact
            </h2>
            <motion.div
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {IMPACT.map((item, index) => (
                <Card key={item.label} className="text-center" hover>
                  <motion.div
                    initial={{ scale: 0.85, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <div className="mb-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-3xl font-bold text-transparent">
                      {item.value}
                    </div>
                    <div className="mb-1 text-sm font-semibold text-slate-700">{item.label}</div>
                    <div className="text-xs leading-relaxed text-slate-500">{item.sublabel}</div>
                  </motion.div>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section id="about">
          <motion.div {...fadeUp}>
            <h2 className="mb-8 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-3xl font-bold text-transparent">
              A Little About Me
            </h2>
            <Card hover>
              <p className="text-lg leading-relaxed text-slate-700">{META.about}</p>
            </Card>
          </motion.div>
        </section>

        <section>
          <motion.div {...fadeUp}>
            <h2 className="mb-8 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-3xl font-bold text-transparent">
              Where I Create Value
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {FOCUS_AREAS.map((area) => (
                <Card key={area} hover className="flex items-center gap-3 p-5">
                  <Target size={20} className="shrink-0 text-blue-600" />
                  <span className="font-medium text-slate-700">{area}</span>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="experience" className="scroll-mt-24">
          <motion.div {...fadeUp}>
            <h2 className="mb-8 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-3xl font-bold text-transparent">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {EXPERIENCE.map((job, index) => (
                <Card
                  key={job.company}
                  hover
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-3"
                        whileHover={{ scale: 1.05, rotate: 3 }}
                      >
                        <Image
                          src={job.logo}
                          alt={`${job.company} logo`}
                          width={44}
                          height={44}
                          className="max-h-11 max-w-11 object-contain"
                          unoptimized
                        />
                      </motion.div>
                      <div>
                        <h3 className="mb-1 text-xl font-bold text-slate-900">{job.role}</h3>
                        <div className="text-lg font-medium text-blue-700">{job.company}</div>
                        <div className="mt-1 text-sm text-slate-500">{job.location}</div>
                        {job.context && (
                          <div className="mt-2 text-xs italic text-slate-500">{job.context}</div>
                        )}
                      </div>
                    </div>
                    <div className="md:text-right">
                      <div className="text-sm font-medium text-slate-900">{job.period}</div>
                      <div className="mt-1 inline-block rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600">
                        {job.duration}
                      </div>
                    </div>
                  </div>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3 text-slate-700">
                    {job.bullets.map((bullet, bulletIndex) => (
                      <motion.li
                        key={bullet}
                        className="flex gap-3"
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: bulletIndex * 0.04 }}
                      >
                        <ArrowRight size={16} className="mt-1 shrink-0 text-blue-500" />
                        <span className="leading-relaxed">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {job.thesisUrl && (
                    <div className="mt-5 border-t border-slate-100 pt-5">
                      <a
                        href={job.thesisUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100"
                      >
                        <FileText size={16} /> View Bachelor Thesis
                      </a>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="projects" className="scroll-mt-24">
          <motion.div {...fadeUp}>
            <h2 className="mb-8 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-3xl font-bold text-transparent">
              Selected Projects & Business Impact
            </h2>
            <Card hover>
              <div className="space-y-8">
                {PROJECTS.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="border-b border-slate-100 pb-8 last:border-0 last:pb-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 6 }}
                  >
                    <div className="mb-3 flex flex-col justify-between gap-2 md:flex-row md:items-start">
                      <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
                      <div className="md:text-right">
                        <div className="inline-block rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600">
                          {project.period}
                        </div>
                        <div className="mt-1 text-sm font-medium text-indigo-700">{project.impact}</div>
                      </div>
                    </div>
                    <p className="leading-relaxed text-slate-600">{project.description}</p>
                    {project.thesisUrl && (
                      <div className="mt-4">
                        <a
                          href={project.thesisUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100 hover:text-blue-800"
                        >
                          <FileText size={16} />
                          View MSc Thesis
                        </a>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </section>

        <section id="education" className="scroll-mt-24">
          <motion.div {...fadeUp}>
            <h2 className="mb-8 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-3xl font-bold text-transparent">
              Education
            </h2>
            <div className="space-y-6">
              {EDUCATION.map((education) => (
                <Card key={education.school} hover>
                  <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 p-2">
                        {education.logo ? (
                          <Image
                            src={education.logo}
                            alt={`${education.school} logo`}
                            width={40}
                            height={40}
                            className="max-h-10 max-w-10 object-contain"
                            unoptimized
                          />
                        ) : (
                          <GraduationCap size={28} className="text-blue-600" />
                        )}
                      </div>
                      <div>
                        <h3 className="mb-1 text-lg font-bold text-slate-900">{education.school}</h3>
                        <div className="font-medium text-blue-700">{education.program}</div>
                        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
                          {education.details}
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 md:text-right">
                      <div className="text-sm font-medium text-slate-900">{education.period}</div>
                      <div className="mt-1 inline-block rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600">
                        {education.location}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact">
          <motion.div {...fadeUp}>
            <h2 className="mb-8 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-3xl font-bold text-transparent">
              Contact Information
            </h2>
            <Card hover>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-5">
                  <a className="flex items-center gap-3 hover:text-blue-700" href={`mailto:${META.email}`}>
                    <Mail size={20} className="text-blue-500" />
                    <span className="font-medium">{META.email}</span>
                  </a>
                  <a
                    className="flex items-center gap-3 hover:text-blue-700"
                    href={META.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={20} className="text-blue-500" />
                    <span className="font-medium">LinkedIn Profile</span>
                  </a>
                </div>
                <div className="space-y-5">
                  <a
                    className="flex items-center gap-3 hover:text-blue-700"
                    href={META.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} className="text-blue-500" />
                    <span className="font-medium">GitHub Profile</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-blue-500" />
                    <span className="font-medium">{META.location}</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>
      </main>

      <footer className="relative z-10 mt-16 border-t border-slate-200 bg-slate-50/50 py-8">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {META.name}. Built with Next.js, TypeScript, and a lot of iteration.
          </p>
        </div>
      </footer>
    </div>
  );
}