import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Me | Software Engineer Portfolio",
  description: "Learn more about my background, skills, and experience as a software engineer.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 dark:text-dark-text">
      <div className="mb-12">
        <h1 className="mb-6 text-4xl font-bold text-dark-text">
          About Me
        </h1>
        <div className="h-1 w-20 bg-blue-300"></div>
      </div>

      <div className="grid gap-12 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="relative mb-6 h-64 w-64 overflow-hidden rounded-lg dark:border-zinc-700 md:h-80 md:w-full">
              <Image
                src="/profile-placeholder.jpg"
                alt="Developer"
                fill
                className="object-cover dark:brightness-90"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-zinc-500">
                  Email
                </h3>
                <p className="text-dark-text">
                  nameng9189@gmail.com
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-zinc-500">
                  Location
                </h3>
                <p className="text-dark-text">
                  New York, NY
                </p>
              </div>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-dark-text dark:hover:text-white"
                >
                  GitHub
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-dark-text dark:hover:text-white"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold dark:text-dark-text">
              My Story
            </h2>
            <div className="space-y-4 text-dark-text">
              <p>
              Hello! I&apos;m Moe, a software engineer who combines technical expertise with a strong background in product design. I work with React, Node.js, and DevOps tools like Prometheus and Grafana to build powerful, user-friendly applications. Having spent over five years designing solutions for healthcare, education, and fintech industries, I bring a unique perspective to development that prioritizes both function and thoughtful user experience. When I&apos;m not coding, I&apos;m exploring new technologies or working on projects that blend art and technology.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-dark-text">
              Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((experience) => (
                <div key={experience.company} className="border-l-2 border-blue-300 pl-4">
                  <h3 className="text-xl font-bold text-dark-text">
                    {experience.role}
                  </h3>
                  <p className="mb-2 text-dark-text">
                    {experience.company} | {experience.period}
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-dark-text">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-dark-text">
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-dark-text">
                Master of Science in Integrated Digital Media
                </h3>
                <p className="text-dark-text">
                New York University, Tandon School of Engineering | 2018 - 2020
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark-text">
                Bachelor of Engineering in Mathematical Sciences
                </h3>
                <p className="text-dark-text">
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
    company: "Queryhawk (Open Source) - Database Monitoring Platform",
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