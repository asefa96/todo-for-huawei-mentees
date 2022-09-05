<template>
  <div id="app">
    <Todo />
    <Modal />
  </div>
</template>

<script>
import Todo from './components/todo'
import Modal from './components/modal/Modal.vue'

export default {
  name: 'App',
  components: {
    Todo,
    Modal
  },
  data: function () {
    return {
      showModal: true
    }
  }
}
</script>

<style lang="scss">
@import "./scss";
</style>
