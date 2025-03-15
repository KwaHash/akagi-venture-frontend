<template>
  <ThinContainer>
    <div :class="s.container">
      <div :class="s.inner">
        <h2 :class="s.heading">ABOUT</h2>
        <div :class="s.message">
          前橋・赤城が育んだ
          <br>
          食材本来の美味しさを。
        </div>
        <div :class="s.textContainer">
          <p :class="s.text">
            赤城山麓の林牧場で飼育された豚肉「福豚」と、地元野菜をふんだんに使用したメニューが魅力のレストラン。
          </p>
          <p :class="s.text">
            自慢の「福豚」は、林牧場の中でも厳選された最高品質の豚。さっぱりとした甘みのある脂身と柔らかくてジューシーな赤身の肉質が特徴です。
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 80px;
}

.heading {
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2;
  font-family: var(--ff-title);
  color: var(--c-title);
}

.message {
  position: relative;
  text-align: center;
  z-index: 2;
  font-size: 34px;
  line-height: 1.85;
  font-weight: 500;
  letter-spacing: 0.1em;
  font-family: var(--ff-title);

  @include mq.smView {
    margin-top: 18px;
    font-size: 25px;
  }

  @include mq.xsView {
    font-size: 23px;
  }
}

.textContainer {
  width: min(485px, 100%);
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

</style>

<script>
import ThinContainer from '@/components/ui/ThinContainer'

export default {
  components: { ThinContainer },
}
</script>
