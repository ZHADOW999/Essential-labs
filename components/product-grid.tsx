import Link from "next/link"
import { Card, CardContent, CardFooter } from "../components/ui/card"
import { Button } from "../components/ui/button"
import type { Product } from "../lib/types"

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id}>
          <CardContent className="p-4">
            <div className="aspect-square relative mb-4">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="object-cover rounded-lg" />
            </div>
            <h3 className="font-semibold mb-2">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.description}</p>
          </CardContent>
          <CardFooter className="p-4">
            <div className="flex items-center justify-between w-full">
              <span className="font-bold">${product.price}</span>
              <Link href={`/products/${product.id}`}>
                <Button>View Details</Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

