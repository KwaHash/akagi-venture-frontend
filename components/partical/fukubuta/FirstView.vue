<template>
  <div :class="s.container">
   <h1 :class="s.message" ref="message">福豚について</h1>
   <div :class="s.bg" ref="bg">
     <img :class="s.bgImg" src="/images/fukubuta/hero.jpg" alt="">
   </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
    }
  },
};
</script>

<style module="s" lang="scss">
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: min(var(--h), 861px);
  overflow: hidden;
}

.message {
  position: relative;
  z-index: 3;
  font-family: font.$Zenkaku;
  color: #fff;
  font-size: clamp(30px, calc(20px + 4vw), 62px);
  letter-spacing: 0.2em;
  font-weight: 900;
  text-align: center;
}

.bg {
  position: absolute;
  top: 0;
  bottom:0;
  left: 0;
  right: 0;
  display: block;
  margin: auto;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}

.bgImg {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
