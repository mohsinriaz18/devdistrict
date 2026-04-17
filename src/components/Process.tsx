import { motion } from "framer-motion";
import { Search, Map, Palette, Code2, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  { n: "01", title: "Discovery", desc: "Understand goals, users, and constraints.", Icon: Search },
  { n: "02", title: "Planning", desc: "Roadmap, scope, and architecture decisions.", Icon: Map },
  { n: "03", title: "Design", desc: "Wireframes, prototypes, and visual systems.", Icon: Palette },
  { n: "04", title: "Development", desc: "Iterative builds with weekly demos.", Icon: Code2 },
  { n: "05", title: "Testing", desc: "QA, performance, and security hardening.", Icon: ShieldCheck },
  { n: "06", title: "Launch", desc: "Deploy, monitor, and scale with confidence.", Icon: Rocket },
];

const Process = () => {
  return (
    <section id="process" className="py-32 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Our Roadmap
          </p>
          <h2
            className="text-foreground font-bold tracking-tight text-balance"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            How We Ship Great Products.
          </h2>
        </motion.div>

        {/* Desktop: horizontal roadmap */}
        <div className="hidden lg:block relative">
          {/* The road line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-border" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-foreground"
          />

          <div className="grid grid-cols-6 relative">
            {steps.map((s, i) => {
              const above = i % 2 === 0;
              const Icon = s.Icon;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: above ? -10 : 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="relative flex flex-col items-center"
                >
                  {above && (
                    <div className="mb-8 text-center px-2 min-h-[140px] flex flex-col justify-end">
                      <p className="text-[10px] font-mono text-muted-foreground tracking-widest mb-2">
                        {s.n}
                      </p>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {s.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  )}

                  {/* Node on the road */}
                  <div className="relative z-10 h-14 w-14 rounded-full bg-background border-2 border-foreground flex items-center justify-center">
                    <Icon size={20} strokeWidth={1.75} className="text-foreground" />
                  </div>

                  {!above && (
                    <div className="mt-8 text-center px-2 min-h-[140px]">
                      <p className="text-[10px] font-mono text-muted-foreground tracking-widest mb-2">
                        {s.n}
                      </p>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {s.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet: vertical roadmap */}
        <div className="lg:hidden relative max-w-xl mx-auto">
          <div className="absolute left-7 top-2 bottom-2 w-px bg-border" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-7 top-2 bottom-2 w-px bg-foreground"
          />

          <div className="space-y-10">
            {steps.map((s, i) => {
              const Icon = s.Icon;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative flex gap-6 items-start"
                >
                  <div className="relative z-10 h-14 w-14 shrink-0 rounded-full bg-background border-2 border-foreground flex items-center justify-center">
                    <Icon size={20} strokeWidth={1.75} className="text-foreground" />
                  </div>
                  <div className="pt-1">
                    <p className="text-[10px] font-mono text-muted-foreground tracking-widest mb-1">
                      {s.n}
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
