"use client";

import { siteConfig } from "@/data/siteConfig";
import { Section } from "@/components/layout/Section";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/Icons";

export function Contact() {
  return (
    <Section id="contact">
      <AnimateOnScroll>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-text-primary mb-4">
            Let&apos;s build intelligent systems.
          </h2>
          <p className="text-lg text-text-secondary mb-10">
            I&apos;m open to AI/ML Engineer roles at startups and AI-first
            companies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              {siteConfig.email}
            </a>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg border border-border text-sm text-text-secondary hover:text-text-primary hover:border-text-muted transition-all duration-200"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg border border-border text-sm text-text-secondary hover:text-text-primary hover:border-text-muted transition-all duration-200"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </Section>
  );
}
