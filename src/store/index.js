import Vue from "vue";
import Vuex from "vuex";
import api from "../utils/api";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },
  },
  mutations: {
    SET_USER(state, data) {
      state.userInfo = data;
    },
  },
  actions: {
    register({ commit }, payload) {
      return api.register(payload).then((response) => {
        response.data.email = payload.email;
        commit("SET_USER", response.data);
        router.push({ name: "home" });
      });
    },
    login({ commit }, payload) {
      return api.login(payload).then((response) => {
        response.data.email = payload.email;
        commit("SET_USER", response.data);
        router.push({ name: "home" });
      });
    },
  },
  modules: {},
});
