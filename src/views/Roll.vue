<template>
  <div>
    <h1>Lancer les dés</h1>
    <div v-show="dices.length">
      <player-dices :dices="dices" @roll="rollDices" :isRolling="isRolling" />
      <dices :dices="dices" />
    </div>
    <p class="warning" v-show="!dices.length">Aucun dé n'a été trouvé</p>
    <input type="button" value="Ajouter un dé" @click="showAddDice" />
    <add-dice :diceCount="dices.length" @add-dice="addDice" v-if="newDice" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Dices from '@/components/Dices.vue';
import PlayerDices from '@/components/PlayerDices.vue';
import AddDice from '@/components/AddDice.vue';
import { DiceModel } from '@/models/DiceModel';

@Options({
  data() {
    return {
      rollIteration: 0,
      isRolling: false,
      totalIteration: Math.floor(Math.random() * 20) + 1,
    };
  },
  computed: {
    dices() {
      return this.$store.getters.dicesFromPlayer('Nathan');
    },
    newDice() {
      return this.$store.getters.newDiceFromPlayer('Nathan');
    },
  },
  watch: {
    isRolling(newIsRolling) {
      if (newIsRolling) {
        setTimeout(this.rollDicesOnce, 100);
      } else {
        this.rollIteration = 0;
        this.totalIteration = Math.floor(Math.random() * 20) + 1;
      }
    },
    rollIteration(newRollIteration) {
      if (newRollIteration < this.totalIteration && this.isRolling) {
        setTimeout(this.rollDicesOnce, 100);
      } else {
        this.isRolling = false;
      }
    },
  },
  methods: {
    addDice(dice: DiceModel) {
      this.$store.dispatch('addDice', {
        playerName: 'Nathan',
        dice,
      });
    },
    rollDicesOnce() {
      this.$store.dispatch('roll', {
        playerName: 'Nathan',
      });
      this.rollIteration += 1;
    },
    rollDices() {
      this.isRolling = true;
    },
    showAddDice() {
      this.$store.dispatch('addNewDice', {
        playerName: 'Nathan',
        diceCount: this.dices.length,
      });
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
