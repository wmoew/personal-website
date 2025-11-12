import Image from "next/image";
import Link from "next/link";
import mypic from "./me.jpeg";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Moe | Software Engineer Portfolio",
  description: "Learn more about my background, skills, and experience as a software engineer.",
};

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
          {/* Hero Section with minimal styling */}
        <section className="flex items-center h-auto py-20">
        <div className="container mx-auto">
              <h2 className="text-4xl md:text-5xl font-normal mb-24 font-[family-name:var(--font-eb-garamond)]">
              Hi! I&apos;m Moe, a software engineer. I build applications
              <span className="rainbow-text">
              {""} that work well and feel good to use
              </span>. 
              I work with React, Node.js, and monitoring/DevOps tools, with experience across fintech, healthcare, and education. I&apos;m currently open to new opportunities.
              </h2>
          </div>
        </section>

        {/* Skills/Technologies Section */}
        <section className="mb-12">
          <h2 className="text-4xl md:text-5xl font-normal mb-16 font-[family-name:var(--font-eb-garamond)]">
            Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pl-4">
            <div>
              <h3 className="text-sm font-medium text-zinc-500 mb-2">Languages</h3>
              <p>JavaScript / TypeScript, Python</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zinc-500 mb-2">Frontend</h3>
              <p>React, Redux, Next.js, Material UI</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zinc-500 mb-2">Backend</h3>
              <p>Node.js, PostgreSQL, REST APIs</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zinc-500 mb-2">DevOps</h3>
              <p>Docker, Grafana, Prometheus, OpenTelemetry</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zinc-500 mb-2">Tools</h3>
              <p>Git, Jaeger, Unity3D, Figma</p>
            </div>
          </div>
        </section>

{/*resume*/}
          <section className="mb-12">
            <h2 className="text-4xl md:text-5xl font-normal mb-16 font-[family-name:var(--font-eb-garamond)]">Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((experience) => (
                <div key={experience.company} className="pl-4">
                  <h3 className="text-base font-normal mb-2">
                    {experience.role}
                  </h3>
                  <p className="text-sm mb-2 font-medium text-zinc-500">
                    {/* Show the company name and url if available*/}   
                    {experience.codeUrl ?
                      (<Link 
                        href={experience.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm hover:underline ml-2"
                      >{experience.company}<ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                      </Link>
                    ): (<span>{experience.company}</span>)}
                    
                    {/* Show the period */}
                    <span className="ml-2">| {experience.period}</span>
                  </p>
                  
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

          <section>
            <h2 className="text-4xl md:text-5xl font-normal mb-16 font-[family-name:var(--font-eb-garamond)]">
            Education
            </h2>
            <div className="space-y-4">
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

const experiences = [
  {
    role: "Software Engineer",
    company: "Queryhawk - Database Monitoring Platform",
    codeUrl: "https://github.com/oslabs-beta/QueryHawk",
    period: "Dec 2024 - Present",
    responsibilities: [
      "Architected and implemented a containerized database monitoring solution using Docker, Grafana, and Prometheus, enabling dynamic PostgreSQL connection management and automated service discovery that reduced development cycles by 35% and allowed teams to identify performance bottlenecks",
      "Developed the Automated Performance Analytics Platform utilizing Prometheus with OpenTelemetry integration that reduced monitoring setup time from hours to minutes while providing comprehensive, real-time performance insights for database query optimization",
      "Built a Grafana monitoring solution with automated provisioning using YAML-based configuration files and Grafana Provisioning API, creating specialized dashboards that automatically set up data sources upon initialization, saving 3-4 hours per installation",
      "Led the team to implement Material UI's theming system and styled components for creating a cohesive React wrapper around Grafana dashboards and Jaeger UI, resulting in a unified monitoring experience with consistent visual language",
    ],
  },
  {
    role: "Software Engineer",
    company: "ArtExplorer - Interactive Museum Art Display",
    codeUrl: "https://github.com/wmoew/art-homepage",
    period: "Nov 2024",
    responsibilities: [
      "Developed a responsive React application using custom hooks and context API to create an immersive browsing experience for the Metropolitan Museum of Art's public API",
      "Implemented Redux Toolkit with createAsyncThunk for efficient API requests, reducing response times by 40% through selective data fetching",
      "Built persistent storage solution with Redux-Persist and localStorage, enabling users to build and revisit their curated art gallery across browser sessions"
    ],
  },
  {
    role: "Senior Product Designer",
    company: "Amount",
    period: "Jun 2021 - Sep 2023",
    responsibilities: [
      "Built modular React design system with component composability and CSS-in-JS, enabling rapid white-labeling that cut client implementation from months to weeks",
      "Partnered with backend engineers on data-driven UI components for complex decision engines, implementing attribute grouping that mirrored database relationships",
      "Collaborated with engineers to transform complex loan evaluation workflows into an intuitive diagram-based platform using ReactFlow, enabling non-technical users to visually create and modify decision rules",
    ],
  },
  {
    role: "UX Designer",
    company: "MIT Optics Lab",
    period: "Feb 2021 - Jun 2021",
    responsibilities: [
      "Designed VR/desktop educational games in Unity3D/C# for fiber optics manufacturing training, reducing costly errors while complementing traditional factory instruction",
      "Collaborated with physics professors to implement accurate optical interactions using Unity's physics engine and shader programming, balancing scientific precision with intuitive gameplay",
      "Led 20+ user testing sessions with community college students, leveraging Unity Analytics and qualitative feedback to optimize interactions, resulting in 30% improved completion rates for training modules",
    ],
  },
]; 