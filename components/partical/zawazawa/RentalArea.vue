<template>
  <div id="anchor-rental" :class="s.container">
    <ThinContainer :class="s.inner">
      <div :class="[s.contentsContainer, s[`active-${isActiveIndex}`]]">
        <h2 :class="s.heading">{{ title }}</h2>
        <div :class="s.contents">
          <div :class="[s.contentsItem, isActiveClass(0)]" >
            <div :class="s.contentInner">
              <div :class="s.title">手ぶらキャンププラン</div>
              <div :class="s.smallThumbContainer">
                <img src="/images/brand/zawazawa/rental/0.jpg" :class="s.smallThumb" alt="手ぶらキャンププラン">
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
                :is-active="isActiveIndex"
              />
              <div :class="s.text">
                キャンプをやってみたいけど、道具を揃えるのはちょっと…という方のために、手ぶらキャンププランをご用意。必要な道具一式が揃っているので、気軽にキャンプが楽しめます。設営の際には、スタッフが道具の使い方等をレクチャーするので、安心です。
                <div :class="s.table">
                  <div :class="s.tableRow">
                    <div :class="s.headCell">料金</div>
                    <div :class="s.dataCell">
                      ローシーズン（12月〜3月）44,000円
                      <br>
                      ハイシーズン（4月〜11月）55,000円
                      <br>
                      サイト料・キャンプ用品込み
                    </div>
                  </div>
                  <div :class="s.tableRow">
                    <div :class="s.headCell">キャンプ<br>用品</div>
                    <div :class="s.dataCell">テント、シートセット、タープ、テーブル、 チェア、LEDランタン、寝袋、調理道具一式、ツーバーナーコンロ（ガス缶付）、 水タンク、クーラーボックス</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div :class="[s.contentsItem, isActiveClass(1)]" >
            <div :class="s.contentInner">
              <div :class="s.title">レンタル用品</div>
              <div :class="s.smallThumbContainer">
                <img src="/images/brand/zawazawa/rental/1.jpg" :class="s.smallThumb" alt="レンタル用品">
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
                :is-active="isActiveIndex"
              />
              <div :class="s.text">
                <div :class="s.table">
                  <div :class="[s.tableRow, s.rental]">
                    <div :class="[s.headCell, s.wide]">テント</div>
                    <div :class="s.dataCell">
                      <div :class="s.dataCellInner">
                        <div :class="s.dataCellHead">CanvasCamp シブレー500 protech（8人用）</div>
                        <div :class="s.dataCellPrice">11,000円</div>
                      </div>
                      <div :class="s.dataCellInner">
                        <div :class="s.dataCellHead">Coleman タフワイドドーム(4〜6人用)</div>
                        <div :class="s.dataCellPrice">4,400円</div>
                      </div>
                      <div :class="s.dataCellInner">
                        <div :class="s.dataCellHead">Coleman エクスカーションティピー（3〜4人用）</div>
                        <div :class="s.dataCellPrice">3,850円</div>
                      </div>
                    </div>
                  </div>
                  <div :class="[s.tableRow, s.rental]">
                    <div :class="[s.headCell, s.wide]">シートセット</div>
                    <div :class="s.dataCell">
                      <div :class="s.dataCellInner">
                        <div :class="s.dataCellHead">インナーマット</div>
                        <div :class="s.dataCellPrice">1,650円</div>
                      </div>
                    </div>
                  </div>
                  <div :class="[s.tableRow, s.rental]">
                    <div :class="[s.headCell, s.wide]">タープ</div>
                    <div :class="s.dataCell">
                      <div :class="s.dataCellInner">
                        <div :class="s.dataCellHead">Coleman、DDタープ（4〜6人用）</div>
                        <div :class="s.dataCellPrice">1,650円</div>
                      </div>
                    </div>
                  </div>
                  <div :class="[s.tableRow, s.rental]">
                    <div :class="[s.headCell, s.wide]">テーブル</div>
                    <div :class="s.dataCell">
                      <div :class="s.dataCellInner">
                        <div :class="s.dataCellHead">Snowpeak ワンアクションテーブル ロング 竹</div>
                        <div :class="s.dataCellPrice">1,650円</div>
                      </div>
                    </div>
                  </div>
                  <div :class="[s.tableRow, s.rental]">
                    <div :class="[s.headCell, s.wide]">チェア</div>
                    <div :class="s.dataCell">
                      <div :class="s.dataCellInner">
                        <div :class="s.dataCellHead">Snowpeak FDチェア</div>
                        <div :class="s.dataCellPrice">550円</div>
                      </div>
                    </div>
                  </div>
                  <div :class="[s.tableRow, s.rental]">
                    <div :class="[s.headCell, s.wide]">ランタン</div>
                    <div :class="s.dataCell">
                      <div :class="s.dataCellInner">
                        <div :class="s.dataCellHead">ジェントス LEDランタン</div>
                        <div :class="s.dataCellPrice">550円</div>
                      </div>
                    </div>
                  </div>
                  <div :class="[s.tableRow, s.rental]">
                    <div :class="[s.headCell, s.wide]">BBQコンロ</div>
                    <div :class="s.dataCell">
                      <div :class="s.dataCellInner">
                        <div :class="s.dataCellHead">ユニフレーム タフグリル</div>
                        <div :class="s.dataCellPrice">1,650円</div>
                      </div>
                    </div>
                  </div>
                  <div :class="[s.tableRow, s.rental]">
                    <div :class="[s.headCell, s.wide]">寝袋</div>
                    <div :class="s.dataCell">
                      <div :class="s.dataCellInner">
                        <div :class="s.dataCellHead">Coleman コルネットストレッチ</div>
                        <div :class="s.dataCellPrice">880円</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            v-for="(_, index) in contents"
            :key="index"
            :class="[s.sliderItem, isActiveClass(index)]"
          >
            <img :src="`/images/brand/zawazawa/rental/${index}.jpg`" alt="">
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
  --c-title: var(--c-title);
  --c-text: #000;
  margin-top: calc(var(--radius) * -1);
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

  @include mq.smView {
    width: 100%;
    flex-basis: unset;
  }

  &.active-1 {
    width: 42%;
    flex-basis: 556px;
    flex-shrink: 2;

    @include mq.smView {
      width: 100%;
      flex-basis: unset;
    }
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

.title {
  font-size: 22px;
  line-height: 1.36;
  letter-spacing: 0.08em;
  color: var(--c-title);
  font-family: var(--ff-title);
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
  aspect-ratio: 1 / 1;
  width: 100%;
  object-fit: cover;
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
    &.rental {
      flex-direction: column;
      font-size: 13px;
    }
  }
}

.headCell {
  flex-grow: 1;
  flex-shrink: 0;
  width: 5.5em;
  white-space: nowrap;

  &.wide {
    width: 115px;

    @include mq.mdView {
      width: 100%;
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

.dataCellPrice {
  padding-left: 1em;
  text-align: right;
  white-space: nowrap;
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
      title: '借りる',
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
