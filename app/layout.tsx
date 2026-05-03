import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Rate Limit Cost Calculator',
  description: 'Calculate real costs of hitting API rate limits. Monitor usage patterns and recover lost revenue.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5d3e2d92-0e25-40ec-adf0-e8994b95a443"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
