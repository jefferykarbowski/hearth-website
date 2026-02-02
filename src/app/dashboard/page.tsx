'use client'

import { Flame, Radio, Music, Cloud, ChefHat, Youtube, Settings, MapPin, LogOut } from 'lucide-react'

export default function Dashboard() {
  // TODO: Add auth check and redirect if not logged in
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-hearth-50 to-hearth-100/50">
      {/* Header */}
      <header className="bg-white border-b border-hearth-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="w-8 h-8 text-hearth-500" />
            <span className="text-xl font-bold text-hearth-900">Hearth</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">jeff@example.com</span>
            <button className="text-gray-500 hover:text-hearth-500">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-hearth-900 mb-2">Your Hearth</h1>
        <p className="text-gray-600 mb-8">Configure your kitchen kiosk settings</p>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Kiosk Connection */}
          <ConfigCard 
            title="Kiosk Connection"
            icon={<Settings className="w-6 h-6" />}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kiosk ID
                </label>
                <input 
                  type="text" 
                  value="hearth-kitchen-001"
                  readOnly
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-600"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-700">Connected</span>
              </div>
            </div>
          </ConfigCard>

          {/* Location */}
          <ConfigCard 
            title="Location"
            icon={<MapPin className="w-6 h-6" />}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City / ZIP
                </label>
                <input 
                  type="text" 
                  placeholder="Ann Arbor, MI"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-hearth-500"
                />
              </div>
              <p className="text-sm text-gray-500">Used for weather and local info</p>
            </div>
          </ConfigCard>

          {/* Radio Stations */}
          <ConfigCard 
            title="Radio Stations"
            icon={<Radio className="w-6 h-6" />}
          >
            <div className="space-y-3">
              {['WCBN', 'KFJC', 'WFMU', 'KCRW', 'NTS'].map((station) => (
                <label key={station} className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-hearth-500 rounded" />
                  <span>{station}</span>
                </label>
              ))}
              <button className="text-sm text-hearth-600 hover:text-hearth-700 font-medium">
                + Add more stations
              </button>
            </div>
          </ConfigCard>

          {/* Spotify */}
          <ConfigCard 
            title="Spotify"
            icon={<Music className="w-6 h-6" />}
          >
            <div className="space-y-4">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Connect Spotify
              </button>
              <p className="text-sm text-gray-500">
                Link your Spotify account to control playback from your kiosk
              </p>
            </div>
          </ConfigCard>

          {/* Tabs */}
          <ConfigCard 
            title="Kiosk Tabs"
            icon={<Settings className="w-6 h-6" />}
          >
            <div className="space-y-3">
              {[
                { name: 'Radio', icon: Radio, enabled: true },
                { name: 'Spotify', icon: Music, enabled: true },
                { name: 'Weather', icon: Cloud, enabled: true },
                { name: 'Recipes', icon: ChefHat, enabled: false },
                { name: 'YouTube', icon: Youtube, enabled: true },
              ].map((tab) => (
                <label key={tab.name} className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked={tab.enabled} className="w-4 h-4 text-hearth-500 rounded" />
                  <tab.icon className="w-4 h-4 text-gray-500" />
                  <span>{tab.name}</span>
                </label>
              ))}
            </div>
          </ConfigCard>

          {/* Recipes */}
          <ConfigCard 
            title="Recipes"
            icon={<ChefHat className="w-6 h-6" />}
          >
            <div className="space-y-4">
              <button className="w-full bg-hearth-500 hover:bg-hearth-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Connect AllRecipes
              </button>
              <p className="text-sm text-gray-500">
                Access your saved recipes and shopping lists
              </p>
            </div>
          </ConfigCard>
        </div>

        {/* Save */}
        <div className="mt-8 flex justify-end">
          <button className="bg-hearth-500 hover:bg-hearth-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Save Configuration
          </button>
        </div>
      </main>
    </div>
  )
}

function ConfigCard({ title, icon, children }: {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-hearth-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-hearth-500">{icon}</div>
        <h2 className="text-lg font-semibold text-hearth-900">{title}</h2>
      </div>
      {children}
    </div>
  )
}
