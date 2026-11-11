# Tafsela

Tafsela is a wedding accessories storefront built with Next.js, React, and Supabase. Product management is available to authorized administrators through the dashboard.

## Requirements

- Node.js and npm
- A Supabase project with the `items` and `categories` tables
- Google OAuth credentials configured for NextAuth

Create a `.env.local` file in the project root with:

```env
SUPABASE_URL=
SUPABASE_SECRET_KEY=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
AUTH_SECRET=
```

Keep these values private. `SUPABASE_SECRET_KEY` and the Google OAuth secret are server-only credentials. Configure the Google OAuth callback URL for your deployment as `/api/auth/callback/google`.

## Run locally

```bash
npm install
npm run dev
```

The local site is available at [http://localhost:3000](http://localhost:3000).

## Checks and production

```bash
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

The production build needs valid Supabase environment variables because product data is loaded while Next.js collects page data.
