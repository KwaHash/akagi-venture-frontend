<template>
  <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="15.5" :stroke="color"/>
    <line x1="10" y1="16" x2="22" y2="16" :stroke="color" stroke-width="2"/>
    <line x1="16" y1="22" x2="16" y2="10" :stroke="color" stroke-width="2"/>
  </svg>
</template>

<script>
export default {
  props: ['color']
}
</script>
