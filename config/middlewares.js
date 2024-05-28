module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'http:', 'https:'],
          'img-src': [
            "'self",
            'data:',
            'blob:',
            'lg-strapi-s3.s3.us-east-1.amazonaws.com'
          ],
          'media-src': [
            "'self",
            'data:',
            'blob:',
            'lg-strapi-s3.s3.us-east-1.amazonaws.com'
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
