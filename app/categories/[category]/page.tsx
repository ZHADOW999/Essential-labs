import { getProductsByCategory, getCategories, slugify, deslugify } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

// Correct `generateStaticParams` function to return an array of objects with `params`
export async function generateStaticParams() {
  const categories = getCategories();

  return categories.map((category) => ({
    category: slugify(category),
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  console.log("Rendering CategoryPage with params:", params);

  const { category } = params;
  const decodedCategory = deslugify(category);
  console.log("Decoded category:", decodedCategory);

  const products = getProductsByCategory(decodedCategory);

  if (products.length === 0) {
    console.log("No products found for category:", decodedCategory);
    notFound();
  }

  const categoryName = products[0].category;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">{categoryName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// import { getProductsByCategory, getCategories, slugify, deslugify } from "@/lib/products"
// import { ProductCard } from "@/components/product-card"
// import { notFound } from "next/navigation"

// interface CategoryPageProps {
//   params: {
//     category: string
//   }
// }

// export function generateStaticParams() {
//   const categories = getCategories()
//   return categories.map((category) => ({
//     category: slugify(category),
//   }))
// }

// export default async function  CategoryPage ({ params }: CategoryPageProps) {
//   console.log("Rendering CategoryPage with params:", params)

//   const { category } = params
//   const decodedCategory = deslugify(category)
//   console.log("Decoded category:", decodedCategory)

//   const products = getProductsByCategory(decodedCategory)

//   if (products.length === 0) {
//     console.log("No products found for category:", decodedCategory)
//     notFound()
//   }

//   const categoryName = products[0].category

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6 capitalize">{categoryName}</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   )
// }

