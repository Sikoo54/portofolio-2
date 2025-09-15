"use client";

import type React from "react";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Send, CheckCircle, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Denpasar, Indonesia",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "sachas4f@gmail.com  ",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      details: "Sacha Ahsan",
    },
  ];

  return (
    <section id="contact" className="py-12 bg-muted/30 ">
      <motion.div
        className="container"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="mb-28">
          <div className="container">
            <h2 className="relative mb-24 text-3xl font-bold text-center md:text-4xl">
              Contact Me
              <span className="absolute h-1 mt-2 -translate-x-1/2 top-8 left-1/2 w-44 bg-primary"></span>
            </h2>

            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-bold">Get In Touch</h3>
                <p className="mb-8 text-foreground/70">
                  Feel free to reach out if you're looking for a developer, have
                  a question, or just want to connect.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="p-3 transition-colors rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-bold">{info.title}</h4>
                        <p className="text-foreground/70">{info.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 border rounded-lg shadow-lg bg-card border-border">
                <h3 className="mb-6 text-2xl font-bold">Send Message</h3>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <CheckCircle className="w-16 h-16 mb-4 text-green-500" />
                    <h4 className="text-xl font-bold">Message Sent!</h4>
                    <p className="mt-2 text-foreground/70">
                      Thank you for your message. I'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          required
                          className="focus-visible:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          required
                          className="focus-visible:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Subject"
                        required
                        className="focus-visible:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        rows={5}
                        required
                        className="resize-none focus-visible:ring-primary"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 -ml-1 text-white animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message
                          <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
