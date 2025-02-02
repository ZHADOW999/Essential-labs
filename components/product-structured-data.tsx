import type { Product } from "@/lib/products"

interface ProductStructuredDataProps {
  product: Product
}

export function ProductStructuredData({ product }: ProductStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    sku: product.id,
    mpn: product.id,
    brand: {
      "@type": "Brand",
      name: "LabEquip",
    },
    offers: {
      "@type": "Offer",
      url: `https://yourdomain.com/products/${product.id}`,
      priceCurrency: "USD",
      price: product.price,
      availability: "https://schema.org/InStock",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

