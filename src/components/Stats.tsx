import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  display?: (n: number) => string;
};

const stats: Stat[] = [
  { value: 30, suffix: "+", label: "Projects Delivered" },
  { value: 20, suffix: "+", label: "Clients Worldwide" },
  { value: 6, suffix: "+", label: "Years of Experience" },
  {
    value: 6,
    label: "Avg. Delivery Time",
    display: (n) => `4–${n} wks`,
  },
];

const StatItem = ({ stat, i }: { stat: Stat; i: number }) => {
  const [ref, value] = useCountUp(stat.value, 1600);
  const display = stat.display
    ? stat.display(value)
    : `${stat.prefix ?? ""}${value}${stat.suffix ?? ""}`;
  const isWks = !!stat.display;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: i * 0.08 }}
      className="text-center group"
    >
      <p
        ref={ref as React.RefObject<HTMLParagraphElement>}
        className="font-bold tracking-tight leading-none whitespace-nowrap transition-transform duration-300 group-hover:-translate-y-1"
        style={{
          fontSize: isWks
            ? "clamp(2rem, 5.5vw, 4.5rem)"
            : "clamp(3rem, 7vw, 6rem)",
        }}
      >
        {display}
      </p>
      <p className="mt-4 text-xs uppercase tracking-[0.25em] text-background/60 relative inline-block">
        {stat.label}
        <span className="absolute left-0 -bottom-1 h-px w-0 bg-background/60 transition-all duration-500 group-hover:w-full" />
      </p>
    </motion.div>
  );
};

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
            <StatItem key={s.label} stat={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
