<template>
  <div class="container" v-for="(face, index) in dice?.faces" :key="index">
    <editable-dice-face
      :diceId="dice.id"
      :position="index"
      :color="color"
      :value="face"
    />
  </div>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { Options, Vue } from 'vue-class-component';

import EditableDiceFace from '@/components/EditableDiceFace.vue';
import { DiceModel, getColorFromDice } from '@/models/DiceModel';

@Options({
  props: {
    dice: Object as PropType<DiceModel>,
  },
  computed: {
    color() {
      return getColorFromDice(this.dice);
    },
  },
  components: {
    EditableDiceFace,
  },
})
export default class Dice extends Vue {}
</script>
<style scoped>
.container {
  flex: 0 0 80px;
  height: 80px;
  margin: 0 10px;
  box-sizing: border-box;
}
</style>
