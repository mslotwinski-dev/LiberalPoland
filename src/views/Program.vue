<template>
  <div class="moved" />
  <div class="home">
    <TOC />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TOC from '@/components/Program/TOC.vue'

export default defineComponent({
  components: {
    TOC,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.home {
  width: 100vw;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
