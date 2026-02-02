'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Flame, ArrowLeft, Lock, Package, Check } from 'lucide-react'

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleCheckout = async () => {
    setLoading(true)
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      
      const { url } = await response.json()
      
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-hearth-50 to-white">
      {/* Header */}
      <header className="px-6 py-4 border-b border-hearth-100 bg-white">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-hearth-600 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Hearth</span>
          </Link>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Lock className="w-4 h-4" />
            <span>Secure checkout</span>
          </div>
        </div>
      </header>

      <div className="px-6 py-12 max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Order Summary */}
          <div>
            <h1 className="text-2xl font-bold text-hearth-900 mb-6">Order Summary</h1>
            
            <div className="bg-white rounded-2xl border border-hearth-100 p-6 mb-6">
              <div className="flex gap-4 mb-6">
                <div className="w-24 h-24 bg-hearth-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Flame className="w-10 h-10 text-hearth-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-hearth-900">Hearth Kitchen Display</h3>
                  <p className="text-sm text-gray-500 mb-2">7" touchscreen with Hearth OS</p>
                  <p className="text-lg font-bold text-hearth-900">$149.00</p>
                </div>
              </div>
              
              <div className="border-t border-hearth-100 pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>$149.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-hearth-600">Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-hearth-900 pt-2 border-t border-hearth-100">
                  <span>Total</span>
                  <span>$149.00</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-hearth-500" />
                <span>Ships in 2-3 weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-hearth-500" />
                <span>Free shipping in the US</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-hearth-500" />
                <span>30-day money back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-hearth-500" />
                <span>1-year hardware warranty</span>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div>
            <h2 className="text-2xl font-bold text-hearth-900 mb-6">Your Details</h2>
            
            <div className="bg-white rounded-2xl border border-hearth-100 p-6">
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-hearth-500 transition-colors"
                    placeholder="you@example.com"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    We'll send your order confirmation and tracking info here.
                  </p>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={loading || !email}
                className="w-full bg-hearth-500 hover:bg-hearth-600 disabled:bg-hearth-300 text-white px-6 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  'Redirecting to payment...'
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    Pay $149.00 with Stripe
                  </>
                )}
              </button>

              <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-400">
                <span>Powered by</span>
                <svg className="h-6" viewBox="0 0 60 25" fill="currentColor">
                  <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.02 1.04-.06 1.48zm-3.67-3.12c0-1.64-.82-2.6-2.17-2.6-1.25 0-2.21.96-2.38 2.6h4.55zm-16.26 9.2c-3.64 0-5.74-2.38-5.74-6.16V5.74h4.17v8.03c0 1.65.68 2.75 2.12 2.75 1.24 0 2.02-.83 2.02-2.45V5.74h4.17v14.5h-3.64l-.26-1.83a4.73 4.73 0 0 1-3.84 2.07zm-13.88-.24h-4.17V5.74h3.64l.26 1.73a4.6 4.6 0 0 1 3.84-1.97c.52 0 .95.05 1.29.1v3.99a5.7 5.7 0 0 0-1.47-.16c-1.64 0-3.05.93-3.39 2.72v7.97zM14.57 20.04c-3.68 0-5.73-2.38-5.73-6.16V5.74h4.17v8.03c0 1.65.68 2.75 2.12 2.75 1.25 0 2.03-.83 2.03-2.45V5.74h4.17v14.5h-3.65l-.25-1.83a4.73 4.73 0 0 1-3.86 2.07zM5.24 5.74v14.5H1.07V5.74h4.17zm0-4.8v3.48H1.07V.94h4.17z" />
                </svg>
              </div>
            </div>

            <p className="text-center text-xs text-gray-400 mt-6">
              By purchasing, you agree to our{' '}
              <Link href="/terms" className="underline">Terms of Service</Link> and{' '}
              <Link href="/privacy" className="underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
