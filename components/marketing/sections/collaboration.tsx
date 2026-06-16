import { ArrowUp, BarChart3, MessageCircle, TrendingUp } from "lucide-react"

function CommunityCard() {
  return (
    <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          DM
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium leading-snug">
            How do we handle staging database migrations safely?
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Dana Mills · #backend · 12 answers</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1 font-medium text-primary">
          <ArrowUp className="size-3.5" /> 48
        </span>
        <span className="inline-flex items-center gap-1">
          <MessageCircle className="size-3.5" /> 12
        </span>
        <span className="ml-auto rounded-full bg-emerald-500/10 px-2 py-0.5 font-medium text-emerald-600 dark:text-emerald-400">
          Best answer
        </span>
      </div>
    </div>
  )
}

function AnalyticsCard() {
  const bars = [40, 65, 52, 80, 72, 95, 88]
  return (
    <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">Weekly engagement</p>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
          <TrendingUp className="size-3.5" /> +18%
        </span>
      </div>
      <div className="mt-5 flex h-28 items-end gap-2">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md bg-primary/80"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-3 flex justify-between text-[11px] text-muted-foreground">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
    </div>
  )
}

export function Collaboration() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <MessageCircle className="size-5" />
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight">Collaborate as a community</h3>
          <p className="mt-2 text-pretty text-muted-foreground">
            Turn tribal knowledge into searchable answers. Ask questions, upvote the best responses,
            and recognize your top contributors.
          </p>
          <div className="mt-6">
            <CommunityCard />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <BarChart3 className="size-5" />
          </div>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight">Measure what matters</h3>
          <p className="mt-2 text-pretty text-muted-foreground">
            Understand how knowledge flows through your org with dashboards for engagement, top
            content, search trends, and AI usage.
          </p>
          <div className="mt-6">
            <AnalyticsCard />
          </div>
        </div>
      </div>
    </section>
  )
}
