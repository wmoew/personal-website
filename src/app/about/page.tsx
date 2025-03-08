import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Me | Software Engineer Portfolio",
  description: "Learn more about my background, skills, and experience as a software engineer.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="mb-6 text-4xl font-bold text-zinc-900 dark:text-white">
          About Me
        </h1>
        <div className="h-1 w-20 bg-green-600 dark:bg-blue-400"></div>
      </div>

      <div className="grid gap-12 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="relative mb-6 h-64 w-64 overflow-hidden rounded-lg md:h-80 md:w-full">
              <Image
                src="/profile-placeholder.jpg"
                alt="Developer"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  Email
                </h3>
                <p className="text-zinc-900 dark:text-white">
                  hello@example.com
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  Location
                </h3>
                <p className="text-zinc-900 dark:text-white">
                  San Francisco, CA
                </p>
              </div>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                >
                  GitHub
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                >
                  Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
              My Story
            </h2>
            <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
              <p>
                Hello! I&apos;m a passionate software engineer with over 5 years of
                experience building web applications and digital products. My
                journey in software development began during my computer science
                studies, where I discovered my love for creating elegant
                solutions to complex problems.
              </p>
              <p>
                Throughout my career, I&apos;ve worked with a diverse range of
                technologies and frameworks, specializing in full-stack
                development with a focus on JavaScript/TypeScript ecosystems. I&apos;m
                particularly interested in building performant, accessible, and
                user-friendly applications that solve real-world problems.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through blog posts and community events.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
              Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((experience) => (
                <div key={experience.company} className="border-l-2 border-zinc-200 pl-4 dark:border-zinc-700">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                    {experience.role}
                  </h3>
                  <p className="mb-2 text-zinc-700 dark:text-zinc-300">
                    {experience.company} | {experience.period}
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  University of Technology | 2014 - 2018
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Full-Stack Web Development Bootcamp
                </h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Code Academy | 2019
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
    role: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    responsibilities: [
      "Lead the development of a microservices architecture using Node.js and TypeScript",
      "Implemented CI/CD pipelines that reduced deployment time by 40%",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with product managers to define and prioritize features",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Digital Solutions LLC",
    period: "2018 - 2021",
    responsibilities: [
      "Developed and maintained multiple React applications with Redux state management",
      "Built RESTful APIs using Express.js and MongoDB",
      "Implemented responsive designs using modern CSS frameworks",
      "Participated in agile development processes with bi-weekly sprints",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "StartUp Co.",
    period: "2017 - 2018",
    responsibilities: [
      "Assisted in the development of company website using HTML, CSS, and JavaScript",
      "Created interactive UI components with jQuery",
      "Optimized website performance and fixed cross-browser compatibility issues",
      "Participated in weekly team meetings and contributed to project planning",
    ],
  },
]; 