"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <main className="pt-24 pb-16 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-white">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Get in Touch</h2>
              <p className="text-slate-500 mb-6">
                Have questions about how we can help your business? Fill out the form and we'll get back to you as soon
                as possible.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-white">Email</h3>
                  <p className="text-slate-500">hello@nawaralabs.com</p>
                </div>
                <div>
                  <h3 className="font-medium text-white">Book a Demo</h3>
                  <p className="text-slate-500">Schedule a free consultation to see how we can help.</p>
                  <Button className="mt-2 bg-white hover:bg-gray-200 text-black rounded-full">
                    Book Your Free Demo
                  </Button>
                </div>
              </div>
            </div>

            <Card className="bg-neutral-900 p-6 rounded-lg shadow-md">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <h3 className="text-xl font-bold mb-2 text-white">Thank You!</h3>
                  <p className="text-slate-500">We've received your message and will get back to you shortly.</p>
                  <Button className="mt-4 bg-white text-black hover:bg-gray-200" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-slate-400">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-neutral-900 p-6 rounded-lg shadow-md text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-slate-400">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-neutral-900 p-6 rounded-lg shadow-md text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-slate-400">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-neutral-900 p-6 rounded-lg shadow-md text-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-white hover:bg-gray-200 text-black"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
