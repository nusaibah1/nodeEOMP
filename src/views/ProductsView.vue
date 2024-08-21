<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Products</h2>
</div>
<div class="row gap-2 justify-content-center my-2" v-if="products">
            <Card v-for="product in products" :key="product.prodID">
                <template #cardHeader>
                    {{ product.productURL }}
                    <img :src="product.prodURL" loading="lazy" class="img-fluid" :alt="product.prodName">
                </template>
                <template #cardBody>
                    <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
                    <p class="lead"><span class="text-success fw-bold">R{{ product.amount }}</span></p>
                    <div class="button-wrapper d-md-flex d-block justify-content-between">
                        <router-link :to="{ name: 'product', params: { id: product.prodID } }">
                            <button class="btn btn-success">View</button>
                        </router-link>
                        <button class="btn btn-dark">Cart</button>
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
h2{
  font-family: "Modak", system-ui;
  font-weight: 400;
  font-style: normal;
}
</style>


