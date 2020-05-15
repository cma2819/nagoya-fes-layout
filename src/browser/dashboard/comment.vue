<template>
  <v-app>
    <v-container class="pa-0 ma-0">
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-text-field
            v-model="setupComment"
            filled
            label="コメント内容"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="auto">
          <v-btn
            color="success"
            @click="updateSetupComment"
          >
            適用
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
/* global nodecg */
import { Vue, Component, Emit } from 'vue-property-decorator';
import { SetupComment } from '../../nodecg/replicants';

@Component
export default class App extends Vue {
  setupComment: SetupComment = '';

  created(): void {
    nodecg.Replicant('setup-comment').on('change', (newVal) => {
      this.setupComment = newVal;
    });
  }

  @Emit()
  updateSetupComment(): void {
    nodecg.Replicant('setup-comment').value = this.setupComment;
  }
}
</script>