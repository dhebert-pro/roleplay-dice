<template>
  <div>
    <h1>Lancer les dés</h1>
    <div v-show="dices.length">
      <player-dices :dices="dices" @roll="rollDices" :isRolling="isRolling" />
      <dices :dices="dices" />
    </div>
    <p class="warning" v-show="!dices.length">Aucun dé n'a été trouvé</p>
    <input type="button" value="Ajouter un dé" @click="showAddDice" />
    <add-dice :diceCount="dices.length" @add-dice="addDice" v-if="hasNewDice" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Dices from '@/components/Dices.vue';
import PlayerDices from '@/components/PlayerDices.vue';
import AddDice from '@/components/AddDice.vue';
import { FaceType, DiceModel } from '@/models/Dice';

const initialDices: Array<DiceModel> = [
  {
    id: '0',
    label: 'Départ',
    faces: [
      FaceType.ATTACK,
      FaceType.DEFENSE,
      FaceType.MOVE,
      FaceType.BLANK,
      FaceType.BLANK,
      FaceType.BLANK,
    ],
  },
];

@Options({
  data() {
    return {
      dices: initialDices,
      rollIteration: 0,
      isRolling: false,
      totalIteration: Math.floor(Math.random() * 20) + 1,
      hasNewDice: false,
    };
  },
  watch: {
    isRolling(newVal) {
      if (newVal) {
        setTimeout(this.rollDicesOnce, 100);
      } else {
        this.rollIteration = 0;
        this.totalIteration = Math.floor(Math.random() * 20) + 1;
      }
    },
    rollIteration(newVal) {
      if (newVal < this.totalIteration && this.isRolling) {
        setTimeout(this.rollDicesOnce, 100);
      } else {
        this.isRolling = false;
      }
    },
  },
  methods: {
    addDice(dice: DiceModel) {
      this.dices.push(dice);
      this.hasNewDice = false;
    },
    rollDicesOnce() {
      this.dices = this.dices.map((dice: DiceModel) => ({
        ...dice,
        selectedFace: Math.floor(Math.random() * 6),
      }));
      this.rollIteration += 1;
    },
    rollDices() {
      this.isRolling = true;
    },
    showAddDice() {
      this.hasNewDice = true;
    },
  },
  components: {
    Dices,
    PlayerDices,
    AddDice,
  },
})
export default class Roll extends Vue {}
</script>
<style scoped>
.warning {
  color: #ff0000;
}
</style>
