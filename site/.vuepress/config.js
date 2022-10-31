module.exports = {
  title: 'Yami Studio',
  description: 'YAMI BEST WAIFU 💜',
  base: '/',
  dest: 'dist/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { property: 'og:image', content: '/cover.jpg' }],
    ['meta', { name: 'theme-color', content: '#7c02b8' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }],
    ['meta', { name: 'renderer', content: 'webkit' }],
    ['meta', { name: 'force-rendering', content: 'webkit' }],
    ['meta', { name: 'applicable-device', content: 'pc,mobile' }],
    ['meta', { name: 'author', content: 'Sekkon' }],
    ['meta', { name: 'copyright', content: 'Yami Studio' }],
    ['meta', { name: "keywords", content: "Yami, Yami Studio, Fansub, Animes, Sekkon, yami-s.com" }]
  ],
  locales: {
    '/': {
      lang: 'pt-br',
      title: 'Yami Studio',
      description: 'YAMI BEST WAIFU 💜'
    }
  },
//  theme: 'ououe',
  theme: require.resolve('../../ououe-mod/'),
  themeConfig: {
    cover: '/cover.png',//https://getwallpapers.com/wallpaper/full/e/2/e/856433-most-popular-to-love-ru-konjiki-no-yami-wallpaper-1920x1200.jpg',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdAAAACVCAYAAADov6trAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNzRBRTYwNzEzRTkxMUUzODE2M0I2NUVGQTJDNkNBMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNzRBRTYwODEzRTkxMUUzODE2M0I2NUVGQTJDNkNBMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU3NEFFNjA1MTNFOTExRTM4MTYzQjY1RUZBMkM2Q0EyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU3NEFFNjA2MTNFOTExRTM4MTYzQjY1RUZBMkM2Q0EyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+67DYKgAAH55JREFUeNrsnQm8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',
    backgroundImage: true,
    nav: [
//      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/' },
      { text: 'Projetos', link: '/projects/' },
      { text: 'Status & Planejamento', link: '/status/' },
      { text: 'Doação', link: '/donate/' },
      { text: 'F.A.Q.', link: '/faq/' },
//      { text: 'Tags', link: '/tag/' },
//      { text: 'Categories', link: '/category/' },
      { text: 'Sobre', link: '/about/' },
      { text: 'Discord', link: 'https://discord.gg/vsJwPayvz3' }
    ],
    footer: [
//      { text: 'Github', link: 'https://github.com/tolking' }
    ]
  },
  plugins: [
    // permalink for posts
    ['blog-multidir', {
      postsDir: {
        posts: 'posts/:slug'
//        posts: 'posts/:year/:month/:day/:slug'
      }
    }],
    // add vuepress-plugin-container
    ['container', {
      type: 'right',
      defaultTitle: ''
    }],
    ['container', {
      type: 'tip',
      before: info => `<div class="tip"><p class="title">${info}</p>`,
      after: '</div>'
    }],
    ['container', {
      type: 'warning',
      before: info => `<div class="warning"><p class="title">${info}</p>`,
      after: '</div>'
    }],
    ['container', {
      type: 'danger',
      before: info => `<div class="danger"><p class="title">${info}</p>`,
      after: '</div>'
    }],
    ['disqus', {
      shortname: 'yami-s-1'
    }]
  ]
}
