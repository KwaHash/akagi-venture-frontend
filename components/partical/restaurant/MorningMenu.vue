<template>
  <div :class="s.container">
    <h3 :class="s.title">MORNING</h3>
    <div :class="s.name">赤城山の朝ごはん ご馳走豚汁セット　￥770</div>
    <div :class="s.menu">
      <span>ごちそう豚汁・ごはん・漬物</span>
    </div>
    <img :class="s.photo" src="/images/brand/restaurant/morning.jpg" alt="MorningMenu">
  </div>
</template>

<style module="s" lang="scss">
.container {
  display: block;
  padding-bottom: 100px;
}

.title {
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.01em;
  color: var(--c-title);
  font-family: var(--ff-title);
  text-align: center;
}

.name {
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  line-height: 2.58;
  text-align: center;
}

.menu {
  margin-top: 23px;
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4;

  @include mq.mdView {
    font-size: 16px;
  }

  span {
    @include mq.mdView {
      display: block;
    }

    & + span::before {
      content: '・';

      @include mq.mdView {
        content: none;
      }
    }
  }

  br {
    @include mq.mdView {
      display: none;
    }
  }
}

.photo {
  margin-top: 30px;
}
</style>

<script>
export default {
}
</script>
