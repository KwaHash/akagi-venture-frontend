<template>
  <ThinContainer>
    <div :class="s.container">
      <div :class="s.inner">
        <div :class="s.message">
          笑顔あふれる<br>ごちそうレストラン。
        </div>
        <div :class="s.textContainer">
          <p :class="s.text">
            赤城山の豊かな自然に育まれた福豚と
          </p>
          <p :class="s.text">
            地元産の新鮮野菜をふんだんに使用した
          </p>
          <p :class="s.text">
            身体にやさしい手作り料理で、
          </p>
          <p :class="s.text">
            笑顔あふれるひとときを。
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
  line-height: 1.85;
  font-weight: bold;
  letter-spacing: 0.1em;
  font-family: var(--ff-title);

  @include mq.smView {
    margin-top: 130px;
    font-size: 28px;
  }
}

.textContainer {
  width: min(700px, 100%);
  margin: 52px auto 0;
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
