<template>
  <div v-if="display">
    <slot name="button" />
  </div>
</template>

<script>
import childDefault from '../mixins/childDefault'

export default {
  name: 'LockMap',
  mixins: [childDefault],
  props: {
    lock: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      display: true
    }
  },
  mounted () {
    this.mapReady.then(() => {
      this.$parent.map.Ui.lockMap()
      if (this.$slots.button && this.$slots.button[0] && this.$slots.button[0].elm) {
        let newButton = this.$slots.button[0].elm
        let oldButton = document.getElementsByClassName('ldmap_lock_button')[0]
        if (oldButton) {
          oldButton.parentNode.replaceChild(newButton, oldButton)
        } else {
          this.display = false
          console.warn('Longdo Map Vue: lockMap can be called only once')
        }
      }
    })
  },
  methods: {
    lockOverlay (lock) {
      let lockOverlay = document.getElementsByClassName('ldmap_lock_overlay')[0]
      if (lockOverlay) {
        lockOverlay.style.display = lock ? 'block' : 'none'
      }
    }
  },
  watch: {
    lock (n) {
      this.lockOverlay(n)
    }
  }
}
</script>
