import type { ReactNode } from "react"
import { Sparkles } from "lucide-react"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"

const highlights = [
  "Unified knowledge base, discussions, and chat",
  "AI assistant with cited, trustworthy answers",
  "Enterprise-grade security and access controls",
]

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh">
      {/* Form side */}
      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between px-6 py-5 lg:px-10">
          <Logo />
          <ThemeToggle />
        </header>
        <div className="flex flex-1 items-center justify-center px-6 py-8 lg:px-10">
          <div className="w-full max-w-sm">{children}</div>
        </div>
      </div>

      {/* Brand side */}
      <div className="relative hidden w-1/2 max-w-2xl overflow-hidden bg-primary lg:block">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 15%, rgba(255,255,255,0.7), transparent 35%), radial-gradient(circle at 80% 70%, rgba(180,160,255,0.6), transparent 40%)",
          }}
          aria-hidden="true"
        />
        <div className="relative flex h-full flex-col justify-center px-14">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-sm font-medium text-primary-foreground">
            <Sparkles className="size-3.5" />
            AI-powered knowledge
          </span>
          <h2 className="mt-6 max-w-md text-balance text-3xl font-semibold leading-tight text-primary-foreground">
            The home for everything your company knows.
          </h2>
          <ul className="mt-8 flex flex-col gap-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-primary-foreground/90">
                <span className="size-1.5 rounded-full bg-primary-foreground" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-12 max-w-md text-pretty text-sm leading-relaxed text-primary-foreground/70">
            “Knowledge Desk replaced three tools for us and cut onboarding time in half.”
            <span className="mt-2 block font-medium text-primary-foreground/90">
              Priya Nair — VP Engineering, Vertex
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
