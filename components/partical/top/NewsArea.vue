<template>
  <div :class="s.container">
    <section>
      <div :class="s.inner">
        <div :class="s.header">
          <nuxt-link to="/news?page=1">
            <h2 :class="s.title">お知らせ</h2>
          </nuxt-link>
        </div>
        <ul :class="s.list">
          <li
            v-if="news.length"
            v-for="post in news"
            :key="post"
            :class="s.listItem">
            <a v-if="post.external_link" :href="post.url" target="_blank" :class="s.listLink">
              <span :class="s.listDate">{{ post.publish_date }}</span>
              <span :class="s.listBrand">{{ post.site }}</span>
              <h3 :class="s.listTitle">{{ post.title }}</h3>
            </a>
            <nuxt-link v-else :to="`/news/${post.slug}/`" :class="s.listLink">
              <span :class="s.listDate">{{ post.publish_date }}</span>
              <span :class="s.listBrand">{{ post.site }}</span>
              <h3 :class="s.listTitle">{{ post.title }}</h3>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { DateTime } from 'luxon';
import axios from '@/plugins/axios';

import newsList from '@/assets/jsonFiles/newsList' // サイト、タイプなどの区分け
import BlogArea from './BlogArea.vue';
import ColumnArea from './ColumnArea.vue';

export default {
  name: 'news-area',
  components: {
    BlogArea,
    ColumnArea,
  },
  data() {
    return {
      news: [],
    };
  },
  created() {
    this.getPosts();
  },
  setup() {},
  mounted() {},
  computed: {
    ...mapState(['helper']),
  },
  methods: {
    getPosts() {
      axios().provide.api({
        method: 'GET',
        url: '/v1/post/getlist/',
        params: {
          flags: [1],
          limit: 5,
          page: 1,
          type: [1],
          // site: [1],
        },
      })
        .then((response) => {
          const res = response.data.list.data;
          res.forEach((post) => {
            // 日付のフォーマット
            const formatDay = DateTime.fromISO(post.publish_date).toFormat('yyyy.MM.dd');
            // 対象サイト判定（トップなのでとりあえず全部のせ）
            const site = newsList.site[post.site];
            // 記事のタイプ判定
            const type = newsList.type[post.type];

            this.news.push({
              id: post.id,
              slug: post.slug,
              publish_date: formatDay,
              title: post.title,
              content: post.content,
              external_link: post.external_link || null,
              url: post.url,
              site,
              type,
            });
          });
        })
        .catch((error) => {
          if (error.message) console.log(error.message);
          else console.log(error);
        });
    },
  },
};
</script>

<style module="s" lang="scss">
.container {
  position: relative;
  width: 100%;
  padding: clamp(80px, calc(60px + 15vw), 100px) 0;
  // padding-top: 80px;
  z-index: 2;
  border-radius: 0 90px 0 0;
  background-color: #246ca8;

  @include mq.smView {
    padding-top: 60px;
    border-radius: 0 60px 0 0;
  }
}

.inner {
  max-width: 1440px;
  width: 100%;
  padding: 0 clamp(20px, calc(10px + 2vw), 56px);
  margin: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-family: font.$Zenkaku;
}

.title {
  font-size: clamp(28px, 5px + 4vw, 50px);
  letter-spacing: 0.2em;
  color: #fff;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  max-width: 530px;
  min-width: fit-content;
  padding: 20px 40px;
  background-color: #f1cb00;
  border-radius: 16px;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  color: #fff;

  @include mq.smView {
    font-size: 17px;
    padding: 13px 30px;

    span {
      display: none;
    }
  }
}

.list {
  margin-top: 70px;
  border-bottom: 1px solid #fff;
}

.listItem {
  border-top: 1px solid #fff;
}

.listLink {
  display: flex;
  width: 100%;
  padding: 30px 0;
  font-family: 'Rubik';
  font-weight: bold;
  font-size: 18px;
  line-height: 2.1;

  @include mq.smView {
    flex-wrap: wrap;
    padding: 20px 0;
    font-size: 16px;
    line-height: 1.8;
  }
}

.listDate {
  color: #f67f61;
}

.listBrand {
  display: block;
  margin-left: 50px;
  color: #c78f58;

  @include mq.smView {
    margin-left: 25px;
  }
}

.listTitle {
  display: block;
  margin-left: 50px;
  color: #fff;

  @include mq.smView {
    width: 100%;
    margin-left: 0;
  }
}

</style>
