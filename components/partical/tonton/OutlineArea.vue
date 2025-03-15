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
              :src="`/images/brand/tonton/outline/${index}.jpg`"
              :alt="content.title"
            >
            {{ content.text }}
            <button :class="s.more" @click="scrollTo(content.more.link)">{{content.more.label}}</button>
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
          :src="`/images/brand/tonton/outline/${index}.jpg`"
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
          title: '見どころ',
          text: 'とんとん広場には、レストラン以外にもお楽しみいただけるスポットがたくさんあります。ここでしか味わえない特別な体験ばかり。ぜひ、チェックしてみてください。',
          more: {
            label: '見どころをもっと見る',
            link: '#anchor-highlight',
          }
        },
        {
          title: 'メニュー',
          text: '純白で固くしまった脂身と、きめ細かい霜降り、色味の濃い赤身、どれにおいても最高品質の選ばれた豚だけを、私たちは「福豚」と呼んでいます。 とんとん広場では、厳選された福豚本来のおいしさを味わってもらうため 素材と手作りにこだわった、できたての料理を提供しています。',
          more: {
            label: 'メニューをもっと見る',
            link: '#anchor-menu',
          }
        },
        {
          title: 'ウィンナー教室',
          text: '新鮮な福豚のひき肉と、ドイツのスバイス、天然の羊腸を使った本場仕込みのウインナー作り。自分だけの手作りのウインナーはお土産に。ジューシーな肉の旨みにハーブが香る、本物のおいしさを味わってください。',
          more: {
            label: 'ウィンナー教室を見る',
            link: '#anchor-wiener',
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
  margin-top: 165px;
  border-top: 1px solid var(--c-sub);
  border-bottom: 1px solid var(--c-sub);

  @include mq.smView {
    margin-top: 90px;
  }
}

.tabContainer {
  display: flex;
  flex-direction: column;
  width: 40%;
  border-right: 1px solid var(--c-sub);

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
