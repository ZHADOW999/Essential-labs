import { getProduct } from "../../../lib/products"
import { notFound } from "next/navigation"
import { Badge } from "../../../components/ui/badge"
import { ContactForm } from "../../../components/contact-form"
import Image from "next/image"
// import { Metadata } from "../../../hooks/useMetadata"
import { Metadata } from "next"


interface ProductProps {
  params: { id: string };
}

export async function generateMetadata({ params }: ProductProps): Promise<Metadata> {
  const resolvedParams =  params;
  const product = getProduct(resolvedParams.id)

  return {
    title: `Essential Labs | ${product?.name}`,
    description: product?.description,
    openGraph: {
      title: product?.name,
      description: product?.description,
      url: `https://www.essentiallabs.com/products/${product?.id}`,
      images: [{ url: product?.image || "/placeholder.svg" }],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = getProduct(resolvedParams.id)

  if (!product) {
    notFound()
  }

  return (
<>
      {/* <Metadata
        title={product.name}
        description={product.description}
        image={product.image}
        url={`https://www.essentiallabs.com/products/${product.id}`}
      /> */}

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-square relative">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="object-cover w-full h-full rounded-lg"
              width={0}
              height={0}
              sizes="100vw"
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
</>
  )
}

