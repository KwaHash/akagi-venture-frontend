<template>
  <ThinContainer>
    <div :class="s.container">
      <div :class="s.header">
        <h2 :class="s.title">最新の養豚技術</h2>
        <div :class="s.desc">
          <p :class="s.para">
            繁殖・離乳・肥育の成長段階に応じて農場立地を分散させる「スリーサイト方式」を導入したきめ細かい管理体制や、外部からの病原菌や病気の連鎖を断ち切る「オールイン・アウト」の徹底は、安全な豚肉生産には欠かせないシステム。また、温度管理や給餌・除糞も機械による自動化を図っています。最新の設備と技術を駆使した「人と豚と環境にやさしい養豚」でおいしくて安全な豚肉を生産しています。
          </p>
        </div>
      </div>
      <div :class="s.contents">
        <img
          :class="s.photo"
          src="/images/fukubuta/farming.jpg"
          alt="最新の養豚技術"
        >
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
  line-height: 1em;
  letter-spacing: 0.2em;
  font-weight: 900;
}

.desc {
  margin-top: 38px;

  @include mq.smView {
    margin-top: 20px;
  }
}

.para {
  font-family: var(--ff-gothic);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.9375;
  text-align: justify;
  letter-spacing: -0.04em;

  & + & {
    margin-top: 1.5em;
  }

  @include mq.smView {
    font-size: 15px;
  }
}

.para.signature {
  margin-top: 2.3em;
  text-align: right;

  span {
    font-weight: bold;
  }
}

.contents {
  flex-shrink: 5;
  flex-basis: 758px;
  display: flex;
  align-items: center;

  @include mq.smView {
    flex-basis: 100%;
    width: 100%;
    flex-shrink: 0;
  }
}

.photo {
  width: 100%;
  border-radius: 20px;
}

</style>

<script>
import ThinContainer from '@/components/ui/ThinContainer'

export default {
  components: { ThinContainer },
}
</script>
