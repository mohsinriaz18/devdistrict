import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { useStartProject } from "./StartProjectModal";

const CtaBand = () => {
  const { open } = useStartProject();

  return (
    <section className="py-24 px-6 bg-background border-y border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
      >
        <h3
          className="text-foreground font-bold tracking-tight text-balance"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
        >
          Have a project in mind?
          <br className="hidden md:block" />
          <span className="text-muted-foreground"> Let's build it together.</span>
        </h3>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <button
            onClick={open}
            className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-7 py-4 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Start a Project
            <ArrowRight size={16} />
          </button>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border border-foreground text-foreground px-7 py-4 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
          >
            <Calendar size={16} />
            Book a Call
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaBand;
