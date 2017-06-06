<template>
  <div id="Editor">
     <textarea class="editor">
      xxxxxx
     </textarea>
  </div>
</template>

<script>
export default {
  name: 'Editor',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
 #Editor {
   height: 100vh;
   width: 50%;
   .editor {
       width: 100%;
       height: 100%;
       resize: none;
   }
 }
</style>