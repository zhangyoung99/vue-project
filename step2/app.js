import './style.css'
import Vue from 'vue'

var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todoList: []
  },
  created() {
    window.onbeforeunload = ()=>{
      let dataString = JSON.stringify(this.todoList) 
      window.localStorage.setItem('myTodos', dataString) 
    }

    let oldDataString = window.localStorage.getItem('myTodos')
    let oldData = JSON.parse(oldDataString)
    this.todoList = oldData || []
  },
  methods: {
    addToDo() {
      this.todoList.push({
        title: this.newTodo,
        createdAt: new Date(),
        done: false
      })
      this.newTodo = '' //清空input.value
     },
    removeToDo(todo) {
      let index = this.todoList.indexOf(todo)
      this.todoList.splice(index,1)
     }
  }
}) 