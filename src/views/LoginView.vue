<template>
  <div class="page login">
    <div class="login-wrapper">
      <span class="login-title">Login</span>
      <div class="login-form">
        <input type="text" v-model="model.email" placeholder="E-mail" />
        <input
          type="password"
          v-model="model.password"
          placeholder="Password"
        />
        <button @click="submit()">Log in</button>
        <div class="errors" v-if="formErrors.length > 0">
          <span v-for="(error, index) in formErrors" :key="index">
            {{ error.msg }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      formErrors: [],
      model: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    ...mapActions({
      login: "login",
    }),

    submit() {
      this.login(this.model).catch((error) => {
        this.formErrors = error.response.data.errors;
      });
    },
  },
};
</script>
