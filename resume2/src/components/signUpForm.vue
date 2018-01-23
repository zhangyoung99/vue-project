<template>
    <div class="formWrapper">
        <form @submit.prevent="signUp">
            <div class="row">
                <label>用户名:</label>
                <input type="text" v-model="formData.username" required>
                <span class="errorMessage">{{errorMessage}}</span>
            </div>
            <div class="row">
                <label>密码:</label>
                <input type="password" v-model="formData.password" required>
            </div>
            <div class="actions">
                <input type="submit" value="注册">
            </div>
        </form>
    </div>
</template>

<script>

import AV from '../lib/leancloud'
import getErrorMessage from '../lib/getErrorMessage'
import getAVUser from '../lib/getAVUser'

export default {
    name: 'signUpForm',
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
        signUp() {
             let {username,password} = this.formData
             var user = new AV.User();
             user.setUsername(username)
             user.setPassword(password)
             user.signUp().then(() =>{
                 this.$emit('success', getAVUser())
             },(error)=>{
                 this.errorMessage = getErrorMessage(error)
             })
             this.username = ''
             this.password = ''

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
            text-align: center;
            border: none;
        }
        .errorMessage {
            color: #f00;
        }
        .actions {
            margin-left: 60px;
        }
    }
</style>