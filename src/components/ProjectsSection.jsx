import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

// 1. Project data with a 'category' for filtering
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal portfolio built with modern frontend tools.",
    image: "/projects/project1.png",
    tags: ["React", "Next.js", "TailwindCSS"],
    category: "frontend",
    demoUrl: "#",
    githubUrl: "https://github.com/aravindachar/Aravind-portfolio",
  },
  {
    id: 2,
    title: "HTMLS-CSS-JS Mini projects",
    description: "Projects built while learening ",
    image: "/projects/project2.png",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    category: "frontend",
    demoUrl: "#",
    githubUrl: "https://github.com/aravindachar/HTML-CSS-JavaScript-Projects",
  },
  {
    id: 3,
    title: "House Price Predictor",
    description: "A machine learning model to predict housing prices.",
    image: "/projects/project3.png",
    tags: ["Python", "Scikit-learn", "Flask"],
    category: "ml",
    demoUrl: "#",
    githubUrl: "https://github.com/aravindachar",
  },
  {
    id: 4,
    title: "Sentiment Analysis API",
    description: "An API that analyzes the sentiment of a given text block.",
    image: "/projects/project4.png",
    tags: ["Python", "NLTK", "FastAPI"],
    category: "ml",
    demoUrl: "#",
    githubUrl: "https://github.com/aravindachar",
  },
    {
    id: 5,
    title: "Data Structure And Algorithm ",
    description: "Learn DSA with me ",
    image: "/projects/project4.png",
    tags: ["DSA", ],
    category: "Learn With ME",
    demoUrl: "#",
    githubUrl: "https://github.com/aravindachar/Data-Structures-and-Algorithms",
  },
   {
    id: 6,
    title: "JAVA ",
    description: "Complte java Tutorial for Beginners to advance",
    image: "/projects/project4.png",
    tags: ["Beginers", "Intermedite", "OOP's"],
    category: "Learn With ME",
    demoUrl: "#",
    githubUrl: "https://github.com/aravindachar/java",
  },

  {
    id: 7,
    title: "JavaScript",
    description: "An API that analyzes the sentiment of a given text block.",
    image: "/projects/project4.png",
    tags: [ "DOM", "js"],
    category: "Learn With ME",
    demoUrl: "#",
    githubUrl: "https://github.com/aravindachar/javascript-reference",
  },
];

// 2. Generate categories dynamically
const projectCategories = ["all", ...new Set(projects.map((p) => p.category))];

export const ProjectsSection = () => {
  // 3. State to keep track of the selected category
  const [activeCategory, setActiveCategory] = useState("all");

  // 4. Filter projects based on active category
  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Click the buttons to filter by
          category.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length === 0 ? (
            <p className="text-center text-muted-foreground col-span-full">
              No projects found in this category.
            </p>
          ) : (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover transform transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    loading="lazy"
                    src={project.image}
                    // alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/aravindachar"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
