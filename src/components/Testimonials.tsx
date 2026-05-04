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
      "It was really great working with this team! They did an exceptional job and delivered exactly what I was looking for. They understood the task and professionally delivered within the prescribed timeframe. I would highly recommend them!!",
    name: "Kwame Boateng",
    role: "Founder, ShipAfrika",
    image: t2,
  },
  {
    quote:
      "Dev District team was extremely professional, responsive, and easy to work with. They understood exactly what I needed and delivered high-quality content that matched my brand perfectly. Highly recommend if you're looking for someone reliable and creative!",
    name: "Lucia Romero",
    role: "Co-founder, Copilot",
    image: t3,
  },
  {
    quote:
      "Loved working with Dev District team. They are very detail-oriented and friendly to work with. They not only worked on the scope I had in mind but also gave guidelines to improve the app. Highly recommended.",
    name: "Priya Shah",
    role: "CTO, Xecutor",
    image: t4,
  },
  {
    quote:
      "Best team I've ever worked with — very professional, very fast, and very dedicated. I've never met such kind people before. Thank you for the great work, I'm looking forward to the future with you!",
    name: "Daniel Park",
    role: "CEO, Resumedia",
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

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 6500);
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
                      style={{ fontSize: "clamp(1.125rem, 2.2vw, 1.75rem)" }}
                    >
                      {t.quote}
                    </p>
                    <div className="mt-12 relative">
                      {/* rotating outline ring */}
                      <span
                        aria-hidden
                        className="absolute inset-0 -m-2 rounded-full border border-dashed border-background/30 animate-spin-slow"
                      />
                      <img
                        src={t.image}
                        alt={t.name}
                        loading="lazy"
                        width={128}
                        height={128}
                        className="relative h-28 w-28 md:h-32 md:w-32 rounded-full object-cover border border-background/20"
                      />
                    </div>
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
