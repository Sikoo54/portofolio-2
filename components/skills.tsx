"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Code, Database, Layout, Palette, Server } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    {
      icon: <Layout className="w-10 h-10" />,
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces with modern frameworks.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "React",
        "Next.js",
      ],
    },

    {
      icon: <Palette className="w-10 h-10" />,
      title: "UI/UX Design",
      description: "Designing beautiful and intuitive user experiences.",
      technologies: ["Figma", "Tailwind CSS", "ShadCN", "ReactBits"],
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Web Animation",
      description:
        "Creating engaging and interactive animations for web interfaces.",
      technologies: ["GSAP", "Framer Motion", "Lenis"],
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs.",
      technologies: ["Node.js", "REST API", "PostgreSQL"],
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Database Management",
      description: "Designing and optimizing database structures.",
      technologies: ["MySQL", "Supabase", "Firebase"],
    },
    {
      icon: <Layout className="w-10 h-10" />,
      title: "Deployment & DevOps",
      description: "Building inclusive websites that work for everyone.",
      technologies: ["Git", "GitHub", "Vercel", "Netlify"],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 md:mt-6">
      <motion.div
        className="container"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="relative mb-16 text-3xl font-bold text-center md:text-4xl">
          Skills
          <span className="absolute w-24 h-1 mt-2 -translate-x-1/2 top-9 left-1/2 bg-primary"></span>
        </h2>

        <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-lg bg-card border-border "
            >
              <div className="mb-4 text-primary">{skill.icon}</div>
              <h3 className="mb-3 text-xl font-bold">{skill.title}</h3>
              <p className="mb-4 text-foreground/70">{skill.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
