<template>
  <ThinContainer>
    <div :class="s.container">
      <div :class="s.inner">
        <div :class="s.message">
          赤城山を、
          <br>
          世界に誇る生ハムの産地に。
        </div>
        <div :class="s.textContainer">
          <p :class="s.text">
            <span>ドイツ仕込みの職人技、</span><span>自然豊かな赤城山の風土、</span>
          </p>
          <p :class="s.text">
            <span>そして、選び抜かれた「福豚」が</span><span>三位一体となって織り成す</span>
          </p>
          <p :class="s.text">
            <span :class="s.ilne">“ここにしかない味”。</span>
          </p>
          <p :class="s.text">
            <span>Hütte Hayashiが世界に向けて送り出す、</span><span>とっておきの味と香りをお愉しみください。</span>
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
  letter-spacing: 0.1em;
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
