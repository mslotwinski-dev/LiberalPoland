<template>
  <div class="container">
    <div class="chapter" :key="chapter" v-for="chapter in chapters">
      <header v-html="chapter.title" />
      <div class="flex">
        <Icon
          :key="category"
          v-for="category in chapter.categories"
          :category="category"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from './Icon.vue'

export default defineComponent({
  data() {
    return {
      chapters: [
        {
          title: 'Przedsiębiorczość',
          categories: [
            {
              id: 'economy',
              name: 'Gospodarka',
            },
            {
              id: 'finances',
              name: 'Finanse',
            },
            {
              id: 'finances',
              name: 'Polityka Społeczna',
            },
            {
              id: 'finances',
              name: 'Transport',
            },
            {
              id: 'finances',
              name: 'Zdrowe Życie',
            },
            {
              id: 'finances',
              name: 'Klimat i Środowisko',
            },
            {
              id: 'finances',
              name: 'Edukacja i Technologia',
            },
            {
              id: 'finances',
              name: 'Rolnictwo',
            },
          ],
        },
        {
          title: 'Wolność',
          categories: [
            {
              id: 'finances',
              name: 'Prawdziwa Wolność',
            },
            {
              id: 'finances',
              name: 'Równe prawa',
            },

            {
              id: 'finances',
              name: 'Świeckie państwo',
            },
            {
              id: 'finances',
              name: 'Rodzina',
            },
            {
              id: 'finances',
              name: 'Państwo empatii',
            },
            {
              id: 'finances',
              name: 'Bezpieczeństwo wewnętrzne',
            },

            {
              id: 'finances',
              name: 'Tożsamość narodowa',
            },
            {
              id: 'finances',
              name: 'Kultura i sztuka',
            },
          ],
        },
        {
          title: 'Wspólnota',
          categories: [
            {
              id: 'finances',
              name: 'Ustrój Rzeczypospolitej',
            },
            {
              id: 'finances',
              name: 'Prawdziwa Demokracja',
            },
            {
              id: 'finances',
              name: 'Sprawne państwo',
            },
            {
              id: 'finances',
              name: 'Sprawiedliwość',
            },

            {
              id: 'finances',
              name: 'Obronność',
            },
            {
              id: 'finances',
              name: 'Polska Sercem europy',
            },
            {
              id: 'finances',
              name: 'cyfryzacja',
            },
            {
              id: 'finances',
              name: 'Rozwój regionalny',
            },
          ],
        },
      ],
    }
  },
  components: {
    Icon,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;

  .chapter {
    width: 350px;
    flex-grow: 1;
  }
  header {
    margin: 4px 10px;
    background: linear-gradient(
      45deg,
      theme(main1),
      theme(main2),
      theme(main3)
    );
    color: theme(light);
    // background-clip: text;
    // -webkit-text-fill-color: transparent;
    font-size: 25px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 10px;
    margin-bottom: 12px;
  }
}
</style>
