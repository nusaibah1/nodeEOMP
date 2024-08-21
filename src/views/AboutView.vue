<template>
  <div>
    <div
      :style="{
        backgroundImage: `url('https://github.com/nusaibah1/projectImages/blob/main/images2/pet_trail-removebg-preview.png?raw=true')`,
        backgroundSize: 'cover',
      }"
    >
      <div class="circle">
        <img
          class="img2"
          src="https://github.com/nusaibah1/projectImages/blob/main/images2/7830895-removebg-preview2.png?raw=true"
          alt="dogs2"
          width="340"
          height="340"
        />
      </div>
      <div class="head">
        <p class="about">About Us!</p>
      </div>
      <div class="rectangle3">
        <p class="about2">
          Welcome to Pet Co, your go-to shop for all your pet needs! From
          quality food and fun toys to cozy accessories, we’ve got everything to
          keep your pets happy and healthy. Shop with us today and treat your
          pets to the best!
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AboutView",
};
</script>
<style>
.circle {
  width: 460px;
  height: 435px;
  background: #fefae0;
  border-radius: 9999px;
  margin-top: 10%;
  margin-left: 5%;
}
.img2 {
  margin-left: 10%;
  margin-top: 5%;
}
.head {
  width: 171px;
  height: 37px;
  background: #e9edc9;
  float: right;
  margin-top: -290px;
  margin-right: 20%;
}

.about {
  font-family: Spicy Rice;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.rectangle3 {
  width: 294px;
  height: 175px;
  background: #fefae0;
  float: right;
  margin-top: -240px;
  margin-right: 16%;
}
.about2{
  width: 291px; 
  height: 210px;
   text-align: center; 
   color: black; 
   font-size: 17px; 
   font-family: Myanmar Khyay; 
   font-weight: 300;
    word-wrap: break-word;
    margin-top: 5%;
}
</style>
