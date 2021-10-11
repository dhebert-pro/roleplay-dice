<template>
  <div :style="cssVars" class="dice">
    <component :is="iconName" :color="iconColor" width="50" height="50" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { FaceType } from '@/models/DiceModel';
import IconHeart from '@/components/Icons/IconHeart.vue';
import IconSword from '@/components/Icons/IconSword.vue';
import IconShield from '@/components/Icons/IconShield.vue';
import IconFootprints from '@/components/Icons/IconFootprints.vue';
import IconTrap from '@/components/Icons/IconTrap.vue';
import IconWand from '@/components/Icons/IconWand.vue';
import IconBow from '@/components/Icons/IconBow.vue';
import IconPotion from '@/components/Icons/IconPotion.vue';
import IconSpear from '@/components/Icons/IconSpear.vue';
import IconGears from '@/components/Icons/IconGears.vue';
import IconMask from '@/components/Icons/IconMask.vue';

@Options({
  props: {
    color: Array,
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
    IconHeart,
    IconSword,
    IconShield,
    IconFootprints,
    IconTrap,
    IconWand,
    IconBow,
    IconPotion,
    IconSpear,
    IconGears,
    IconMask,
  },
})
export default class DiceFace extends Vue {}
</script>
<style scoped>
.dice {
  height: 80px;
  width: 80px;
  background-color: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #bbb;
  user-select: none;
}
</style>
