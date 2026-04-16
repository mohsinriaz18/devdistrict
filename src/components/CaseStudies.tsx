import { motion } from "framer-motion";

const studies = [
  {
    title: "Fintech Dashboard Redesign",
    problem: "Legacy interface causing 40% user drop-off during onboarding.",
    solution: "Complete UX overhaul with streamlined flows and real-time data visualization.",
    impact: "68% increase in user retention and 3x faster onboarding completion.",
  },
  {
    title: "AI-Powered Health Platform",
    problem: "Manual patient data processing taking 6+ hours per clinic per day.",
    solution: "Built an AI pipeline for automated triage, scheduling, and record analysis.",
    impact: "Reduced processing time to 45 minutes. Deployed across 120+ clinics.",
  },
  {
    title: "E-Commerce Mobile App",
    problem: "No mobile presence for a brand generating $2M/year in online sales.",
    solution: "Cross-platform mobile app with personalized recommendations and one-tap checkout.",
    impact: "35% revenue increase within 6 months of launch. 4.8★ App Store rating.",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Results That Speak
          </p>
          <h2
            className="text-foreground font-bold tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Case Studies
          </h2>
        </motion.div>

        <div className="mt-16 space-y-0 divide-y divide-border">
          {studies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-12 first:pt-0 last:pb-0"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                {study.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { label: "Problem", text: study.problem },
                  { label: "Solution", text: study.solution },
                  { label: "Impact", text: study.impact },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                      {item.label}
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
