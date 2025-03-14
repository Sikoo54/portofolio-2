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
      icon: <Server className="h-10 w-10" />,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "MySQL",
        "REST API",
        "GraphQL",
      ],
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: "UI/UX Design",
      description: "Designing beautiful and intuitive user experiences.",
      technologies: [
        "Figma",
        "Tailwind CSS",
        "Bootstrap",
        "ShadCN",
        "ReactBits",
        "Material UI",
      ],
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Database Management",
      description: "Designing and optimizing database structures.",
      technologies: ["MongoDB", "MySQL", "Firebase"],
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Web Animation",
      description:
        "Creating engaging and interactive animations for web interfaces.",
      technologies: ["GSAP", "Framer Motion", "Three.js"],
    },
    {
      icon: <Layout className="h-10 w-10" />,
      title: "Deployment & DevOps",
      description: "Building inclusive websites that work for everyone.",
      technologies: ["Git", "GitHub", "Vercel", "Netlify", "AWS"],
    },
  ];

  return (
    <section id="skills" className="py-20 min-h-screen">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          My Skills
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary mt-2"></span>
        </h2>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "none" : "translateY(50px)",
                transition: `all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                  0.1 + index * 0.1
                }s`,
              }}
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
