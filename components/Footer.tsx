'use client'

import { ExternalLink, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-16 py-4 border-t border-border">
      <div className="container mx-auto px-6 flex items-center justify-center gap-2 text-sm text-muted">
        <span>Made with</span>
        <Heart className="w-4 h-4 text-red-500 animate-pulse" />
        <span>using</span>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center hover:text-foreground transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          <span className="ml-1">Vercel</span>
        </a>
        <span>&</span>
        <a
          href="https://cursor.sh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center hover:text-foreground transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          <span className="ml-1">Cursor</span>
        </a>
      </div>
    </footer>
  )
}
