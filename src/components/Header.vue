<template>
  <header class="header">
    <div class="header-content">
      <div class="user-info" v-if="userInfo">
        <div class="field">
          <span class="text">E-mail:</span>
          <span class="data">{{ userInfo.email }}</span>
        </div>
        <div class="field">
          <span class="text">ID:</span>
          <span class="data">{{ userInfo.clientId }}</span>
        </div>
      </div>
      <ul class="menu" v-else>
        <li>
          <router-link :to="{ name: 'login' }">Login</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'register' }">Register</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "TYHeader",
};
</script>
