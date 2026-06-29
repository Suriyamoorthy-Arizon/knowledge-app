import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { getArticles } from "@/components/services/services";

export async function Features() {
  const response = await getArticles();
  const articles = response?.data?.length > 0 ? response?.data : [];

  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Latest Posts</h2>

          <p className="mt-3 text-muted-foreground">
            Browse recently published technical articles.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles?.map((article) => (
            <Link
              key={article.id}
              href={`/article/${article.id}`}
              className="rounded-xl border p-6 hover:shadow-lg transition"
            >
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                {article.category}
              </span>

              <h3 className="mt-4 text-xl font-semibold">{article.title}</h3>

              <div
                className="mt-3 line-clamp-3 text-sm text-muted-foreground"
                dangerouslySetInnerHTML={{
                  __html: article.description,
                }}
              />

              <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  {article.author_first_name} {article.author_last_name}
                </span>

                <span className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  {new Date(article.created_at).toLocaleDateString()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
