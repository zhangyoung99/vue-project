<template>
  <div id="resumePreview">
    <section data-name="profile" v-show="resume.profile">
       <h1>
         {{resume.profile.name}}
       </h1>
       <h2>{{resume.profile.title}}</h2>
       <p>
         <small>{{resume.profile.city}}</small>
         <small>{{resume.profile.birthday}}</small>
       </p>
     </section>
     <hr>
     <section data-name="workExperience" v-show="resume.workExperience">
        <h2>
          工作经历
        </h2>
        <ul>
          <li v-for="item in resume.workExperience">
            <h3>{{item.company}}</h3>
            <p v-show="item.content">{{item.content}}</p>
          </li>
        </ul>
     </section> 

     <section data-name="education" v-show="resume.education">
       <h2>教育背景</h2>
       <ul>
         <li v-for="item in resume.education">
           <h3>{{item.school}}</h3>
           <p v-show="item.content">{{item.content}}</p>
         </li>
       </ul>
     </section>  
  </div>
</template>

<script>
export default {
  name: 'ResumePreview',
  computed: {
    resume() {
      return this.$store.state.resume
    }
  }
}
</script>

<style lang="less">
 #resumePreview {
   background: #fff;
   box-shadow: 0 1px 3px 0 rgba(0,0,0,0.5);
 }
</style>