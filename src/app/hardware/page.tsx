import Link from 'next/link'
import { Flame, ArrowRight, Check, ExternalLink } from 'lucide-react'

export default function HardwarePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="px-6 py-4 border-b border-hearth-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Flame className="w-8 h-8 text-hearth-500" />
            <span className="text-xl font-bold text-hearth-900">Hearth</span>
          </Link>
          <Link 
            href="/dashboard"
            className="bg-hearth-500 hover:bg-hearth-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-hearth-900 mb-4">
          Hardware Guide
        </h1>
        <p className="text-xl text-gray-600">
          Hearth runs on almost anything with a screen. Here's what works best.
        </p>
      </section>

      {/* Options */}
      <section className="px-6 pb-20 max-w-4xl mx-auto">
        <div className="space-y-12">
          
          {/* Raspberry Pi */}
          <HardwareOption
            emoji="🍓"
            title="Raspberry Pi (Recommended)"
            description="The best balance of cost, performance, and hackability. Purpose-built for always-on displays."
            budget="$100-150 total"
            pros={[
              "Low power consumption (~5W)",
              "Silent operation",
              "Boots in seconds",
              "Easy to mount behind a screen",
              "Huge community support",
            ]}
            cons={[
              "Requires some technical setup",
              "Need to buy screen separately",
            ]}
            parts={[
              { name: "Raspberry Pi 5 (4GB)", price: "$60", link: "#" },
              { name: "Official 7\" Touchscreen", price: "$70", link: "#" },
              { name: "Power supply", price: "$15", link: "#" },
              { name: "SD Card (32GB+)", price: "$10", link: "#" },
            ]}
          />

          {/* Old Laptop */}
          <HardwareOption
            emoji="💻"
            title="Old Laptop"
            description="That dusty MacBook or ThinkPad is perfect for Hearth. Give it a second life."
            budget="Free (you have one)"
            pros={[
              "You probably already have one",
              "Built-in speakers",
              "No extra purchases needed",
              "Easy to set up",
            ]}
            cons={[
              "Higher power consumption",
              "Bulkier form factor",
              "Battery may be dead",
            ]}
            requirements={[
              "Any laptop from 2015+",
              "4GB RAM minimum",
              "Working screen",
              "WiFi capability",
            ]}
          />

          {/* Tablet */}
          <HardwareOption
            emoji="📱"
            title="Surface Pro / Tablet"
            description="Premium option with great touchscreen and thin profile."
            budget="$200-400 (used)"
            pros={[
              "Excellent touchscreen",
              "Thin, wall-mountable",
              "Good speakers",
              "Runs native Electron app",
            ]}
            cons={[
              "More expensive",
              "Overkill for just Hearth",
            ]}
            recommended={[
              "Surface Pro 4 or newer",
              "Any Windows tablet with 4GB+ RAM",
              "Amazon Fire HD (browser mode)",
            ]}
          />

          {/* DIY Kit */}
          <HardwareOption
            emoji="🔧"
            title="DIY All-in-One"
            description="Build a custom wall-mounted unit with a display panel and compute stick."
            budget="$150-250"
            pros={[
              "Fully customizable",
              "Can use any screen size",
              "Professional look",
              "Satisfying project",
            ]}
            cons={[
              "Requires woodworking/mounting skills",
              "More complex setup",
            ]}
            parts={[
              { name: "Intel Compute Stick", price: "$80-150", link: "#" },
              { name: "USB Touchscreen Monitor", price: "$80-150", link: "#" },
              { name: "USB speakers", price: "$15", link: "#" },
            ]}
          />
        </div>
      </section>

      {/* Installation */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-hearth-900 mb-8">
            Installation
          </h2>
          
          <div className="space-y-6">
            <Step number={1} title="Create your account">
              <p>Sign up at hearth-at-home.com to get your configuration.</p>
            </Step>
            
            <Step number={2} title="Download the installer">
              <p>We provide installers for:</p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Raspberry Pi OS (one-line install script)</li>
                <li>Windows (standalone .exe)</li>
                <li>macOS (standalone .app)</li>
                <li>Linux (AppImage or .deb)</li>
              </ul>
            </Step>
            
            <Step number={3} title="Connect your kiosk">
              <p>Enter your kiosk ID from the dashboard to sync your configuration.</p>
            </Step>
            
            <Step number={4} title="Mount and enjoy">
              <p>Place it in your kitchen and start cooking with music!</p>
            </Step>
          </div>

          <div className="mt-12 p-6 bg-hearth-50 rounded-2xl">
            <h3 className="font-semibold text-hearth-900 mb-2">Raspberry Pi Quick Start</h3>
            <p className="text-gray-600 mb-4">Run this on a fresh Raspberry Pi OS install:</p>
            <code className="block bg-hearth-900 text-hearth-100 p-4 rounded-lg text-sm overflow-x-auto">
              curl -fsSL https://hearth-at-home.com/install.sh | bash
            </code>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-hearth-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-600 mb-8">
            Create your free account and configure your kiosk.
          </p>
          <Link 
            href="/dashboard"
            className="bg-hearth-500 hover:bg-hearth-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors inline-flex items-center gap-2"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-hearth-100 text-center text-gray-500 text-sm">
        <p>© 2024 Hearth. Made with 🔥</p>
      </footer>
    </main>
  )
}

function HardwareOption({ 
  emoji, 
  title, 
  description, 
  budget, 
  pros, 
  cons, 
  parts,
  requirements,
  recommended,
}: {
  emoji: string
  title: string
  description: string
  budget: string
  pros?: string[]
  cons?: string[]
  parts?: { name: string; price: string; link: string }[]
  requirements?: string[]
  recommended?: string[]
}) {
  return (
    <div className="border-2 border-hearth-100 rounded-2xl p-8">
      <div className="flex items-start gap-4 mb-6">
        <span className="text-5xl">{emoji}</span>
        <div>
          <h3 className="text-2xl font-bold text-hearth-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <p className="text-hearth-600 font-medium mt-1">{budget}</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {pros && (
          <div>
            <h4 className="font-semibold text-green-700 mb-2">Pros</h4>
            <ul className="space-y-1">
              {pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {cons && (
          <div>
            <h4 className="font-semibold text-amber-700 mb-2">Cons</h4>
            <ul className="space-y-1">
              {cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600">
                  <span className="text-amber-500 mt-1 flex-shrink-0">•</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        )}

        {requirements && (
          <div>
            <h4 className="font-semibold text-hearth-700 mb-2">Requirements</h4>
            <ul className="space-y-1">
              {requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600">
                  <span className="text-hearth-500">•</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        )}

        {recommended && (
          <div>
            <h4 className="font-semibold text-hearth-700 mb-2">Recommended</h4>
            <ul className="space-y-1">
              {recommended.map((rec, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600">
                  <span className="text-hearth-500">•</span>
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {parts && (
        <div className="mt-6 pt-6 border-t border-hearth-100">
          <h4 className="font-semibold text-hearth-900 mb-3">Shopping List</h4>
          <div className="space-y-2">
            {parts.map((part, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-gray-600">{part.name}</span>
                <span className="text-hearth-600 font-medium">{part.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function Step({ number, title, children }: {
  number: number
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 bg-hearth-500 text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-hearth-900 mb-2">{title}</h3>
        <div className="text-gray-600">{children}</div>
      </div>
    </div>
  )
}
