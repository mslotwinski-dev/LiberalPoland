<template>
  <li>
    <router-link
      :to="'/' + subpage.link"
      :class="{ login: subpage.link === 'login' }"
    >
      <span
        :style="{
          backgroundImage:
            'url(' +
            require('@/assets/icons/navbar/' + subpage.link + '.svg') +
            ')',
        }"
      ></span>
      {{ subpage.name }}
    </router-link>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    subpage: Object as () => {
      text: string
      link: string
      image: string
    },
  },
  data() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

li {
  margin-top: 10px;
  padding-left: 20px;
  border-radius: 5px;
  font-size: 28px;
  flex-basis: 100%;
  height: 55px;
  display: flex;
  text-transform: uppercase;
}

a {
  display: flex;
  padding: 10px;
  text-decoration: none;
  align-items: center;
  height: 100%;
  width: 100%;
  font-weight: 500;
  color: theme(light);
}

span {
  padding: 28px;
  margin-right: 15px;
  border-radius: 50%;
  background-size: 85%;
  background-position: center;
  background-repeat: no-repeat;
}

.login {
  background: #81e6ff50;
  margin: 10px 10px;
  height: 50px;
  border-radius: 10px;
  font-size: 90%;
  span {
    padding: 20px;
  }
}
</style>
