<template>
  <div id="NoteList">
     <div class="title">
       <h1>NOTES</h1>
     </div>
     <div class="main">
       <ul>
           <li>item1</li>
           <li>item2</li>
       </ul>
     </div>
  </div>
</template>

<script>
export default {
  name: 'NoteList',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
 #NoteList {
   width: 30%;
   height:100vh;
   background: #e5e5e5;
   .title {
       padding: 10px;
       text-align: center;
   }
   .main {
       li {
          &:hover {
              background: #07d;
              color: #fff;
          }
          list-style: none; 
       }
   }
 }
</style>