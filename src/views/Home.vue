<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <home-content msg="Bienvenue dans une nouvelle aventure" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import HomeContent from '@/components/HomeContent.vue';

@Options({
  components: {
    HomeContent,
  },
})
export default class Home extends Vue {}
</script>
