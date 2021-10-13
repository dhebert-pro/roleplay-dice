<template>
  <div v-show="isEditingNewDiceFace && position === editingNewDiceFacePosition">
    <div class="modal" @click.prevent="closeModal">
      <div style="height: 100%"></div>
    </div>
    <dice-selection :color="color" :position="position" />
  </div>
  <div :style="cssVars" class="dice" @click.prevent="openModal">
    <component :is="iconName" :color="iconColor" width="50" height="50" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import DiceSelection from '@/components/DiceSelection.vue';
import IconBow from '@/components/Icons/IconBow.vue';
import IconFootprints from '@/components/Icons/IconFootprints.vue';
import IconGears from '@/components/Icons/IconGears.vue';
import IconHeart from '@/components/Icons/IconHeart.vue';
import IconMask from '@/components/Icons/IconMask.vue';
import IconPotion from '@/components/Icons/IconPotion.vue';
import IconShield from '@/components/Icons/IconShield.vue';
import IconSpear from '@/components/Icons/IconSpear.vue';
import IconSword from '@/components/Icons/IconSword.vue';
import IconTrap from '@/components/Icons/IconTrap.vue';
import IconWand from '@/components/Icons/IconWand.vue';
import { FaceType } from '@/models/DiceModel';
import {
  SET_EDITING_NEW_DICE_FACE_ACTION,
  SET_EDITING_NEW_DICE_FACE_POSITION_ACTION,
} from '@/store/player/actionTypes';
import {
  EDITING_NEW_DICE_FACE_POSITION,
  IS_EDITING_NEW_DICE_FACE,
} from '@/store/player/getterTypes';
import { PLAYER_MODULE_NAME } from '@/store/player/store';

@Options({
  props: {
    color: Array,
    value: FaceType,
    position: Number,
  },
  data() {
    return {};
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
    isEditingNewDiceFace() {
      return this.$store.getters[
        `${PLAYER_MODULE_NAME}/${IS_EDITING_NEW_DICE_FACE}`
      ]('Nathan');
    },
    editingNewDiceFacePosition() {
      return this.$store.getters[
        `${PLAYER_MODULE_NAME}/${EDITING_NEW_DICE_FACE_POSITION}`
      ]('Nathan');
    },
  },
  methods: {
    closeModal() {
      this.$store.dispatch(
        `${PLAYER_MODULE_NAME}/${SET_EDITING_NEW_DICE_FACE_ACTION}`,
        {
          playerName: 'Nathan',
          isEditingNewDiceFace: false,
        },
      );
      this.$store.dispatch(
        `${PLAYER_MODULE_NAME}/${SET_EDITING_NEW_DICE_FACE_POSITION_ACTION}`,
        {
          playerName: 'Nathan',
          editingNewDiceFacePosition: undefined,
        },
      );
    },
    openModal() {
      this.$store.dispatch(
        `${PLAYER_MODULE_NAME}/${SET_EDITING_NEW_DICE_FACE_ACTION}`,
        {
          playerName: 'Nathan',
          isEditingNewDiceFace: true,
        },
      );
      this.$store.dispatch(
        `${PLAYER_MODULE_NAME}/${SET_EDITING_NEW_DICE_FACE_POSITION_ACTION}`,
        {
          playerName: 'Nathan',
          editingNewDiceFacePosition: this.position,
        },
      );
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
    DiceSelection,
  },
})
export default class NewDiceFace extends Vue {}
</script>
<style scoped>
.dice {
  height: 100%;
  background-color: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #bbb;
  cursor: pointer;
  user-select: none;
}
.modal {
  position: fixed;
  background-color: gray;
  opacity: 0.5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  user-select: none;
}
</style>
