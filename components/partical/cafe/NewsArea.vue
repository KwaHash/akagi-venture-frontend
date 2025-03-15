<template>
  <div :class="s.container">
    <ThinContainer>
      <div :class="s.header">
        <h2 :class="s.title">News</h2>
        <a :class="s.button" href="/" v-if="false"><span>お知らせ</span>一覧を見る</a>
      </div>
      <ul :class="s.list">
        <li :class="s.listItem">
          <a href="/" :class="s.listLink">
            <span :class="s.listDate">2022.12.26</span>
            <h3 :class="s.listTitle">店休日のお知らせ</h3>
          </a>
        </li>
      </ul>
    </ThinContainer>
  </div>
</template>

<style module="s" lang="scss">
.container {
  position: relative;
  width: 100%;
  padding: clamp(80px, calc(60px + 15vw), 200px) 0;
  z-index: 2;

  @include mq.smView {
    padding-top: 60px;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  // gap: 60px;
}

.title {
  font-size: clamp(28px, 5px + 4vw, 50px);
  color: var(--c-title);
  font-family: var(--f-title);
  font-weight: 500;
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
  margin-right: 40px;
  color: var(--c-title);
}

</style>


<script>
import ThinContainer from '@/components/ui/ThinContainer'

export default {
  components: { ThinContainer },
}
</script>
