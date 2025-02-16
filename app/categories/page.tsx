import { getCategories, slugify } from "../../lib/products"
import Link from "next/link"
import { Card,CardContent } from "../../components/ui/card"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://www.essentiallabinc.com/'),
    alternates:{
      canonical: '/categories',
      // languages:{
      //   'en-US': '/en-US/categories',
      //   'de-DE': '/de-DE/categories',
      // }
    },
    title: " Categories | Essential Laboratory Inc.",
    description: "Explore all product categories",
    keywords: "Essential Labs, Categories, Products, Tools, Resources",
    openGraph:{
      title: "Categories | Essential Laboratory Inc.",
      description: "Explore all product categories",
      type: "website",
      url: "https://essentiallabinc.com/categories",
      siteName: "Essential Laboratory Inc.",
      images: [
        {
          url: "https://www.essentiallabinc.com/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Essential Laboratory Inc."
        }
      ]
    }
  }
}

export default function CategoriesPage() {
  const categories = getCategories()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {categories.map((category) => (
          <Link href={`/categories/${slugify(category)}`} key={category}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold">{category}</h2>
                <p className="text-sm text-muted-foreground mt-2">Explore products</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

