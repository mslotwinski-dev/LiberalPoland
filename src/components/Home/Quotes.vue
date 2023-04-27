<template>
  <div class="placeholder">
    <!-- :class="{ active: this.index == this.activeSlide }"  -->
    <div class="subtitle">
      Polska
      <div class="titles">
        <span v-html="`it's too late to die`" />
        <div class="container" :style="{ bottom: `-${i * 100}%` }">
          <div class="q" :key="quote" v-for="quote in q" v-html="quote" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      q: [
        this.shuffle([
          'Wolnego rynku',
          'Przedsiębiorcza',
          'Przyszłości',
          'Progresywna',
          'Nowoczesna',
          'Nauki i Postępu',
          'Technologii',
          'Innowacyjna',
          'Sprawiedliwości',
          'Regionalna',
          'Równości',
          'Tolerancji',
          'Świecka',
          'Empatii',
          'Zrozumienia',
          'Otwarta',
          'Niepodległa',
          'Wyzwolona',
          'Rozwinięta',
          'Bezpieczna',
          'Odpowiedzialna',
          'Wspólna',
        ]),
        ['Wolności'],
      ].flat(1),
      i: 0,
    }
  },
  methods: {
    changeSlide() {
      if (this.i < this.q.length - 1) {
        this.i++
      } else {
        this.i = 0
      }
    },
    shuffle(array: string[]) {
      let currentIndex = array.length,
        randomIndex

      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        ;[array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ]
      }

      return array
    },
  },
  mounted() {
    window.setInterval(() => {
      this.changeSlide()
    }, 3500)
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.placeholder {
  height: 90px;
  @media (max-width: 700px) {
    height: 75px;
  }
}

.subtitle {
  position: absolute;
  width: 100%;
  left: 0;
  // opacity: 0;
  transition: all 0.5s linear;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 35px;
  font-family: 'Montserrat';

  display: flex;
  justify-content: center;

  .titles {
    color: theme(main1) !important;
    margin-left: 15px;
    text-align: left;
    overflow: hidden;
    // background: red;

    span {
      opacity: 0;
    }
  }

  .container {
    position: absolute;
    bottom: 0;
    transition: 0.3s all;
  }

  @media (max-width: 1000px) {
    font-size: 30px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
}

// .active {
//   opacity: 1;
// }
</style>
