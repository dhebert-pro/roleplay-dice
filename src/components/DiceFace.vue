<template>
  <div :style="cssVars" class="dice">
    <icon-base :iconName="iconName" :color="iconColor" width="50" height="50" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import IconBase from '@/components/icons/IconBase.vue';
import { FaceType } from '@/models/DiceModel';

@Options({
  props: {
    color: {
      type: Array,
      default() {
        return [255, 255, 255];
      },
    },
    value: FaceType,
  },
  computed: {
    iconColor() {
      const theoriticalColor =
        this.color[0] * 0.299 + this.color[1] * 0.587 + this.color[2] * 0.114;
      const constrastColor = theoriticalColor > 186 ? 0 : 255;
      return `rgb(${constrastColor}, ${constrastColor}, ${constrastColor})`;
    },
    iconName() {
      switch (this.value) {
        case FaceType.ATTACK:
          return 'icon-sword';
        case FaceType.HEAL:
          return 'icon-heart';
        case FaceType.DEFENSE:
          return 'icon-shield';
        case FaceType.MOVE:
          return 'icon-footprints';
        case FaceType.TRAP:
          return 'icon-trap';
        case FaceType.MAGIC:
          return 'icon-wand';
        case FaceType.DISTANCE:
          return 'icon-bow';
        case FaceType.POTION:
          return 'icon-potion';
        case FaceType.RANGE:
          return 'icon-spear';
        case FaceType.MECHANIC:
          return 'icon-gears';
        case FaceType.STEAL:
          return 'icon-mask';
        case FaceType.INTELLIGENCE:
          return 'icon-brain';
        case FaceType.PERCEPTION:
          return 'icon-eye';
        case FaceType.NATURE:
          return 'icon-leaf';
        case FaceType.CHARISMA:
          return 'icon-mouth';
        default:
          return undefined;
      }
    },
    cssVars() {
      return {
        '--bg-color': `rgb(${this.color[0]},${this.color[1]},${this.color[2]})`,
      };
    },
  },
  components: {
    IconBase,
  },
})
export default class DiceFace extends Vue {}
</script>
<style scoped>
.dice {
  height: 100%;
  width: 100%;
  background-color: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #bbb;
  user-select: none;
  box-sizing: border-box;
}
</style>
