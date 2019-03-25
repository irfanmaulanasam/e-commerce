<template>
  <v-app style="bg-image:'../src/bgcofee.png''">
    <core-toolbar v-if="islogin" :button="button"/>
    <core-toolbar v-if="!islogin" :button="button2"/>
    <CoreView :islogin="islogin" :isAdmin="isAdmin"/>
  </v-app>
</template>

<script>
  import CoreToolbar from '@/components/core/Toolbar'
  import CoreView from '@/components/core/View'
  // import home from '@/views/Home'
  import axios from 'axios'
  const url = 'http://localhost:3000'

  export default {
    data(){
      return{ 
        product:[],
        isAdmin:false,
        islogin:false,
        button:['home','product','cart','history','news','sign out'],
        button2:['sign in','sign up','news','product'],
      }
    },
    components: {
      CoreToolbar,
      CoreView,
    },
    mounted(){
      axios
        .get(`${url}/product/list`)
        .then(data=>{
          this.product = data
        })
        .catch(err=>{
          console.log(err)
        })
    },
    methods:{
      signin(){

      },
      signout(){

      },
      signup(){

      },
      addcart(){

      },
      
    }
  }
</script>
