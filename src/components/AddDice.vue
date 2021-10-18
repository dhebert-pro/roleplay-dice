<template>
  <h3>Ajouter un dé</h3>
  <div class="line">
    <form @submit.prevent="addDice" ref="diceForm">
      <input
        ref="diceName"
        type="text"
        class="diceName"
        :value="diceName"
        @input="setDiceName"
        placeholder="Nom de l'objet"
        required
      />
    </form>
    <div class="faces">
      <new-dice :dice="newDice" />
      <div class="actions">
        <icon-base
          iconName="icon-check"
          class="action"
          @click="submitOnButton"
          height="40"
          width="40"
          noColor
        />
        <icon-base
          iconName="icon-cross"
          class="action"
          @click="clearDice"
          height="40"
          width="40"
          noColor
        />
      </div>
    </div>
  </div>
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
import { NEW_DICE } from '@/store/player/types/getterTypes';

@Options({
  props: {
    diceCount: Number,
  },
  data() {
    return {};
  },
  computed: {
    diceName() {
      return this.$store.getters[`${PLAYER_MODULE_NAME}/${NEW_DICE}`]('Nathan')
        .label;
    },
    newDice() {
      return this.$store.getters[`${PLAYER_MODULE_NAME}/${NEW_DICE}`]('Nathan');
    },
  },
  methods: {
    submitOnButton() {
      this.$refs.diceForm.submit();
    },
    setDiceName(event: any) {
      this.$store.dispatch(
        `${PLAYER_MODULE_NAME}/${CHANGE_NEW_DICE_NAME_ACTION}`,
        {
          playerName: 'Nathan',
          diceName: event?.target?.value,
        },
      );
    },
    addDice() {
      console.log('Add DICE');
      this.$store.dispatch(`${PLAYER_MODULE_NAME}/${ADD_DICE_ACTION}`, {
        playerName: 'Nathan',
        dice: this.newDice,
      });
      this.clearDice();
    },
    clearDice() {
      this.$store.dispatch(`${PLAYER_MODULE_NAME}/${CLEAR_NEW_DICE_ACTION}`, {
        playerName: 'Nathan',
      });
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

.actions {
  margin-left: 20px;

  &:hover > *:not(:hover) {
    opacity: 0.5;
  }
}
</style>
