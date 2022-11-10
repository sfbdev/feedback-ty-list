import Vue from "vue";

const api = {
  register(payload) {
    return Vue.axios.post("/register", payload);
  },
  login(payload) {
    return Vue.axios.post("/login", payload);
  },
};

export default api;
