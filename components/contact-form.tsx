"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Toast } from "@/components/ui/useToast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toastMessage, setToastMessage] = useState<{ title: string; description: string } | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null) // Use ref to reset form safely

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch("https://formspree.io/f/xpwqlban", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setToastMessage({
          title: "Message Sent",
          description: "We've received your message and will get back to you soon.",
        })
        formRef.current?.reset() // Reset form after successful submission
      } else {
        setToastMessage({
          title: "Submission Failed",
          description: "Something went wrong. Please try again later.",
        })
      }
    } catch (error) {
      setToastMessage({
        title: "Network Error",
        description: "Failed to send your message. Please check your internet connection.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input name="name" type="text" placeholder="Your Name" required />
        </div>
        <div>
          <Input name="email" type="email" placeholder="Your Email" required />
        </div>
        <div>
          <Textarea name="message" placeholder="Your Message" required />
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>

      {/* Show toast notification */}
      {toastMessage && <Toast title={toastMessage.title} description={toastMessage.description} onClose={() => setToastMessage(null)} />}
    </div>
  )
}


// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { toast } from "@/components/ui/use-toast"

// export function ContactForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     setIsSubmitting(true)

//     // In a real application, you would send this data to your server
//     // This is just a simulation of an API call
//     await new Promise((resolve) => setTimeout(resolve, 1000))

//     toast({
//       title: "Message Sent",
//       description: "We've received your message and will get back to you soon.",
//     })

//     setIsSubmitting(false)
//     event.currentTarget.reset()
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <Input type="text" placeholder="Your Name" required />
//       </div>
//       <div>
//         <Input type="email" placeholder="Your Email" required />
//       </div>
//       <div>
//         <Textarea placeholder="Your Message" required />
//       </div>
//       <Button type="submit" disabled={isSubmitting}>
//         {isSubmitting ? "Sending..." : "Send Message"}
//       </Button>
//     </form>
//   )
// }

