<template>
  <div id="anchor-co-working" :class="s.container">
    <ThinContainer :class="s.inner">
      <div :class="[s.contentsContainer, s[`active-${isActiveIndex}`]]">
        <h2 :class="s.heading">Co<br>working<br>space</h2>
        <div :class="s.contents">
          <div :class="[s.contentsItem, isActiveClass(0)]" >
            <div :class="s.smallThumbContainer">
              <img :src="`/images/brand/cafe/co-working/${0}.jpg`" :class="s.smallThumb" alt="大自然に囲まれた仕事場">
              <div :class="[s.smallNavigatorContainer]">
                <button @click="goToPrevSlide" :class="[s.nav, s.prev, s.isHide]">
                  <svg :class="[s.navIcon, s.prev]" width="36" height="62" viewBox="0 0 36 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35 1L1 31L35 61" stroke="currentColor" :class="s.navPath" />
                  </svg>
                </button>
                <button @click="goToNextSlide" :class="[s.nav, s.next]">
                  <svg :class="[s.navIcon, s.next]" width="36" height="62" viewBox="0 0 36 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 61L35 31L1 1" stroke="currentColor" :class="s.navPath" />
                  </svg>
                </button>
              </div>
            </div>
            <Pagination
              :class="[s.pagination, s.smView]"
              :count="contents.length"
              :is-active="0"
            />
            <div :class="s.title">大自然に囲まれた仕事場</div>
            <div :class="s.text">赤城山の自然を感じながら、仕事できるスペース。更衣室を備えているので、仕事の合間にランニングやサイクリングを楽しむこともできます。ワーケーション、研修、ワークショップ等、様々な用途でご利用いただけます。</div>
            <a :class="s.link" href="https://squareup.com/appointments/book/qi0purqf8qjcgi/L5HFZEM9V6928/services" target="_blank" rel="noopener noreferrer">今すぐ予約</a>
          </div>
          <div :class="[s.contentsItem, isActiveClass(1)]" >
            <div :class="s.smallThumbContainer">
              <img :src="`/images/brand/cafe/co-working/${1}.jpg`" :class="s.smallThumb" alt="大自然に囲まれた仕事場">
              <div :class="[s.smallNavigatorContainer]">
                <button @click="goToPrevSlide" :class="[s.nav, s.prev]">
                  <svg :class="[s.navIcon, s.prev]" width="36" height="62" viewBox="0 0 36 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35 1L1 31L35 61" stroke="currentColor" :class="s.navPath" />
                  </svg>
                </button>
                <button @click="goToNextSlide" :class="[s.nav, s.next, s.isHide]">
                  <svg :class="[s.navIcon, s.next]" width="36" height="62" viewBox="0 0 36 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 61L35 31L1 1" stroke="currentColor" :class="s.navPath" />
                  </svg>
                </button>
              </div>
            </div>
            <Pagination
              :class="[s.pagination, s.smView]"
              :count="contents.length"
              :is-active="1"
            />
            <div :class="s.title">大自然に囲まれた仕事場</div>
            <div :class="s.text">
              <div :class="s.table">
                <div :class="[s.tableRow, s.rental]">
                  <div :class="[s.headCell, s.wide]">利用料金</div>
                  <div :class="s.dataCell">1日：500円 　1日貸切：5,000円　簡易更衣室利用：200円</div>
                </div>
                <div :class="[s.tableRow, s.rental]">
                  <div :class="[s.headCell, s.wide]">営業日</div>
                  <div :class="s.dataCell">木・金・土・日・祝</div>
                </div>
                <div :class="[s.tableRow, s.rental]">
                  <div :class="[s.headCell, s.wide]">営業時間</div>
                  <div :class="s.dataCell">10:00-17:00</div>
                </div>
                <div :class="[s.tableRow, s.rental]">
                  <div :class="[s.headCell, s.wide]">設備</div>
                  <div :class="s.dataCell">
                    <div :class="s.dataCellInner">
                      ミーティングテーブル（8人×1、4人×1）
                    </div>
                    <div :class="s.dataCellInner">
                      半個室ブース×2、他6席、Free wi-fi、コピー機
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a :class="s.link" href="https://squareup.com/appointments/book/qi0purqf8qjcgi/L5HFZEM9V6928/services" target="_blank" rel="noopener noreferrer">今すぐ予約</a>
          </div>
        </div>
      </div>
      <div :class="[ s.sliderContainer, s[`active-${isActiveIndex}`] ]">
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
            <img :src="`/images/brand/cafe/co-working/${index}.jpg`" :alt="content.title">
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

  &.active-1 {
    width: 42%;
    flex-basis: 556px;
    flex-shrink: 2;

    @include mq.smView {
      width: 100%;
    }
  }
}

.heading {
  font-size: clamp(50px, 6vw, 87px);
  line-height: 1;
  font-family: var(--ff-serif);
  font-style: normal;
  font-weight: normal;
  letter-spacing: -0.01em;
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
  border-radius: 10px;
  aspect-ratio: 1 / 1;
  width: 100%;
  object-fit: cover;
}

.text {
  margin-top: 11px;
  font-family: var(--ff-gothic);
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
  margin-top: 11px;
}

.tableRow {
  display: flex;
  padding: 10px 0;
  border-top: 1px dashed rgba(0, 0, 0, 0.4);
  font-size: 14px;

  @include mq.mdView {
    flex-direction: column;
    font-size: 13px;
  }
}

.headCell {
  flex-grow: 1;
  flex-shrink: 0;
  width: 3.5em;
  white-space: nowrap;

  &.wide {
    width: 115px;

    @include mq.mdView {
      font-weight: bold;
    }
  }
}

.dataCell {
  width: 100%;
  white-space: pre-line;
}

.dataCellInner {
  display: flex;
  justify-content: space-between;
}


.link {
  display: block;
  width: min(80%, 158px);
  margin-top: 27px;
  padding: 6px;
  border-radius: 12px;
  background-color: var(--c-main);
  font-size: 14px;
  line-height: 1.66;
  color: #fff;
  text-align: center;
  font-family: var(--ff-gothic);

  @include mq.smView {
    margin-left: auto;
    margin-right: auto;
  }
}

.sliderContainer {
  position: relative;
  width: 42%;
  flex-basis: 556px;
  flex-shrink: 3;

  &.active-1 {
    width: 30%;
    flex-basis: 340px;
  }

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
        ],
        [
          {
            title: '福豚のポークステーキ',
            text: '福豚ステーキに使用するステーキソースは、たっぷりの野菜と赤ワインをベースに仕上げた自家製。香ばしくジューシーな味わいです。',
          },
        ],
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
