<template>
  <div id="anchor-wiener" :class="s.container">
    <ThinContainer :class="s.inner">
      <div :class="s.contentsContainer">
        <h2 :class="s.heading">{{ title }}</h2>
        <div :class="s.contents">
          <div :class="[s.contentsItem, isActiveClass(0)]" >
            <div :class="s.contentInner">
              <div :class="s.smallThumbContainer">
                <img :src="`/images/brand/tonton/wiener/0.jpg`" :class="s.smallThumb" alt="ウィンナー教室 - 1">
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
              <div :class="s.text">特別な体験を通じて、普段何気なく食べているウインナーのことを知ってほしい。そんな思いから、とんとん広場ではウインナー作りを体験できる教室を開催しています。子供も大人もみんなでわいわい、おいしく学べる時間です。</div>
            </div>
          </div>
          <div :class="[s.contentsItem, isActiveClass(1)]" >
            <div :class="s.contentInner">
              <div :class="s.smallThumbContainer">
                <img :src="`/images/brand/tonton/wiener/1.jpg`" :class="s.smallThumb" alt="ウィンナー教室 - 2">
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
              <div :class="s.text">
                <div :class="s.table">
                  <div :class="s.tableRow">
                    <div :class="s.headCell">開催時間</div>
                    <div :class="s.dataCell">
                      {{
                      `[平日]
                      午前の部 11：00～
                      午後の部 14：00～
                      [土日祝]
                      午前の部 10：30～
                      午後の部 15：00～
                      `}}
                    </div>
                  </div>
                  <div :class="s.tableRow">
                    <div :class="s.headCell">料金</div>
                    <div :class="s.dataCell">
                      {{
                      `[ペアコース]
                      2名様分 3,240円(税込)
                      1名様追加ごと 1,296円(税込)
                      [団体コース]
                      1名様 1,080円(税込)
                      ※10名以上・要予約`
                      }}
                    </div>
                  </div>
                  <div :class="s.tableRow">
                    <div :class="s.headCell">持ち物</div>
                    <div :class="s.dataCell">
                      お手拭、エプロン
                    </div>
                  </div>
                </div>
              </div>
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
            <img :src="`/images/brand/tonton/wiener/${index}.jpg`" alt="">
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
  --c-bg: var(--c-bg-sub);
  // --c-title: var(--c-title);
  --c-text: #000;
  // margin-top: 140px;
  width: 100%;
  padding: 153px 0 243px;
  border-radius: 0 var(--radius) 0 0;
  background-color: var(--c-bg);

  @include mq.smView {
    padding-top: 60px;
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
  font-size: 40px;
  line-height: 1.45;
  font-family: var(--ff-title);
  font-style: normal;
  font-weight: 900;
  letter-spacing: 0.16em;
  color: var(--c-main);
  white-space: nowrap;

  @include mq.mdViewOnly {
    font-size: 38px;
    letter-spacing: 0;
  }
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

.table {
  // レスポンシブの必要があるときに面倒そうなのでtableタグではやらない
  display: block;
  color: #251e1c;
}

.tableRow {
  display: flex;
  padding: 10px 0;
  border-top: 1px dashed rgba(0, 0, 0, 0.4);
  font-size: 16px;
}

.headCell {
  flex-grow: 1;
  flex-shrink: 0;
  width: 5.5em;
  white-space: nowrap;
}

.dataCell {
  width: 100%;
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
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: transform ease-in-out 100ms;

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
      title: 'ウィンナー教室',
      contents: Array(2),
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
