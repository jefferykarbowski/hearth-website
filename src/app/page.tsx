import Link from 'next/link'
import { Flame, Radio, Music, Cloud, ChefHat, Youtube, Wifi, Shield, Zap, Heart, Check, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Flame className="w-10 h-10 text-hearth-500" />
          <span className="text-2xl font-bold text-hearth-900">Hearth</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-hearth-900 mb-6 leading-tight">
          Your kitchen deserves<br />
          <span className="text-hearth-500">a brain.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-8">
          A beautiful touchscreen kiosk that brings freeform radio, music, weather, recipes, 
          and more to the heart of your home. No subscriptions. No cloud dependency. Just warmth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/dashboard"
            className="bg-hearth-500 hover:bg-hearth-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors text-center flex items-center justify-center gap-2"
          >
            Get Started Free <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            href="#demo"
            className="border-2 border-hearth-200 hover:border-hearth-300 text-hearth-700 px-8 py-4 rounded-xl font-semibold transition-colors text-center"
          >
            See it in action
          </Link>
        </div>
        
        {/* Social proof */}
        <div className="mt-12 flex items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-hearth-100 border-2 border-white" />
              ))}
            </div>
            <span>100+ kitchens warmed</span>
          </div>
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(i => (
              <span key={i} className="text-hearth-400">★</span>
            ))}
            <span className="ml-1">4.9/5</span>
          </div>
        </div>
      </section>

      {/* What it does */}
      <section id="features" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hearth-900 mb-4">
              Everything you need, nothing you don't
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hearth replaces the tablet propped against your backsplash with something purpose-built.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Radio className="w-8 h-8" />}
              title="Freeform Radio"
              description="Curated college and community stations. Real DJs, real discovery, no algorithms. WCBN, KFJC, WFMU, NTS, and 30+ more."
            />
            <FeatureCard 
              icon={<Music className="w-8 h-8" />}
              title="Spotify Connect"
              description="Your library, your playlists. Control playback from your phone or tap the screen. Seamless handoff."
            />
            <FeatureCard 
              icon={<Cloud className="w-8 h-8" />}
              title="Smart Weather"
              description="Dynamic backgrounds that match conditions outside. Know if you need an umbrella before you ask."
            />
            <FeatureCard 
              icon={<ChefHat className="w-8 h-8" />}
              title="Recipe Integration"
              description="Pull up AllRecipes hands-free. Voice search coming soon. Never smudge your phone again."
            />
            <FeatureCard 
              icon={<Youtube className="w-8 h-8" />}
              title="YouTube & More"
              description="Cooking tutorials, music videos, live streams. Cast from your phone or browse on screen."
            />
            <FeatureCard 
              icon={<Zap className="w-8 h-8" />}
              title="Instant On"
              description="Boots in seconds. No login screens. No updates interrupting dinner. Just tap and go."
            />
          </div>
        </div>
      </section>

      {/* Why Hearth */}
      <section className="px-6 py-20 bg-gradient-to-b from-hearth-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-hearth-900 mb-6">
                Built different
              </h2>
              <div className="space-y-6">
                <BenefitRow 
                  icon={<Wifi className="w-6 h-6" />}
                  title="Works offline"
                  description="Radio streams need internet, but everything else works without it. No cloud dependency."
                />
                <BenefitRow 
                  icon={<Shield className="w-6 h-6" />}
                  title="Privacy first"
                  description="Your data stays on your device. We don't track what you cook or listen to."
                />
                <BenefitRow 
                  icon={<Heart className="w-6 h-6" />}
                  title="Open source"
                  description="Inspect the code, modify it, make it yours. MIT licensed."
                />
              </div>
            </div>
            <div className="bg-hearth-100 rounded-2xl aspect-video flex items-center justify-center">
              <span className="text-hearth-300 text-lg">[Kiosk Screenshot]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hearth-900 mb-4">
              Simple pricing
            </h2>
            <p className="text-xl text-gray-600">
              Start free. Upgrade if you want the extras.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free */}
            <PricingCard 
              name="Free"
              price="$0"
              period="forever"
              description="Everything you need for one kitchen"
              features={[
                "All radio stations",
                "Spotify Connect",
                "Weather display",
                "YouTube integration",
                "Screensaver mode",
                "Community support",
              ]}
              cta="Get Started"
              ctaLink="/dashboard"
            />

            {/* Pro */}
            <PricingCard 
              name="Pro"
              price="$5"
              period="/month"
              description="Cloud sync and premium features"
              features={[
                "Everything in Free",
                "Cloud config sync",
                "Multi-kiosk support",
                "Recipe integration",
                "Priority support",
                "Early access to features",
              ]}
              cta="Start Pro Trial"
              ctaLink="/dashboard"
              highlighted
            />

            {/* Lifetime */}
            <PricingCard 
              name="Lifetime"
              price="$99"
              period="once"
              description="Pay once, use forever"
              features={[
                "Everything in Pro",
                "Lifetime updates",
                "No recurring fees",
                "Hardware bundle discounts",
                "Founder badge",
                "Direct line to the team",
              ]}
              cta="Buy Lifetime"
              ctaLink="/dashboard"
            />
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section className="px-6 py-20 bg-hearth-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Runs on what you have
            </h2>
            <p className="text-xl text-hearth-200">
              Or grab a pre-configured kit from us
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2">Old Laptop</h3>
              <p className="text-hearth-300">Dust off that MacBook or ThinkPad. Perfect second life.</p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Tablet</h3>
              <p className="text-hearth-300">Surface Pro, iPad (via browser), Android tablets.</p>
            </div>
            <div className="p-6">
              <div className="text-5xl mb-4">🍓</div>
              <h3 className="text-xl font-semibold mb-2">Raspberry Pi</h3>
              <p className="text-hearth-300">Pi 4 or 5 with touchscreen. $100 total setup.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/hardware"
              className="inline-flex items-center gap-2 text-hearth-300 hover:text-white transition-colors"
            >
              View hardware guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <Flame className="w-16 h-16 text-hearth-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-hearth-900 mb-4">
            Ready to warm up your kitchen?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Takes 10 minutes to set up. Free forever for basic use.
          </p>
          <Link 
            href="/dashboard"
            className="bg-hearth-500 hover:bg-hearth-600 text-white px-10 py-4 rounded-xl font-semibold transition-colors text-lg inline-flex items-center gap-2"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-hearth-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Flame className="w-6 h-6 text-hearth-500" />
            <span className="font-semibold text-hearth-900">Hearth</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500">
            <Link href="/docs" className="hover:text-hearth-600">Docs</Link>
            <Link href="https://github.com/jefferykarbowski/hearth-kiosk" className="hover:text-hearth-600">GitHub</Link>
            <Link href="/privacy" className="hover:text-hearth-600">Privacy</Link>
            <Link href="/terms" className="hover:text-hearth-600">Terms</Link>
          </div>
          <p className="text-sm text-gray-400">
            © 2024 Hearth. Made with 🔥
          </p>
        </div>
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
    <div className="p-6 rounded-2xl border border-hearth-100 hover:border-hearth-200 hover:shadow-lg transition-all">
      <div className="text-hearth-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-hearth-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function BenefitRow({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-hearth-100 rounded-xl flex items-center justify-center text-hearth-600">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-hearth-900 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function PricingCard({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  cta, 
  ctaLink,
  highlighted = false 
}: {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  ctaLink: string
  highlighted?: boolean
}) {
  return (
    <div className={`p-8 rounded-2xl ${highlighted ? 'bg-hearth-500 text-white ring-4 ring-hearth-200' : 'bg-white border-2 border-hearth-100'}`}>
      <h3 className={`text-xl font-semibold mb-2 ${highlighted ? 'text-white' : 'text-hearth-900'}`}>{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className={highlighted ? 'text-hearth-100' : 'text-gray-500'}>{period}</span>
      </div>
      <p className={`mb-6 ${highlighted ? 'text-hearth-100' : 'text-gray-600'}`}>{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className={`w-5 h-5 ${highlighted ? 'text-hearth-200' : 'text-hearth-500'}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link 
        href={ctaLink}
        className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
          highlighted 
            ? 'bg-white text-hearth-600 hover:bg-hearth-50' 
            : 'bg-hearth-500 text-white hover:bg-hearth-600'
        }`}
      >
        {cta}
      </Link>
    </div>
  )
}
