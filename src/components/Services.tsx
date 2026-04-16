import { motion } from "framer-motion";
import { Globe, Smartphone, Cpu, Rocket, Palette, Lightbulb } from "lucide-react";

const services = [
  { icon: Globe, title: "Web App Development", desc: "Scalable web applications built with modern frameworks and clean architecture." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform mobile apps that deliver seamless experiences." },
  { icon: Cpu, title: "AI Integration", desc: "Embed intelligent AI capabilities into your existing products and workflows." },
  { icon: Rocket, title: "MVP Development", desc: "Go from idea to launch fast with lean, production-ready minimum viable products." },
  { icon: Palette, title: "UI/UX Design", desc: "Bold, intuitive interfaces designed to convert and delight your users." },
  { icon: Lightbulb, title: "Product Strategy", desc: "Strategic planning to align your technology with business goals and market fit." },
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            What We Do
          </p>
          <h2
            className="text-foreground font-bold tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Services
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background p-10 group hover:bg-secondary/50 transition-colors"
            >
              <service.icon
                size={28}
                strokeWidth={1.5}
                className="text-foreground mb-6"
              />
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
