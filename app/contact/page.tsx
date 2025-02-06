import { ContactForm } from "../../components/contact-form"

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

