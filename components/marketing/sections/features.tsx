import {
  BookOpen,
  MessagesSquare,
  Search,
  Shield,
  Sparkles,
  Users,
  BarChart3,
  Hash,
} from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Structured knowledge base",
    description:
      "Organize articles into categories and tags with a rich editor, version history, and approval workflows.",
  },
  {
    icon: Sparkles,
    title: "AI assistant with citations",
    description:
      "Ask questions in plain language and get answers grounded in your own docs, with source references.",
    ai: true,
  },
  {
    icon: Search,
    title: "Universal search",
    description:
      "Instant, typo-tolerant search across articles, discussions, tags, categories, and AI history.",
  },
  {
    icon: MessagesSquare,
    title: "Real-time chat",
    description:
      "Channels, threads, mentions, and reactions keep conversations close to the knowledge they create.",
  },
  {
    icon: Users,
    title: "Community discussions",
    description:
      "Crowdsource answers with questions, upvotes, and best-answer badges across your organization.",
  },
  {
    icon: BarChart3,
    title: "Analytics dashboards",
    description:
      "Track engagement, top articles, search trends, and AI usage to see what your team actually needs.",
  },
  {
    icon: Hash,
    title: "Categories & tags",
    description:
      "Flexible taxonomy keeps growing libraries navigable, so the right content surfaces every time.",
  },
  {
    icon: Shield,
    title: "Enterprise security",
    description:
      "SSO, SCIM, granular roles, audit logs, and data residency controls built in from day one.",
  },
]

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Everything in one place
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            One platform for how your company learns and shares
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Replace scattered docs, wikis, and chat threads with a single source of truth your whole
            team can trust.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <div
                className={`flex size-11 items-center justify-center rounded-lg ${
                  feature.ai
                    ? "bg-ai/10 text-ai"
                    : "bg-primary/10 text-primary"
                }`}
              >
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
  )
}
