<template>
  <div :class="[$style.sidebar, shownContent === '' ? $style.hidden : '']" v-html="shownContent">
    <h2>Bezugspersonen eintragen</h2>
  </div>
</template>

<script>
import { TweenMax, Power4 } from 'gsap'
import _ from 'lodash'

export default {
  name: 'sidebar',
  data: () => ({
    content: [
      { pagename: 'People Selection' },
      { pagename: 'Device Selection' },
      { pagename: 'Chessboard' }
    ],
    shownContent: ''
  }),
  mounted () {
    this.sidebarHandler()
    var content = _.find(this.content, { pagename: this.$route.name })
    if (content) { // add padding to body if page is reloaded and sidebar is active. there's probably a better way to do this
      const dX = open ? this.$el.offsetWidth : 0
      TweenMax.to(document.getElementById('app'), 0, {
        paddingRight: dX,
        ease: Power4.easeOut
      })
    }
  },
  computed: {
    open () {
      return this.$store.state.sidebar.sidebarOpen
    }
  },
  watch: {
    $route: function () {
      this.sidebarHandler()
    }
  },
  methods: {
    /**
     * @description checks if a site with sidebar content is shown, then hides or shows it accordingly
     */
    sidebarHandler: function () {
      var content = _.find(this.content, { pagename: this.$route.name })
      if (content) {
        this.$store.dispatch('toggleSidebar', true)
        TweenMax.to(this.$el, 0.6, { // open sidebar
          x: 0,
          ease: Power4.easeOut
        })
        switch (content.pagename) {
          case 'People Selection':
            this.shownContent = this.$t('sidebar_people')
            break
          case 'Device Selection':
            this.shownContent = this.$t('sidebar_devices')
            break
          case 'Chessboard':
            this.shownContent = this.$t('sidebar_chessboard')
            break
          default:
            break
        }
      } else {
        this.$store.dispatch('toggleSidebar', false)
        TweenMax.to(this.$el, 0.6, { // close sidebar
          x: this.$el.offsetWidth,
          ease: Power4.easeOut
        })
      }
    }
  }
}
</script>

<style module>
  .sidebar{
    overflow: scroll;
    position: fixed;
    right: 0;
    top: 0;
    width: 20vw;
    height: 100vh;
    max-width: 90vw;
    background-color: #e0e0e0;
    z-index: 999;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
  }

  .hidden{
    opacity: 0;
  }
</style>
