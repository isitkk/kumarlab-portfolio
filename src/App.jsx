import React from 'react';
import { 
  ArrowRight, Cloud, Cpu, Terminal, ShieldCheck, Network, 
  FolderGit2, Briefcase, Award, GraduationCap, Mail, Phone, 
  MapPin, ExternalLink, ChevronRight, Shield, Lock, Server 
} from 'lucide-react';

// Inline GitHub SVG component to avoid version mismatches
const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg 
    className={className} 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    aria-hidden="true"
  >
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export default function App() {
  const projects = [
    {
      id: 'aws-vpc',
      category: 'AWS & Terraform',
      title: 'Automated AWS Multi-AZ VPC Deployment with Terraform',
      description: 'Infrastructure as Code (IaC) repository provisioning public/private subnets, Internet Gateways, NAT Gateways, and EC2 Bastion hosts with strictly defined security groups.',
      tags: ['Terraform', 'AWS VPC', 'EC2'],
      githubUrl: 'https://github.com/your-github-username/aws-terraform-vpc',
      docsUrl: 'https://kumarlab.xyz'
    },
    {
      id: 'k8s-cluster',
      category: 'Kubernetes & Docker',
      title: 'Kubernetes Microservices Cluster Setup',
      description: 'Containerized application architecture using Docker and Kubernetes. Features Nginx ingress controllers, automated Secrets management, and persistent volume routing.',
      tags: ['Kubernetes', 'Docker', 'Node.js'],
      githubUrl: 'https://github.com/your-github-username/k8s-microservices-deploy',
      docsUrl: 'https://kumarlab.xyz'
    },
    {
      id: 'cicd-actions',
      category: 'CI/CD Automation',
      title: 'Automated CI/CD Pipeline with GitHub Actions',
      description: 'End-to-end continuous integration and delivery pipeline triggering automated static code checks, Docker image tagging, and seamless container registry deployments.',
      tags: ['GitHub Actions', 'Bash', 'JavaScript'],
      githubUrl: 'https://github.com/your-github-username/cicd-pipeline-github-actions',
      docsUrl: null
    },
    {
      id: 'linux-hardening',
      category: 'Security & Hardening',
      title: 'Automated Linux System Hardening & Audit Script',
      description: 'Custom Shell/Bash automation suite for Ubuntu/Linux server configuration, enforcing SSH security baselines, ufw firewall policies, and vulnerability reporting.',
      tags: ['Bash', 'Linux', 'Security Audit'],
      githubUrl: 'https://github.com/your-github-username/linux-server-hardening',
      docsUrl: null
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 font-sans antialiased selection:bg-sky-500 selection:text-white min-h-screen">
      
      {/* Background Glow Effect */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-sky-500/10 blur-[120px] pointer-events-none -z-10 rounded-full"></div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="https://kumarlab.xyz" className="text-xl font-bold tracking-tight">
            Kumar<span className="text-sky-400">Lab.xyz</span>
          </a>
          <div className="space-x-8 text-sm font-medium hidden md:flex items-center">
            <a href="#about" className="text-slate-300 hover:text-sky-400 transition-colors">About</a>
            <a href="#skills" className="text-slate-300 hover:text-sky-400 transition-colors">Skills</a>
            <a href="#projects" className="text-slate-300 hover:text-sky-400 transition-colors">Projects</a>
            <a href="#experience" className="text-slate-300 hover:text-sky-400 transition-colors">Experience</a>
            <a href="#certifications" className="text-slate-300 hover:text-sky-400 transition-colors">Certifications</a>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white border border-sky-500/20 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* Hero / About Section */}
      <header id="about" className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 border border-slate-800 rounded-full text-xs font-medium text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Open for Infrastructure, Cloud & DevOps Roles
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Karan Kumar Mudi
            </h1>
            <p className="text-2xl sm:text-3xl font-bold text-sky-400">
              Cloud & DevOps Security Engineer
            </p>
          </div>

          <p className="text-slate-400 max-w-3xl text-base sm:text-lg leading-relaxed">
            Results-driven Cloud & Infrastructure Specialist based in India. Welcome to my technical lab (<span className="text-sky-400 font-mono">kumarlab.xyz</span>) where I build and document real-world projects across <span className="text-slate-200 font-semibold">AWS, Azure, Terraform, Kubernetes, Containerization, and Network Security</span>.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 pt-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span>Nalgonda / Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-sky-400" />
              <a href="mailto:km188353@gmail.com" className="hover:text-sky-400 transition-colors">km188353@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <GithubIcon className="w-4 h-4 text-sky-400" />
              <a href="https://github.com/isitkk" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">github.com/isitkk</a>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold px-6 py-3 rounded-lg shadow-lg shadow-sky-500/20 transition-all duration-300">
              <FolderGit2 className="w-4 h-4" /> Explore Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold px-6 py-3 rounded-lg border border-slate-800 transition-all duration-300">
              <Mail className="w-4 h-4" /> Contact Me
            </a>
          </div>
        </div>
      </header>

      {/* Technical Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800/60">
        <div className="flex flex-col gap-2 mb-10">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <Cpu className="text-sky-400" /> Technical Core
          </h2>
          <p className="text-slate-400 text-sm">Specialized skills across cloud engineering, security operations, and automation.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-sky-500/10 text-sky-400 rounded-xl border border-sky-500/20">
                <Cloud className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Cloud Architecture & Infra</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['AWS (VPC, EC2, S3, RDS, IAM, ECR, ECS, EKS, BEANSTALK)', 'Microsoft Azure (AZ-900)', 'Cost Optimization', 'High Availability Design'].map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-slate-950 text-slate-300 text-xs font-medium rounded-lg border border-slate-800">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">DevOps, Containerization & Code</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Terraform (IaC)', 'Kubernetes (k8s)', 'Docker & Microservices', 'Jenkins', 'Vagrant'].map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-slate-950 text-sky-400 text-xs font-semibold rounded-lg border border-sky-500/30">{skill}</span>
              ))}
              {['CI/CD Pipelines', 'Bash / Shell Scripting', 'Linux Admin (Ubuntu/Xubuntu)', 'Git & Version Control'].map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-slate-950 text-slate-300 text-xs font-medium rounded-lg border border-slate-800">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Security & SIEM Operations</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Vulnerability Scanning (Nessus)', 'RSA NetWitness SIEM', 'Alienvault OSSIM', 'System Hardening', 'Threat Monitoring'].map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-slate-950 text-slate-300 text-xs font-medium rounded-lg border border-slate-800">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Network Architecture</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['TCP/IP Architecture', 'Routing & Switching', 'Firewall Rules & VPNs', 'DNS & DHCP Configuration'].map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-slate-950 text-slate-300 text-xs font-medium rounded-lg border border-slate-800">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800/60">
        <div className="flex flex-col gap-2 mb-10">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <FolderGit2 className="text-sky-400" /> DevOps & Infrastructure Projects
          </h2>
          <p className="text-slate-400 text-sm">Click any project headline to open the source code on GitHub or view technical docs on <span className="text-sky-400 font-mono">kumarlab.xyz</span>.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:border-sky-500/40">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-sky-500/10 text-sky-400 rounded-md border border-sky-500/20">{project.category}</span>
                  <div className="flex items-center gap-3">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" title="GitHub Repository">
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    {project.docsUrl && (
                      <a href={project.docsUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors" title="Live Documentation">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="group">
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                </a>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-slate-800/60 mt-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs text-slate-400 font-mono">• {tag}</span>
                  ))}
                </div>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-xs font-semibold text-sky-400 flex items-center gap-1 hover:underline">
                  View Code <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800/60">
        <div className="flex flex-col gap-2 mb-10">
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <Briefcase className="text-sky-400" /> Work Experience
          </h2>
          <p className="text-slate-400 text-sm">A track record of managing enterprise IT security and infrastructure.</p>
        </div>

        <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-4 before:w-0.5 before:bg-slate-800">
          <div className="relative pl-8 sm:pl-10">
            <div className="absolute left-1.5 sm:left-2 top-1.5 w-4 h-4 bg-sky-500 rounded-full ring-4 ring-slate-950"></div>
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-lg font-bold text-white">Project Engineer</h3>
                <span className="text-xs font-semibold px-3 py-1 bg-sky-500/10 text-sky-400 rounded-full border border-sky-500/20 w-fit">Jan 2023 – Aug 2023</span>
              </div>
              <p className="text-sm font-medium text-slate-300">Centre for Development of Advanced Computing (C-DAC) • Hyderabad, India</p>
              <ul class="list-disc list-inside text-slate-400 space-y-2 text-sm leading-relaxed pt-2">
                <li>Executed end-to-end implementation and management of cybersecurity and network infrastructure projects for government and enterprise clients.</li>
                <li>Conducted rigorous vulnerability assessments and infrastructure security audits using Nessus, authoring technical compliance reports.</li>
                <li>Configured automated containerized environment workflows for micro-services deployment.</li>
                <li>Collaborated with senior engineering teams to enforce secure network configurations, firewall policies, and system hardening measures.</li>
              </ul>
            </div>
          </div>

          <div className="relative pl-8 sm:pl-10">
            <div className="absolute left-1.5 sm:left-2 top-1.5 w-4 h-4 bg-slate-700 rounded-full ring-4 ring-slate-950"></div>
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-lg font-bold text-white">Security Analyst</h3>
                <span className="text-xs font-medium text-slate-400">Dec 2020 – May 2021</span>
              </div>
              <p className="text-sm font-medium text-slate-300">QOS Technology Pvt Ltd • Hyderabad, India</p>
              <ul className="list-disc list-inside text-slate-400 space-y-2 text-sm leading-relaxed pt-2">
                <li>Monitored and triaged real-time network traffic and security logs using RSA NetWitness SIEM to proactively mitigate potential threats.</li>
                <li>Supported continuous risk assessment frameworks, internal vulnerability scanning, and initial incident response workflows.</li>
                <li>Authored clean, structured security documentation, threat reports, and remediation blueprints for IT teams.</li>
              </ul>
            </div>
          </div>

          <div className="relative pl-8 sm:pl-10">
            <div className="absolute left-1.5 sm:left-2 top-1.5 w-4 h-4 bg-slate-700 rounded-full ring-4 ring-slate-950"></div>
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-lg font-bold text-white">Red Team Essentials (Intern)</h3>
                <span className="text-xs font-medium text-slate-400">Jul 2020 – Dec 2020</span>
              </div>
              <p className="text-sm font-medium text-slate-300">QOS Technology Pvt Ltd • Hyderabad, India</p>
              <ul className="list-disc list-inside text-slate-400 space-y-2 text-sm leading-relaxed pt-2">
                <li>Gained hands-on exposure to centralized log management and threat monitoring using Alienvault OSSIM SIEM.</li>
                <li>Developed competencies in Linux system administration, virtualization baselines, and repository version control via Git.</li>
              </ul>
            </div>
          </div>

          <div className="relative pl-8 sm:pl-10">
            <div className="absolute left-1.5 sm:left-2 top-1.5 w-4 h-4 bg-slate-700 rounded-full ring-4 ring-slate-950"></div>
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-lg font-bold text-white">Associate Analyst</h3>
                <span className="text-xs font-medium text-slate-400">Mar 2019 – Mar 2020</span>
              </div>
              <p className="text-sm font-medium text-slate-300">Global Logic Pvt Ltd • Hyderabad, India</p>
              <ul className="list-disc list-inside text-slate-400 space-y-2 text-sm leading-relaxed pt-2">
                <li>Managed content engineering pipelines and executed detailed Quality Analysis (QA) to maintain high data compliance benchmarks.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Education Section */}
      <section id="certifications" className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800/60">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Award className="text-sky-400" /> Industry Certifications
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-xl flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">AWS Certified Cloud Practitioner (CLF-C02)</h3>
                  <p className="text-xs text-sky-400 mt-1 font-medium">Amazon Web Services • Valid until Jan 2028</p>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">Verification ID: FYH4XCCCQMQQ1E9F</p>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-xl flex items-start gap-4">
                <div className="p-3 bg-sky-500/10 text-sky-400 rounded-lg">
                  <Cloud className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Microsoft Azure Fundamentals (AZ-900)</h3>
                  <p className="text-xs text-sky-400 mt-1 font-medium">Microsoft • Issued Jun 2021</p>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-xl flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Network Security Certification</h3>
                  <p className="text-xs text-sky-400 mt-1 font-medium">Purplesynapz • Issued Sep 2022</p>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-xl flex items-start gap-4">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Field Technician in Networking & Storage</h3>
                  <p className="text-xs text-sky-400 mt-1 font-medium">Skill India • Issued Feb 2019</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <GraduationCap className="text-sky-400" /> Academic Background
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-xl">
                <h3 className="font-bold text-white text-base">Master of Business Administration (MBA)</h3>
                <p className="text-xs text-sky-400 font-medium mt-1">Master's in Travel and Tourism</p>
                <p className="text-sm text-slate-400 mt-2">Mahatma Gandhi Central University</p>
                <p className="text-xs text-slate-500 mt-1">Graduated Jul 2017</p>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-xl">
                <h3 className="font-bold text-white text-base">Bachelor of Technology (B.Tech)</h3>
                <p className="text-xs text-sky-400 font-medium mt-1">Electronics and Communication Engineering (ECE)</p>
                <p className="text-sm text-slate-400 mt-2">JNTU Hyderabad</p>
                <p className="text-xs text-slate-500 mt-1">Graduated Oct 2014</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800/60">
        <div className="bg-slate-900/90 border border-slate-800 p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Let's Build Secure Infrastructure</h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              I am actively seeking opportunities in Cloud Architecture, DevOps Engineering, and Network Security Operations. Feel free to reach out directly.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full sm:w-auto">
            <a href="mailto:kumar.karan0416@gmail.com" className="inline-flex items-center justify-center gap-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-sky-500/20 transition-all duration-300">
              <Mail className="w-5 h-5" /> Send Email
            </a>
            <a href="tel:+919398782061" className="inline-flex items-center justify-center gap-3 bg-slate-950 hover:bg-slate-800 text-slate-200 font-semibold px-6 py-3 rounded-xl border border-slate-800 transition-all duration-300 text-sm">
              <Phone className="w-4 h-4 text-sky-400" /> +91-9398782061
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 mt-12 gap-4">
          <p>© 2026 Karan Kumar Mudi • Hosted at <a href="https://kumarlab.xyz" className="text-sky-400 hover:underline">KumarLab.xyz</a></p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-slate-300 transition-colors">Back to Top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
