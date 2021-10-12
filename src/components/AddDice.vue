<template>
  <h3>Ajouter un dé</h3>
  <div class="line">
    <input class="diceName" :value="diceName" @input="setDiceName" />
    <div class="faces">
      <new-dice :dice="newDice" />
      <input type="button" value="Ajouter le dé" @click="addDice" />
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NewDice from '@/components/NewDice.vue';

@Options({
  props: {
    diceCount: Number,
  },
  data() {
    return {};
  },
  computed: {
    diceName() {
      return this.$store.getters.newDiceFromPlayer('Nathan').label;
    },
    newDice() {
      return this.$store.getters.newDiceFromPlayer('Nathan');
    },
  },
  methods: {
    setDiceName(event: any) {
      this.$store.dispatch('changeNewDiceName', {
        playerName: 'Nathan',
        diceName: event?.target?.value,
      });
    },
    addDice() {
      this.$store.dispatch('addDice', {
        playerName: 'Nathan',
        dice: this.newDice,
      });
      this.clearDice();
    },
    clearDice() {
      this.$store.dispatch('clearNewDice', {
        playerName: 'Nathan',
      });
    },
  },
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
