<template>
  <div :class="s.container">
    <h2 :class="s.title">MENU</h2>
    <div :class="[s.column, s.salad]">
      <div :class="s.menu">
        <p :class="s.sub">SALAD BAR</p>
        <h3 :class="s.name">新鮮野菜のサラダバー。</h3>
        <p :class="s.text">
          地元で採れた多種多様な旬の野菜を、限りなく新鮮な状態でご提供しています。今まで手にすることのなかった野菜の魅力を知って、野菜をもっと身近に感じてもらえるようなHütteHayashi Restaurant のサラダバー。地元の農家さんが育てた野菜の思いも一緒にお届けします。
        </p>
      </div>
      <div :class="s.thumb">
        <img :class="s.photo" src="/images/brand/restaurant/saladbar.jpg" alt="SALAD BAR">
      </div>
    </div>
    <div :class="s.column">
      <div :class="s.thumb">
        <img :class="s.photo" src="/images/brand/restaurant/keemacurry.jpg" alt="KEEMA CURRY">
      </div>
      <div :class="s.menu">
        <p :class="s.sub">KEEMA CURRY</p>
        <h3 :class="s.name">
          福豚たっぷり、
          <br>
          こだわりカレー。
        </h3>
        <p :class="s.text">
          飴色玉ねぎに福豚のひき肉をたっぷり加え、豚骨と野菜のベーススープで煮込んだ、こだわりのキーマカレー。サラダバーのロス野菜を活用したベーススープには、季節ごとの野菜の甘みや風味がたっぷりと凝縮されています。福豚と野菜の旨み、10種類以上のスパイスが織り成す奥深い味わいをお楽しみください。
        </p>
      </div>
    </div>
  </div>
</template>

<style module="s" lang="scss">
.container {
  display: block;
}

.title {
  font-size: 87px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.01em;
  font-family: var(--ff-title);
  color: var(--c-title);
  text-align: center;

  @include mq.mdView {
    font-size: 70px;
  }

  @include mq.smView {
    font-size: 55px;
  }
}

.column {
  display: flex;
  width: min(1440px, 100%);
  margin: 140px auto 0;

  @include mq.mdView {
    align-items: center;
    margin-top: 40px;
  }

  @include mq.smView {
    flex-direction: column;
    &.salad {
      flex-direction: column-reverse;
    }
  }

  & + & {
    margin-top: 240px;

    @include mq.mdView {
      margin-top: 160px;
    }

    @include mq.smView {
      margin-top: 60px;
    }
  }
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 740px;
  flex-basis: 740px;
  flex-shrink: 2;

  @include mq.smView {
    flex-basis: unset;
    width: 100%;
  }
}

.thumb {
  width: 700px;
  flex-basis: 700px;
  flex-shrink: 3;

  @include mq.smView {
    flex-basis: unset;
    width: 100%;
  }
}

.sub {
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2;
  font-family: var(--ff-title);
  color: var(--c-title);

  @include mq.mdView {
    font-size: 23px;
  }

  @include mq.smView {
    margin-top: 5px;
    font-size: 16px;
  }
}

.name {
  text-align: center;
  font-size: 34px;
  font-weight: 500;
  line-height: 1.85;
  letter-spacing: 0.1em;

  @include mq.mdView {
    font-size: 28px;
  }

  @include mq.smView {
    font-size: 24px;
    line-height: 1.6;
  }
}

.text {
  width: min(473px ,100% - 30px * 2);
  margin-top: 35px;
  font-size: 18px;
  font-weight: 500;
  line-height: 2.5;
  text-align: center;

  @include mq.mdView {
    margin-top: 20px;
    font-size: 16px;
    line-height: 2.2;
  }

  @include mq.smView {
    font-size: 15px;
    width: 90%;
    text-align: left;
  }
}

</style>

<script>
// import ThinContainer from '@/components/ui/ThinContainer'

export default {
  // components: { ThinContainer },
}
</script>
