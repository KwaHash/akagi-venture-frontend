<template>
  <teleport to="body">
    <div
      class="modal"
      v-show="isVisible"
      @click="close"></div>

    <div
      class="modal-content"
      v-show="isVisible"
      v-if="modalTarget === 'images'">
      <div class="close" @click="close">X</div>

      <div class="images" v-if="images.length">
        <div
          class="image"
          v-for="(image, i) in images"
          :key="image"
          v-show="imageNum === i + 1"><div class="image-body" :style="`background-image: url(/images/bacon/${image});`"></div></div>
        <div class="controlls">
          <div class="prev" id="prev" @click="handleImage"><span>＜</span></div>
          <div class="next" id="next" @click="handleImage"><span>＞</span></div>
        </div>
      </div>
    </div>

    <div
      class="modal-content"
      v-show="isVisible"
      v-if="modalTarget === 'menu'">
      <div class="menus" v-if="menus.length">
        <div
          class="menu"
          v-for="menu in menus"
          :key="menu.title">
          <div class="flex-container">
            <div class="left">
              <div class="image" :style="`background-image: url(/images/bacon/${menu.image});`"></div>
            </div>
            <div class="right">
              <p class="title">{{ menu.title }}</p>
              <p class="summary">{{ menu.summary }}</p>
              <div
                class="menu-contents"
                v-if="menu.contents.length">
                <dl
                  v-for="content in menu.contents"
                  :bind="content.title">
                  <dt>{{ content.title }}</dt>
                  <dd v-html="content.body" />
                </dl>
              </div>
            </div>
          </div>
          <div class="btn-wrap">
            <a :href="`https://liff.line.me/${liffId}`" class="btn sm" target="_blank"><span>予約する</span></a>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>


<script>
export default {
  props: {
    isVisible: {
      required: true,
      type: Boolean,
      default: false,
    },
    modalTarget: {
      type: String,
    },
    liffId: {
      type: String,
    },
  },
  data() {
    return {
      imageNum: 1,
      images: [
        'bacon01.jpg',
        'bacon02.jpg',
        'bacon03.jpg',
        'bacon04.jpg',
        'bacon05.jpg',
        'bacon06.jpg',
      ],
      menus: [
        {
          title: '焚き火体験',
          image: 'bonfire.jpg',
          summary: '手ぶらで焚き火体験できるプラン。ゆったりとくつろげる空間で気軽に焚き火を楽しむことができます。',
          contents: [
            {
              title: '料金',
              body: '<p>¥3,600 / サイト<br>¥1,100 / １人（小学生以上）</p><p>サイト利用料 + 体験料</p>',
            },
            {
              title: '料金に含まれるもの',
              body: '<p>薪 1 束<br>施設利用料<br>機材利用料<br>追加薪 ¥980</p>',
            },
            {
              title: '設備',
              body: '<p>焚き火タープオクタ<br>焚き火台 L<br>ジカロテーブル<br>ローチェア<br>トング<br>グローブ<br>着火剤</p>',
            },
            {
              title: '営業時間',
              body: '<p>ランチタイム / 11:00~15:00<br>ディナータイム(金・土のみ) / 17:00~21:00</p><p>4時間制となっておりますのでゆったりとおくつろぎいただけます</p>',
            },
            {
              title: '１サイトの利用人数',
              body: '<p>2〜6名</p>',
            },
            {
              title: '持ち込みに関して',
              body: '<p><span>食材</span>焚き火を使用する食材の持ち込みはできません。</p><p><span>飲み物</span>ドリンクはお持ち込みいただくか、HutteHayashiで購入ください。</p>',
            },
            {
              title: 'ゴミの扱い',
              body: '<p>お持ち込み品から出たゴミはお持ち帰りいただきますので、ゴミ袋をご持参ください。こちらでゴミを引き取る場合は、専用のゴミ袋をご購入いただいています。</p>',
            },
            {
              title: 'ペットの同伴',
              body: '<p>ペットの同伴はできません。</p>',
            },
          ],
        },
        {
          title: '手ぶら BBQ',
          image: 'bbq.jpg',
          summary: '手ぶらで BBQ できるプラン。準備も片付けも必要なしで、気軽に楽しむことができます。',
          contents: [
            {
              title: '料金',
              body: '<p>¥4,400 / サイト<br>¥3,300 / 大人(中学生以上)<br>¥2,200 / 小学生</p><p>サイト利用料 + BBQ 料金</p><p>※人数分のご注文が必要（小学生以上）</p>',
            },
            {
              title: '料金に含まれるもの',
              body: '<p>食材<br>施設利用料<br>機材利用料</p>',
            },
            {
              title: '設備',
              body: '<p>焚き火タープオクタ<br>焚き火台 L<br>ジカロテーブル<br>ローチェア<br>トング<br>グローブ<br>着火剤<br>BBQコンロ<br>箸<br>トング<br>焼き網<br>食器類<br>追加炭 ¥900<br>※鉄板はついておりません。</p>',
            },
            {
              title: '営業時間',
              body: '<p>ランチタイム / 11:00~15:00</p><p>4時間制となっておりますのでゆったりとおくつろぎいただけます。</p>',
            },
            {
              title: '１サイトの利用人数',
              body: '<p>2〜6名</p>',
            },
            {
              title: '持ち込みに関して',
              body: '<p><span>食材</span>可能</p><p><span>飲み物</span>現地にてご注文、もしくはお持込ください。お得な飲み放題プランもございます。</p>',
            },
            {
              title: 'ゴミの扱い',
              body: '<p>お持ち込み品から出たゴミはお持ち帰りいただきますので、ゴミ袋をご持参ください。こちらでゴミを引き取る場合は、専用のゴミ袋をご購入いただいています。</p>',
            },
            {
              title: 'ペットの同伴',
              body: '<p>ペットの同伴はできません。</p>',
            },
            {
              title: 'BBQ食材',
              body: '<p>福豚のグリル肉<br>HutteHayashi ソーセージ<br>グリル野菜<br>ご飯<br>スモワ</p>',
            },
            {
              title: '追加食材',
              body: '<p>福豚のグリル肉<br>ソーセージ<br>グリル野菜<br>ご飯<br>スモワ</p>',
            },
            {
              title: '追加レンタル',
              body: '<p>フィールドバリスタ コーヒーセット<br>フィールドクッカー<br>HOME&CAMP バーナー ガス缶別売り<br>ソフトクーラー 保冷剤付き<br>クラシックケトル<br>フラットバーナー ガス缶別売り<br>まな板セット<br>キッチンツールセット<br>トラメジーノ ホットサンドメーカー</p>',
            },
          ],
        },
        {
          title: 'BBQ 食材持ち込みプラン',
          image: 'bbq_carryon.jpg',
          summary: 'お好きな食材や飲み物を持ち込んで BBQ できるプラン。',
          contents: [
            {
              title: '料金',
              body: '<p>¥9,900 / サイト</p><p>サイト利用料</p>',
            },
            {
              title: '料金に含まれるもの',
              body: '<p>施設利用料<br>機材利用料</p>',
            },
            {
              title: '設備',
              body: '<p>焚き火タープオクタ<br>焚き火台 L<br>ジカロテーブル<br>ローチェア<br>トング<br>グローブ<br>着火剤<br>BBQ コンロ<br>箸<br>トング<br>焼き網<br>食器類<br>炭 ¥900(店舗で購入)</p><p>※鉄板はついておりません。</p>',
            },
            {
              title: '営業時間',
              body: '<p>ランチタイム / 11:00~15:00</p><p>4時間制となっておりますのでゆったりとおくつろぎいただけます。</p>',
            },
            {
              title: '１サイトの利用人数',
              body: '<p>2〜6名</p>',
            },
            {
              title: '持ち込みに関して',
              body: '<p><span>食材</span>可<p><span>飲み物</span>お持ち込みください。</p>',
            },
            {
              title: 'ゴミの扱い',
              body: '<p>お持ち込み品から出たゴミはお持ち帰りいただきますので、ゴミ袋をご持参ください。こちらでゴミを引き取る場合は、専用のゴミ袋をご購入いただいています。</p>',
            },
            {
              title: 'ペットの同伴',
              body: '<p>ペットの同伴はできません。</p>',
            },
            {
              title: '追加レンタル',
              body: '<p>ピクニックテント<br>ローテーブル<br>ローチェア</p>',
            },
          ],
        },
        {
          title: '手ぶらデイキャンプ',
          image: 'daycamp.jpg',
          summary: 'スノーピークのシェルターを利用して １日パークキャンピングできるプラン。',
          contents: [
            {
              title: '料金',
              body: '<p>¥22,000 / サイト</p><p>サイト利用料</p>',
            },
            {
              title: '料金に含まれるもの',
              body: '<p>施設利用料<br>機材利用料</p>',
            },
            {
              title: '設備',
              body: '<p>リビングシェルアイボリー又はランドロックアイボリー<br>タープ<br>焚き火台<br>ガスコンロ<br>テーブル<br>チェア<br>ケトル<br>調理道具セット<br>食器</p>',
            },
            {
              title: '営業時間',
              body: '<p>フルタイム / 10:00~17:00</p>',
            },
            {
              title: '１サイトの利用人数',
              body: '<p>2〜6名(子供人数要相談)</p>',
            },
            {
              title: '持ち込みに関して',
              body: '<p><span>食材</span>可能</p><p><span>飲み物</span>現地にてご注文、もしくはお持込ください。お得な飲み放題プランもございます。</p>',
            },
            {
              title: 'ゴミの扱い',
              body: '<p>お持ち込み品から出たゴミはお持ち帰りいただきますので、ゴミ袋をご持参ください。こちらでゴミを引き取る場合は、専用のゴミ袋をご購入いただいています。</p>',
            },
            {
              title: 'ペットの同伴',
              body: '<p>ペットの同伴はできません。</p>',
            },
            {
              title: '追加レンタル',
              body: '<p>フィールドバリスタ コーヒーセット<br>フィールドクッカー<br>HOME&CAMP バーナー ガス缶別売り<br>ソフトクーラー 保冷剤付き<br>クラシックケトル<br>フラットバーナー ガス缶別売り<br>まな板セット<br>キッチンツールセット<br>トラメジーノ ホットサンドメーカー</p>',
            },
            {
              title: 'オプション',
              body: '<p><span>[BBQ食材]</span></p><p>料金¥3,300/大人(中学生以上)<br>¥2,200/小学生</p><p><span>食材リスト</span>福豚のグリル肉<br>HutteHayashi ソーセージ<br>グリル野菜<br>ご飯<br>スモワ</p><p><span>追加食材リスト</span>福豚のグリル肉<br>ソーセージ<br>グリル野菜<br>ご飯<br>スモワ</p><p>追加食材のご注文は３日前までにお願いいたします。人数分のご注文が必要です。</p>',
            },
          ],
        },
      ],
    };
  },
  methods: {
    close() {
      this.$emit('close')
    },
    handleImage(e) {
      const tgt = e.currentTarget;
      const direction = tgt.id;
      const next = direction === 'next' ? 1 : -1;
      if ((this.imageNum === this.images.length)
        && direction === 'next') {
        // 最初に戻る
        this.imageNum = 1;
      } else if (this.imageNum === 1 && direction === 'prev') {
        // 最後へ進む
        this.imageNum = this.images.length;
      } else {
        this.imageNum += next;
      }
    },
  },
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0,0,0,.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal-content {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 15;
  transform: translate(-50%, -50%);
  background-color: rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 80%;
  height: auto;
  border-radius: 10px;
}

.flex-container {
  display: flex;
}

.menus {
  background-color: white;
  padding: 2em;
  width: 100%;
  max-height: 90vh;
  overflow-y: scroll;
  border-radius: 10px;
  .menu {
    &:not(:first-child) {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #dedede;
    }
    .btn-wrap {
      width: 100%;
      margin: 2em auto 1em;
    }
  }
  .left {
    width: 30%;
    .image {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      padding-top: 100%
    }
  }
  .right {
    flex: 1;
    padding-left: 2em;
    .title {
      font-size: 1.2em;
      font-weight: bold;
    }
    .summary {
      font-size: .9em;
      margin: 1em 0;
    }
    .menu-contents {
      font-size: .9em;
      dl {
        dt {
          font-weight: bold;
          margin-bottom: .2em;
        }
        dd {
          p {
            span {
              font-weight: bold;
              display: block;
            }
            &:not(:first-child) {
              margin-top: .2em;
            }
          }
        }
        &:not(:first-child) {
          margin-top: 1em;
        }
      }
    }
  }
}

.close {
  position: absolute;
  top: -2em;
  right: 1em;
  color: white;
}

.images {
  width: 100%;
  position: relative;
  .image {
  }
  .image-body {
    padding-top: 56.25%;
    background-size: cover;
  }
}

.controlls {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  > * {
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    cursor: pointer;
    span {
      height: 1em;
      position: absolute;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      color: white;
      font-weight: bold;
    }
    &.prev {
      left: 0;
      span {
        left: 1em;
      }
    }
    &.next {
      right: 0;
      span {
        right: 1em;
      }
    }
  }
}


@include smView {
  .modal-content {
    width: 90%;
  }
  .flex-container {
    display: block;
  }
  .menus {
    padding: 1em;
    .menu {
      .left {
        width: 100%;
        margin-bottom: 1.2em;
        .image {
          padding-top: 65%;
        }
      }
      .right {
        padding-left: 0;
      }
      .btn-wrap {
        max-width: none;
        .btn {
          max-width: none;
        }
      }
    }
  }
}
</style>
