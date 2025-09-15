"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/navbar";
import Iridescence from "@/app/components/Iridescence/Iridescence";
import ScrollVelocity from "@/app/components/ScrollVelocity/ScrollVelocity";

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col min-h-screen ">
      <Navbar />

      <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full -z-10 ">
        <Iridescence
          color={[1, 1, 1]}
          mouseReact={true}
          amplitude={0.1}
          speed={1.0}
        />
      </div>

      <div className="container flex flex-col items-start justify-center flex-1 pt-20">
        <div className="max-w-3xl space-y-6 ">
          <h2 className="ml-1 text-xl font-medium md:text-2xl text-primary">
            Hello, I'm
          </h2>
          <h1 className="text-4xl font-bold md:text-6xl">
            Sacha Ahsan Firmansyah
          </h1>
          <div className="h-8 md:h-12">
            <h2 className="text-2xl font-medium md:text-4xl text-foreground/80">
              Fullstack Developer
              <span className="animate-blink">|</span>
            </h2>
          </div>
          <p className="max-w-2xl text-lg text-foreground/70 md:text-xl">
            I build exceptional and accessible digital experiences for the web.
            Focused on creating clean, user-friendly interfaces with modern
            technologies.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="group">
              Contact Me
              <Mail className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">
                View Projects
                <ArrowDown className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-1" />
              </a>
            </Button>
          </div>

          <div className="flex gap-4 pt-6">
            <Button
              variant="ghost"
              size="icon"
              className="transition-all rounded-full hover:text-primary hover:scale-110"
            >
              <a href="https://github.com/Sikoo54" target="_blank">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="transition-all rounded-full hover:text-primary hover:scale-110"
            >
              <a href="https://www.linkedin.com/in/sacha-ahsan" target="_blank">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="transition-all rounded-full hover:text-primary hover:scale-110"
            >
              <a href="mailto:sachas4f@gmail.com">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute -translate-x-1/2  bottom-10 left-1/2 animate-bounce">
        <Button variant="ghost" size="icon" asChild>
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="w-6 h-6" />
          </a>
        </Button>
      </div>
    </section>
  );
}
