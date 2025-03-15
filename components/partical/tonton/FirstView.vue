<template>
  <div :class="s.container">
    <div :class="s.bg" />
    <div :class="s.logo">
      <img
        :class="s.logoImg"
        src="/images/brand/tonton/logo.png"
        alt="福豚の里 とんとん広場"
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
  background: #000 url('/images/brand/tonton/hero.jpg') no-repeat center;
  background-size: cover;
  z-index: 1;
}

.logo {
  position: absolute;
  bottom: 42px;
  left: 0;
  right: 0;
  display: block;
  margin: auto;
  width: clamp(280px, 38.194444vw, 550px);
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
