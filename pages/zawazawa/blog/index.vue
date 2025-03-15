<template>
  <div :class="s.container">
    <div :class="s.inner">
      <div :class="s.header">
        <h2 :class="s.title">ブログ一覧</h2>
      </div>
      <ul :class="s.list">
        <li
          v-if="posts.length"
          v-for="post in posts"
          :key="post"
          :class="s.listItem">
          <a v-if="post.external_link" :href="post.url" target="_blank" :class="s.listLink">
            <span :class="s.listDate">{{ post.publish_date }}</span>
            <h3 :class="s.listTitle">{{ post.title }}</h3>
          </a>
          <nuxt-link v-else :to="`${ env.envName === 'local' ? '/zawazawa' : '' }/blog/${post.slug}/`" :class="s.listLink">
            <span :class="s.listDate">{{ post.publish_date }}</span>
            <h3 :class="s.listTitle">{{ post.title }}</h3>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div v-if="maxPage" :class="s.pagenate">
      <ul :class="s.pagenate_list">
        <li v-if="!pages.includes(1)">
          <nuxt-link
            :class="s.list"
            :to="`${ env.envName === 'local' ? '/zawazawa' : '' }/blog?page=1`">
            1
          </nuxt-link>
          <span v-if="!pages.includes(1 + 1)" :class="s.center">・・・</span>
        </li>
        <li
          v-for="p in pages"
          :key="p">
          <nuxt-link
            :class="p === Number($route.query.page) ? s.list_now : s.list"
            :to="`${ env.envName === 'local' ? '/zawazawa' : '' }/blog?page=${p}`">
            {{ p }}
          </nuxt-link>
        </li>
        <li v-if="!pages.includes(maxPage)">
          <span v-if="!pages.includes(maxPage - 1)" :class="s.center">・・・</span>
          <nuxt-link
            :class="s.list"
            :to="`${ env.envName === 'local' ? '/zawazawa' : '' }/blog?page=${maxPage}`">
            {{ maxPage }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { DateTime } from 'luxon';
import axios from '@/plugins/axios';

import newsList from '@/assets/jsonFiles/newsList' // サイト、タイプなどの区分け

export default {
  name: 'news-area',
  components: {},
  data() {
    return {
      posts: [],
      page: 1,
      pages: [],
      maxPage: null,
      env: null,
    };
  },
  created() {
    this.getPosts();
    this.env = useRuntimeConfig().public;
  },
  setup() {},
  mounted() {},
  computed: {
    ...mapState(['helper']),
  },
  watch: {
    '$route.query.page': {
      handler() {
        this.pages = [];
        this.posts = [];
        this.getPosts();
      },
    },
  },
  methods: {
    getPosts() {
      axios().provide.api({
        method: 'GET',
        url: '/v1/post/getlist/',
        params: {
          flags: [1],
          limit: 10,
          page: this.$route.query.page,
          site: [4],
          type: [2],
        },
      })
        .then((response) => {
          const res = response.data.list.data;
          this.maxPage = response.data.list.meta.last_page;
          // 表示する前後のページ数の計算
          const range = 3;
          for (let i = 1; i <= this.maxPage; i++) {
            if (Math.abs(this.$route.query.page - i) < range) this.pages.push(i);
          }
          res.forEach((post) => {
            // 日付のフォーマット
            const formatDay = DateTime.fromISO(post.publish_date).toFormat('yyyy.MM.dd');
            // 対象サイト判定（トップなのでとりあえず全部のせ）
            const site = newsList.site[post.site];
            // 記事のタイプ判定
            const type = newsList.type[post.type];

            this.posts.push({
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
  --c-title: var(--c-sub);
  position: relative;
  width: 100%;
  padding: clamp(80px, calc(60px + 15vw), 200px) 0;
  z-index: 2;

  @include mq.smView {
    padding-top: 60px;
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
  font-size: clamp(28px, 5px + 4vw, 44px);
  color: #00843d;
  font-family: var(--ff-title);
  font-weight: 900;
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
  border-bottom: 1px solid #246ca8;
}

.listItem {
  border-top: 1px solid #246ca8;
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
  color: #00843d;
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
  color: #246ca8;

  @include mq.smView {
    width: 100%;
    margin-left: 0;
  }
}

.pagenate {
  width: 70%;
  margin: 30px auto;
  &_list {
    display: flex;
    justify-content: center;
    color: #246ca8;
    font-weight: bold;
    .list {
      background-color: #246ca8;
      margin: 10px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      &_now {
        background-color: #00843d;
        border: #246ca8 solid 2px;
        color: white;
        margin: 10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .center {
      display: flex;
      align-items: center;
      color: #fdf1e3;
    }
    li {
      display: flex;
    }
  }
}
</style>
