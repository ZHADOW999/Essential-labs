import { getProducts, getCategories, slugify } from "../lib/products"
import { ProductCard } from "../components/product-card"
// import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import Link from "next/link"

export default function Home() {
  const products = getProducts()
  const categories = getCategories()

  return (
    <div className="space-y-16">
      <section className="relative bg-gradient-to-r from-primary to-primary-foreground py-20 text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Cutting-Edge Laboratory Equipment</h1>
            <p className="text-xl mb-8">
              Discover our extensive range of professional-grade equipment for all your research needs.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/products">Explore All Products</Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/placeholder.svg?height=600&width=1200&text=Laboratory+Background"
            alt="Laboratory background"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {categories.slice(0, 10).map((category) => (
            <Link key={category} href={`/categories/${slugify(category)}`} className="group">
              <div className="bg-secondary rounded-lg p-6 text-center transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                <h3 className="font-semibold mb-2">{category}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">Explore products</p>
              </div>
            </Link>
          ))}
        </div>
        {categories.length > 10 && (
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/categories">View All Categories</Link>
            </Button>
          </div>
        )}
      </section>

      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link href="/products" className="text-sm text-primary hover:underline">
            View All Products
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

