<template>
  <div :class="s.container">
    <div :class="[s.column, s.plate]">
      <div :class="s.thumb">
        <img src="/images/brand/restaurant/menu1.jpg" alt="grand menu">
      </div>
      <!-- <div :class="s.menu">
        <h3 :class="s.heading">MEAT PLATE</h3>
        <table :class="s.table">
          <tbody>
            <tr>
              <td :class="s.name">福豚ローストポークプレート</td><td :class="s.price">1680</td>
            </tr>
            <tr>
              <td :class="s.name">福豚メンチカツプレート</td><td :class="s.price">1380</td>
            </tr>
            <tr>
              <td :class="s.name">ポークキーマカレー</td><td :class="s.price">980</td>
            </tr>
          </tbody>
        </table>
        <h3 :class="s.heading">CURRY</h3>
        <table :class="s.table">
          <tbody>
            <tr>
              <td :class="s.name">ポークキーマカレー</td><td :class="s.price">980</td>
            </tr>
            <tr>
              <td :class="s.name"> チーズキーマカレー</td><td :class="s.price">1280</td>
            </tr>
            <tr>
              <td :class="s.name">粕川なっとうのキーマカレー</td><td :class="s.price">1280</td>
            </tr>
            <tr>
              <td :class="s.name">ソーセージキーマカレー</td><td :class="s.price">1380</td>
            </tr>
          </tbody>
        </table>
      </div> -->
      <div :class="s.menu">
        <h3 :class="s.heading">MAINDISH</h3>
        <table :class="s.table">
          <tbody>
            <tr>
              <td :class="s.name">福豚ローストポークプレート</td><td :class="s.price">1680</td>
            </tr>
            <tr>
              <td :class="s.name">福豚メンチカツプレート</td><td :class="s.price">1380</td>
            </tr>
            <tr>
              <td :class="s.name">赤城山ソースカツ丼3枚</td><td :class="s.price">1280</td>
            </tr>
            <tr>
              <td :class="s.name">赤城山ソースカツ丼5枚</td><td :class="s.price">1680</td>
            </tr>
            <tr>
              <td :class="s.name">福豚ともやしのフォー</td><td :class="s.price">1300</td>
            </tr>
          </tbody>
        </table>
        <h3 :class="s.heading">CURRY</h3>
        <table :class="s.table">
          <tbody>
            <tr>
              <td :class="s.name">キーマカレー</td><td :class="s.price">1280</td>
            </tr>
            <tr>
              <td :class="s.name">スパイシーポークカレー</td><td :class="s.price">1280</td>
            </tr>
            <tr>
              <td :class="s.name">あいがけカレー</td><td :class="s.price">1580</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div :class="[s.column, s.side]">
      <!-- <div :class="s.menu">
        <h3 :class="s.heading">SIDE DISH</h3>
        <table :class="s.table">
          <tbody>
            <tr>
              <td :class="s.name">シャルキュトリ盛り合わせ</td><td :class="s.price">1280</td>
            </tr>
            <tr>
              <td :class="s.name">4種のソーセージ盛り合わせ</td><td :class="s.price">980</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div :class="s.thumb">
        <img src="/images/brand/restaurant/sidedish.jpg" alt="SIDE DISH">
      </div> -->
      <div :class="s.menu">
        <h3 :class="s.heading">SIDE DISH</h3>
        <table :class="s.table">
          <tbody>
            <tr>
              <td :class="s.name">5種のソーセージのグリル</td><td :class="s.price">1280</td>
            </tr>
            <tr>
              <td :class="s.name">赤城山生ハム盛り合わせ</td><td :class="s.price">1280</td>
            </tr>
            <tr>
              <td :class="s.name">赤城山プロシュート</td><td :class="s.price">580</td>
            </tr>
            <tr>
              <td :class="s.name">福豚のメンチカツ</td><td :class="s.price">380</td>
            </tr>
            <tr>
              <td :class="s.name">自家製ピクルスの盛り合わせ</td><td :class="s.price">380</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div :class="s.thumb">
        <img src="/images/brand/restaurant/sidedish.jpg" alt="SIDE DISH">
      </div>
    </div>
    <div :class="[s.column, s.dessert]">
      <div :class="s.thumb">
        <img src="/images/brand/restaurant/desserts.png" alt="DESSERT">
      </div>
      <!-- <div :class="s.menu">
        <h3 :class="s.heading">DESSERT</h3>
        <table :class="s.table">
          <tbody>
            <tr>
              <td :class="s.name">昔ながらのプリン</td><td :class="s.price">600</td>
            </tr>
            <tr>
              <td :class="s.name">カッサータ</td><td :class="s.price">600</td>
            </tr>
            <tr>
              <td :class="s.name">バスクチーズケーキ</td><td :class="s.price">650</td>
            </tr>
          </tbody>
        </table>
      </div> -->
      <div :class="s.menu">
        <h3 :class="s.heading">DESSERT</h3>
        <table :class="s.table">
          <tbody>
            <tr>
              <td :class="s.name">自家製アップルパイ</td><td :class="s.price">600</td>
            </tr>
            <tr>
              <td :class="s.name">テリーヌショコラ</td><td :class="s.price">600</td>
            </tr>
            <tr>
              <td :class="s.name">クリームチーズのカッサータ</td><td :class="s.price">500</td>
            </tr>
            <tr>
              <td :class="s.name">自家製チーズケーキ</td><td :class="s.price">400</td>
            </tr>
          </tbody>
        </table>
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
  letter-spacing: 0.01;
  font-family: var(--ff-title);
  color: var(--c-title);
}

.column {
  display: flex;
  width: min(1440px + 30px * 2, 100%);
  padding: 0 30px;
  margin: 140px auto 0;
}

.menu {
  flex-basis: 384px;

  @include mq.mdView {
    flex-basis: 340px;
  }

  @include mq.smView {
    flex-basis: unset;
    width: 100%;
  }
}

.thumb {
  @include mq.smView {
    flex-basis: unset !important;
  }
}

.heading {
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.01em;
  color: var(--c-title);
  font-family: var(--ff-title);
}

.table {
  width: min(100%, 384px);
  margin-top: 30px;
  font-size: 23px;
  font-style: normal;
  font-weight: 500;

  @include mq.mdView {
    margin-top: 10px;
    font-size: 18px;
  }

  @include mq.smView {
    margin-top: 0;
    font-size: 16px;
  }

  & + .heading {
    margin-top: 100px;

    @include mq.mdView {
      margin-top: 50px;
    }

    @include mq.smView {
      margin-top: 20px;
    }
  }
}

.name {
  padding: 10px 8px 10px 0;
  white-space: nowrap;

  @include mq.smView {
    padding-bottom: 0;
  }
}

.price {
  text-align: right;
  white-space: nowrap;
}

.plate {
  gap: 80px;

  @include mq.mdView {
    align-items: center;
    gap: 40px;
  }

  @include mq.smView {
    flex-direction: column;
  }

  .thumb {
    flex-basis: 776px;
    flex-shrink: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    img {
      max-width: unset;
      width: 122%;
      height: auto;
    }
  }

  .menu {
    padding-top: 88px;
    flex-shrink: 0;

    @include mq.mdView {
      padding-top: 0;
    }
  }
}

.side {
  margin-top: 100px;
  gap: 60px;
  justify-content: flex-end;

  @include mq.mdView {
    align-items: center;
  }

  @include mq.smView {
    gap: 0;
    flex-direction: column-reverse;
  }

  .menu {
    padding-top: 154px;
    flex-shrink: 0;

    @include mq.mdView {
      padding-top: 20px;
    }
  }

  .thumb {
    width: 880px;
    flex-shrink: 1;

    @include mq.smView {
      width: 100%;
    }

    img {
      max-width: unset;
      width: 111.25%;
      height: auto;
    }
  }
}

.dessert {
  margin-top: 40px;
  justify-content: space-between;

  @include mq.mdView {
    margin-top: 80px;
    justify-content: center;
    align-items: center;
    gap: 80px;
  }

  @include mq.smView {
    flex-direction: column;
    gap: 0;
  }

  .menu {
    padding-top: 100px;
    flex-shrink: 0;

    @include mq.mdView {
      padding-top: 0;
    }
  }

  .thumb {
    flex-basis: 624px;
    flex-shrink: 1;
  }
}

</style>

<script>
// import ThinContainer from '@/components/ui/ThinContainer'

export default {
  // components: { ThinContainer },
}
</script>
