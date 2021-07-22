<template>
  <div :class="position">
    <slot />
  </div>
</template>

<script>
import childDefault from '../mixins/childDefault'

export default {
  name: 'CustomUi',
  mixins: [childDefault],
  props: {
    vertical: {
      type: String,
      default: 'top'
    },
    horizontal: {
      type: String,
      default: 'left'
    },
    custom: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    position () {
      if (this.custom) {
        return
      }
      const center = this.vertical === 'center' && this.horizontal === 'center'
      const defaultV = this.vertical !== 'top' && this.vertical !== 'center' && this.vertical !== 'bottom'
      return {
        'ldmap-vue-custom-ui': true,
        'ldmap-vue-custom-ui-top': this.vertical === 'top' || defaultV,
        'ldmap-vue-custom-ui-bottom': this.vertical === 'bottom',
        'ldmap-vue-custom-ui-right': this.horizontal === 'right',
        'ldmap-vue-custom-ui-left': this.horizontal === 'left',
        'ldmap-vue-custom-ui-center-y': this.vertical === 'center' && !center,
        'ldmap-vue-custom-ui-center-x': this.horizontal === 'center' && !center,
        'ldmap-vue-custom-ui-center': center
      }
    }
  }
}
</script>

<style scoped>
.ldmap-vue-custom-ui {
  position: absolute;
}
.ldmap-vue-custom-ui-top {
  top: 0;
}
.ldmap-vue-custom-ui-bottom {
  bottom: 0;
}
.ldmap-vue-custom-ui-right {
  right: 0;
}
.ldmap-vue-custom-ui-left {
  left: 0;
}
.ldmap-vue-custom-ui-center-x {
  left: 50%;
  transform: translateX(-50%);
}
.ldmap-vue-custom-ui-center-y {
  top: 50%;
  transform: translateY(-50%);
}
.ldmap-vue-custom-ui-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
