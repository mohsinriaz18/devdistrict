import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Layers, Palette, Cpu, Smartphone, LifeBuoy, ChevronUp } from "lucide-react";
import { useStartProject } from "./StartProjectModal";

const services = [
  {
    icon: Rocket,
    title: "MVP Development",
    desc: "Launch market-ready MVPs in 4–6 weeks using React, Node, and AI-assisted workflows powered by Claude and Cursor.",
    tags: ["React", "Node.js", "Claude", "Cursor"],
  },
  {
    icon: Layers,
    title: "SaaS Development",
    desc: "Scalable, multi-tenant SaaS platforms built on React, Node.js, Postgres, and modern cloud infrastructure.",
    tags: ["SaaS", "Postgres", "Stripe", "Cloud"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Conversion-focused product design, design systems, and Figma prototypes built for web and mobile experiences.",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    icon: Cpu,
    title: "AI Integration",
    desc: "Embed Claude, GPT, RAG pipelines, and AI agents into your product for smarter automation and faster workflows.",
    tags: ["Claude", "OpenAI", "RAG", "Agents"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Hybrid and native iOS and Android apps built with React Native and Flutter for true cross-platform reach.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    icon: LifeBuoy,
    title: "Project Rescue Services",
    desc: "Audit, refactor, and revive stalled or broken codebases with senior engineers and battle-tested architecture.",
    tags: ["Audit", "Refactor", "Rescue"],
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { open: openStartProject } = useStartProject();

  return (
    <section id="services" className="py-20 md:py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            What We Do
          </p>
          <h2
            className="text-foreground font-bold tracking-tight text-balance"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Built to Ship.
            <br />
            Designed to Win.
          </h2>
          <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Powered by Claude, Cursor, React, and Node — we ship 2× faster at 50% lower cost than traditional agencies.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {services.map((service, i) => {
            const isOpen = openIndex === i;
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full text-left px-6 md:px-8 py-6 flex items-center justify-between transition-colors duration-300 ${
                    isOpen
                      ? "bg-background rounded-t-xl shadow-sm"
                      : "hover:bg-background/50"
                  } ${!isOpen ? "border-b border-border" : ""}`}
                >
                  <div className="flex items-center gap-4">
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className={`transition-colors ${isOpen ? "text-foreground" : "text-muted-foreground"}`}
                    />
                    <span
                      className={`text-lg md:text-2xl font-semibold transition-colors ${
                        isOpen ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {service.title}
                    </span>
                  </div>
                  <ChevronUp
                    size={20}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-0 text-foreground" : "rotate-180 text-muted-foreground"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden bg-background rounded-b-xl shadow-sm"
                    >
                      <div className="px-6 md:px-8 pb-6 pt-2">
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-4">
                          {service.desc}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a
                          href="#contact"
                          className="text-sm font-medium text-foreground hover:underline inline-flex items-center gap-1"
                        >
                          Learn more →
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <h3
            className="text-foreground font-bold tracking-tight text-balance max-w-2xl mx-auto"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            Ready to turn your idea into a shipped product?
          </h3>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={openStartProject}
              className="group inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
            >
              Get a Quote
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <a
              href="#portfolio"
              className="group inline-flex items-center justify-center gap-2 border border-foreground text-foreground px-8 py-4 text-sm font-medium transition-all duration-300 hover:bg-foreground hover:text-background hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
            >
              See Our Work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
