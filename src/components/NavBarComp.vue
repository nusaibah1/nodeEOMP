<template>
    <nav>
        <div class="fixed-top">
          <header id="nav-colour" class="d-flex justify-content-between">
            <div style="width: 100%; height: 130px; background-color: #E9EDC9"
              class="d-flex justify-content-between">
              <a class="nav bar-brand justify-content-start" href="#"> <img class="logo" src="https://github.com/nusaibah1/projectImages/blob/main/images2/petCo-removebg-preview2.png?raw=true" alt="logo" width="150"
                  height="150"></a>
                <ul class=" nav nav-underline justify-content-end">
                  <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/products">Products</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/admin">Admin</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/itemView">Item View</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/contact">Contact</router-link>
                  </li>
      
                </ul>
            </div>
      
          </header>
      
        </div>
    </nav>
</template>
<script>
export default {
    name: 'NavBarComp',
};
</script>
<style>
.nav-link{
    color: #000000;
    font-weight:600;
}

.logo{
    /* padding-bottom: 60px; */
    align-content: center;
}
    
</style>