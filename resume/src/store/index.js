import Vuex from 'vuex'
import Vue from 'vue'

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
         name: '张某某',
         city: '深圳',
         title: '前端',
         birthday: '1989-06-24'
       },
       workExperience: [
         { company: 'SYT', content: '潮流前线科技有限公司'}
       ],
       education: [
         { school: '广东海洋大学', content: '机械设计制造及自动化' }
       ],
       projects: [
         { name: 'project A', content: '文字' },
         { name: 'project B', content: '文字' },
       ],
       awards: [
         { name: 'awards A', content: '文字' },
         { name: 'awards B', content: '文字' },
       ],
       contacts: [
         { contact: 'phone', content: '13812345678' },
         { contact: 'qq', content: '12345678' },
       ],
     }    
  },
  mutations: {
    switchTab (state, payload){
       state.selected = payload
    }
  }
})