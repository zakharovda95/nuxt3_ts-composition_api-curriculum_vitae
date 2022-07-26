<template>
  <div>
    <UILoading v-if="mainStore.isLoading" />
    <div v-else class="project-page">
      <div class="header">
        <UIText size="2.2rem" class="title">{{ projectData.title }}</UIText>
      </div>
      <div class="carousel-container">
        <TheCarousel class="carousel" :slides="projectData.images" />
      </div>
      <div class="links">
        <NuxtLink
          v-if="projectData.links.github"
          target="_blank"
          class="link"
          :to="projectData.links.github"
        >
          GIT HUB
        </NuxtLink>
        <NuxtLink
          v-if="projectData.links.site"
          target="_blank"
          class="link"
          :to="projectData.links.site"
        >
          DEMO VIEW
        </NuxtLink>
      </div>
      <div class="description" v-if="projectData.description">
        <SectionContainer
          :content="projectData.description"
          :title="mainStore.lang === 'rus' ? 'Описание' : 'Description'"
        />
      </div>
      <div class="stack" v-if="projectData.stack">
        <SectionContainer
          :content="projectData.stack"
          :title="mainStore.lang === 'rus' ? 'Стек' : 'Stack'"
        />
      </div>
      <div class="statistic" v-if="projectData.statistic">
        <SectionContainer
          :content="projectData.statistic"
          :title="mainStore.lang === 'rus' ? 'Статистика' : 'Statistic'"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheCarousel from '~/components/pages/code-examples/TheCarousel.vue';
import UIText from '~/components/UI/UIText.vue';
import SectionContainer from '~/components/pages/code-examples/SectionContainer.vue';
import UILoading from '~/components/UI/UILoading.vue';

import { useCodeExamplesPageStore } from '~/stores/code-examples-page.store';
import { useMainStore } from '~/stores/main.store';

import { CodeExamplesProjectType } from '~/helpers/types/content.types';

import { definePageMeta } from '#imports';
import { useRoute } from 'vue-router';
import { computed, Ref, watch } from 'vue';

definePageMeta({
  layout: 'section',
});

const projectPageStore = useCodeExamplesPageStore();
const mainStore = useMainStore();

const route = useRoute();

const lang: Ref<string> = computed(() => mainStore.lang);

watch(
  lang,
  () => {
    projectPageStore.getProjectData(String(route.params.id), lang.value);
  },
  { deep: true, immediate: true },
);

const projectData: Ref<CodeExamplesProjectType> = computed(() => projectPageStore.projectData);
</script>

<style scoped lang="scss">
@import '../assets/css/_constants.scss';

@media (max-width: 800px) {
  .project-page {
    width: 100%;
    background: $DARK_BLUE;

    .header {
      display: flex;
      justify-content: center;
      width: 100%;

      .title {
        font-family: Nunito-ExtraBold, sans-serif;
        font-size: 1.8rem;
        margin-top: 12px;
      }

      margin-bottom: 12px;
    }

    .carousel-container {
      margin-bottom: 24px;

      .carousel {
        width: 95vw;
        margin: 0 auto;
      }
    }

    .links {
      display: flex;
      justify-content: space-around;
      width: 90vw;
      margin: 0 auto;

      .link {
        display: flex;
        color: whitesmoke;
        text-decoration: underline;
        font-family: Nunito-ExtraBold, sans-serif;
        font-size: 1.2rem;
      }
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .project-page {
    width: 100%;
    background: $DARK_BLUE;

    .header {
      display: flex;
      justify-content: center;
      width: 100%;

      .title {
        margin-top: 24px;
        font-family: Nunito-ExtraBold, sans-serif;
      }

      margin-bottom: 24px;
    }

    .carousel-container {
      margin-bottom: 24px;

      .carousel {
        width: 90vw;
        margin: 0 auto;
      }
    }

    .links {
      display: flex;
      justify-content: space-around;
      width: 60vw;
      margin: 0 auto;

      .link {
        display: flex;
        color: whitesmoke;
        text-decoration: underline;
        font-family: Nunito-ExtraBold, sans-serif;
        font-size: 1.5rem;
      }
    }
  }
}

@media (min-width: 1400px) {
  .project-page {
    width: 100%;
    background: $DARK_BLUE;

    .header {
      display: flex;
      justify-content: center;
      width: 100%;
      padding-top: 24px;
      margin-bottom: 24px;

      .title {
        font-family: Nunito-ExtraBold, sans-serif;
      }
    }

    .carousel-container {
      margin-bottom: 24px;

      .carousel {
        width: 80vw;
        margin: 0 auto;
      }
    }

    .links {
      display: flex;
      justify-content: space-around;
      width: 30vw;
      margin: 0 auto;

      .link {
        display: flex;
        color: whitesmoke;
        text-decoration: underline;
        font-family: Nunito-ExtraBold, sans-serif;
        font-size: 1.5rem;
      }
    }
  }
}
</style>
