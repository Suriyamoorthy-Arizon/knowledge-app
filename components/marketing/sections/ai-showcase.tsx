import Image from "next/image"
import { Check, Sparkles } from "lucide-react"

const points = [
  "Answers grounded in your own articles and discussions",
  "Inline citations link straight to the source",
  "Suggested follow-up prompts keep momentum going",
  "Every conversation saved to a searchable AI history",
]

export function AiShowcase() {
  return (
    <section id="ai" className="scroll-mt-20 bg-card/40 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-ai/10 px-3 py-1 text-sm font-medium text-ai">
            <Sparkles className="size-3.5" />
            AI Assistant
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            An expert that has actually read your docs
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            The Knowledge Desk assistant searches your internal knowledge to answer questions with
            confidence — and shows its sources so you can trust every response.
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-ai/15 text-ai">
                  <Check className="size-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-ai/5">
          <Image
            src="/ai-assistant-panel.png"
            alt="AI assistant answering a question with cited source articles"
            width={1200}
            height={900}
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
