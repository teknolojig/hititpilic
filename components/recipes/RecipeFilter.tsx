"use client";

import { useState } from "react";

interface RecipeFilterProps {
  categories: string[];
}

export default function RecipeFilter({ categories }: RecipeFilterProps) {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-primary-orange text-white shadow-lg transform scale-105"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}