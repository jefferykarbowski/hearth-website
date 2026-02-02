import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/kiosk/[kioskId]/config
// Called by kiosk to fetch its configuration
export async function GET(
  request: NextRequest,
  { params }: { params: { kioskId: string } }
) {
  const { kioskId } = params
  
  // Optional: verify kiosk token from header
  const kioskToken = request.headers.get('x-kiosk-token')
  
  try {
    const kiosk = await prisma.kiosk.findUnique({
      where: { kioskId },
      include: { config: true },
    })

    if (!kiosk) {
      return NextResponse.json(
        { error: 'Kiosk not found' },
        { status: 404 }
      )
    }

    // Transform config for kiosk consumption
    const config = kiosk.config
    
    return NextResponse.json({
      kioskId: kiosk.kioskId,
      name: kiosk.name,
      config: config ? {
        location: config.location,
        timezone: config.timezone,
        tabs: {
          radio: config.tabRadio,
          spotify: config.tabSpotify,
          weather: config.tabWeather,
          recipes: config.tabRecipes,
          youtube: config.tabYoutube,
          mixcloud: config.tabMixcloud,
        },
        radioStations: config.radioStations ? JSON.parse(config.radioStations) : [],
        services: {
          spotify: config.spotifyConnected,
          allrecipes: config.allrecipesConnected,
          youtube: config.youtubeConnected,
        },
      } : null,
      updatedAt: kiosk.updatedAt,
    })
  } catch (error) {
    console.error('Error fetching kiosk config:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST /api/kiosk/[kioskId]/config
// Called by kiosk to register itself or update status
export async function POST(
  request: NextRequest,
  { params }: { params: { kioskId: string } }
) {
  const { kioskId } = params
  const body = await request.json()

  try {
    // For now, just acknowledge - full registration flow TBD
    return NextResponse.json({
      ok: true,
      kioskId,
      message: 'Kiosk registered',
    })
  } catch (error) {
    console.error('Error registering kiosk:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
