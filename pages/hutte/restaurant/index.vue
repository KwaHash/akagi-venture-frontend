<template>
  <ScrollContent>
    <div :class="s.container">
      <FirstView />
      <AboutArea />
      <RecommendedMenu />
      <GrandMenu />
      <DrinkMenu />
      <MorningMenu />
      <TheFooter />
    </div>
  </ScrollContent>
</template>

<style module="s" lang="scss">
.container {
  // color
  --c-main: #b10000;  // main
  --c-bg: #fff;       // background
  --c-bg-sub: #fff;   // background sub
  --c-title: #b10000; // header, title
  --c-text: #000;     // text

  // font
  --ff-title: var(--ff-serif);
  --ff-text: var(--ff-mincho);

  background-color: var(--c-bg);
  color: var(--c-text);
  font-family: var(--ff-mincho);
  width: 100vw;
  overflow-x: hidden;
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
  RecommendedMenu,
  GrandMenu,
  DrinkMenu,
  MorningMenu,
} from '@/components/partical/restaurant'

useHead({
  title: 'Hütte Hayashi Restaurant -ヒュッテハヤシ レストラン- | 赤城福豚と野菜の地産レストラン',
  meta: [
    { hid: 'description', name: 'description', content: '赤城山麓の林牧場で飼育された豚肉「福豚」と、地元野菜をふんだんに使用したメニューが魅力のレストラン。自慢の「福豚」は、林牧場の中でも厳選された最高品質の豚。さっぱりとした甘みのある脂身と柔らかくてジューシーな赤身の肉質が特徴です。' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Hütte Hayashi Restaurant -ヒュッテハヤシ レストラン- | 赤城福豚と野菜の地産レストラン' },
    { property: 'og:image', content: 'https://akagi-venture.jp/images/brand/hutte/ogImage.png', },
  ]
})
</script>
