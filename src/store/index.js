import { createStore } from "vuex";

export default createStore({
  state: {
    isLoggedIn: false,
  },
  getters: {},
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    navigateTo({ state }, { router, href }) {
      console.log("navigateTo called with href:", href);
      if (router.currentRoute.path !== href && href) {
        router.push(href);
      }
    },

    handleLogout({ commit, dispatch }, router) {
      commit("logout");
      dispatch("navigateTo", { router, href: "/" });
    },
  },
});
