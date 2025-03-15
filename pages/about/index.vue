<template>
  <div :class="s.container">
    <ScrollContent>
      <FirstView />
      <AboutArea />
      <BrandArea />
      <MessageArea />
      <CompanyArea />
      <ContactArea />
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
  BrandArea,
  MessageArea,
  CompanyArea,
  ContactArea,
  Footer,
} from '@/components/partical/about'

export default {
  components: {
    ScrollContent,
    FirstView,
    AboutArea,
    BrandArea,
    MessageArea,
    CompanyArea,
    ContactArea,
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
