"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookHeart, Timer, LineChart, Flame } from "lucide-react"
import { sendEmail } from "@/app/actions/send-email"

export function LandingPage() {
  const [platform, setPlatform] = useState("ios")
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("")
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null,
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    startTransition(async () => {
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
          message: 'Failed to send message. Please try again later.'
        })
      }
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-yellow-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-yellow-50/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <Link href="/" className="text-2xl font-bold">TM App</Link>
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
          Find Peace with Transcendental Meditation
        </h1>
        <p className="mx-auto mb-8 text-xl text-gray-600 max-w-2xl">
          Experience deep relaxation with our Transcendental Meditation app. Set a custom meditation timer,
          journal your sessions, and track your progress and streaks.
        </p>
        
        {/* Platform Tabs */}
        <Tabs defaultValue="ios" className="max-w-[400px] mx-auto mb-8">
          <TabsList className="grid w-full grid-cols-2 p-1 rounded-full bg-yellow-100">
            <TabsTrigger 
              value="ios" 
              onClick={() => setPlatform("ios")}
              className="rounded-full data-[state=active]:bg-yellow-400 data-[state=active]:text-gray-900 transition-all"
            >
              iOS
            </TabsTrigger>
            <TabsTrigger 
              value="android" 
              onClick={() => setPlatform("android")}
              className="rounded-full data-[state=active]:bg-yellow-400 data-[state=active]:text-gray-900 transition-all"
            >
              Android
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {platform === "ios" ? (
          <Link href="https://apps.apple.com" target="_blank">
            {/* <Image
              src="/images/app-store-badge.png"
              alt="Download on the App Store"
              width={200}
              height={60}
              className="mx-auto"
            /> */}
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
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900"></h2>
        {platform === "ios" ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202024-11-01%20at%2009.59.05-2luXFJQlBZxlckwnH6ueqDcm1EZmfx.png",
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202024-11-01%20at%2009.58.47-Y7ay6AWGVBhEJeOmHKj1FsGFchZvmx.png",
              "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screenshot%20-%20iPhone%2016%20Pro%20Max%20-%202024-11-01%20at%2009.48.03-BNyPa3E8iFCmdAVlbwboU71ltUJlS5.png"
            ].map((src, index) => (
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
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white !outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="relative">
                <Textarea
                  placeholder="Your message or feedback"
                  className="min-h-[150px] bg-white !outline-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-yellow-400 hover:bg-yellow-500 rounded-full"
                disabled={isPending}
              >
                {isPending ? 'Sending...' : 'Send Message'}
              </Button>
              {formStatus.type && (
                <div 
                  className={`mt-4 p-3 rounded-lg text-center ${
                    formStatus.type === 'success' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}
                  role="alert"
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
        <p>© 2024 Transcendental Meditation App. All rights reserved.</p>
      </footer>
    </div>
  )
}