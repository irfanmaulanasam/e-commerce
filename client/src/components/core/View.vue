<template>
  <v-content>
    <v-container>
      <router-view :islogin="islogin" :isAdmin="isAdmin" />
    </v-container>
  </v-content>
</template>

<script>
export default {
  props:['product','islogin','isAdmin']
}
</script>
