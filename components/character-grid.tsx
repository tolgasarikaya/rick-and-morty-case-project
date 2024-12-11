import { Suspense } from "react";
import { ClientFilters } from "./client-filters";
import { CharacterList } from "./character-list";
import { LoadingSkeleton } from "./loading-skeleton";
import { ApiResponse } from "@/services/types";

export function CharacterGrid({ initialData }: { initialData: ApiResponse }) {
  return (
    <div>
      <ClientFilters />
      <Suspense fallback={<LoadingSkeleton />}>
        <CharacterList characters={initialData.results} />
      </Suspense>
    </div>
  );
}
