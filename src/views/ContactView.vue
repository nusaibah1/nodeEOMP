<template>
  <div class="body">
    <div :style="{
        backgroundImage: `url('https://github.com/nusaibah1/projectImages/blob/main/images2/Untitled_design__2_-removebg.png?raw=true')`,
        backgroundSize: 'cover',
      }"
    ></div>
    <p class="about9">Contact Us</p>
      <div class="container">
        <div class="row">
            
            <div class="col-lg-6">
                <form class="form" action="https://submit-form.com/p43cP2sz9" style="max-width: 400px; margin-left: 10%; margin-top: 5%;" >
      <label for="name" style="display: block; margin-bottom: 8px; font-weight: bold">Name</label>

      <input type="text" id="name" name="name" placeholder="Name" required="" style=" width: 100%; padding: 8px; margin-bottom: 16px; border: 1px solid; border-radius: 4px;"/>

      <label for="email" style="display: block; margin-bottom: 8px; font-weight: bold; ;">Email</label>
      <input type="email" id="email" name="email" placeholder="Email" required="" style=" width: 100%; padding: 8px; margin-bottom: 16px; border: 1px solid; border-radius: 4px; "/>

      <label for="message" style="display: block; margin-bottom: 8px; font-weight: bold">Message</label>
      <textarea id="message" name="message" placeholder="Message" required="" style=" width: 100%; padding: 8px; height: 100px; margin-bottom: 16px; border: 1px solid; border-radius: 4px;"></textarea>

      <button type="submit" style=" width: 100%; padding: 10px; background-color: #E9EDC9; color: black; border: none; border-radius: 4px; font-size: 16px; font-weight: bold;">
        Send</button>
    </form>
            </div>
<div class="col-lg-6">
                <img class="doggy" src="https://github.com/nusaibah1/projectImages/blob/main/images2/images-removebg-preview.png?raw=true">
                <br><br><br><br><br><br><br>
   <img class="logos" src="https://github.com/nusaibah1/projectImages/blob/main/images2/face%201.png?raw=true" alt="facebook" width="20px" height="20px"  > 
   <img class="logos" src="https://github.com/nusaibah1/projectImages/blob/main/images2/insta%201.png?raw=true" alt="instagram" width="20px" height="20px">
   <img class="logos" src="https://github.com/nusaibah1/projectImages/blob/main/images2/twitter%201.png?raw=true" alt="twitter" width="20px" height="20px">
            </div>
        </div>
      </div>
  
  </div>
</template>
<script>
export default {};
</script>
<style>
/* .body{
        background-color: black;
    } */
.about9 {
  font-family: Spicy Rice;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-top: 10%;
}
.doggy{
    justify-content: end;
}
.form{
    margin-bottom: 100%;
}
label, input, textarea {
  text-align: left;
}
/* .logos{
    margin-bottom: 100%;
} */
</style>
