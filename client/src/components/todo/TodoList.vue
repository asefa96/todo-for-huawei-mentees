<template>
  <div class="card  min-h-100">
    <div v-for="todo in $store.state.TodoModule.todos" :key="todo.key">
      <TodoItem :todo="todo" :id="todo.id" />
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: 'TodoList',
  props: {
    msg: String
  },
  components: { TodoItem }
}
</script>
