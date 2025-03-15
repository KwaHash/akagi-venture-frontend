<template>
  <ThinContainer>
    <div :class="s.container">
      <div :class="s.inner">
        <div :class="s.message">
          よく遊び、よく食べ、
          <br>
          よく笑う。
        </div>
        <div :class="s.textContainer">
          <p :class="s.text">
            赤城山の大自然に囲まれたざわざわ森。
          </p>
          <p :class="s.text">
            <span>喧騒から離れた森の中で、</span><span>お気に入りのテントでキャンプしたり、</span>
          </p>
          <p :class="s.text">
            大切な人とゆっくり会話しながら本格的なバーベキューを楽しむことができる。
          </p>
          <p :class="s.text">
            お腹いっぱいに食べたあとは、森林の爽やかな風に吹かれながら芝生のテントに寝転ぶ。
          </p>
          <p :class="s.text">
            <span>ロッジの図書室で本を読んでいると、</span>
            <span>クワガタを捕まえて喜ぶ子どもたちの笑い声が聞こえてきた。</span>
          </p>
          <p :class="s.text">
            ここでは時間がゆったりと流れている。
          </p>
          <p :class="s.text">
            自然と触れ合うことの喜びを久しぶりに感じて、ふと笑顔がこぼれた。
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
    font-size: 27px;
  }
  @include mq.xsView {
    font-size: 25px;
  }
}

.textContainer {
  width: min(985px, 100%);
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
