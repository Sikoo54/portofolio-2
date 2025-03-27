"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Code, Database, Layout, Palette, Server } from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    {
      icon: <Layout className="h-10 w-10" />,
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
      icon: <Palette className="h-10 w-10" />,
      title: "UI/UX Design",
      description: "Designing beautiful and intuitive user experiences.",
      technologies: ["Figma", "Tailwind CSS", "ShadCN", "ReactBits"],
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Web Animation",
      description:
        "Creating engaging and interactive animations for web interfaces.",
      technologies: ["GSAP", "Framer Motion", "Lenis"],
    },
    {
      icon: <Server className="h-10 w-10" />,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs.",
      technologies: ["Node.js", "REST API"],
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Database Management",
      description: "Designing and optimizing database structures.",
      technologies: ["MySQL", "Firebase"],
    },
    {
      icon: <Layout className="h-10 w-10" />,
      title: "Deployment & DevOps",
      description: "Building inclusive websites that work for everyone.",
      technologies: ["Git", "GitHub", "Vercel", "Netlify"],
    },
  ];

  return (
    <section id="skills" className="py-20 min-h-screen md:mt-6">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          Skills
          <span className="absolute top-9 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary mt-2"></span>
        </h2>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-lg border border-border "
            >
              <div className="text-primary mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className="text-foreground/70 mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
