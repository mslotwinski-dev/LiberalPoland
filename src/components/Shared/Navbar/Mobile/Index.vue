<template>
  <div class="mobile">
    <Logo class="logo" />
    <Hamburger @click="setSideMenu(true)" />
    <div class="site-menu" v-if="showSideMenu == true">
      <ul>
        <div class="head">
          <Logo class="logo" />
          <div class="close" @click="setSideMenu(false)"></div>
        </div>
        <NavItem
          v-for="subpage in subpages"
          :key="subpage"
          :subpage="subpage"
          @click="setSideMenu(false)"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hamburger from './Hamburger.vue'
import NavItem from './NavItem.vue'
import Logo from '../Logo.vue'

export default defineComponent({
  components: {
    Hamburger,
    NavItem,
    Logo,
  },
  data() {
    return {
      showSideMenu: false,
      subpages: [
        {
          name: 'Program',
          link: 'program',
        },
      ],
    }
  },
  methods: {
    setSideMenu(val: boolean) {
      this.showSideMenu = val
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.mobile {
  background: $gradient;
}

.site-menu {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  padding-top: 20vh;
  height: 100vh;
  width: 100vw;
  background: #1c2123c0;
  backdrop-filter: blur(10px);
  transition: 0.3s transform ease-in-out;
  overflow-x: auto;
}

ul {
  margin: 10px;
  padding: 0;
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

.head {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

a {
  display: flex;
  height: 100%;
}

button:focus ~ .site-menu,
.site-menu:hover {
  transform: translateX(0);
  @media (max-width: 600px) {
    box-shadow: -15px 0 15px rgba(0, 0, 0, 0.385);
  }
}

.mobile {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.5s all;
  @media (min-width: 1000px) {
    display: none;
  }
  .logo {
    height: calc(0.7 * $height);
  }
}

.site-menu {
  margin: 10px auto 0 auto;
}

.close {
  width: 50px;
  height: 50px;

  &:before,
  &:after {
    content: '';
    width: 70%;
    height: 7.5px;
    background: #e3e3e3;
    position: absolute;
    display: block;
    top: 60%;
    left: 15%;
    border-radius: 40%;
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
}
</style>
