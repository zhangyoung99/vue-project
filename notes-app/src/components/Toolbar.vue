<template>
  <div id="Toolbar">
     <i @click="addNote" class="glyphicon glyphicon-plus"></i>
     <i @click="toggleFavorite" :class="{starred: activeNote.favorite}"  class="glyphicon glyphicon-star"></i>
     <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>

export default {
  name: 'Toolbar',
  computed: {
      activeNote () {
          return this.$store.getters.activeNote
      }
  },

  methods: {
      addNote() {
          this.$store.dispatch('addNote')
      },
      deleteNote() {
          this.$store.dispatch('deleteNote')
      },
      toggleFavorite(){
          this.$store.dispatch('toggleFavorite') 
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 #Toolbar {
     display: flex;
     width: 80px;
     height: 100vh;
     background: #2d414e;
     flex-direction: column;
     padding: 20px;
     font-size: 36px;
     text-align: center;
    i {
       margin-top: 50px;
       color: #767676;
       &:hover {
           opacity: .8;
       }
     }
    .starred {
        color: #F7AE4F;
    }
 }
</style>
