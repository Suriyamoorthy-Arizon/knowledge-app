import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About — Knowledge Desk",
  description:
    "We're building the AI-powered home for organizational knowledge, so every team can find the right answer in seconds.",
}

const stats = [
  { value: "4,000+", label: "Teams onboarded" },
  { value: "2.5M", label: "Articles created" },
  { value: "120M", label: "AI answers served" },
  { value: "99.9%", label: "Uptime SLA" },
]

const values = [
  {
    title: "Knowledge should be findable",
    description:
      "Information trapped in someone's head or a forgotten doc helps no one. We make knowledge discoverable by default.",
  },
  {
    title: "Trust through transparency",
    description:
      "Our AI shows its sources. Every answer can be traced back to the document it came from, so teams can rely on it.",
  },
  {
    title: "Secure by design",
    description:
      "Enterprise security isn't a feature we bolt on — it's the foundation everything else is built on.",
  },
  {
    title: "Built for everyone",
    description:
      "From the newest hire to the longest-tenured expert, the platform should feel obvious from the first minute.",
  },
]

const team = [
  { name: "Elena Rossi", role: "Co-founder & CEO", initials: "ER" },
  { name: "James Park", role: "Co-founder & CTO", initials: "JP" },
  { name: "Aisha Khan", role: "Head of Product", initials: "AK" },
  { name: "Tom Becker", role: "Head of Design", initials: "TB" },
]

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-border bg-card/40 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our mission</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            We help companies remember what they know
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Knowledge Desk started with a simple frustration: the answer almost always exists
            somewhere, but no one can find it. We set out to build a single, AI-powered home for
            everything an organization knows — and make it effortless to search, share, and trust.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-semibold tracking-tight text-primary">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold tracking-tight">What we believe</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-card p-7">
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold tracking-tight">Meet the team</h2>
          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl border border-border bg-card p-6 text-center">
                <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                  {member.initials}
                </span>
                <h3 className="mt-4 font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 pt-8">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance text-3xl font-semibold tracking-tight">
            Want to build the future of knowledge with us?
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Get in touch
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/signup">Start for free</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
