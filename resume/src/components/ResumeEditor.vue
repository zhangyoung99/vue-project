<template>
  <div id="resumeEditor">
    <nav>
      <ul>
        <li v-for="(item,index) in resume.config"
           :class="{active: item.field === selected}"
           @click="selected = item.field"
         >
         {{index}}
           <svg class="icon">
             <use :xlink:href="`#icon-${item.icon}`"></use>
           </svg>
         </li>
      </ul>
    </nav>
    <ul class="panels">
      <li v-for="item in resume.config" v-show="item.field ===selected">
       <div v-if="resume[item.field] instanceof Array" >
         <div class="subitem" v-for="subitem in resume[item.field]">
           <div class="resumeField" v-for="(value,key) in subitem">
              <label> {{key}} </label>
              <input type="text" :value="value">
            </div>
         </div>
       </div>
       <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
          <label>{{key}}</label>
          <input type="text" v-model="resume[item.field][key]">
       </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ResumeEditor',
  data() {
    return {
      selected: 'profile',
      resume: {
        config: [
          { field: 'profile', icon: 'id' },
          { field: 'work history', icon: 'work' },
          { field: 'education', icon: 'book' },
          { field: 'projects', icon: 'heart' },
          { field: 'awards', icon: 'cup' },
          { field: 'contacts', icon: 'phone' },
        ],
        profile: {
          name: '',
          city: '',
          title: ''
        },
        'work history': 
          [
            {company: 'souyute', content: '我的第二份工作是'},
            {company: 'SAE', content: '我的第一份工作是'},
          ],
        eduction: [],
        projects: [],
        awards: [],
        contacts: []
      }
    }
  }
}
</script>

<style scoped lang="less">
 #resumeEditor {
   background: #fff;
   box-shadow: 0 1px 3px 0 rgba(0,0,0,0.5);
   display: flex;
   overflow: auto;  
   nav {
     width: 80px;
     background: black;
     color: #fff;
     ul {
       list-style: none;
       li {
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 16px;
        margin-bottom: 16px;
        border: 1px solid #666;
        &:hover {
          background: #fff;
          color: #000;
        }
       }
     }
   }
   .panels {
     background: #fff;
     flex-grow: 1;
     li {
      padding:24px;
      margin-top: 24px;
     }
     .resumeField {
       label {
         display: block;
       }
       input[type=text] {
         width: 100%;
         height: 38px;
         border: 1px solid #ddd;
         box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.25);
         margin: 16px 0;
         padding: 0 8px;

       }
     }
   }
   svg.icon{
      width: 24px; 
      height: 24px;
    }
    ul {
      list-style: none;
    } 
 }
</style>