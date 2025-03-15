<template>
  <div id="anchor-souvenir" :class="s.container">
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
              <img :src="`/images/brand/cafe/souvenir/${index}.jpg`" :class="s.smallThumb" :alt="contentList[0].title">
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
            <img :src="`/images/brand/cafe/souvenir/${index}.jpg`" :alt="content.title">
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
  --c-text: #fff;
  margin-top: calc(-1 * var(--radius));
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
  font-family: var(--ff-serif);
  font-style: normal;
  font-weight: 400;
  font-size: clamp(50px, 6vw, 87px);
  line-height: 0.92;
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
  color: var(--c-title);
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

  @include mq.smView {
    font-size: 15px;
  }
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
  color: var(--c-text);
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
      title: 'Souvenir',
      contents: [
        [
          {
            title: `HÜTTE HAYASHHI
            HAM.SAUSAGE`,
            text: '赤城山プロシュートをはじめ、ポークジャーキーやソーセージを販売。ドイツ仕込みの職人の技と、素材の福豚、赤城山の自然が織りなす、三位一体の味わいを大切な方への贈り物にどうぞ。食彩の王国、バナナマンのせっかくグルメ、ヒルナンデス等、数々のメディアで取り上げられています。',
          },
        ],
        [
          {
            title: 'SELECT FOOD',
            text: '前橋の豊かな大地に育まれた農産物や、昔ながらの職人が手がけた懐かしい味わいのお菓子。心とからだがよろこぶような素材にこだわった食べ物をお届けしています。'
          },
        ],
        [
          {
            title: `GOODS / OUTDOOR GEAR`,
            text: '赤城山で開発された焚火台をはじめとしたオーナーセレクトのおすすめアウトドアギアを販売。手ぬぐいや木炭、ガス缶などの消耗品も取り揃えています。また、地元のアーティストが手がけた民芸品などかわいらしいグッズも並んでいます。',
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
