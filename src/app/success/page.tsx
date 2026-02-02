import Link from 'next/link'
import { Flame, Check, Mail, Package, ArrowRight } from 'lucide-react'

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-hearth-50 to-white flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold text-hearth-900 mb-4">
          Order confirmed!
        </h1>
        
        <p className="text-gray-600 mb-8">
          Thank you for ordering Hearth. You're going to love it.
        </p>

        <div className="bg-white rounded-2xl border border-hearth-100 p-6 text-left mb-8">
          <h2 className="font-semibold text-hearth-900 mb-4">What's next?</h2>
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-hearth-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-hearth-600" />
              </div>
              <div>
                <p className="font-medium text-hearth-900">Check your email</p>
                <p className="text-sm text-gray-500">We've sent your order confirmation and receipt.</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-hearth-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Package className="w-4 h-4 text-hearth-600" />
              </div>
              <div>
                <p className="font-medium text-hearth-900">We'll start building</p>
                <p className="text-sm text-gray-500">Your Hearth will be assembled and tested by hand.</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-hearth-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Flame className="w-4 h-4 text-hearth-600" />
              </div>
              <div>
                <p className="font-medium text-hearth-900">Ships in 2-3 weeks</p>
                <p className="text-sm text-gray-500">We'll email you tracking info when it's on the way.</p>
              </div>
            </div>
          </div>
        </div>

        <Link 
          href="/"
          className="text-hearth-600 hover:text-hearth-700 font-medium inline-flex items-center gap-2"
        >
          Back to Hearth <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  )
}
