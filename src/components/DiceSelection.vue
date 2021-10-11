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
import { FaceType } from '@/models/DiceModel';
import DiceFace from '@/components/DiceFace.vue';

@Options({
  props: {
    color: Array,
  },
  data() {
    return {
      FaceType,
    };
  },
  computed: {},
  methods: {
    addFace(diceName: string) {
      this.$emit('add-face', diceName);
    },
  },
  emits: ['add-face'],
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
  margin-top: -350px;
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
  cursor: pointer;
}
</style>
