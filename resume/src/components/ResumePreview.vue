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
     <section data-name="projects" v-show="resume.projects">
       <h2>项目经验</h2>
       <ul>
         <li v-for="item in resume.projects">
           <h3>{{item.name}}</h3>
           <p v-show="item.content">{{item.content}}</p>
         </li>
       </ul>
     </section>
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
           <p v-show="item.major">{{item.major}} &nbsp;&nbsp;{{item.time}}</p>
         </li>
       </ul>
     </section> 
     <section data-name="award" v-show="resume.skill">
       <h2>个人技能</h2>
       <ul>
         <li v-for="item in resume.skill">
           <h3>{{item.name}}</h3>
           <p v-show="item.content">{{item.content}}</p>
         </li>
       </ul>
     </section> 
     <section data-name="contacts" v-show="resume.contacts">
       <h2>联系方式</h2>
       <ul>
         <li v-for="item in resume.contacts">
           <h3>{{item.contact}}</h3>
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

<style lang="less" scoped>
 #resumePreview {
   background: #fff;
   box-shadow: 0 1px 3px 0 rgba(0,0,0,0.5);
   padding: 10px 40px;
   line-height: 1.2;
   overflow: auto;
   * {
     box-sizing: border-box;
     font-weight: normal;
   }
   ul,li {
     list-style: none;
   }
   section {
     margin-top: 20px;
   }
   p {
     white-space: pre-line;
   }
   section {
     h2:first-child {
       background: #ddd;
       display: inline-block;
       padding: .2em;
       margin-bottom: 0.5em;
     }
   }
   section {
     li {
       h3{
         margin: 0.3em 0;
       }
     }
   }
   section[data-name="profile"]{
     h1 {
       margin: 0.1em 0;
       font-size: 4em;
     }
   }
 }
</style>