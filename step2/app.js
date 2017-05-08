import './style.css';
import Vue from 'vue';

var app = new Vue({
  el: '#app',
  data: {
    newToDo: '',
    todoList: []
  },
  created: function(){
    window.onbeforeunload = ()=> {
      let dataString = JSON.stringify(this.todoList)
      window.localStorage.setItem('mytodos',dataString)  //保存数据
    }
    let oldDataString = window.localStorage.getItem('mytodos') //获取数据
    let oldData = JSON.parse(oldDataString)
    this.todoList = oldData || []
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
    }
  }
}) 