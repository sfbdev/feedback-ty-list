<template>
  <div class="page register">
    <div class="register-wrapper">
      <span class="register-title">Register</span>
      <div class="register-form">
        <input type="text" v-model="model.email" placeholder="E-mail" />
        <input
          type="password"
          v-model="model.password"
          placeholder="Password"
        />
        <button @click="submit()">Sign in</button>
        <div class="errors" v-if="errors.length > 0">
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
      formErrors: null,
      model: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    ...mapActions({
      register: "register",
    }),

    submit() {
      this.register(this.model).catch((error) => {
        this.formErrors = error.response.data.errors;
      });
    },
  },
};
</script>
