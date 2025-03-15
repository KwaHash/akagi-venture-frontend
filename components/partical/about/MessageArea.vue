<template>
  <ThinContainer>
    <div :class="s.container">
      <div :class="s.header">
        <h2 :class="s.title">メッセージ</h2>
        <div :class="s.desc">
          <p :class="s.para">
            赤城山の自然を「味わい」「楽しむ」体験を通じて、次世代に本物の価値を伝えたい。それがAKAGI＆VENTURE PROJECTの始まりでした。
          </p>
          <p :class="s.para">
            どうしてそんなに赤城山のために頑張れるの？
            私たちの取り組みを見て
            そう尋ねる人はたくさんいます。
            だけどその答えはいつも、とても単純です。
            「だって、赤城山が大好きだから！」
          </p>
          <p :class="s.para">
            夏の過ごしやすい気候や冬の雪景色、
            動植物が生息する豊かな自然、食の豊かさ、それから・・・
            あげればきりがないほどに、赤城山は魅力でいっぱい。
          </p>
          <p :class="s.para">
            そんな、私たちが大好きな赤城山のことを
            みんなにも知ってほしい、訪れてほしい、もっと好きになってほしい。
            赤城山の自然の恵みを、こころとからだでいっぱいに味わい、楽しむ体験を届けたい。
            それがAKAGI＆VENTURE PROJECTの全てです。
            私たちと一緒に赤城山を遊びませんか？
          </p>
          <p :class="[s.para, s.signature]">
            株式会社エーアンドブイ企画
            <br>
            <span>代表取締役 林 智浩</span>
          </p>
        </div>
      </div>
      <div :class="s.contents">
        <img
          :class="s.photo"
          src="/images/about/message/photo.jpg"
          alt="photo"
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
