<template>
  <div class="moved" />
  <div class="chapter-container">
    <Header v-if="category" :category="category" />
    <div class="chapter-program">
      <component :is="$route.params.id"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Program/Header.vue'

import Patterns from '@/components/Program/Chapters/Patterns.vue'

import Economy from '@/components/Program/Chapters/Economy.vue'
import Finances from '@/components/Program/Chapters/Finances.vue'
import Welfare from '@/components/Program/Chapters/Welfare.vue'
import Transport from '@/components/Program/Chapters/Transport.vue'
import Health from '@/components/Program/Chapters/Health.vue'
import Ecology from '@/components/Program/Chapters/Ecology.vue'
import Research from '@/components/Program/Chapters/Research.vue'
import Agriculture from '@/components/Program/Chapters/Agriculture.vue'

import Freedom from '@/components/Program/Chapters/Freedom.vue'
import Equality from '@/components/Program/Chapters/Equality.vue'
import Secular from '@/components/Program/Chapters/Secular.vue'
import Family from '@/components/Program/Chapters/Family.vue'
import Empathy from '@/components/Program/Chapters/Empathy.vue'
import Security from '@/components/Program/Chapters/Security.vue'
import Nation from '@/components/Program/Chapters/Nation.vue'
import Culture from '@/components/Program/Chapters/Culture.vue'

import Rp from '@/components/Program/Chapters/Rp.vue'
import Democracy from '@/components/Program/Chapters/Democracy.vue'
import State from '@/components/Program/Chapters/State.vue'
import Justice from '@/components/Program/Chapters/Justice.vue'
import Defense from '@/components/Program/Chapters/Defense.vue'
import International from '@/components/Program/Chapters/International.vue'
import Digit from '@/components/Program/Chapters/Digit.vue'

import chapters from '@/data/program'

export default defineComponent({
  data() {
    return {
      chapters,
      category: chapters
        .map((e) => e.categories)
        .flat(1)
        .find((e) => e.id == this.$route.params.id),
    }
  },
  components: {
    Header,

    // INTRO
    Patterns,

    // PRZEDSIĘBIORCZOŚĆ
    Economy,
    Finances,
    Welfare,
    Transport,
    Health,
    Ecology,
    Research,
    Agriculture,

    // WOLNOŚĆ
    Freedom,
    Equality,
    Secular,
    Family,
    Empathy,
    Security,
    Nation,
    Culture,

    // WSPOLNOTA
    Rp,
    Democracy,
    State,
    Justice,
    Defense,
    International,
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
  flex-grow: 1;
  @media (min-width: 1000px) {
    padding-top: 20px;
  }
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
    text-align: justify;
    @media (max-width: 1000px) {
      font-size: 14.5px;
    }
  }

  a {
    color: theme(main1);
    transition: 0.2s all;
    &:hover {
      color: theme(main2);
    }
  }

  .img {
    max-width: 70%;
    height: 350px;
    padding: 0 30px;
    margin: 20px auto;
    text-align: center;
    display: block;
    img {
      height: 100%;
      display: block;
      margin-bottom: 8px;
    }
    &:after {
      content: '';
      display: block;

      position: absolute;
      top: 0;
      left: 0;

      width: 7px;
      height: 100%;
      background: theme(main1);
    }
  }
}
</style>
