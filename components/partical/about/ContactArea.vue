<template>
  <ThinContainer>
    <div :class="s.container">
      <div :class="s.header">
        <h2 :class="s.title">お問い合わせ</h2>
      </div>
      <div :class="s.contents">
        <p :class="s.desc">
          弊社にご関心をお寄せいただき、ありがとうございます。お問合せは以下のフォームより承っております。お気軽にご利用ください。
        </p>
        <form action="" :class="s.form" >
          <div :class="s.table">
            <div :class="s.tr">
              <div :class="s.th">お名前</div>
              <div :class="s.td">
                <input :class="[s.formItem]" id="name" type="text" name="" v-model="name" :disabled="disabled">
              </div>
            </div>
            <div :class="s.tr">
              <div :class="s.th">メールアドレス</div>
              <div :class="s.td">
                <input :class="[s.formItem]" id="mail" type="text" name="" v-model="email" :disabled="disabled">
              </div>
            </div>
            <div :class="s.tr">
              <div :class="s.th">お問い合わせ内容</div>
              <div :class="s.td">
                <textarea :class="[s.formItem]" id="" name="" cols="30" rows="10" v-model="content" :disabled="disabled" />
              </div>
            </div>
            <div :class="s.tr">
              <div>
                <label :class="s.label">
                  <input v-model="check1" :class="s.checkbox" id="check1" type="checkbox" name="check1">
                  <span>個人情報の取り扱いについて同意する</span>
                </label>
                <label :class="s.label">
                  <input v-model="check2" :class="s.checkbox" id="check2" type="checkbox" name="check2">
                  <span>確認ページはございません。ご入力頂いた内容に誤りが無いかご確認いただき、チェックを入れてください。</span>
                </label>
              </div>
            </div>
            <div :class="s.tr">
              <button
                :class="[s.button, isChecked ? s.isActive : '']"
                :disabled="!isChecked || disabled"
                @click="submit"
              >
                送信
              </button>
            </div>
          </div>
        </form>
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
  padding-bottom: 190px;

  @include mq.smView {
    padding-bottom: 90px;
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

.contents {
  flex-shrink: 5;
  flex-basis: 758px;

  @include mq.smView {
    flex-basis: 100%;
    width: 100%;
    flex-shrink: 0;
  }
}

.table {
  display: block;
  font-family: var(--ff-gothic);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.9375;
  text-align: justify;
  letter-spacing: -0.04em;

  @include mq.smView {
    font-size: 15px;
  }
}

.tr {
  display: flex;
  width: 100%;
  margin-top: 34px;
  gap: 1em;

  @include mq.mdView {
    display: block;
  }
}

.th {
  display: flex;
  align-items: center;
  width: 9em;
  font-weight: bold;
  flex-shrink: 0;
}

.td {
  width: 100%;
}

.formItem {
  width: 100%;
  background-color: #f3f3f3;
  border: none;
  min-height: 50px;
  padding: 7px 20px;
  outline-color: #fff;
  transition: all 300ms ease-in-out;

  &:focus-visible {
    background-color: #fff;
    outline-color: var(--c-main);
  }
}

.label {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  font-size: 15px;
}

.checkbox {
  height: 26px;
  margin-right: 7px;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 530px;
  min-width: fit-content;
  padding: 20px 40px;
  background-color: #f1cb00;
  border-radius: 16px;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  color: #fff;
  transition: background-color 300ms ease-in-out;

  @include mq.smView {
    margin-left: auto;
    margin-right: auto;
    font-size: 17px;
    padding: 13px 30px;
  }

  &[disabled] {
    background-color: #ddd;
    cursor: not-allowed;
  }
}

</style>

<script>
import axios from '@/plugins/axios'
import ThinContainer from '@/components/ui/ThinContainer'

export default {
  components: { ThinContainer },
  data() {
    return {
      check1: false,
      check2: false,
      name: null,
      email: null,
      content: null,
      disabled: false,
    }
  },
  computed: {
    isChecked() {
      return this.check1 && this.check2;
    },
  },
  methods: {
    submit(e) {
      e.preventDefault();
      if (!this.isChecked) return;

      this.disabled = true;

      const data = {
        name: this.name,
        email: this.email,
        content: this.content,
      };

      axios().provide.api({
        method: 'POST',
        url: '/v1/contact/send/inquiry',
        data,
      })
        .then(() => {
          window.alert('お問い合わせありがとうございます。\n確認の上、担当者より返答させていただきます。\nしばらくお待ちくださいますようお願いいたします。');
          this.name = null;
          this.email = null;
          this.content = null;
          this.check1 = false;
          this.check2 = false;
        })
        .catch((error) => {
          if (error.response) console.log(error.response.data);
          else console.log(error);
        })
        .finally(() => {
          this.disabled = false;
        });
    },
  },
}
</script>
