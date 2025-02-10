"use client"

import { useState,useRef } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Toast } from "./ui/useToast" // Import the Toast component

interface ContactFormProps {
  productName: string
}

export function ContactForm({ productName }: ContactFormProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [toastData, setToastData] = useState<{ title: string; description: string } | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)

    try {
      const response = await fetch("https://formspree.io/f/xpwqlban", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setToastData({
          title: "Inquiry Sent",
          description: "We've received your inquiry and will get back to you soon.",
        })
        setIsDialogOpen(false)
        formRef.current?.reset()
      } else {
        setToastData({
          title: "Submission Failed",
          description: "Something went wrong. Please try again later.",
        })
      }
    } catch (error) {
      console.error(error)
      setToastData({
        title: "Error",
        description: "Failed to send inquiry. Please check your internet connection.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button size="lg" className="w-full md:w-auto">
            Contact for Inquiry
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
            <DialogDescription>
              Send us a message about <strong>{productName}</strong>. We'll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="product">Product</Label>
              <Input id="product" name="product" value={productName} readOnly className="bg-gray-100 text-black cursor-not-allowed" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send Inquiry"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Show toast when toastData is available */}
      {toastData && <Toast title={toastData.title} description={toastData.description} onClose={() => setToastData(null)} />}
    </>
  )
}





// /* eslint-disable react/no-unescaped-entities */

// "use client"

// import { useState } from "react"
// import { Button } from "./ui/button"
// import { Input } from "./ui/input"
// import { Textarea } from "./ui/textarea"
// import { Label } from "./ui/label"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "./ui/dialog"
// import { useToast } from "./ui/useToast"

// interface ContactFormProps {
//   productName: string
// }

// export function ContactForm({ productName }: ContactFormProps) {
//   const [isDialogOpen, setIsDialogOpen] = useState(false)

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     const formData = new FormData(event.currentTarget)
//     const name = formData.get("name") as string
//     const email = formData.get("email") as string
//     const message = formData.get("message") as string

//     // In a real application, you would send this data to your server
//     console.log("Form submitted:", { name, email, message, productName })

//     // Show a success message
//     useToast({
//       title: "Inquiry Sent",
//       description: "We've received your inquiry and will get back to you soon.",
//     })

//     // Close the dialog
//     setIsDialogOpen(false)
//   }

//   return (
//     <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//       <DialogTrigger asChild>
//         <Button size="lg" className="w-full md:w-auto">
//           Contact for Inquiry
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Contact Us</DialogTitle>
//           <DialogDescription>
//             Send us a message about {productName}. We'll get back to you as soon as possible.
//           </DialogDescription>
//         </DialogHeader>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="name">Name</Label>
//             <Input id="name" name="name" required />
//           </div>
//           <div className="space-y-2 ">
//             <Label htmlFor="email">Email</Label>
//             <Input id="email" name="email" type="email" required />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="message">Message</Label>
//             <Textarea id="message" name="message" required />
//           </div>
//           <Button type="submit" className="w-full">
//             Send Inquiry
//           </Button>
//         </form>
//       </DialogContent>
//     </Dialog>
//   )
// }

