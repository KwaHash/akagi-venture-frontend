<template>
  <div :class="s.container">
    <div :class="s.message" ref="section">
      <div :class="s.bg" ref="bg" />
    </div>
    <div :class="s.header">
      <h2 :class="s.title">アクセス</h2>
    </div>
    <div :class="s.inner">
      <div :class="s.addressContainer">
        <p>〒371-0247 群馬県前橋市三夜沢町723-4</p>
        <p :class="s.tel">
          <span>TEL: 027-283-2983(とんとん広場)</span>
          <span>FAX: 027-283-2980</span>
        </p>
        <a :class="s.button" href="https://goo.gl/maps/vxcTbKDTT7RYauog6" target="_blank" rel="noopener noreferrer">Google MAP</a>
      </div>
      <div :class="s.howToContainer">
        <div :class="s.howTo">
          <div :class="s.howTo__header">お車をご利用の場合</div>
          <div :class="s.howTo__text">
            関越自動車道赤城I.C.より約22km（車で約30分）
            <br>
            北関東自動車道伊勢崎I.C.より約12km（車で約20分）
          </div>
        </div>
        <div :class="s.howTo">
          <div :class="s.howTo__header">公共交通機関ご利用の場合</div>
          <div :class="s.howTo__text">上毛電鉄/大胡駅→赤城山（タクシーで約15分）</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted: function() {
    this.setAnimation()
  },
  data() {
    return {
      parallax: 20,
    };
  },
  methods: {
    setAnimation() {
      const getRatio = (el) => window.innerHeight / (window.innerHeight + el.offsetHeight);
      const section = this.$refs.section;
      const bg = this.$refs.bg;

      gsap.fromTo(bg, {
        yPercent: -1 * this.parallax,
      }, {
        yPercent: () => this.parallax * (1 - getRatio(section)),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true // to make it responsive
        }
      });
    },
  },
}

</script>

<style module="s" lang="scss">
.container {
  margin-top: -90px;
}

.message {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: min(70vw, 700px);
  border-radius: 0 var(--radius) 0 0;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: calc(1% * (v-bind(parallax) + 100));
  background: #fdf1e3 url('/images/brand/zawazawa/place/bg.jpg') center no-repeat;
  background-size: cover;
  z-index: 1;

  @include mq.smView {
    transition: transform 10ms linear;
  }
}

.header {
  position: relative;
  width: 100%;
  margin-top: -90px;
  padding: 115px 25px;
  background-color: var(--c-bg-sub);
  border-radius: 0 var(--radius) 0 0;
  z-index: 2;

  @include mq.smView {
    margin-top: calc(-1 * var(--radius));
    padding: 60px 25px 45px;
  }
}

.title {
  font-size: 44px;
  line-height: 1.45454545;
  text-align: center;
  font-weight: 900;
  letter-spacing: 0.16em;
  color: var(--c-title);
  font-family: var(--ff-title);

  @include mq.smView {
    font-size: 32px;
  }
}

.inner {
  background-color: var(--c-bg-sub);
  color: #251e1c;
  padding-bottom: 280px;

  @include mq.smView {
    padding-bottom: 180px;
  }
}

.addressContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tel {
  display: flex;
  flex-wrap: wrap;
  gap: 0 16px;

  span {
    white-space: nowrap;
  }
  @include mq.smView {
    justify-content: center;

  }
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 340px;
  min-width: fit-content;
  margin-top: 40px;
  padding: 8px 40px;
  background-color: var(--c-link);
  border-radius: 16px;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 1.6;
  color: #fff;
  font-family: var(--ff-zenkaku);

  @include mq.smView {
    font-size: 14px;
  }
}

.howToContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 80px auto 0;
  width: min(100%, 1440px);
  gap: 80px 0;
}

.howTo {
  width: min(100%, 470px);
  margin: 0 var(--gutter);
  text-align: center;
}

.howTo__header {
  padding-bottom: 0.80952381em;
  border-bottom: 1px solid;
  font-size: 21px;
  line-height: 1.42857143;
  text-align: center;
  letter-spacing: 0.08em;
  font-weight: 900;
  font-family: var(--ff-gothic);

  @include mq.smView {
    font-size: 18px;
  }
}

.howTo__text {
  margin-top: 14px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.9375;
  text-align: center;
  letter-spacing: -0.04em;

  @include mq.smView {
    font-size: 14px;
  }
}

</style>
