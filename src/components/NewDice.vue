<template>
  <div class="container" v-for="(face, index) in dice.faces" :key="index">
    <new-dice-face
      @add-face="addFace($event, index)"
      :color="color"
      :value="face"
    />
  </div>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { Options, Vue } from 'vue-class-component';
import NewDiceFace from '@/components/NewDiceFace.vue';
import { DiceModel, FaceType, getColorFromDice } from '@/models/DiceModel';

@Options({
  props: {
    dice: Object as PropType<DiceModel>,
  },
  computed: {
    color() {
      return getColorFromDice(this.dice);
    },
  },
  methods: {
    addFace(diceName: FaceType, position: number) {
      this.$emit('switch-face', diceName, position);
    },
  },
  emits: ['switch-face'],
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
}
</style>
