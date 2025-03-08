import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Projects | Software Engineer Portfolio",
  description: "Explore my portfolio of software engineering projects and applications.",
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="mb-6 text-4xl font-bold text-zinc-900 dark:text-white">
          My Projects
        </h1>
        <div className="h-1 w-20 bg-green-600 dark:bg-blue-400"></div>
      </div>

      <div className="mb-12">
        <p className="max-w-3xl text-lg text-zinc-700 dark:text-zinc-300">
          Here are some of the projects I&apos;ve worked on. Each project represents
          different challenges and solutions I&apos;ve implemented using various
          technologies and approaches.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
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
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-700 dark:text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-green-600 hover:underline dark:text-blue-400"
                  >
                    Live Demo
                    <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                  </Link>
                )}
                {project.codeUrl && (
                  <Link
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-green-600 hover:underline dark:text-blue-400"
                  >
                    View Code
                    <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Database Monitoring System",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/project-placeholder-1.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    demoUrl: "https://example.com/demo1",
    codeUrl: "https://github.com/example/ecommerce",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/project-placeholder-2.jpg",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    demoUrl: "https://example.com/demo2",
    codeUrl: "https://github.com/example/taskmanager",
  },
  {
    title: "Developer Portfolio",
    description:
      "A customizable portfolio template for developers to showcase their projects and skills.",
    image: "/project-placeholder-3.jpg",
    technologies: ["Next.js", "TailwindCSS", "Framer Motion"],
    demoUrl: "https://example.com/demo3",
    codeUrl: "https://github.com/example/portfolio",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application that provides real-time weather data and forecasts for locations worldwide.",
    image: "/project-placeholder-4.jpg",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    demoUrl: "https://example.com/demo4",
    codeUrl: "https://github.com/example/weather",
  },
  {
    title: "Social Media Analytics",
    description:
      "A dashboard for tracking and analyzing social media metrics across multiple platforms.",
    image: "/project-placeholder-5.jpg",
    technologies: ["Vue.js", "Express", "D3.js", "Firebase"],
    demoUrl: "https://example.com/demo5",
    codeUrl: "https://github.com/example/analytics",
  },
  {
    title: "Recipe Finder",
    description:
      "An application that helps users find recipes based on available ingredients and dietary preferences.",
    image: "/project-placeholder-6.jpg",
    technologies: ["React Native", "GraphQL", "MongoDB"],
    demoUrl: "https://example.com/demo6",
    codeUrl: "https://github.com/example/recipes",
  },
]; 