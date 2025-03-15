<template>
  <component :is="tag" ref="el">
    <slot />
  </component>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
gsap.registerPlugin(SplitText, ScrollTrigger)

export default {
  name: 'AnimateText',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'div',
    },
  },
  mounted: function() {
    this.setAnimation()
  },
  methods: {
    setAnimation() {
      // const splitedText = new SplitText(this.$refs.el)
      // gsap.from(splitedText.chars, {
      //   opacity: 0,
      //   scale: 0.1,
      //   y: '100%',
      //   duration: 0.3,
      //   ease:"bounce",
      //   stagger: {
      //     each: 0.05,
      //   },
      //   scrollTrigger: {
      //     trigger: this.$refs.el,
      //     start: "top center",
      //   }
      // });
    },
  },
};
</script>

<style>
.a {
  display: block;
}
</style>
