"use client";
import UsersList from "@/components/UsersList";
import { useState } from "react";

export default function Page() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
      <h1 className="col-span-full text-4xl font-semibold text-center">Users List</h1>
      <div className="col-span-full">
        <input
          type="text"
          value={searchInput}
          className="w-full text-2xl font-semibold rounded-md border-gray-200 border-3 px-1"
          placeholder="Search by name..."
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <UsersList searchInput={searchInput} />
    </main>
  );
}
