/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pixelflow.dev', // Update with your actual domain
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/api/*',
    '/admin/*',
    '/private/*',
    '/_next/*',
    '/404',
    '/500',
  ],
  changefreq: 'weekly', 
  priority: 0.7,        
  trailingSlash: false,
  sourceMap: false,
  // Additional SEO configurations for PixelFlow
  additionalPaths: async (config) => [
    await config.transform(config, '/patterns'),
    await config.transform(config, '/contribute'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
    ],
    additionalSitemaps: [
      'https://pixelflow.dev/sitemap.xml', // Update with your actual domain
    ],
  },
};