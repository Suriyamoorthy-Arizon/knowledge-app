import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PricingCards } from "@/components/marketing/pricing-cards"

export function PricingPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start free, then scale as your team grows. No surprises.
          </p>
        </div>
        <div className="mt-14">
          <PricingCards />
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Compare all features
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
