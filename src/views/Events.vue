<template>
  <div>
    <h1>Evènements</h1>
    <h3>Evènement court</h3>
    <div class="container">
      <dice-face
        class="dice"
        @click="generateEvent"
        :value="FaceType.UNKNOWN"
      />
      <span class="event">Ceci est un évènement court</span>
    </div>
    <h3>Evènement long</h3>
    <div class="container">
      <dice-face
        class="dice"
        @click="generateEvent"
        :value="FaceType.UNKNOWN"
      />
      <span class="event">Ceci est un évènement long</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import DiceFace from '@/components/DiceFace.vue';
import { FaceType } from '@/models/DiceModel';

@Options({
  props: {},
  data() {
    return {
      FaceType,
    };
  },
  computed: {},
  watch: {},
  methods: {
    generateEvent() {
      console.log('Event generated');
    },
  },
  components: {
    DiceFace,
  },
})
export default class Events extends Vue {}
</script>
<style scoped>
.dice {
  flex: 0 0 80px;
  width: 80px;
  height: 80px;
  cursor: pointer;
  box-sizing: border-box;
}
.container {
  display: flex;
  align-items: center;
  gap: 30px;
}
.event {
  margin-left: 30px;
}
</style>
