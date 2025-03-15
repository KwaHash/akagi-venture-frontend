<template>
  <div :class="s.container">
    <h2 :class="s.header">遊び場<span>いっぱい!</span></h2>
    <div :class="[s.section, s.peak]">
      <h3 :class="s.sectionTitle">山頂</h3>
      <a :href="`${urls.brand.hutte}/cafe/`" :class="[s.place, s.place1]">
        <img :class="s.photo" src="/images/top/PlaceArea/photo1.jpg" alt="" ref="photo1">
        <div :class="s.content">
          <div :class="s.name">HÜTTE HAYASHI CAFE</div>
          <div :class="s.desc">
            赤城山ビジターセンターの一角をリノベーションした山頂カフェ。
            地元食材を生かした料理と、オリジナルブレンドコーヒーをお楽しみください。
          </div>
        </div>
      </a>
    </div>
    <div :class="[s.section, s.mid]">
      <h3 :class="s.sectionTitle">中腹</h3>
      <div :class="s.sectionContainer">
        <a :href="`${urls.brand.tonton}/`" :class="[s.place, s.place2]" ref="place2">
          <img :class="s.photo" src="/images/top/PlaceArea/photo2.jpg" alt="" ref="photo2">
          <div :class="s.content">
            <div :class="s.name">とんとん広場</div>
            <div :class="s.desc">
              選び抜かれた福豚と、採れたての旬野菜がお腹いっぱい食べられる
              笑顔あふれるごちそうレストランです。
            </div>
          </div>
        </a>
        <a :href="`${urls.brand.zawazawa}/`" :class="[s.place, s.place3]" ref="place3">
          <img :class="s.photo" src="/images/top/PlaceArea/photo3.jpg" alt="" ref="photo3">
          <div :class="s.content">
            <div :class="s.name">ざわざわ森</div>
            <div :class="s.desc">
              赤城山の大自然に囲まれたざわざわ森。
ふかふかの芝生のキャンプサイトは1日10組限定。
本格的な炭火BBQや手ぶらキャンプが楽しめます。</div>
          </div>
        </a>
        <a :href="`${urls.brand.hutte}/`" :class="[s.place, s.place4]" ref="place4">
          <img :class="s.photo" src="/images/top/PlaceArea/photo4.jpg" alt="" ref="photo4">
          <div :class="s.content">
            <div :class="s.name">HÜTTE HAYASHI</div>
            <div :class="s.desc">ドイツ仕込みの職人技と、本場のスパイス、
自然豊かな赤城山の風土、そして選び抜かれた福豚で作る
本格的なハム・ソーセージをお届けしています。</div>
          </div>
        </a>
      </div>
    </div>
    <div :class="[s.section, s.bottom]">
      <h3 :class="s.sectionTitle">ふもと</h3>
      <div :class="s.sectionContainer">
        <a :href="`${urls.brand.bacon}/`" :class="[s.place, s.place5]" ref="place5">
          <img :class="s.photo" src="/images/top/PlaceArea/photo5.jpg" alt="" ref="photo5">
          <div :class="s.content">
            <div :class="s.name">BACON</div>
            <div :class="s.desc">
              手ぶらでぶらりと訪れても安心。
              広大な芝生広場でのびのびと
              焚火やディキャンプ、BBQが誰でも気軽に楽しめます。
            </div>
          </div>
        </a>
        <a :href="`${urls.brand.hutte}/restaurant/`" :class="[s.place, s.place6]" ref="place6">
          <img :class="s.photo" src="/images/top/PlaceArea/photo6.jpg" alt="" ref="photo6">
          <div :class="s.content">
            <div :class="s.name">
              HÜTTE HAYASHI
              <br>
              RESTAURANT
            </div>
            <div :class="s.desc">
              福豚のおいしさが堪能できる自慢の豚肉料理と
              地元農家から直送される色とりどりの旬野菜が並ぶサラダバーが楽しめます。
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import cf from '@/mixins/commonFunctions';

gsap.registerPlugin(ScrollTrigger);

export default {
  mixins: [cf],
  mounted: function() {
    this.setAnimation()
  },
  setup() {
    const runtimeConfig = useRuntimeConfig();
    const envName = runtimeConfig.public.envName;
    return {
      envName,
    }
  },
  computed: {
    urls() {
      return cf.getUrls(this.envName);
    },
  },
  methods: {
    setAnimation() {
      const defaultValue = {
        set: {
          y: 0,
          x: 0,
          opacity: 0,
          scale: 0.95,
        },
        to: {
          scale: 1,
          opacity: 1,
          y: 0,
          x: 0,
        }
      }
      const config = {
        photo1: {
          set: {
            ...defaultValue.set,
            y: 30,
            x: 30,
            rotate: -3,
          },
          to: {
            ...defaultValue.to,
            rotate: -6,
          }
        },
        photo2: {
          set: {
            ...defaultValue.set,
            y: 30,
            x: 40,
            rotate: -3,
          },
          to: {
            ...defaultValue.to,
            rotate: -6,
          }
        },
        photo3: {
          set: {
            ...defaultValue.set,
            y: 30,
            x: -70,
            rotate: -6,
          },
          to: {
            ...defaultValue.to,
            rotate: 3,
          }
        },
        photo4: {
          set: {
            ...defaultValue.set,
            y: 30,
            x: 70,
            rotate: 6,
          },
          to: {
            ...defaultValue.to,
            rotate: -5,
          }
        },
        photo5: {
          set: {
            ...defaultValue.set,
            y: 30,
            x: 50,
            rotate: 3,
          },
          to: {
            ...defaultValue.to,
            rotate: -6,
          }
        },
        photo6: {
          set: {
            ...defaultValue.set,
            y: 30,
            x: -70,
            rotate: -6,
          },
          to: {
            ...defaultValue.to,
            rotate: 3,
          }
        }
      }

      Object.keys(config).forEach((key) => {
        const target = this.$refs[key]
        gsap.set(target, config[key].set)
        gsap.to(target, {
          ...config[key].to,
          scrollTrigger: {
            trigger: target,
            start: "top center+=3%",
          }
        })
      })
    }
  }
}
</script>

<style module="s" lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 128px 0 250px;
  background: #fdf1e3 url('/images/top/PlaceArea/bg.svg') no-repeat;
  background-position: left 0 bottom 0;
  background-size: 100% 100%;
  overflow: hidden;

  @include mq.smView {
    padding: 80px 0 250px;
  }
}

.header {
  display: flex;
  gap: 30px;
  font-weight: 900;
  font-size: 70px;
  text-align: center;
  letter-spacing: 0.14em;
  color: #f67f61;
  font-family: var(--ff-zenkaku);

  span {
    color: #246ca8;
  }

  @include mq.smView {
    gap: 8px;
    font-size: 42px;
    letter-spacing: 0.06em
  }
}

.section {
  &.peak {
    margin-top: 114px;

    @include mq.smView {
      margin-top: 80px;
    }
  }

  &.mid {
    margin-top: 164px;

    @include mq.smView {
      margin-top: 80px;
    }
  }

  &.bottom {
    margin-top: 224px;

    @include mq.smView {
      margin-top: 80px;
    }
  }
}

.sectionTitle {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  font-size: 52px;
  font-weight: 900;
  text-align: center;
  letter-spacing: 0.08em;
  font-family: var(--ff-zenkaku);
  color: #f67f61;

  @include mq.smView {
    font-size: 42px;
  }
}

.sectionContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 80px;
  margin-top: 30px;
}

.place {
  display: block;
  width: min(40vw, 520px);

  @include mq.smView {
    width: 95vw;
  }
}

.place3 {
  margin-top: 190px;

  @include mq.smView {
    margin-top: 0;
  }
}

.place4 {
  margin-top: 90px;

  @include mq.smView {
    margin-top: 0;
  }
}

.place5 {
  margin-top: 150px;

  @include mq.smView {
    margin-top: 0;
  }
}

.photo {
  width: 100%;
  border-radius: 20px;
  transition: all 600ms cubic-bezier(0.68, -0.55, 0.27, 1.55);

  @include mq.smView {
    margin: auto;
    width: 90%;
  }
}

.content {
  // display: flex;
  // gap: 20px;
  width: 100%;
  margin-top: 40px;
  color: #246ca8;

  @include mq.smView {
    // flex-wrap: wrap;
    padding: 0 10px;
  }
}

.name {
  flex-shrink: 0;
  font-size: 27px;
  line-height: 1.22222222;
  letter-spacing: 0.08em;
  font-weight: 900;
  font-family: var(--ff-zenkaku);

  @include mq.smView {
    font-size: 22px;
  }
}

.desc {
  margin-top: 8px;
  font-size: 15px;
  color: #251e1c;

  @include mq.smView {
    font-size: 13px;
  }
}

</style>
