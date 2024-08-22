<template>
    <div class="container" id="admin">
        <h1 class="text-center">ADMIN</h1>

        <!-- Users Section -->
        <div class="section">
            <h2 class="user">Users</h2>
            <button class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#addUserModal">
                 Add User
            </button>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>UserID</th>
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
                        <td>{{ user.firstName }}</td>
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.userAge }}</td>
                        <td>{{ user.Gender }}</td>
                        <td>{{ user.userRole }}</td>
                        <td>{{ user.emailAdd }}</td>
                        <td>
                            <button @click="editUser(user.userID)" class="btn " data-bs-toggle="modal" data-bs-target="#editUserModal">
                                <p class="fa-solid fa-user-pen"></p> Edit
                            </button>
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
            <button class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#addproductModal">
               Add Product
            </button>
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
                            <button @click="editBtn(product.prodID)" class="btn " data-bs-toggle="modal" data-bs-target="#productModal">
                               Edit
                            </button>
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
            prodPayload: {
                prodID: null,
                prodName: "",
                quantity: "",
                amount: "",
                Category: "",
                prodUrl: "",
                prodDescription: "",
            },
            userPayload: {
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
        addProduct() {
            this.data = { prodName: this.prodName, quantity: this.quantity, amount: this.amount, Category: this.Category, prodURL: this.prodURL, prodDescription: this.prodDescription }
            this.$store.dispatch('addProduct', this.data);
        },
        editProduct() {
            this.$store.dispatch('editProduct', this.prodPayload);
        },
        editBtn(id) {
            this.products.forEach((item) => {
                if (item.prodID == +id) {
                    this.prodName = item.prodName
                    this.quantity = item.quantity
                    this.amount = item.amount
                    this.category = item.Category
                    this.prodUrl = item.prodUrl
                    this.prodDes = item.prodDescription
                    this.prodPayload = {
                        prodID: item.prodID,
                        prodName: this.prodName,
                        quantity: this.quantity,
                        amount: this.amount,
                        category: this.Category,
                        prodUrl: this.prodUrl,
                        prodDes: this.prodDescription
                    }
                }
            })
        },
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
        editUserBtn(){
            this.$store.dispatch('updateUser', this.userPayload);
        },
        deleteUser(id){
            this.$store.dispatch('deleteUser', id);
        },
        addUser() {
            this.data = { firstName: this.firstName, lastName: this.lastName, userPass: this.userPass, userAge: this.userAge, gender: this.gender, userRole: this.userRole, emailAdd: this.emailAdd, userProfile: this.userProfile },
            this.$store.dispatch('register', this.data);
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
    border: 1px solid #dee2e6;
}

.table-bordered th,
.table-bordered td {
    border: 1px solid #dee2e6;
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
</style>
