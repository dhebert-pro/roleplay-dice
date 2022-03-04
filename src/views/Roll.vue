<template>
  <div>
    <h1>{{ firstName }}, tu peux lancer les dés</h1>
    <div v-show="dices?.length">
      <player-dices :dices="dices" :isRolling="isRolling" />
    </div>
    <add-dice-button />
    <transition name="fade">
      <div v-if="newDice">
        <add-dice :diceCount="dices?.length || 0" />
      </div>
    </transition>
    <div v-show="dices?.length">
      <dices :dices="dices" />
    </div>
    <p class="warning" v-show="!dices || !dices.length">
      Aucun dé n'a été trouvé
    </p>
    <save-button />
    <load-button />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import AddDice from '@/components/AddDice.vue';
import AddDiceButton from '@/components/AddDiceButton.vue';
import Dices from '@/components/Dices.vue';
import LoadButton from '@/components/LoadButton.vue';
import PlayerDices from '@/components/PlayerDices.vue';
import SaveButton from '@/components/SaveButton.vue';
import { UserModel, getUserById } from '@/models/UserModel';
import { PLAYER_MODULE_NAME } from '@/store/player/store';
import { SET_CURRENT_PLAYER_ACTION } from '@/store/player/types/actionTypes';
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
      const user: UserModel | undefined = getUserById(this.user);
      if (user) {
        return user.name;
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
  watch: {
    user(user: string) {
      this.$store.dispatch(
        `${PLAYER_MODULE_NAME}/${SET_CURRENT_PLAYER_ACTION}`,
        {
          currentPlayer: user,
        },
      );
    },
  },
  methods: {},
  mounted() {
    this.$store.dispatch(`${PLAYER_MODULE_NAME}/${SET_CURRENT_PLAYER_ACTION}`, {
      currentPlayer: this.user,
    });
  },
  components: {
    Dices,
    PlayerDices,
    AddDice,
    AddDiceButton,
    SaveButton,
    LoadButton,
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
