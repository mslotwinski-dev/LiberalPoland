<template>
  <router-link :to="`/program/${category.id}`">
    <div v-html="category.name" />
  </router-link>
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
a {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 10px 20px;
  font-size: 21px;
  font-weight: 500;
  text-transform: uppercase;
  // background: linear-gradient(45deg, theme(main1), theme(main2), theme(main3));
  // background-clip: text;
  // -webkit-text-fill-color: transparent;
  color: theme(main1) !important;
  &:hover {
    color: theme(main2) !important;
  }
  transition: 0.2s all;
  flex-grow: 1;
  @media (max-width: 1000px) {
    font-size: 18px;
  }
}
div {
  flex-grow: 1;
  filter: brightness(0.9);
}
</style>
