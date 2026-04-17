import { motion } from "framer-motion";

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "40+", label: "Clients Worldwide" },
  { value: "6+", label: "Years of Experience" },
  { value: "4 wks", label: "Avg. Delivery Time" },
];

const Stats = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-foreground text-background">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="text-center md:text-left"
          >
            <p
              className="font-bold tracking-tight leading-none"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              {s.value}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-background/60">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
