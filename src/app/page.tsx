'use client';

import Image from "next/image";
import Link from "next/link";
import mypic from "./me.jpeg";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid gap-12 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="sticky top-36">
            <div className="relative mb-6 h-48 w-48 overflow-hidden md:h-45 md:w-36">
              <Image
                src={mypic}
                alt="Developer"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-zinc-500">
                  Email
                </h3>
                <p className="">
                  nameng9189@gmail.com
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-zinc-500">
                  Location
                </h3>
                <p className="">
                  New York, NY
                </p>
              </div>
              <div className="flex space-x-8">
                <Link
                  href="https://github.com/wmoew"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mn1098/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          {/* Hero Section */}
        <section className="flex items-center h-auto py-8 md:py-20">
        <div className="container w-full">
              <h2 className="text-3xl md:text-4xl font-normal mb-24">
              Hi! I&apos;m Moe, a software engineer building infrastructure and engineer-facing platforms. I build applications that
              <span className="rainbow-text">
              {""} work well and feel good to use
              </span>,
              mainly in JavaScript/TypeScript, with backend experience in Python and Java. I&apos;m currently open to new opportunities.
              </h2>
          </div>
        </section>

        {/*resume*/}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-16">Experience
          </h2>
          <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={`${experience.company}-${index}`} className="pl-4">
                <h3 className="text-base font-normal mb-2">
                  {experience.role}
                </h3>
                <p className="text-sm mb-2 font-medium text-zinc-500">
          {/* Show the company name and url if available */}
          {experience.codeUrl ? (
            <Link
              href={experience.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm hover:underline ml-2"
            >
              {experience.company}
              <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
            </Link>
          ) : experience.portfolioUrl ? (
            // Note: Use experience.portfolioUrl for the href here
            <Link
              href={experience.portfolioUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm hover:underline ml-2" // Changed hover:text-blue-600 to hover:underline for consistency
              aria-label="View Portfolio"
            >
              {experience.company}
              <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
            </Link>
          ) : (
            // No link, just company name
            <span>{experience.company}</span>
          )}

  {/* Show the period (Always displayed) */}
  <span className="block sm:inline sm:ml-2">
    <span className="ml-2">| {experience.period}</span>
  </span>
</p>
{experience.description && (
  <p className="text-sm mb-2 italic text-zinc-500">
    {experience.description}
  </p>
)}
              <ul className="space-y-2 pl-5 text-base">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex">
                    <span className="mr-2">-</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
              </div>
            ))}
            </div>
        </section>

        {/* Skills/Technologies Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-16">
            Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 pl-4">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-sm font-medium text-zinc-500 mb-3">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--card-bg)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-normal mb-16 font-['EB_Garamond']">
            Education
            </h2>
            <div className="space-y-4">
              <div>
                <div className="">
                Master of Science in Computer Science
                </div>
                <p className="text-sm font-medium text-zinc-500">
                Georgia Institute of Technology | Aug 2026 - Expected 2028
                </p>
              </div>
              <div>
                <div className="">
                Master of Science in Integrated Digital Media
                </div>
                <p className="text-sm font-medium text-zinc-500">
                New York University, Tandon School of Engineering | 2018 - 2020
                </p>
              </div>
              <div>
                <div className="">
                Bachelor of Engineering in Mathematical Sciences
                </div>
                <p className="text-sm font-medium text-zinc-500">
                Yokohama National University | 2014 - 2018
                </p>
              </div>
            </div>
            </section>
        </div>
      </div>
    </div>
  );
}
interface Experience {
  role: string;
  company: string;
  codeUrl?: string;
  portfolioUrl?: string;
  period: string;
  description?: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Queryhawk, OS Labs Open Source Fellowship",
    codeUrl: "https://github.com/oslabs-beta/QueryHawk",
    period: "Dec 2024 - Present",
    description: "Open-source database monitoring platform, built with a 5-engineer fellowship team",
    responsibilities: [
      "Architected and shipped a production-ready, containerized database monitoring system (Docker, Grafana, Prometheus) with dynamic PostgreSQL connection management and automated service discovery",
      "Built a standardized Prometheus metric collection pipeline on OpenTelemetry, cutting monitoring setup time from hours to minutes and giving engineers real-time query optimization insight",
      "Automated Grafana provisioning via YAML and the Provisioning API so dashboards self-configure their data sources on initialization, saving 3-4 hours per installation",
      "Led front-end architecture with React, TypeScript, and Material UI theming, delivering a consistent, reusable component wrapper across complex, data-dense dashboards",
    ],
  },
  {
    role: "Product Designer",
    company: "Amount",
    portfolioUrl: "/design-work.pdf",
    period: "Jun 2021 - Sep 2023",
    responsibilities: [
      "Partnered with backend engineers to turn complex loan-evaluation decision engines into a visual, ReactFlow-based rules platform, letting non-technical users create and modify logic directly",
      "Built a modular React design system with component composability and CSS-in-JS, cutting client implementation time from months to weeks",
      "Implemented attribute grouping in data-driven UI components that mirrored underlying database relationships for complex decision engines",
    ],
  },
  {
    role: "UX Designer",
    company: "MIT Optics Lab, Cambridge, MA",
    period: "Feb 2021 - Jun 2021",
    responsibilities: [
      "Built VR/desktop training simulations in Unity3D/C#, collaborating with physics faculty to model optical interactions accurately",
      "Ran 20+ user-testing sessions using Unity Analytics, improving completion rates 30%",
    ],
  },
];

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "JavaScript", "TypeScript", "React", "Redux", "React-Router",
      "HTML", "CSS", "Tailwind", "Material UI", "Vite", "Webpack",
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      "Node.js", "Express", "Python", "Java", "PostgreSQL",
      "MongoDB", "Supabase", "JWT",
    ],
  },
  {
    title: "DevOps & Observability",
    skills: [
      "AWS", "Docker", "Kubernetes", "Grafana", "OpenTelemetry",
      "Prometheus", "Jaeger", "Git", "GitHub", "GitHub Actions", "Jenkins",
    ],
  },
  {
    title: "Testing",
    skills: ["Jest", "pytest"],
  },
  {
    title: "AI/ML",
    skills: [
      "Retrieval-Augmented Generation (RAG)",
      "AI-assisted workflow automation and tooling",
    ],
  },
];