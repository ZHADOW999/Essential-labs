import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL('https://www.essentiallabinc.com/'),
  alternates:{
    canonical:'/privacy-policy',
  },
  title: "Privacy Policy | Essential Laboratory Inc",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | Essential Laboratory Inc",
    description: "Read our privacy policy to understand how we collect, use, and protect your personal information.",
    type: "website",
    url: "https://www.essentiallabinc.com/privacy-policy",
    siteName: "Essential Laboratory Inc",
    images:[
      {
        url: "https://www.essentiallabinc.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Essential Laboratory Inc."
      }
    ]
  }
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        This privacy policy has been compiled to better serve those who are concerned with how their 'Personally
        Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information
        security, is information that can be used on its own or with other information to identify, contact, or locate a
        single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear
        understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in
        accordance with our website.
      </p>
      <h2 className="text-2xl font-semibold mb-4">
        What personal information do we collect from the people that visit our blog, website or app?
      </h2>
      <p className="mb-4">
        When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address,
        mailing address, phone number, credit card information or other details to help you with your experience.
      </p>
      <h2 className="text-2xl font-semibold mb-4">When do we collect information?</h2>
      <p className="mb-4">
        We collect information from you when you register on our site, place an order, subscribe to a newsletter,
        respond to a survey, fill out a form, Use Live Chat, Open a Support Ticket or enter information on our site.
      </p>
      <h2 className="text-2xl font-semibold mb-4">How do we use your information?</h2>
      <p className="mb-4">
        We may use the information we collect from you when you register, make a purchase, sign up for our newsletter,
        respond to a survey or marketing communication, surf the website, or use certain other site features in the
        following ways:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          To personalize your experience and to allow us to deliver the type of content and product offerings in which
          you are most interested.
        </li>
        <li>To improve our website in order to better serve you.</li>
        <li>To allow us to better service you in responding to your customer service requests.</li>
        <li>To administer a contest, promotion, survey or other site feature.</li>
        <li>To quickly process your transactions.</li>
        <li>To ask for ratings and reviews of services or products</li>
        <li>To follow up with them after correspondence (live chat, email or phone inquiries)</li>
      </ul>
      <p>
        For the full privacy policy, please visit{" "}
        <a
          href="https://newlifescientific.com/pages/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          New Life Scientific Privacy Policy
        </a>
        .
      </p>
    </div>
  )
}

