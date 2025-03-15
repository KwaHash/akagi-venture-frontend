<template>
  <ThinContainer>
    <div :class="s.container">
      <div :class="s.inner">
        <div :class="s.message">
          キャンプをもっと
          <br>
          日常に。
        </div>
        <div :class="s.textContainer">
          <p :class="s.text">
            <span>道具がなくても、準備をしなくても、</span>
            <span>誰でも気軽にアウトドアが楽しめる。</span>
          </p>
          <p :class="s.text">
            そんな場所を目指して、baconは誕生しました。
          </p>
          <p :class="s.text">
            <span>デイキャンプやBBQだけでなく、</span>
            <span>アウトドアメーカー商品のレンタルや販売も行います。</span>
          </p>
          <p :class="s.text">
            <span>焚き火やイベント、</span>
            <span>キャンピングオフィスなど、</span>
            <span>多様な使い方で楽しんでください。</span>
          </p>
          <p :class="s.text">
            <span>『赤城でキャンプ』につながる体験を、</span>
            <span>ぜひ道の駅まえばし赤城で。</span>
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
