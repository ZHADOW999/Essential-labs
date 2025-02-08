import { getProduct } from "../../../lib/products"
import { notFound } from "next/navigation"
import { Badge } from "../../../components/ui/badge"
import { ContactForm } from "../../../components/contact-form-product"
import Image from "next/image"
// import { Metadata } from "../../../hooks/useMetadata"
import { Metadata } from "next"
import { Breadcrumbs, type BreadcrumbItem } from "@/components/breadcrumbs"



interface ProductProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductProps): Promise<Metadata> {
  const resolvedParams =  await params;
  const product = getProduct(resolvedParams.id)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title:  ` ${product?.name} | Essential Laboratory Inc.`,
    description: product?.description,
    openGraph: {
      title: product?.name,
      description: product?.description,
      type: "website",
      url: `https://essential-labs.vercel.app/products/${product.id}`,
      images: [
        {
          url: product?.image || "/placeholder.svg",
          width: 800,
          height: 600,
          alt: product?.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [product.image || "/placeholder.svg"],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = getProduct(resolvedParams.id)

  if (!product) {
    notFound()
  }

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Products", href: "/products" },
    { label: product.category, href: `/categories/${product.category.toLowerCase()}` },
    { label: product.name, href: `/products/${product.id}` },
  ]
  return (
<>
      {/* <Metadata
        title={product.name}
        description={product.description}
        image={product.image}
        url={`https://www.essentiallabs.com/products/${product.id}`}
      /> */}

      <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />
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

