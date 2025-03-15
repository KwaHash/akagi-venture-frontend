<template>
  <div ref="wrapper">
    <div ref="content">
      <slot />
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from 'gsap/ScrollSmoother'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

export default {
  data() {
    return {
      scroller: null,
    };
  },
  mounted() {
    const { wrapper, content } = this.$refs;
    window.scroller = ScrollSmoother.create({
      wrapper,
      content,
      smooth: 1,
      smoothTouch: 0.8,
      speed: 1.2,
      // normalizeScroll: true,
      effects: true,
    });
  },
  unmounted() {
    window.scroller = null
  }
}
</script>

<style>
/* なぜかビルドエラーになるので書いておかないとだめ*/
</style>
