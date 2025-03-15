<template>
  <div v-if="posts.length" :class="s.container">
    <ThinContainer>
      <div :class="s.header">
        <nuxt-link :to="`${ env.envName === 'local' ? '/tonton' : '' }/news?page=1`">
          <h2 :class="s.title">お知らせ</h2>
        </nuxt-link>
        <!-- <a :class="s.button" href="/" v-if="false"><span>お知らせ</span>一覧を見る</a> -->
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
          <nuxt-link v-else :to="`${ env.envName === 'local' ? '/tonton' : '' }/news/${post.slug}/`" :class="s.listLink">
            <span :class="s.listDate">{{ post.publish_date }}</span>
            <h3 :class="s.listTitle">{{ post.title }}</h3>
          </nuxt-link>
        </li>
      </ul>
    </ThinContainer>
  </div>
</template>

<script>
import ThinContainer from '@/components/ui/ThinContainer'
import { mapState } from 'vuex';
import { DateTime } from 'luxon';
import axios from '@/plugins/axios';
import BlogArea from './BlogArea.vue';
import ColumnArea from './ColumnArea.vue';

import newsList from '@/assets/jsonFiles/newsList' // サイト、タイプなどの区分け

export default {
  name: 'news-area',
  components: {
    ThinContainer,
    BlogArea,
    ColumnArea,
  },
  data() {
    return {
      posts: [],
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
  methods: {
    getPosts() {
      axios().provide.api({
        method: 'GET',
        url: '/v1/post/getlist/',
        params: {
          flags: [1],
          site: [3],
          type: [1],
        },
      })
        .then((response) => {
          const res = response.data.list.data;
          res.forEach((post) => {
            // 日付のフォーマット
            const formatDay = DateTime.fromISO(post.publish_date).toFormat('yyyy.MM.dd');
            // 対象サイト判定
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
  position: relative;
  width: 100%;
  margin-top: 190px;
  padding-bottom: 80px;
  z-index: 2;

  @include mq.smView {
    margin-top: 90px;
    padding-bottom: 60px;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.title {
  font-size: clamp(28px, 5px + 4vw, 44px);
  color: var(--c-title);
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
  background-color: var(--c-link);
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
  border-bottom: 1px solid var(--c-sub);

  @include mq.smView {
    margin-top: 30px;
  }
}

.listItem {
  border-top: 1px solid var(--c-sub);
}

.listTitle {
  display: block;
  margin-left: 50px;
  color: var(--c-sub);

  @include mq.smView {
    width: 100%;
    margin-left: 0;
  }
}

.listLink {
  display: flex;
  width: 100%;
  padding: 30px 0;
  font-family: var(--ff-num);
  font-weight: bold;
  font-size: 18px;
  line-height: 2.1;
  color: var(--c-text);

  @include mq.smView {
    display: block;
    padding: 20px 0;
    font-size: 16px;
    line-height: 1.8;
  }
}

.listDate {
  width: 100px;
  color: var(--c-title);
}

</style>
