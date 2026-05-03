import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.jpeg" alt="Dev District" className="h-8 w-8 object-contain rounded" />
              <p className="text-lg font-bold text-foreground tracking-tight">
                Dev District
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Build. Ship. Scale.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Quick Links
            </p>
            <div className="flex flex-col gap-3">
              {["Services", "Portfolio", "Case Studies", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-3 text-sm text-foreground/70">
              <a href="mailto:business@devdistrict.io" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail size={14} strokeWidth={1.5} />
                business@devdistrict.io
              </a>
              <a href="tel:+17864299639" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone size={14} strokeWidth={1.5} />
                +1 (786) 429-9639
              </a>
              <p className="inline-flex items-start gap-2 leading-relaxed">
                <MapPin size={14} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                <span>
                  7901 4th St N STE 300<br />
                  St. Petersburg, Florida
                </span>
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Connect
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/dev.district?igsh=cDY5ZHBpaGljN2Y0&utm_source=qr", label: "Instagram" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/dev-district/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:business@devdistrict.io", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-foreground/40 hover:text-foreground transition-colors"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dev District. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
