<<<<<<< HEAD
=======
<template>
    <div class="container" id="admin">
        <h1 class="text-center">ADMIN</h1>
        <!-- Users Section -->
        <div class="section">
            <h2 class="user">Users</h2>
            <button class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#addUserModal">
                 Add User
            </button>
            <!-- Add User Modal -->
        <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Register User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ..<form @submit.prevent="addUser">
                        <div class="mb-3">
                            <label for="firstName" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="firstName" v-model="user.firstName">
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="lastName" v-model="user.lastName">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" v-model="user.userPass">
                        </div>
                        <div class="mb-3">
                            <label for="age" class="form-label">Age</label>
                            <input type="number" class="form-control" id="age" v-model="user.userAge">
                        </div>
                        <div class="mb-3">
                            <label for="gender" class="form-label">Gender</label>
                            <select class="form-select" id="gender" v-model="user.Gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="role" class="form-label">Role</label>
                            <select class="form-select" id="role" v-model="user.userRole">
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" v-model="user.emailAdd">
                        </div>
                        <div class="mb-3">
                            <label for="profile" class="form-label">Profile</label>
                            <input type="img" class="form-control" id="profile" v-model="user.userProfile">
                        </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary" @click="register()">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            <!-- Table to Display Users -->
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>UserID</th>
                        <th>User Profile</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody v-if="users">
                    <tr v-for="user in users" :key="user.userID">
                        <td>{{ user.userID }}</td>
                        <td><img :src="user.userProfile" :alt="user.firstName" class="img-thumbnail"></td>
                        <td>{{ user.firstName }}</td>
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.userAge }}</td>
                        <td>{{ user.Gender }}</td>
                        <td>{{ user.userRole }}</td>
                        <td>{{ user.emailAdd }}</td>
                        <td>
                            <button @click="editUser(user.userID)" class="btn " data-bs-toggle="modal" :data-bs-target="`#editUserModal${user.userID}`">
                                <p class="fa-solid fa-user-pen"></p> Edit
                            </button>
                            <!-- Edit User Modal -->
                            <div class="modal fade" :id="`editUserModal${user.userID}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit User</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                 <div class="mb-3">
                                   <label for="firstName" class="form-label">First Name</label>
                                    <input type="text" class="form-control" id="firstName" v-model="user.firstName">
                                 </div>
                                <div class="mb-3">
                                <label for="lastName" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="lastName" v-model="user.lastName">
                                  </div>
                                  <div class="mb-3">
                                    <label for="userPass" class="form-label">Password</label>
                                   <input type="password" class="form-control" id="userPass" v-model="user.userPass">
                                  </div>
                                  <div class="mb-3">
                                   <label for="userAge" class="form-label">Age</label>
                                   <input type="number" class="form-control" id="userAge" v-model="user.userAge">
                                 </div>
                                 <div class="mb-3">
                                  <label for="userGender" class="form-label">Gender</label>
                                   <select class="form-select" id="userGender" v-model="user.Gender">
                                   <option value="Male">Male</option>
                                     <option value="Female">Female</option>
                               </select>
                                 </div>
                              <div class="mb-3">
                            <label for="userRole" class="form-label">Role</label>
                                   <select class="form-select" id="userRole" v-model="user.userRole">
                                      <option value="Admin">Admin</option>
                                     <option value="User">User</option>
                                   </select>
                                  </div>
                                 <div class="mb-3">
                                    <label for="emailAdd" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="emailAdd" v-model="user.emailAdd">
                                  </div>
                                  <div class="mb-3">
                                    <label for="userProfile" class="form-label">Profile</label>
                                    <input type="img" class="form-control" id="userProfile" v-model="user.userProfile">
                                  </div>
                            </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" class="btn btn-primary" @click="updateUser()">Save changes</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            <button @click="deleteUser(user.userID)" class="btn ">
                                <p class="fa-solid fa-user-minus"></p> Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <Spinner />
                </tbody>
            </table>
        </div>
        <!-- Products Section -->
        <div class="section">
            <h2>Products</h2>
            <!-- #addproductModal -->
            <button class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#addProductModal">
               Add Product
            </button>
                <!-- Modal -->
                <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form  @submit.prevent="addProduct">
                                 <div class="mb-3">
                                   <label for="firstName" class="form-label">Product Name</label>
                                <input type="text" class="form-control" id="prodName" v-model="product.prodName">
                                </div>
                                 <div class="mb-3">
                                    <label for="lastName" class="form-label">Product Description</label>
                                    <input type="text" class="form-control" id="prodDescription" v-model="product.prodDescription">
                              </div>
                                     <div class="mb-3">
                                   <label for="lastName" class="form-label">Product Catergory</label>
                                    <input type="text" class="form-control" id="Category" v-model="product.Category">
                                </div>
                                    <div class="mb-3">
                        <label for="lastName" class="form-label">Product Price</label>
                               <input type="text" class="form-control" id="amount" v-model="product.amount">
                             </div>
                                    <div class="mb-3">
                                   <label for="lastName" class="form-label">Product Quantity</label>
                                   <input type="text" class="form-control" id="quantity" v-model="product.quantity">
                                 </div>
                           <div class="mb-3">
                                <label for="userPass" class="form-label">Product Image</label>
                                   <input type="img" class="form-control" id="prodUrl" v-model="product.prodUrl">
                                 </div>
                                </form>...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="addAProduct()">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
                <!-- Table to Display Products -->
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody v-if="products">
                    <tr v-for="product in products" :key="product.prodID">
                        <td><img :src="product.prodURL" :alt="product.prodName" class="img-thumbnail"></td>
                        <td>{{ product.prodID }}</td>
                        <td>{{ product.prodName }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>{{ product.amount }}</td>
                        <td>{{ product.Category }}</td>
                        <td>{{ product.prodDescription }}</td>
                        <td>
                            <button class="btn btn-secondary" data-bs-toggle="modal" :data-bs-target="`#editProductModal${product.prodID}`">
                               Edit
                            </button>
                            <div class="modal fade" :id="`editProductModal${product.prodID}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Update Product</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form >
                                 <div class="mb-3">
                                   <label for="firstName" class="form-label">Product Name</label>
                                  <input type="text" class="form-control" id="prodName" v-model="product.prodName">
                                  </div>
                                  <div class="mb-3">
                                    <label for="lastName" class="form-label">Product Description</label>
                                    <input type="text" class="form-control" id="prodDescription" v-model="product.prodDescription">
                                  </div>
                                     <div class="mb-3">
                                  <label for="lastName" class="form-label">Product Catergory</label>
                                <input type="text" class="form-control" id="Category" v-model="product.Category">
                                 </div>
                                    <div class="mb-3">
                                    <label for="lastName" class="form-label">Product Price</label>
                                    <input type="text" class="form-control" id="amount" v-model="product.amount">
                                 </div>
                                    <div class="mb-3">
                                   <label for="lastName" class="form-label">Product Quantity</label>
                                   <input type="text" class="form-control" id="quantity" v-model="product.quantity">
                              </div>
                                  <div class="mb-3">
                                   <label for="userPass" class="form-label">Product Image</label>
                                   <input type="img" class="form-control" id="prodUrl" v-model="product.prodUrl">
                                 </div>
                                 <div class="mb-3">
                                    <button type="submit" class="btn btn-primary" @click.prevent="updateProduct(JSON.stringify(product))">Save changes</button>
                                 </div>
                                </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            <button @click="deleteProduct(product.prodID)" class="btn ">
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <Spinner />
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
export default {
    components: {
        Spinner
    },
    data() {
        return {
            product: {
                prodName: "",
                quantity: "",
                amount: "",
                Category: "",
                prodUrl: "",
                prodDescription: "",
            },
            user: {
                userID: null,
                firstName: "",
                lastName: "",
                userPass: "",
                userAge: "",
                Gender: "",
                userRole: "",
                emailAdd: "",
                userProfile: "",
            }
        }
    },
    methods: {
        addAProduct() {
    this.$store.dispatch('addAProduct', this.product);
 
  },
      updateProduct() {
            this.$store.dispatch('updateProduct', this.product);
        },
        // editBtn(id) {
        //     this.products.forEach((item) => {
        //         if (item.prodID == +id) {
        //             this.prodName = item.prodName
        //             this.quantity = item.quantity
        //             this.amount = item.amount
        //             this.category = item.Category
        //             this.prodUrl = item.prodUrl
        //             this.prodDes = item.prodDescription
        //             this.prodPayload = {
        //                 prodID: item.prodID,
        //                 prodName: this.prodName,
        //                 quantity: this.quantity,
        //                 amount: this.amount,
        //                 category: this.Category,
        //                 prodUrl: this.prodUrl,
        //                 prodDes: this.prodDescription
        //             }
        //         }
        //     })
        // },
        deleteProduct(id){
            this.$store.dispatch('deleteProduct', id);
        },
        editUser(id) {
            this.users.forEach((user) => {
                if (user.userID == +id) {
                    this.firstName = user.firstName
                    this.lastName = user.lastName
                    this.userAge = user.userAge
                    this.gender = user.Gender
                    this.userRole = user.userRole
                    this.emailAdd = user.emailAdd
                    this.userProfile = user.userProfile
                    this.userPayload = {
                        userID: user.userID,
                        firstName: this.firstName,
                        lastName: this.lastName,
                        userAge: this.userAge,
                        gender: this.Gender,
                        userRole: this.userRole,
                        emailAdd: this.emailAdd,
                        userProfile: this.userProfile
                    }
                }
            })
        },
        updateUser() {
    this.$store.dispatch('updateUser', this.users)
  },
        deleteUser(id){
            this.$store.dispatch('deleteUser', id);
        },
        addUser() {
  this.$store.dispatch('register', this.user);
},
    },
    computed: {
        products() {
            return this.$store.state.products
        },
        users() {
            return this.$store.state.users
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts')
        this.$store.dispatch('fetchUsers')
    }
}
</script>
<style>
#admin {
    font-family: Arial, sans-serif;
    margin-top: 20px;
}
.text-center {
    text-align: center;
}
.section {
    margin-bottom: 40px;
}
.table {
    width: 100%;
    margin-bottom: 20px;
}
.table-bordered {
    border: 1px solid #DEE2E6;
}
.table-bordered th,
.table-bordered td {
    border: 1px solid #DEE2E6;
    padding: 8px;
}
.btn-sm {
    padding: 5px 10px;
    font-size: 0.875rem;
}
.img-thumbnail {
    max-width: 100px;
    max-height: 100px;
}
.user{
    margin-top: 5%;
}
:is(h1, h2){
    font-family: "Modak", system-ui;
    text-align: center !important;
    /* color: brown !important; */
}
</style>
>>>>>>> 709d89d47b34edee306ba7399e1225c54029394c
