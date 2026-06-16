import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { plans } from "@/lib/marketing-data"

export function PricingCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={cn(
            "relative flex flex-col rounded-2xl border bg-card p-7",
            plan.featured ? "border-primary shadow-xl shadow-primary/10" : "border-border",
          )}
        >
          {plan.featured && (
            <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Most popular
            </span>
          )}
          <h3 className="text-lg font-semibold">{plan.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
          <div className="mt-5 flex items-baseline gap-1">
            <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
            {plan.cadence && <span className="text-sm text-muted-foreground">{plan.cadence}</span>}
          </div>
          <Button
            asChild
            className="mt-6"
            variant={plan.featured ? "default" : "outline"}
          >
            <Link href={plan.name === "Enterprise" ? "/contact" : "/signup"}>{plan.cta}</Link>
          </Button>
          <ul className="mt-7 flex flex-col gap-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
