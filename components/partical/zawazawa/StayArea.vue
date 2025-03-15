<template>
  <div id="anchor-stay" :class="s.container">
    <ThinContainer :class="s.inner">
      <div :class="[s.contentsContainer, s[`active-${isActiveIndex}`]]">
        <h2 :class="s.heading">{{ title }}</h2>
        <div :class="s.contents">
          <div :class="[s.contentsItem, isActiveClass(0)]" >
            <div :class="s.contentInner">
              <div :class="s.title">キャンプサイト概要</div>
              <div :class="s.smallThumbContainer">
                <img src="/images/brand/zawazawa/stay/0.jpg" :class="s.smallThumb" alt="キャンプサイト概要">
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
                <div :class="s.table">
                  <div :class="s.tableRow">
                    <div :class="s.headCell">区画数</div>
                    <div :class="s.dataCell">10区画</div>
                  </div>
                  <div :class="s.tableRow">
                    <div :class="s.headCell">料金</div>
                    <div :class="s.dataCell">
                      ローシーズン（12月〜3月） 16,500円
                      <br>
                      ハイシーズン（4月〜11月） 22,000円
                    </div>
                  </div>
                  <div :class="s.tableRow">
                    <div :class="s.headCell">面積</div>
                    <div :class="s.dataCell">1区画 約150㎡</div>
                  </div>
                  <div :class="s.tableRow">
                    <div :class="s.headCell">電源</div>
                    <div :class="s.dataCell">800W</div>
                  </div>
                  <div :class="s.tableRow">
                    <div :class="s.headCell">駐車場</div>
                    <div :class="s.dataCell">
                      無料 2台目以降1,100円／1泊
                      <br>
                      ※サイトそばまで車で荷物を運べます
                    </div>
                  </div>
                  <div :class="s.tableRow">
                    <div :class="s.headCell">人数</div>
                    <div :class="s.dataCell">
                      大人のみ：1サイトにつき4名様まで
                      <br>
                      大人と子ども：1サイトにつき6名様まで
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div :class="[s.contentsItem, isActiveClass(1)]" >
            <div :class="s.contentInner">
              <div :class="s.title">サイトご利用上のご注意</div>
              <div :class="s.smallThumbContainer">
                <img src="/images/brand/zawazawa/stay/0.jpg" :class="s.smallThumb" alt="キャンプサイト概要">
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
              <div :class="s.text">
                <div :class="s.textInnerContainer">
                  <div :class="s.textInnerColumn">
                    <div :class="s.subTitle">チェックイン時</div>
                    <p>
                      チェックインは13:00から、チェックアウトは11:00までとなります
                      お支払いは、現金とクレジットカードがご利用いただけます
                      スタッフの対応時間は、10:00〜20:00までとなります
                    </p>
                    <div :class="s.subTitle">音について</div>
                    <p>
                      カラオケやラジカセ等、大きな音の出るものは利用をお控えください
                      22時以降の音楽は禁止です
                    </p>
                    <div :class="s.subTitle">
                      ゴミについて
                    </div>
                    <p>
                      ゴミは分別して所定のゴミ箱に捨ててください
                      自然への配慮をお願いします
                    </p>
                    <div :class="s.subTitle">
                      怪我や事故について
                    </div>
                    <p>
                      貴重品はお客様ご自身での管理をお願いします
                      持ち物の破損・紛失等については一切の責任を負いかねます
                    </p>
                  </div>
                  <div :class="s.textInnerColumn">
                    <div :class="s.subTitle">火気の取り扱いについて</div>
                    <p>
                      直火での焚き火は禁止です　必ず焚き火台をご使用ください
                      焚き火の際には地面を痛めないよう、防災シートやレンガ等で養生してください
                      打ち上げ花火や爆竹は禁止です　手持ち花火はご利用いただけます
                    </p>
                    <div :class="s.subTitle">ペットについて</div>
                    <p>
                      ペットの入場は、キャンプサイトのみとなります
                      ペットはリード等で必ずつなぎ、他のお客様のサイトや共有部分での散歩は禁止です
                      ペットに関する事故やトラブルが発生した場合は、一切の責任を負いかねます
                    </p>
                    <div :class="s.subTitle">
                      貴重品について
                    </div>
                    <p>
                      貴重品はお客様ご自身での管理をお願いします
                      持ち物の破損・紛失等については一切の責任を負いかねます
                    </p>
                    <div :class="s.subTitle">
                      備品について
                    </div>
                    <p>
                      ロッジやトイレなどの備品は持ち出し禁止です
                      レンタル品のお持ち帰りはご遠慮ください
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isActiveIndex === 0" :class="s.sliderContainer">
        <Pagination
          :class="s.pagination"
          :count="contents.length"
          :is-active="0"
        />
        <div :class="s.slider">
          <div :class="[s.sliderItem, s.isActive]" >
            <img src="/images/brand/zawazawa/stay/0.jpg" alt="">
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
  margin-top: 140px;
  width: 100%;
  padding: 153px 0 243px;
  border-radius: 0 90px 0 0;
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

  &.active-1 {
    flex-grow: 1;
    width: 72%;
  }

  @include mq.smView {
    width: 100%;
    flex-basis: unset;
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
  font-family: var(--ff-title);
  font-weight: 600;
}

.smallThumbContainer {
  display: none;
  position: relative;
  width: 100%;
  display: none;
  margin-top: 20px;

  @include mq.smView {
    display: block;
  }
}

.smallThumb {
  border-radius: 20px;
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

.textInnerContainer {
  display: flex;
  justify-content: space-between;

  @include mq.smView {
    display: block;
  }
}

.textInnerColumn {
  width: 48%;

  @include mq.smView {
    width: 100%;
  }
}

.subTitle {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
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
  font-size: 14px;
}

.headCell {
  flex-grow: 1;
  flex-shrink: 0;
  width: 3.5em;
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
      title: '泊まる',
      contents: [
        {
          title: 'レストラン',
          text: '赤城山の豊かな自然に育まれた福豚と、地元産の新鮮野菜をふんだんに使用した、身体にやさしい手作り料理がお楽しみいただけるレストランです。',
        },
        {
          title: 'こだわりショップ',
          text: 'とんとん広場のホールに広がるこだわりショップでは、林牧場の「福豚」やHütte Hayashiのハム・ソーセージ類の他にも、県内外でものづくりに励む生産者たちがこだわりを込めて作った加工品が揃うセレクトショップを展開しています。',
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
