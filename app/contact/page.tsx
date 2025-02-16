import { ContactForm } from "../../components/contact-form"
import { Metadata } from "next"


export const metadata: Metadata = {
  metadataBase: new URL('https://www.essentiallabinc.com/'),
  alternates:{
    canonical: '/contact',
    // languages:{
    //   'en-US': '/en-US/contact',
    //   'de-DE': '/de-DE/contact',
    //}
  },
  title: "Contact Us | Essential Laboratory Inc",
  description: "Get in touch with us",
  keywords: "Essential Labs, Contact, Support",
  openGraph:{
    title: "Contact Us | Essential Laboratory Inc",
    description: "Get in touch with us",
    type: "website",
    url: "https://essentiallabinc.com/contact",
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

export default function ContactPage() {

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-center mb-8">
          Have questions about our products or need assistance? We're here to help! Fill out the form below, and our
          team will get back to you as soon as possible.
        </p>
        <ContactForm />
      </div>
    </div>
  )
}

