<template>
  <div class="the-contacts">
    <div class="header">{{ title }}</div>
    <div class="github">
      <UIIcon class="icon" :src="CONSTANTS.GITHUB_URL" size="48px" />
      <nuxt-link class="link" to="https://github.com/zakharovda95">GitHub</nuxt-link>
    </div>
    <div class="vk">
      <UIIcon class="icon" :src="CONSTANTS.VK_URL" size="48px" />
      <nuxt-link class="link" to="https://vk.com/id625689222">VK.com</nuxt-link>
    </div>
    <div class="telegram">
      <UIIcon :src="CONSTANTS.TELEGRAM_URL" size="40px" />
      <UIText class="text">@zakharovda95</UIText>
    </div>
    <div class="gmail">
      <UIIcon :src="CONSTANTS.GMAIL_URL" size="40px" />
      <UIText class="text">zakharovda95@gmail.com</UIText>
    </div>
  </div>
</template>

<script setup lang="ts">
import UIIcon from '~/components/UI/UIIcon.vue';
import UIText from '~/components/UI/UIText.vue';

import { CONSTANTS } from '~/helpers/enums/constants.enum';

import { useMainStore } from '~/stores/main.store';

import { computed, Ref } from 'vue';

const mainStore = useMainStore();

const title: Ref<string> = computed(() => {
  if (mainStore.lang === 'rus') {
    return 'Мои Контакты:';
  } else {
    return 'My Contacts:';
  }
});
</script>

<style scoped lang="scss">
@import '../../../assets/css/constants';
@import '../../../assets/css/hoverable.css';

@media (max-width: 800px) {
  .the-contacts {
    display: flex;
    flex-direction: column;

    .header {
      color: $WHITE;
      font-size: 1.2rem;
    }

    .github,
    .vk,
    .telegram,
    .gmail {
      display: flex;
      align-items: center;

      .link,
      .text {
        font-size: 1.2rem;
        text-decoration: none;
        color: $WHITE;
        margin-left: 10px;
        margin-top: 10px;
      }
    }

    .icon {
      margin-left: -5px;
    }
  }
}

@media (min-width: 801px) and (max-width: 1399px) {
  .the-contacts {
    display: flex;
    flex-direction: column;

    .header {
      color: $WHITE;
      font-size: 1.4rem;
    }

    .github,
    .vk,
    .telegram,
    .gmail {
      display: flex;
      align-items: center;

      .link,
      .text {
        font-size: 1.5rem;
        text-decoration: none;
        color: $WHITE;
        margin-left: 10px;
        margin-top: 10px;
      }
    }

    .icon {
      margin-left: -5px;
    }
  }
}

@media (min-width: 1400px) {
  .the-contacts {
    display: flex;
    flex-direction: column;

    .github,
    .vk,
    .telegram,
    .gmail {
      display: flex;
      align-items: center;

      .link,
      .text {
        padding: 5px;
        font-size: 1.2rem;
        text-decoration: none;
        color: $BLACK;
        margin-left: 10px;
        margin-top: 10px;
      }
    }

    .icon {
      margin-left: -5px;
    }
  }
} ;
</style>
