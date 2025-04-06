"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BookHeart, Timer, LineChart, Flame } from "lucide-react"
import { sendEmail } from "@/app/actions/send-email"

export function LandingPage() {
  const [platform, setPlatform] = useState("ios")
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null,
    message: string
  }>({ type: null, message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const formData = new FormData()
      formData.append('email', email)
      formData.append('message', message)
      
      const result = await sendEmail(formData)
      
      if (result.success) {
        setFormStatus({
          type: 'success',
          message: 'Thank you for your message! We\'ll get back to you soon.'
        })
        setEmail("")
        setMessage("")
      } else {
        setFormStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again later.'
        })
      }
    } catch {
      setFormStatus({
        type: 'error',
        message: 'An error occurred. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const screenshots = [
    '/images/screenshots/screen1.png',
    '/images/screenshots/screen2.png',
    '/images/screenshots/screen3.png'
  ]

  return (
    <div className="flex flex-col min-h-screen bg-yellow-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-yellow-50/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <Link href="/" className="text-2xl font-bold">Meditrace</Link>
          <div className="flex items-center gap-4">
            <Link href="#features">
              <Button variant="ghost" className="rounded-full text-gray-600 hover:text-gray-900 hover:bg-yellow-100">Features</Button>
            </Link>
            <Link href="#contact">
              <Button variant="ghost" className="rounded-full text-gray-600 hover:text-gray-900 hover:bg-yellow-100">Contact</Button>
            </Link>
            <Link href="https://apps.apple.com" target="_blank">
              <Button className="rounded-full bg-yellow-400 hover:bg-yellow-500">Download App</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container px-4 py-24 mx-auto text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Find Peace with Meditopia
        </h1>
        <p className="mx-auto mb-8 text-xl text-gray-600 max-w-2xl">
          Experience deep relaxation with our Meditation app. Set a custom meditation timer,
          journal your sessions, and track your progress and streaks.
        </p>
        
        {/* Platform Selection */}
        <div className="max-w-[400px] mx-auto mb-8">
          <div className="grid w-full grid-cols-2 p-1 rounded-full bg-yellow-100">
            <button 
              onClick={() => setPlatform("ios")}
              className={`rounded-full py-2 transition-all ${
                platform === "ios" ? "bg-yellow-400 text-gray-900" : "text-gray-600"
              }`}
            >
              iOS
            </button>
            <button 
              onClick={() => setPlatform("android")}
              className={`rounded-full py-2 transition-all ${
                platform === "android" ? "bg-yellow-400 text-gray-900" : "text-gray-600"
              }`}
            >
              Android
            </button>
          </div>
        </div>

        {platform === "ios" ? (
          <Link href="https://apps.apple.com" target="_blank">
            <Button className="rounded-full bg-yellow-400 hover:bg-yellow-500 px-8 py-3">
              Download on the App Store
            </Button>
          </Link>
        ) : (
          <div className="p-4 text-lg font-medium text-gray-600 bg-yellow-100 rounded-lg">
            Coming Soon to Android
          </div>
        )}
      </section>

      {/* Features Grid */}
      <section id="features" className="container px-4 py-16 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-white/50 border-none">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Timer className="w-12 h-12 mb-4 text-yellow-500" />
              <h3 className="mb-2 text-xl font-semibold">Meditation Timer</h3>
              <p className="text-gray-600">Customize your meditation duration with our intuitive timer</p>
            </CardContent>
          </Card>
          <Card className="bg-white/50 border-none">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <BookHeart className="w-12 h-12 mb-4 text-yellow-500" />
              <h3 className="mb-2 text-xl font-semibold">Journal</h3>
              <p className="text-gray-600">Record your thoughts and experiences after each session</p>
            </CardContent>
          </Card>
          <Card className="bg-white/50 border-none">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <LineChart className="w-12 h-12 mb-4 text-yellow-500" />
              <h3 className="mb-2 text-xl font-semibold">Heart Rate Tracking</h3>
              <p className="text-gray-600">Monitor your heart rate during meditation sessions</p>
            </CardContent>
          </Card>
          <Card className="bg-white/50 border-none">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Flame className="w-12 h-12 mb-4 text-yellow-500" />
              <h3 className="mb-2 text-xl font-semibold">Streaks</h3>
              <p className="text-gray-600">Build consistency with meditation streaks and progress tracking</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="container px-4 py-16 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">App Screenshots</h2>
        {platform === "ios" ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {screenshots.map((src, index) => (
              <div key={index} className="relative aspect-[9/19] max-w-[280px] mx-auto w-full shadow-xl rounded-[2rem] overflow-hidden bg-white p-2">
                <Image
                  src={src}
                  alt={`App Screenshot ${index + 1}`}
                  fill
                  className="object-contain rounded-[1.75rem]"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center">
            <p className="text-xl text-gray-600">Android version is currently in development.</p>
            <p className="mt-2 text-gray-500">Stay tuned for updates!</p>
          </div>
        )}
      </section>

      {/* Contact Form */}
      <section id="contact" className="container px-4 py-16 mx-auto">
        <Card className="max-w-xl mx-auto bg-white/50 border-none">
          <CardContent className="p-6">
            <h2 className="mb-6 text-2xl font-bold text-center text-gray-900">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your message or feedback"
                  className="min-h-[150px] bg-white"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-yellow-400 hover:bg-yellow-500 rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              {formStatus.type && (
                <div 
                  className={`mt-4 p-3 rounded-lg text-center ${
                    formStatus.type === 'success' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="py-8 mt-auto text-center text-gray-600 bg-yellow-100">
        <p>© 2025 Meditrace. All rights reserved.</p>
      </footer>
    </div>
  )
}