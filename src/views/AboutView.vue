<template>
  <div>
    <div
      :style="{
        backgroundImage: `url('https://github.com/nusaibah1/allImages/blob/main/images/newback.png?raw=true')`,
        backgroundSize: 'repeat',
      }"
    >
    <div class="circle">
      <img
        class="img2"
        src="https://github.com/nusaibah1/allImages/blob/main/images/29295293-removebg-preview.png?raw=true"
        alt="dogs2"
        width="370px"
        height="350px"
      />
    </div>
    <div class="head">
      <p class="about">About Us!</p>
    </div>
    <div class="rectangle3">
      <p class="about2">
        Welcome to Pet Co, your go-to shop for all your pet needs! From quality
        food and fun toys to cozy accessories, we’ve got everything to keep your
        pets happy and healthy. Shop with us today and treat your pets to the
        best!
      </p>
    </div>
    <div class="rectangle2">
      <p class="mission">Our Mission Statement</p>
      <p class="about4">
        At PetCo, our mission is to provide pet owners with the highest quality
        products while making a positive impact on the community. We are
        dedicated to enhancing the lives of pets and their owners through our
        carefully curated selection of pet essentials. Every season, we partner
        with charitable organizations<br />
        to donate a portion of our profits, ensuring that together, we can
        create a better world for all animals in need. Adding a focus on
        becoming a trusted member <br />of the community with customer benefits
        is a great idea.
      </p>
      <p class="mission2">Our Benefits:</p>
      <div class="about5">
        <h5 class="begin">1. Loyalty Program:</h5>
        Earn points with every purchase that can be redeemed for discounts, free
        products, or exclusive services.<br />

        <h5 class="begin">2. Exclusive Access:</h5>
        Be the first to know about new product launches, special promotions, and
        seasonal sales.<br />

        <h5 class="begin">3. Personalized Recommendations:</h5>
        Receive tailored advice and product suggestions based on your pet's
        needs and preferences.<br />

        <h5 class="begin">4. Community Engagement:</h5>
        Participate in members-only events, webinars with pet care experts, and
        volunteer opportunities with partner charities.<br />

        <h5 class="begin">5. Seasonal Givebacks:</h5>
        Enjoy the satisfaction of knowing a portion of your purchase contributes
        to charitable donations, with special acknowledgments <br />for repeat
        contributions.<br />

        <p class="mission2">Organizations:</p>

        <div class="container">
          <a href="https://capespca.co.za/donate/" target="blank">
            <img class="img2"
              src="https://github.com/nusaibah1/allImages/blob/main/images/spca-removebg-preview.png?raw=true"
              width="100px"
              height="100px"
          /></a>

          <a href="https://dogstrust.co.za/" target="blank"
            ><img class="img2"
              src="https://github.com/nusaibah1/allImages/blob/main/images/DogsTrustLogo-removebg-preview.png?raw=true"
              width="100px"
              height="100px"
          /></a>

          <a
            href="https://donate.four-paws.org.za/s/?_jtsuid=25481172415786470846202"
            target="blank"
          >
            <img class="img2"
              src="https://github.com/nusaibah1/allImages/blob/main/images/4paws-removebg-preview.png?raw=true"
              width="100px"
              height="100px"
          /></a>
        </div>
      </div>
    </div>
  </div>
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  name: "AboutView",
};
</script>
<style>
.circle {
  width: 475px;
  height: 435px;
  background: #fefae0;
  border-radius: 9999px;
  margin-top: 10%;
  margin-left: 7%;
}
.img2 {
  /* margin-left: 0%; */
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
  font-family: "Bungee", sans-serif;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 2%;
}

.rectangle3 {
  width: 294px;
  height: 175px;
  background: #fefae0;
  float: right;
  margin-top: -240px;
  margin-right: 16%;
}
.about2 {
  width: 291px;
  height: 210px;
  text-align: center;
  color: black;
  font-size: 16px;
  font-family: "Concert One", sans-serif;
  font-weight: 300;
  word-wrap: break-word;
  margin-top: 5%;
}
.rectangle2 {
  display: flex;
  flex-direction: column; /* Stack paragraphs vertically */
  width: 80rem;
  height: auto; /* Adjust height to fit content */
  background-color: #fefae0;
  margin-top: 11%;
  margin-left: 8%;
  padding: 2%; /* Add padding if needed for spacing */
}
.mission {
  font-family: "Bungee", sans-serif;
  font-weight: 800;
  font-size: 55px;
  text-align: center;
  margin-top: 2%; /* Adjusted margin */
}
.about4, .about5 {
  width: 100%;
  color: black;
  font-size: 19px;
  font-family: "Concert One", sans-serif;
  font-weight: 400;
  margin-top: 2%;
  margin-left: 2%;
  margin-right: 5%;
}

/* .about4 {
  width: 100%;
  height: 100%;
  color: black;
  font-size: 20px;
  font-family: Myanmar Khyay;
  font-weight: 400;
  margin-top: 20%;
  margin-left: 5%;
  margin-right: 5%;
} */
.mission2 {
  font-family: "Bungee", sans-serif;
  font-weight: 800;
  font-size: 55px;
  text-align: center;
  margin-top: 2%; /* Adjusted margin */
}
.begin {
  font-family: "Bungee", sans-serif;
  font-weight: bold;
  color: #adb095;
}
.container {
  text-align: center;
}

.img2 {
  margin: 3rem;
}
</style>
