<template>
  <div class="moved" />
  <div class="chapter-container">
    <Header
      :category="
        chapters
          .map((e) => e.categories)
          .flat(1)
          .find((e) => e.id == $route.params.id)
      "
    />
    <div class="chapter-program">
      <component :is="$route.params.id"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Program/Header.vue'

import Digit from '@/components/Program/Chapters/Digit.vue'

import chapters from '@/data/program'

export default defineComponent({
  data() {
    return {
      chapters,
    }
  },
  components: {
    Header,

    // WSPOLNOTA
    Digit,
  },
  methods: {
    capitalize: (s: string) => s.charAt(0).toUpperCase() + s.slice(1),
  },
})
</script>

<style lang="scss">
@import '@/styles/index.scss';
.chapter-container {
  width: 900px;
  max-width: 95vw;
  margin: 10px auto;
}

.chapter-program {
  h3 {
    background: $gradient;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 500;
    font-size: 23px;
    text-transform: uppercase;
    @media (max-width: 1000px) {
      font-size: 21px;
    }
  }

  p {
    font-size: 16px;
    @media (max-width: 1000px) {
      font-size: 14.5px;
    }
  }
}
</style>
