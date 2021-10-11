<template>
  <h3>Ajouter un dé</h3>
  <div class="line">
    <input class="diceName" v-model="diceName" />
    <div class="faces">
      <new-dice @switch-face="switchFace" :dice="newDice" />
      <input type="button" value="Ajouter le dé" @click="addDice" />
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NewDice from '@/components/NewDice.vue';
import { FaceType } from '@/models/DiceModel';

@Options({
  props: {
    diceCount: Number,
  },
  data() {
    return {
      diceName: '',
    };
  },
  computed: {
    newDice() {
      return this.$store.getters.newDiceFromPlayer('Nathan');
    },
  },
  methods: {
    addDice() {
      this.newDice.label = this.diceName;
      this.$emit('add-dice', this.newDice);
      this.$store.dispatch('clearNewDice', {
        playerName: 'Nathan',
      });
    },
    switchFace(diceName: FaceType, position: number) {
      this.newDice.faces[position] = diceName;
    },
  },
  emits: ['add-dice'],
  components: {
    NewDice,
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
}
.faces {
  flex: 1;
  display: flex;
  align-items: center;
}
</style>
