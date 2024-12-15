# Portfolio - Abdoul Hamid COULIBALY

A modern, responsive portfolio website built with Next.js 13, TypeScript, and Tailwind CSS.

## Features

- 🌓 Dark/Light mode
- 🌍 Internationalization (English/French)
- 📱 Fully responsive design
- ⚡ Fast page loads with Next.js 13 App Router
- 🎨 Smooth animations with Framer Motion
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📊 Vercel Analytics integration

## Tech Stack

- **Framework:** Next.js 13 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React, React Icons
- **Animations:** Framer Motion
- **Analytics:** Vercel Analytics
- **Font:** Space Grotesk
- **Deployment:** Static Export

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                   # Next.js 13 app directory
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
├── public/              # Static assets
└── styles/             # Global styles
```

## Customization

1. Update the content in the components to match your information
2. Modify the theme colors in `app/globals.css`
3. Update the metadata in `app/layout.tsx`
4. Replace the favicon in `public/icon.svg`

## Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to repository Settings > Pages
4. Under "Build and deployment", select "GitHub Actions" as the source
5. The site will be automatically deployed when you push to the main branch
6. Your site will be available at `https://yourusername.github.io/portfolio`

### Manual Build

```bash
pnpm build
# or
npm run build
```

This will create a static export in the `out` directory that you can deploy to any static hosting service.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

- Abdoul Hamid COULIBALY
- [LinkedIn](https://linkedin.com/in/abdoul-hamid-coulibaly)
- [GitHub](https://github.com/dimahluodba96)
