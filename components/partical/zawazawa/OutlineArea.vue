<template>
  <div :class="s.container">
    <div :class="s.tabContainer">
      <ul :class="s.tabList">
        <li v-for="(content, index) in contents" :class="[s.tabItem, isActiveClass(index)]" :key="content.title">
          <button :class="[s.tabTrigger, isActiveClass(index)]" @click="updateActive(index)">
            <div :class="s.tabTitle">{{ content.title }}</div>
            <IconPlus :color="'var(--c-sub)'" :class="s.plus" />
          </button>
          <div :class="[s.tabContents, isActiveClass(index)]">
            <img
              :class="[s.smallThumbnail, isActiveClass(index)]"
              :src="`/images/brand/zawazawa/outline/${index}.jpg`"
              :alt="content.title"
            >
            {{ content.text }}
            <button :class="s.more" @click="scrollTo(content.more.link)">もっと見る</button>
          </div>
        </li>
      </ul>
    </div>
    <div :class="s.largeThumbnailContainer">
      <div
        v-for="(content, index) in contents"
        :key="index"
        :class="[s.largeThumbnail, isActiveClass(index)]"
      >
        <img
          :src="`/images/brand/zawazawa/outline/${index}.jpg`"
          :alt="content.title"
        />
      </div>
    </div>
  </div>
</template>
<script>
import gsap from 'gsap';
import ThinContainer from '@/components/ui/ThinContainer'
import IconPlus from '@/components/ui/icon/IconPlus'


export default {
  components: { ThinContainer, IconPlus },
  data() {
    return {
      contents: [
        {
          title: '泊まる',
          text: 'ざわざわ森のキャンプサイトは、たった10区画しかありません。せっかく赤城山に来たのだから、ゆったりお過ごし頂きたくて、約150㎡の区画をご用意しました。全てのサイトに電源を備えているので、快適なキャンプが可能です。',
          more: {
            label: 'もっと見る',
            link: '#anchor-stay',
          }
        },
        {
          title: '食べる',
          text: 'ざわざわ森のバーベキューは、自慢の「福豚」と「Hütte Hayashi」のハム・ソーセージが味わえる、贅沢なコース。手ぶらで気軽にお楽しみ頂きたいから、食材や炭火の準備はもちろん、片付けもスタッフにお任せください。',
          more: {
            label: '',
            link: '#anchor-eat',
          }
        },
        {
          title: '借りる',
          text: 'ざわざわ森では、手ぶらでも、初心者の方にもキャンプを楽しんで頂けるよう、世界の一流メーカーのテントや道具をご用意しています。レンタルは1つでも、キャンプ道具丸ごとでも。お気軽にご相談ください。',
          more: {
            label: '',
            link: '#anchor-rental',
          }
        },
        {
          title: '施設について',
          text: '快適に自然をお楽しみ頂くための設備とサービスをご用意。売店やセミナールーム、ロッジ内の図書スペースなど、過ごし方の幅が広がります。',
          more: {
            label: '',
            link: '#anchor-facility',
          }
        },
      ],
      isActiveIndex: 0,
    }
  },
  mounted() {
    // this.isActiveTitle = 0
  },
  methods: {
    updateActive(index) {
      this.isActiveIndex = index
    },
    isActive(index) {
      return this.isActiveIndex === index
    },
    isActiveClass(index) {
      return this.isActive(index) ? this.s.isActive : '';
    },
    scrollTo(target) {
      window?.scroller.scrollTo(target, true, "top 0px");
    }
  },
}
</script>

<style lang="scss" module="s">
.container {
  display: flex;
  width: 100%;
  border-top: 1px solid var(--c-sub);
  border-bottom: 1px solid var(--c-sub);
  margin-top: 150px;

  @include mq.smView {
    margin-top: 50px;
  }
}

.tabContainer {
  display: flex;
  flex-direction: column;
  width: 40%;
  border-right: 1px solid var(--c-sub);

  @include mq.mdView {
    width: 50%;
  }

  @include mq.smView {
    width: 100%;
    border-right: none;
  }
}

.tabList {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.tabItem {
  display: block;
  padding: 0;
  background-color: transparent;

  & + & {
    border-top: 1px solid var(--c-sub);
  }

  &.isActive {
    padding: var(--gutter);
    background-color: var(--c-bg-sub);
    flex-grow: 1;
  }
}

.tabTrigger {
  position: relative;
  display: block;
  width: 100%;
  text-align: left;
  padding: var(--gutter);
  background-color: transparent;
  transition: background ease-in-out 300ms;

  &:hover {
    background-color: rgb(var(--c-bg-sub) / 0.7);
  }

  .isActive & {
    pointer-events: none;
    padding: 0;
  }
}

.plus {
  position: absolute;
  top: 0;
  bottom: 0;
  right: var(--gutter);
  display: block;
  margin: auto;
  font-size: 32px;
  transition: all 400ms ease-in-out;

  .tabTrigger:hover & {
    rotate: 180deg;
    scale: 1.2;
  }

  .isActive & {
    display: none;
  }
}

.tabTitle {
  font-size: 40px;
  font-family: var(--ff-title);
  line-height: 1;
  letter-spacing: 0.08em;
  color: var(--c-title);

  @include mq.smView {
    font-size: 28px;
  }
}

.tabContents {
  display: none;
  margin-top: 28px;
  font-size: 16px;
  line-height: 1.94;
  text-align: justify;
  letter-spacing: -0.04em;
  font-family: var(--ff-text);
  color: #000;

  @include mq.mdView {
    width: min(500px, 100%);
    margin-left: auto;
    margin-right: auto;
  }

  @include mq.smView {
    font-size: 14px;
  }

  &.isActive {
    display: block;
  }
}

.smallThumbnail {
  display: none;
  margin-bottom: 15px;

  @include mq.smView {
    display: block;
  }
}

.largeThumbnailContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  padding: var(--gutter) var(--gutter) var(--gutter) min(40px, var(--gutter));

  @include mq.mdView {
    width: 50%;
  }

  @include mq.smView {
    display: none;
  }
}

.largeThumbnail {
  display: none;
  overflow: hidden;
  border-radius: 20px;

  &.isActive {
    display: block;
  }
}

.more {
  display: block;
  width: min(80%, 300px);
  margin-top: 27px;
  padding: 6px;
  border-radius: 12px;
  background-color: var(--c-link);
  font-size: 18px;
  line-height: 1.66;
  color: #fff;
  font-family: var(--ff-title);

  @include mq.smView {
    margin-left: auto;
    margin-right: auto;
  }
}

</style>
