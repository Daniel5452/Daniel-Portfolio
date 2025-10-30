"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Mail, Linkedin, Github, FileText, Briefcase, BookOpen, Cpu, Globe, MapPin, Heart, Dumbbell, Book, Trophy, Sparkles, ArrowRight,
  Database, BarChart3, Brain, Zap, Settings, TrendingUp, Search, MessageSquare, Eye, Truck, GitBranch
} from "lucide-react";

// ---------- CONFIGURABLE DATA ----------
const META = {
  name: "Daniel Osman",
  title: "Data Scientist & AI Engineer",
  tagline:
    "I turn messy data and ML models into real business impact. When I'm not training models, you'll find me watching UFC, playing football, or locked in on a new book.",
  about:
    "I'm a master's student with a strong passion for leveraging data, analytics, and emerging technologies to improve business performance. My focus is on connecting technical innovation with organizational strategy and transforming insights into opportunities for growth, efficiency, and measurable impact. I really enjoy learning in a continuous pattern and enjoy collaborating with teams to deliver meaningful results.",
  email: "danielosman5@gmail.com",
  phone: "+31 644799364",
  location: "Amsterdam, NL — Jeddah, SA",
  linkedin: "https://www.linkedin.com/in/daniel-osman22",
  github: "https://github.com/Daniel5452",
  resumeUrl: "/Daniel-Resume.pdf",
};

const SKILLS = [
  { name: "Python", icon: "🐍" },
  { name: "R", icon: BarChart3 },
  { name: "SQL (SQLite)", icon: Database },
  { name: "Bash/Shell", icon: "💻" },
  { name: "JavaScript", icon: "⚡" },
  { name: "PyTorch", icon: Brain },
  { name: "TensorFlow", icon: Brain },
  { name: "scikit-learn", icon: Settings },
  { name: "HuggingFace", icon: "🤗" },
  { name: "LangChain", icon: "🔗" },
  { name: "Pandas", icon: "🐼" },
  { name: "NumPy", icon: "🔢" },
  { name: "MongoDB (NoSQL)", icon: Database },
  { name: "ETL Pipelines", icon: Settings },
  { name: "API Development", icon: Zap },
  { name: "Matplotlib", icon: TrendingUp },
  { name: "Seaborn", icon: BarChart3 },
  { name: "Plotly", icon: BarChart3 },
  { name: "Streamlit", icon: Zap },
  { name: "Dash", icon: BarChart3 },
  { name: "Operations Research (Gurobi)", icon: Search },
  { name: "Time Series Forecasting", icon: TrendingUp },
  { name: "Predictive Modeling", icon: Brain },
  { name: "OpenAI API", icon: "🤖" },
  { name: "Git", icon: GitBranch },
  { name: "Data Visualization", icon: BarChart3 },
  { name: "Statistical & Financial Modeling", icon: TrendingUp },
];

const INTERESTS = [
  {
    icon: Trophy,
    title: "Sports",
    description: "I enjoy watching MMA, football, and tennis. There's something captivating about the strategy, athleticism, and dedication these sports require.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Book,
    title: "Reading",
    description: "I like reading books that expand my analytical thinking. Currently working through 'Thinking, Fast and Slow' by Kahneman and 'The Signal and the Noise' by Nate Silver.",
    color: "from-blue-500 to-indigo-500",
  },
];

const EXPERIENCE = [
  {
    company: "VBTI Consultancy B.V.",
    role: "AI Engineering and Business Optimization Intern",
    period: "Feb 2025 – Aug 2025",
    duration: "6 months",
    thesisUrl: "/Daniel_Bsc_Thesis.pdf", 
    bullets: [
      "Developed an automated pseudo-labeling pipeline that reduced manual annotation costs by up to 75% while maintaining competitive model performance, directly improving project profit margins.",
      "Implemented iterative model retraining cycles that leveraged high-confidence predictions to expand training datasets, achieving 56.3% cost reduction in object detection and 75% in instance segmentation tasks.",
      "Built and utilized machine learning models to enhance financial forecasting, risk assessment, and strategic investment decisions while optimizing management costs.",
    ],
  },
  {
    company: "Reef Support (via FruitPunch AI)",
    role: "Environmental Strategy AI Consultant",
    period: "Sept 2024 – Nov 2024",
    duration: "3 months",
    bullets: [
      "Developed a machine learning pipeline to improve monitoring of marine ecosystems with the aim of assessing the health of coral reefs by providing an estimate for the number of fish detected in an area.",
      "Utilized RoboFlow for data labeling, annotation, and data augmentation to prepare a diverse dataset for model training.",
      "Trained, tested, and validated a custom YOLOv8 model to detect and count fish in underwater videos and achieved a precision of 83% and an accuracy of 51%.",
    ],
  },
  {
    company: "London Metropolitan Police (MPS)",
    role: "Public Sector Data Analyst",
    period: "April 2024 – July 2024",
    duration: "3 months",
    bullets: [
      "Conducted research and statistical analysis on public trust in the Metropolitan Police Service across London boroughs using time series forecasting techniques and provided recommendations for improving community confidence.",
      "Utilized Public Attitude Survey (PAS) and Use of Force (UoF) data to perform OLS regressions and time series analysis, identifying key factors influencing public perception over time.",
      "Developed predictive models using random forest regression and ARIMA forecasting, achieving over 50% accuracy in forecasting quarterly trust trends. This methodology is transferable to supply chain demand forecasting.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Thoracic Disease Classifier",
    subtitle: "AI for Medical Imaging",
    period: "Feb 2024",
    grade: "9/10",
    highlights: [
      "Fine-tuned CNNs like Res-Net50 & EfficientNet-B7 to classify thoracic diseases from 25,000+ chest X-rays in PyTorch with GPU acceleration"
    ],
    emoji: "🫁",
  },
  {
    title: "Financial Risk Analytics and Credit Intelligence Dashboard",
    subtitle: "Python Risk Assessment Platform",
    period: "Jan 2024", 
    grade: "8/10",
    highlights: [
      "Developed comprehensive credit risk assessment platform using Python (Dash/Plotly), enabling real-time portfolio monitoring and strategic lending decisions for financial stakeholders"
    ],
    emoji: "💳",
  },
  {
    title: "Airline Customer Experience Analytics",
    subtitle: "Twitter API Analysis",
    period: "June 2023",
    grade: "8/10",
    highlights: [
      "Built comprehensive social media analytics solution using Twitter API and NoSQL (MongoDB) to analyze customer sentiment patterns for major airlines (Lufthansa, American Airlines)"
    ],
    emoji: "✈️",
  },
  {
    title: "Smart Compression Vest Development for Individuals with ASD",
    subtitle: "IoT + Mobile App Integration",
    period: "Nov 2023",
    grade: "7/10", 
    highlights: [
      "Designed IoT-enabled wearable solution with a mobile app integration that creates personalized compression therapy for individuals with Autistic Spectrum Disorders"
    ],
    emoji: "🦺",
  },
];

const EDUCATION = [
  {
    school: "University of Amsterdam",
    program: "MSc Data Science & Business Analytics",
    period: "2025 – 2026",
    status: "Expected",
  },
  {
    school: "Eindhoven University of Technology",
    program: "BSc Data Science",
    period: "2022 – 2025",
    status: "Completed",
  },
];

// ---------- ANIMATION VARIANTS ----------
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true, amount: 0.2 },
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

// ---------- COMPONENTS ----------
function Marquee({ items }: { items: { name: string; icon: string | React.ComponentType<any> | null }[] }) {
  return (
    <div className="relative overflow-hidden py-6 w-full">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: [-1000, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((skill, i) => {
          const IconComponent = typeof skill.icon === 'function' ? skill.icon : null;
          return (
            <span
              key={i}
              className="px-4 py-2 rounded-full border border-indigo-200 text-sm font-medium shadow-sm bg-white hover:bg-indigo-50 transition-colors whitespace-nowrap flex items-center gap-2"
            >
              {IconComponent && <IconComponent size={16} className="text-indigo-600" />}
              {typeof skill.icon === 'string' && <span className="text-base">{skill.icon}</span>}
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
  hover = false 
}: { 
  children: React.ReactNode; 
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div 
      className={`rounded-2xl border border-gray-200 shadow-sm bg-white p-6 ${
        hover ? "hover:shadow-xl hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

function FloatingShape({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-indigo-200/30 to-purple-200/30 blur-3xl"
      animate={{
        x: [0, 100, 0],
        y: [0, -100, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
}

// ---------- PAGE ----------
export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen text-gray-900 bg-white relative overflow-hidden">
      {/* Floating background shapes */}
      <div className="fixed inset-0 pointer-events-none">
        <FloatingShape delay={0} />
        <FloatingShape delay={5} />
      </div>

      {/* NAV */}
      <motion.nav 
        className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center gap-8 text-sm">
            {[
              { href: "#experience", label: "Experience" },
              { href: "#education", label: "Education" },
              { href: "#projects", label: "Projects" },
              { href: META.linkedin, icon: Linkedin, label: "LinkedIn", external: true },
              { href: META.github, icon: Github, label: "GitHub", external: true },
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 hover:text-indigo-600 transition-colors font-medium"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon && <link.icon size={16} />}
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* HERO - Smaller, more personal */}
      <motion.header 
        className="max-w-4xl mx-auto px-6 pt-12 pb-8 text-center relative"
        style={{ opacity, scale }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.div 
            className="flex items-center gap-2 text-sm text-gray-600"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin size={16} className="text-indigo-600" /> 
            <span>{META.location}</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent">
              Hi, I'm {META.name} 👋
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-xl">
            {META.title}
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.a 
              className="px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl font-medium" 
              href={`mailto:${META.email}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20}/> Let's chat
            </motion.a>
            <motion.a 
              className="px-6 py-3 rounded-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-all duration-300 inline-flex items-center gap-2 font-medium" 
              href={META.resumeUrl}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={20}/> My Resume
            </motion.a>
          </div>
        </motion.div>
      </motion.header>

      {/* Technical Skills Section */}
      <section className="text-center py-8">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="w-full overflow-hidden bg-gradient-to-r from-gray-50 to-indigo-50/30">
          <Marquee items={SKILLS} />
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 pb-16 space-y-16 relative z-10">
        {/* About Me Section */}
        <section id="about">
          <motion.div {...fadeUp} className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-3 inline-flex items-center gap-3">
              <Sparkles className="text-indigo-600" size={28}/>
              About Me
            </h2>
          </motion.div>
          
          <motion.div {...scaleIn}>
            <Card className="bg-gradient-to-br from-indigo-50/50 to-purple-50/50 border-indigo-200">
              <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
                {META.about}
              </p>
            </Card>
          </motion.div>
        </section>

        {/* Education - Now at top */}
        <section id="education">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 inline-flex items-center gap-3">
              <BookOpen className="text-blue-600" size={28}/>
              Education
            </h2>
            <p className="text-gray-600">Where I learned the fundamentals</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {EDUCATION.map((e, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card hover className="h-full group">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  >
                    <BookOpen className="text-blue-600" size={24}/>
                  </motion.div>
                  <div className="font-bold text-xl mb-2">{e.school}</div>
                  <div className="text-gray-700 mb-2">{e.program}</div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-600 font-semibold">{e.period}</span>
                    <span className="text-gray-500 italic">{e.status}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Experience */}
        <section id="experience">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 inline-flex items-center gap-3">
              <Briefcase className="text-indigo-600" size={28}/>
              Experience
            </h2>
            <p className="text-gray-600">Where I've been making things happen</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {EXPERIENCE.map((job, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card hover>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <div className="font-bold text-xl mb-1">{job.role}</div>
                      <div className="text-gray-600">{job.company}</div>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <div className="text-sm text-indigo-600 font-semibold">{job.period}</div>
                      <div className="text-xs text-gray-500">{job.duration}</div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 mt-4">
                    {job.bullets.map((b, j) => (
                      <motion.li 
                        key={j} 
                        className="flex gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <ArrowRight size={16} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </motion.li>
                    ))}
                  </ul>
                  {job.thesisUrl && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <a
                        href={job.thesisUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
                      >
                        <FileText size={16} />
                        View Thesis
                      </a>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 inline-flex items-center gap-3">
              <Cpu className="text-purple-600" size={28}/>
              Projects
            </h2>
            <p className="text-gray-600">Cool stuff I've built</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {PROJECTS.map((p, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp}
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Card hover className="h-full">
                  <div className="flex justify-between items-start mb-3">
                    <motion.div
                      className="text-4xl"
                      animate={{ 
                        scale: hoveredProject === i ? 1.2 : 1,
                        rotate: hoveredProject === i ? 10 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {p.emoji}
                    </motion.div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">{p.period}</div>
                      <div className="text-sm font-semibold text-green-600">Grade: {p.grade}</div>
                    </div>
                  </div>
                  <div className="font-bold text-lg mb-2">{p.title}</div>
                  <div className="text-sm text-gray-600 mb-4">{p.subtitle}</div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {p.highlights.map((h, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Interests - Now at the end */}
        <section id="interests">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 inline-flex items-center gap-3">
              <Heart className="text-red-500" size={28}/>
              What I'm Into
            </h2>
            <p className="text-gray-600">When I'm not wrangling data...</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto"
          >
            {INTERESTS.map((interest, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card hover className="text-center h-full group">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${interest.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <interest.icon className="text-white" size={32}/>
                  </motion.div>
                  <div className="font-bold text-lg mb-2">{interest.title}</div>
                  <p className="text-sm text-gray-600">{interest.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact */}
        <section id="contact">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 inline-flex items-center gap-3">
              <Globe className="text-green-600" size={28}/>
              Get in Touch
            </h2>
            <p className="text-gray-600">Always open to interesting conversations</p>
          </motion.div>
          
          <motion.div {...fadeUp}>
            <Card className="bg-gradient-to-br from-white to-indigo-50/30">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {[
                    { href: `mailto:${META.email}`, icon: Mail, label: META.email },
                    { href: META.linkedin, icon: Linkedin, label: "LinkedIn", external: true },
                  ].map((link, i) => (
                    <motion.a
                      key={i}
                      className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition-colors group"
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-2 rounded-lg bg-indigo-100 group-hover:bg-indigo-200 transition-colors">
                        <link.icon size={20} className="text-indigo-600" />
                      </div>
                      <span className="font-medium">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <motion.a
                    className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition-colors group"
                    href={META.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 rounded-lg bg-indigo-100 group-hover:bg-indigo-200 transition-colors">
                      <Github size={20} className="text-indigo-600" />
                    </div>
                    <span className="font-medium">GitHub</span>
                  </motion.a>
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="p-2 rounded-lg bg-indigo-100">
                      <MapPin size={20} className="text-indigo-600" />
                    </div>
                    <span className="font-medium">{META.location}</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>
      </main>

      <motion.footer 
        className="border-t border-gray-200 bg-gray-50 py-8 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} {META.name}. Built with Next.js & Tailwind CSS.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Made with ☕ and lots of iterations
          </p>
        </div>
      </motion.footer>
    </div>
  );
}