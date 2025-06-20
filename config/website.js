const meta = {
  // Metadata
  siteTitle: 'Ivan Aveunelly  - Creative Web Designer',
  siteDescription:
    'Ivan Aveunelly - Creative frontEnd web developer who loves javascript and modern web technologies.',
  siteTitleAlt: 'Ivan Aveunelly',
  siteShortName: 'Ivan Aveunelly',
  siteUrl: 'https://ivan-aveunelly.github.io', // No trailing slash!
};
                                      
const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/image.png`,
  twitter: '@Ivan11363729903',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'ivanbrayan-portfolio',
  googleAnalyticsID: 'G-BLFN51N71Y',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
