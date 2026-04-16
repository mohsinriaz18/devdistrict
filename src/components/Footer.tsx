import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-lg font-bold text-foreground tracking-tight">
              Dev District
            </p>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Modern software development
              <br />
              for ambitious teams.
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
              Connect
            </p>
            <a
              href="mailto:hello@devdistrict.io"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              hello@devdistrict.io
            </a>
            <div className="flex gap-4 mt-6">
              {[
                { icon: Twitter, href: "#" },
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "mailto:hello@devdistrict.io" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
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
