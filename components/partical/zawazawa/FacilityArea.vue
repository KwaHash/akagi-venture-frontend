<template>
  <div id="anchor-facility" :class="s.container">
    <ThinContainer :class="s.inner">
      <div :class="s.contentsContainer">
        <h2 :class="s.heading">{{ title }}</h2>
        <div :class="s.contents">
          <div :class="[s.contentsItem, isActiveClass(0)]" >
            <div :class="s.contentInner">
              <div :class="s.title">施設概要</div>
              <div :class="s.smallThumbContainer">
                <img :src="`/images/brand/zawazawa/facility/0.jpg`" :class="s.smallThumb" alt="施設概要">
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
                    <div :class="s.headCell">バスルーム</div>
                    <div :class="s.dataCell">2か所 2,200円／1時間</div>
                  </div>
                  <div :class="s.tableRow">
                    <div :class="s.headCell">炊事場</div>
                    <div :class="s.dataCell">
                      ウォシュレット付き洋式トイレ
                      <br>
                      2か所（屋外／ログハウス内）
                    </div>
                  </div>
                  <div :class="s.tableRow">
                    <div :class="s.headCell">Wi-Fi</div>
                    <div :class="s.dataCell">無料でWi-Fiがお使いいただけます</div>
                  </div>
                  <div :class="s.tableRow">
                    <div :class="s.headCell">売店</div>
                    <div :class="s.dataCell">バーベキュー食材・調味料・ドリンク各種／キャンプ用品／消耗品</div>
                  </div>
                  <div :class="s.tableRow">
                    <div :class="s.headCell">ログハウス</div>
                    <div :class="s.dataCell">
                      1F：フリーラウンジ（図書あり）
                      <br>
                      2F：セミナールーム 1,100円／1時間
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div :class="[s.contentsItem, isActiveClass(1)]" >
            <div :class="s.contentInner">
              <div :class="s.title">その他サービス</div>
              <div :class="s.smallThumbContainer">
                <img :src="`/images/brand/zawazawa/facility/1.jpg`" :class="s.smallThumb" alt="その他サービス">
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
                <div :class="s.subTitle">
                  雨のキャンプも快適に。
                  <br>
                  テントを撤収&乾燥してお届けします。
                </div>
                <p>
                  雨の音や匂いを感じながら行うキャンプは、普段とは違った楽しさがあるもの。ただ、雨の日の撤収は大変…。ざわざわ森では、テントの撤収や乾燥を代行するサービスをご用意。乾燥させたテントは、後日ご自宅まで発送いたします。
                </p>
                <div :class="s.table">
                  <div :class="s.tableRow">
                    <div :class="s.headCell">テント撤収</div>
                    <div :class="[s.dataCell, s.alignRight]">2,200円</div>
                  </div>
                  <div :class="s.tableRow">
                    <div :class="s.headCell">テント乾燥・お届け</div>
                    <div :class="[s.dataCell, s.alignRight]">6,600円</div>
                  </div>
                  <div :class="s.tableRow">
                    <div :class="s.headCell">タープ撤収</div>
                    <div :class="[s.dataCell, s.alignRight]">1,100円</div>
                  </div>
                  <div :class="s.tableRow">
                    <div :class="s.headCell">タープ乾燥・お届け</div>
                    <div :class="[s.dataCell, s.alignRight]">3,300円</div>
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
            <img :src="`/images/brand/zawazawa/facility/${index}.jpg`" alt="">
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
  margin-top: calc(var(--radius) * -1);
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
  font-size: 44px;
  line-height: 1.45;
  font-family: var(--ff-title);
  font-style: normal;
  font-weight: 900;
  letter-spacing: 0.16em;
  color: var(--c-main);

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
  border-radius: 12px;
}

.text {
  margin-top: 11px;
  font-family: var(--ff-text);
  font-size: 16px;
  line-height: 1.94;
  text-align: justify;
  letter-spacing: -0.04em;
  color: var(--c-text);
}

.subTitle {
  font-weight: bold;
}

.table {
  // レスポンシブの必要があるときに面倒そうなのでtableタグではやらない
  display: block;
  margin-top: 20px;
}

.tableRow {
  display: flex;
  padding: 10px 0;
  border-top: 1px dashed rgba(0, 0, 0, 0.4);
  font-size: 14px;
}

.headCell {
  flex-grow: 1;
  flex-shrink: 0;
  width: 100px;
  white-space: nowrap;
}

.dataCell {
  width: 100%;
  white-space: pre-line;
  &.alignRight {
    text-align: right;
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
      title: '施設について',
      contents: [
        {
          title: '施設概要',
          text: '',
        },
        {
          title: 'その他サービス',
          text: '',
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
