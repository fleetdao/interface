const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeExtension: 'ts',
  },
  localePath: path.resolve('./public/locales'),
  react: { useSuspense: false },
  debug: true,
}
