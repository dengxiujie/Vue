<template>
  <div id="app"  v-loading.fullscreen.lock="fullscreenLoading">
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed:{
  ...mapState({
      fullscreenLoading:state=>state.app.fullscreenLoading
  }),
    },
    
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #484a4d;
  background:  #b6bbbb21; 
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px; 
  display:flex;
  flex-direction: column;
}
*{
  padding:0;
  margin:0;
}

</style>