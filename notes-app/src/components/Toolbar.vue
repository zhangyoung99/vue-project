<template>
  <div id="Toolbar">
     <i class="glyphicon glyphicon-plus"></i>
     <i class="glyphicon glyphicon-star"></i>
     <i class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
 #Toolbar {
     display: flex;
     width: 80px;
     height: 100vh;
     background: #2d414e;
     flex-direction: column;
     padding: 20px;
     font-size: 32px;
     text-align: center;
     i {
       margin-top: 30px;
       color: rgba(0,0,0,.25);
     }
 }
</style>
