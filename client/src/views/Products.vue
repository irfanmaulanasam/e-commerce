<template>
  <div class="">
    <v-container grid-list-md text-xs-center>
      <div>
        <v-btn @click="getAllProduct">All Products</v-btn>
        <v-btn @click="coffeeBeans">Coffee beans</v-btn>
        <v-btn @click="getBrewingMachine">Brewing Machine</v-btn>
        <v-btn @click="getWholeSale">WholeSale</v-btn>
        <v-btn @click="getAdventure">Get Adventure</v-btn>
      </div>
      <br>
      <v-layout row wrap>
        <v-flex xs3 sm3 pa-1 v-for="(product, index) in products" :key="index">
          <v-card>
            <v-img
              :src="product.image"
              contain
              max-height="250"
              max-width="250"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h2>{{product.name}}</h2>
                <h3>Price: {{product.price.toLocaleString()}}</h3>
              </div>
            </v-card-title>
            <v-layout row justify-center>

              <v-card-actions>
                <v-btn v-if="isLogin" @click="showAddToCart(product._id)" color="black" dark>Add to Cart</v-btn>
                <v-btn @click="showDetail(product._id)" color="white" light>Show Details</v-btn>

              </v-card-actions>

            </v-layout>
            <br>
          </v-card>
        </v-flex>

      </v-layout>
      <v-layout row justify-center>
        <v-dialog v-model="dialog" max-width="600px">
          <v-card>
            <v-card-text>
              <center>
                <h1>{{product.name}}</h1>
                <br>
                <v-img
                :src="product.image"
                contain
                max-height="250"
                max-width="250"
                ></v-img>
                <br>
                <h1>Price: IDR {{product.price.toLocaleString()}}</h1>
                <br>
                <h2>{{product.description}}</h2>
              </center>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
      <v-layout row justify-center>
        <v-dialog return-value v-model="dialogCart" max-width="600px">
          <v-card>
            <v-card-text>
              <center>
                <h3>You will add {{product.name}} to your cart</h3>
                <br>
                <h3>Enter the amount you want to buy</h3>
                <v-text-field
                v-model="quantity"
                type="number"
                label="Amount"
                required
                ></v-text-field>
              </center>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue" dark @click="addToCart(product._id)">Add And Continue Shopping</v-btn>
              <v-btn color="red" dark @click="dialogCart = false">Cancel</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => {
    return {
      dialog: false,
      dialogCart: false,
      quantity: 1,
      products: [],
      product: {
        _id: 'id',
        price: 'price',
        name: 'name',
        description: 'description',
        image: 'image'
      },
      allproducts: [],
      coffeeBeans: [],
      BrewingMachine: [],
      WholeSale: [],
      Adventure: []
    }
  },
  props: ['url', 'isLogin'],
  methods: {
    getAllProduct () {
      this.products = this.allproducts
    },
    getCoffeeBeans () {
      this.products = this.coffeeBeans
    },
    getDetail () {
      this.products = this.BrewingMachine
    },
    getWholeSale () {
      this.products = this.WholeSale
    },
    getAdventure () {
      this.products = this.Adventure
    },
    showAddToCart (id) {
      axios.get(`${this.url}/items/${id}`)
        .then((response) => {
          this.product = response.data
          this.dialogCart = true
        })
        .catch((error) => {
          console.log(error)
        })
    },
    showDetail (id) {
      axios.get(`${this.url}/items/${id}`)
        .then((response) => {
          this.product = response.data
          this.dialog = true
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getProducts () {
      axios.get(`${this.url}/items/`)
        .then((response) => {
          response.data.forEach((product) => {
            if (product.category === 'coffee Beans') {
              this.allproducts.push(product)
              this.coffeeBeans.push(product)
            } else if (product.category === 'Brewing Machine') {
              this.allproducts.push(product)
              this.BrewingMachine.push(product)
            } else if (product.category === 'Whole Sale') {
              this.allproducts.push(product)
              this.WholeSale.push(product)
            } else if (product.category === 'Adventure') {
              this.allproducts.push(product)
              this.Adventure.push(product)
            } else {
              this.allproducts.push(product)
              this.allproducts.push(product)
            }
          })
        })
        .catch((error) => {
          console.log(error.message)
        })
    },

    addToCart (productId, name) {
      console.log(productId, name)
      let obj = {
        buyer: localStorage.getItem('id'),
        item: productId,
        quantity: this.quantity
      }
      axios.post(`${this.url}/carts`, obj)
        .then((cart) => {
          console.log('berhasil menambah produk ke cart')
          this.quantity = 1
          this.dialogCart = false
        })
        .catch((error) => {
          console.log(error.message)
        })
    }
  },
  created () {
    this.getProducts()
    this.products = this.allproducts
  }
}
</script>
