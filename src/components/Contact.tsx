import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-foreground font-bold tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Let's Build
            <br />
            Something Big
          </h2>
          <p className="mt-6 text-muted-foreground">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl font-semibold text-foreground">Thank you.</p>
            <p className="text-muted-foreground mt-2">We'll be in touch soon.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "company", label: "Company", type: "text" },
            ].map((field) => (
              <div key={field.name}>
                <input
                  required
                  type={field.type}
                  name={field.name}
                  placeholder={field.label}
                  className="w-full bg-transparent border-b border-border py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
            ))}

            <div>
              <textarea
                required
                name="details"
                placeholder="Project Details"
                rows={4}
                className="w-full bg-transparent border-b border-border py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium hover:opacity-90 transition-opacity mt-4"
            >
              Send Request
              <ArrowRight size={16} />
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default Contact;
