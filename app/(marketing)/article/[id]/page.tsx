import { getArticleById } from "@/components/services/services";

interface Props {
  params: {
    id: string;
  };
}

export default async function ArticleDetails({ params }: Props) {
  const { id } = await params;
  const articleRes = await getArticleById(Number(id));
  const article = articleRes?.data;

  return (
    <div className="mx-auto max-w-4xl p-8">
      <h1 className="text-3xl font-bold">{article?.title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{article?.category}</p>
      <div
        className="prose mt-6 max-w-none"
        dangerouslySetInnerHTML={{
          __html: article?.description,
        }}
      />
    </div>
  );
}
