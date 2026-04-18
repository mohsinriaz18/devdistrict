import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Smartphone, Cpu, Rocket, Palette, Lightbulb, ChevronUp } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web App Development",
    desc: "Build fast, responsive, and visually stunning web applications with modern frameworks and clean architecture.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps that deliver seamless experiences on every device.",
    tags: ["React Native", "Flutter", "iOS"],
  },
  {
    icon: Cpu,
    title: "AI Integration",
    desc: "Embed intelligent AI capabilities into your existing products and workflows for smarter automation.",
    tags: ["LLMs", "Computer Vision", "NLP"],
  },
  {
    icon: Rocket,
    title: "MVP Development",
    desc: "Go from idea to launch fast with lean, production-ready minimum viable products.",
    tags: ["Planning", "Roadmap", "Validation"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Bold, intuitive interfaces designed to convert and delight your users at every touchpoint.",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    icon: Lightbulb,
    title: "Product Strategy",
    desc: "Strategic planning to align your technology with business goals and market fit.",
    tags: ["Research", "Analytics", "Growth"],
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            We help startups and enterprises bring bold ideas to life through expert software, design, and strategy.
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
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get a Quote
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 border border-foreground text-foreground px-8 py-4 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              See Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
