import { getProduct } from "../../../lib/products"
import { notFound } from "next/navigation"
import { Badge } from "../../../components/ui/badge"
import { ContactForm } from "../../../components/contact-form"
import Image from "next/image"



export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = getProduct(resolvedParams.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square relative">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="object-cover w-full h-full rounded-lg"
            width={100}
            height={100}
          />
        </div>
        <div className="space-y-6">
          <div>
            <Badge className="mb-2">{product.category}</Badge>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-bold mt-2">${product.price.toLocaleString()}</p>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div>
            <h3 className="font-semibold mb-2">Specifications:</h3>
            <ul className="list-disc list-inside space-y-1">
              {product.specifications.map((spec, index) => (
                <li key={index} className="text-muted-foreground">
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          <ContactForm productName={product.name} />
        </div>
      </div>
    </div>
  )
}

