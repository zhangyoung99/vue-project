<template>
    <div>
        <form @submit.prevent="signUp"> 
            <div class="formRow">
                <label for="">用户名</label>
                <input type="text" v-model="formData.username" >       
            </div> 
            <div class="formRow">
                <label for="">密码</label>
                <input type="password" v-model="formData.password">    
            </div> 
            <div class="formAction">
                <input type="submit" value="提交">
            </div>
        </form> 
    </div>
</template>

<script>
import AV from '../lib/leancloud'

export default {
    name: 'SignUpForm',
    data(){
        return {
            formData: {
                username: '',
                password: ''
            }
        }
    },
    created(){
    },
    methods:{
      signUp(){
        let {username,password} = this.formData
        let user = new AV.User();
        user.setUsername('username');
        user.setPassword('password');
        user.signUp().then((loginedUser) => {
            this.$emit('success',{
                username: loginedUser.attributes.username,
                id: loginedUser.id
            })
        }, function (error) { 
            alert('注册失败');   
        });      
      },
    }
}
</script>

<style lang="less" scoped>
 .formRow {
     margin-bottom: 10px;
    label {
        display: inline-block;
        width: 100px;
        text-align: right;
    }
    input {
        border-radius: 5px;
        height: 30px;
        border: none;
    }
 }
 .formAction {
     float: right;
     input {
        width: 80px;
        height: 30px;
        padding: 5px;
        border-radius: 5px;
        background: #07d;
        border: none;
        color: #fff;
     }
 }
</style>