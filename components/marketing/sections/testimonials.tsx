const testimonials = [
  {
    quote:
      "Knowledge Desk replaced three different tools for us. Onboarding new engineers went from weeks to days because everything is finally in one searchable place.",
    name: "Priya Nair",
    role: "VP Engineering, Vertex",
    initials: "PN",
  },
  {
    quote:
      "The AI assistant answers support questions using our own documentation — with citations. Our team trusts it because it shows where every answer comes from.",
    name: "Marcus Lee",
    role: "Head of Support, Lumen",
    initials: "ML",
  },
  {
    quote:
      "We finally have visibility into what our team actually searches for. The analytics told us which docs to write next, and engagement is up across the board.",
    name: "Sofia Alvarez",
    role: "Knowledge Lead, Northwind",
    initials: "SA",
  },
]

export function Testimonials() {
  return (
    <section className="bg-card/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Loved by teams that run on knowledge
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Thousands of teams use Knowledge Desk to capture and share what they know.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-background p-7 shadow-sm"
            >
              <blockquote className="flex-1 text-pretty leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="block text-sm text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
