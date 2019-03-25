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
    <v-img src="https://cdn3.iconfinder.com/data/icons/yummicon-pro/100/077_Espresso-512.png" aspect-ratio="1.7"/>
    
    </v-avatar>

    <div
      v-for="(data,index) in button"
      :key="index"
      flat
      color="myfont"
    >
    <div v-if="data !== 'sign in'">
    <v-btn color="transparent">{{ data }}</v-btn>
    </div>
    <div v-else>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="250px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">sign in</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">User Sign In</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="username" label="username/password*" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field v-model="password" label="Password*" type="password" required></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">sign in</v-btn>
            <v-btn color="blue darken-1" flat @click="dialog = false">cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    </div>
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
  components:{
    },
  data: () => ({
      username:'',
      password:'',
      dialog: false
    }),
  mounted(){

  }

}
</script>
