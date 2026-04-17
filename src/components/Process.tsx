import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Discovery", desc: "Understand goals, users, and constraints." },
  { n: "02", title: "Planning", desc: "Roadmap, scope, and architecture decisions." },
  { n: "03", title: "Design", desc: "Wireframes, prototypes, and visual systems." },
  { n: "04", title: "Development", desc: "Iterative builds with weekly demos." },
  { n: "05", title: "Testing", desc: "QA, performance, and security hardening." },
  { n: "06", title: "Launch", desc: "Deploy, monitor, and scale with confidence." },
];

const Process = () => {
  return (
    <section id="process" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Process
          </p>
          <h2
            className="text-foreground font-bold tracking-tight max-w-3xl"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            How we ship great products.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-background p-8 md:p-10 group hover:bg-secondary/40 transition-colors"
            >
              <p className="text-xs font-mono text-muted-foreground tracking-widest mb-6">
                {s.n}
              </p>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
