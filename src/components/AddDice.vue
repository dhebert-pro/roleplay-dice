<template>
  <h3>Ajouter un dé</h3>
  <form class="line" @submit.prevent="addDice" ref="diceForm">
    <input
      ref="diceName"
      type="text"
      class="diceName"
      :value="diceName"
      placeholder="Nom de l'objet"
      required
      @input="changeDiceName"
    />
    <div class="faces">
      <new-dice :dice="newDice" />
      <div class="actions">
        <button type="submit" class="action button">
          <icon-base iconName="icon-check" height="40" width="40" />
        </button>
        <icon-base
          iconName="icon-cross"
          class="action"
          @click="clearDice"
          height="40"
          width="40"
        />
      </div>
    </div>
  </form>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import IconBase from '@/components/icons/IconBase.vue';
import NewDice from '@/components/NewDice.vue';
import { PLAYER_MODULE_NAME } from '@/store/player/store';
import {
  ADD_DICE_ACTION,
  CHANGE_NEW_DICE_NAME_ACTION,
  CLEAR_NEW_DICE_ACTION,
} from '@/store/player/types/actionTypes';
import { CURRENT_PLAYER, NEW_DICE } from '@/store/player/types/getterTypes';

@Options({
  props: {},
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.getters[`${PLAYER_MODULE_NAME}/${CURRENT_PLAYER}`]();
    },
    diceName() {
      return this.$store.getters[`${PLAYER_MODULE_NAME}/${NEW_DICE}`](this.user)
        ?.label;
    },
    newDice() {
      return this.$store.getters[`${PLAYER_MODULE_NAME}/${NEW_DICE}`](
        this.user,
      );
    },
  },
  methods: {
    submitOnButton() {
      console.log('submitOnForm');
      this.$refs.diceForm.submit();
    },
    addDice() {
      console.log('Add DICE');
      this.$store.dispatch(`${PLAYER_MODULE_NAME}/${ADD_DICE_ACTION}`, {
        playerName: this.user,
        dice: this.newDice,
      });
      this.clearDice();
    },
    clearDice() {
      this.$store.dispatch(`${PLAYER_MODULE_NAME}/${CLEAR_NEW_DICE_ACTION}`, {
        playerName: this.user,
      });
    },
    changeDiceName(e: Event) {
      const diceName = (e.target as HTMLInputElement).value;
      this.$store.dispatch(
        `${PLAYER_MODULE_NAME}/${CHANGE_NEW_DICE_NAME_ACTION}`,
        {
          playerName: this.user,
          diceName,
        },
      );
    },
  },
  mounted() {
    this.$refs.diceName.focus();
  },
  components: {
    NewDice,
    IconBase,
  },
})
export default class AddDice extends Vue {}
</script>
<style scoped lang="scss">
.line {
  display: flex;
  align-items: center;
  padding: 15px;
}
.diceName {
  text-align: left;
  flex: 0 0 200px;
  box-sizing: border-box;
}
.faces {
  flex: 1;
  display: flex;
  align-items: center;
}
.action {
  cursor: pointer;
  user-select: none;
  margin-left: 20px;

  &:hover {
    transform: scale(1.4);
  }
}

.button {
  border: 0;
  background: none;
}

.actions {
  margin-left: 20px;

  &:hover > *:not(:hover) {
    opacity: 0.5;
  }
}
</style>
