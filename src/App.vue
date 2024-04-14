<script>
import topBar from './components/topBar.vue'
import sideMenu from './components/sideMenu.vue'
export default {
  data(){
    return{
        test:'home'
    }
  },
  mounted(){
    let isLogged = this.$cookies.get("user-logged");
    if(isLogged){
      document.getElementById("loginStatus").innerHTML = "face";
    }
  },
  components: {
    topBar,
    sideMenu,
  }
}
</script>

<template>
  <topBar />
  <sideMenu />
  <router-view style="position: relative;left: 100px;width: fit-content;" />
</template>




