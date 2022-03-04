<template>
  <div class="actions">
    <icon-base
      iconName="icon-cross"
      class="action"
      @click="removeDice"
      height="40"
      width="40"
    />
  </div>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { Options, Vue } from 'vue-class-component';

import IconBase from '@/components/icons/IconBase.vue';
import { DiceModel } from '@/models/DiceModel';
import { PLAYER_MODULE_NAME } from '@/store/player/store';
import { REMOVE_DICE_ACTION } from '@/store/player/types/actionTypes';
import { CURRENT_PLAYER } from '@/store/player/types/getterTypes';

@Options({
  props: {
    dice: Object as PropType<DiceModel>,
  },
  computed: {
    user() {
      return this.$store.getters[`${PLAYER_MODULE_NAME}/${CURRENT_PLAYER}`]();
    },
  },
  methods: {
    removeDice() {
      this.$store.dispatch(`${PLAYER_MODULE_NAME}/${REMOVE_DICE_ACTION}`, {
        playerName: this.user,
        diceId: this.dice.id,
      });
    },
  },
  components: {
    IconBase,
  },
})
export default class DiceActions extends Vue {}
</script>
<style scoped lang="scss">
.action {
  cursor: pointer;
  user-select: none;
  margin-left: 20px;

  &:hover {
    transform: scale(1.4);
  }
}
</style>
