import { ApiResponse } from "./types";

const BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacters(searchParams: {
  [key: string]: string | undefined;
}): Promise<ApiResponse> {
  const apiUrl = new URL(`${BASE_URL}/character/`);
  const params = await Promise.resolve(searchParams);

  if (params.status) {
    apiUrl.searchParams.append("status", params.status);
  }
  if (params.gender) {
    apiUrl.searchParams.append("gender", params.gender);
  }

  const response = await fetch(apiUrl, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }

  return response.json();
}
