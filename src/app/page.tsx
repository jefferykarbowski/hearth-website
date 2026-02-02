import Link from 'next/link'
import { Flame, Radio, Music, Cloud, ChefHat, Youtube } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Flame className="w-12 h-12 text-hearth-500" />
          <h1 className="text-5xl font-bold text-hearth-900">Hearth</h1>
        </div>
        <p className="text-2xl text-hearth-700 mb-4">
          The warm center of your smart kitchen
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Freeform radio, music streaming, weather, recipes, and more — 
          all on a beautiful touchscreen kiosk.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/dashboard"
            className="bg-hearth-500 hover:bg-hearth-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Started
          </Link>
          <Link 
            href="#features"
            className="border border-hearth-300 hover:border-hearth-400 text-hearth-700 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-hearth-900 mb-12">
            Everything Your Kitchen Needs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Radio className="w-8 h-8" />}
              title="Freeform Radio"
              description="Curated college and community radio stations — real DJs, real discovery, no algorithms."
            />
            <FeatureCard 
              icon={<Music className="w-8 h-8" />}
              title="Spotify Connect"
              description="Your music library, right in your kitchen. Control playback from anywhere."
            />
            <FeatureCard 
              icon={<Cloud className="w-8 h-8" />}
              title="Weather"
              description="Always know what's happening outside before you step out the door."
            />
            <FeatureCard 
              icon={<ChefHat className="w-8 h-8" />}
              title="Recipes"
              description="AllRecipes integration for when inspiration strikes mid-chop."
            />
            <FeatureCard 
              icon={<Youtube className="w-8 h-8" />}
              title="YouTube"
              description="Cooking videos, music, tutorials — whatever you need, hands-free."
            />
            <FeatureCard 
              icon={<Flame className="w-8 h-8" />}
              title="Your Config"
              description="Set it up once, access from any device. Your preferences, synced."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-hearth-900 mb-4">
          Ready to warm up your kitchen?
        </h2>
        <p className="text-gray-600 mb-8">
          Sign up to configure your Hearth kiosk and start enjoying.
        </p>
        <Link 
          href="/dashboard"
          className="bg-hearth-500 hover:bg-hearth-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Create Your Hearth
        </Link>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-hearth-100 text-center text-gray-500">
        <p>© 2024 Hearth. Made with 🔥 for kitchens everywhere.</p>
      </footer>
    </main>
  )
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode
  title: string
  description: string 
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-hearth-100">
      <div className="text-hearth-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-hearth-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
