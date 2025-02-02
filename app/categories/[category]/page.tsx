import { getProductsByCategory, getCategories, slugify, deslugify } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/breadcrumbs"




export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const decodedCategory = deslugify(category);
  const products = getProductsByCategory(decodedCategory)

  if (products.length === 0) {
    return {
      title: "Category Not Found",
    }
  }

  const categoryName = products[0].category

  return {
    title: `Essential Labs | ${categoryName}`,
    description: `Explore our range of ${categoryName?.toLowerCase()} laboratory equipment and supplies.`,
    openGraph: {
      title: `${categoryName} - LabEquip`,
      type: "website",
      url: `https://essential-labs.vercel.app/categories/${category}`,
      description: `Explore our range of ${categoryName?.toLowerCase()} laboratory equipment and supplies.`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryName} - LabEquip`,
      description: `Explore our range of ${categoryName?.toLowerCase()} laboratory equipment and supplies.`,
    },
  }
}


interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>
}

// ✅ Correct the return format of `generateStaticParams`
export async function generateStaticParams() {
  const categories = getCategories(); // Ensure `getCategories` is awaited if async

  return categories.map((category) => ({
    params: { category: slugify(category) }, // Wrap in `params`
  }));
}



export default async function CategoryPage({ params }: CategoryPageProps) {
  console.log("Rendering CategoryPage with params:", params);

  const { category } = await params;
  const decodedCategory = deslugify(category);
  console.log("Decoded category:", decodedCategory);

  const products =  getProductsByCategory(decodedCategory); // Await async data fetching

  if (!products || products.length === 0) {
    console.log("No products found for category:", decodedCategory);
    notFound();
  }

  const categoryName = products[0].category;

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Categories", href: "/categories" },
    { label: categoryName, href: `/categories/${category}` },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />
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

