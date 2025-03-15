<template>
  <ul :class="s.list">
    <li v-for="(_, index) in count" :key="index">
      <span :class="[s.dot, isActive === index ? s.isActive : '']" />
    </li>
  </ul>
</template>

<style module="s">
.list {
  display: flex;
  justify-content: center;
  gap: 12px;
}

/*
.listItem {
}
*/

.dot {
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: v-bind('bg');
  transition: background-color 400ms ease-in-out;
}

.isActive {
  background-color: v-bind('active');
}
</style>

<script>
export default {
  props: ['isActive', 'count', 'defaultColor', 'activeColor'],
  methods: {
    isActiveClass() {
    }
  },
  computed: {
    bg() {
      return this.defaultColor || '#d9d9d9';
    },
    active() {
      return this.activeColor || 'var(--c-main)';
    }
  }
}
</script>
