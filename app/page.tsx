import Image from "next/image"
import Link from "next/link"
import { Github, Mail, Twitter, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { sqlProjects, pythonProjects, personalProjects } from "@/lib/projects"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Blockchain <span className="text-emerald-600">Data Analyst</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                  Transforming on-chain data into actionable insights for DeFi protocols and blockchain projects.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link href="#projects">View My Work</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-500">
                  <Image src="/profile-photo.jpg" alt="Profile" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 bg-white dark:bg-gray-800">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">SQL Expertise</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Proficient in SQL with extensive experience creating dashboards and analytics on Dune Analytics.
                  Specialized in token distribution analysis, market research, and protocol performance tracking.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">Python Analysis</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Skilled in Python data analysis with a focus on blockchain metrics. Experience in comparing blockchain
                  networks, analyzing price feeds, and evaluating DeFi protocol performance.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">DeFi Research</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Deep understanding of DeFi protocols across multiple chains including Ethereum and Solana. Creator of
                  Coresightbot, a DeFi trading research tool that identifies profitable on-chain traders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Projects</h2>

            {/* SQL Projects */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 p-2 rounded-md mr-3">
                  SQL
                </span>
                <span>Dune Analytics Dashboards</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sqlProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </div>

            {/* Python Projects */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 p-2 rounded-md mr-3">
                  Python
                </span>
                <span>Kaggle Analyses</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pythonProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </div>

            {/* Personal Projects */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 p-2 rounded-md mr-3">
                  Personal
                </span>
                <span>Projects</span>
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {personalProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 bg-white dark:bg-gray-800">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get In Touch</h2>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col space-y-4">
                <Button asChild variant="outline" className="flex items-center justify-start gap-3 h-14">
                  <Link href="mailto:allwellomojo@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Mail className="h-5 w-5" />
                    <span>allwellomojo@gmail.com</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex items-center justify-start gap-3 h-14">
                  <Link href="https://twitter.com/cryptall3" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                    <span>@cryptall3</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex items-center justify-start gap-3 h-14">
                  <Link href="https://t.me/allwell11" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="h-5 w-5" />
                    <span>Telegram: allwell11</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Blockchain Data Analyst</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link
                  href="https://twitter.com/cryptall3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
