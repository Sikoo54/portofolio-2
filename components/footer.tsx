import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-foreground/70 mt-2">
              Building exceptional digital experiences
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <a href="https://github.com/Sikoo54" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <a href="https://www.linkedin.com/in/sacha-ahsan" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <a href="mailto:sachas4f@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-foreground/60">
          <p>© {currentYear} Sacha Ahsan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
