import { getProducts, getCategories, slugify } from "@/lib/products"
import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://www.essentiallabinc.com" // Replace with your actual domain

  const products = getProducts()
  const categories = getCategories()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/products</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/categories</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/terms</loc>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${baseUrl}/privacy-policy</loc>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  ${categories
    .map(
      (category) => `
  <url>
    <loc>${baseUrl}/categories/${slugify(category)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  `,
    )
    .join("")}
  ${products
    .map(
      (product) => `
  <url>
    <loc>${baseUrl}/products/${product.id}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  `,
    )
    .join("")}
</urlset>`

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  })
}

// This route will be available at /sitemap.xml