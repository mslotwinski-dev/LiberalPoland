<template>
  <header>
    <div class="slideshow">
      <div
        class="hero"
        :style="{
          backgroundImage: `url(${require('@/assets/images/hero.jpg')})`,
        }"
      />
    </div>
    <div class="hello">
      <img src="@/assets/icons/logo/logo1.png" />
      <div>
        <div class="title">Polska Liberalna</div>
        <Quotes />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Quotes from './Quotes.vue'

export default defineComponent({
  components: {
    Quotes,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

header {
  background: white;
  width: 100vw;
  height: 800px;
  @media (max-width: 1000px) {
    height: 100vh;
  }
}

.hello {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  text-align: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
}

.title {
  font-size: 70px;
  font-weight: 900;
  color: theme(dark);
  font-family: 'Montserrat';
  text-transform: uppercase;
  font-weight: 900;
  @media (max-width: 1000px) {
    font-size: 50px;
  }

  span {
    color: theme(sky);
  }
}

img {
  width: 250px;
  max-width: 40vw;
}

.slideshow {
  width: 100%;
  height: 100%;
}

.hero {
  position: absolute;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: opacity 2s;
  filter: contrast(0.1) grayscale(1) brightness(1.8);
}
</style>
