import './style.css';
import Vue from 'vue';
import AV from 'leancloud-storage';

//初始化leancloud storage
var APP_ID = 'bfuA85gKiQID2XO0i91kAKDQ-gzGzoHsz';
var APP_KEY = '7IQoe2W5gHU20r2lb6YjeMjN';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var app = new Vue({
  el: '#app',
  data: {
    actionType: 'signUp',
    formData: {
      username: '',
      password: ''
    },
    currentUser: null,
    newToDo: '',
    todoList: []
  },
  created: function(){
    window.onbeforeunload = ()=>{
      let dataString = JSON.stringify(this.todoList) 
      window.localStorage.setItem('myTodos', dataString)
    }

    let oldDataString = window.localStorage.getItem('myTodos')
    let oldData = JSON.parse(oldDataString)
    this.todoList = oldData || []
    
    this.currentUser = this.getCurrentUser();    

  },  
  methods: {
    addToDo: function(){
        this.todoList.push({
            title: this.newToDo,
            createdAt: new Date(),
            done: false
        })
        this.newToDo = ''
    },
    removeToDo: function(todo){
      let idx = this.todoList.indexOf(todo)
      this.todoList.splice(idx,1)
    },
    signUp: function(){
      let user = new AV.User();
      user.setUsername('this.formData.username');
      user.setPassword('this.formData.password');
      user.signUp().then((loginedUser) => {
          this.currentUser =  this.getCurrentUser();
      }, function (error) { 
        alert('注册失败');   
      });      
    },
    login: function(){
        AV.User.logIn('this.formData.username', 'this.formData.password').then((loginedUser) => {
          this.currentUser =  this.getCurrentUser();
        }, function (error) {
          alert('登录失败');
        });
    },
    getCurrentUser: function(){
      let current = AV.User.current()
      if(current) {
          let {id,createdAt,attributes:{username}}= current  //解构赋值，从函数中返回3个值（最主要的3个属性值：id，createAt，attribute）
          return {id, username, createdAt}
      }else {
          return null
      }      
    },
    logout: function(){
      AV.User.logOut()
      this.currentUser = null
      window.location.reload()
    }
  }
}) 