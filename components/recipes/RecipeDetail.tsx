"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Users, ChefHat, ArrowLeft, Heart, Share2, Printer, CheckCircle, Flame } from "lucide-react";
import { Recipe, getRelatedRecipes } from "@/lib/recipes-data";

interface Props {
  recipe: Recipe;
}

export default function RecipeDetail({ recipe }: Props) {
  const [isFavorited, setIsFavorited] = useState(false);
  const relatedRecipes = getRelatedRecipes(recipe.slug);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-[108px] h-[500px] md:h-[600px] overflow-hidden">
        <Image
          src={recipe.mainImage}
          alt={recipe.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/70 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <Link
              href="/yemek-tarifleri"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Tüm Tarifler
            </Link>
            
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-[#e74210] text-white text-sm font-medium rounded-full">
                  {recipe.category}
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur text-white text-sm font-medium rounded-full">
                  {recipe.difficulty}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {recipe.title}
              </h1>
              
              <p className="text-lg text-white/90 mb-6">
                {recipe.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{recipe.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{recipe.servings}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5" />
                  <span>{recipe.calories}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsFavorited(!isFavorited)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  isFavorited
                    ? "bg-red-50 text-red-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorited ? "fill-current" : ""}`} />
                {isFavorited ? "Favorilerde" : "Favorilere Ekle"}
              </button>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <Share2 className="w-5 h-5" />
                Paylaş
              </button>
              
              <button 
                onClick={() => window.print()}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Printer className="w-5 h-5" />
                Yazdır
              </button>
            </div>
            
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>Hazırlık: {recipe.prepTime}</span>
              <span className="text-gray-400">|</span>
              <span>Pişirme: {recipe.cookTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Recipe Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Main Image */}
            <div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src={recipe.mainImage}
                  alt={recipe.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Instructions */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <ChefHat className="w-6 h-6 text-[#e74210]" />
                Hazırlanışı
              </h2>
              
              <div className="space-y-6">
                {recipe.instructions.map((instruction) => (
                  <div key={instruction.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#e74210] to-[#ff7f50] text-white rounded-full flex items-center justify-center font-bold">
                      {instruction.step}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{instruction.title}</h3>
                      <p className="text-gray-700 mb-2">{instruction.description}</p>
                      
                      {instruction.tip && (
                        <div className="bg-[#FFE5B4]/20 border border-[#FFE5B4] rounded-lg p-3 text-sm">
                          <span className="font-medium text-[#e74210]">İpucu:</span> {instruction.tip}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-[#23632c]/5 to-[#2d7a3a]/5 rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-[#23632c]">Püf Noktaları</h3>
              <ul className="space-y-2">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#23632c] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Ingredients */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Malzemeler</h2>
              <p className="text-sm text-gray-600 mb-4">{recipe.servings}</p>
              
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                    <span className="text-gray-700">{ingredient.name}</span>
                    <span className="font-medium text-[#e74210]">{ingredient.amount}</span>
                  </li>
                ))}
              </ul>

              {/* Nutrition Facts */}
              <div className="mt-6 pt-6 border-t">
                <h3 className="text-lg font-bold mb-4">Besin Değerleri</h3>
                <p className="text-xs text-gray-600 mb-3">1 porsiyon için</p>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xl font-bold text-[#e74210]">{recipe.calories}</p>
                    <p className="text-xs text-gray-600">Kalori</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xl font-bold text-[#23632c]">{recipe.protein}</p>
                    <p className="text-xs text-gray-600">Protein</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xl font-bold text-[#e74210]">{recipe.fat}</p>
                    <p className="text-xs text-gray-600">Yağ</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-xl font-bold text-[#23632c]">{recipe.carbs}</p>
                    <p className="text-xs text-gray-600">Karbonhidrat</p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-6 pt-6 border-t">
                <h3 className="text-sm font-semibold mb-3">Etiketler</h3>
                <div className="flex flex-wrap gap-2">
                  {recipe.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Recipes */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Benzer Tarifler</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {relatedRecipes.map((relatedRecipe) => (
              <Link
                key={relatedRecipe.id}
                href={`/yemek-tarifleri/${relatedRecipe.slug}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={relatedRecipe.mainImage}
                    alt={relatedRecipe.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Heart className="w-6 h-6 text-white drop-shadow-lg hover:text-red-500 cursor-pointer transition-colors" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-[#e74210]">
                      {relatedRecipe.category}
                    </span>
                    <span className="text-sm text-gray-500">{relatedRecipe.calories}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {relatedRecipe.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {relatedRecipe.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {relatedRecipe.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {relatedRecipe.servings}
                      </span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      relatedRecipe.difficulty === "Kolay"
                        ? "bg-green-100 text-green-700"
                        : relatedRecipe.difficulty === "Orta"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}>
                      {relatedRecipe.difficulty}
                    </span>
                  </div>

                  {/* Besin Değerleri */}
                  {relatedRecipe.protein && (
                    <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500 flex gap-3">
                      <span>Protein: {relatedRecipe.protein}</span>
                      <span>Yağ: {relatedRecipe.fat}</span>
                      <span>Karb: {relatedRecipe.carbs}</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}