<template>
  <div class="moved" />
  <Header />
  <div class="home">
    <Program />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Home/Header.vue'
import Program from '@/components/Home/Program.vue'

export default defineComponent({
  components: {
    Header,
    Program,
  },
})
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
img {
  width: 1200px;
  max-width: 100vw;
  margin-top: 20px;
  border-radius: 20px;
}
</style>
