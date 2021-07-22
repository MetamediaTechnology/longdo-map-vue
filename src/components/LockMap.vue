<template>
  <div class="ldmap-vue-lock-map" ref="container">
    <slot />
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
  mounted () {
    this.mapReady.then(() => {
      this.$parent.map.Ui.lockMap()
      if (this.$slots.default) {
        let slotContainer = this.$refs.container
        let oldButton = document.getElementsByClassName('ldmap_lock_button')[0]
        if (oldButton) {
          oldButton.parentNode.replaceChild(slotContainer, oldButton)
        } else {
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
