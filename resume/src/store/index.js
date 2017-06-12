import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from "object-path"

Vue.use(Vuex)

export default new Vuex.Store({ 
  state: {
    selected: 'profile',
    user: {
       id: '',
       username: ''
    },
    resume: {
       config: [
         { field: 'profile', icon: 'id' },
         { field: 'workExperience', icon: 'work' },
         { field: 'education', icon: 'book' },
         { field: 'projects', icon: 'heart' },
         { field: 'skill', icon: 'cup' },
         { field: 'contacts', icon: 'phone' },
       ],
       profile: {
         name: '张洋源',
         city: '深圳',
         title: '求职意向：前端开发',
         birthday: ' 男 28岁'
       },
       workExperience: [
         { company: '东莞潮流前线信息科技有限公司', content: 
           '1. PC端官网维护工作,主要负责官网前端页面重构和常见页面效果实现。公司官网改版。在这期间，作为前端开发人员，参与了3个版块的页面改版，应用HTML、CSS3、LESS等技术完成静态页面的重构&页面性能优化工作，协助Java后端完成了线上环境发布更新，后期跟进正式环境的前端bug修复工作。\n \n2. APP信息管理系统后台前端页面维护工作。协助Java后端完成了报表系统平台销售数据弹框展示页面优化，参与产品新增需求的前端静态页面编写，完成既定产品需求。'
         }
       ],
       education: [
         { school: '广东海洋大学', 
           major: '机械设计制造及自动化-本科', 
           time: '2008/09-2012/06'
          }
       ],
       projects: [
         { name: '1.在线简历编辑器', content: '采用 vue-cli + vue2.x + vuex技术实现。实现了在线简历的编辑和同步预览功能,vuex实现编辑与预览的数据同源管理，数据单向绑定 '},
         { name: '2.todo小应用-vue', content: '用vue.js实现的todo小应用，包含新增&删除待办列表，标记状态等功能，有简易的实用性。此小应用运用了vue.js框架的基础API，对使用vue.js实战积累了一些经验。同时简单使用了构建工具webpack实现了代码配置以及localstorage存储技术的简单使用。\n ' },
         { name: '3.公司官网改版', content: '公司官网的改版项目。历时1个半月完成改版发布。在这期间，作为前端开发，参与了4个版块的页面改版，应用HTML、CSS3等技术完成页面的重构&页面性能优化工作，协助Java后端完成了jsp页面线上环境发布更新，后期跟进正式环境的bug修复工作，官网正常运行。' },

       ],
       skill: [
         { name: '专业技能', content: '1. 掌握HTML&CSS3，能用HTML&CSS3实现常见页面布局，熟练使用PS切图，使用预编译工具LESS/SASS。\n 2.掌握JavaScript基本语法的使用，包括了解ES6常见语法使用。\n 3.掌握Bootstrap框架的组件插件使用，能实现响应式布局页面，能用jQuery库实现页面交互效果。\n 4.熟悉HTTP协议基础知识，使用Ajax方法实现数据请求。\n5. 对前端MVVM框架Vue.js有一定的实践经验，使用过vue-cli、vuex搭建项目，实现简单的小项目，如todo小应用、在线简历编辑器。\n 6. 会使用前端构建Webpack工具，了解其常用配置选项。' }
       ],
       contacts: [
         { contact: 'phone', content: '13669850479' },
         { contact: 'email', content: 'zhangyangyuan0624@126.com' },
       ],
     }    
  },
  mutations: {
    initState(state,playload) {
      Object.assign(state,playload)
    },
    switchTab(state, payload) {
       state.selected = payload
       localStorage.setItem('state',JSON.stringify('state'))
    },
    updateResume(state, {path, value}) {
      objectPath.set(state.resume, path, value)
      localStorage.setItem('state',JSON.stringify('state'))
    },
    setUser(state, payload) {
      Object.assign(state.user, payload)
      console.log(state.user)
    }
  }
})