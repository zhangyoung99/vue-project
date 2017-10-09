<template>
 <div id="resumeEditor">
   <nav class="editorNav">
    <ol>
      <li v-for="(item,index) in resume.config"
       :class = "{active: item.field === selected}"
       @click="selected = item.field">
       <svg class="icon">
        <use :xlink:href="`#icon-${item.icon}`"></use>
       </svg>
      </li>
    </ol>
   </nav>
   <ol class="panels">
     <li v-for="item in resume.config" v-show="item.field === selected">
      <div v-if="resume[item.field] instanceof Array">
        <div class="subitem" v-for="subitem in resume[item.field]">
          <div class="resumeField" v-for="(value,key) in subitem">
            <label>{{key}}</label>
            <input type="text" :value="value">
          </div>
          <hr>
        </div>
      </div>
      <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
       <label>{{key}}</label>
       <input type="text" v-model="resume[item.field][key]">
      </div>
     </li>
   </ol>
 </div>

</template>

<script>

export default {
    name: 'resumeEditor',
    data(){
      return {
        selected: 'profile',
        resume:{
          config: [
            { field: 'profile', icon: 'id' },
            { field: 'work history', icon: 'work' },
            { field: 'education', icon: 'book' },
            { field: 'projects', icon: 'heart' },
            { field: 'awards', icon: 'cup' },
            { field: 'contacts', icon: 'phone' },
          ],
          profile:{
            name: '滴水',
            city: 'shenzhen',
            title: '前端工程师'
          },
          'work history': [
            {company: 'SAE',  content:'机械工程师'},
            {company: 'CXQX', content:'FE'}
          ],
          education: [
            {school: '怪兽大学',content: '狮吼功'}
          ],
          projects: [
            {projectA: '在线简历编辑器',content:'在线简历编辑器'},
            {projectB: '记事本应用',content: 'vue2.0+vuex实现的记事本应用，满足正常的记事本需求'}
          ],
          awards: [
            {awardsA:'多次获得再来一瓶奖励'},
            {awardsB: '多次获得周周乐彩票奖励'}
          ],
          contacts: [
            {tel: '136xxxxxxx'},
            {email: 'zhangyoung11@gmail.com'}
          ]
        }
      }
    }
}

</script>


<style lang="scss" scoped>
  #resumeEditor {
      // height: 80vh;
      background: #fff;
      box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
      display: flex;
      overflow: auto;
      .editorNav {
        width: 80px;
        background: #1f2126;
        color: #fff;
        li {
          display: flex;
          height: 40px;
          justify-content: center;
          align-items: center;
          margin-top: 16px;
          margin-bottom: 16px;
          &:hover {
            background: #fff;
            color: #000;
          }
        }
      }
      > .panels {
         flex-grow: 1;
         > li {
           padding: 20px;
         }
      }
      svg.icon{
        width: 24px;
        height: 24px;
      }
      ol {
        list-style: none;
      }
      .resumeField {
        > label {
          display: block;
        }
        input[type=text] {
          border: 1px solid #ddd;
          width: 100%;
          height:40px;
          padding:0 8px;
          margin: 16px 0;
        }
      }
      hr {
        border: none;
        border-top: 1px solid #ddd;
        margin: 24px 0;
      }
  }
</style>