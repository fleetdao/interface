const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'zh-CN'],
    localeExtension: 'ts',
  },
  localePath: path.resolve('./public/locales'),
  react: { useSuspense: false },
  debug: false,
}
