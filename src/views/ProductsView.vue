  <template>
    <div class="container">
      <h4 class="display-2">Products</h4>
  
      
      <div class="Search-Filter">

        <!-- Search  -->
        <input type="text" v-model="searchQuery" placeholder="Search products..." />
  
        <!-- filter for category -->
        <select v-model="selectedCategory">
          <option value="">All Categories</option>
          <option value="Food">Food</option>
          <option value="Hybrid Accesories">Accessories</option>
          <option v-for="Category in Categories" :key="Category" :value="Category.id">
            {{ Category.name }}
          </option>
        </select>
  
        <!-- Sorting products -->
        <select v-model="sortOrder">
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
  
      <!-- Products -->
      <div v-if="filteredAndSortedProducts.length" class="row products-div">
        <Card
          v-for="product in filteredAndSortedProducts"
          :key="product.prodID"
          class="card-column card-margin"
        >
          <template #cardHeader>
            <img
              :src="product.prodURL"
              loading="lazy"
              class="img-fluid"
              :alt="product.prodName"
            />
          </template>
          <template #cardBody>
            <h5 class="card-title fw-bold pName">{{ product.prodName }}</h5>
            <p class="lead">
              <span class="text-success fw-bold pAmount">R{{ product.amount }}</span>
            </p>
            <router-link :to="{ name: 'item', params: { id: product.prodID }}">
              <button class="btn">View</button>
            </router-link>
          </template>
        </Card>
      </div>
  
      <!-- Spinner -->
      <div v-else>
        <Spinner />
      </div>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { ref, computed, onMounted } from 'vue';
  import Spinner from '@/components/Spinner.vue';
  import Card from '@/components/Card.vue';
  

  const store = useStore();
  const products = computed(() => store.state.products || []);
  const categories = ref([]);
  
  const searchQuery = ref('');
  const sortOrder = ref('asc');
  const selectedCategory = ref('');
  
  onMounted(() => {
    store.dispatch('fetchProducts');
    fetchCategories();
  });
  
  // fetching categories from API
  async function fetchCategories() {
    try {
      const response = await fetch('https://nodeeomp-sf1q.onrender.com/categories');
      if (!response.ok) throw new Error('Failed to fetch categories');
      categories.value = await response.json();
    } catch (error) {
      console.error('Error fetching categories:', error);
      categories.value = []; 
    }
  }
  
  
  const filteredAndSortedProducts = computed(() => {
    // filter products and category
    let filtered = products.value.filter((product) =>
      product.prodName.toLowerCase().includes(searchQuery.value.toLowerCase()) &&
      (selectedCategory.value === '' || product.categoryId === selectedCategory.value)
    );
  
    // sort products by price
    return filtered.sort((a, b) => 
      sortOrder.value === 'asc' ? a.amount - b.amount : b.amount - a.amount
    );
  });
  </script>
  
  <style scoped>
  
h4, h5, p {
  font-family: "Bungee", sans-serif;
  font-weight: 400;
  font-style: normal;
  }
  
.btn {
  background-color: #E9EDC9;
  font-family: "Modak", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 37%;
  }
  
.display-2 {
  margin-top: 15%;
  font-size: 40px;
  margin-bottom: 2%;
  }
  
.container {
  max-width: 60%; 
  margin: 40px auto;
  padding:  20px; 
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
  
.pName {
  font-size: 18px;
  font-family: "Bungee", sans-serif;
  }
  
.pAmount {
  font-family: "Concert One", sans-serif;
  color: #ec8786;
  }
  
.products-div img {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
}
  
.Search-Filter {
  margin-bottom: 20px;
  align-content: space-between;
  }

.Search-Filter {
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  margin-bottom: 20px;
  gap: 10px; 
}

.Search-Filter input,
.Search-Filter select {
  flex: 1; 
  max-width: 30%;
  padding: 10px; 
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

@media (max-width: 300px) {
    .container {
      max-width: 90%;
      margin: 20px auto;
      padding: 10px;
    }

    .row {
      flex-direction: column; 
    }

    .card-column {
      flex: 0 0 100%; 
      width: 100%;
      padding: 10px;
      margin: 10px 0;
    }

    .Search-Filter {
      flex-direction: column; 
      gap: 10px;
      margin-top: 5%;
    }

    .Search-Filter input,
    .Search-Filter select {
      max-width: 100%; 
      padding: 10px;
    }
  }

  </style>
  
