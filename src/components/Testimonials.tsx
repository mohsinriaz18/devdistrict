import { motion } from "framer-motion";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";
import t4 from "@/assets/testimonial-4.jpg";

const testimonials = [
  {
    quote: "Dev District transformed our vision into a product that exceeded every expectation. Their speed and quality are unmatched.",
    name: "Sarah Chen",
    role: "CEO, Aura Health",
    image: t1,
  },
  {
    quote: "Working with them felt like having a world-class engineering team in-house. They shipped our MVP in 6 weeks flat.",
    name: "Marcus Williams",
    role: "Founder, NovaPay",
    image: t2,
  },
  {
    quote: "The attention to detail in both design and code is exceptional. Our users constantly praise the experience.",
    name: "Elena Rodriguez",
    role: "CPO, Streamline",
    image: t3,
  },
  {
    quote: "They don't just build software — they think like product strategists. Dev District is our go-to partner for every project.",
    name: "James Park",
    role: "CTO, Kinetic Labs",
    image: t4,
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
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Testimonials
          </p>
          <h2
            className="text-foreground font-bold tracking-tight text-balance"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Trusted by Founders and Teams.
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
              <div className="mt-8 flex items-center gap-5">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full object-cover grayscale border border-border"
                />
                <div>
                  <p className="font-semibold text-base text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{t.role}</p>
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
