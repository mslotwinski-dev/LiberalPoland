<template>
  <router-link to="/" class="home">
    <img src="@/assets/icons/logo/logo1.png" />
    <div class="text">POLSKA LIBERALNA</div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

img {
  height: 85%;
  filter: invert(0.5) brightness(1.65);
  margin-right: 10px;
}

.home {
  display: flex;
  align-items: center;
  margin: 10px;
  font-size: calc(18px + 0.8vw);
  font-weight: 700;
  font-family: 'Montserrat';
  span {
    font-size: calc(220px + 0.85vw);
    color: theme(main);
  }
}

a {
  height: 90%;
  color: theme(light) !important;
}

.text {
  display: flex;
  align-items: center;
}
</style>
