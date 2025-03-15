<template>
  <ThinContainer>
    <div :class="s.container">
      <div :class="s.header">
        <h2 :class="s.title">赤城山について</h2>
        <div :class="s.desc">
          <p :class="s.para">
            日本百名山のひとつに名を連ねる赤城山。前橋市をはじめ桐生市、沼田市、渋川市、利根群昭和村の4市1村にまたがり、上毛カルタでは「裾野は長し赤城山」と読まれるように富士山に次いで日本で2番目に長い、広く緩やかな裾野の高原台地をなしています。広大な関東平野を望める山頂にはカルデラ湖を擁し、周囲にはたくさんの高山植物が自生する赤城山。その裾野に広がる大自然が「福豚」のふるさとです。
          </p>
        </div>
      </div>
      <div :class="s.contents">
        <img
          :class="s.photo"
          src="/images/fukubuta/akagi.jpg"
          alt="赤城山について"
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

.contents {
  flex-shrink: 5;
  flex-basis: 758px;

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
