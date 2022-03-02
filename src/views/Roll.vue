<template>
  <div>
    <h1>{{ firstName }}, tu peux lancer les dés</h1>
    <div v-show="dices?.length">
      <player-dices :dices="dices" :isRolling="isRolling" :user="user" />
      <add-dice-button :user="user" />
      <transition name="fade">
        <div v-if="newDice">
          <add-dice :diceCount="dices?.length || 0" :user="user" />
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
import { UserModel, getUserById } from '@/models/UserModel';
import { PLAYER_MODULE_NAME } from '@/store/player/store';
import { DICES, IS_ROLLING, NEW_DICE } from '@/store/player/types/getterTypes';

@Options({
  props: {
    user: String,
  },
  data() {
    return {};
  },
  computed: {
    firstName() {
      const currentUser: UserModel | undefined = getUserById(this.user);
      if (currentUser) {
        return currentUser.name;
      }
      return '';
    },
    dices() {
      return this.$store.getters[`${PLAYER_MODULE_NAME}/${DICES}`](this.user);
    },
    newDice() {
      return this.$store.getters[`${PLAYER_MODULE_NAME}/${NEW_DICE}`](
        this.user,
      );
    },
    isRolling() {
      return this.$store.getters[`${PLAYER_MODULE_NAME}/${IS_ROLLING}`](
        this.user,
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
  opacity: 1;
  transition: transform 0.1s, opacity 0.1s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  transform: scaleY(0);
  opacity: 0;
}
</style>
