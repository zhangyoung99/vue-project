<template>
    <div class="wrapper" v-show="visible">
        <div class="dialog">
          <header>
            <span>{{title}}</span>
            <span class="close" @click="close">x</span>
          </header>
          <section>
            <slot></slot>
          </section>
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

<style lang="scss" scoped>
    .wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0;
        background: hsla(0, 0%,0%,0.25);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .dialog {
        background: #e5e5e5;
        border: 1px solid #666;
        min-width: 20rem;
        min-height: 4rem;
        > header {
            height: 4rem;
            padding: 1rem;
            // line-height: 4rem;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #666; 
        }
        > main {
            padding: 1rem;
        }
    }
</style>