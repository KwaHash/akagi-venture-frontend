<template>
  <div id="anchor-history" :class="s.container">
    <ThinContainer :class="s.inner">
      <div :class="s.contentsContainer">
        <h2 :class="s.heading">{{ title }}</h2>
        <div :class="s.contents">
          <div
            v-for="(content, index) in contents"
            :key="content.title"
            :class="[s.contentsItem, isActiveClass(index)]"
          >
            <div :class="s.contentInner">
              <div :class="s.title">{{ content.title }}</div>
              <div :class="s.smallThumbContainer">
                <img :src="`/images/brand/hutte/history/${index}.jpg`" :class="s.smallThumb" :alt="content.title">
                <div :class="[s.smallNavigatorContainer]">
                  <button @click="goToPrevSlide" :class="[s.nav, s.prev, isActiveIndex === 0 ? s.isHide : '']">
                    <svg :class="[s.navIcon, s.prev]" width="36" height="62" viewBox="0 0 36 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M35 1L1 31L35 61" stroke="currentColor" :class="s.navPath" />
                    </svg>
                  </button>
                  <button @click="goToNextSlide" :class="[s.nav, s.next, isActiveIndex === contents.length - 1 ? s.isHide : '']">
                    <svg :class="[s.navIcon, s.next]" width="36" height="62" viewBox="0 0 36 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 61L35 31L1 1" stroke="currentColor" :class="s.navPath" />
                    </svg>
                  </button>
                </div>
              </div>
              <Pagination
                :class="[s.pagination, s.smView]"
                :count="contents.length"
                :is-active="isActiveIndex"
              />
              <div :class="s.text">{{ content.text }}</div>
            </div>
          </div>
        </div>
      </div>
      <div :class="s.sliderContainer">
        <Pagination
          :class="s.pagination"
          :count="contents.length"
          :is-active="isActiveIndex"
        />
        <div :class="s.slider">
          <div
            v-for="(_, index) in contents"
            :key="index"
            :class="[s.sliderItem, isActiveClass(index)]"
          >
            <img :src="`/images/brand/hutte/history/${index}.jpg`" alt="">
          </div>
        </div>
      </div>
      <div :class="s.navigatorContainer">
        <button @click="goToPrevSlide" :class="[s.nav, s.prev, isActiveIndex === 0 ? s.isHide : '']">
          <svg :class="[s.navIcon, s.prev]" width="36" height="62" viewBox="0 0 36 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35 1L1 31L35 61" stroke="currentColor" :class="s.navPath" />
          </svg>
        </button>
        <button @click="goToNextSlide" :class="[s.nav, s.next, isActiveIndex === contents.length - 1 ? s.isHide : '']">
          <svg :class="[s.navIcon, s.next]" width="36" height="62" viewBox="0 0 36 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 61L35 31L1 1" stroke="currentColor" :class="s.navPath" />
          </svg>
        </button>
      </div>
    </ThinContainer>
  </div>
</template>

<style module="s" lang="scss">
.container {
  --bg: var(--c-bg);
  --title: var(--c-title);
  --text: var(--c-text);
  margin-top: -90px;
  width: 100%;
  padding: 153px 0;
  border-radius: 0 var(--radius) 0 0;
  background-color: var(--bg);

  @include mq.smView {
    padding: 60px 0 150px;
  }
}

.inner {
  display: flex;
  gap: 3%;
  margin-left: auto;
  margin-right: auto;
}

.contentsContainer {
  width: 30%;
  flex-basis: 340px;
  flex-shrink: 1;
  flex-grow: 1;

  @include mq.smView {
    width: 100%;
  }
}

.heading {
  font-family: var(--ff-serif);
  font-style: normal;
  font-weight: 400;
  font-size: clamp(50px, 6vw, 87px);
  line-height: 0.92;
  color: var(--title);
}

.contents {
  margin-top: 37px;
}

.contentsItem {
  display: none;

  &.isActive {
    display: block;
  }
}

.contentInner {
  position: relative;
}

.title {
  font-size: 22px;
  line-height: 1.36;
  letter-spacing: 0.08em;
  color: var(--title);
  font-family: var(--ff-mincho);
  font-weight: 600;
}

.smallThumbContainer {
  position: relative;
  width: 100%;
  display: none;
  margin-top: 20px;

  @include mq.smView {
    display: block;
  }
}

.smallThumb {
  border-radius: 10px;
}

.text {
  margin-top: 11px;
  font-family: var(--ff-gothic);
  font-size: 16px;
  line-height: 1.94;
  text-align: justify;
  letter-spacing: -0.04em;
  color: var(--text);
}

.sliderContainer {
  position: relative;
  width: 42%;
  flex-basis: 556px;
  flex-shrink: 3;

  @include mq.smView {
    display: none;
  }
}

.pagination {
  margin: 0 auto 20px;

  &.smView {
    display: none;

    @include mq.smView {
      display: flex;
      margin-top: 20px;
    }
  }
}

.slider {
  width: 100%;
}

.sliderItem {
  display: none;
  overflow: hidden;
  border-radius: 12px;

  &.isActive {
    display: block;
  }
}

.navigatorContainer {
  flex-basis: 340px;
  flex-shrink: 4;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: 30%;
  gap: max(30%, 50px);

  @include mq.smView {
    display: none;
  }
}

.nav {
  background-color: #000;
  flex-shrink: 0;
  padding: 5px;
  border-radius: 5px;
  transition: all 300ms ease-in-out;
  opacity: 1;

  &.isHide {
    opacity: 0;
    pointer-events: none;
  }

  @include mq.smView {
    &.prev {
      transform: translate3d(-30%, 0, 0);
    }

    &.next {
      transform: translate3d(30%, 0, 0);
    }
  }
}

.navIcon {
  color: var(--text);
  transform: translate3d(0, 0, 0);
  transition: transform ease-in-out 300ms;

  @include mq.smView {
    scale: 0.7;
  }

  .nav:hover &.prev {
    transform: translate3d(-15%, 0, 0) scale3d(1.1, 1, 1);

    @include mq.smView {
      transform: translate3d(-15%, 0, 0);
    }
  }

  .nav:hover &.next {
    transform: translate3d(15%, 0, 0) scale3d(1.1, 1, 1);

    @include mq.smView {
      transform: translate3d(15%, 0, 0);
    }
  }
}

.navPath {
  transition: all ease-in-out 200ms;

  .nav:hover & {
    stroke-width: 2px;
  }
}

.smallNavigatorContainer {
  position: absolute;
  top: 0;
  bottom: 0;
  display: none;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  margin: auto;

  @include mq.smView {
    display: flex;
  }
}

</style>

<script>
import ThinContainer from '@/components/ui/ThinContainer'
import Pagination from '@/components/ui/Slider/Pagination'

export default {
  components: { ThinContainer, Pagination },
  data() {
    return {
      isActiveIndex: 0,
      title: 'Our History',
      contents: [
        {
          title: '創業者エピソード',
          text: '昭和13年、働き盛りの父・那之助を亡くし、若くして家業の家畜商を継いだ林文雄は、巧みな家畜の扱いを信頼した農家から、子豚の世話を頼まれるようになります。それをきっかけに「ならば自分で繁殖豚を飼い、その豚を分けてやろう」と考え、１頭の繁殖豚の飼育を始めたところから、種豚経営をスタート。昭和34年のことでした。',
        },
        {
          title: '林牧場の発展',
          text: '「幻の豚」を探し求める文雄とミン夫婦が出会ったのは、イギリス生まれのランドレース。脂が少なく赤身が多い品種に魅了され、1頭のメス豚を輸入したところから、「幻の豚」を求めた林牧場の歴史は始まります。昭和37年、ランドレースの初めての出産により、群馬県沼田市の農場が手狭に。更なる規模拡大を図り、昭和47年に新里村へ移転。１棟あたり1000頭の豚を収容できる大規模な豚舎を建設し、最先端の技術を導入した高品質な豚の安定生産に取り組み始めたのです。',
        },
        {
          title: 'とんとん広場オープン',
          text: '昭和60年、林牧場は2代目・邦夫の代へ。最新技術を導入した養豚は軌道に乗り高品質な豚肉を安定して生産し続ける技術力は評判を呼ぶように。「せっかく育てた豚だから、消費者のもっと近くで福豚のおいしさを伝えたい」生産者としての思いが募り、平成6年に農家レストラン「とんとん広場」を開設。赤城山の広大な自然に囲まれた林牧場で生産される豚を「福豚」として提供を始めました。',
        },
        {
          title: '福豚工房のあゆみ',
          text: '平成9年、とんとん広場においてハム・ソーセージの加工販売を開始しハム・ソーセージの本場・ドイツで開催される世界最高峰のコンテストIFFAにおいて6品が金銀銅賞を受賞するという功績を残しました。平成17年には加工品製造のさらなる拡大を図り、ハム工房「手作り福豚工房」が新設。',
        },
        {
          title: 'HÜTTE HAYASHI 誕生',
          text: '「福豚」のおいしさを世界に向けて発信するのは、本場ドイツで腕を磨いてきた職人たちが送る“本物の味”。脈々と受け継がれてきた「幻の豚」への情熱は、世界を見据えたものづくりへと続いていきます。ドイツ仕込みの職人技、自然豊かな赤城山の風土、そして、選び抜かれた「福豚」が織り成す国産プレミアム生ハムブランドHütte Hayashiが誕生しました。',
        },
      ]
    }
  },
  mounted() {
    // this.isActiveIndex = 0
  },
  methods: {
    updateActive(index) {
      this.isActiveIndex = index
    },
    isActive(index) {
      return this.isActiveIndex === index
    },
    isActiveClass(index) {
      return this.isActive(index) ? this.s.isActive : '';
    },
    goToNextSlide() {
      if (!this.isLastSlide) this.isActiveIndex = this.isActiveIndex + 1;
    },
    goToPrevSlide() {
      if (!this.isFirstSlide) this.isActiveIndex = this.isActiveIndex - 1;
    }
  },
  computed: {
    isFirstSlide() {
      return this.isActiveIndex === 0;
    },
    isLastSlide() {
      return this.isActiveIndex === this.contents.length - 1;
    }
  },
}
</script>
