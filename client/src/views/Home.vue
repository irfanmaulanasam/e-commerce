<template>
  <div class="">
    <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    <v-responsive >
          <v-container fill-height>
            <v-layout align-center>
              <v-flex>
                <h2 class="fony">what we said about kopilopi</h2>
                <h3 class="fony">"finding coffee isnot about passion but its an adventure</h3>
                <h3 class="fony">like playing poker"</h3>
              </v-flex>
            </v-layout>
          </v-container>
    </v-responsive>
    </v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      items: [
        { src: 'http://c2.peakpx.com/wallpaper/693/434/405/espresso-coffee-beans-cafe-black-wallpaper.jpg' },
        { src: 'http://watchfit.com/wp-content/uploads/2016/04/black-coffee-weight-loss-benefits_1-1024x683.jpg' },
        { src: 'http://www.wallpapersin4k.org/wp-content/uploads/2017/04/Black-Coffee-Wallpaper-22.jpg' },
        { src: 'http://www.desktopwallpapers4.me/wallpapers/photography/1920x1200/1/7349-coffee-beans-under-black-scarf-1920x1200-photography-wallpaper.jpg' }
      ]
    }
  }
}
</script>

<style>
.fony{
  background-color: antiquewhite
}
</style>
