import { Suspense, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { searchProducts, getCategories, type Product } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<Product[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const categories = getCategories()

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const searchResults = searchProducts(query)
      setResults(searchResults)
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [query])

  const filteredResults = selectedCategory
    ? results.filter((product) => product.category === selectedCategory)
    : results

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Search Products</h1>

        <div className="mb-8">
          <Input
            type="search"
            placeholder="Search by name or category..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="max-w-md"
          />
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Filter by Category:</h2>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? "secondary" : "outline"}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "secondary" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {query && (
          <p className="mb-4 text-muted-foreground">
            Showing {filteredResults.length} results for "{query}"{selectedCategory && ` in ${selectedCategory}`}
          </p>
        )}

        {filteredResults.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </Suspense>
  )
}
