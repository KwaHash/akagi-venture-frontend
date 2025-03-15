<template>
  <div id="anchor-where" :class="s.container" ref="container">
    <ThinContainer>
      <h2 :class="s.header">Where to Find</h2>
      <div :class="s.inner">
        <ul :class="s.placeList">
          <li v-for="place in placeList" :key="place.name" :class="[s.place, `place-${place.name}`]">
            <div :class="s.placeInner">
              <img
                :class="[s.spImage]"
                :key="place.name"
                :src="`/images/brand/hutte/where/${place.name}.jpg`"
                :alt="place.title"
              >
              <h3 :class="s.title">{{place.title}}</h3>
              <p :class="s.text">{{place.text}}</p>
              <p v-if="place.info" :class="s.info">{{place.info}}</p>
              <div
                v-if="place.name === 'hutte'"
                :class="s.insta">
                <p>instagram</p>
                <a href="https://www.instagram.com/hutte_hayashi/" target="_blank">
                  <img src="/images/about/insta.png" alt="">
                </a>
              </div>
              <a
                :href="place.link.href"
                :class="s.link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ place.link.label || 'Google MAP' }}
              </a>
            </div>
          </li>
        </ul>
        <div :class="s.imageContainer" ref="imageContainer">
          <div :class="s.imageList">
            <img
              v-for="place in placeList"
              :class="[s.image, `image-${place.name}`]"
              :key="place.name"
              :src="`/images/brand/hutte/where/${place.name}.jpg`"
              :alt="place.title"
              :ref="setImageRef"
            >
          </div>
        </div>
      </div>
    </ThinContainer>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ThinContainer from '@/components/ui/ThinContainer'

gsap.registerPlugin(ScrollTrigger);

export default {
  components: { ThinContainer },
  mounted() {
    gsap.timeline({
      scrollTrigger: {
        trigger: this.$refs.imageContainer,
        start: "center center",
        end: "bottom top-=200%",
        scrub: false,
        pin: true,
        invalidateOnRefresh: true,
      }
    })

    this.placeList.forEach((place) => {
      if (place.name === 'cafe') return;
      gsap.timeline({
        scrollTrigger: {
          trigger: `.place-${place.name}`,
          start: 'top center',
          toggleActions: 'play none none reverse',
          // end: 'bottom center',
          // scrub: true,
          // markers: true,
          invalidateOnRefresh: true,
        }
      })
      .from(`.image-${place.name}`, { opacity: 0 })
      .to(`.image-${place.name}`, { opacity: 1 });
    });
  },
  methods: {
    setImageRef(el) {
      this.imageRefs.push(el)
    }
  },
  beforeUpdate() {
    this.imageRefs = []
  },
  updated() {
    console.log(this.imageRefs)
  },
  data() {
    return {
      imageRefs: [],
      placeList: [
        {
          name: 'cafe',
          title: 'HÜTTE HAYASHI Cafe',
          text: `赤城山ビジターセンターの一角をリノベーションした山頂カフェ。温もりのある木とたっぷりの光が差し込むくつろぎの空間で地元産の食材を生かした自慢の料理をお楽しみください。
          厳選した豆を使った赤城ブレンドコーヒーに癒されるカフェタイムも。`,
          info: `〒371-0101 群馬県前橋市富士見町赤城山1
5月-10月：木-日.祝 10:00-17:00
11月-4月：土.日.祝 10:00-16:00
※詳しい営業時間はSNSでご確認ください。`,
          link: {
            href: 'https://goo.gl/maps/Jc5X9EVGkd1ehDUj9',
          }
        },
        {
          name: 'hutte',
          title: 'HÜTTE HAYASHI',
          text: '三夜沢町の福豚の里「とんとん広場」の敷地内にあるハム・ソーセージ工房「HUTTE HAYASHI」。ドイツ仕込みの職人技と、本場のスパイス、自然豊かな赤城山の風土、そして選び抜かれた福豚が織り成す本格的なシャルキュトリーを丹精込めて作っています。',
          info: `〒371-0247 群馬県前橋市三夜沢町534
10:00～14:00`,
          link: {
            href: 'https://goo.gl/maps/YAEgGRFtTeKLJT5q8',
          }
        },
        {
          name: 'restaurant',
          title: 'HÜTTE HAYASHI Restaurant',
          text: `福豚のおいしさが堪能できる自慢の豚肉料理と地元農家から直送される色とりどりの旬野菜が並ぶサラダバーが魅力のレストラン。
          赤城山麓の豊かな自然に育まれた心と体を満たすおいしい食事を味わいに来てください。`,
          info: `〒371-0048 群馬県前橋市田口町36番地
平日：11:00~17:00
土日：8:00~10:00、11:00~17:00
※お食事は15:00まで （ラストオーダー14:00）
定休日：12月30日〜1月3日
          `,
          link: {
            href: 'https://goo.gl/maps/B6ugptZZZtiphKm89',
          }
        },
        {
          name: 'online',
          title: 'ONLINE STORE',
          text: '国産プレミアム生ハム「赤城山プロシュート」をはじめHUTTE HAYASHI が自信をもっておすすめする商品を全国各地のお客様のもとへお届け。大切な人への贈り物にふさわしい、ギフトボックスもご用意しています。',
          link: {
            href: 'https://www.hutte-hayashi.com/',
            label: 'オンラインストアへ',
          }
        },
      ],
    }
  }
}
</script>

<style module="s" lang="scss">
.container {
  position: relative;
  display: block;
  margin-top: 140px;
  width: 100%;
  padding: 153px 0 40vh;
  border-radius: 0 var(--radius) 0 0;
  background-color: var(--c-bg-sub);
  color: #000;

  @include mq.mdViewOnly {
    padding-bottom: 40vh;
  }

  @include mq.smView {
    padding: 60px 0 150px;
  }
}

.header {
  font-family: var(--ff-serif);
  font-style: normal;
  font-weight: 400;
  font-size: clamp(50px, 6vw, 87px);
  line-height: 0.92;
  color: var(--c-title);
  text-align: center;
}

.inner {
  position: relative;

  @include mq.mdView {
    width: 90%;
  }

  @include mq.smView {
    width: 100%;
  }
}

.placeList {
  position: relative;
  z-index: 2;
}

.place {
  display: flex;
  margin-top: 180px;

  @include mq.mdViewOnly {
    margin-top: 80px;
    justify-content: flex-end;
  }

  &:nth-of-type(even) {
    justify-content: flex-end;
  }

  @include mq.smView {
    margin-top: 120px;
    justify-content: center;
  }
}

.placeInner {
  width: min(353px, (100% - 340px) / 2);
  padding: 20px;

  @include mq.mdViewOnly {
    width: min(49%, 353px);
  }

  @include mq.smView {
    padding: 0;
    width: 100%;
  }
}

.spImage {
  display: none;
  width: 100%;
  border-radius: 9px;
  aspect-ratio: 1 / 1;
  @include mq.smView {
    display: block;
  }
}

.title {
  font-size: 40px;
  font-weight: normal;
  font-family: var(--ff-serif);
  line-height: 1.3;
  color: var(--c-title);

  @include mq.smView {
    margin-top: 20px;
    font-size: 33px;
  }
}

.text {
  margin-top: 5px;
  font-size: 16px;
  font-family: var(--ff-gothic);
  font-weight: 500;
  line-height: 1.9;
  letter-spacing: -0.04em;
  text-align: justify;
  white-space: pre-line;

  @include mq.smView {
    margin-top: 10px;
    font-size: 15px;
    line-height: 1.8;
  }
}

.info {
  margin-top: 28px;
  font-size: 14px;
  line-height: 1.78;
  color: #000;
  font-family: var(--ff-gothic);
  font-weight: 700;
  text-align: justify;
  white-space: pre-line;

  @include mq.smView {
    margin-top: 10px;
  }
}

.insta {
  margin-top: 15px;
  display: flex;
  img {
    margin-left: .5em;
    width: 30px;
    height: 30px;
  }
}

.link {
  display: block;
  width: 100%;
  margin-top: 27px;
  padding: 6px;
  border-radius: 12px;
  background-color: var(--c-main);
  font-size: 18px;
  line-height: 1.66;
  color: #fff;
  text-align: center;
  font-family: var(--ff-mincho);
}

.imageContainer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: min(1440px - var(--gutter) * 2, 100% - var(--gutter) * 2);
  z-index: 1;
}

.imageList {
  position: relative;
  width: max(340px, 100% - 353px * 2 - 20px * 2);
  margin: auto;
  aspect-ratio: 1 / 1;

  @include mq.mdViewOnly {
    margin: 0;
    width: min(49%, 353px);
  }
}

.image {
  position: absolute;
  width: 100%;
  aspect-ratio: 1 / 1;
  opacity: 0;
  border-radius: 20px;

  &:first-child {
    opacity: 1;
  }

  @include mq.smView {
    display: none;
  }
}

</style>
