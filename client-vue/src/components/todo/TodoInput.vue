<template>
  <div>
    <button
    class="btn-primary w-full text-white br-xs p-1 mb-1"
    @click="addTodo">+ New Todo</button>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  components: {
  },
  props: {
    msg: String
  },
  data () {
    return {
      todo: {
        title: '',
        id: null,
        status: ''
      }
    }
  },
  methods: {
    addTodo () {
      this.$modal.open({
        component: () => import('./TodoInputForm.vue'),
        props: { mode: 'add' },
        title: 'New Todo'
      })
    }
  }
}
</script>
