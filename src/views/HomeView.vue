<template>
  <div class="home">
    <div class="rectangle">
      <img class="dog" src="https://github.com/nusaibah1/allImages/blob/main/images/pets2-removebg-preview.png?raw=true" alt="dogs" width="420"
      height="420">
      <div class="blob">
      <p class="heading">Pet Co</p>
    
      <p class="heading2">Pet Store</p>
      <br><br>
      <p class="heading3"> Number 1 trusted Pet Store</p>
      <button class="btn">Shop now</button>
      </div>
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
  /* margin-left: 15%; */
}

.heading{
  font-family: "Bungee", sans-serif;
  font: 40px;
  font-weight: 800;
  font-size: 40px;
  text-align: center;
  position: absolute; 
  top: 38%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  color: #adb095;
}

.heading2{
  font-family: "Concert One", sans-serif;
  font: 50px;
  font-weight: 600;
  font-size: 23px;
  text-align: center;
  position: absolute; 
  top: 48%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  padding-top: 15px;
  color: #adb095;
}

.heading3{
  font-family: "Concert One", sans-serif;
  font: 45px;
  font-weight: 560;
  font-size: 13px;
  text-align: center;
  position: absolute; 
  top: 57%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  padding-top: 15px;
  color:#ae7b56;
}

.btn{
  width: 90px;
  height: 35px; 
  background: #E9EDC9; 
  border-radius: 50px;
  text-align: center;
  position: absolute; 
  top: 75%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  font-size: small;
  font-weight: bold;
  

}

.blob{
  width:320px;
  height:320px;
  margin:10% auto;
  position:relative;

}
.blob::before{
  border:2px solid #fff;
  border-radius: 58% 42% 48% 53% / 47% 60% 36% 53%;
  width:100%;
  height:100%;
  content:'';
  position:absolute;
  left:0; top:0;
  animation: rotate 16s linear infinite;
}

.blob::after{
  border:2px solid #fff;
  border-radius: 48% 42% 48% 53% / 47% 60% 36% 53%;
  width:100%;
  height:100%;
  background: rgba(244, 166, 166, 0.1);
  content:'';
  position:absolute;
  left:0; top:0;
  animation: rotate 6s linear infinite;
}
@keyframes rotate{
  0%{
    transform:rotate(0deg);
    border-color:#E9EDC9;
  }
  50%{
    border-color:#adb095;
  }
  100%{
    transform:rotate(360deg);
    border-color:#E9EDC9;
  }
}

</style>
