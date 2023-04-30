<template>
  <div class="desktop">
    <Logo />
    <section>
      <router-link
        :key="subpage"
        v-for="subpage in subpages"
        :to="'/' + subpage.link"
        >{{ subpage.name }}</router-link
      >
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '../Logo.vue'

export default defineComponent({
  data() {
    return {
      subpages: [
        {
          name: 'Program',
          link: 'program',
        },
      ],
    }
  },
  components: {
    Logo,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.desktop {
  width: 100vw;
  max-width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  // border-radius: 10px;
  transition: 0.5s all;

  background: $gradient;
  box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.185);

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;

    background: #00000045;
  }
}

section {
  display: flex;
}

section a {
  display: block;
  height: 100%;
  color: theme(light);
  font-weight: 500;
  margin: 3px;
  padding: 7px;
  font-size: 22px;
  border-radius: 5px;
  transition: 0.2s all;
  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 5px;
    background: theme(light);
    z-index: 1;
    border-radius: 10px;
    opacity: 0.8;
    transition: all 0.2s;
  }
  &:hover:after {
    width: 100%;
  }
}

.desktop {
  @media (max-width: 1000px) {
    display: none;
  }
}
</style>
