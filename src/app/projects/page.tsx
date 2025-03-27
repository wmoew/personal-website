import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import queryhawk_thumbnail from "./queryhawk_thumbnail.jpg";
import art_thumbnail from "./art_thumbnail.jpg";

export const metadata = {
  title: "Projects | Software Engineer Portfolio",
  description: "Explore my portfolio of software engineering projects and applications.",
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="mb-6 text-4xl font-semibold">
          My Projects
        </h1>
      </div>
      <div className="mb-12">
        <p className="max-w-3xl text-lg">
          Here are some of the projects I&apos;ve worked on. Each project represents
          different challenges and solutions I&apos;ve implemented using various
          technologies and approaches.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-lg border border-zinc-200 bg-white dark-card dark-border transition-all"
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
              <h3 className="mb-2 text-xl font-semibold text-zinc-900">
                {project.title}
              </h3>
              <p className="mb-4 text-zinc-700">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-base text-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {/* {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-green-600 hover:underline dark:text-blue-400"
                  >
                    Live Demo
                    <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                  </Link>
                )} */}
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
    image: queryhawk_thumbnail,
    technologies: ["React", "TypeScript", "PostgreSQL", "Docker", "OpenTelemetry", "Prometheus", "Grafana"],
    // demoUrl: "https://example.com/demo1",
    codeUrl: "https://github.com/oslabs-beta/QueryHawk",
  },
//  
  {
    title: "Interactive Museum Art Display",
    description:
      "A responsive React application using custom hooks and context API to create an immersive browsing experience for the Metropolitan Museum of Art's public API.",
    image: art_thumbnail,
    technologies: ["React", "Node.js"],
    // demoUrl: "https://github.com/wmoew/art-homepage",
    codeUrl: "https://github.com/wmoew/art-homepage",
  },
  // {
  //   title: "Rule Configuration Tool for Banks",
  //   description:
  //     "Collaborated with engineers to design a loan decisioning system that establishes approval rules, criteria, and workflows based on predefined risk parameters.",
  //   image: art_thumbnail,
  //   technologies: ["Figma", "Adobe XD", "Miro", "Notion"],
  //   // demoUrl: "https://github.com/wmoew/art-homepage",
  //   codeUrl: "https://github.com/wmoew/art-homepage",
  // },
  // {
  //   title: "Loan Application Experience for White-Label Adoption",
  //   description:
  //     "Designed a streamlined white-label loan application system with a comprehensive design system for easy financial institution adoption.",
  //   image: art_thumbnail,
  //   technologies: ["Figma", "Adobe XD", "Miro", "Notion"],
  //   // demoUrl: "https://github.com/wmoew/art-homepage",
  //   codeUrl: "https://github.com/wmoew/art-homepage",
  // },
]; 