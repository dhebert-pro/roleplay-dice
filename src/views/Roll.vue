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
    return {};
  },
  computed: {
    dices() {
      return this.$store.getters.dicesFromPlayer('Nathan');
    },
    newDice() {
      return this.$store.getters.newDiceFromPlayer('Nathan');
    },
    isRolling() {
      return this.$store.getters.isRollingFromPlayer('Nathan');
    },
  },
  watch: {},
  methods: {
    addDice(dice: DiceModel) {
      this.$store.dispatch('addDice', {
        playerName: 'Nathan',
        dice,
      });
    },
    rollDices() {
      this.$store.dispatch('roll', {
        playerName: 'Nathan',
        nbIterations: 20,
        delay: 100,
      });
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
