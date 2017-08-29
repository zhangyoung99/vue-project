<template>
 <div id="app">
       <p>input repo name</p>
       <githubInput />
       <githubOutput />  
 </div>
</template>

<script>
import githubInput from './components/Input'
import githubOutput from './components/Output'

export default {
   name: 'App',
   data() {
       return { }
   },
   components: { githubInput, githubOutput }
}

</script>