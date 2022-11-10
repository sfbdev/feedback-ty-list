<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    if (!this.userInfo) {
      this.$router.push({ name: "login" });
    }
  },
};
</script>
