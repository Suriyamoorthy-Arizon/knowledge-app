import Link from "next/link"
import { Logo } from "@/components/logo"

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "AI Assistant", href: "/#ai" },
      { label: "Pricing", href: "/pricing" },
      { label: "Changelog", href: "/#" },
      { label: "Integrations", href: "/#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/#" },
      { label: "Blog", href: "/#" },
      { label: "Customers", href: "/#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/#" },
      { label: "Help center", href: "/#" },
      { label: "Community", href: "/#" },
      { label: "API reference", href: "/#" },
      { label: "Status", href: "/#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/#" },
      { label: "Terms", href: "/#" },
      { label: "Security", href: "/#" },
      { label: "DPA", href: "/#" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The AI-powered knowledge platform that helps teams capture, share, and discover what
              they know.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Knowledge Desk, Inc. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Built for teams that ship knowledge.</p>
        </div>
      </div>
    </footer>
  )
}
