import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-12">
            <div className="mb-12 md:mb-0 md:w-1/2">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-dark-text md:text-5xl">
                Software Engineer
              </h1>
              <p className="mb-8 text-lg text-dark-text">
                I build exceptional and accessible digital experiences for the web.
                Focused on creating clean, efficient, and scalable solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-lg  px-5 py-3 text-base font-medium bg-[var(--primary)] transition-colors hover:bg-primary/80"
                >
                  View My Work
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-5 py-3 text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-dark-text">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="flex items-center"
            >
              View All
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-zinc-700 dark:text-zinc-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "REST APIs",
  "TailwindCSS",
  "Git",
];

const featuredProjects = [
  {
    title: "Database Monitoring Platform - QueryHawk",
    description:
      "A containerized monitoring platform that provides real-time insights into PostgreSQL performance with automated service discovery.",
    image: "/project-placeholder-1.jpg",
    technologies: ["Docker", "Grafana", "Prometheus", "PostgreSQL"],
  },
  {
    title: "ArtExplorer",
    description:
      "An interactive museum art display built with React that creates an immersive browsing experience for the Metropolitan Museum of Art API.",
    image: "/project-placeholder-2.jpg",
    technologies: ["React", "Redux Toolkit", "Redux-Persist", "Context API"],
  },
];
