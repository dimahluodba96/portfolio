/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Set base path. This is the slug of your GitHub repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "/portfolio",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },

  /**
   * Configure asset prefix for GitHub Pages.
   * This is needed when deploying to GitHub Pages.
   */
  assetPrefix: "/portfolio/",
}

module.exports = nextConfig
