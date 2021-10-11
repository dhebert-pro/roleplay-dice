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
    <g :fill="color">
      <g
        id="layer1"
        style="display: inline"
        transform="translate(-27.970097,-101.864)"
      >
        <ellipse
          id="path833"
          cx="32.715889"
          cy="157.18022"
          rx="4.7457919"
          ry="4.6837807"
        />
      </g>
      <g id="layer2" transform="translate(-27.970097,-101.864)">
        <rect
          id="rect836"
          width="6.0462713"
          height="15.34577"
          x="130.37741"
          y="67.5149"
          ry="0"
          transform="matrix(0.69621083,0.71783736,-0.70100407,0.71315727,0,0)"
        />
      </g>
      <g
        id="layer3"
        style="display: inline"
        transform="translate(-27.970097,-101.864)"
      >
        <path
          id="rect848"
          d="m 48.060178,141.57656 7.141871,7.16099 3.106969,9.09867 -13.240521,-13.27596 z"
        />
        <path
          id="rect848-6"
          d="m 48.510917,141.74333 -7.230683,-7.1553 -9.203378,-3.12879 13.405176,13.26542 z"
        />
      </g>
      <g
        id="layer4"
        style="display: inline"
        transform="translate(-27.970097,-101.864)"
      >
        <path
          id="rect918"
          d="m 78.822638,104.67945 6.037039,5.93863 -34.814143,34.47217 -6.037036,-5.93863 z"
        />
        <path
          id="rect922"
          d="m 87.970096,101.864 v 0 l -3.144679,8.78792 -6.037039,-5.93863 z"
        />
      </g>
      <g id="layer5" transform="translate(-27.970097,-101.864)" />
    </g>
  </svg>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    color: String,
    width: String,
    height: String,
  },
})
export default class IconSword extends Vue {}
</script>
