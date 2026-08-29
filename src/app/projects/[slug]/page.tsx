import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, getProjectSlugs } from "@/data/projects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectHero } from "@/components/projects/ProjectHero";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { TechDecisions } from "@/components/projects/TechDecisions";
import { ResultsGrid } from "@/components/projects/ResultsGrid";
import { ProjectNavigation } from "@/components/projects/ProjectNavigation";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pb-16">
        <ProjectHero project={project} />

        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {/* Problem */}
          <section>
            <AnimateOnScroll>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted mb-3">
                The Problem
              </p>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Challenge & Background
              </h2>
              <p className="text-base text-text-secondary leading-relaxed">
                {project.problem}
              </p>
            </AnimateOnScroll>
          </section>

          {/* Solution */}
          <section>
            <AnimateOnScroll>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted mb-3">
                The Solution
              </p>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                System Approach
              </h2>
              <p className="text-base text-text-secondary leading-relaxed">
                {project.solution}
              </p>
            </AnimateOnScroll>
          </section>

          {/* System Architecture */}
          <section>
            <div className="mb-6">
              <AnimateOnScroll>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted mb-3">
                  Architecture
                </p>
                <h2 className="text-2xl font-semibold text-text-primary">
                  System Architecture & Data Flow
                </h2>
              </AnimateOnScroll>
            </div>
            <ArchitectureDiagram
              nodes={project.architectureNodes}
              edges={project.architectureEdges}
            />
          </section>

          {/* Technical Decisions */}
          {project.techDecisions.length > 0 && (
            <section>
              <div className="mb-6">
                <AnimateOnScroll>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted mb-3">
                    Engineering Decisions
                  </p>
                  <h2 className="text-2xl font-semibold text-text-primary">
                    Trade-offs & Technical Choices
                  </h2>
                </AnimateOnScroll>
              </div>
              <TechDecisions decisions={project.techDecisions} />
            </section>
          )}

          {/* Key Features */}
          <section>
            <AnimateOnScroll>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted mb-3">
                Capabilities
              </p>
              <h2 className="text-2xl font-semibold text-text-primary mb-6">
                Key Features & Engineering Scope
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 p-3.5 rounded-lg border border-border-subtle bg-surface/20 text-sm text-text-secondary"
                  >
                    <span className="text-accent mt-0.5">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </section>

          {/* Results / Outcomes */}
          <section>
            <div className="mb-6">
              <AnimateOnScroll>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted mb-3">
                  Outcomes
                </p>
                <h2 className="text-2xl font-semibold text-text-primary">
                  Results & Impact
                </h2>
              </AnimateOnScroll>
            </div>
            <ResultsGrid
              results={project.results}
              summary={project.resultsSummary}
            />
          </section>
        </div>

        <div className="mt-16">
          <ProjectNavigation currentSlug={project.slug} />
        </div>
      </main>
      <Footer />
    </>
  );
}
