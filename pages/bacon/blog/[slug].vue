<template>
  <div :class="s.container">
    <div :class="s.space_top" />
    <section
      v-if="post"
      :class="s.post_view">
      <article>
        <h3>{{ post.publish_date }}</h3>
        <h2>{{ post.title }}</h2>
        <span :class="s.news_type">{{ post.type }}</span>
        <div
          :class="s.post_content"
          v-html="post.content"></div>
      </article>
    </section>
    <section>
      <div :class="s.sandwiched">
        <div :class="s.backhome">
          <button :class="s.backhome_btn" @click="backHome">トップページへ戻る</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from '@/plugins/axios';
import { DateTime } from 'luxon';

import newsList from '@/assets/jsonFiles/newsList' // サイト、タイプなどの区分け

export default {
  name: 'post-slug',
  components: {},
  data() {
    return {
      beforePost: null,
      post: null,
      afterPost: null,
      env: null,
    }
  },
  created() {
    if (this.$route.params.slug) {
      this.getPost();
    }
    this.env = useRuntimeConfig().public;
  },
  methods: {
    getPost() {
      const slug = this.$route.params.slug;
      const params = {
        slug,
        type: [2],
      };
      axios().provide.api({
        method: 'GET',
        url: '/v1/post/getdetail',
        params,
      })
        .then((response) => {
          const res = response.data.data.data;
          const post = res.find((e) => e.slug === this.$route.params.slug);
          const formatDay = DateTime.fromISO(post.publish_date).toFormat('yyyy-MM-dd');
          this.post = {
            id: post.id,
            title: post.title,
            publish_date: formatDay,
            site: newsList.site[post.site],
            type: newsList.type[post.type],
            content: post.content,
            created_at: post.created_at,
            updated_at: post.updated_at,
          };
        })
        .catch((error) => {
          if (error.message) console.log(error.message);
          else console.log(error);
        });
    },

    // サイトトップに戻る
    backHome() {
      this.$router.push(`${ this.env.envName === 'local' ? '/bacon' : '' }/`);
    },
  },
};
</script>

<style module="s" lang="scss">
.container {
  // color
  --c-main: rgb(36, 108, 168);
  --c-text: #251e1c;

  height: var(--h);
  color: var(--c-text);
}
.space {
  &_top {
    padding-top: 150px;
    @include mq.smView {
      padding-top: 80px;
    }
  }
}
.post {
  &_view {
    width: 80%;
    margin: 0 auto;
  }
  &_content {
    padding-top: 30px;
    img {
      width: 100%;
      margin: 25px auto;
    }
  }
}
.news_type {
  color: #333333;
}
.sandwiched {
  width: 80%;
  margin: 30px auto;
}
.flex_elem {
  display: flex;
  justify-content: center;
}
.otherposts {
  padding: 20px;
}
.backhome {
  text-align: center;
  padding: 10px;
  &_btn {
    padding: 10px 20px;
    background-color: var(--c-main);
    border-radius: 50px;
    font-size: 1.2em;
    color: white;
    margin-bottom: 50px;
    box-shadow: 5px 5px 6px gray;
    transition: all .4s;
  }
  &_btn:hover {
    padding: 10px 20px;
    background-color: var(--c-main);
    opacity: .7;
    border-radius: 50px;
    font-size: 1.2em;
    color: white;
    margin-bottom: 50px;
    box-shadow: 2px 2px 3px gray;
    transition: all .4s;
  }
}
</style>
