<template>
  <div class="container" @click="loadGame">
    <icon-base width="60px" height="60px" icon-name="icon-load" />
  </div>
  <div class="tooltip">Charger</div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import IconBase from '@/components/icons/IconBase.vue';
import { PLAYER_MODULE_NAME } from '@/store/player/store';
import { LOAD_ACTION } from '@/store/player/types/actionTypes';

@Options({
  props: {},
  computed: {},
  methods: {
    loadGame() {
      if (window.confirm('Es-tu sûr?')) {
        this.$store.dispatch(`${PLAYER_MODULE_NAME}/${LOAD_ACTION}`, {
          playerName: this.user,
          dice: this.newDice,
        });
      }
    },
  },
  components: { IconBase },
  emits: [],
})
export default class __FileName extends Vue {}
</script>
<style lang="scss" scoped>
.container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  top: 170px;
  right: 20px;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  box-shadow: 5px 5px 5px #bbb;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  background-color: #ffffff;
  user-select: none;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.2);
  }

  &:hover + .tooltip {
    opacity: 100%;
    transform: translate(-50px);
  }
}
.tooltip {
  top: 201px;
  position: fixed;
  right: 100px;
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
  color: #ffffff;
  background-color: #000000;
  font-weight: bold;
  opacity: 100%;
  transition: transform 1s, opacity 1s;
  opacity: 0;
  z-index: 1;
  user-select: none;
}
</style>
