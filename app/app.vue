<script setup>
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './app.vue'
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

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

const cardListMultipleRows = [
  {
    title: 'Unusual accommodation in Scotland',
    description: 'Fancy staying somewhere a little different? From castles to lighthouses, teepees to brochs, there\'s lots of unusual choices.',
    image: './resources/images/edinburgh-castle.jpg',
    link: '#',
  },
  {
    title: 'Unusual accommodation in Scotland',
    description: 'Fancy staying somewhere a little different? From castles to lighthouses, teepees to brochs, there\'s lots of unusual choices.',
    image: './resources/images/edinburgh-castle.jpg',
    link: '#',
  },
  {
    title: 'Unusual accommodation in Scotland',
    description: 'Fancy staying somewhere a little different? From castles to lighthouses, teepees to brochs, there\'s lots of unusual choices.',
    image: './resources/images/edinburgh-castle.jpg',
    link: '#',
  },
  {
    title: 'Unusual accommodation in Scotland',
    description: 'Fancy staying somewhere a little different? From castles to lighthouses, teepees to brochs, there\'s lots of unusual choices.',
    image: './resources/images/edinburgh-castle.jpg',
    link: '#',
  },
]
</script>

<template>
  <div>
    <VsHeading headingStyle="heading-l">UI Developer technical challenge</VsHeading>
      <VsToggleButton Button icon="fa-regular fa-heart" label="Add to favourites" pressedIcon="fa-solid fa-heart"
        pressedLabel="Remove from favourites" variant="default" />
  </div>
  <!-- <img src="./resources/images/edinburgh-castle.jpg" /> -->

  <VsCard>
    <template #vs-card-header>
      <img src="./resources/images/edinburgh-castle.jpg"
        class="w-100 aspect-ratio-3-2 rounded-1 object-fit-cover img-zoom-on-hover" />
    </template>

    <template #vs-card-body>
      <VsHeading level="3" heading-style="heading-xs">
        <VsLink href="#" class="stretched-link" variant="secondary" no-visited-styles>
          Unusual accommodation in Scotland
        </VsLink>
      </VsHeading>

      <VsBody>
        <p class="truncate-2-lines">
          Fancy staying somewhere a little different? From castles to lighthouses, teepees to brochs, there's lots of
          unusual choices.
        </p>
      </VsBody>
    </template>
  </VsCard>



  <VsContainer class="mt-075 mt-lg-200 mb-200">
    <VsRow>
      <VsCol v-for="(card, index) in cardListMultipleRows" :key="'card-list-multiple-rows-' + index" cols="12" sm="6"
        lg="4" xl="3" class="mb-150">
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

</template>

<style>
img {
  max-width: 20rem;
}
</style>
