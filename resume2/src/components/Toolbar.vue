<template>
  <div id="Toolbar">
    <div class="wrapper">
      <span class="logo">resumer</span>
    </div>
  </div>

</template>

<script>

 export default {
   name: 'Toolbar'
 }

</script>

<style>
  #Toolbar {
    height: 64px;
    background: #fff;
  }
  #Toolbar>.wrapper {
    font-size: 20px;
    margin-left: 20px;
  }
  #Toolbar .wrapper .logo {
    display: table;
    line-height:64px;
  }
</style>