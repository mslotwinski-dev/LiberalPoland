<template>
  <div>
    <header>
      <div>
        <div class="head">
          <div class="rect" />
          <div class="slogan">Zasługujemy na wolność</div>
        </div>
      </div>
      <div class="imgcont">
        <img
          :src="require(`@/assets/icons/categories/${icon}.svg`)"
          :key="nr"
          :class="{ show }"
        />
      </div>
    </header>
    <div class="intro">
      <Icon :key="category" v-for="category in intro" :category="category" />
    </div>
    <div class="container">
      <div class="chapter" :key="chapter" v-for="chapter in chapters">
        <header v-html="chapter.title" />
        <div class="flex">
          <Icon
            :key="category"
            v-for="category in chapter.categories"
            :category="category"
            @mouseover="head(category.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from './Icon.vue'
import chapters from '@/data/program'

export default defineComponent({
  data() {
    return {
      chapters,
      intro: [
        {
          id: 'intro',
          name: 'Wstęp',
        },
        {
          id: 'idea',
          name: 'Deklaracja ideowa',
        },
        {
          id: 'values',
          name: 'Wartości i Zasady',
        },
        {
          id: 'patterns',
          name: 'Wzorce',
        },
      ],
      icon: 'economy',
      show: true,
      nr: 1,
    }
  },
  components: {
    Icon,
  },
  methods: {
    head(icon: string) {
      this.icon = icon
      this.nr++
      this.show = false
      this.show = true
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;

  .chapter {
    width: 400px;
    flex-grow: 1;
    max-width: 98vw;
  }
  header {
    margin: 4px 10px;
    background: $gradient;

    color: theme(light);
    // background-clip: text;
    // -webkit-text-fill-color: transparent;
    font-size: 25px;
    @media (max-width: 1000px) {
      font-size: 22px;
    }
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px;
    margin-bottom: 12px;
  }
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  margin-left: 8px;
  height: 100%;
  padding-bottom: 15px;
  filter: invert(27%) sepia(49%) saturate(4098%) hue-rotate(167deg)
    brightness(80%) contrast(101%);
  transition: 0.2s all;
  display: none;
  &.show {
    display: block;
    animation-name: fog;
    animation-duration: 0.3s;
  }
}

.head {
  .rect {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: skew(-20deg);
    background: linear-gradient(
      45deg,
      theme(main1),
      theme(main2),
      theme(main3)
    );
    filter: brightness(0.8);
  }
  .slogan {
    padding: 15px 25px;
    font-size: 25px;
    font-weight: 600;
    text-transform: uppercase;
    color: theme(light);
    @media (max-width: 1000px) {
      padding: 8px 10px;
      font-size: 17px;
    }
    max-width: 60vw;
  }
}

@keyframes fog {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.imgcont {
  width: 150px;
  height: 150px;
  @media (max-width: 1000px) {
    width: 100px;
    height: 100px;
  }
}

.intro {
  display: flex;
  margin: auto;
  max-width: 800px;
}
</style>
