<template>
  <svg
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 60 60"
    version="1.1"
    id="svg8"
  >
    <g :fill="color" :stroke="color">
      <component :is="iconName" />
    </g>
  </svg>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Icons from '@/components/icons';

@Options({
  props: {
    color: {
      type: String,
      default: 'rgb(0,0,0)',
    },
    width: {
      type: String,
      default: 60,
    },
    height: {
      type: String,
      default: 60,
    },
    iconName: {
      type: String,
    },
  },
  components: Icons,
})
export default class IconBase extends Vue {}
</script>
