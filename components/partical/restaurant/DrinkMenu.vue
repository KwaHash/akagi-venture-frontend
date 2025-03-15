<template>
  <div :class="s.container">
    <h3 :class="s.title">DRINK</h3>
    <div :class="s.column">
      <div :class="s.inner">
        <div :class="s.item">
          <div :class="s.heading">コーヒー</div>
          <table :class="s.table">
            <tbody>
              <tr>
                <td>プレンドコーヒー</td><td :class="s.price">400</td>
              </tr>
              <tr>
                <td>アイスコーヒー</td><td :class="s.price">400</td>
              </tr>
              <tr>
                <td>カフェラテ</td><td :class="s.price">500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div :class="s.item">
          <div :class="s.heading">アルコール</div>
          <table :class="s.table">
            <tbody>
              <tr>
                <td>プレミアルアルコールフリー</td><td :class="s.price">450</td>
              </tr>
              <tr>
                <td>生ビール黒ラベル</td><td :class="s.price">600</td>
              </tr>
              <tr>
                <td>前橋ウィークラフト生ビール</td><td :class="s.price">850</td>
              </tr>
              <tr>
                <td>グラスワイン（赤　白）</td><td :class="s.price">500</td>
              </tr>
              <tr>
                <td>デユワーズハイボール</td><td :class="s.price">600</td>
              </tr>
              <tr>
                <td>サワー（レモン　グレープフルーツ）</td><td :class="s.price">400</td>
              </tr>
              <tr>
                <td>寶CRAFT群馬白加賀梅酒</td><td :class="s.price">600</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div :class="s.inner">
        <div :class="s.item">
          <div :class="s.heading">ソフトドリンク</div>
          <table :class="s.table">
            <tbody>
              <tr>
                <td>オレンジジュース</td><td :class="s.price">400</td>
              </tr>
              <tr>
                <td>りんごジュース</td><td :class="s.price">400</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div :class="s.item">
          <div :class="s.heading">イタリアンスパークリング</div>
          <table :class="s.table">
            <tbody>
              <tr>
                <td>オレンジソーダ</td><td :class="s.price">500</td>
              </tr>
              <tr>
                <td>ブラッドオレンジソーダ</td><td :class="s.price">500</td>
              </tr>
              <tr>
                <td>レモンソーダ</td><td :class="s.price">500</td>
              </tr>
              <tr>
                <td>キノットソーダ</td><td :class="s.price">500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div :class="s.item">
          <div :class="s.heading">紅茶</div>
          <table :class="s.table">
            <tbody>
              <tr>
                <td>ブレンド</td><td :class="s.price">600</td>
              </tr>
              <tr>
                <td>ダージリン</td><td :class="s.price">600</td>
              </tr>
              <tr>
                <td>アイスティー</td><td :class="s.price">400</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style module="s" lang="scss">
.container {
  position: relative;
  display: block;
  width: min(940px + 180px * 2, 100%);
  margin: 100px auto;
  padding: 0 180px;

  @include mq.mdView {
    padding: 0 100px;
  }

  @include mq.smView {
    padding: 0;
    width: calc(100% - 30px * 2);
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    translate: -20% 0;
    width: 12%;
    padding-bottom: 24%;
    background: transparent url('/images/brand/restaurant/beer.jpg') center no-repeat;
    background-size: contain;
    z-index: 0;

    @include mq.mdView {
      left: 0;
      translate: 10% 0;
    }

    @include mq.smView {
      left: unset;
      right: 0;
      top: 0;
      bottom: unset;
      translate: 0 -20%;
      width: 15%;
      padding-bottom: 30%;
    }
  }
}

.title {
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.01em;
  color: var(--c-title);
  font-family: var(--ff-title);
}

.heading {
  height: 60px;
  width: 100%;
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  line-height: 2.61;
  border-bottom: 2px solid #bebebe;

  @include mq.smView {
    height: 50px;
    font-size: 20px;
  }
}

.column {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  z-index: 2;

  @include mq.smView {
    flex-direction: column;
  }
}

.inner {
  width: min(376px, 100%);
  flex-shrink: 1;
  flex-basis: 376px;

  @include mq.smView {
    flex-basis: unset;
  }
}

.item {
  width: min(376px, 100%);

  & + & {
    margin-top: 56px;

    @include mq.smView {
      margin-top: 20px;
    }
  }
}

.table {
  margin-top: 18px;
  width: 100%;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 3em;
  white-space: nowrap;

  @include mq.smView {
    line-height: 1.8em;
    font-size: 15px;
  }
}

.price {
  text-align: right;
  width: 5em;
}
</style>

<script>
// import ThinContainer from '@/components/ui/ThinContainer'

export default {
  // components: { ThinContainer },
}
</script>
