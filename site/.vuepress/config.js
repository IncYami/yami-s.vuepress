module.exports = {
  title: 'Yami Studio',
  description: '',
  base: '/',
  dest: 'dist/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { property: 'og:image', content: backgroundImage }],
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
    cover: '/cover.jpg',//https://getwallpapers.com/wallpaper/full/e/2/e/856433-most-popular-to-love-ru-konjiki-no-yami-wallpaper-1920x1200.jpg',
    logo: '/logo.png',
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
