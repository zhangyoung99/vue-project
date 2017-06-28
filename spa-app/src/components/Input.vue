<template>
<div>
  <form action="" v-on:submit.prevent = "onSubmit">
    <input type="text" v-model="usename" placeholder='Enter a github repo'>
    <button type="submit">Go</button>
  </form>
</div>

</template>

<script>
  import bus from '../bus'

  export default {
   name: 'githubInput',
   data (){
       return {
           usename: '',
       }
   },
   methods:{
       onSubmit(event) {
        if (this.username && this.username !== '') {
          bus.$emit('new-username', this.username)
       }
   }
  }
</script>

<style>

</style>