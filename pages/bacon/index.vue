<script setup>
import {
  FirstView,
  AboutArea,
  NewsArea,
  OutlineArea,
  BBQ1Area,
  BBQ2Area,
  TakibiArea,
  CampArea,
  AccessArea,
  BlogArea,
  ColumnArea,
} from '@/components/partical/bacon'

import {
  ScrollContent,
  TheFooter,
} from '@/components/layout'

useHead({
  title: 'BACON - BBQ GRILLS & OUTDOOR GEARS | キャンプをもっと日常に。',
  meta: [
    { name: 'description', content: '道具がなくても、準備をしなくても、誰でも気軽にアウトドアが楽しめる。そんな場所を目指して、baconは誕生しました。デイキャンプやBBQだけでなく、アウトドアメーカー商品のレンタルや販売も行います。焚き火やイベント、キャンピングオフィスなど、多様な使い方で楽しんでください。『赤城でキャンプ』につながる体験を、ぜひ道の駅まえばし赤城で。' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'BACON - BBQ GRILLS & OUTDOOR GEARS | キャンプをもっと日常に。' },
    { property: 'og:image', content: 'https://akagi-venture.jp/images/brand/bacon/ogImage.png', },
  ]
})

</script>

<template>
  <ScrollContent>
    <div :class="s.container">
      <FirstView />
      <AboutArea />
      <NewsArea />
      <BlogArea />
      <ColumnArea />
      <OutlineArea />
      <BBQ1Area />
      <BBQ2Area />
      <TakibiArea />
      <CampArea />
      <AccessArea />
      <TheFooter />
    </div>
  </ScrollContent>
</template>

<style module="s" lang="scss">
.container {
  // color
  --c-main: #001ca5;    // main
  --c-sub: #be0000;     // sub
  --c-link: #be0000;    // link
  --c-bg: #fff;         // background
  --c-bg-sub: #fdf1e3;  // background sub
  --c-title: #001ca5;   // header, title
  --c-text: #001ca5;    // text

  // font
  --ff-title: var(--ff-zenkaku);
  --ff-text: var(--ff-gothic);

  background-color: var(--c-bg);
  color: var(--c-text);
  font-family: var(--ff-text);
}

</style>
