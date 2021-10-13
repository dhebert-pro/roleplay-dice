<template>
  <div>
    <h1>Lancer les dés</h1>
    <div v-show="dices?.length">
      <player-dices :dices="dices" :isRolling="isRolling" />
      <add-dice-button />
      <transition name="fade">
        <div v-if="newDice">
          <add-dice :diceCount="dices?.length || 0" />
        </div>
      </transition>
      <dices :dices="dices" />
    </div>
    <p class="warning" v-show="!dices || !dices.length">
      Aucun dé n'a été trouvé
    </p>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import AddDice from '@/components/AddDice.vue';
import AddDiceButton from '@/components/AddDiceButton.vue';
import Dices from '@/components/Dices.vue';
import PlayerDices from '@/components/PlayerDices.vue';
import { PLAYER_MODULE_NAME } from '@/store/player/store';
import { DICES, IS_ROLLING, NEW_DICE } from '@/store/player/types/getterTypes';

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
  methods: {},
  components: {
    Dices,
    PlayerDices,
    AddDice,
    AddDiceButton,
  },
})
export default class Roll extends Vue {}
</script>
<style scoped>
.warning {
  color: #ff0000;
}
.fade-enter-active,
.fade-leave-active {
  transform: scaleY(1);
  transform-origin: top;
  opacity: 1;
  transition: transform 0.1s, opacity 0.1s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  transform: scaleY(0);
  transform-origin: top;
  opacity: 0;
}
</style>
