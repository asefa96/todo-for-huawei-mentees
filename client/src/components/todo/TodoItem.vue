<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="row p-2 border-b-1">
    <div class="col-6-xs">
      <div @click="toggleStatus" :class="todo.status == 'done' ? 'text--green' : ''">
        {{ todo.title }}
      </div>
      <div> {{ todo.date }} </div>
    </div>
    <div class="col-6-xs d-flex justify-flex-end gap-1">
      <button class="btn-error text-white br-none" @click="deleteTodo">Delete</button>
      <button class="btn-primary text-white br-none" @click="editDialog">Edit</button>
    </div>
  </div>
</template>

<script>
import TodoService from '@/services/Todo.service'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'TodoItem',
  props: {
    todo: Object,
    id: null
  },
  methods: {
    deleteTodo () {
      this.$modal.open({
        confirm: () => TodoService.deleteTodo({ id: this.id }),
        title: 'Delete Todo',
        content: 'Are you sure delete the todo?',
        confirmText: 'DELETE'
      })
    },
    editDialog () {
      this.$modal.open({
        component: () => import('./TodoInputForm.vue'),
        title: 'Edit Todo',
        props: { mode: 'edit', id: this.id },
        confirmText: 'DELETE'
      })
    },
    toggleStatus () {
      let status

      if (!this.todo.status) {
        status = 'done'
      }
      if (this.todo.status === 'done') {
        status = ''
      }

      TodoService.updateTodo({ todo: { ...this.todo, status: status } })
    }
  }
}
</script>
