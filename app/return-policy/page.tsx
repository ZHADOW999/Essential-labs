import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Return & Replacement Policy | Essential Laboratory Inc",
  description: "Learn about our return and replacement policies for laboratory equipment and supplies.",
}

export default function ReturnPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Return & Replacement Policy</h1>
      <h2 className="text-2xl font-semibold mb-4">Our Guarantee</h2>
      <p className="mb-4">
        Your satisfaction is guaranteed when you order from Essential Laboratory Inc Tools! If you decide not to use a
        product, simply return it to us within 60 days of purchase. See details below.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
      <p className="mb-4">
        Please complete this{" "}
        <Link href="#" className="text-primary hover:underline">
          Return Form
        </Link>{" "}
        as the first step in your return process. For questions regarding a return, please contact us via phone
        (786-632-4122) or email at essentiallabinc@groupmail.com. We will be delighted to assist you!
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Items, including all components, must be returned in new condition and within 60 days.</li>
        <li>Returned items must be unused and with the original packaging.</li>
        <li>
          Items like microscopes must be packaged in the original product box and then placed into a shipping box.
        </li>
        <li>Damage or shipping labels on the product packaging will incur a 20% restocking fee.</li>
        <li>
          If you receive a damaged or incorrect item, please let us know within 15 days of receiving your order, and we
          will do everything we can to resolve the issue promptly.
        </li>
        <li>Original shipping charges are non-refundable.</li>
        <li>
          You are responsible for the shipping cost. For more expensive items, we recommend insuring your package.
        </li>
        <li>
          These items cannot be returned: live items (SKU begins with LD), dropped shipped items (agar plates and algae
          beads), or restricted chemicals (SKU begins with UN).
        </li>
      </ul>
      <p className="mb-4">
        Please include the packing slip included in the original shipment or provide the Return Form with the order
        number and items you are returning listed.
      </p>
      <p className="mb-4">
        Please send all returns to:
        <br />
        Essential Lab Inc
        <br />
        6900 Tpc Dr,
        <br />
        Orlando, FL 32822
      </p>
      <h2 className="text-2xl font-semibold mb-4">Replacement Policy</h2>
      <p>
        Replacements for missing or damaged items will be shipped at no additional cost using the same shipping method
        from your order.
      </p>
    </div>
  )
}

