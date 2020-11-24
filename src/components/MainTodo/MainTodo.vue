<template>
  <div class="main-todo">
    <input
      type="text"
      class="todo-text"
      placeholder="what to do?"
      autofocus
      v-model="content"
      @keyup.enter="addTodo"
    />
    <main-item
      v-for="(item, index) in filterData"
      :key="index"
      :todo="item"
      @del="deleteItem"
    ></main-item>

    <main-info
      :total="total"
      @clearCompleted="handleClear"
      @toggleState="handleState"
    ></main-info>

    <main-footer></main-footer>
  </div>
</template>
<script>
  import MainItem from "./coms/MainItem.vue"
  import MainInfo from "./coms/MainInfo.vue"
  let id = 0
  export default {
    data() {
      return {
        todoData: [], //清单数组，数组的元素是对象类型（id、content、complete）
        content: "",
        total: 0,
        filter: "all",
      }
    },
    watch: {
      todoData: {
        deep: true,
        handler() {
          this.total = this.todoData.filter((v) => v.complete == false).length
        },
      },
    },
    computed: {
      filterData() {
        switch (this.filter) {
          case "all":
            return this.todoData
            break
          case "active":
            return this.todoData.filter((v) => v.complete == false)
            break
          case "completed":
            return this.todoData.filter((v) => v.complete == true)
            break
        }
      },
    },
    methods: {
      addTodo() {
        if (this.content === "") return
        this.todoData.unshift({
          id: id++,
          content: this.content,
          complete: false,
        })
        this.content = ""
      },
      deleteItem(id) {
        this.todoData.splice(
          this.todoData.findIndex((i, v) => {
            i === id
          }),
          1
        )
      },
      //清除以及完成
      handleClear() {
        this.todoData = this.todoData.filter((item) => item.complete === false)
      },
      //控制状态
      handleState(state) {
        this.filter = state
      },
    },
    components: {
      MainItem,
      MainInfo,
    },
  }
</script>
<style lang="stylus" scoped>
  .main-todo
    margin: 0 auto
    width: 600px
    background-color: #fff
    box-shadow: 0 0 5px #666

    .todo-text
      padding: 20px
      width: 100%
      border: none
      font-size: 22px
      color: #666
      font-weight: none
      outline: none
      box-sizing: border-box
</style>