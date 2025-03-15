<template>
  <div :class="s.container">
    <div :class="s.bg" />
    <div :class="s.logo">
      <img
        :class="s.logoImg"
        src="/images/brand/restaurant/logo.svg"
        alt="Hütte Hayashi Restaurant"
      />
    </div>
  </div>
</template>

<style module="s" lang="scss">
.container {
  position: relative;
  width: 100%;
  height: var(--h);
}

.bg {
  position: relative;
  width: 100%;
  height: 100%;
  background: #000 url('/images/brand/restaurant/hero.jpg') no-repeat center;
  background-size: cover;
  z-index: 1;
}

.logo {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  margin: auto;
  width: min(715px, 80vw);
  z-index: 2;
}

.logoImg {
  width: 100%;
}

</style>

<script>
export default {
  name: "FirstView"
}
</script>
