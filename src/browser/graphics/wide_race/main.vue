<template>
  <multi-run-view-component
    :paddings="['16px', '64px']"
    :video-paths="[{x: 64, y: 160, width: 560, height: 560 * ( 9 / 16) }, {x: 656, y: 160, width: 560, height: 560 * ( 9 / 16) }]"
  ></multi-run-view-component>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import MultiRunViewComponent from '../views/MultiRunViewComponent.vue';

@Component({
  components: {
    MultiRunViewComponent
  }
})
export default class App extends Vue { }
</script>