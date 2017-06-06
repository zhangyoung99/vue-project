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

export default {
  name: 'app',
  components: {Toolbar, NoteList, Editor}
}
</script>

<style lang="less" scoped>
  #app {
    height: 100vh;
    // border: 1px solid #e5e5e5;
    .wrapper {
      min-width: 1024px;
      max-width: 1440px;
      display: flex;
      // margin: 0 auto;
      justify-content: center;
    }
  }
</style>
