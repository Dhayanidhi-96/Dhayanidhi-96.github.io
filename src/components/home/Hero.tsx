"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/Icons";
import { siteConfig } from "@/data/siteConfig";
import { PipelineDiagram } from "./PipelineDiagram";

const domains = ["LLMs", "RAG", "Computer Vision", "Fine-Tuning", "AI Infrastructure"];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Role label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-sm text-accent tracking-wider mb-6"
        >
          AI/ML Engineer
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary mb-6"
        >
          {siteConfig.name}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8"
        >
          I build production-ready AI systems — from fine-tuning LLMs to
          deploying computer vision infrastructure.
        </motion.p>

        {/* Domain tags */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          {domains.map((domain) => (
            <span
              key={domain}
              className="px-3 py-1.5 rounded-full text-xs font-mono bg-surface border border-border-subtle text-text-secondary"
            >
              {domain}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors duration-200"
          >
            View My Work
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-sm text-text-secondary hover:text-text-primary hover:border-text-muted transition-all duration-200"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-sm text-text-secondary hover:text-text-primary hover:border-text-muted transition-all duration-200"
          >
            <LinkedinIcon className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href={siteConfig.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border text-sm text-text-secondary hover:text-text-primary hover:border-text-muted transition-all duration-200"
          >
            <FileText className="w-4 h-4" />
            Resume
          </a>
        </motion.div>

        {/* Pipeline diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <PipelineDiagram />
        </motion.div>
      </div>
    </section>
  );
}
