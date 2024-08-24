import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ProductsView from '@/views/ProductsView.vue'
import AdminView from '@/views/AdminView.vue'
import itemView from '@/views/itemView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  // {
  //   path: '/product/:id',
  //   name: 'product',
  //   component: ProductsView
  // },
  {
    path: '/items/:id',
    name: 'item',
    component: itemView
  },
  // {
  //   path: '/item',
  //   name: 'item',
  //   component: itemView
  // },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
