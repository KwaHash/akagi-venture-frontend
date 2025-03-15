<template>
  <ThinContainer>
    <div :class="s.container">
      <div :class="s.inner">
        <div :class="s.textContainer">
          <p :class="s.text"><span>豚肉の品質は、エサ、水、環境、遺伝で</span><span>決まるといわれています。</span></p>
          <p :class="s.text"><span>林牧場では、高品質な豚肉を安定的に生産し続けるために最新設備による徹底した温度・衛生管理や</span><span>良好な発育に適したエサの自動供餌など、</span></p>
          <p :class="s.text">ストレスのない快適な環境づくりにこだわりながら</p>
          <p :class="s.text">おいしくて安全な豚肉の生産に取り組んでいます。</p>
        </div>
      </div>
    </div>
  </ThinContainer>
</template>

<style module="s" lang="scss">
.container {
  position: relative;
  width: 100%;
  z-index: 2;
  margin-top: 114px;
  margin-bottom: 190px;

  @include mq.smView {
    margin-bottom: 90px;
  }
}

.inner {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.textContainer {
  width: min(985px, 100%);
  margin: 52px auto;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 2.5;
  color: var(--c-main);

  @include mq.smView {
    font-size: 14.5px;
    letter-spacing: -0.3px;
  }
}

.text {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

</style>

<script>
import ThinContainer from '@/components/ui/ThinContainer'

export default {
  components: { ThinContainer },
}
</script>
