<template>
  <footer>
    <div :class="s.r2">
      <p><span>R2 事業再構築</span></p>
      <p><span>&copy; A&amp;V PROJECT</span></p>
    </div>
  </footer>
</template>

<style module="s" lang="scss">
.r2 {
  font-size: 12px;
  position: absolute;
  bottom: 1.2em;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  span {
    display: inline-block;
    padding: .1em .4em;
    background-color: rgba(white, .6);
    border-radius: 4px;
  }
}
</style>

<script>

export default {
  components: {},
}
</script>
