const companies = ["Northwind", "Acme Corp", "Lumen", "Vertex", "Hyperion", "Quanta"]

export function Logos() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Trusted by knowledge-driven teams at fast-growing companies
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((name) => (
            <div
              key={name}
              className="text-center text-lg font-semibold tracking-tight text-muted-foreground/70"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
