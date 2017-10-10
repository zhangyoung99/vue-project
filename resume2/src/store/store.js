import Vue from 'vue'
import Vuex from 'vuex'

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
            name: '滴水',
            city: 'shenzhen',
            title: '前端工程师'
          },
          workExperience: [
            {company: 'SAE',  content:'机械工程师'},
            {company: 'CLQX', content:'FE'}
          ],
          education: [
            {school: '怪兽大学',content: '狮吼功'}
          ],
          projects: [
            {name: '在线简历编辑器',content:'在线简历编辑器'},
            {name: '记事本应用',content: 'vue2.0+vuex实现的记事本应用，满足正常的记事本需求'}
          ],
          awards: [
            {name:'多次获得再来一瓶奖励'},
            {name: '多次获得周周乐彩票奖励'}
          ],
          contacts: [
            {tel: '136xxxxxxx'},
            {email: 'zhangyoung11@gmail.com'}
          ]
        }
    },
    mutations: {
        switchTab (state,field) {
            state.selected = field
        }
    }
})