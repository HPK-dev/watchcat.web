<script setup>
import topBar from "./components/topBar.vue";
import sideMenu from "./components/sideMenu.vue";
import { ref, onMounted } from "vue";

// Data
const test = ref("home");

// Mounted
onMounted(() => {
  let isLogged = this.$cookies.get("user-logged");
  if (isLogged) {
    document.getElementById("loginStatus").innerHTML = "face";
  }
});
</script>

<template>
  <topBar />
  <sideMenu />
  <router-view style="position: relative; left: 100px; width: fit-content" />
</template>
