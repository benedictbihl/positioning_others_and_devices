<template>
  <v-container fluid v-drag-and-drop:options="options" id="outer-container">
    <v-layout justify-center>
      <v-flex id="item-container" pa-1 xs2 grow>
        <v-layout row wrap>
          <div v-for="(item, index) in items"
          :key="index"
          :data-item-name="item.db_table_name"
          :class="['xs4 flex draggable', index != 0 && $route.name == 'Chessboard' ? 'disabled' : '' ]">
            <v-card class="outer-card align-center ma-1">
              <v-card-text class="text-wrapper">
                <div class="flexbox-wrapper">
                  <div class="icon-wrapper"><v-icon color="grey darken-4" class="card-icon">mdi-{{ item.icon }}</v-icon></div>
                  <div v-if="index == 0" class="text">{{$t('peopleSelection_label_me')}}</div>
                  <div v-else-if="index != 0 && item.icon !='account'" class="text">{{ $t(item.name) }}</div>
                  <div v-else class="text">{{ item.name }}</div>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-layout>
      </v-flex>
      <v-flex xs8 ml-5>
        <slot> </slot>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import fitty from 'fitty'

export default {
  data: () => ({
    options: {
      dropzoneSelector: '.field',
      draggableSelector: '.draggable',
      showDropzoneAreas: true,
      multipleDropzonesItemsDraggingEnabled: false,

      /**
       * @param event the browser event happening on drop
       * @description prepares the dragged dom element (device or person) right before it is placed onto to the chessboard,
       * removing different css classes and adding some
       * @see {@link https://github.com/rikschennink/fitty}
       */
      onDrop (event) {
        while (document.getElementsByClassName('disabled').length > 0) { // remove disabled state after placing the 'me' piece
          document.getElementsByClassName('disabled')[0].classList.remove('disabled')
        }
        var el = event.items[0]
        el.classList.remove('flex', 'xs3')
        el.children[0].classList.remove('ma-1')
        el.classList.add('is-placed')
        event.droptarget.classList.remove('field')
        event.droptarget.classList.add('occupied')

        fitty(el.children[0].children[0].children[0].children[0].children[0])
        fitty(el.children[0].children[0].children[0].children[1], {
          minSize: 9,
          maxSize: 14
        })
      },

      /**
       * @param event the browser event happening on drag
       * @description cancels drag if first piece to be placed is not the me-piece. also checks if field is already occupied.
       */
      onDragstart (event) {
        if (event.items[0].classList.contains('disabled')) event.stop() // cancel drag if 'me piece' is not yet placed

        if (event.owner.classList.contains('occupied')) { // prevent double items on field
          event.owner.classList.remove('occupied')
          event.owner.classList.add('field')
        }
      }
    }
  }),
  computed: {
    items () {
      return this.$store.state.selecteditems.items
    }
  },
  mounted () {
    // fit container height to its sibling (chessboard or selection)
    document.getElementById('item-container').style.maxHeight = document.getElementById('outer-container').children[0].children[1].children[0].offsetHeight + 'px'
    setTimeout(function () { // without the timeout, the initial resize after a reload is wrong
      fitty('.card-icon', {
      // minSize: 40
      })

      fitty('.text', {
        minSize: 11,
        maxSize: 14
      })
    }, 100)
  },
  updated () {
    fitty('.card-icon', {
      // minSize: 40
    })

    fitty('.text', {
      minSize: 11,
      maxSize: 14
    })
  }
}
</script>

<style lang="scss">
#item-container {
  max-width: 450px;
  overflow: auto;
  border-radius: 2px;
  background: #E0E0E0;
  border: 1px solid #fff;
  @media only screen and (min-width: 1280px) {
    margin-right: 48px;
  }
}

 .is-placed{
    width: 90%;
    height: 90%;
    margin: 8.25% auto;

      .icon-wrapper{
        @media only screen and (max-width: 1887px) {
        width: 70% !important;
        height: 70% !important;
        }
      }
  }

.disabled {
  opacity: .5;
}
.outer-card {
  height: 0;
  overflow: hidden;
  padding-top: 92%;
  border-radius: 0;
  background-color: transparent !important;
  box-shadow: none !important;

  .text-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;

    .flexbox-wrapper {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .icon-wrapper {
        width: 80%;
        height: 80%;

        .card-icon{
          white-space: nowrap;
          display: inline-block;
          }
      }

      .text{
        text-align: center;
        position: relative;
        line-height: normal;
      }
    }
  }
}
</style>
