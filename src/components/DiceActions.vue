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

@Options({
  props: {
    dice: Object as PropType<DiceModel>,
  },
  methods: {
    removeDice() {
      console.log('Dice removed', this.dice.label);
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
