import type { Metadata } from "next"
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react"
import { ContactForm } from "@/components/marketing/contact-form"

export const metadata: Metadata = {
  title: "Contact — Knowledge Desk",
  description: "Talk to our team about Knowledge Desk for your organization.",
}

const channels = [
  { icon: Mail, label: "Email", value: "hello@knowledgedesk.com" },
  { icon: Phone, label: "Phone", value: "+1 (415) 555-0142" },
  { icon: MessageSquare, label: "Live chat", value: "Available 9am–6pm PT" },
  { icon: MapPin, label: "Office", value: "548 Market St, San Francisco" },
]

export default function ContactPage() {
  return (
    <div className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s talk about your team&apos;s knowledge
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Whether you have a question about features, pricing, or a custom deployment, our team
              is ready to help. Tell us a bit about what you&apos;re looking for.
            </p>

            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              {channels.map((channel) => (
                <div key={channel.label} className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <channel.icon className="size-5" />
                  </span>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">{channel.label}</dt>
                    <dd className="mt-0.5 font-medium">{channel.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
