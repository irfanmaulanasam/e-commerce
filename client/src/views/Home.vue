<template>
  <v-container
    class="pa-0"
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        v-for="index in 34"
        :key="index"
        xs4
      >
        <v-img src="https://picsum.photos/510/300?random" aspect-ratio="1.7">
        <v-btn color="success">buy</v-btn>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-btn slot="activator" color="green darken-1" dark
              >details</v-btn
            >
            <v-card>
              <v-card-title>
                <span class="headline"> {{ product.name }}</span>
              </v-card-title>
              <v-card-text>
                <v-divider></v-divider>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-card-text>
                      <small>
                        {{ product.description }}
                      </small> 
                    </v-card-text>
                  </v-layout>
                </v-container>
                <v-divider></v-divider>
              </v-card-text>
            </v-card>
          </v-dialog>
        <v-btn color="error" v-if="isAdmin">delete</v-btn>
        </v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props:['product','islogin','isAdmin'],
    name: 'Home'
  }
</script>
