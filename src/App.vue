<script>
import topBar from './components/topBar.vue'
import sideMenu from './components/sideMenu.vue'
export default {
  data(){
    return{
        test:'home'
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
  <router-view style="position: relative;left: 100px;" />
</template>




