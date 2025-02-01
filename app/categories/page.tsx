import { getCategories, slugify } from "../../lib/products"
import Link from "next/link"
import { Card,CardContent } from "../../components/ui/card"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Essential Labs | Categories",
    description: "Explore all product categories",
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

