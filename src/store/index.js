
import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import router from '@/router'
import { applyToken } from '@/service/UserAuth.js'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

const apiURL = 'https://nodeeomp-sf1q.onrender.com/'

// If the user reloads the page after logging in
applyToken(cookies.get('LegitUser')?.token)
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    recentProducts: null,
    product: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, value) {
      state.products = value
    },
    setRecentProducts(state, value) {
      state.recentProducts = value
    },
    setProduct(state, value) {
      state.product = value
    },

  },
  actions: {
    // ==== Fetch All Users ========
    async fetchUsers(context) {
      try {
        const { results, msg } = await (await axios.get(`${apiURL}users`)).data
        if (results) {
          context.commit('setUsers', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 3000
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 3000
       
        })
      }
    },
        // ==== Fetch A User ========
    async fetchUser(context, id) {
      try {
        const { result, msg } = await (await axios.get(`${apiURL}users/${id}`)).data
        if (result) {
          context.commit('setUser', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 3000
          
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 3000
         
        })
      }
    },
        // ==== Add a User ========
    async register(context, payload) {
      try {
        const { msg, err, token } = await (await axios.post(`${apiURL}users/register`, payload)).data
        if (token) {
          context.dispatch('fetchUsers')
          toast.success(`${msg}`, {
            autoClose: 3000
        
          })
          router.push({ name: 'login' })
        } else {
          toast.error(`${err}`, {
            autoClose: 3000
          
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 3000
      
        })
      }
    },
        // ==== Update a User ========
    async updateUser(context, payload) {
      try {
        const { msg, err } = await (await axios.patch(`${apiURL}users/${payload.userID}`, payload)).data
        if (msg) {
          context.dispatch('fetchUsers')
        } else {
          toast.error(`${err}`, {
            autoClose: 3000
     
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 3000
       
        })
      }
    },
        // ==== Remove a User ========
    async deleteUser(context, id) {
      try {
        const { msg, err } = await (await axios.delete(`${apiURL}users/${id}`)).data
        if (msg) {
          context.dispatch('fetchUsers')
        } else {
          toast.error(`${err}`, {
            autoClose: 3000
           
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 3000
        })
      }
    },

 // ==== Fetch All Products=====
    async fetchProducts(context) {
      try {
        const { results } = await (await axios.get(`${apiURL}products`)).data
        if (results) {
          context.commit('setProducts', results)
        } else {
          router.push({ name: 'login' })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 3000
          
        })
      }

    },
        // ==== Fetch Recent Products ========
    async recentProducts(context) {
      try {
        const { results, msg } = await (await axios.get(`${apiURL}products/recent`)).data
        if (results) {
          context.commit('setRecentProducts', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 3000
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 3000
        })
      }
    },
           // ==== Fetch A Product ========
    async fetchProduct(context, id) {
      try {
        const { result, msg } = await (await axios.get(`${apiURL}products/${id}`)).data
        if (result) {
          context.commit('setProduct', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 3000
          
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 3000
        
        })
      }
    },
           // ==== Add a Product========
    async addAProduct(context, payload) {
      try {
        const { msg } = await (await axios.post(`${apiURL}products/add`, payload)).data
        if (msg) {
          context.dispatch('fetchProducts')
          toast.success(`${msg}`, {
            autoClose: 3000
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 3000
      
        })
      }
    },
           // ==== Update a Product ========
    async updateProduct(context, payload) {
      try {
        const { msg } = await (await axios.patch(`${apiURL}products/${payload.productID}`, payload)).data
        if (msg) {
          context.dispatch('fetchProducts')
          toast.success(`${msg}`, {
            autoClose: 3000
         
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 3000
      
        })
      }
    },
           // ==== Remove a  Product ========
    async deleteProduct(context, id) {
      try {
        const { msg } = await (await axios.delete(`${apiURL}products/${id}`)).data
        if (msg) {
          context.dispatch('fetchProducts')
          toast.success(`${msg}`, {
            autoClose: 3000
 
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 3000
        
        })
      }
    }

  },
  modules: {
  }
})



