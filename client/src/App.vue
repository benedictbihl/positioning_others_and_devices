<template>
  <div id="app" >
    <localizer>
      <v-app>
        <page-header />
        <v-content>
        <sidebar id="sidebar"/>
          <v-container pt-0>
            <v-fade-transition mode="out-in">
            <view-container />
          </v-fade-transition>
          </v-container>
        </v-content>
      </v-app>
    </localizer>
  </div>
</template>

<script>
// @ is an alias to /src
import { TweenMax, Power4 } from 'gsap'
import PageHeader from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import ViewContainer from '@/views/Index.vue'
import Localizer from '@/components/Localizer.vue'

export default {
  name: 'app',
  components: {
    Localizer,
    ViewContainer,
    PageHeader,
    Sidebar
  },
  data: () => ({
    isOpen: 'collapsed'
  }),
  computed: {
    open () {
      return this.$store.state.sidebar.sidebarOpen
    }
  },
  watch: {
    open: function (open) {
      const dX = open ? document.getElementById('sidebar').offsetWidth : 0
      TweenMax.to(this.$el, 0.6, {
        paddingRight: dX,
        ease: Power4.easeOut
      })
    }
  },
  methods: {
    readDeviceOrientation () {
      if (window.innerHeight > window.innerWidth) {
        alert('Bitte verwende dein Gerät im Querformat. Please use your device in landscape mode.')
      }
    }
  },
  mounted () {
    this.readDeviceOrientation()
    window.onorientationchange = this.readDeviceOrientation
  }
}
</script>

<style lang="scss">

</style>
