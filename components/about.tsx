"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 min-h-screen mt-2 md:mt-6">
      <motion.div
        className="container"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          About Me
          <span className="absolute top-8 left-1/2 -translate-x-1/2 w-36 h-1 bg-primary mt-2"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-lg overflow-hidden border-4 border-primary/20 shadow-xl transform hover:scale-105 transition-transform duration-500">
            <Image
              src="/images/me.jpg"
              alt="My Image"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              I'm <span className="text-primary">Sacha Ahsan</span>, Frontend
              Developer
            </h3>
            <p className="text-foreground/70">
              I'm a passionate web developer with 2 years of experience creating
              modern and responsive websites. I specialize in front-end
              development with React and Next.js, focusing on creating intuitive
              user interfaces with smooth animations and interactions.
            </p>
            <p className="text-foreground/70">
              My journey in web development started when I was in college, and
              since then, I've worked on various projects ranging from small
              business websites to complex web applications. I'm constantly
              learning new technologies and techniques to improve my skills.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-bold">Name:</h4>
                <p className="text-foreground/70">Sacha Ahsan Firmansyah</p>
              </div>
              <div>
                <h4 className="font-bold">Email:</h4>
                <p className="text-foreground/70">sachas4f@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold">Location:</h4>
                <p className="text-foreground/70">Bali, Indonesia</p>
              </div>
              <div>
                <h4 className="font-bold">Availability:</h4>
                <p className="text-foreground/70">Freelance, Full-time</p>
              </div>
            </div>
            <a href="/assets/Resume.pdf" download>
              <Button className="mt-6 group">
                Download CV
                <FileText className="ml-1 h-4 w-4 " />
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
