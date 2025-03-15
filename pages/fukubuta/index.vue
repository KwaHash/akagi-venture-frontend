<template>
  <div :class="s.container">
    <ScrollContent>
      <FirstView />
      <AboutArea />
      <AkagiArea />
      <FarmingArea />
      <FukubutaArea />
      <Footer />
    </ScrollContent>
  </div>
</template>

<script>
import {
  ScrollContent
} from '@/components/layout'

import {
  FirstView,
  AboutArea,
  AkagiArea,
  FarmingArea,
  FukubutaArea,
  Footer,
} from '@/components/partical/fukubuta'

export default {
  components: {
    ScrollContent,
    FirstView,
    AboutArea,
    AkagiArea,
    FarmingArea,
    FukubutaArea,
    Footer,
  },
  data() {
    return {
    }
  },
};
</script>

<style module="s" lang="scss">
.container {
  // color
  --c-main: rgb(36, 108, 168);
  --c-text: #251e1c;

  height: var(--h);
  color: var(--c-text);
}
</style>
