<template>
  <div :class="s.container">
    <div :class="s.r2">
      <p><span>R2 事業再構築</span></p>
      <p><span>&copy; A&amp;V PROJECT</span></p>
    </div>
  </div>
</template>

<style module="s" lang="scss">
.container {
  position: relative;
  width: 100%;
  height: min(906px, 62.9vw);
  background: transparent url('/images/top/TheFooter/photo.jpg') center no-repeat;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    display: block;
    width: 100%;
    height: 6.6vw;
    background: transparent url('/images/top/TheFooter/bg-mountain.svg') center top -1px no-repeat;
    background-size: 100% auto;
  }

  .r2 {
    font-size: 12px;
    position: absolute;
    bottom: 1.2em;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    span {
      display: inline-block;
      padding: .1em .4em;
      background-color: rgba(white, .6);
      border-radius: 4px;
    }
  }
}
</style>
