<template>
  <div id="app">
    <div class="wrapper">
      <Toolbar/>
      <NoteList/>
      <Editor/>  
    </div>
  </div>
</template>

<script>
import 'normalize.css/normalize.css'
import './assets/reset.css'

import Toolbar from  './components/Toolbar'
import NoteList from './components/NoteList'
import Editor from   './components/Editor'


import store from './store/store'

export default {
  name: 'app',
  store,  // inject store to all children
  components: {Toolbar, NoteList, Editor}
}
</script>

<style lang="less">
  #app {
    height: 100vh;
    .wrapper {
      min-width: 1024px;
      max-width: 1440px;
      display: flex;
      justify-content: center;
    }
  }
</style>
