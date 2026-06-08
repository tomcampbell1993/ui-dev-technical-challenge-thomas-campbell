<script setup>
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './app.vue'
import { usefavorites } from './favorites.js'
import {
  VsHeading,
  VsContainer,
  VsRow,
  VsCol,
  VsCard,
  VsToggleButton,
  VsLink,
  VsBody,
} from '@visitscotland/component-library/components';
import "/resources/stylesheets/style.css"

// Not How I wanted to manage image imports
import imgEdinCastle from "/resources/images/edinburgh-castle.jpg"
import imgStirCastle from "/resources/images/stirling-castle.jpg"
import imgStaffa from "/resources/images/staffa.jpg"
import imgBrigODoon from "/resources/images/brig-o-doon.jpg"
import imgStorr from "/resources/images/storr.jpg"
import imgLochLomond from "/resources/images/loch-lomond.jpg"

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

const cardListMultipleRows = [
  {
    title: 'Edinburgh Castle',
    description: 'A castle in Edinburgh',
    image: imgEdinCastle,
    link: '#',
  },
  {
    title: 'Stirling Castle',
    description: 'A castle in Stirling',
    image: imgStirCastle,
    link: '#',
  },
  {
    title: 'Staffa',
    description: 'Very interesting island off coast of scotland',
    image: imgStaffa,
    link: '#',
  },
  {
    title: 'Brig o\' Doon',
    description: 'Provides somewhat reliable protection from witches',
    image: imgBrigODoon,
    link: '#',
  },
  {
    title: 'The old Man of Storr',
    description: 'Very nice looking rocks on the Isle of skye',
    image: imgStorr,
    link: '#',
  },
  {
    title: 'Loch Lomond',
    description: 'Traditional ending to scottish weddings',
    image: imgLochLomond,
    link: '#',
  },
]

const favoritesStore = usefavorites()

const favoriteList = computed(() => favoritesStore.favorites);

function toggleFavorite(card) {
  favoritesStore.toggleFavorite({
    title: card.title,
    description: card.description,
    image: card.image,
    link: card.link,
  })
}

</script>

<template>
  <div class="wrapper">
    <div>
      <VsHeading headingStyle="heading-l">UI Developer technical challenge Thomas Campbell</VsHeading>
    </div>

    <VsContainer class="mt-075 mt-lg-200 mb-200">
      <VsRow>
        <VsCol v-for="(card, index) in cardListMultipleRows" :key="'card-list-multiple-rows-' + index" cols="12" sm="6"
          lg="4" xl="3" class="mb-400">
          <VsToggleButton Button icon="fa-regular fa-heart" label="Add to favourites" pressedIcon="fa-solid fa-heart"
            pressedLabel="Remove from favourites" variant="default" @click="() => toggleFavorite(card)" />
          <VsCard card-style="outlined">
            <template #vs-card-header>
              <img v-if="card.image" :src="card.image"
                class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover" />
            </template>

            <template #vs-card-body>
              <div class="px-075">
                <VsHeading level="3" heading-style="heading-xs">
                  <VsLink :href="card.link" class="stretched-link" variant="secondary">
                    {{ card.title }}
                  </VsLink>
                </VsHeading>

                <VsBody class="mb-150">
                  <p class="truncate-2-lines">
                    {{ card.description }}
                  </p>
                </VsBody>
              </div>
            </template>
          </VsCard>
        </VsCol>
      </VsRow>
    </VsContainer>

    <VsHeading headingStyle="heading-m">Favourites</VsHeading>

    <VsContainer class="mt-075 mt-lg-200 mb-200">
      <VsRow>
        <VsCol v-for="(card, index) in favoriteList" :key="'card-list-multiple-rows-' + index" cols="12" sm="6" lg="4"
          xl="3" class="mb-150">
          <VsCard card-style="outlined">
            <template #vs-card-header>
              <img v-if="card.image" :src="card.image"
                class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover" />
            </template>

            <template #vs-card-body>
              <div class="px-075">
                <VsHeading level="3" heading-style="heading-xs">
                  <VsLink :href="card.link" class="stretched-link" variant="secondary">
                    {{ card.title }}
                  </VsLink>
                </VsHeading>

                <VsBody class="mb-150">
                  <p class="truncate-2-lines">
                    {{ card.description }}
                  </p>
                </VsBody>
              </div>
            </template>
          </VsCard>
        </VsCol>
      </VsRow>
    </VsContainer>
  </div>
</template>


<style>
img {
  max-width: 20rem;
}
</style>
