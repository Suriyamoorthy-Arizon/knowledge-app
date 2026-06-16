import type { Metadata } from "next"
import { Fragment } from "react"
import { Check, Minus } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PricingCards } from "@/components/marketing/pricing-cards"
import { comparison, plans } from "@/lib/marketing-data"

export const metadata: Metadata = {
  title: "Pricing — Knowledge Desk",
  description: "Simple, transparent pricing for teams of every size. Start free and scale as you grow.",
}

const faqs = [
  {
    q: "Is there really a free plan?",
    a: "Yes. The Free plan supports up to 15 members with unlimited articles and basic AI requests — no credit card required.",
  },
  {
    q: "How are AI requests counted?",
    a: "Each question you ask the AI assistant counts as one request. Professional includes 10,000 per month; Enterprise is unlimited.",
  },
  {
    q: "Can I change plans later?",
    a: "Absolutely. You can upgrade, downgrade, or cancel at any time and we'll prorate the difference automatically.",
  },
  {
    q: "Do you offer discounts for nonprofits or education?",
    a: "We do. Reach out to our sales team and we'll set you up with a tailored plan for your organization.",
  },
]

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto size-4 text-primary" />
    ) : (
      <Minus className="mx-auto size-4 text-muted-foreground/40" />
    )
  }
  return <span className="text-sm text-foreground">{value}</span>
}

export default function PricingPage() {
  return (
    <div className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Pricing that scales with your team
          </h1>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Start free and upgrade when you&apos;re ready. Every plan includes the core knowledge
            base and AI assistant.
          </p>
        </div>

        <div className="mt-14">
          <PricingCards />
        </div>

        {/* Comparison table */}
        <div className="mt-24">
          <h2 className="text-center text-3xl font-semibold tracking-tight">Compare every feature</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 text-left text-sm font-semibold">Features</th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="px-4 py-4 text-center text-sm font-semibold">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((group) => (
                  <Fragment key={group.section}>
                    <tr className="bg-muted/40">
                      <td
                        colSpan={4}
                        className="px-1 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        {group.section}
                      </td>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={row.label} className="border-b border-border">
                        <td className="py-3.5 text-sm text-muted-foreground">{row.label}</td>
                        {row.values.map((value, i) => (
                          <td key={i} className="px-4 py-3.5 text-center">
                            <Cell value={value} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-24 max-w-3xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight">
            Frequently asked questions
          </h2>
          <Accordion className="mt-8">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
