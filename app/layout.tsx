import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Abdoul Hamid COULIBALY - Software Engineer',
  description: 'Backend Software Engineer Portfolio',
  keywords: ['Backend Engineer', 'Software Developer', 'Go', 'Python', 'Rust'],
  icons: {
    icon: [
      {
        url: './icon.svg',
        type: 'image/svg+xml',
        sizes: 'any'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="./icon.svg" type="image/svg+xml" />
      </head>
      <body className={`${spaceGrotesk.className} bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
