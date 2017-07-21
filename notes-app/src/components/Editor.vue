<template>
<div id="note-editor">
  <textarea
    :value="activeNoteText"
    @input="editNote"
    class="form-control">
  </textarea>
</div>
</template>



<script>

export default {
  name: 'Editor',
  // data () {
  //   return 'hello world'
  // },
  computed: {
      activeNoteText () {
          return this.$store.getters.activeNote.text
      }
  },
  methods:{
    editNote(e) {
      this.$store.dispatch('editNote',e.target.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 #note-editor {
   height: 100vh;
   width: 50%;
   .form-control {
       width: 100%;
       height: 100%;
       resize: none;
   }
 }
</style>