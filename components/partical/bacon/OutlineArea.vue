<template>
  <div :class="s.container">
    <div :class="s.tabContainer">
      <ul :class="s.tabList">
        <li v-for="(content, index) in contents" :class="[s.tabItem, isActiveClass(index)]" :key="content.title">
          <button :class="[s.tabTrigger, isActiveClass(index)]" @click="updateActive(index)">
            <div :class="s.tabTitle">{{ content.title }}</div>
            <IconPlus :color="'var(--c-main)'" :class="s.plus" />
          </button>
          <div :class="[s.tabContents, isActiveClass(index)]">
            <img
              :class="[s.smallThumbnail, isActiveClass(index)]"
              :src="`/images/brand/bacon/outline/${index}.jpg`"
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
          :src="`/images/brand/bacon/outline/${index}.jpg`"
          :alt="content.title"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ThinContainer from '@/components/ui/ThinContainer'
import IconPlus from '@/components/ui/icon/IconPlus'

export default {
  components: { ThinContainer, IconPlus },
  data() {
    return {
      contents: [
        {
          title: '手ぶらBBQ',
          text: '食材の買い出しから片付けまで、全ておまかせ！赤城山麓育ちの福豚と、福豚を使ったソーセージ、そして地元の農家から毎朝届く新鮮な野菜を用意してお待ちしています。',
          more: {
            label: 'もっと見る',
            link: '#anchor-bbq1',
          }
        },
        {
          title: '食材持込みBBQ',
          text: 'お好きな食材や飲み物を持ち込んで、思い思いのBBQを。道の駅敷地内にある農産物直売所「Akagi FarmLife」には地元で採れた旬の野菜や果物が豊富に並んでいます。',
          more: {
            label: '',
            link: '#anchor-bbq2',
          }
        },
        {
          title: '焚き火体験',
          text: 'テントや焚火台、ランタンなど素敵な焚火時間を彩るアウトドア用品のレンタルや販売を行っています。憧れのsnow peakグッズで、揺らめく炎に癒されるひと時を。',
          more: {
            label: '',
            link: '#anchor-takibi',
          }
        },
        {
          title: '手ぶらデイキャンプ',
          text: '洗練されたデザインが魅力のsnow peakグッズに囲まれながらちょっと上質なパークキャンプでリフレッシュ。アウトドア初心者でも安心の、専門スタッフによるサポートも充実。子供と一緒にパークキャンプデビューしてみませんか？',
          more: {
            label: '',
            link: '#anchor-camp',
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
  border-top: 1px solid var(--c-main);
  border-bottom: 1px solid var(--c-main);
}

.tabContainer {
  display: flex;
  flex-direction: column;
  width: 40%;
  border-right: 1px solid var(--c-main);

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
    border-top: 1px solid var(--c-main);
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
