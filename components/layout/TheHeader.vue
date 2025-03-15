<template>
  <div :class="s.container">
    <header>
      <h1>
        <a :href="`${urls.avp}/`" :class="s.link">
          <img
            :class="s.logo"
            src="/images/logo/avp.svg" alt="AKAGI&VENTURE PROJECT" />
        </a>
      </h1>
    </header>
    <div :class="s.buttonContainer">
      <a :class="[s.button, s.store]" href="https://www.hutte-hayashi.com/" target="_blank" rel="noopener noreferrer">
        Online Store
        <img :class="s.buttonIcon" src="/images/header/icon-external.svg" alt="外部リンク">
      </a>
      <button :class="s.button" @click="handleClickOpen">
        Menu
        <div :class="[s.menuIcon]">
          <span :class="[s.bar, s.one]" />
          <span :class="[s.bar, s.two]" />
          <span :class="[s.bar, s.three]" />
        </div>
      </button>
    </div>
  </div>
</template>
<script>
import cf from '@/mixins/commonFunctions';

export default {
  mixins: [cf],
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
  methods: {
    handleClickOpen() {
      this.$emit('click-open');
    }
  }
}
</script>

<style module="s" lang="scss">
.container {
  position: fixed;
  top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--gutter);
  width: 100%;
  z-index: 10;

  @include mq.smView {
    top: 20px;
    align-items: flex-start;
  }
}

.link {
  display: block;
  width: fit-content;
}

.logo {
  display: block;
  width: min(40vw, 212px);
}

.buttonContainer {
  display: flex;
  gap: 20px;

  @include mq.smView {
    gap: 10px;
    // display: block;
  }
}

.button {
  display: flex;
  align-items: center;
  padding: 9px 10px 8px;
  border-radius: 8px;
  white-space: nowrap;
  border-width: 1px 3px 3px 1px;
  border-color: var(--c-main);
  border-style: solid;
  color: #246ca8;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.01em;
  font-family: var(--ff-num);
  background-color: #fdf1e3;

  @include mq.smView {
    padding: 6px 9px;
    font-size: 16px;

    &.store {
      display: none;
    }
  }
}

.buttonIcon {
  display: block;
  width: 16px;
  margin-left: 6px;
  aspect-ratio: 1 / 1;

  @include mq.smView {
    width: 14px;
  }
}

.menuIcon {
  position: relative;
  width: 19px;
  height: 12px;
  margin-left: 8px;
}

.bar {
  position: absolute;
  left: 0;
  right: 0;
  display: block;
  width: 100%;
  height: 1px;
  margin: auto;
  background-color: #246ca8;

  &.one {
    top: 0;
  }

  &.two {
    top: 0;
    bottom: 0;
  }

  &.three {
    bottom: 0;
  }
}

</style>
