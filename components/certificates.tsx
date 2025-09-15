"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const certificates = [
    {
      title: "Full Stack Next JS ",
      organization: "WPU Course",
      date: "2025",
      description:
        "Developed a Full-stack cafe management system featuring authentication, real-time Cafe management, and payment integration.",
      image: "/images/certi-wpu.png",
      verifyUrl: "https://learn.wpucourse.id/certificate/URC46HDR",
      skills: ["React", "Next.js", "Tailwind", "Supabase", "Shadcn/ui"],
    },
    {
      title: "Front-End Developer Expert",
      organization: "Dicoding",
      date: "2024",
      description:
        "Advanced FrontEnd concepts including Progressive Web Apps, Automation Testing, Deployment CI/CD, and other FrontEnd technologies ",
      image: "/images/certi-fe-expert.png",
      verifyUrl: "https://www.dicoding.com/certificates/L4PQ5VY92ZO1",
      skills: ["JavaScript", "Fetch API", "PWA", "Testing", "CI/CD"],
    },
    {
      title: "Back-End JavaScript Development",
      organization: "Dicoding",
      date: "2024",
      description:
        "Developing servers and RESTful APIs using Node.js and testing endpoints with Postman.",
      image: "/images/certi-be.png",
      verifyUrl: "https://www.dicoding.com/certificates/MRZMYM400ZYQ",
      skills: ["Node.js", "RESTful APIs", "Postman"],
    },
    // {
    //   title: "UI/UX Design Specialization",
    //   organization: "Google",
    //   date: "2022",
    //   description:
    //     "User experience design process from research to prototyping and testing.",
    //   image: "/google-ux-certificate.jpg",
    //   verifyUrl: "#",
    //   skills: ["Figma", "User Research", "Prototyping", "Usability Testing"],
    // },
    // {
    //   title: "JavaScript Algorithms and Data Structures",
    //   organization: "freeCodeCamp",
    //   date: "2021",
    //   description:
    //     "Advanced JavaScript programming and computer science fundamentals.",
    //   image: "/javascript-certificate.jpg",
    //   verifyUrl: "#",
    //   skills: ["JavaScript", "Algorithms", "Data Structures", "ES6+"],
    // },
    // {
    //   title: "Responsive Web Design",
    //   organization: "freeCodeCamp",
    //   date: "2021",
    //   description:
    //     "Modern responsive web design techniques and best practices.",
    //   image: "/responsive-design-certificate.jpg",
    //   verifyUrl: "#",
    //   skills: ["HTML5", "CSS3", "Flexbox", "Grid", "Media Queries"],
    // },
  ];

  return (
    <section id="certificates" className="py-20 pb-56">
      <motion.div
        className="container"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="relative mb-16 text-3xl font-bold text-center md:text-4xl">
          Certificates
          <span className="absolute bottom-0 h-1 mt-2 -translate-x-1/2 w-52 left-1/2 bg-primary"></span>
        </h2>

        <div ref={ref} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-500 border rounded-lg shadow-lg bg-card border-border group :shadow-primary/20 hover:-translate-y-2hover"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "none" : "translateY(50px)",
                transition: `all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                  0.1 + index * 0.1
                }s`,
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={certificate.image || "/placeholder.svg"}
                  alt={certificate.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-primary/80 ">
                  {/* <Button size="icon" variant="secondary" asChild>
                    <a
                      href={certificate.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="sr-only">Verify Certificate</span>
                    </a>
                  </Button> */}
                </div>
                <div className="absolute px-3 py-1 text-sm font-medium text-white rounded-full top-4 right-4 bg-primary/90">
                  <Award className="inline w-4 h-4 mr-1" />
                  Certified
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2 text-sm text-foreground/60">
                  <Calendar className="w-4 h-4" />
                  {certificate.date}
                </div>

                <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
                  {certificate.title}
                </h3>

                <p className="mb-3 font-medium text-primary">
                  {certificate.organization}
                </p>

                <p className="mb-4 text-sm text-foreground/70 line-clamp-3">
                  {certificate.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {certificate.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent group"
                  asChild
                >
                  <a
                    href={certificate.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify Certificate
                    <ExternalLink className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          {/* <p className="mb-4 text-foreground/70">
            Continuously learning and staying updated with the latest
            technologies and best practices.
          </p>
          <Button variant="outline" className="bg-transparent group">
            View All Certificates
            <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button> */}
        </div>
      </motion.div>
    </section>
  );
}
