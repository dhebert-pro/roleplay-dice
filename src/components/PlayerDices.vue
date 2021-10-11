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
import { DiceModel, getColorFromDice } from '@/models/Dice';

@Options({
  props: {
    dices: Array,
    isRolling: Boolean,
  },
  computed: {
    cssVars() {
      return {
        '--opacity': this.isRolling ? 0.8 : 1,
      };
    },
  },
  emits: ['roll'],
  methods: {
    getColorFromDice(dice: DiceModel) {
      return getColorFromDice(dice);
    },
    rollDices() {
      this.$emit('roll');
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
}
.dice {
  flex: 1;
  display: flex;
  flex: 0 0 80px;
  height: 80px;
  margin: 0 10px;
  opacity: var(--opacity);
}
</style>
