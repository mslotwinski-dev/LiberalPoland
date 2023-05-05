<template>
  <div class="main">
    <img :src="require(`@/assets/icons/categories/${category.id}.svg`)" />
    <div class="text">
      <div v-html="category.name" />
    </div>
  </div>
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
.main {
  margin: 10px auto 30px auto;
  width: 100%;
  flex-grow: 1;
  padding-top: 10px;
  background: $gradient;
  display: flex;
  border-radius: 10px;
  transition: 0.3s all;
}

img {
  margin: 2px 12px 10px 12px;
  height: 60px;
  width: 60px;
  filter: invert(0.5) brightness(1.8);
  @media (max-width: 1000px) {
    margin: 2px 12px 10px 12px;
    height: 50px;
    width: 50px;
  }
}

.text {
  background: #ebeaed;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border-radius: 10px 0 0 0;
  font-size: 27px;
  font-weight: 500;
  text-transform: uppercase;
  @media (max-width: 1000px) {
    font-size: 23px;
  }

  div {
    background: $gradient;

    // color: theme(light);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: brightness(0.7);
  }
}
</style>
