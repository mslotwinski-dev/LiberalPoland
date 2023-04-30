<template>
  <div class="main">
    <img :src="require(`@/assets/icons/categories/${category.id}.svg`)" />
    <div class="text" v-html="category.name" />
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
  margin: 10px;
  width: 100%;
  flex-grow: 1;
  padding-top: 10px;
  background: $gradient;
  display: flex;
  // flex-direction: column;
  border-radius: 10px;
  transition: 0.3s all;
}

img {
  margin: 5px 12px;
  height: 60px;
  width: 60px;
}

.text {
  background: #ebeaed;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border-radius: 10px 0 0 0;
  font-size: 22px;
  font-weight: 500;
  text-transform: uppercase;
}
</style>
