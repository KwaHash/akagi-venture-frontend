<template>
  <ThinContainer>
    <div :class="s.container">
      <div :class="s.header">
        <h2 :class="s.title">ブランド</h2>
        <p :class="s.desc">AKAGI&VENTURE PROJECTでは、食と自然体験に関連した4つの事業を展開しています。</p>
      </div>
      <div :class="s.contents">
        <ul :class="s.list">
          <li
            v-for="brand in brands"
            :key="brand.name"
            :class="s.listItem"
          >
            <a :href="`${urls.brand[brand.name]}/`" target="_blank" rel="noopener noreferrer">
              <img
                :src="`/images/about/brand/${brand.name}.jpg`"
                :alt="brand.name"
              >
            </a>
          </li>
        </ul>
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
  margin-bottom: 190px;

  @include mq.smView {
    margin-bottom: 90px;
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

.list {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.listItem {
  width: calc(50% - 7px);
}

</style>

<script>
import ThinContainer from '@/components/ui/ThinContainer'
import cf from '@/mixins/commonFunctions';

export default {
  mixins: [cf],
  components: { ThinContainer },
  setup() {
    const runtimeConfig = useRuntimeConfig();
    const envName = runtimeConfig.public.envName;
    return {
      envName,
    }
  },
  computed: {
    urls() {
      return cf.getUrls(this.envName);
    },
  },
  data() {
    return {
      brands: [
        {
          name: 'hutte',
          link: 'https://www.hutte-hayashi.com/'
        },
        {
          name: 'tonton',
          link: 'https://www.fukubuta.co.jp/tonton'
        },
        {
          name: 'zawazawa',
          link: 'https://www.fukubuta.co.jp/zawazawa'
        },
        {
          name: 'bacon',
          link: 'https://maebashi-akagi.jp/enjoy/experience/bacon'
        },
      ]
    }
  }
}
</script>
