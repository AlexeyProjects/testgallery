export const state = () => ({});

export const actions = {
  async fetchPhotos({ commit }) {
    return await this.$axios.$get(`${this.$axios.defaults.baseURL}example.json`)
  },
};