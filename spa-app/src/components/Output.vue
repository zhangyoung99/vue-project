<template>
    <div v-if="githubData[currentUsername]">
    <h4>{{ githubData[currentUsername].name }}</h4>
    <p>{{ githubData[currentUsername].company }}</p>
    <p>Number of repos: {{ githubData[currentUsername].public_repos }}</p>
    </div>
    <div v-else>
      Below are the results for {{ currentUsername }}
      <githubUserData :data="githubData[currentUsername]"></githubUserData>
    </div>
</template>

<script>
import bus from '../bus'
import githubUserData from './githubData.vue'

export default {
    name: 'githubOutput',
    data() {
        return {
            currentUsename: null,
            githubData: {}
        }
    },
    components:{githubUserData},
    created() {
        bus.$on('new-username',this.onUsernameChange)
    },
    destroyed() {
        bus.$off('new-username',this.onUsernameChange)
    },
    methods: {
        fetchGithubData(name) {
          // 如果我们已经有了该用户数据，就不再请求
          if (this.githubData.hasOwnProperty(name)) {
              return
          }
        
          const url = `https://api.github.com/users/${name}`
          fetch(url)
            .then(r => r.json())
            .then(data => {
            // 在这里我们需要更新 githubData 对象
            Vue.set(this.githubData, name, data)
            })
        },
        onUsernameChange() {
            this.currentUsername = name
            this.fetchGithubData(name)
        }
    }
}
</script>

<style>

</style>