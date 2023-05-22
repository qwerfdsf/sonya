export default {
  async login({ state, commit }, router) {
    commit('SET_DATA', { key: 'isAuth', value: true })
    await router.push({ name: 'Main' })
  }
};
