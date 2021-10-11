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
      <g id="layer1" transform="translate(-15.264596,-107.80653)">
        <rect
          style="stroke-width: 1.33589"
          id="rect6244"
          width="4.3761101"
          height="63.621677"
          x="127.46548"
          y="41.713661"
          transform="matrix(0.70520396,0.70900449,-0.70844756,0.70576346,0,0)"
        />
        <path
          style="
            fill: none;
            stroke-width: 0.8px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m
        60.373412,119.85229 c 2.342209,-1.59893 2.742239,-4.20887
        2.814927,-6.98922 4.075916,-1.04548 8.121328,-2.40346
        12.043597,-5.02305"
          id="path6246"
        />
        <path
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 0.0877949px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 63.423056,122.91632 c 1.898531,-2.16142 4.746665,-2.02717
        7.390065,-2.38784 0.682589,-4.52286 2.228187,-8.72526
        4.415673,-12.68932"
          id="path6248"
        />
        <path
          id="path6250"
          style="stroke-width: 0.674725"
          d="m
        74.997049,108.2199 -13.149601,13.09978 0.135824,0.13657 1.458871,1.46673
        0.311541,-0.31036 c 0.638495,-0.63608 1.591566,-1.15812 2.65438,-1.45388
        0.662082,-0.18424 1.625245,-0.33686 3.125334,-0.49517 l
        1.279723,-0.13509 0.05828,-0.37605 c 0.206826,-1.33785 0.7031,-3.40603
        1.201427,-5.00695 0.545727,-1.7532 1.477312,-4.01688 2.39699,-5.82412
        0.295886,-0.58143 0.527598,-1.06614 0.527236,-1.10146 z"
        />
        <ellipse
          style="stroke-width: 1.23693"
          id="path6256"
          cx="129.48523"
          cy="42.6269"
          rx="4.207798"
          ry="1.0909066"
          transform="matrix(0.70520396,0.70900449,-0.70844756,0.70576346,0,0)"
        />
        <ellipse
          style="stroke-width: 1.23693"
          id="ellipse6273"
          cx="129.48523"
          cy="44.154182"
          rx="4.207798"
          ry="1.0909066"
          transform="matrix(0.70520396,0.70900449,-0.70844756,0.70576346,0,0)"
        />
        <ellipse
          style="stroke-width: 1.23693"
          id="ellipse6275"
          cx="129.48523"
          cy="45.681465"
          rx="4.207798"
          ry="1.0909066"
          transform="matrix(0.70520396,0.70900449,-0.70844756,0.70576346,0,0)"
        />
      </g>
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
export default class IconSpear extends Vue {}
</script>
