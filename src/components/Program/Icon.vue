<template>
  <div v-html="category.name" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    category: {},
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
div {
  font-size: 21px;
  font-weight: 500;
  text-transform: uppercase;
  // background: linear-gradient(45deg, theme(main1), theme(main2), theme(main3));
  // background-clip: text;
  // -webkit-text-fill-color: transparent;
  color: theme(main1);
  &:hover {
    color: theme(main2);
  }
  transition: 0.2s all;
  cursor: pointer;

  margin-bottom: 5px;
  filter: brightness(0.9);
}
</style>
