import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useStartProject } from "./StartProjectModal";

const Hero = () => {
  const { open } = useStartProject();
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 bg-background"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-5xl text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8"
        >
          Software Development Agency
        </motion.p>

        <h1
          className="text-foreground font-bold leading-[0.95] tracking-tight text-balance"
          style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
        >
          We Build Digital
          <br />
          Products That Scale.
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Dev District is a modern software development agency building fast,
          scalable, AI-powered products for startups and enterprises.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={open}
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Start a Project
            <ArrowRight size={16} />
          </button>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-4 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
          >
            View Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
