<template>
  <nav>
    <Desktop :class="{ changed: changed }" />
    <Mobile />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Desktop from './Desktop/Index.vue'
import Mobile from './Mobile/Index.vue'

export default defineComponent({
  components: {
    Desktop,
    Mobile,
  },
  data() {
    return {
      changed: false,
    }
  },
  methods: {
    scrollHandler() {
      if (window.scrollY > 20) {
        this.changed = true
      } else {
        this.changed = false
      }
    },
  },
  mounted() {
    document.addEventListener('scroll', () => this.scrollHandler())
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

nav {
  position: fixed;
  width: 100%;
  background: transparent;
  height: $height;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 9;
}

.changed {
  height: $heightB;
}
</style>
