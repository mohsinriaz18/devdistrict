import { motion } from "framer-motion";

const stats = [
  { value: "30+", label: "Projects Delivered" },
  { value: "20+", label: "Clients Worldwide" },
  { value: "6+", label: "Years of Experience" },
  { value: "4–6 wks", label: "Avg. Delivery Time" },
];

const Stats = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-14"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-background/60 mb-4">
            Our Numbers
          </p>
          <h2
            className="font-bold tracking-tight text-balance"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Proven by Numbers.
            <br />
            Trusted by Founders.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="text-center"
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
      </div>
    </section>
  );
};

export default Stats;
