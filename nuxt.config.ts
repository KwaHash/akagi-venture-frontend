// https://nuxt.com/docs/api/configuration/nuxt-config
const env: { [key: string]: string } = process.env;

const config: { [key: string]: any }  = {
  app: {
    head: {
      script: [
        {
          hid: 'gtmHead',
          innerHTML: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KWJZTLK');`,
        },
      ],
      title: 'Akagi Venture Project',
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: https://ogp.me/ns#'
      },
      meta: [
        { name: 'description', content: '赤城山の自然の恵みを、こころとからだでいっぱいに味わい楽しむ体験を届けたい。この土地が育む素材本来の味や香りや本物のおいしさってなんだろう。ここに来なければ出会えなかったもの見られなかった景色、知らなかった感覚。それがわかるかもしれない、ちょっと特別な体験をあなたへ。さあ、一緒に赤城山を遊ぼう。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Akagi Venture Project' },
        { property: 'og:image', content: 'https://akagi-venture.jp/images/ogp.png', },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styles/font";
            @use "@/assets/styles/mq";
          `,
        },
      },
    },
  },
  components: [
    {
      path: '~/components',
    },
  ],
  runtimeConfig: {
    public: {
      // node env
      envName: process.env.NUXT_ENV_NAME,
      // api
      apiToken: process.env.NUXT_API_TOKEN,
      apiBase: process.env.NUXT_API_BASE,
    }
  },
  imports: {
    // autoImport: false
  },
  build: {
    transpile: ['gsap'],
  },
  modules: [
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      Rubik: [500],
      'Zen+Kaku+Gothic+New': [900],
      Marcellus: [400],
    },
  },
};

/**
 * サブドメイン対応
 * 各ブランドをルートディレクトリに書き出し
 */
if (env.brand) {
  config.dir = { pages: `pages/${env.brand}` };
  config.nitro = {
    output: {
      dir: `${env.brand}`,
      publicDir: `${env.brand}`,
    },
  };
} else {
  config.nitro = {
    output: {
      dir: 'a&v',
      publicDir: 'a&v',
    },
  }
}

export default defineNuxtConfig(config)
