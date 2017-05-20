<template>
  <div id="topbar">
    <div class="wrapper">
       <span class="logo">Resumer</span>
       <div class="actions">
          <button class="btn btn-save">保存</button>
          <button class="btn btn-preview">预览</button>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar'
}
</script>

<style scoped lang="less">
 #topbar {
   background: #fff;
   box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
   .wrapper {
     min-width: 1024px;
     max-width: 1440px;
     margin: 0 auto;
     height: 64px;
   }
   .wrapper {
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 0 16px;
   }
   button {
     width: 72px;
     height: 32px;
     cursor: pointer;
     font-size: 18px;
     border: none;
     color: #222;
     &:hover {
       box-shadow: 1px 1px 1px rgba(0,0,0,0.5);
     }
     &.btn-save {
      background:#02af5f;
      color: #fff;
     }
   }

   .logo {
     font-size: 24px;
     color: #000;
  }
 }
</style>