<template>
  <div class="home">
    <div class="rectangle">
      <img class="dog" src="https://github.com/nusaibah1/projectImages/blob/main/images2/pets2-removebg-preview.png?raw=true" alt="dogs" width="400"
      height="400">

      <p class="heading">Pet Co</p>
      <p class="heading2">Pet Store</p>
      <br><br>
      <p class="heading3"> Number 1 trusted Pet Store</p>
      <button class="btn">Shop now</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeView'
}
</script>
<style scoped>
   .home{
    background-color: #0000 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
  } 

.rectangle {
  display: flex;
  /* justify-content: center; */
  width: 80rem;
  height: 35rem;
  background-color: #FEFAE0; 
  margin-top: 11%;
}

.dog{
  margin: 0 auto 0 0;
  margin-top: 5%;
}

.heading{
  font-family: Spicy Rice;
  font: 50px;
  font-weight: 800;
  font-size: 55px;
  text-align: center;
  position: absolute; 
  top: 50%; 
  left: 60%; 
  transform: translate(-50%, -50%); 
}

.heading2{
  font-family: Spicy Rice;
  font: 50px;
  font-weight: 600;
  font-size: 28px;
  text-align: center;
  position: absolute; 
  top: 55%; 
  left: 60%; 
  transform: translate(-50%, -50%); 
  padding-top: 15px;
}

.heading3{
  font-family: Spicy Rice;
  font: 45px;
  font-weight: 550;
  font-size: 19px;
  text-align: center;
  position: absolute; 
  top: 65%; 
  left: 60%; 
  transform: translate(-50%, -50%); 
  padding-top: 15px;
}

.btn{
  width: 90px;
  height: 35px; 
  background: #E9EDC9; 
  border-radius: 50px;
  text-align: center;
  position: absolute; 
  top: 75%; 
  left: 60%; 
  transform: translate(-50%, -50%); 
  font-size: small;
  font-weight: bold;
  

}
</style>
