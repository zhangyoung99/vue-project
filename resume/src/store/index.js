import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from "object-path"

Vue.use(Vuex)

export default new Vuex.Store({ 
  state: {
    selected: 'profile',
    resume: {
       config: [
         { field: 'profile', icon: 'id' },
         { field: 'workExperience', icon: 'work' },
         { field: 'education', icon: 'book' },
         { field: 'projects', icon: 'heart' },
         { field: 'awards', icon: 'cup' },
         { field: 'contacts', icon: 'phone' },
       ],
       profile: {
         name: '张洋源',
         city: '深圳',
         title: '前端',
         birthday: '1989-06-24'
       },
       workExperience: [
         { company: '东莞潮流前线信息科技有限公司', content: 
           '1. 公司官网改版。在这期间，作为前端开发人员，参与了3个版块的页面改版，应用html、css3、less等技术完成静态页面的重构&页面性能优化工作，协助java后端完成了线上环境发布更新，后期跟进正式环境的前端bug修复工作，官网正常运行。'
         }
       ],
       education: [
         { school: '广东海洋大学', 
           major: '机械设计制造及自动化', 
           time: '2008/09-2012/06'
          }
       ],
       projects: [
         { name: '公司官网改版', content: '公司官网的改版项目。历时1个半月完成改版发布。在这期间，作为前端开发，参与了3个版块的页面改版，应用html、css3等技术完成页面的重构&页面性能优化工作，协助java后端完成了线上环境发布更新，后期跟进正式环境的bug修复工作，官网正常运行。' },
         { name: 'todo小应用-vue', content: '用vue.js实现的todo小应用，包含新增&删除待办列表，标记状态等功能，有简易的实用性。此小应用用到vue.js框架的基本知识：事件监听、表单输入指令、for遍历指令等。对使用vue.js实战积累了一些经验。除了使用了vue.js框架，还简单使用了构建工具webpack实现了代码配置以及localstorage存储技术的简单使用。' },
       ],
       awards: [
         { name: '英语水平', content: 'CET6' }
       ],
       contacts: [
         { contact: 'phone', content: '13669850479' },
         { contact: 'email', content: 'zhangyangyuan0624@126.com' },
       ],
     }    
  },
  mutations: {
    switchTab (state, payload){
       state.selected = payload
    },
    updateResume(state,{path,value}) {
      objectPath.set(state.resume, path, value)
    }
  }
})