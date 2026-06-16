export type Plan = {
  name: string
  price: string
  cadence: string
  description: string
  cta: string
  featured?: boolean
  features: string[]
}

export const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    cadence: "/ month",
    description: "For small teams getting started with shared knowledge.",
    cta: "Start for free",
    features: [
      "Up to 15 members",
      "Unlimited articles",
      "Basic knowledge base",
      "Community discussions",
      "500 AI requests / month",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "$12",
    cadence: "/ user / month",
    description: "For growing companies that run on shared knowledge.",
    cta: "Start 14-day trial",
    featured: true,
    features: [
      "Unlimited members",
      "Advanced knowledge base",
      "AI Assistant with citations",
      "Real-time chat workspace",
      "10,000 AI requests / month",
      "Analytics dashboards",
      "Roles & permissions",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "For organizations with security and scale requirements.",
    cta: "Contact sales",
    features: [
      "Everything in Professional",
      "SSO & SCIM provisioning",
      "Unlimited AI requests",
      "Custom data residency",
      "Audit logs & DLP",
      "Dedicated success manager",
      "99.9% uptime SLA",
      "Advanced moderation tools",
    ],
  },
]

export const comparison: { section: string; rows: { label: string; values: (string | boolean)[] }[] }[] = [
  {
    section: "Knowledge base",
    rows: [
      { label: "Articles", values: ["Unlimited", "Unlimited", "Unlimited"] },
      { label: "Categories & tags", values: [true, true, true] },
      { label: "Rich text editor", values: [true, true, true] },
      { label: "Version history", values: [false, true, true] },
      { label: "Approval workflows", values: [false, false, true] },
    ],
  },
  {
    section: "AI & search",
    rows: [
      { label: "AI requests / month", values: ["500", "10,000", "Unlimited"] },
      { label: "Cited answers", values: [false, true, true] },
      { label: "Universal search", values: [true, true, true] },
      { label: "AI history & analytics", values: [false, true, true] },
    ],
  },
  {
    section: "Collaboration",
    rows: [
      { label: "Community discussions", values: [true, true, true] },
      { label: "Real-time chat", values: [false, true, true] },
      { label: "Members", values: ["15", "Unlimited", "Unlimited"] },
    ],
  },
  {
    section: "Security & admin",
    rows: [
      { label: "Roles & permissions", values: [false, true, true] },
      { label: "SSO / SCIM", values: [false, false, true] },
      { label: "Audit logs", values: [false, false, true] },
      { label: "Uptime SLA", values: [false, false, "99.9%"] },
    ],
  },
]
