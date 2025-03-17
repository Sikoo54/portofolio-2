"use client";

import type React from "react";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Send, CheckCircle, Linkedin } from "lucide-react";

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
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: "Denpasar, Indonesia",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "sachas4f@gmail.com  ",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      details: "Sacha Ahsan",
    },
  ];

  return (
    <section id="contact" className=" ">
      <div className="mt-20 mb-24 ">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
            Contact Me
            <span className="absolute top-8 left-1/2 -translate-x-1/2 w-36 h-1 bg-primary mt-2"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-foreground/70 mb-8">
                Feel free to reach out if you're looking for a developer, have a
                question, or just want to connect.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
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

            <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h4 className="text-xl font-bold">Message Sent!</h4>
                  <p className="text-foreground/70 mt-2">
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
                      className="focus-visible:ring-primary resize-none"
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
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
