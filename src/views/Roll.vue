<template>
  <div>
    <h1>Lancer les dés</h1>
    <div v-show="dices?.length">
      <player-dices :dices="dices" :isRolling="isRolling" />
      <dices :dices="dices" />
    </div>
    <p class="warning" v-show="!dices || !dices.length">
      Aucun dé n'a été trouvé
    </p>
    <input type="button" value="Ajouter un dé" @click="showAddDice" />
    <add-dice :diceCount="dices?.length || 0" v-if="newDice" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import AddDice from '@/components/AddDice.vue';
import Dices from '@/components/Dices.vue';
import PlayerDices from '@/components/PlayerDices.vue';
import { ADD_NEW_DICE_ACTION } from '@/store/player/actionTypes';
import { DICES, IS_ROLLING, NEW_DICE } from '@/store/player/getterTypes';
import { PLAYER_MODULE_NAME } from '@/store/player/store';

@Options({
  data() {
    return {};
  },
  computed: {
    dices() {
      return this.$store.getters[`${PLAYER_MODULE_NAME}/${DICES}`]('Nathan');
    },
    newDice() {
      return this.$store.getters[`${PLAYER_MODULE_NAME}/${NEW_DICE}`]('Nathan');
    },
    isRolling() {
      return this.$store.getters[`${PLAYER_MODULE_NAME}/${IS_ROLLING}`](
        'Nathan',
      );
    },
  },
  watch: {},
  methods: {
    showAddDice() {
      this.$store.dispatch(`${PLAYER_MODULE_NAME}/${ADD_NEW_DICE_ACTION}`, {
        playerName: 'Nathan',
        diceCount: this.dices?.length || 0,
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
