import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", details: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const description = form.company
        ? `Company: ${form.company}\n\n${form.details}`
        : form.details;

      const { data, error } = await supabase.functions.invoke("send-project-inquiry", {
        body: {
          name: form.name,
          email: form.email,
          phone: "—",
          budget: "n/a",
          lookingFor: "Contact",
          description,
          source: "contact",
        },
      });

      if (error) throw error;
      if (data && data.ok === false) throw new Error("Submission failed");

      setSubmitted(true);
      toast.success("Message sent. We'll be in touch soon.");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
                  required={field.name !== "company"}
                  type={field.type}
                  name={field.name}
                  value={(form as any)[field.name]}
                  onChange={handleChange}
                  placeholder={field.label}
                  className="w-full bg-transparent border-b border-border py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
            ))}

            <div>
              <textarea
                required
                name="details"
                value={form.details}
                onChange={handleChange}
                placeholder="Project Details"
                rows={4}
                className="w-full bg-transparent border-b border-border py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium hover:opacity-90 transition-opacity mt-4 disabled:opacity-60"
            >
              {loading ? (
                <>
                  Sending
                  <Loader2 size={16} className="animate-spin" />
                </>
              ) : (
                <>
                  Send Request
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default Contact;
