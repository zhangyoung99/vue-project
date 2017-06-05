<template>
  <div id="topbar">
    <div class="wrapper">
       <span class="logo">Resumer</span>
       <div class="actions">
          <a href="#" class="btn primary" @click.prevent="signUpDialogVisible = true">注册</a>
          <myDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
             <SignUpForm @success = "login($event)" />
          </myDialog>
          <a href="#" class="btn login">登录</a>
          <button class="btn primary">保存</button>
          <button class="btn btn-preview">预览</button>
       </div>
    </div>
  </div>
</template>

<script>
import myDialog from './myDialog'
import SignUpForm from './SignUpForm'
export default {
  name: 'Topbar',
  data() {
    return {
      signUpDialogVisible: false
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  components: { myDialog, SignUpForm},
  methods: {
     login(user) {
       this.signUpDialogVisible = false
       this.$store.commit('setUser', user)
     }
  }
}
</script>

<style scoped lang="less">
 #topbar {
   background: #fff;
   box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
   .wrapper {
     min-width: 1024px;
     max-width: 1440px;
     margin: 0 auto;
     height: 64px;
   }
   .wrapper {
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 0 16px;
   }
   a {
     display: inline-block;
   }
   .btn {
     width: 72px;
     height: 32px;
     line-height: 32px;
     cursor: pointer;
     font-size: 18px;
     border: none;
     color: #222;
     text-decoration: none;
     text-align: center;
     
     &:hover {
       box-shadow: 1px 1px 1px rgba(0,0,0,0.5);
     }
     &.primary {
      background:#02af5f;
      color: #fff;
     }
   }

   .logo {
     font-size: 24px;
     color: #000;
  }
 }
</style>