<template>
  <div>
    <Topbar/>
    <ResumeEditor/>
    <Resumepreview/>    
  </div>
</template>

<script>
import './assets/reset.css'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'
import Topbar from './components/Topbar'

export default {
  name: 'app',
  data: function() {
    return {
      text: '你好'
    }
  },
  components: {Topbar, ResumeEditor, ResumePreview}
}
</script>

<style>

</style>
