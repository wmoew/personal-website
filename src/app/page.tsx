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
              <h1 className="mb-6 text-4xl font-bold leading-tight text-zinc-900 dark:text-white md:text-5xl">
                Software Engineer & <br />
                <span className="text-green-600 dark:text-blue-400">
                  Full-Stack Developer
                </span>
              </h1>
              <p className="mb-8 text-lg text-zinc-700 dark:text-zinc-300">
                I build exceptional and accessible digital experiences for the web.
                Focused on creating clean, efficient, and scalable solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-lg bg-green-600 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-green-600"
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
            <div className="md:w-1/2">
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-zinc-200 dark:border-zinc-700 md:h-80 md:w-80">
                <Image
                  src="/profile-placeholder.jpg"
                  alt="Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-zinc-50 py-16 dark:bg-zinc-800/50">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900 dark:text-white">
            My Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-center rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-800"
              >
                <span className="text-center font-medium text-zinc-800 dark:text-zinc-200">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="flex items-center text-green-600 dark:text-blue-400"
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
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/project-placeholder-1.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/project-placeholder-2.jpg",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
  },
  {
    title: "Developer Portfolio",
    description:
      "A customizable portfolio template for developers to showcase their projects and skills.",
    image: "/project-placeholder-3.jpg",
    technologies: ["Next.js", "TailwindCSS", "Framer Motion"],
  },
];
