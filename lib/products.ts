import productsData from "../app/data/products.json"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  specifications: string[]
}

export const products: Product[] = productsData

export function getProducts() {
  return products
}

export function getProduct(id: string) {
  return products.find((product) => product.id === id)
}

export function getCategories() {
  return Array.from(new Set(products.map((product) => product.category)))
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
}

export function searchProducts(query: string) {
  const lowercaseQuery = query.toLowerCase().trim()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery),
  )
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
}

export function deslugify(slug: string) {
  return slug.replace(/-/g, " ")
}

