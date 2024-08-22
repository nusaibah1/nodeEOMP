<template>
    <div class="container">
    
            <h4 class="display-2">Products</h4>

<div  v-if="products" class="row products-div">
            <Card v-for="product in products" :key="product.prodID" class="card-column card-margin">
                <template #cardHeader>
                    {{ product.productURL }}
                    <img :src="product.prodURL" loading="lazy" class="img-fluid" :alt="product.prodName">
                </template>
                <template #cardBody>
                    <h5 class="card-title fw-bold pName" >{{ product.prodName }}</h5>
                    <p class="lead"><span class="text-success fw-bold pAmount">R{{ product.amount }}</span></p>
                    <div class="button-wrapper d-md-flex d-block justify-content-between">
                        <!-- <router-link :to="{ name: 'product', params: { id: product.prodID } }"> -->
                            <!-- <button class="btn btn-success">View</button>
                        </router-link> -->
                        <button class="btn">View</button>
                    </div>
                </template>
            </Card>
        </div>
        <div v-else>
            <Spinner />
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Spinner from '@/components/Spinner.vue'
import Card from '@/components/Card.vue'
const store = useStore()
const products = computed(
    () => store.state.products
)
onMounted(() => {
    store.dispatch('fetchProducts')
}) 
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Modak&display=swap');
h4,h5, p{
  font-family: "Bungee", sans-serif;
  font-weight: 400;
  font-style: normal;
  
}


.btn{
background-color: #E9EDC9 !important;
font-family: "Modak", system-ui;
display: flex;
justify-content: center;
align-items: center;
margin-left: 37%;
}
.display-2{
    margin-top: 15%;
    font-size: 40px;
    margin-bottom: 2%;
}
.container {
    max-width: 1000px; 
    margin: 40px auto; 
    }

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
  margin-bottom: 20px;
}
.card-column {
  flex: 0 0 30%;
  width: 33%;
  padding: 10px;
  margin: 5px; 
  border-radius: 10px; 
  box-shadow: 10px black;
}

.card-margin {
  margin-bottom: 0px;
}
.pName{
    font-size: 18px;
    /* color: yellow; */
    font-family: "Bungee", sans-serif;
}
.pAmount{
    font-family: "Concert One", sans-serif;
    color: #ec8786 !important;
}

.products-div img {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
}
</style>












