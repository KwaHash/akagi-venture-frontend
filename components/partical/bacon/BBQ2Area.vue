<template>
  <div id="anchor-bbq2" :class="s.container">
    <ThinContainer :class="s.inner">
      <div :class="s.contentsContainer">
        <h2 :class="s.heading">食材持ち込み<br>BBQ</h2>
        <div :class="s.contents">
          <div :class="[s.contentsItem, s.isActive]" >
            <div :class="s.contentInner">
              <div :class="s.title">ご利用にあたって</div>
              <div :class="s.smallThumbContainer">
                <img :src="`/images/brand/bacon/bbq2/0.jpg`" :class="s.smallThumb" alt="キャンプサイト概要">
              </div>
              <div :class="s.text">
                <div :class="s.table">
                  <div :class="s.tableRow">
                    <div :class="s.headCell">料金</div>
                    <div :class="s.dataCell">¥9,900／サイト</div>
                  </div>
                  <div :class="s.tableRow">
                    <div :class="s.headCell">お時間</div>
                    <div :class="s.dataCell">
                      ランチタイム / 11:00~15:00
                      <br>
                      4時間制となっておりますので
                      <br>
                      ゆったりとおくつろぎいただけます。
                    </div>
                  </div>
                  <div :class="s.tableRow">
                    <div :class="s.headCell">BBQ食材</div>
                    <div :class="s.dataCell">お持ち込みください</div>
                  </div>
                  <div :class="s.tableRow">
                    <div :class="s.headCell">飲み物</div>
                    <div :class="s.dataCell">お持ち込みください</div>
                  </div>
                  <div :class="s.tableRow">
                    <div :class="s.headCell">利用人数</div>
                    <div :class="s.dataCell">2〜6名</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="s.sliderContainer">
        <div :class="s.slider">
          <div :class="[s.sliderItem, s.isActive]" >
            <img :src="`/images/brand/bacon/bbq2/0.jpg`" alt="">
          </div>
        </div>
      </div>
    </ThinContainer>
  </div>
</template>

<style module="s" lang="scss">
.container {
  // --c-bg: var(--c-bg-sub);
  --c-title: var(--c-sub);
  // --c-text: #000;
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
    flex-grow: 1;
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
}

.nav {
  background-color: transparent;
  flex-shrink: 0;
  opacity: 1;
  transition: opacity ease-in-out 300ms;

  &.isHide {
    opacity: 0;
    pointer-events: none;
  }
}
</style>

<script>
import ThinContainer from '@/components/ui/ThinContainer'

export default {
  components: { ThinContainer },
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
