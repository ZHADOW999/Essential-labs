import { getProducts } from "../../lib/products"
import { ProductCard } from "../../components/product-card"
import { Metadata } from "next"
import { Breadcrumbs, BreadcrumbItem } from "@/components/breadcrumbs"


export async function generateMetadata(): Promise<Metadata> {
  return {
    title:  "Products | Essential Laboratory Inc.",
    description: "Essential Labs is a collection of tools and resources for developers",
    keywords: "Essential Labs, Products, Tools, Resources",

    openGraph: {
      title: "Products | Essential Laboratory Inc.",
      description: "Essential Labs is a collection of tools and resources for developers",
      type: "website",
      url: "https://www.essentiallabinc.com/products",
      siteName: "Essential Laboratory Inc.",
      images: [
        {
          url: "https://www.essentiallabinc.com/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Essential Laboratory Inc."
        }
      ]
    },
  }
  
}
export default function ProductsPage() {
  const products = getProducts()

  // Group products by category
  const productsByCategory = products.reduce(
    (acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = []
      }
      acc[product.category].push(product)
      return acc
    },
    {} as Record<string, typeof products>,
  )

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Products", href: "/products" },
  ]

  // Sort categories alphabetically
  const sortedCategories = Object.keys(productsByCategory).sort()

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      {sortedCategories.map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productsByCategory[category].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

