<template>
  <ThinContainer>
    <div :class="s.container">
      <div :class="s.inner">
        <div :class="s.textContainer">
          <span :class="s.text">春の芽吹きや鮮やかな新緑</span>
          <span :class="s.text">夏の爽やかな風や川のせせらぎ、虫の声</span>
          <span :class="s.text">秋の実りや、色づく紅葉</span>
          <span :class="s.text">冬のワカサギ、雪化粧。</span>
          <span :class="s.text">ゆっくりと流れる時のなかで</span>
          <span :class="s.text">いつだって、大自然の豊かさを教えてくれる</span>
          <span :class="s.text">私たちが大好きな赤城山の魅力を</span>
          <span :class="s.text">1人でも多くの人に伝えたい。</span>
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
    font-size: 15px;
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
