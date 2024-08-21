<template>
  
  <div id="navbar">
    <NavBarComp/>
    <router-view/>
    <FooterComp/>
  </div>



</template>
<script>
import FooterComp from './components/FooterComp.vue';
import NavBarComp from './components/NavBarComp.vue'

export default {
name: 'App' ,
components:{
  NavBarComp,
  FooterComp
}
}
</script>
<style>

.navbar{
background-color: #FEFAE0; 
 }  
</style>
