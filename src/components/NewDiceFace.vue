<template>
  <div v-show="isEditingNewDiceFace && position === editingNewDiceFacePosition">
    <div class="modal" @click.prevent="closeModal">
      <div style="height: 100%"></div>
    </div>
    <dice-selection :color="color" :position="position" />
  </div>
  <dice-face
    class="dice"
    :color="color"
    :value="value"
    @click.prevent="openModal"
  />
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import DiceFace from '@/components/DiceFace.vue';
import DiceSelection from '@/components/DiceSelection.vue';
import { FaceType } from '@/models/DiceModel';
import { PLAYER_MODULE_NAME } from '@/store/player/store';
import {
  SET_EDITING_NEW_DICE_FACE_ACTION,
  SET_EDITING_NEW_DICE_FACE_POSITION_ACTION,
} from '@/store/player/types/actionTypes';
import {
  CURRENT_PLAYER,
  EDITING_NEW_DICE_FACE_POSITION,
  IS_EDITING_NEW_DICE_FACE,
} from '@/store/player/types/getterTypes';

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
    user() {
      return this.$store.getters[`${PLAYER_MODULE_NAME}/${CURRENT_PLAYER}`]();
    },
    isEditingNewDiceFace() {
      return this.$store.getters[
        `${PLAYER_MODULE_NAME}/${IS_EDITING_NEW_DICE_FACE}`
      ](this.user);
    },
    editingNewDiceFacePosition() {
      return this.$store.getters[
        `${PLAYER_MODULE_NAME}/${EDITING_NEW_DICE_FACE_POSITION}`
      ](this.user);
    },
  },
  methods: {
    closeModal() {
      this.$store.dispatch(
        `${PLAYER_MODULE_NAME}/${SET_EDITING_NEW_DICE_FACE_ACTION}`,
        {
          playerName: this.user,
          isEditingNewDiceFace: false,
        },
      );
      this.$store.dispatch(
        `${PLAYER_MODULE_NAME}/${SET_EDITING_NEW_DICE_FACE_POSITION_ACTION}`,
        {
          playerName: this.user,
          editingNewDiceFacePosition: undefined,
        },
      );
    },
    openModal() {
      this.$store.dispatch(
        `${PLAYER_MODULE_NAME}/${SET_EDITING_NEW_DICE_FACE_ACTION}`,
        {
          playerName: this.user,
          isEditingNewDiceFace: true,
        },
      );
      this.$store.dispatch(
        `${PLAYER_MODULE_NAME}/${SET_EDITING_NEW_DICE_FACE_POSITION_ACTION}`,
        {
          playerName: this.user,
          editingNewDiceFacePosition: this.position,
        },
      );
    },
  },
  components: {
    DiceFace,
    DiceSelection,
  },
})
export default class NewDiceFace extends Vue {}
</script>
<style scoped>
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
.dice {
  cursor: pointer;
}
</style>
