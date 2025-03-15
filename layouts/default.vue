<template>
  <TheHeader :is-open="isOpen" @click-open="openMenu"/>
  <TheMenu :is-open="isOpen" @click-close="closeMenu" />
  <slot />
</template>

<script>
import {
  TheHeader,
  TheMenu,
} from '@/components/layout'

export default {
  components: {
    TheHeader,
    TheMenu,
  },
  mounted() {
    const root = document.documentElement;
    root.style.setProperty('--h', `${window.innerHeight}px`);
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.isOpen = true
    },
    closeMenu() {
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss" module="s">
@use "@/assets/styles/common";

.layout {
  display: block;
  height: 100%;
}
</style>
