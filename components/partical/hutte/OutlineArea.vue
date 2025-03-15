<template>
  <div :class="s.container">
    <div :class="s.tabContainer">
      <ul :class="s.tabList">
        <li v-for="(content, index) in contents" :class="[s.tabItem, isActiveClass(index)]" :key="content.title">
          <button :class="[s.tabTrigger, isActiveClass(index)]" @click="updateActive(index)">
            <div :class="s.tabTitle">{{ content.title }}</div>
            <IconPlus :color="'#fff'" :class="s.plus" />
          </button>
          <div :class="[s.tabContents, isActiveClass(index)]">
            <img
              :class="[s.smallThumbnail, isActiveClass(index)]"
              :src="`/images/brand/hutte/outline/${index}.jpg`"
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
        :key="content.title"
        :class="[s.largeThumbnail, isActiveClass(index)]"
      >
        <img
          :src="`/images/brand/hutte/outline/${index}.jpg`"
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
          title: 'Our Products',
          text: '本場ドイツ仕込みの職人技と、自然豊かな赤城山の風土、そして選び抜かれた「福豚」が織り成す本格的なハム・ソーセージ。手作りにこだわり、味にこだわり、素材にこだわるマイスターの教えが息づいたHutte Hayashiのものづくりは、ドイツの歴史あるコンテストやモンドセレクションなどでも数多くの賞を受賞しています。',
          more: {
            label: '商品をもっと知る',
            link: '#anchor-products'
          },
        },
        {
          title: 'Our History',
          text: '昭和初期、家畜商を営んでいた夫婦が「幻の豚」を探し求めて1頭の繁殖豚を飼うことから、林牧場の種豚経営の歴史は始まります。あるとき山梨にある県立の種牧場に、ランドレースという品種が寄贈されたと聞きつけた夫婦は、そこで理想の豚と出会ったのです。',
          more: {
            label: '歴史をもっと知る',
            link: '#anchor-history'
          },
        },
        {
          title: 'Where to find',
          text: '昭和初期、家畜商を営んでいた夫婦が「幻の豚」を探し求めて1頭の繁殖豚を飼うことから、林牧場の種豚経営の歴史は始まります。',
          more: {
            label: 'お店の場所を見る',
            link: '#anchor-where'
          },
        },
      ],
      isActiveIndex: 0,
    }
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
    },
  },
}
</script>

<style lang="scss" module="s">
.container {
  display: flex;
  width: 100%;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
}

.tabContainer {
  display: flex;
  flex-direction: column;
  flex-basis: 400px;
  flex-grow: 1;
  width: 40%;
  border-right: 1px solid rgb(255 255 255 / 0.8);

  @media screen and (max-width: 1024px) {
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
    border-top: 1px solid rgb(255 255 255 / 0.8);
  }

  &.isActive {
    padding: var(--gutter);
    background-color: rgb(255 255 255 / 0.8);
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
  font-size: 46px;
  font-family: var(--ff-serif);
  line-height: 1.36956522;
  color: var(--c-title);

  @include mq.smView {
    font-size: 38px;
  }
}

.tabContents {
  display: none;
  margin: 14px auto;
  width: 100%;
  font-size: 16px;
  line-height: 1.94;
  text-align: justify;
  letter-spacing: -0.04em;
  font-family: var(--ff-gothic);
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
  width: min(500px, 100%);
  margin: 0 auto 15px;

  @media screen and (max-width: 1024px) {
    display: block;
  }
}

.largeThumbnailContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 600px;
  flex-grow: 1;
  width: 60%;
  padding: var(--gutter) var(--gutter) var(--gutter) min(40px, var(--gutter));

  @media screen and (max-width: 1024px) {
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
  background-color: var(--c-main);
  font-size: 18px;
  line-height: 1.66;
  color: #fff;
  font-family: var(--ff-mincho);

  @media screen and (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
}

</style>
