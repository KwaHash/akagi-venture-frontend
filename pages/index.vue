<template>
  <div :class="s.container">
    <ScrollContent>
      <FirstView />
      <AboutArea />
      <NewsArea />
      <BlogArea />
      <ColumnArea />
      <PlaceArea />
      <HutteHayashiArea />
      <ContactArea />
      <TheFooter />
    </ScrollContent>
  </div>
</template>

<script>
import {
  ScrollContent
} from '@/components/layout'

import {
  AboutArea,
  ContactArea,
  FirstView,
  HutteHayashiArea,
  NewsArea,
  BlogArea,
  ColumnArea,
  PlaceArea,
  TheFooter,
} from '@/components/partical/top'

export default {
  components: {
    ScrollContent,
    AboutArea,
    ContactArea,
    FirstView,
    HutteHayashiArea,
    NewsArea,
    BlogArea,
    ColumnArea,
    PlaceArea,
    TheFooter,
  },
  data() {
    return {
    }
  },
};
</script>

<style module="s" lang="scss">
.container {
  height: var(--h);
}
</style>
