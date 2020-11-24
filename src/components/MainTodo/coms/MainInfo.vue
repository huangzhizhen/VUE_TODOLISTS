<template>
  <div class="info-wrap">
    <span class="sum">{{ total }} items</span>
    <div class="alist">
      <a
        v-for="(item, index) of states"
        :key="index"
        :class="state == item ? 'active' : ''"
        @click="toggleState(item)"
        >{{ item }}</a
      >
    </div>
    <button @click="clearCompleted">Clear Complete</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        states: ["all", "active", "completed"],
        state: "all",
      }
    },
    props: {
      total: Number,
    },
    methods: {
      clearCompleted() {
        this.$emit("clearCompleted")
      },
      toggleState(state) {
        this.state = state
        this.$emit("toggleState", state)
      },
    },
  }
</script>
<style lang="stylus" scoped>
  @import '~styles/theme.styl'
  @import '~styles/mixins.styl'

  .info-wrap
    display: flex
    justify-content: space-between
    font-size: 16px
    font-weight: 400
    padding: 15px 15px 5px
    border-top: 1px solid #ccc

    span
      color: $lightred
      padding: 7px 10px
      border: 1px solid $lightred
      border-radius: 5px

    .alist
      display: flex
      justify-content: center
      align-item: center

      a
        border: 1px solid $lightred
        margin-right: 10px
        padding: 7px 10px
        text-align: center
        border-radius: 5px
        color: #666
        cursor: pointer

        &.active
          background-color: $lightred
          color: white

    button
      background-color: $green
      CleardeafutStyle()
      color: white
      padding: 10px
      font-size: 16px
      border-radius: 5px
      cursor: pointer
</style>