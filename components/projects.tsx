"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      title: "LalapLah!",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
      image: "/images/lalaplah.png?height=600&width=800",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://lalaplah.vercel.app/",
      githubUrl: "#",
    },
    // {
    //   title: "Task Management App",
    //   description:
    //     "A collaborative task management application with real-time updates and team collaboration features.",
    //   image: "/placeholder.svg?height=600&width=800",
    //   tags: ["React", "Firebase", "Material UI", "Redux"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
    // {
    //   title: "Portfolio Website",
    //   description:
    //     "A modern portfolio website with smooth animations and responsive design.",
    //   image: "/placeholder.svg?height=600&width=800",
    //   tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
    // {
    //   title: "Weather Dashboard",
    //   description:
    //     "A weather dashboard that displays current and forecasted weather data for multiple locations.",
    //   image: "/placeholder.svg?height=600&width=800",
    //   tags: ["React", "OpenWeather API", "Chart.js", "Styled Components"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30 min-h-screen">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          Projects
          <span className="absolute top-9 left-1/2 -translate-x-1/2 w-36 h-1 bg-primary mt-2"></span>
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-lg border border-border group hover:shadow-primary/20 transition-all duration-500 "
            >
              <div className="grid md:grid-cols-2 gap-6 ">
                <div className="relative overflow-hidden h-64 md:h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="icon" variant="secondary" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub Repository</span>
                      </a>
                    </Button>
                    <Button size="icon" variant="secondary" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span className="sr-only">Live Demo</span>
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-center min-h-72">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
