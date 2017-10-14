<template>
    <div class="formWrapper">
        <form @submit.prevent="signIn">
            <div class="row">
                <label>用户名:</label>
                <input type="text" v-model="formData.username" placeholder="默认账号zhang" required>
                <span class="errorMessage">{{errorMessage}}</span>
            </div>
            <div class="row">
                <label>密码:</label>
                <input type="password" v-model="formData.password" placeholder="默认密码zhang" required>
            </div>
            <div class="actions">
                <input type="submit" value="提交">
            </div>
        </form>
    </div>
</template>

<script>

import AV from '../lib/leancloud'
import getErrorMessage from '../lib/getErrorMessage'
import getAVUser from '../lib/getAVUser'

export default {
    name: 'signInForm',
    data(){
        return {
            formData: {
                username: '',
                password: ''
            },
            errorMessage: ''
        }
    },
    methods:{
        signIn() {
             let {username,password} = this.formData
             AV.User.logIn(username,password).then(() =>{
                 this.$emit('success', getAVUser())
             },(error)=>{
                 this.errorMessage = getErrorMessage(error)
             })

        }
    }
}

</script>

<style lang="scss">
    .formWrapper {
        label {
            display: inline-block;
            width: 60px;
            text-align: right;
        }
        input[type=text] {
            width: 200px;
            border: 1px solid #e5e5e5;
            margin-left: 1rem;
        }
        input[type=password] {
            width: 200px;
            border: 1px solid #e5e5e5;
            margin-left: 1rem;
        }
        input[type=submit] {
            display: inline-block;
            width: 60px;
            height: 32px;
            line-height: 32px;
            text-algin: center;
            border: none;
        }
        .actions {
            margin-left: 60px;
        }
    }
</style>