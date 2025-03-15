<template>
  <ThinContainer>
    <div :class="s.container">
      <div :class="s.inner">
        <div :class="s.message">
          <span>赤城山の自然に</span><span>囲まれた</span>
          <br>
          <span>山頂カフェで</span><span>ホッと一息</span>
        </div>
        <div :class="s.textContainer">
          <p :class="s.text">
            <span>赤城山ビジターセンターの</span><span>一角をリノベーションした</span>
            <span>木の温もりと自然光に包まれた山頂カフェ。</span>
          </p>
          <p :class="s.text">
            <span>テラス席もあるくつろぎの空間で</span>
            <span>赤城山の自然を眺めながら、</span><span>ゆったりとしたひと時を。</span>
          </p>
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
  padding-bottom: 190px;
}

.inner {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.message {
  position: relative;
  margin-top: 260px;
  text-align: center;
  z-index: 2;
  font-size: 34px;
  letter-spacing: 0.1em;

  @include mq.smView {
    font-size: 30px;

    span {
      display: inline-block;
    }
  }
}

.textContainer {
  width: min(700px, 100%);
  margin: 52px auto;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 2.5;

  @include mq.smView {
    font-size: 15px;
  }
}

.text {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @include mq.smView {
    span {
      display: inline-block;
    }
  }
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px auto 0;
  width: 70%;
  max-width: 530px;
  padding: 20px 40px;
  background-color: #f1cb00;
  border-radius: 16px;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  color: #fff;

  @include mq.smView {
    font-size: 17px;
    padding: 13px 30px;
  }
}

</style>

<script>
import ThinContainer from '@/components/ui/ThinContainer'

export default {
  components: { ThinContainer },
}
</script>
