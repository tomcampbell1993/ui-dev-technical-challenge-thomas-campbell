import { defineStore } from 'pinia'

export const usefavorites = defineStore('favorites', {
  state: () => ({
    /** @type {{ title: string, description: string, image: string, link: string }[]} */
    favorites: [],
  }),
  getters: {
    getFavorites: (state) => state.favorites,
  },
  actions: {
    toggleFavorite(favorite) {
      const existingFavorite = this.favorites.find(fav => fav.title === favorite.title);
      if (existingFavorite) {
        this.removeFavorite(favorite);
      } else {
        this.addFavorite(favorite);
      }
    },
    addFavorite(favorite) {
      this.favorites.push(favorite);
    },
    removeFavorite(favorite) {
      this.favorites = this.favorites.filter(fav => fav.title !== favorite.title);
    },
  },
})