import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-to-b from-accent/40 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-20 text-center sm:px-6 lg:px-8 lg:pt-28">
        <Link
          href="/#ai"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:text-foreground"
        >
          <span className="flex items-center gap-1.5 text-ai">
            <Sparkles className="size-3.5" />
            New
          </span>
          AI Assistant with cited answers
          <ArrowRight className="size-3.5" />
        </Link>

        <h1 className="mx-auto mt-8 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          The AI-powered home for everything your company knows
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Knowledge Desk brings articles, discussions, real-time chat, and an AI assistant into one
          secure workspace — so every team finds the right answer in seconds.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/signup">
              Start for free
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href="/contact">Book a demo</Link>
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Free for up to 15 members · No credit card required
        </p>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/5">
            <Image
              src="/product-dashboard-light.png"
              alt="Knowledge Desk dashboard showing articles, analytics widgets, and the AI assistant panel"
              width={1600}
              height={1000}
              className="w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
