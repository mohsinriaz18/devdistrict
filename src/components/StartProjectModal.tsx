import { createContext, useContext, useState, ReactNode } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(5, "Phone is required").max(30),
  budget: z.string().min(1, "Select a budget"),
  lookingFor: z.string().min(1, "Select a service"),
  description: z.string().trim().min(3, "Tell us a bit more").max(1000),
});

type Ctx = { open: () => void; close: () => void };
const StartProjectCtx = createContext<Ctx>({ open: () => {}, close: () => {} });
export const useStartProject = () => useContext(StartProjectCtx);

export const StartProjectProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StartProjectCtx.Provider value={{ open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
      <StartProjectSheet open={isOpen} onOpenChange={setIsOpen} />
    </StartProjectCtx.Provider>
  );
};

const StartProjectSheet = ({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      budget: (form.elements.namedItem("budget") as HTMLInputElement).value,
      lookingFor: (form.elements.namedItem("lookingFor") as HTMLInputElement).value,
      description: (form.elements.namedItem("description") as HTMLTextAreaElement).value,
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      toast({ title: "Please fix the form", description: result.error.issues[0].message, variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const { data: res, error } = await supabase.functions.invoke("send-project-inquiry", {
        body: result.data,
      });
      if (error) throw error;
      toast({
        title: "Request sent",
        description: "Thanks! We'll get back to you within 24 hours.",
      });
      form.reset();
      onOpenChange(false);
    } catch (err) {
      console.error(err);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-lg overflow-y-auto bg-background border-l border-border">
        <SheetHeader className="text-left">
          <SheetTitle className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Start a Project
          </SheetTitle>
          <SheetDescription className="text-muted-foreground">
            Tell us a bit about your idea — we'll respond within 24 hours.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-8">
          <Field name="name" label="Name" placeholder="Your name" />
          <Field name="email" label="Email" type="email" placeholder="you@company.com" />
          <Field name="phone" label="Phone" type="tel" placeholder="+1 555 000 0000" />

          <SelectField name="budget" label="Estimated Budget" placeholder="Select budget" options={[
            "< $5k", "$5k – $15k", "$15k – $50k", "$50k – $150k", "$150k+",
          ]} />

          <SelectField name="lookingFor" label="What are you looking for?" placeholder="Select a service" options={[
            "Web App Development",
            "Mobile App Development",
            "AI Integration",
            "MVP Development",
            "UI/UX Design",
            "Product Strategy",
          ]} />

          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
              Project Description
            </label>
            <textarea
              name="description"
              rows={4}
              maxLength={1000}
              placeholder="Briefly describe your project, goals, and timeline..."
              className="w-full bg-transparent border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {submitting ? "Sending..." : "Submit Request"}
            <ArrowRight size={16} />
          </button>
        </form>
      </SheetContent>
    </Sheet>
  );
};

const Field = ({ name, label, type = "text", placeholder }: { name: string; label: string; type?: string; placeholder?: string }) => (
  <div>
    <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">{label}</label>
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      maxLength={255}
      className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
    />
  </div>
);

const SelectField = ({ name, label, placeholder, options }: { name: string; label: string; placeholder: string; options: string[] }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">{label}</label>
      <input type="hidden" name={name} value={value} readOnly />
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-full bg-transparent border-0 border-b border-border rounded-none px-0 py-3 h-auto text-sm focus:ring-0 focus:border-foreground">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-background border-border">
          {options.map((o) => (
            <SelectItem key={o} value={o}>{o}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
