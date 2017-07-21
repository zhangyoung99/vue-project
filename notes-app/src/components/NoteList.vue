<template>
  <div id="NoteList">

    <div class="list-header">
       <h2>NOTES</h2>

       <div class="btn-group" role="group">
           <button type="button" class="btn btn-default"
             @click = "show = 'all'"
             :class="{active: show ==='all'}">
             All Notes
           </button>
       </div>
       <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click = "show = 'favorites'"
            :class="{active: show ==='favorites'}">
            Favorites
          </button>
       </div>
    </div>

    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group">
        <a v-for="note in filteredNotes"
          class="list-group-item" href="#"
          :class="{active: activeNote === note}"
          @click="updateActiveNote(note)">
          <p class="list-group-item-heading">
            {{note.text.trim().substring(0, 50)}}
            <!--<i @click="deleteNote" class="btn-del">x</i>-->
          </p>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'NoteList',
  data () {
      return {
          show: 'all'
      }
  },
  computed: {
    notes () {
        return this.$store.getters.notes
    },
    activeNote () {
          return this.$store.getters.activeNote
    },
    filteredNotes (note) {
      if (this.show === 'all'){
        return this.notes
      } else if (this.show === 'favorites') {
        return this.notes.filter(note => note.favorite)
      }
    }       
  },
  methods: {
    // deleteNote() {
    //       this.$store.dispatch('deleteNote')
    // },
    updateActiveNote(note) {
          // console.log(note)
          this.$store.dispatch('updateActiveNote',note)
    }
 
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 #NoteList {
   width: 30%;
   height:100vh;
   background: #f8f8f8;
   .list-header {
       padding: 10px;
       text-align: center;
   }
   .container {
       width: 100%;
       padding: 0;
       height: 50px;
       .btn-del {
           float: right;
           right: 10px;
           cursor: pointer;
       }
   }
 }
</style>