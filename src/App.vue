<template>
  <div>
    <main-header />
    <main-todo />
    <main-footer></main-footer>
  </div>
</template>
<script>
  //import img from './assets/images/bg.jpg'
  /*import './assets/images/unChecked.svg'
        import './assets/styles/test.css'*/
  import "./assets/styles/global.styl"
  import MainHeader from "./components/MainHeader.vue"
  import MainTodo from "./components/MainTodo/MainTodo.vue"
  import MainFooter from "./components/MainFooter.vue"
  export default {
    name: "App", //组件的名称
    components: {
      MainHeader: MainHeader,
      MainTodo,
      MainFooter,
    },
  }
</script>

<style scoped>
  /*h1 {
          color: red;
        }
        .list ul li:nth-child(2n) {
          color: green;
        }*/
</style>