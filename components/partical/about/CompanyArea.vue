<template>
  <ThinContainer>
    <div :class="s.container">
      <div :class="s.header">
        <h2 :class="s.title">会社概要</h2>
      </div>
      <div :class="s.contents">
        <div :class="s.table">
          <div :class="s.tr">
            <div :class="s.th">会社名</div>
            <div :class="s.td">株式会社エーアンドブイ企画</div>
          </div>
          <div :class="s.tr">
            <div :class="s.th">事業内容</div>
            <div :class="s.td">
              レストランの運営、バーベキュー場の運営、食肉の販売、
              <br>
              ハムソーセージの加工、農作物の生産・販売
            </div>
          </div>
          <div :class="s.tr">
            <div :class="s.th">設立年月日</div>
            <div :class="s.td">1985年2月1日</div>
          </div>
          <div :class="s.tr">
            <div :class="s.th">代表者</div>
            <div :class="s.td">
              代表取締役会長：林きみ代
              <br>
              代表取締役社長：林智浩
            </div>
          </div>
          <div :class="s.tr">
            <div :class="s.th">従業員数</div>
            <div :class="s.td">28名</div>
          </div>
          <div :class="s.tr">
            <div :class="s.th">本社所在地</div>
            <div :class="s.td">
              〒371-0247群馬県前橋市三夜沢町534
              <br>
              TEL 027-280-2438　FAX 027-283-2980
            </div>
          </div>
        </div>
      </div>
    </div>
  </ThinContainer>
</template>

<style module="s" lang="scss">
.container {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 30px 60px;
  width: 100%;
  z-index: 2;
  margin-top: 114px;
  margin-bottom: 190px;

  @include mq.smView {
    margin-bottom: 90px;
    flex-direction: column;
  }
}

.header {
  flex-shrink: 2;
  flex-basis: 453px;

  @include mq.smView {
    flex-basis: 100%;
    width: 100%;
    flex-shrink: 0;
  }
}

.title {
  position: relative;
  font-family: font.$Zenkaku;
  color: var(--c-main);
  font-size: clamp(25px, calc(15px + 4vw), 50px);
  letter-spacing: 0.2em;
  font-weight: 900;
}

.desc {
  margin-top: 38px;

  @include mq.smView {
    margin-top: 20px;
  }
}

.contents {
  flex-shrink: 5;
  flex-basis: 758px;

  @include mq.smView {
    flex-basis: 100%;
    width: 100%;
    flex-shrink: 0;
  }
}

.table {
  display: block;
  font-family: var(--ff-gothic);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.9375;
  text-align: justify;
  letter-spacing: -0.04em;

  @include mq.smView {
    font-size: 15px;
  }
}

.tr {
  display: flex;
  width: 100%;
  margin-top: 34px;
  gap: 1em;

  @include mq.mdView {
    display: block;
  }
}

.th {
  width: 6em;
  font-weight: bold;
  flex-shrink: 0;
}

</style>

<script>
import ThinContainer from '@/components/ui/ThinContainer'

export default {
  components: { ThinContainer },
  data() {
    return {
      brands: [
        {
          name: 'hutte',
          link: '/'
        },
        {
          name: 'tonton',
          link: '/'
        },
        {
          name: 'zawazawa',
          link: '/'
        },
        {
          name: 'bacon',
          link: '/'
        },
      ]
    }
  }
}
</script>
