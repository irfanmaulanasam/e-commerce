<template>
  <v-app>
    <v-toolbar dark color='black'>
      <h1 @click="toHome"><img src="./assets/logo.png" alt="kopiLopi"></h1>
      <v-toolbar-items>
      <v-btn flat @click="toHome">Home</v-btn>
      <v-btn flat @click="toAbout">About</v-btn>
      <v-btn v-if="isAdmin" flat @click="toAdmin">Admin Panel</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn v-if="isLogin == false" flat @click="toLogin">Sign In</v-btn>
        <v-btn v-if="isLogin" flat @click="logOut">Sign Out</v-btn>
        <v-btn v-if="isLogin == false" flat @click="toRegister">Sign Up</v-btn>
        <v-btn flat @click="toProducts">All Products</v-btn>
        <v-btn v-if="isLogin" flat @click="toCart">Cart</v-btn>
        <v-btn v-if="isLogin" flat @click="toTransaction">Transaction</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view :isLogin="isLogin" :url="url" @user-login="userLogin" @admin-login="adminLogin"></router-view>
    </v-content>
    <v-footer
      dark
      height="auto"
    >
      <v-card
        flat
        tile
        class="lighten-1 white--text text-xs-center"
        color='black'
      >
        <v-card-text>
        <h5><img src="./assets/logo.png" alt="kopiLopi"></h5>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Weathering the storm is a task we face everyday. Don’t wake up on the left side of the bed, expose yourself to ‘The Elements’ and wake up on the right side. Tastes like butterscotch, toasted walnuts, burnt sugar & toffee.
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      isLogin: false,
      isAdmin: false,
      url: 'http://localhost:3000'
    }
  },
  methods: {
    adminLogin () {
      this.isAdmin = true
    },
    toHome () {
      this.$router.push('/')
    },
    toCart () {
      this.$router.push('/cart')
    },
    toTransaction () {
      this.$router.push('/transactions')
    },
    toAdmin () {
      this.$router.push('/admin')
    },
    toAbout () {
      this.$router.push('/about')
    },
    toProducts () {
      this.$router.push('/products')
    },
    userLogin () {
      this.isLogin = true
      
    },
    toLogin () {
      this.$router.push(`/login`)
    },
    toRegister () {
      this.$router.push(`/register`)
    },
    logOut () {
      localStorage.clear()
      this.isLogin = false
      this.isAdmin = false
      this.$router.push(`/`)
    }
  },
  mounted () {
    if (localStorage.getItem('token')) {
      this.isLogin = true
    }
    axios.post(`${this.url}/users/admincheck`, { token: localStorage.getItem('token') })
      .then((response) => {
        if (response.data.admin) {
          this.isAdmin = true
          toastr.info('you logging in as admin')
        }
      })
      .catch((error) => {
          toastr.error(error)
        console.log(error.message)
      })
  }
}
</script>
