import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Curious Developer, Creative Thinker
            </h3>

            <p className="text-muted-foreground">
             a machine learning and web developer who enjoys turning ideas into clean, functional solutions. Whether it’s a small model or a full-stack app, I like building things that make an impact.
            </p>

            <p className="text-muted-foreground">
              Beyond code, I’m always exploring new skills, playing guitar, or sketching creative ideas.
              I believe in blending logic and art to create digital experiences that feel alive and inspiring.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Aravind_Resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive websites and dynamic web apps using modern tools like React and Tailwind.
                  </p>
                </div>
              </div>
            </div>
            {/* machine learning */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Machine Learning & AI</h4>
                <p className="text-muted-foreground">
                  Building intelligent systems using deep learning and NLP to solve real-world problems.
                </p>
              </div>
            </div>
          </div>


            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Building</h4>
                  <p className="text-muted-foreground">
                    From college hackathons to personal side-projects — I love building things with purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
