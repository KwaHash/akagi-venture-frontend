<template>
  <div :class="s.container">
    <div :class="s.inner">
      <div :class="s.message">
        赤城山の自然の恵みを、
        <br>
        こころとからだでいっぱいに
        <br>
        味わい楽しむ体験を届けたい。
      </div>
      <p :class="s.text">
        <span>この土地が育む</span><span>素材本来の味や香りや</span>
        <br>
        本物のおいしさってなんだろう。
        <br>
        ここに来なければ出会えなかったもの
        <br>
        見られなかった景色、知らなかった感覚。
        <br>
        <span>それがわかるかもしれない、</span><span>ちょっと特別な体験をあなたへ。</span>
        <br>
        さあ、一緒に赤城山を遊ぼう。
      </p>
      <a :class="s.button" :href="`${urls.avp}/about/`">私たちについて</a>
    </div>
  </div>
</template>

<script>
import cf from '@/mixins/commonFunctions';
export default {
  mixins: [cf],
  setup() {
    const runtimeConfig = useRuntimeConfig();
    const envName = runtimeConfig.public.envName;
    return {
      envName,
    }
  },
  computed: {
    urls() {
      return cf.getUrls(this.envName);
    },
  },
}
</script>

<style module="s" lang="scss">
.container {
  position: relative;
  width: 100%;
  margin-top: -1px;
  z-index: 2;
  padding-bottom: 190px;
  padding-left: calc(var(--gutter) / 2);
  padding-right: calc(var(--gutter) / 2);
  background-color: #fff;
}

.inner {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: #fff;
  background-color: transparent;
}

.message {
  position: relative;
  z-index: 2;
  margin-top: 260px;
  font-style: normal;
  font-weight: 900;
  font-size: clamp(28px, 5px + 4vw, 38px);
  line-height: 2.05263158;
  text-align: center;
  letter-spacing: 0.21em;
  color: #246ca8;
  font-family: var(--ff-zenkaku);

  @include mq.smView {
    margin-top: 180px;
    letter-spacing: 0.05em;
    font-size: 23px;
  }

  span {
    display: inline-block;
  }
}

.text {
  margin-top: 52px;
  text-align: center;
  color: #246ca8;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 2.3;
  letter-spacing: 0.01em;
  font-family: var(--ff-gothic);

  @include mq.smView {
    font-size: 18px;
  }

  span {
    display: inline-block;
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
