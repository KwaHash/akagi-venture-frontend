<template>
  <div :class="[s.container, isOpen ? s.isOpen : '']" ref="container">
    <div :class="s.overlay" @click="$emit('click-close')"/>
    <div :class="s.menuContainer">
      <div :class="s.menu">
        <div :class="s.bg" ref="bg" />
        <div :class="s.header" ref="header">
          <a :href="`${urls.avp}/`" :class="s.header__link">
            <img
              :class="s.header__logo"
              src="/images/logo/avp-white.svg" alt="AKAGI&VENTURE PROJECT" />
          </a>
          <div :class="s.buttonContainer">
            <a :class="[s.button, s.store]" href="https://www.hutte-hayashi.com/" target="_blank" rel="noopener noreferrer">
              Online Store
              <svg :class="s.buttonIcon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.83864 0.717514H16.2737V14.1525M15.9201 1.07107L0.717318 16.2739" stroke="#fdf1e3"/>
              </svg>
            </a>
            <button :class="s.button" @click="$emit('click-close')">
              Menu
              <div :class="[s.menuIcon]">
                <span :class="[s.bar, s.one]" />
                <span :class="[s.bar, s.three]" />
              </div>
            </button>
          </div>
        </div>
        <div :class="s.inner" ref="inner">
          <ul :class="s.list">
            <li :class="s.listItem">
              <a
                :class="s.listLink"
                :href="`${urls.avp}/about/`"
                ref="about"
                @mouseenter="mouseenterLink('about')"
                @mouseleave="mouseleaveLink('about')"
              >
                私たちについて
                <span :class="s.linkBar"/>
              </a>
            </li>
            <li :class="s.listItem">
              <div :class="s.subListContainer">
                <div
                  :class="s.subList__title"
                  @mouseenter="mouseenterSubList('brand')"
                >
                  ブランド
                </div>
                <ul :class="s.subList" ref="brand">
                  <li :class="s.subListItem">
                    <a
                      :class="s.subListLink"
                      :href="`${urls.brand.hutte}/`"
                    >
                      HÜTTE HAYASHI
                    </a>
                  </li>
                  <li :class="s.subListItem">
                    <a
                      :class="s.subListLink"
                      :href="`${urls.brand.tonton}/`"
                    >とんとん広場</a>
                  </li>
                  <li :class="s.subListItem">
                    <a
                      :class="s.subListLink"
                      :href="`${urls.brand.bacon}/`"
                    >
                      bacon
                    </a>
                  </li>
                  <li :class="s.subListItem">
                    <a
                      :class="s.subListLink"
                      :href="`${urls.brand.zawazawa}/`"
                    >
                      ざわざわ森
                    </a>
                  </li>
                </ul>
                <span :class="s.linkBar"/>
              </div>
            </li>
            <li :class="s.listItem">
              <a
                :class="s.listLink"
                :href="`${urls.avp}/fukubuta/`"
                ref="fukubuta"
                @mouseenter="mouseenterLink('fukubuta')"
                @mouseleave="mouseleaveLink('fukubuta')"
              >
                福豚について
                <span :class="s.linkBar"/>
              </a>
            </li>
            <!-- <li :class="s.listItem" ref="info" @mouseenter="changeActiveItem('')">
              <a :class="s.listLink" href="/">おしらせ</a>
            </li> -->
            <li :class="s.listItem">
              <div :class="s.subListContainer">
                <div
                  :class="s.subList__title"
                  @mouseenter="mouseenterSubList('reserve')"
                >
                  予約
                </div>
                <ul :class="s.subList" ref="reserve">
                  <li :class="s.subListItem">
                    <a :class="[s.subListLink]" href="https://squareup.com/appointments/book/qi0purqf8qjcgi/L5HFZEM9V6928/services" target="_blank" rel="noopener noreferrer">HÜTTE HAYASHI CAFE</a>
                  </li>
                  <li :class="s.subListItem">
                    <a :class="s.subListLink" href="https://liff.line.me/1660723951-oZ0MM1Wv" target="_blank" rel="noopener noreferrer">bacon</a>
                  </li>
                  <li :class="s.subListItem">
                    <a :class="s.subListLink" href="https://www.nap-camp.com/gunma/14346?ref_host=widget" target="_blank" rel="noopener noreferrer">ざわざわ森</a>
                  </li>
                </ul>
                <span :class="s.linkBar"/>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import cf from '@/mixins/commonFunctions';

export default {
  mixins: [cf],
  props: ['isOpen'],
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
      activeSubList: "",
      menuToggleTL: null,
    }
  },
  mounted() {
    gsap.set(this.s.subListLink, { yPercent: 100 })
  },
  methods: {
    openMenu() {
      this.activeSubList = ''
      const bgSize = window.innerHeight > window.innerWidth ? window.innerHeight * 3 : window.innerWidth * 3;
      const tl = gsap.timeline();
      tl
        .fromTo(this.$refs.container, 0.5, { opacity: 0 }, { opacity: 1 })
        .to(this.$refs.bg, 0.7, { width: bgSize })
        .fromTo(this.$refs.header, 0.5, { opacity: 0 }, { opacity: 1 })
        .fromTo(this.$refs.inner.getElementsByClassName(this.s.listItem),
          0.3,
          { opacity: 0, y: -5 },
          {
            opacity: 1,
            y: 0,
            stagger: {
              each: 0.1
            }
          }
        );
    },
    closeMenu() {
      const tl = gsap.timeline();
      tl
        .fromTo(this.$refs.inner.getElementsByClassName(this.s.listItem),
          0.3,
          { opacity: 1 },
          {
            opacity: 0,
            y: -5,
            stagger: {
              each: 0.1
            }
          }
        )
        .fromTo(this.$refs.header, 0.5, { opacity: 1 }, { opacity: 0 })
        .to(this.$refs.bg, 0.7, { width: 0 })
        .fromTo(this.$refs.container, 0.5, { opacity: 1 }, { opacity: 0 });
      this.activeSubList = ''
    },
    mouseenterLink(name) {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 769px)", () => {
        this.closeSubList()
        const el = this.$refs[name]
        const bar = el.getElementsByClassName(this.s.linkBar)[0];
        gsap.fromTo(bar, { xPercent: 0}, { xPercent: 100, duration: 0.5 })
      })
    },
    mouseleaveLink(name) {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 769px)", () => {
        const el = this.$refs[name]
        const bar = el.getElementsByClassName(this.s.linkBar)[0];
        gsap.to(bar, { xPercent: 200, duration: 0.5 })
      })
    },
    mouseenterSubList(name) {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 769px)", () => {
        if (this.activeSubList === name) return
        this.activeSubList = name
        const list = this.$refs[name]
        const bar = list.parentElement.getElementsByClassName(this.s.linkBar)[0];
        const listItems = list.getElementsByClassName(this.s.subListItem);
        const tl = gsap.timeline();
        tl
          .fromTo(
            bar,
            { xPercent: 0 },
            { xPercent: 100, duration: 0.8, overwrite: true }
          )
          .to(listItems, {
            yPercent: -100,
            duration: 0.4,
            overwrite: true,
            stagger: 0.3
          }
          )
      })
    },
    closeSubList() {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 769px)", () => {
        if (!this.activeSubList) return
        const list = this.$refs[this.activeSubList]
        const bar = list.parentElement.getElementsByClassName(this.s.linkBar)[0];
        const listItems = list.getElementsByClassName(this.s.subListItem);
        const tl = gsap.timeline();
        tl
          .to(listItems, {
              yPercent: 100,
              duration: 0.4,
              overwrite: true,
              stagger: {
                from: 'end'
              }
            }
          )
          .fromTo(bar,
            { xPercent: 100},
            { xPercent: 0, duration: 0.8, overwrite: true }
          )
        this.activeSubList = ''
      })
    },
    changeActiveItem(name) {
      this.activeItem = name
    },
    hideSubList() {
    },
  },
  watch: {
    isOpen(newValue) {
      if(newValue) {
        this.openMenu();
      } else {
        this.closeMenu();
      }
    },
  }
}
</script>

<style module="s" lang="scss">
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 11;
  opacity: 0;
  pointer-events: none;

  &.isOpen {
    pointer-events: auto;
  }
}

.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:  30px var(--gutter) 0;
  width: 100%;
  z-index: 12;
  opacity: 0;

  @include mq.smView {
    padding-top: 20px;
    align-items: flex-start;
  }
}

.header__link {
  display: block;
}

.header__logo {
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
  border-color: #fdf1e3;
  border-style: solid;
  color: #fdf1e3;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.01em;
  font-family: var(--ff-num);
  background-color: #246ca8;

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
  width: 26px;
  height: 19px;
  margin-left: 8px;
  transform: scale(1);
  transition: transform 500ms ease-in-out;

  .button:hover & {
    transform: scale(1.2);
  }
}

.bar {
  position: absolute;
  left: 0;
  right: 0;
  display: block;
  width: 100%;
  height: 1px;
  margin: auto;
  background-color: #fdf1e3;
  transition:
    transform 500ms ease-in-out,
    height 500ms ease-in-out;

  .button:hover & {
    height: 1.5px;
  }

  &.one {
    top: 0;
    bottom: 0;
    transform: rotate(-45deg);
    transform-origin: center;

    .button:hover & {
      transform: rotate(-225deg);
    }
  }

  &.three {
    top: 0;
    bottom: 0;
    transform: rotate(45deg);
    transform-origin: center;

    .button:hover & {
      transform: rotate(405deg);
    }
  }
}

.overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: var(--h);
  background-color: #fdf1e3;
  opacity: 0.2;
  z-index: 1;
}

.menuContainer {
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  border-radius: 0 0 40px 40px;
}

.menu {
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  width: 100vw;
  z-index: 2;
  border-radius: 0 0 40px 40px;
  padding-bottom: 80px;
  overflow: hidden;

  @include mq.smView {
    padding-bottom: 60px;
  }
}

.bg {
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  aspect-ratio: 1 / 1;
  background-color: #246ca8;
  border-radius: max(100vw, 100vh);
  z-index: 1;
  transform: translate3d(50%, -50%, 0);
}

.inner {
  position: relative;
  width: min(calc(1200px + var(--gutter) * 2), 100%);
  margin: 70px auto 0;
  padding: 0 var(--gutter);
  z-index: 2;

  @include mq.smView {
    margin-top: 60px;
  }
}

.list {
  display: block;
  font-size: 22px;
  line-height: 1.36363636;
  letter-spacing: 0.06em;
  font-weight: 700;
  font-family: var(--ff-gothic);
  color: #fff;

  @include mq.smView {
    font-size: 18px;
  }
}

.listItem {
  display: block;
  opacity: 0;

  & + & {
    margin-top: 1.2em;

    @include mq.smView {
      margin-top: 1.8em;
    }
  }
}

.listInner {
  display: block;
  width: fit-content;
}

.listLink {
  position: relative;
  display: block;
  padding-bottom: 7px;
  width: fit-content;
  color: #fff;
  overflow: hidden;

  @include mq.smView {
    padding-bottom: 4px;
  }
}

.linkBar {
  position: absolute;
  bottom: 0;
  right: 100%;
  height: 1px;
  width: 100%;
  transform: translate3d(0, 0, 0);
  background-color: #fff;
}

.subListContainer {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 7px;
  overflow: hidden;

  @include mq.smView {
    flex-direction: column;
    padding-bottom: 0;
    border-bottom: none;
  }
}

.subList {
  display: flex;
  gap: min(60px, 5vw);
  overflow: hidden;

  @include mq.smView {
    margin-top: 10px;
    margin-left: 20px;
    flex-direction: column;
    gap: 12px;
  }
}

.subListItem {
  position: relative;
  transform: translate3d(0, 100%, 0);

  @include mq.smView {
    transform: translate3d(0, 0, 0);
  }
}

.subListLink {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #fff;
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: translate3d(0, 20%, 0);
  }

  &.disabled {
    pointer-events: none;
    color: #acacac;
  }

  @include mq.smView {
    &::before {
      content: '';
      display: block;
      width: 10px;
      height: 1px;
      background-color: #eee;
      margin: 0 8px 0 2px;
    }
  }
}


</style>
