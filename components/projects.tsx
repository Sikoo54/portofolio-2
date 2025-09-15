"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      title: "Serenité Cafe",
      description:
        "Full-stack cafe management system built with Next.js, React, Tailwind CSS, Supabase, and shadcn/ui. featuring authentication, real-time Cafe management, and payment integration.",
      image: "/images/serenite-web2.png?height=600&width=800",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Shadcn/ui",
      ],
      liveUrl: "https://serenite-cafe.vercel.app/",
      githubUrl: "https://github.com/Sikoo54/realtime-point-of-sales",
    },
    {
      title: "LalapLah!",
      description:
        "A simple website showcasing the menu, prices, and details of a Lalapan food stall. Users can browse the available dishes, check the location and opening hours, and place orders through direct links to Gojek, Grab, or WhatsApp.",
      image: "/images/lalaplah.png?height=600&width=800",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://lalaplah.vercel.app/",
      githubUrl: "https://github.com/Sikoo54/lalaplah-website",
    },
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
    <section id="projects" className="min-h-screen py-20">
      <motion.div
        className="container"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="relative mb-16 text-3xl font-bold text-center md:text-4xl">
          Projects
          <span className="absolute h-1 mt-2 -translate-x-1/2 top-9 left-1/2 w-36 bg-primary"></span>
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-500 border rounded-lg shadow-lg bg-card border-border group hover:shadow-primary/20 "
            >
              <div className="grid gap-6 md:grid-cols-2 ">
                <div className="relative h-64 overflow-hidden md:h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 opacity-0 bg-primary/80 group-hover:opacity-90">
                    <Button size="icon" variant="secondary" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                        <span className="sr-only">GitHub Repository</span>
                      </a>
                    </Button>
                    <Button size="icon" variant="secondary" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="sr-only">Live Demo</span>
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-6 min-h-72">
                  <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-foreground/70">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
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
      </motion.div>
    </section>
  );
}
