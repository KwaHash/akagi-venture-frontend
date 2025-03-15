<template>
  <ScrollContent>
    <div :class="s.container">
      <FirstView />
      <AboutArea />
      <OutlineArea />
      <MenuArea />
      <SouvenirArea />
      <CoWorkingArea />
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
  TheFooter
} from '@/components/layout'

import {
  FirstView,
  AboutArea,
  // NewsArea,
  OutlineArea,
  MenuArea,
  SouvenirArea,
  CoWorkingArea,
} from '@/components/partical/cafe'

useHead({
  title: 'HUTTE HAYASHI CAFE | 赤城山覚満淵の瀟洒なカフェ',
  meta: [
    { hid: 'description', name: 'description', content: '赤城山ビジターセンターの一画をリノベーションしたゆったりと寛げる瀟洒なカフェです。世界中から厳選した豆の中から、赤城山をイメージしてブレンド。季節ごとに配合や焙煎を変え、シーズンごとの味わいが楽しめます。また、ガレットやホットドッグ、スイーツもお楽しみいただけます。' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'HUTTE HAYASHI CAFE | 赤城山覚満淵の瀟洒なカフェ' },
    { property: 'og:image', content: 'https://akagi-venture.jp/images/brand/hutte/ogImage.png', },
  ]
})
</script>
