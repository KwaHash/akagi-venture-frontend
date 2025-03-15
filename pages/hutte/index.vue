<template>
  <ScrollContent>
    <div :class="s.container">
      <FirstView />
      <AboutArea />
      <NewsArea />
      <BlogArea />
      <ColumnArea />
      <OutlineArea />
      <ProductsArea />
      <HistoryArea />
      <WhereArea />
      <TheFooter />
    </div>
  </ScrollContent>
</template>

<style module="s" lang="scss">
.container {
  // color
  --c-main: #b10000;  // main
  --c-bg: #000;       // background
  --c-bg-sub: #fff;   // background sub
  --c-title: #b10000; // header, title
  --c-text: #fff;     // text

  // font
  --ff-title: var(--ff-serif);
  --ff-text: var(--ff-mincho);

  background-color: var(--c-bg);
  color: var(--c-text);
  font-family: var(--ff-mincho);
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
  BlogArea,
  ColumnArea,
  OutlineArea,
  ProductsArea,
  HistoryArea,
  WhereArea,
} from '@/components/partical/hutte'

useHead({
  title: 'HUTTE HAYASHI-ヒュッテハヤシ- | 「福豚」を使った手作り・味・素材にこだわった国産プレミアム生ハムブランド',
  meta: [
    { hid: 'description', name: 'description', content: 'モンドセレクション金賞！生ハムコテレートをはじめ、ロースハム、ベーコン、あらびきウィンナーほか、群馬ふるさと認定食品ポークウィンナーなどを全国へ提供しています。' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'HUTTE HAYASHI-ヒュッテハヤシ- | 「福豚」を使った手作り・味・素材にこだわった国産プレミアム生ハムブランド' },
    { property: 'og:image', content: 'https://akagi-venture.jp/images/brand/hutte/ogImage.png', },
  ]
})
</script>
