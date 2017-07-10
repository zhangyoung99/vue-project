<template>
  <div id="app">
      <Toolbar/>
      <NoteList/>
      <Editor/>  
  </div>
</template>

<script>
import 'normalize.css/normalize.css'
import './assets/reset.css'

import Toolbar from  './components/Toolbar'
import NoteList from './components/NoteList'
import Editor from   './components/Editor'



export default {
  name: 'app', 
  components: {Toolbar, NoteList, Editor}
}
</script>

<style lang="less">
  #app {
    height: 100vh;
    min-width: 1024px;
    max-width: 1440px;
    display: flex;
    justify-content: center;
  }
</style>
