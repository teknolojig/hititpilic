"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Users, ChefHat, Search, Filter, Heart, BookOpen, Flame } from "lucide-react";
import { recipes } from "@/lib/recipes-data";

const categories = [
  { id: "all", name: "Tümü", icon: BookOpen },
  { id: "ana-yemek", name: "Ana Yemek", icon: ChefHat },
  { id: "izgara", name: "Izgara", icon: Flame },
  { id: "atistirmalik", name: "Atıştırmalık", icon: Heart },
];

const difficulties = ["Tümü", "Kolay", "Orta", "Zor"];

export default function YemekTarifleriClient() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Tümü");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory =
      selectedCategory === "all" ||
      recipe.category.toLowerCase() === selectedCategory.replace("-", " ");
    const matchesDifficulty =
      selectedDifficulty === "Tümü" || recipe.difficulty === selectedDifficulty;
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-[#23632c] to-[#2d7a3a]">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <ChefHat className="w-12 h-12 text-white" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Yemek Tarifleri
              </h1>
            </div>
            <p className="text-xl text-white/90 leading-relaxed">
              Hitit Piliç ürünleri ile hazırlayabileceğiniz birbirinden lezzetli,
              pratik ve sağlıklı yemek tariflerini keşfedin.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Tarif ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23632c] focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                        selectedCategory === category.id
                          ? "bg-gradient-to-br from-[#23632c] to-[#2d7a3a] text-white"
                          : "bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {category.name}
                    </button>
                  );
                })}
              </div>

              {/* Difficulty */}
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23632c] focus:border-transparent"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    Zorluk: {difficulty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* All Recipes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Tüm Tarifler</h2>
          {filteredRecipes.length === 0 ? (
            <div className="text-center py-12">
              <ChefHat className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">
                Aradığınız kriterlere uygun tarif bulunamadı.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe) => (
                <Link
                  key={recipe.id}
                  href={`/yemek-tarifleri/${recipe.slug}`}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={recipe.mainImage}
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
                          {recipe.time}
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
                    
                    {recipe.protein && (
                      <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500 flex gap-3">
                        <span>Protein: {recipe.protein}</span>
                        <span>Yağ: {recipe.fat}</span>
                        <span>Karb: {recipe.carbs}</span>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#23632c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Tariflerinizi Bizimle Paylaşın!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Hitit Piliç ürünleri ile hazırladığınız özel tarifleri bizimle paylaşın,
              diğer yemek severlere ilham verin.
            </p>
            <Link
              href="/bize-sor"
              className="inline-block bg-white text-[#23632c] font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Tarif Gönder
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}