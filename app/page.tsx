import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="relative bg-gradient-to-r from-primary to-primary-foreground py-20 text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Essential Laboratory, Inc.</h1>
            <p className="text-xl mb-8">
              Developing, manufacturing, and delivering top-quality educational and laboratory products since 2019.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/products">Explore Our Products</Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/hero-image.jpg"
            alt="Laboratory background"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Essential Laboratory, Inc. develops, manufactures and delivers top-quality educational and laboratory
              products for distributors around the world. From our headquarters in Orlando, Florida, we have reliably
              served the scientific and laboratory community since 2019.
            </p>
            <h3 className="text-2xl font-semibold mb-4">The Essential Difference</h3>
            <p className="mb-4">
              Essential Lab sells its products exclusively through a network of authorized dealers, which today
              encompasses an expansive network across five continents. This singular focus allows us to thoughtfully
              expand inventory while remaining nimble and on the cutting edge of product development.
            </p>
            <p>
              Essential Lab five-step quality assurance program guarantees that every piece of equipment customers
              receive has met rigorous standards from the point of production to packaging and delivery. This, combined
              with routine analyses of our processes and feedback from the field, empowers us to continually raise the
              bar for quality and enhance the customer experience.
            </p>
          </div>
          <div>
            <img
              src="/placeholder.svg?height=400&width=600&text=Company+Image"
              alt="Essential Laboratory, Inc."
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Meet Our Co-founder</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/placeholder.svg?height=400&width=400&text=Deonna+Purrazzo"
              alt="Deonna Purrazzo, Co-founder of Essential Lab Inc"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="mb-4">
              My name is Deonna Purrazzo, and I am the co-founder of Essential Lab Inc, a leading distributor of
              premium laboratory equipment kits. With a passion for science and a commitment to excellence, we provide
              high-quality, reliable, and affordable laboratory solutions to meet the diverse needs of educational
              institutions, research facilities, and hobbyists.
            </p>
            <p className="mb-4">
              It's been 6 years since that first laboratory equipment kits fair project, when I first felt that thrill
              of selling authentic laboratory equipment kits to some rural areas in Africa and Asia. It is my wish that
              we can help people that live in rural areas across the globe of every age and in every country to have
              authentic laboratory equipment kits.
            </p>
            <p className="mb-4">
              At Essential Lab Inc, we understand the importance of precision and accuracy in scientific endeavors.
              That's why we meticulously curate our kits to include only the best tools and instruments, ensuring that
              our customers can conduct their experiments with confidence and ease.
            </p>
            <p>
              Thank you for considering Essential Lab Inc as your trusted partner in scientific exploration. We look
              forward to the possibility of working together.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Commitment</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Over nearly 6 years in business, our close dealer relationships have allowed us to stay in touch with
                how customers' priorities evolve, and to evolve along with them. In today's fast-paced world, your
                customers have come to expect not only excellent quality at competitive prices, but also prompt
                delivery.
              </p>
              <p className="mb-4">
                Essential Lab strategic investments in capacity expansion and supply chain enhancement—both at home and
                abroad—ensures our dealers have access to the inventory they need, when they need it.
              </p>
              <p>
                As we grow, the core pillars of our company remain unchanged; everything we do is rooted in our desire
                to be the best supply partner in the industry. It is a privilege to serve this community, and we look
                forward to supporting your business goals for decades to come.
              </p>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600&text=Commitment+Image"
                alt="Our Commitment"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Premium Laboratory Equipment Kits</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Why Choose Our Kits?</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Comprehensive Selection</li>
              <li>Superior Quality</li>
              <li>User-Friendly</li>
              <li>Versatile Applications</li>
              <li>Affordable Pricing</li>
            </ul>
            <h3 className="text-2xl font-semibold mb-4">What's Inside?</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Glassware: Beakers, flasks, test tubes, and more</li>
              <li>Measuring Tools: Graduated cylinders, pipettes, and balances</li>
              <li>Microscopy: High-resolution microscopes and slides</li>
              <li>Safety Gear: Lab coats, gloves, and goggles</li>
              <li>Accessories: Stirrers, clamps, and stands</li>
            </ul>
            {/* <Button asChild size="lg">
              <Link href="/products">Explore Our Kits</Link>
            </Button> */}
          </div>
          <div>
            <img
              src="/placeholder.svg?height=400&width=600&text=Laboratory+Kit+Image"
              alt="Premium Laboratory Equipment Kit"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Scientific Revolution</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Elevate your experiments and discoveries with our laboratory equipment kits. Whether you're a student,
            educator, or enthusiast, our kits provide the tools you need to explore the wonders of science. Order yours
            today and embark on a journey of innovation and discovery!
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/products">Order Your Kit Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

