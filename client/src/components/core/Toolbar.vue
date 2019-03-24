<template>
  <v-toolbar
    app
    color="transparent"
    prominent
  >
    <v-avatar
      color="grey"
      class="mr-3"
    >
    <h3>K</h3>
    </v-avatar>

    <div
      v-for="(data,index) in button"
      :key="index"
      flat
      color="myfont"
    >
    <v-btn color="transparent">{{ data }}</v-btn>
      
    </div>

    <v-spacer />

    <v-flex xs4>
      <v-text-field
        solo-inverted
        flat
        hide-details
      />
    </v-flex>
  </v-toolbar>
</template>
<script>
export default {
  props:['button'],
  mounted(){

  }

}
</script>
