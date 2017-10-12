<template>
  <div id="Toolbar">
    <div class="wrapper">
      <span class="logo">resumer</span>
      <div class="actions">
        <a class="button primary" href="#" @click.prevent="signUpDialogVisible = true">注册</a>
        <myDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
          这是slot的内容
        </myDialog>
        <a class="button" href="#">登录</a>
      </div>
    </div>
  </div>

</template>

<script>

  import myDialog from './myDialog'
  export default {
   name: 'Toolbar',
   data(){
     return {
       signUpDialogVisible: false
     }
   },
   components:{ myDialog }
  }

</script>

<style lang="scss" scoped>
  #Toolbar {
    height: 64px;
    background: #fff;
    .wrapper {
      margin-left: 20px;
      .logo {
        font-size: 20px;
        line-height: 64px;
      }
      .actions{
        float: right;
        margin-right: 40px;
        line-height: 64px;
      }
    }
    .button {
      display: inline-block;
      width: 72px;
      // height: 24px;
      line-height: 24px;
      padding: 5px;
      text-decoration: none;
      border: 1px solid #e5e5e5;
      text-align: center;
    }
    .primary {
      background: #00C15E;
      color: #fff;
    }
  }
</style>