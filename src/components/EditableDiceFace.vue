<template>
  <div
    v-show="
      isEditingDiceFace &&
      position === editingDiceFacePosition &&
      diceId === editingDiceId
    "
  >
    <div class="modal" @click.prevent="closeModal">
      <div style="height: 100%"></div>
    </div>
    <dice-selection :color="color" :position="position" :diceId="diceId" />
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
  SET_EDITING_DICE_FACE_ACTION,
  SET_EDITING_DICE_FACE_POSITION_ACTION,
  SET_EDITING_DICE_ID_ACTION,
} from '@/store/player/types/actionTypes';
import {
  CURRENT_PLAYER,
  EDITING_DICE_FACE_POSITION,
  EDITING_DICE_ID,
  IS_EDITING_DICE_FACE,
} from '@/store/player/types/getterTypes';

@Options({
  props: {
    color: Array,
    value: FaceType,
    position: Number,
    diceId: String,
  },
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.getters[`${PLAYER_MODULE_NAME}/${CURRENT_PLAYER}`]();
    },
    isEditingDiceFace() {
      return this.$store.getters[
        `${PLAYER_MODULE_NAME}/${IS_EDITING_DICE_FACE}`
      ](this.user);
    },
    editingDiceFacePosition() {
      return this.$store.getters[
        `${PLAYER_MODULE_NAME}/${EDITING_DICE_FACE_POSITION}`
      ](this.user);
    },
    editingDiceId() {
      return this.$store.getters[`${PLAYER_MODULE_NAME}/${EDITING_DICE_ID}`](
        this.user,
      );
    },
  },
  methods: {
    closeModal() {
      this.$store.dispatch(
        `${PLAYER_MODULE_NAME}/${SET_EDITING_DICE_FACE_ACTION}`,
        {
          playerName: this.user,
          isEditingDiceFace: false,
        },
      );
      this.$store.dispatch(
        `${PLAYER_MODULE_NAME}/${SET_EDITING_DICE_FACE_POSITION_ACTION}`,
        {
          playerName: this.user,
          editingDiceFacePosition: undefined,
        },
      );
      this.$store.dispatch(
        `${PLAYER_MODULE_NAME}/${SET_EDITING_DICE_ID_ACTION}`,
        {
          playerName: this.user,
          editingDiceId: undefined,
        },
      );
    },
    openModal() {
      this.$store.dispatch(
        `${PLAYER_MODULE_NAME}/${SET_EDITING_DICE_FACE_ACTION}`,
        {
          playerName: this.user,
          isEditingDiceFace: true,
        },
      );
      this.$store.dispatch(
        `${PLAYER_MODULE_NAME}/${SET_EDITING_DICE_FACE_POSITION_ACTION}`,
        {
          playerName: this.user,
          editingDiceFacePosition: this.position,
        },
      );
      this.$store.dispatch(
        `${PLAYER_MODULE_NAME}/${SET_EDITING_DICE_ID_ACTION}`,
        {
          playerName: this.user,
          editingDiceId: this.diceId,
        },
      );
    },
  },
  components: {
    DiceFace,
    DiceSelection,
  },
})
export default class EditableDiceFace extends Vue {}
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
