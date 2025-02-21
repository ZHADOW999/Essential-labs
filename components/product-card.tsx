import Link from "next/link"
import { Card, CardContent, CardFooter } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import type { Product } from "../lib/products"
import Image from "next/image"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-0">
        <div className="aspect-square relative">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="object-cover w-full h-full transition-transform hover:scale-105"
            fill
            placeholder="blur"
            // sizes="100vw"
          />
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">{product.category}</Badge>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 border-t flex items-center justify-between">
        <span className="font-bold text-lg">${product.price.toLocaleString()}</span>
          <Button className="!p-0" variant="outline">

        <Link className="px-4 py-2" href={`/products/${product.id}`}>
        View Details
        </Link>
          </Button>
      </CardFooter>
    </Card>
  )
}

