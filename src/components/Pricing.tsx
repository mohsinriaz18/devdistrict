import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { useStartProject } from "./StartProjectModal";

const tiers = [
  {
    name: "Starter",
    price: "$1,999",
    desc: "MVPs and lean launches in 4–6 weeks.",
    features: ["Up to 5 core features", "Responsive web app", "Basic analytics", "4–6 week delivery", "Email support"],
    cta: "Start a Project",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$4,999",
    desc: "Scalable products with depth.",
    features: ["Unlimited features", "Web and mobile builds", "AI integrations", "Custom design system", "Priority support", "Performance audits"],
    cta: "Start a Project",
    highlighted: true,
  },
  {
    name: "Custom",
    price: "Let's talk",
    desc: "Tailored to your vision.",
    features: ["Dedicated team", "Enterprise architecture", "SLA & compliance", "Long-term partnership", "Strategic advisory"],
    cta: "Contact Us",
    highlighted: false,
  },
];

const Pricing = () => {
  const { open } = useStartProject();

  return (
    <section id="pricing" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Pricing
          </p>
          <h2
            className="text-foreground font-bold tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Plans that scale with you.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`p-8 md:p-10 flex flex-col min-h-[640px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                t.highlighted
                  ? "bg-foreground text-background"
                  : "bg-background border border-border text-foreground hover:border-foreground"
              }`}
            >
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                {t.highlighted && (
                  <span className="text-[10px] uppercase tracking-[0.2em] border border-background/40 px-2 py-1">
                    Popular
                  </span>
                )}
              </div>
              <p className={`text-sm ${t.highlighted ? "text-background/60" : "text-muted-foreground"}`}>
                {t.desc}
              </p>
              <p
                className="font-bold tracking-tight mt-8 mb-8 leading-none"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
              >
                {t.price}
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className={t.highlighted ? "text-background/90" : "text-foreground/80"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={open}
                className={`group inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 ${
                  t.highlighted
                    ? "bg-background text-foreground"
                    : "bg-foreground text-background"
                }`}
              >
                {t.cta}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
