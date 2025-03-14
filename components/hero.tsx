"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/navbar";
import Iridescence from "@/app/components/Iridescence/Iridescence";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col relative">
      <Navbar />

      <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-full -z-10 ">
        <Iridescence
          color={[1, 1, 1]}
          mouseReact={true}
          amplitude={0.1}
          speed={1.0}
        />
      </div>

      <div className="flex-1 container flex flex-col justify-center items-start pt-20">
        <div className="max-w-3xl space-y-6 animate-in slide-in-from-left duration-700">
          <h2 className="text-xl md:text-2xl text-primary font-medium">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold">
            Sacha Ahsan Firmansyah
          </h1>
          <div className="h-8 md:h-12">
            <h2 className="text-2xl md:text-4xl text-foreground/80 font-medium">
              Fullstack Developer
              <span className="animate-blink">|</span>
            </h2>
          </div>
          <p className="text-foreground/70 text-lg md:text-xl max-w-2xl">
            I build exceptional and accessible digital experiences for the web.
            Focused on creating clean, user-friendly interfaces with modern
            technologies.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="group">
              Contact Me
              <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">
                View Projects
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
          </div>

          <div className="flex gap-4 pt-6">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:text-primary hover:scale-110 transition-all"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:text-primary hover:scale-110 transition-all"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:text-primary hover:scale-110 transition-all"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" asChild>
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6" />
          </a>
        </Button>
      </div>
    </section>
  );
}
