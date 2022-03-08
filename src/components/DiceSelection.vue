<template>
  <div class="diceSelection">
    <div class="container">
      <div class="line">
        <dice-face
          class="dice"
          @click="addFace(FaceType.ATTACK)"
          :color="color"
          :value="FaceType.ATTACK"
        />
        <dice-face
          class="dice"
          @click="addFace(FaceType.DEFENSE)"
          :color="color"
          :value="FaceType.DEFENSE"
        />
        <dice-face
          class="dice"
          @click="addFace(FaceType.TRAP)"
          :color="color"
          :value="FaceType.TRAP"
        />
        <dice-face
          class="dice"
          @click="addFace(FaceType.MAGIC)"
          :color="color"
          :value="FaceType.MAGIC"
        />
      </div>
      <div class="line">
        <dice-face
          class="dice"
          @click="addFace(FaceType.RANGE)"
          :color="color"
          :value="FaceType.RANGE"
        />
        <dice-face
          class="dice"
          @click="addFace(FaceType.DISTANCE)"
          :color="color"
          :value="FaceType.DISTANCE"
        />
        <dice-face
          class="dice"
          @click="addFace(FaceType.MECHANIC)"
          :color="color"
          :value="FaceType.MECHANIC"
        />
        <dice-face
          class="dice"
          @click="addFace(FaceType.HEAL)"
          :color="color"
          :value="FaceType.HEAL"
        />
      </div>
      <div class="line">
        <dice-face
          class="dice"
          @click="addFace(FaceType.INTELLIGENCE)"
          :color="color"
          :value="FaceType.INTELLIGENCE"
        />
        <dice-face
          class="dice"
          @click="addFace(FaceType.PERCEPTION)"
          :color="color"
          :value="FaceType.PERCEPTION"
        />
        <dice-face
          class="dice"
          @click="addFace(FaceType.NATURE)"
          :color="color"
          :value="FaceType.NATURE"
        />
        <dice-face
          class="dice"
          @click="addFace(FaceType.CHARISMA)"
          :color="color"
          :value="FaceType.CHARISMA"
        />
      </div>
      <div class="line">
        <dice-face
          class="dice"
          @click="addFace(FaceType.STEAL)"
          :color="color"
          :value="FaceType.STEAL"
        />
        <dice-face
          class="dice"
          @click="addFace(FaceType.POTION)"
          :color="color"
          :value="FaceType.POTION"
        />
        <dice-face
          class="dice"
          @click="addFace(FaceType.MOVE)"
          :color="color"
          :value="FaceType.MOVE"
        />
        <dice-face
          class="dice"
          @click="addFace(FaceType.BLANK)"
          :color="color"
          :value="FaceType.BLANK"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import DiceFace from '@/components/DiceFace.vue';
import { FaceType } from '@/models/DiceModel';
import { PLAYER_MODULE_NAME } from '@/store/player/store';
import {
  SET_EDITING_DICE_FACE_ACTION,
  SET_EDITING_DICE_FACE_POSITION_ACTION,
  SET_EDITING_DICE_ID_ACTION,
  SWITCH_DICE_FACE_ACTION,
} from '@/store/player/types/actionTypes';
import { CURRENT_PLAYER } from '@/store/player/types/getterTypes';

@Options({
  props: {
    color: Array,
    position: Number,
    diceId: String,
  },
  data() {
    return {
      FaceType,
    };
  },
  computed: {
    user() {
      return this.$store.getters[`${PLAYER_MODULE_NAME}/${CURRENT_PLAYER}`]();
    },
  },
  methods: {
    addFace(faceName: FaceType) {
      this.$store.dispatch(`${PLAYER_MODULE_NAME}/${SWITCH_DICE_FACE_ACTION}`, {
        playerName: this.user,
        position: this.position,
        diceId: this.diceId,
        faceName,
      });
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
  },
  components: {
    DiceFace,
  },
})
export default class DiceSelection extends Vue {}
</script>
<style scoped>
.diceSelection {
  position: absolute;
  border: 1px solid;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px;
  margin-top: 100px;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.line {
  display: flex;
  gap: 15px;
  flex: 1;
}
.dice {
  flex: 0 0 80px;
  width: 80px;
  height: 80px;
  cursor: pointer;
  box-sizing: border-box;
}
</style>
