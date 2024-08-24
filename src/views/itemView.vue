<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Product Details</h2>
        </div>
        <div class="row justify-content-center" v-if="product">
            <Card  class="card-column card-margin">
                <template #cardHeader>
                    <img :src="product.prodURL" loading="lazy" class="img-fluid" :alt="product.prodName">
                </template>
                <template #cardBody>
                    <h5 class="card-title bold">{{ product.prodName }}</h5>
                    <p class="words">
                        {{ product.prodDescription }}
                    </p>
                    <p class="words"><span class="text-success fw-bold">Amount</span>: R{{ product.amount }}</p>
                </template>
            </Card>
        </div>
        <div v-else>
            <Spinner/>
        </div>
    </div>
</template>
<script setup>

import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
const product = computed( () => store.state.product)

onMounted(() => {
    store.dispatch('fetchProduct', route.params.id)
})

</script>
<style scoped>

.card-column {
    margin: 20px;
    padding: 20px;
    border:  solid #ae7b56;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 5%;
}

.card-margin {
    margin-bottom: 20px;
}

.card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
}

.card-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #adb095;
}

.words {
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: bold;
}

.text-success {
    color: #ae7b56 !important;
}

.bold {
    font-weight: bold;
}
</style>