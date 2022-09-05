<template>
  <transition name="modal" v-if="show">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"> {{ modalConfig.title }} </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <span v-if="!component"> {{modalConfig.content }} </span>
              <component :is="component" v-bind="modalConfig.props"></component>
            </slot>
          </div>

          <div class="modal-footer" v-if="!component">
            <slot name="footer">
              <button class="modal-default-button" @click="confirm">
                {{ modalConfig.confirmText }}
              </button>
              <button class="modal-default-button" @click="close">
                {{ modalConfig.cancelText }}
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Modal',
  props: {
    msg: String
  },
  data: function () {
    return {
      show: false,
      modalConfig: {
        title: 'Header',
        content: 'Content',
        confirmText: 'Confirm',
        cancelText: 'Cancel',
        props: {}
      },
      component: () => {}
    }
  },
  created () {
    const modal = {
      open: this.open,
      close: this.close,
      confirm: this.confirm
    }
    Vue.prototype.$modal = modal
  },
  methods: {
    open ({ confirm, title, content, confirmText, cancelText, component, props }) {
      this.show = true
      this.modalConfig.title = title ?? this.modalConfig.title
      this.modalConfig.content = content ?? this.modalConfig.content
      this.modalConfig.confirmText = confirmText ?? this.modalConfig.confirmText
      this.modalConfig.cancelText = cancelText ?? this.modalConfig.cancelText
      this.component = component
      this.modalConfig.props = props
      this.confirmResolver = confirm
    },
    close () {
      this.show = false
    },
    confirm () {
      this.confirmResolver()
      this.show = false
    },
    confirmResolver () {}
  }
}
</script>
