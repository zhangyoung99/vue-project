<template>
  <div class="wrap" v-show="visible">
     <div class="dialog">
       <div class="header">{{title}}<span class="close" @click = "close">X</span></div>
       <main>
         <slot></slot>
       </main>
     </div>
  </div>
</template>

<script>
export default {
    name: 'myDialog',
    props: ['title','visible'],
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style lang="less" scoped>
   .wrap {
       position: fixed;
       top: 0;
       left: 0;
       right: 0;
       bottom: 0;
       margin: auto;
       display: flex;
       background: rgba(0,0,0,0.25);
       width: 500px;
       height: 250px;
       border: 1px solid #666;
   }
   .dialog {
      width: 100%;
      background: #e5e5e5;
     
      .header {
        width: 100%;
        display: flex;
        padding: 16px;
        border-bottom: 1px solid #666;
        .close {
            position: absolute;
            right: 10px;
            cursor: pointer;
        } 
     }
     main {
        padding: 16px;
    }
  }
</style>
