<template>
  <div :class="s.container" ref="container">
    <div :class="s.inner">
      <div :class="s.message" ref="message">
        あかぎを
        <br>
        遊ぼう。
      </div>
      <div :class="s.bg" ref="bg">
        <img :class="s.bgImg" src="/images/top/FirstView/bg-hero.jpg" alt="">
      </div>
      <div :class="[s.photo, s.photo1]" ref="photo1">
        <img :class="s.bgImg" src="/images/top/FirstView/photo-1.jpg" alt="">
      </div>
      <div :class="[s.photo, s.photo2]" ref="photo2">
        <img :class="s.bgImg" src="/images/top/FirstView/photo-2.jpg" alt="">
      </div>
      <div :class="s.mountain" />
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "FirstView",
  mounted: function() {
    this.setScrollPhotoAnimation()
  },
  methods: {
    setScrollPhotoAnimation() {
      // スマホとか縦長ディスプレイのときにscrollBase少なくしたい
      const innerHeight = window.innerHeight;
      const tlPinEnd = innerHeight * 1.5;
      const { bg, container, photo1, photo2 } = this.$refs
      gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => tlPinEnd,
          ease: "power3.out",
          scrub: true,
          pin: true,
          //markers: true,
        }
      })
      .to(bg, {
        scale: 0.9,
        width: '60%',
        height: '80%',
        borderRadius: '2vw',
      })

      gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: () => tlPinEnd,
          end: () => tlPinEnd + innerHeight,
          ease: "power3.out",
          scrub: true,
        }
      })
      .to(bg, {
        y: '-10%'
      })

      gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: () => tlPinEnd / 4,
          end: () => tlPinEnd + innerHeight,
          ease: "power3.out",
          scrub: true,
        }
      })
      .to(photo1, {
        y: '-30%',
      })
      .to(photo2, {
        y: '-150%'
      }, "=-70%")
    }
  }
}
</script>

<style module="s" lang="scss">
.container {
  position: relative;
  background-color: #fdf1e3;
  z-index: 1;
}

.inner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  height: var(--h);
}

.message {
  position: relative;
  z-index: 3;
  font-family: font.$Zenkaku;
  color: #fff;
  font-size: clamp(40px, calc(20px + 6vw), 82px);
  letter-spacing: 0.2em;
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

.photo {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  border-radius: 1vw;
  overflow: hidden;
  z-index: 2;
}

.photo1 {
  width: max(28vw, 200px);
  // transform: translate3d(-25vw, calc(60vh + 50%), 0);
  transform: translate3d(max(-25vw, calc(-100% + 20px)), calc(60vh + 50%), 0);
  aspect-ratio: 416 / 567;
}

.photo2 {
  width: max(30vw, 240px);
  transform: translate3d(25vw, calc(60vh + 50%), 0);
  aspect-ratio: 456 / 321;
}

.mountain {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 6.597222vw;
  background: transparent url('/images/top/AboutArea/bg-mountain.svg') center bottom no-repeat;
  background-size: cover;
  z-index: 2;
}

</style>
