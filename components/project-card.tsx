import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface Project {
  title: string
  description: string
  image: string
  link: string
  client?: string
  tags: string[]
  category: "sql" | "python" | "personal"
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const categoryColors = {
    sql: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100",
    python: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
    personal: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100",
  }

  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <Badge className={categoryColors[project.category]}>
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </Badge>
        </div>
        {project.client && <div className="text-sm text-gray-500 dark:text-gray-400">Client: {project.client}</div>}
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base">{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <span>View Project</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
