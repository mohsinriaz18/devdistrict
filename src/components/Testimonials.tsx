import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";
import t4 from "@/assets/testimonial-4.jpg";

const testimonials = [
  {
    quote:
      "The team built our drag-and-drop bot generator from scratch and shipped it in record time. It changed how founders launch agents.",
    name: "Aarav Mehta",
    role: "Founder, BotAgent",
    image: t1,
  },
  {
    quote:
      "They turned a messy travel-planning idea into a polished product our users actually love. Smooth, fast, and beautifully designed.",
    name: "Lucia Romero",
    role: "Co-founder, Copilot",
    image: t2,
  },
  {
    quote:
      "Resumedia went from concept to a live, AI-powered resume platform in weeks. Dev District just gets product execution.",
    name: "Daniel Park",
    role: "CEO, Resumedia",
    image: t3,
  },
  {
    quote:
      "Xecutor needed serious technical depth and they delivered a production-grade platform on time and on budget.",
    name: "Priya Shah",
    role: "CTO, Xecutor",
    image: t4,
  },
  {
    quote:
      "Our global freight portal handles real shipping ops daily. Their team understood logistics and built it like seasoned operators.",
    name: "Kwame Boateng",
    role: "Founder, ShipAfrika",
    image: t1,
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Auto-advance
  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-32 px-6 bg-foreground text-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-background/60 mb-4">
            Testimonials
          </p>
          <h2
            className="font-bold tracking-tight text-balance"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            What Clients Say
          </h2>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t) => (
              <div key={t.name} className="flex-[0_0_100%] min-w-0 px-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center px-2 md:px-8"
                  >
                    <p
                      className="text-background/95 leading-relaxed font-light text-balance max-w-3xl"
                      style={{ fontSize: "clamp(1.25rem, 2.4vw, 1.875rem)" }}
                    >
                      {t.quote}
                    </p>
                    <img
                      src={t.image}
                      alt={t.name}
                      loading="lazy"
                      width={128}
                      height={128}
                      className="mt-12 h-28 w-28 md:h-32 md:w-32 rounded-full object-cover border border-background/20"
                    />
                    <p className="mt-5 font-semibold text-base">{t.name}</p>
                    <p className="text-sm text-background/60 mt-1">{t.role}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                selected === i ? "w-8 bg-background" : "w-2 bg-background/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
