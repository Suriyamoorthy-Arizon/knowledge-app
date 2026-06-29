import { Hero } from "@/components/marketing/sections/hero"
import { Features } from "@/components/marketing/sections/features"

interface Props {
  searchParams: Promise<{
    page?: string;
  }>;
}
export default async function HomePage({ searchParams }: Props) {
  const params = await searchParams;
  const page = Number(params.page || 1);

  return (
    <>
      <Hero />
      <Features page={page} />
    </>
  );
}
