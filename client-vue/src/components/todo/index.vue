<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container w-500 mt-5">
    <TodoInput />
    <TodoList />
  </div>
</template>

<script>
import TodoInput from './TodoInput.vue'
import TodoList from './TodoList.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Todo',
  components: { TodoInput, TodoList }
}
</script>
