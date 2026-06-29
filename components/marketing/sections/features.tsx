import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { getArticles } from "@/components/services/services";

interface FeaturesProps {
  page: number;
}
export async function Features({ page }: FeaturesProps) {
  const response = await getArticles({
    page,
    limit: 9,
  });
  const articles = response?.data?.length > 0 ? response?.data : [];
  const pagination = response.pagination;

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
        <div className="mt-10 flex items-center justify-center gap-2">
          {pagination.hasPreviousPage && (
            <Link
              scroll={false}
              href={`/?page=${page - 1}`}
              className="rounded-md border px-4 py-2 hover:bg-muted"
            >
              Previous
            </Link>
          )}

          {Array.from({ length: pagination.totalPages }, (_, index) => (
            <Link
              scroll={false}
              key={index}
              href={`/?page=${index + 1}`}
              className={`rounded-md border px-4 py-2 ${
                page === index + 1
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              {index + 1}
            </Link>
          ))}

          {pagination?.hasNextPage && (
            <Link
              scroll={false}
              href={`/?page=${page + 1}`}
              className="rounded-md border px-4 py-2 hover:bg-muted"
            >
              Next
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
