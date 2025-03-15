<template>
  <div :class="s.container">
    <ScrollContent>
      <FirstView />
      <AboutArea />
      <NewsArea />
      <BlogArea />
      <ColumnArea />
      <OutlineArea />
      <StayArea />
      <EatArea />
      <RentalArea />
      <FacilityArea />
      <AccessArea />
      <TheFooter />
    </ScrollContent>
  </div>
</template>

<style module="s" lang="scss">
.container {
  // color
  --c-main: #00843d;    // main
  --c-sub: #246ca8;     // sub
  --c-link: #f1cb00;    // link
  --c-bg: #fff;         // background
  --c-bg-sub: #fdf1e3;  // background sub
  --c-title: #00843d;   // header, title
  --c-text: #246ca8;    // text

  // font
  --ff-title: var(--ff-zenkaku);
  --ff-text: var(--ff-gothic);

  background-color: var(--c-bg);
  color: var(--c-text);
  font-family: var(--ff-text);
}
</style>

<script setup>
import {
  FirstView,
  AboutArea,
  OutlineArea,
  StayArea,
  EatArea,
  RentalArea,
  FacilityArea,
  AccessArea,
  NewsArea,
  BlogArea,
  ColumnArea,
} from '@/components/partical/zawazawa'

import {
  ScrollContent,
  TheFooter,
} from '@/components/layout'

useHead({
  title: 'ざわざわ森 | 赤城山１日限定10組のキャンプ場',
  meta: [
    { hid: 'description', name: 'description', content: '「ざわざわ森」は、１日限定10組だけのキャンプ場とBBQを提供しています。群馬県赤城山の豊かな自然に育まれた場所で、のびのびと過ごすことができます。よく食べ、よく遊び、よく笑おう。皆様のお越しをお待ちしています。' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'ざわざわ森 | 赤城山１日限定10組のキャンプ場' },
    { property: 'og:image', content: 'https://akagi-venture.jp/images/brand/zawazawa/ogImage.png', },
  ]
})
</script>
