<template>
  <div id="Toolbar">
     <i @click="addNote" class="glyphicon glyphicon-plus"></i>
     <i @click="toggleFavorite" :class="{starred: activeNote.favorite}"  class="glyphicon glyphicon-star"></i>
     <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
// import { addNote, deleteNote, toggleFavorite } from '../store/actions.js'

export default {
  name: 'Toolbar',
  computed: {
    //   notes() {
    //       return this.$store.getters.notes
    //   },
      activeNote () {
          return this.$store.getters.activeNote
      }
  },
    // getters: {
    //   activeNote: state => state.activeNote
    // },
//     actions: {
//       addNote,
//       deleteNote,
//       toggleFavorite
//     }
//   }  
//   data () {
//       newTodo: ''
//   },
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
<style lang="less">
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
       &:hover {
           opacity: .5;
       }
     }
    .starred {
        color: #F7AE4F;
    }
 }
</style>
