import Link from 'next/link'
import { Flame, Radio, Music, Cloud, ChefHat, Youtube, Wifi, Check, ArrowRight, Package, Truck, Shield } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="px-6 py-4 absolute top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-8 h-8 text-hearth-500" />
            <span className="text-xl font-bold text-hearth-900">Hearth</span>
          </div>
          <Link 
            href="#buy"
            className="bg-hearth-500 hover:bg-hearth-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
          >
            Buy Now
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-32 pb-20 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-hearth-900 mb-6 leading-tight">
              The smart display<br />
              <span className="text-hearth-500">for your kitchen.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Freeform radio. Spotify. Weather. Recipes. All on a beautiful touchscreen 
              that's ready the moment you plug it in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#buy"
                className="bg-hearth-500 hover:bg-hearth-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors text-center flex items-center justify-center gap-2"
              >
                Order Yours — $149 <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4" />
                <span>Free shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>30-day returns</span>
              </div>
            </div>
          </div>
          
          {/* Product Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-hearth-100 to-hearth-200 rounded-3xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center">
                <Flame className="w-24 h-24 text-hearth-300 mx-auto mb-4" />
                <span className="text-hearth-400">[Product Photo]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it does */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-hearth-900 mb-4">
              Everything your kitchen needs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No apps to download. No accounts to create. Just plug in and go.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Radio className="w-8 h-8" />}
              title="Freeform Radio"
              description="30+ curated college and community stations. Real DJs, real discovery. WCBN, KFJC, WFMU, NTS, and more."
            />
            <FeatureCard 
              icon={<Music className="w-8 h-8" />}
              title="Spotify Connect"
              description="Your music, your playlists. Connects to your existing Spotify account. Control from your phone or the screen."
            />
            <FeatureCard 
              icon={<Cloud className="w-8 h-8" />}
              title="Live Weather"
              description="Dynamic backgrounds that match conditions outside. Always know if you need a jacket."
            />
            <FeatureCard 
              icon={<ChefHat className="w-8 h-8" />}
              title="Recipe Browser"
              description="Browse AllRecipes right on screen. No more smudging your phone with flour-covered hands."
            />
            <FeatureCard 
              icon={<Youtube className="w-8 h-8" />}
              title="YouTube"
              description="Cooking tutorials, music videos, whatever you want playing while you prep."
            />
            <FeatureCard 
              icon={<Wifi className="w-8 h-8" />}
              title="Just Works"
              description="Connect to WiFi, done. No accounts, no cloud dependency, no monthly fees. Ever."
            />
          </div>
        </div>
      </section>

      {/* How it looks */}
      <section className="px-6 py-20 bg-gradient-to-b from-hearth-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-hearth-900 mb-4">
              Designed for the kitchen
            </h2>
            <p className="text-xl text-gray-600">
              Compact. Touch-friendly. Beautiful.
            </p>
          </div>
          
          {/* Gallery placeholder */}
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-hearth-100 rounded-2xl aspect-video flex items-center justify-center">
                <span className="text-hearth-300">[Screenshot {i}]</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-hearth-900 mb-12 text-center">
            What's in the box
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-hearth-900 mb-4">Hardware</h3>
              <ul className="space-y-3">
                <SpecRow label="Display" value="7-inch IPS touchscreen" />
                <SpecRow label="Resolution" value="1024 × 600" />
                <SpecRow label="Processor" value="Allwinner A133 Quad-core 1.6GHz" />
                <SpecRow label="Memory" value="2GB RAM" />
                <SpecRow label="Storage" value="32GB (expandable via TF card)" />
                <SpecRow label="Audio" value="Built-in speakers + 3.5mm jack" />
                <SpecRow label="Connectivity" value="WiFi 2.4GHz, Bluetooth 4.2" />
                <SpecRow label="Power" value="USB-C" />
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-hearth-900 mb-4">Included</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-hearth-500" />
                  Hearth display unit
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-hearth-500" />
                  USB-C power adapter
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-hearth-500" />
                  Adjustable stand
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-hearth-500" />
                  Quick start guide
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-hearth-500" />
                  Wall mount kit
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-hearth-50 rounded-xl">
                <p className="text-sm text-gray-600">
                  <strong className="text-hearth-900">Lifetime updates.</strong> Hearth OS improves over time with free over-the-air updates. No subscriptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buy */}
      <section id="buy" className="px-6 py-20 bg-hearth-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Order your Hearth
            </h2>
            <p className="text-xl text-hearth-200">
              Ships in 2-3 weeks. Free shipping in the US.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 text-hearth-900">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-8 h-8 text-hearth-500" />
                  <h3 className="text-2xl font-bold">Hearth Kitchen Display</h3>
                </div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-hearth-500" />
                    Ready to use out of the box
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-hearth-500" />
                    Lifetime software updates
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-hearth-500" />
                    30-day money back guarantee
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-hearth-500" />
                    1-year hardware warranty
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-hearth-900 mb-2">$149</div>
                <p className="text-gray-500 mb-6">Free US shipping</p>
                <Link
                  href="/checkout"
                  className="bg-hearth-500 hover:bg-hearth-600 text-white px-10 py-4 rounded-xl font-semibold transition-colors inline-flex items-center gap-2"
                >
                  Buy Now <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="text-sm text-gray-400 mt-4">
                  Secure checkout with Stripe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-hearth-900 mb-12 text-center">
            Questions?
          </h2>
          
          <div className="space-y-6">
            <FAQItem 
              question="Do I need to create an account?"
              answer="Nope. Hearth works right out of the box. Just connect to WiFi and you're done. If you want to use Spotify, you'll sign into your existing Spotify account on the device."
            />
            <FAQItem 
              question="Are there any monthly fees?"
              answer="No. You buy the hardware, you own it. Software updates are free forever. No subscriptions, no cloud fees, no tricks."
            />
            <FAQItem 
              question="Can I use it without internet?"
              answer="Yes, but with limitations. The screensaver, clock, and settings work offline. Radio streaming and weather need internet. Spotify needs internet too, but can play downloaded music."
            />
            <FAQItem 
              question="What if I don't like it?"
              answer="Return it within 30 days for a full refund, no questions asked. We'll even pay for return shipping."
            />
            <FAQItem 
              question="Where do you ship?"
              answer="Currently US only. International shipping coming soon—join the waitlist to be notified."
            />
          </div>
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
            <Link href="/support" className="hover:text-hearth-600">Support</Link>
            <Link href="https://github.com/jefferykarbowski/hearth-kiosk" className="hover:text-hearth-600">Open Source</Link>
            <Link href="/privacy" className="hover:text-hearth-600">Privacy</Link>
            <Link href="/terms" className="hover:text-hearth-600">Terms</Link>
          </div>
          <p className="text-sm text-gray-400">
            © 2024 Hearth
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

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex justify-between py-2 border-b border-hearth-100">
      <span className="text-gray-500">{label}</span>
      <span className="text-hearth-900 font-medium">{value}</span>
    </li>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-hearth-100 pb-6">
      <h3 className="text-lg font-semibold text-hearth-900 mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
}
