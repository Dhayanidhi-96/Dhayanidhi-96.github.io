import { siteConfig } from "@/data/siteConfig";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/Icons";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-sm text-text-secondary">
              © {new Date().getFullYear()} {siteConfig.name}
            </p>
            <p className="text-xs text-text-muted">
              M.Sc. Data Science — Periyar University · B.Sc. Statistics — Presidency College
            </p>
          </div>

          <div className="flex items-center gap-1">
            <p className="text-xs text-text-muted mr-3">Certifications:</p>
            <span className="text-xs text-text-muted">
              ML Specialization (DeepLearning.AI) · Python for DS (IBM) · Google Data Analytics
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
