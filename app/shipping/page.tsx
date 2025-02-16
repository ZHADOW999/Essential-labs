import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shipping Information | Essential Laboratory Inc",
  description: "Learn about our shipping policies and international shipping options.",
  keywords: "Essential Labs, Shipping, International Shipping, Delivery",
  openGraph: {
    title: "Shipping Information | Essential Laboratory Inc",
    description: "Learn about our shipping policies and international shipping options.",
    type: "website",
    url: "https://essentiallabinc.com/shipping",
    siteName: "Essential Laboratory Inc",
    images: [
      {
        url: "https://www.essentiallabinc.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Essential Laboratory Inc"
      }
    ]
  }

}

export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shipping</h1>
      <p className="mb-4">
        We know it's important that your orders arrive on time! While there are factors we can't control once a package
        leaves our warehouse, we can promise you that we'll work hard to ensure your order is packaged with care and
        shipped out our doors in a timely manner.
      </p>
      <h2 className="text-2xl font-semibold mb-4">International Shipping</h2>
      <p className="mb-4">
        Essential Laboratory Inc currently only ships to Asia, Africa, Europe, Middle East and Canada. If you have a
        need for delivery to other countries, we use FedEx Shipping Services.
      </p>
      <p className="mb-4">
        Note that some of our products may be considered hazardous materials or may otherwise not be allowed for
        delivery in some countries. In general, if there are shipping restrictions on US shipping listed on the product
        page, there are likely to be restrictions for shipping internationally.
      </p>
      <p>
        The customer is responsible for determining shipping eligibility as well as taxes, duties, and requirements for
        passing through customs.
      </p>
    </div>
  )
}

