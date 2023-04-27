<template>
  <div class="container">
    <header>
      <div class="rect" />
      <div class="slogan">Zasługujemy na wolność</div>
    </header>
    <div>
      <div class="break" />
    </div>
    <router-link to="/program">Poznaj program partii</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.break {
  margin-top: 20px;
  width: 100px;
  height: 5px;
  background: linear-gradient(45deg, theme(main1), theme(main2), theme(main3));
  display: inline-block;
}

.container {
  padding: 20px;
}
header {
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
  }
}

a {
  background: linear-gradient(45deg, theme(main1), theme(main2), theme(main3));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 27px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 10px;
  display: inline-block;
  &:after {
    content: '';
    width: 0%;
    height: 5px;
    position: absolute;
    bottom: -10px;
    left: 0;
    background: linear-gradient(
      45deg,
      theme(main3),
      theme(main1),
      theme(main2)
    );
    border-radius: 10px;
    transition: 0.2s all;
  }
  &:hover:after {
    width: 100%;
  }
}
</style>
