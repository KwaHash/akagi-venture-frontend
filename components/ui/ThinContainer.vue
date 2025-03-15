<template>
  <div :class="s.container">
    <slot />
  </div>
</template>

<style lang="scss" module="s">
.container {
  display: block;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 var(--gutter);
}
</style>
