<template>
  <div class="container" v-for="(face, index) in dice.faces" :key="index">
    <new-dice-face
      :position="index"
      :color="color"
      :value="face"
      :user="user"
    />
  </div>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { Options, Vue } from 'vue-class-component';

import NewDiceFace from '@/components/NewDiceFace.vue';
import { DiceModel, getColorFromDice } from '@/models/DiceModel';

@Options({
  props: {
    dice: Object as PropType<DiceModel>,
    user: String,
  },
  computed: {
    color() {
      return getColorFromDice(this.dice);
    },
  },
  methods: {},
  components: {
    NewDiceFace,
  },
})
export default class NewDice extends Vue {}
</script>
<style scoped>
.container {
  flex: 0 0 80px;
  height: 80px;
  margin: 0 10px;
  box-sizing: border-box;
}
</style>
