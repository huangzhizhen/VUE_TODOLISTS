<template>
  <div class="todo-item-wrap" :class="todo.complete ? 'complete' : ''">
    <input type="checkbox" class="cb" v-model="todo.complete" />
    <label>{{ todo.content }}</label>
    <button @click="deleteItem"></button>
  </div>
</template>
<script>
  //循环的是todoList里面的数组对象
  //父组件中通过:todo={{item}} 传递
  //子组件中通过 props：todo 接收
  export default {
    data() {
      return {
        complete: false,
      }
    },
    props: {
      todo: Object,
    },
    methods: {
      //向父组件传递一个函数，且带参数
      //在父组件中使用 @del=“定义在父组件中的方法” --接收--具体实现在父组件中
      //实质子组件起到传递特定id参数给父祖，然后父组件对特定id元素进行删除操作
      deleteItem() {
        this.$emit("del", this.todo.id)
      },
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'
  @import '~styles/mixins.styl'

  .todo-item-wrap
    padding: 10px
    display: flex
    justify-content: space-between
    border-top: 1px solid rgba(0, 0, 0, 0.1)
    align-content: center

    &.complete
      label
        text-decoration: line-through
        color: #d9d9d9

    &:hover
      button:after
        content: 'x'
        font-size: 26px
        color: $lightred

    input
      width: 30px
      height: 20px
      color: #d9d9d9
      text-align: center
      CleardeafutStyle()

      &:after
        content: url('~images/unChecked.svg')

      &:checked:after
        content: url('~images/checked.svg')

    label
      flex: 1
      font-size: 16px
      line-height: 30px
      padding-left: 10px
      color: #666
      transition: color 0.3s

    button
      width: 40px
      cursor: pointer
      background-color: transparent
      CleardeafutStyle()
</style>