<template>
  <ThinContainer>
    <div :class="s.container">
      <div :class="s.header">
        <h2 :class="s.title">福豚について</h2>
        <div :class="s.desc">
          <p :class="s.para">
            林牧場ではデュロック種と大ヨーク種、そしてランドレース種をかけあわせた品種を育てています。生産された豚すべてが福豚になれるわけではなく純白で固くしまった脂身と、きめ細かい霜降り、色味の濃い赤身のどれにおいても最高品質の豚だけが「福豚」と名付けられます。とんとん広場では、この3つの基準に従いと畜場の職人によって厳選された「福豚」だけをお届しています。
          </p>
        </div>
      </div>
      <div :class="s.contents">
        <img
          :class="s.photo"
          src="/images/fukubuta/fukubuta.jpg"
          alt="福豚について"
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
  padding-bottom: 190px;

  @include mq.smView {
    padding-bottom: 90px;
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
