<template>
  <div :class="s.container">
    <ScrollContent>
      <FirstView />
      <AboutArea />
      <NewsArea />
      <BlogArea />
      <ColumnArea />
      <OutlineArea />
      <HighlightArea />
      <MenuArea />
      <WienerArea />
      <AccessArea />
      <TheFooter />
    </ScrollContent>
  </div>
</template>

<style module="s" lang="scss">
.container {
  // color
  --c-main: #f67f61;    // main
  --c-sub: #246ca8;     // sub
  --c-link: #f1cb00;    // link
  --c-bg: #fff;         // background
  --c-bg-sub: #fdf1e3;  // background sub
  --c-title: #f67f61;   // header, title
  --c-text: #246ca8;    // text

  // font
  --ff-title: var(--ff-zenkaku);
  --ff-text: var(--ff-gothic);

  background-color: var(--c-bg);
  color: var(--c-text);
  font-family: var(--ff-text);
  height: var(--h);
}

</style>

<script setup>
import {
  ScrollContent,
  TheFooter,
} from '@/components/layout'

import {
  FirstView,
  AboutArea,
  NewsArea,
  OutlineArea,
  HighlightArea,
  MenuArea,
  WienerArea,
  AccessArea,
  BlogArea,
  ColumnArea,
} from '@/components/partical/tonton'

useHead({
  title: '福豚の里 とんとん広場 | 林牧場がお届けする安心・安全な「福豚」と地元の新鮮野菜が主役の農家レストラン',
  meta: [
    { hid: 'description', name: 'description', content: '群馬県赤城山の豊かな自然に育まれた最高品質の選ばれた安心・安全な「福豚」と地元の新鮮野菜が主役の農家レストランやウィンナー教室を提供する「福豚の里 とんとん広場」。身体にやさしい手作り料理で、笑顔あふれるひとときを。とんとん広場のホールに広がるこだわりショップでは林牧場の「福豚」や、Hütte Hayashiのハム・ソーセージ類なども販売しています。' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: '福豚の里 とんとん広場 | 林牧場がお届けする安心・安全な「福豚」と地元の新鮮野菜が主役の農家レストラン' },
    { property: 'og:image', content: 'https://akagi-venture.jp/images/brand/tonton/ogImage.png', },
  ]
})
</script>
