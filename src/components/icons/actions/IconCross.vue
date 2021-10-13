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
    <g id="layer1" transform="translate(-43.858631,-94.835805)">
      <rect
        style="
          fill: #ffffff;
          stroke: #e01515;
          stroke-width: 5.39566;
          stroke-miterlimit: 4;
          stroke-dasharray: none;
          stroke-opacity: 1;
        "
        id="rect5639"
        width="3.3054318"
        height="70.755852"
        x="138.84555"
        y="0.66885042"
        transform="matrix(0.70711013,0.70710343,-0.70711013,0.70710343,0,0)"
      />
      <rect
        style="
          fill: #ffffff;
          stroke: #e01515;
          stroke-width: 5.39566;
          stroke-miterlimit: 4;
          stroke-dasharray: none;
          stroke-opacity: 1;
        "
        id="rect5639-9"
        width="3.3054318"
        height="70.755852"
        x="34.394054"
        y="-175.87617"
        transform="matrix(-0.70711013,0.70710343,-0.70711013,-0.70710343,0,0)"
      />
    </g>
  </svg>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    width: {
      type: String,
      default: 60,
    },
    height: {
      type: String,
      default: 60,
    },
  },
})
export default class IconCross extends Vue {}
</script>
