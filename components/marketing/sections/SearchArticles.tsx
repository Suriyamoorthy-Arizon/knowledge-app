"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Sparkles } from "lucide-react";

import { Input } from "@/components/ui/input";
import { getArticles } from "@/components/services/services";

interface Article {
  id: number;
  title: string;
  category: string;
}

export default function SearchArticles() {
  const [keyword, setKeyword] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [geminiAnswer, setGeminiAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (keyword.trim().length < 2) {
      setArticles([]);
      setGeminiAnswer("");
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);

        const response = await getArticles({
          search: keyword,
          page: 1,
          limit: 7,
        });

        if (response?.source === "database") {
          setArticles(response?.data || []);
          setGeminiAnswer("");
        } else if (response?.source === "gemini") {
          setArticles([]);
          setGeminiAnswer(response?.answer || "");
        } else {
          // Backward compatibility
          setArticles(response.data || []);
          setGeminiAnswer("");
        }
      } catch (error) {
        console.error("Search Error:", error);
        setArticles([]);
        setGeminiAnswer("");
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [keyword]);

  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search articles..."
        className="h-14 rounded-xl pl-12"
      />

      {keyword.trim().length >= 2 && (
        <div className="absolute z-50 mt-2 max-h-[450px] w-full overflow-y-auto rounded-xl border bg-background text-left shadow-lg">

          {loading && (
            <div className="p-4 text-sm text-muted-foreground">
              Searching...
            </div>
          )}

          {!loading &&
            articles.length === 0 &&
            !geminiAnswer && (
              <div className="p-4 text-sm text-muted-foreground">
                No articles found.
              </div>
            )}

          {!loading &&
            articles.map((article) => (
              <Link
                key={article.id}
                href={`/article/${article.id}`}
                className="block border-b p-4 transition-colors hover:bg-muted"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">
                      {article.title}
                    </h4>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {article.category}
                    </p>
                  </div>

                  <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                    {article.category}
                  </span>
                </div>
              </Link>
            ))}

          {!loading && geminiAnswer && (
            <div className="p-5">
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />

                <h4 className="font-semibold text-primary">
                  AI Answer
                </h4>
              </div>

              <div className="rounded-lg border bg-muted/40 p-4 text-sm leading-7 text-muted-foreground whitespace-pre-wrap">
                {geminiAnswer}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}