<template>
  <div class="project-list-page">
    <div class="wrapper">
      <ProjectListItem
        v-for="project in projects"
        :key="project.id"
        class="project"
        :project-data="project"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectListItem from '~/components/pages/code-examples/ProjectListItem.vue';

import { useCodeExamplesPageStore } from '~/stores/code-examples-page.store';

import { CodeExamplesProjectType } from '~/helpers/types/content.types';

import { definePageMeta } from '#imports';
import { computed, Ref } from 'vue';

definePageMeta({
  layout: 'section',
});

const codeExamplesPageStore = useCodeExamplesPageStore();

const projects: Ref<CodeExamplesProjectType[]> | Ref<null> = computed(() => {
  if (codeExamplesPageStore.data) {
    return codeExamplesPageStore.data;
  }
  return null;
});
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .project-list-page {
    width: 100%;
    min-height: calc(100vh - 100px);
    background: $DARK_BLUE;

    .wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 90%;
      margin: 0 auto;
      padding: 12px;

      .project {
        width: 500px;
        height: 400px;
      }
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .project-list-page {
    width: 100%;
    min-height: calc(100vh - 100px);
    background: $DARK_BLUE;

    .wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 80%;
      margin: 0 auto;
      padding: 12px;

      .project {
        width: 500px;
        height: 400px;
      }
    }
  }
}

@media (min-width: 1400px) {
  .project-list-page {
    width: 100%;
    min-height: calc(100vh - 100px);
    background: $DARK_BLUE;

    .wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 70%;
      margin: 0 auto;
      padding: 12px;

      .project {
        width: 500px;
        height: 400px;
      }
    }
  }
}
</style>
