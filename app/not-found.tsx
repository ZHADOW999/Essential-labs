import Link from "next/link"

export default function NotFound() {
  console.log("Rendering NotFound page")
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Not Found</h2>
      <p className="mb-4">Could not find the requested resource</p>
      <p className="mb-4">
        If you're seeing this page for a category, it might be because:
        <ul className="list-disc list-inside mt-2">
          <li>The category doesn't exist</li>
          <li>There are no products in this category</li>
          <li>There's an issue with the URL format</li>
        </ul>
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        Return Home
      </Link>
    </div>
  )
}

