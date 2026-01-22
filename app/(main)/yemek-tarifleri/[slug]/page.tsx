import { Metadata } from "next";
import RecipeDetail from "@/components/recipes/RecipeDetail";
import { getRecipeBySlug, recipes } from "@/lib/recipes-data";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  
  if (!recipe) {
    return {
      title: "Tarif Bulunamadı - Hitit Piliç",
    };
  }

  return {
    title: `${recipe.title} - Hitit Piliç Yemek Tarifleri`,
    description: recipe.description,
  };
}

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export default async function RecipeDetailPage({ params }: Props) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  return <RecipeDetail recipe={recipe} />;
}