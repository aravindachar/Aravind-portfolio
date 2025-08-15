import { ArrowUp, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border mt-12 flex flex-wrap justify-between items-center gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Aravind Achar. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Made with ❤️ using React
        </p>
      </div>
{/* links to my account added here  */}
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/aravindachar"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/aravinda-kambar-58b622255/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
