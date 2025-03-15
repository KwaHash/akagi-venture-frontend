<template>
  <div id="anchor-menu" :class="s.container">
    <ThinContainer :class="s.inner">
      <div :class="s.contentsContainer">
        <h2 :class="s.heading">{{ title }}</h2>
        <div :class="s.contents">
          <div
            v-for="(contentList, index) in contents"
            :key="index"
            :class="[s.contentsItem, isActiveClass(index)]"
          >
            <div :class="s.smallThumbContainer">
              <img :src="`/images/brand/tonton/highlight/${index}.jpg`" :class="s.smallThumb" :alt="contentList[0].title">
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
            <div
              v-for="(content) in contentList"
              :key="content.title"
              :class="s.contentInner"
            >
              <div :class="s.title">{{ content.title }}</div>
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
            v-for="(content, index) in contents"
            :key="index"
            :class="[s.sliderItem, isActiveClass(index)]"
          >
            <img :src="`/images/brand/tonton/menu/${index}.jpg`" :alt="content.title">
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
  // --c-bg: var(--c-bg);
  // --c-title: var(--c-title);
  --c-text: #000;
  margin-top: 140px;
  width: 100%;
  padding: 153px 0 243px;
  border-radius: 0 var(--radius) 0 0;
  background-color: var(--c-bg);

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
  font-size: 44px;
  line-height: 1.45;
  font-family: var(--ff-title);
  font-style: normal;
  font-weight: 900;
  letter-spacing: 0.16em;
  color: var(--c-main);
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
  & + & {
    margin-top: 36px;
  }
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

.title {
  font-size: 22px;
  line-height: 1.36;
  letter-spacing: 0.08em;
  color: var(--c-sub);
  font-family: var(--ff-title);
  font-weight: 600;
}

.smallThumb {
  display: none;
  margin-top: 20px;
  border-radius: 10px;

  @include mq.smView {
    display: block;
  }
}

.text {
  margin-top: 11px;
  font-family: var(--ff-text);
  font-size: 16px;
  line-height: 1.74;
  text-align: justify;
  letter-spacing: -0.04em;
  color: var(--c-text);
  white-space: pre-line;
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
  background-color: var(--c-bg);
  padding: 5px;
  border-radius: 5px;
  flex-shrink: 0;
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
  color: var(--c-sub);
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
      title: 'メニュー',
      contents: [
        [
          {
            title: '福豚のしゃぶしゃぶ',
            text: 'シンプルな調理の仕方で福豚の美味しさをもっとも引き立てるのがしゃぶしゃぶ。とろけるような福豚をお好みのたれでご堪能下さい。',
          },
          // {
          //   title: '福豚の牧場焼き',
          //   text: '鉄板を使用して、その場で焼き上げる焼肉が楽しめます。福豚をさっと焼いて、シンプルに塩コショウや、特製のたれでお召し上がり下さい。',
          // },
          {
            title: '福豚のとんかつ',
            text: '生パン粉に、特製の植物油、群馬県産トマルの卵など、さくっと軽く揚がるように吟味した食材を使用してジューシーに仕上げました。',
          },
        ],
        [
          {
            title: '福豚のポークステーキ',
            text: '福豚ステーキに使用するステーキソースは、たっぷりの野菜と赤ワインをベースに仕上げた自家製。香ばしくジューシーな味わいです。',
          },
          {
            title: '福豚のポークカレー',
            text: 'じっくりと、旨みが出るように長時間煮込んで仕上げました。福豚の肉の旨みがたっぷりと感じられる、自慢の中辛カレーです。',
          },
          {
            title: 'キッズカレー',
            text: 'お子様でも美味しく食べられるように、甘口に仕上げたカレーです。',
          },
        ],
        [
          {
            title: `赤城山プロシュートと
            パルミジャーノのサラダ`,
            text: 'HUTTE HAYASHIの看板商品赤城山プロシュートを盛り合わせたサラダです。奥深い生ハムに、野菜のさわやかな味わいが良く合います。',
          },
          {
            title: 'ソーセージグリル',
            text: 'HUTTE HAYASHIのドイツ金賞受賞の自慢のウィンナーや太物ソーセージをたっぷりと盛り合わせました。',
          },
        ]
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
