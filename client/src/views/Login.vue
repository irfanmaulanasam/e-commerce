<template>
  <div class="">
    <br>
    <center><h1>Login Account</h1></center>
    <v-container grid-list-md text-xs-center>
      <center>
      <v-flex xs4>
        <v-form
        ref="form"
        >
        <v-text-field
        v-model="email"
        label="E-mail"
        required
        ></v-text-field>

        <v-text-field
        v-model="password"
        type="password"
        name="input-10-1"
        label="Password"
        ></v-text-field>

        <v-btn
        color="black" dark
        @click="loginAccount"
        >
        Login
        </v-btn>

        </v-form>
      </v-flex>
      </center>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import toastr from 'toastr'

export default {
  components: {
    // HelloWorld
  },
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  props: ['url'],
  methods: {
    loginAccount () {
      let obj = {
        email: this.email,
        password: this.password
      }
      axios.post(`${this.url}/users/signin`, obj)
        .then((response) => {
          console.log(response)
          toastr.info('you are logged in')
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('id', response.data.id)
          localStorage.setItem('name', response.data.name)
          this.$emit('user-login')
          this.$router.push('/products')
          if (response.data.Admin) {
            this.$emit('admin-login')
          }
        })
        .catch((error) => {
          if (error.status === 404) {
            toastr.info('invalid email/password')
          }
          console.log(error)
        })
    },

    isLogin () {
      this.$emit('user-login')
    }
  }
}
</script>
