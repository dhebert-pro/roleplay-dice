<template>
  <h3>Dés disponibles</h3>
  <p>Liste des dés</p>
  <div>
    <div class="line" v-for="dice in dices" :key="dice.id">
      <div class="label">{{ dice.label }} :</div>
      <div class="faces"><Dice :dice="dice" /></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Dice from '@/components/Dice.vue';

@Options({
  props: {
    dices: Array,
  },
  components: {
    Dice,
  },
})
export default class Dices extends Vue {}
</script>
<style scoped lang="scss">
.line {
  display: flex;
  align-items: center;
  padding: 15px;

  &:not(:first-child) {
    border-top: 1px solid;
  }
}
.label {
  text-align: left;
  flex: 0 0 200px;
  font-weight: bold;
}
.faces {
  flex: 1;
  display: flex;
}
</style>
