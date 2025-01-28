/* eslint-disable react/no-unescaped-entities */

"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Label } from "../components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
import { useToast } from "../components/ui/useToast"

interface ContactFormProps {
  productName: string
}

export function ContactForm({ productName }: ContactFormProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // In a real application, you would send this data to your server
    console.log("Form submitted:", { name, email, message, productName })

    // Show a success message
    useToast({
      title: "Inquiry Sent",
      description: "We've received your inquiry and will get back to you soon.",
    })

    // Close the dialog
    setIsDialogOpen(false)
  }

  return (
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
            Send us a message about {productName}. We'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required />
          </div>
          <div className="space-y-2 ">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required />
          </div>
          <Button type="submit" className="w-full">
            Send Inquiry
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

