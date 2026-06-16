import {
  BookOpen,
  MessagesSquare,
  Search,
  Shield,
  Sparkles,
  Users,
  BarChart3,
  Hash,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "BigCommerce Support",
    description:
      "Maintain a centralized repository of BigCommerce support tickets, development issues, solutions, implementation guides, and technical documentation.",
  },
  {
    icon: Sparkles,
    title: "Smart Issue Search",
    description:
      "Quickly locate resolved issues, support responses, troubleshooting steps, and technical solutions using intelligent search capabilities.",
  },
  {
    icon: Search,
    title: "Advanced Search & Filters",
    description:
      "Search knowledge articles by category, title, keywords, technology stack, or support ticket references for faster issue resolution.",
  },
  {
    icon: MessagesSquare,
    title: "Issue Submission Portal",
    description:
      "Submit new issues with detailed descriptions, screenshots, categories, and supporting information for future reference and collaboration.",
  },
  {
    icon: Users,
    title: "React",
    description:
      "Enable developers, support teams, and administrators to share knowledge, best practices, implementation details, and solutions.",
  },
  {
    icon: BarChart3,
    title: "Java",
    description:
      "Track issue trends, frequently reported problems, category distribution, and overall knowledge base growth across projects.",
  },
  {
    icon: Hash,
    title: "Next.js",
    description:
      "Organize knowledge across BigCommerce, React, Next.js, Java, Backend, DevOps, Integrations, and other technical domains.",
  },
  {
    icon: Shield,
    title: "Integrations",
    description:
      "Manage access securely with role-based permissions, audit tracking, and controlled visibility of technical information.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto  text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Knowledge Management Platform
          </p>

          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Centralize Support Solutions and Technical Knowledge
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-pretty text-lg text-muted-foreground">
            Capture BigCommerce support resolutions, development fixes,
            environment setup guides, integration challenges, and technical
            solutions in a single searchable platform that empowers teams to
            resolve issues faster and share knowledge effectively.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="size-5" />
              </div>

              <h3 className="mt-4 font-semibold">{feature.title}</h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}