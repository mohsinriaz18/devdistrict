import { motion } from "framer-motion";

const studies = [
  {
    title: "Drag-and-Drop Bot Builder for Founders",
    problem: "Manual bot development required weeks of engineering for every new use case, blocking non-technical founders.",
    solution: "Designed a self-controlled, visual agent generator with drag-and-drop logic, pre-built blocks, and live preview.",
    impact: "10× faster bot deployment and zero engineering cost for founders shipping their first AI agents.",
  },
  {
    title: "All-in-One Travel Planning Platform",
    problem: "Travelers juggled flights, stays, and activities across fragmented tools with no unified itinerary.",
    solution: "Built a single travel service marketplace with smart itinerary creation, bookings, and collaborative trip planning.",
    impact: "Cut average trip-planning time from hours to minutes with a 4.8★ user satisfaction rating.",
  },
  {
    title: "Global Freight Logistics App",
    problem: "International freight ops were drowning in paperwork, manual tracking, and disconnected stakeholders.",
    solution: "Shipped a unified web and mobile portal automating documentation, tracking, and customer handoff.",
    impact: "Reduced manual ops by 70% and onboarded shippers across multiple countries within months of launch.",
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
