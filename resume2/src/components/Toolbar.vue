<template>
  <div id="Toolbar">
    <div class="wrapper">
      <span class="logo">resumer</span>
      <div class="actions">
        <div v-if="logined" class="userActions">
          <span class="welcome">你好,{{user.username}}</span>
          <a class="button" href="#" @click.prevent="signOut">登出</a>
        </div>
        <div v-else class="userActions">
          <a class="button primary" href="#" @click.prevent="signUpDialogVisible = true">注册</a>
          <myDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
            <signUpForm  @success="signIn($event)"></signUpForm>
          </myDialog>
          <a class="button" href="#" @click.prevent="signInDialogVisible = true">登录</a> 
          <myDialog tiitle="登录" :visible="signInDialogVisible" @close="signInDialogVisible = false">
            <signInForm @success="signIn($event)"></signInForm>
          </myDialog>       
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import myDialog from './myDialog'
  import signUpForm from './signUpForm'
  import signInForm from './signInForm'
  import AV from '../lib/leancloud'
  export default {
   name: 'Toolbar',
   data(){
     return {
       signUpDialogVisible: false,
       signInDialogVisible: false
     }
   },
   computed: {
     user(){
       return this.$store.state.user
     },
     logined(){
       return this.$store.state.user.id
     }
   },
   components:{ myDialog,signUpForm,signInForm},
   methods: {
     signOut(){
       AV.User.logOut()
       this.$store.commit('removeUser')
     },
     signIn(user){
       this.signUpDialogVisible = false
       this.signInDialogVisible = false
       this.$store.commit('setUser',user)
     }
   }
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
      pointer: cursor;
    }
    .primary {
      background: #00C15E;
      color: #fff;
    }
    .actions {
      display: flex;
      .userActions {
        margin-right: 3rem;
        .welcome {
          margin-right: .5rem;
        }
      }
    }
  }
</style>