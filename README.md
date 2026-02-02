# 🔥 Hearth

**The warm center of your smart kitchen.**

Hearth is a kiosk system that brings freeform radio, music streaming, weather, recipes, and more to your kitchen — all on a touchscreen you control.

## Website

This repo contains the Hearth website:
- **Landing page** — Showcase and sales
- **User dashboard** — Configure your kiosk instance
- **API** — Sync config to your local Hearth kiosk

## Features

### For Users
- 📻 **Freeform Radio** — Curated college & community stations
- 🎵 **Spotify Connect** — Your music, your kitchen
- 🌤️ **Weather** — Always know before you step outside
- 🍳 **Recipes** — AllRecipes integration
- 📺 **YouTube** — Cooking videos, music, whatever
- 🎛️ **Mixcloud** — DJ sets and long-form mixes

### Dashboard Config
- Choose which tabs/apps to display
- Connect your Spotify account
- Pick your favorite radio stations
- Set your location for weather
- Link AllRecipes, YouTube, and more

## Tech Stack

- **Frontend:** Next.js 14, React, Tailwind CSS
- **Auth:** NextAuth.js (Google OAuth + credentials)
- **Database:** PostgreSQL + Prisma
- **Hosting:** Vercel (website) + Self-hosted (kiosk)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment

The site auto-deploys to Vercel on push to `main`.

### Setup Vercel (first time)

1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Link project: `vercel link`
4. Add secrets to GitHub:
   - `VERCEL_TOKEN` — from https://vercel.com/account/tokens
   - `VERCEL_ORG_ID` — from `.vercel/project.json`
   - `VERCEL_PROJECT_ID` — from `.vercel/project.json`

### Manual Deploy

```bash
vercel --prod
```

## Environment Variables

```bash
# .env.local
DATABASE_URL=postgresql://...
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
STRIPE_SECRET_KEY=...
STRIPE_PUBLISHABLE_KEY=...
```

## License

MIT
