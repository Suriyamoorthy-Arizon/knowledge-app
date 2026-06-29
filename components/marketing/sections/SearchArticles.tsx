"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (keyword.trim().length < 2) {
      setArticles([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);

        const response = await getArticles({
          search: keyword,
          page: 1,
          limit: 10,
        });

        setArticles(response?.data || []);
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

      {keyword && (
        <div className="absolute z-50 mt-2 w-full rounded-xl border bg-background shadow-lg">
          {loading && <p className="p-4 text-sm">Searching...</p>}

          {!loading && articles.length === 0 && (
            <p className="p-4 text-sm">No articles found</p>
          )}

          {articles?.map((article) => (
            <Link
              key={article.id}
              href={`/article/${article.id}`}
              className="block border-b p-4 hover:bg-muted"
            >
              <div className="font-medium">{article.title}</div>

              <div className="text-xs text-muted-foreground">
                {article.category}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
