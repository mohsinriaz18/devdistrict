import { motion } from "framer-motion";

const projects = [
  { title: "BotAgent", category: "AI / Automation", image: "/portfolio/botagent.avif", span: "md:col-span-2 md:row-span-2" },
  { title: "Copilot", category: "AI / Productivity", image: "/portfolio/copilot.avif", span: "md:col-span-1 md:row-span-1" },
  { title: "Resumedia", category: "Web App", image: "/portfolio/resumedia.avif", span: "md:col-span-1 md:row-span-1" },
  { title: "Xecuter", category: "SaaS Platform", image: "/portfolio/xecuter.avif", span: "md:col-span-2 md:row-span-1" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 px-6 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-background/50 mb-4">
            Selected Work
          </p>
          <h2
            className="font-bold tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Portfolio
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative group overflow-hidden bg-background/5 border border-background/10 ${project.span} min-h-[240px] md:min-h-[280px] cursor-pointer`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />

              <div className="absolute inset-0 flex items-end p-8">
                <div className="translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-xs uppercase tracking-[0.2em] text-background/60 mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-semibold text-background">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
