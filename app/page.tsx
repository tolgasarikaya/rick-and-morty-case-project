import { CharacterGrid } from "@/components/character-grid";
import { getCharacters } from "@/services/api";

export const metadata = {
  title: "Rick and Morty Characters",
  description: "Browse and filter Rick and Morty characters",
};

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const data = await getCharacters(searchParams);
  return <CharacterGrid initialData={data} />;
}
