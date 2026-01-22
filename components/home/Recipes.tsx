"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, Users, ChefHat, ArrowRight, Heart } from "lucide-react";

const recipes = [
  {
    id: 1,
    title: "Fırında Baharatlı But",
    category: "Ana Yemek",
    description: "Özel baharat karışımı ile marine edilmiş lezzetli tavuk but",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&auto=format&fit=crop&q=60",
    cookingTime: "45 dk",
    servings: "4 Kişilik",
    difficulty: "Kolay",
    calories: "280 kcal",
  },
  {
    id: 2,
    title: "Izgara Soslu Kanat",
    category: "Izgara",
    description: "Mangal tadında, özel soslu ızgara tavuk kanadı",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&auto=format&fit=crop&q=60",
    cookingTime: "30 dk",
    servings: "6 Kişilik",
    difficulty: "Orta",
    calories: "220 kcal",
  },
  {
    id: 3,
    title: "Kremalı Mantarlı Tavuk",
    category: "Ana Yemek",
    description: "Krema ve taze mantarlarla pişirilmiş yumuşak tavuk göğsü",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&auto=format&fit=crop&q=60",
    cookingTime: "35 dk",
    servings: "4 Kişilik",
    difficulty: "Orta",
    calories: "290 kcal",
  },
];

export default function Recipes() {

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Lezzetli <span className="text-[#e74210]">Tarifler</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hitit Piliç ürünleri ile hazırlayabileceğiniz birbirinden lezzetli
            tarifler. Aileniz ve sevdiklerinizle keyifle tüketebilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              href="/yemek-tarifleri/firinda-baharatli-but"
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Heart className="w-6 h-6 text-white drop-shadow-lg hover:text-red-500 cursor-pointer transition-colors" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-[#e74210]">
                    {recipe.category}
                  </span>
                  <span className="text-sm text-gray-500">{recipe.calories}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {recipe.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {recipe.cookingTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {recipe.servings}
                    </span>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      recipe.difficulty === "Kolay"
                        ? "bg-green-100 text-green-700"
                        : recipe.difficulty === "Orta"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {recipe.difficulty}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/yemek-tarifleri" 
            className="inline-flex items-center justify-center bg-[#23632c] hover:bg-green-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            Tüm Tarifleri Görüntüle
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}