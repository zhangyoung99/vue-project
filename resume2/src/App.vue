<template>
  <div class="page">
    <header>
      <Toolbar />
    </header>
    <section>
      <resumeEditor />
      <resumePreview />
    </section>
  </div>
</template>

<script>
  import 'normalize.css/normalize.css'
  import './assets/reset.css'

  import Toolbar from './components/Toolbar'
  import resumeEditor from './components/resumeEditor'
  import resumePreview from './components/resumePreview'
  import icons    from  './assets/icons'

  export default {
    name: 'app',
    data() {
      return {
        text: 'hello'
      }
    },
    components: {
      Toolbar,resumeEditor,resumePreview
    },
    created(){
     document.body.insertAdjacentHTML('afterbegin', icons) 
    }
  }
</script>

<style>
  .page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: #e5e5e5;
  }
  .page>section {
    min-width: 1024px;
    max-width: 1440px;
    margin-top: 16px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-self: center;
  }
  #resumeEditor {
    width: 35%;
    background: #444;
  }
  #resumePreview {
    width: 60%;
    background: #777;
  }
  svg.icon{
    height: 1em;
    width: 1em;
    fill: currentColor;
    vertical-align: -0.1em;
    font-size:16px;
  }
</style>
