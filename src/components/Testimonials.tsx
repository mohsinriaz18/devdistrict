import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Dev District transformed our vision into a product that exceeded every expectation. Their speed and quality are unmatched.",
    name: "Sarah Chen",
    role: "CEO, Aura Health",
  },
  {
    quote: "Working with them felt like having a world-class engineering team in-house. They shipped our MVP in 6 weeks flat.",
    name: "Marcus Williams",
    role: "Founder, NovaPay",
  },
  {
    quote: "The attention to detail in both design and code is exceptional. Our users constantly praise the experience.",
    name: "Elena Rodriguez",
    role: "CPO, Streamline",
  },
  {
    quote: "They don't just build software — they think like product strategists. Dev District is our go-to partner for every project.",
    name: "James Park",
    role: "CTO, Kinetic Labs",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-32 px-6 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-background/50 mb-4">
            Testimonials
          </p>
          <h2
            className="font-bold tracking-tight mb-20"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            What Clients Say
          </h2>
        </motion.div>

        <div className="relative min-h-[200px]">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{
                opacity: i === active ? 1 : 0,
                y: i === active ? 0 : 10,
              }}
              transition={{ duration: 0.5 }}
              className={`${i === active ? "relative" : "absolute inset-0"}`}
              style={{ pointerEvents: i === active ? "auto" : "none" }}
            >
              <p
                className="font-light leading-relaxed text-balance"
                style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)" }}
              >
                "{t.quote}"
              </p>
              <div className="mt-10">
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-background/50 mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === active ? "bg-background w-6" : "bg-background/30"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
