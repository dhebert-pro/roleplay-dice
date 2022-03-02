<template>
  <div @click.prevent="rollDices">
    <div class="line">
      <div :style="cssVars" class="dice" v-for="dice in dices" :key="dice.id">
        <dice-face
          :color="getColorFromDice(dice)"
          :value="dice.faces[dice.selectedFace ?? 0]"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import DiceFace from '@/components/DiceFace.vue';
import { DiceModel, getColorFromDice } from '@/models/DiceModel';
import { PLAYER_MODULE_NAME } from '@/store/player/store';
import { ROLL_ACTION } from '@/store/player/types/actionTypes';

@Options({
  props: {
    dices: Array,
    isRolling: Boolean,
    user: String,
  },
  computed: {
    cssVars() {
      return {
        '--opacity': this.isRolling ? 0.8 : 1,
      };
    },
  },
  methods: {
    getColorFromDice(dice: DiceModel) {
      return getColorFromDice(dice);
    },
    rollDices() {
      if (!this.isRolling) {
        this.$store.dispatch(`${PLAYER_MODULE_NAME}/${ROLL_ACTION}`, {
          playerName: this.user,
          nbIterations: 20,
          delay: 100,
        });
      }
    },
  },
  components: {
    DiceFace,
  },
})
export default class PlayerDices extends Vue {}
</script>
<style scoped lang="scss">
.line {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  cursor: pointer;
  user-select: none;
  flex-wrap: wrap;
  row-gap: 20px;
}
.dice {
  flex: 1;
  display: flex;
  flex: 0 0 80px;
  height: 80px;
  margin: 0 10px;
  opacity: var(--opacity);
  box-sizing: border-box;
}
</style>
