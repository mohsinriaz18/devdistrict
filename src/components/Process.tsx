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
          <div className="grid grid-cols-6 gap-4 relative" style={{ gridTemplateRows: "160px 56px 160px" }}>
            {/* The road line in the middle row */}
            <div className="absolute left-0 right-0 h-px bg-border" style={{ top: "calc(160px + 28px)" }} />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              style={{ transformOrigin: "left", top: "calc(160px + 28px)" }}
              className="absolute left-0 right-0 h-px bg-foreground"
            />
            {/* Traveling pulse dot along the road */}
            <div
              aria-hidden
              className="absolute h-2 w-2 rounded-full bg-foreground shadow-[0_0_12px_rgba(0,0,0,0.6)] animate-travel"
              style={{ top: "calc(160px + 28px - 3px)" }}
            />


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
                  className="contents"
                >
                  {/* Top row */}
                  <div className={`flex flex-col items-center justify-end text-center px-2 ${above ? "" : "invisible"}`} style={{ gridRow: 1, gridColumn: i + 1 }}>
                    <p className="text-[10px] font-mono text-muted-foreground tracking-widest mb-2">
                      {s.n}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                      {s.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed w-[160px] mx-auto">
                      {s.desc}
                    </p>
                  </div>

                  {/* Node row */}
                  <div className="flex items-center justify-center" style={{ gridRow: 2, gridColumn: i + 1 }}>
                    <div className="relative z-10 h-14 w-14 rounded-full bg-background border-2 border-foreground flex items-center justify-center group transition-transform duration-300 hover:scale-110">
                      <span aria-hidden className="absolute inset-0 rounded-full border-2 border-foreground/40 animate-pulse-ring" style={{ animationDelay: `${i * 0.4}s` }} />
                      <Icon size={20} strokeWidth={1.75} className="text-foreground transition-transform duration-500 group-hover:rotate-12" />
                    </div>
                  </div>

                  {/* Bottom row */}
                  <div className={`flex flex-col items-center justify-start text-center px-2 ${!above ? "" : "invisible"}`} style={{ gridRow: 3, gridColumn: i + 1 }}>
                    <p className="text-[10px] font-mono text-muted-foreground tracking-widest mb-2">
                      {s.n}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                      {s.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed w-[160px] mx-auto">
                      {s.desc}
                    </p>
                  </div>
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
