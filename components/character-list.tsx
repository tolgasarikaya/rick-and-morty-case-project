import Image from "next/image";
import { Character } from "@/services/types";

export function CharacterList({ characters }: { characters: Character[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
      {characters.map((character) => (
        <div
          key={character.id}
          className="bg-white cursor-pointer rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
        >
          <div className="relative h-64 w-full">
            <Image
              src={character.image}
              alt={character.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority={character.id <= 4}
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
            <div className="space-y-1">
              <p className="text-gray-600">Status: {character.status}</p>
              <p className="text-gray-600">Species: {character.species}</p>
              <p className="text-gray-600">Gender: {character.gender}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
