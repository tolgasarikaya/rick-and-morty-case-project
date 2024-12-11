"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

const FILTER_OPTIONS = {
  status: ["", "Alive", "Dead", "Unknown"],
  gender: ["", "Male", "Female", "Genderless", "Unknown"],
} as const;

export function ClientFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const status = searchParams.get("status") || "";
  const gender = searchParams.get("gender") || "";

  const handleFilterChange = (key: "status" | "gender", value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <div className="flex flex-col">
        <label className="mb-2 text-gray-700 font-medium">Status</label>
        <select
          value={status}
          onChange={(e) => handleFilterChange("status", e.target.value)}
          className="p-2 border rounded-md min-w-[200px]"
          disabled={isPending}
        >
          {FILTER_OPTIONS.status.map((statusOption) => (
            <option key={statusOption} value={statusOption.toLowerCase()}>
              {statusOption || "All Status"}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="mb-2 text-gray-700 font-medium">Gender</label>
        <select
          value={gender}
          onChange={(e) => handleFilterChange("gender", e.target.value)}
          className="p-2 border rounded-md min-w-[200px]"
          disabled={isPending}
        >
          {FILTER_OPTIONS.gender.map((genderOption) => (
            <option key={genderOption} value={genderOption.toLowerCase()}>
              {genderOption || "All Genders"}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
