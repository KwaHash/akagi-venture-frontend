<template>
  <div :class="s.container">
    <div :class="s.message" ref="section">
      <div :class="s.messageInner">
        <img :class="s.messageImg" src="/images/top/HutteHayashiArea/message.svg" alt="赤城山を、世界に誇る生ハムの産地に">
      </div>
      <div :class="s.bg" ref="bg" />
    </div>
    <div :class="s.header">
      <img :class="s.logo" src="/images/top/HutteHayashiArea/logo.svg" alt="">
    </div>
    <div :class="s.listContainer">
      <ul :class="s.list">
        <li :class="s.item" v-for="item in items" :key="item.item_code">
          <a :class="s.itemLink" :href="`https://www.hutte-hayashi.com/SHOP/${item.item_code}.html`">
            <div :class="s.itemPhoto">
              <div :class="s.itemPhotoImgWrap">
                <img :class="s.itemPhotoImg" :src="item.image_url" alt="商品画像">
              </div>
              <div :class="s.itemCartIcon">
                <img src="/images/top/HutteHayashiArea/icon-cart.svg" alt="">
              </div>
            </div>
            <div :class="s.itemContent">
              <div :class="s.itemName">{{ item.item_name }}</div>
              <div :class="s.itemPrice">&yen;{{ addComma(item.item_price) }}（税込）</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <a :class="s.button" href="https://www.hutte-hayashi.com/store/" target="_blank" rel="noopener noreferrer"><AnimateText>商品をもっと見る</AnimateText></a>
  </div>
</template>

<script>
import axios from '@/plugins/axios'
import cf from '@/mixins/commonFunctions'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AnimateText from "@/components/ui/AnimateText"
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    AnimateText,
  },
  mixins: [cf],
  data() {
    return {
      items: [],
    }
  },
  mounted: function() {
    this.setAnimation()
  },
  created() {
    this.getItems()
  },
  methods: {
    setAnimation() {
      const getRatio = (el) => window.innerHeight / (window.innerHeight + el.offsetHeight);
      const section = this.$refs.section;
      const bg = this.$refs.bg;

      gsap.fromTo(bg, {
        yPercent: -40,
      }, {
        yPercent: () => 40 * (1 - getRatio(section)),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true // to make it responsive
        }
      });
    },
    getItems() {
      const params = {};

      axios().provide.api({
        method: 'GET',
        url: '/v1/shopserve/get/items',
        params,
      })
        .then((response) => {
          const res = response.data;
          this.items = res.list;
        })
        .catch((error) => {
          if (error.response) console.log(error.response.data);
          else console.log(error);
        })
        .finally(() => {
        });
    },
  },
}

</script>

<style module="s" lang="scss">
.container {
  margin-top: -90px;
}

.message {
  position: relative;
  overflow: hidden;
  width: 100%;
  border-radius: 0 90px 0 0;

  @include mq.smView {
    border-radius: 0 70px 0 0;
  }
}

.messageInner {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  height: 650px;
  padding: 0 56px;
  margin: auto;
  z-index: 2;

  @include mq.smView {
    height: 300px;
    padding: 0 25px;
  }
}

.messageImg {
  display: block;
  max-width: 360px;
  width: 60%;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 140%;
  background: #fdf1e3 url('/images/top/HutteHayashiArea/bg.jpg') center no-repeat;
  background-size: cover;
  z-index: 1;

  @media screen and (max-width: 767px) {
    transition: transform 10ms linear;
  }
}

.header {
  width: 100%;
  padding: 115px 25px 306px;
  background-color: #b10000;
}

.logo {
  margin: auto;
}

.listContainer {
  width: 100%;
  max-width: 1440px;
  padding: 0 56px;
  margin: -184px auto 0;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  width: 100%;
}

.itemLink {
  display: block;
  transition: all 400ms ease-in-out;
  // height: 100%;
  // display: flex;
  // flex-direction: column;
}

.itemPhoto {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0);
  transition: all 400ms ease-in-out;
  background-color: #888;

  .itemLink:hover & {
    // box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    border-radius: 40px;
  }
}

.itemPhotoImgWrap {
  opacity: .9;
  background-color: white;
}

.itemPhotoImg {
  transition: all 400ms ease-in-out;
  width: 100%;
  height: 350px;
  object-fit: cover;
  @include mq.smView {
    height: auto;
  }

  .itemLink:hover & {
    transform: scale(1.1);
  }
}

.itemCartIcon {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #b10000;
}


.itemContent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  // margin-top: auto;
  color: #b10000;
  font-family: serif;
  font-weight: bold;
}

.itemName {
  font-size: 18px;
}

.itemPrice {
  font-size: 13px;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 120px auto;
  width: 90%;
  max-width: 644px;
  height: 78px;
  background-color: #b10000;
  border-radius: 16px;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  color: #fff;
}

</style>
