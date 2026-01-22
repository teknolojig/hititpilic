"use client";

import { Clock, Users, ChefHat } from "lucide-react";
import { useState } from "react";

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  cookingTime: string;
  servings: string;
  difficulty: string;
  category: string;
  ingredients: string[];
}

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
        <div className="w-full h-full flex items-center justify-center p-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4"></div>
            <p className="text-gray-500 text-sm">Tarif Görseli</p>
          </div>
        </div>
        <div className="absolute top-4 right-4 z-20">
          <span className="bg-primary-orange text-white px-3 py-1 rounded-full text-sm font-medium">
            {recipe.difficulty}
          </span>
        </div>
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-primary-green text-white px-3 py-1 rounded-full text-sm font-medium">
            {recipe.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {recipe.title}
        </h3>
        <p className="text-gray-600 mb-4">{recipe.description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.cookingTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{recipe.servings}</span>
          </div>
        </div>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-primary-orange hover:text-orange-700 font-semibold transition-colors"
        >
          {showDetails ? "Gizle" : "Malzemeleri Göster"}
        </button>

        {showDetails && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <ChefHat className="w-4 h-4" />
              Malzemeler:
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary-green">•</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}