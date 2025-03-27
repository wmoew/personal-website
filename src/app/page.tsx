export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with minimal styling */}
        <section className="flex items-center h-auto px-6 py-20">
        <div className="container mx-auto">
              <h2 className="text-4xl md:text-5xl font-medium mb-24">
              I&apos;m a software engineer passionate about{' '}
              <span className="hover:text-[var(--link-hover)] transition-colors duration-300">
                clean, efficient code
              </span>{' '}
              — building intuitive applications with React and Node.js that solve problems while delivering {''}
              <span className="rainbow-text-hover">
                good user experiences.
              </span>
              </h2>
          </div>
        </section>
    </div>
  );
}