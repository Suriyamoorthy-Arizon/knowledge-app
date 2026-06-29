import Link from "next/link";
import { ArrowRight, Search, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SearchArticles from "./SearchArticles";

const categories = [
  "BigCommerce support",
  "React",
  "Next.js",
  "Java",
  "Backend",
  "DevOps",
  "Integrations",
];

export function Hero() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-to-b from-accent/40 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 pb-12 pt-20 text-center sm:px-6 lg:px-8">
        {/* <Link
          href="#"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:text-foreground"
        >
          <span className="flex items-center gap-1.5 text-primary">
            <Sparkles className="size-3.5" />
            New
          </span>
          Knowledge Base & Support Solutions
          <ArrowRight className="size-3.5" />
        </Link> */}

        <h1 className="mx-auto text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-5xl">
          Find Solutions Faster with Knowledge Desk
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Knowledge Desk centralizes BigCommerce support resolutions,
          development fixes, environment setup guides, integration challenges,
          and technical solutions into a single searchable platform. Quickly
          find answers, share knowledge, and reduce repetitive troubleshooting
          across teams.
        </p>

        {/* Search Box */}
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <SearchArticles />
            {/* <Input
              type="text"
              placeholder="Search by category, issue title, keyword, support ticket, or technology..."
              className="h-14 rounded-xl pl-12 pr-4 text-base shadow-sm"
            /> */}
          </div>

          {/* Category Pills */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Optional Action Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {/* <Button size="lg">
            Browse Knowledge Base
            <ArrowRight className="size-4" />
          </Button> */}

          <Button variant="outline" size="lg">
            <Link href="/submit-issue">Submit New Issue</Link>
          </Button>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Search support tickets, technical solutions, implementation guides,
          and development knowledge.
        </p>
      </div>
    </section>
  );
}
