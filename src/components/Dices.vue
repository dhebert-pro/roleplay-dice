<template>
  <h3>Dés disponibles</h3>
  <div>
    <div
      :class="['line', getActivationClass(dice)]"
      v-for="dice in sortedDices"
      :key="dice.id"
    >
      <div class="label">{{ dice.label }} :</div>
      <div class="faces"><dice :dice="dice" /></div>
      <div class="actions"><dice-actions :dice="dice" /></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Dice from '@/components/Dice.vue';
import DiceActions from '@/components/DiceActions.vue';
import { DiceModel } from '@/models/DiceModel';

@Options({
  props: {
    dices: Array,
  },
  computed: {
    sortedDices() {
      return this.dices.sort((dice1: DiceModel, dice2: DiceModel) => {
        if (dice2.active && !dice1.active) {
          return 1;
        }
        if (dice1.active && !dice2.active) {
          return -1;
        }
        if (dice1.label > dice2.label) {
          return 1;
        }
        if (dice2.label > dice1.label) {
          return -1;
        }
        return 0;
      });
    },
  },
  methods: {
    getActivationClass(dice: DiceModel) {
      return dice.active ? '' : 'disabled';
    },
  },
  components: {
    Dice,
    DiceActions,
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

  &.disabled {
    background-color: #bbb;
    opacity: 0.5;
  }
}
.label {
  text-align: left;
  flex: 0 0 200px;
  font-weight: bold;
  box-sizing: border-box;
}
.faces {
  flex: 0 0 600px;
  display: flex;
}
.actions {
  margin-left: 20px;

  &:hover > *:not(:hover) {
    opacity: 0.5;
  }
}
</style>
