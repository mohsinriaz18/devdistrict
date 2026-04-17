import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Dev District transformed our vision into a product that exceeded every expectation. Their speed and quality are unmatched.",
    name: "Sarah Chen",
    role: "CEO, Aura Health",
    initials: "SC",
  },
  {
    quote: "Working with them felt like having a world-class engineering team in-house. They shipped our MVP in 6 weeks flat.",
    name: "Marcus Williams",
    role: "Founder, NovaPay",
    initials: "MW",
  },
  {
    quote: "The attention to detail in both design and code is exceptional. Our users constantly praise the experience.",
    name: "Elena Rodriguez",
    role: "CPO, Streamline",
    initials: "ER",
  },
  {
    quote: "They don't just build software — they think like product strategists. Dev District is our go-to partner for every project.",
    name: "James Park",
    role: "CTO, Kinetic Labs",
    initials: "JP",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Testimonials
          </p>
          <h2
            className="text-foreground font-bold tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Trusted by founders and teams.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-border p-8 md:p-10 bg-background hover:border-foreground transition-colors"
            >
              <p className="text-foreground/90 leading-relaxed text-lg md:text-xl font-light text-balance">
                "{t.quote}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-secondary border border-border flex items-center justify-center text-sm font-semibold text-foreground grayscale">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
