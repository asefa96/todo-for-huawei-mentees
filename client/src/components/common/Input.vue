<template>
  <div class="row">
    <span class="col-2-xs">
      <label>{{ label }}</label>
    </span>
    <span class="col-9-xs">
      <input
        :value="value"
        @input="input($event)"
        @keypress.enter="$emit('enterpressed')"
      />
    </span>
    <!-- <p v-if="error" class="text--red">ERROR !</p> -->
  </div>
</template>

<script>
export default {
  name: 'v-input',
  props: {
    value: {
      type: String
    },
    label: {
      type: String
    }
  },
  data () {
    return {
      error: ''
    }
  },
  methods: {
    validation (event) {
      if (event.target.value) {
        return true
      }
      return false
    },
    input (event) {
      if (this.validation(event)) {
        this.$emit('input', event.target.value)
      } else {
        this.error = 'Error!'
      }
    }
  }
}
</script>
