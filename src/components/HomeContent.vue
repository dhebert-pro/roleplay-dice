<template>
  <h1>{{ msg }}</h1>
  <p>Ici, tu pourras gérer tous les dés de ton aventure de jeu de rôle.</p>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Dices from '@/components/Dices.vue';

@Options({
  props: {
    msg: String,
  },
  components: {
    Dices,
  },
})
export default class HomeContent extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
