<template>
  <h3>Ajouter un dé</h3>
  <div class="line">
    <input
      type="text"
      class="diceName"
      :value="diceName"
      @input="setDiceName"
      placeholder="Nom de l'objet"
    />
    <div class="faces">
      <new-dice :dice="newDice" />
      <div class="actions">
        <icon-check class="action" @click="addDice" height="40" width="40" />
        <icon-cross class="action" @click="clearDice" height="40" width="40" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import IconCheck from '@/components/icons/actions/IconCheck.vue';
import IconCross from '@/components/icons/actions/IconCross.vue';
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
  components: {
    NewDice,
    IconCheck,
    IconCross,
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
}
.actions {
  margin-left: 20px;
}
</style>
