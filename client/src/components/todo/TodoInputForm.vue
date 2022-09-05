<template>
  <div>
    <!-- Content -->
    <div class="row gap-1">
      <div class="col-12-xs">
        <Input v-model="todo.title" label="Title: " />
      </div>
      <div class="col-12-xs">
        <Input v-model="todo.detail" label="Detail: " />
      </div>
    </div>
    <!-- Footer -->
    <div class="row mt-2 justify-flex-end gap-1">
      <button class="btn br-none" @click="close">CANCEL</button>
      <button class="btn-primary br-none text-white " @click="operationTodo">
        {{ mode.toUpperCase() }}
      </button>
    </div>
  </div>
</template>

<script>
import Input from '@/components/common/Input.vue'
import TodoService from '@/services/Todo.service'
import AppUtil from '@/utils'
import * as uuid from 'uuid'

export default {
  name: 'TodoInput',
  components: {
    Input
  },
  props: ['mode', 'id'],
  data () {
    return {
      todo: {
        title: '',
        detail: ''
      }
    }
  },
  mounted () {
    if (this.mode === 'edit') {
      this.todo = { ...TodoService.getTodoById({ id: this.id }) }
    }
  },
  methods: {
    close () {
      AppUtil.clearObject(this.todo)
      this.$modal.close()
    },
    operationTodo () {
      if (this.mode === 'edit') {
        console.log('todo', this.todo)
        TodoService.updateTodo({ todo: this.todo })
      }

      if (this.mode === 'add') {
        TodoService.addTodo({
          todo: this.todo,
          date: new Date().toDateString(),
          id: uuid.v4()
        })
      }

      this.close()
    }
  }
}
</script>
