<template>
  <div class="container" v-for="(face, index) in dice?.faces" :key="index">
    <editable-dice-face :position="index" :color="color" :value="face" />
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
  methods: {},
  components: {
    EditableDiceFace,
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
