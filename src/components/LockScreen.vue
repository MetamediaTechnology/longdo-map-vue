<template>
  <div
    v-show="lockScreenReady"
    :class="['ldmap-vue-lock-screen', { 'ldmap-vue-lock-screen-unlock': !value }]"
  >
    <template v-if="mode === 'button' && !hideButton">
      <div class="ldmap-vue-lock-screen-button-container">
        <slot name="button" v-if="hasButtonSlot"></slot>
        <button
          v-else
          @click="lockMap(!value)"
          class="ldmap-vue-lock-screen-button"
        >
          {{ value ? unlockMessageText : lockMessage }}
        </button>
      </div>
    </template>
    <div
      v-else-if="mode === 'touch'"
      class="ldmap-vue-lock-screen-touch"
      ref="touchArea"
      @wheel="wheelEvent"
      @touchstart="touchStartEvent"
      @touchmove="touchMoveEvent"
      @touchend="touchEndEvent"
    >
      <div class="ldmap-vue-lock-screen-touch-message">
        {{ unlockMessageText }}
      </div>
    </div>
  </div>
</template>

<script>
import childDefault from './../mixins/childDefault'

export default {
  name: 'LockScreen',
  mixins: [childDefault],
  props: {
    value: {
      type: Boolean,
      default: true
    },
    mode: {
      type: String,
      default: 'button'
    },
    lockMessage: {
      type: String,
      default: 'Lock'
    },
    unlockMessage: {
      type: String,
      default: undefined
    },
    unlockMessageKeyboard: {
      type: String,
      default: 'Press and hold Ctrl to move the map'
    },
    hideButton: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      lockScreenReady: false,
      touchModeReady: false,
      unlockMessageText: '',
      wheelTimeout: undefined,
    }
  },
  computed: {
    hasButtonSlot() {
      return this.$slots.button
    }
  },
  mounted () {
    this.mapReady.then(() => {
      this.lockScreenReady = true
      switch (this.mode) {
        case 'button':
          this.setButtonMode()
          break
        case 'touch':
          this.setTouchMode()
          break
      }
    })
  },
  // destroyed () {
  //   this.$parent.map.Overlays.remove(this.marker)
  // },
  methods: {
    setButtonMode () {
      this.unlockMessageText = this.unlockMessage === undefined ? 'Unlock' : this.unlockMessage
    },
    keyDownEvent (e) {
      if (e.key === 'Control') {
        this.lockMap(false)
      }
    },
    keyUpEvent (e) {
      if (e.key === 'Control') {
        this.lockMap(true)
      }
    },
    wheelEvent () {
      if (this.mode !== 'touch') return
      this.unlockMessageText = this.unlockMessageKeyboard
      if (!this.wheelTimeout && this.$refs.touchArea) {
        this.$refs.touchArea.classList.add('ldmap-vue-lock-screen-touch-active')
        this.wheelTimeout = setTimeout(() => {
          this.$refs.touchArea.classList.remove('ldmap-vue-lock-screen-touch-active')
          this.wheelTimeout = undefined
        }, 1000)
      }
    },
    setKeyboardMode () {
      window.addEventListener('keydown', this.keyDownEvent)
      window.addEventListener('keyup', this.keyUpEvent)
    },
    touchStartEvent (e) {
      this.unlockMessageText = this.unlockMessage === undefined ? 'Use two fingers to move the map' : this.unlockMessage
      if (e.touches.length > 0) {
        this.lockMap(false)
        this.$refs.touchArea.classList.add('ldmap-vue-lock-screen-touch-active')
      }
    },
    touchMoveEvent (e) {
      if (e.touches.length > 1) {
        this.$refs.touchArea.classList.remove('ldmap-vue-lock-screen-touch-active')
      }
    },
    touchEndEvent () {
      this.lockMap(true)
      this.$refs.touchArea.classList.remove('ldmap-vue-lock-screen-touch-active')
    },
    setTouchMode () {
      // this.$refs.touchArea.addEventListener('touchstart', (e) => {
      //   this.unlockMessageText = this.unlockMessage === undefined ? 'Use two fingers to move the map' : this.unlockMessage
      //   if (e.touches.length > 0) {
      //     this.lockMap(false)
      //     this.$refs.touchArea.classList.add('ldmap-vue-lock-screen-touch-active')
      //   }
      // })
      // this.$refs.touchArea.addEventListener('touchmove', (e) => {
      //   if (e.touches.length > 1) {
      //     this.$refs.touchArea.classList.remove('ldmap-vue-lock-screen-touch-active')
      //   }
      // })
      // this.$refs.touchArea.addEventListener('touchend', () => {
      //   this.lockMap(true)
      //   this.$refs.touchArea.classList.remove('ldmap-vue-lock-screen-touch-active')
      // })
      this.setKeyboardMode()
      this.touchModeReady = true
    },
    clearTouchModeEvent () {
      window.removeEventListener('keydown', this.keyDownEvent)
      window.removeEventListener('keyup', this.keyUpEvent)
      this.touchModeReady = false
    },
    lockMap (lock) {
      this.$emit('input', lock)
    }
  },
  watch: {
    mode (n) {
      this.unlockMessageText = ''
      if (n === 'touch' && !this.touchModeReady) {
        this.$nextTick(() => {
          this.setTouchMode()
        })
      } else if (n === 'button') {
        this.clearTouchModeEvent()
        this.setButtonMode()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ldmap-vue-lock-screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* display: flex;
  justify-content: flex-start;
  align-items: flex-end; */
}
.ldmap-vue-lock-screen-unlock {
  pointer-events: none;
}
.ldmap-vue-lock-screen-button-container {
  display: inline-block;
  pointer-events: auto;
}
.ldmap-vue-lock-screen-button {
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  background-color: #2a5082;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  border: 0;
  border-radius: .25rem;
  margin: 0 0 1rem 1rem;
  padding: .5rem 1rem .5rem 1rem;
  cursor: pointer;
  opacity: 0.05;
  box-shadow: 2px 3px 4px rgba(0,0,0,.2);
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}
.ldmap-vue-lock-screen:hover .ldmap-vue-lock-screen-button {
  opacity: 1;
}
.ldmap-vue-lock-screen-touch {
  height: 100%;
  width: 100%;
  overflow: hidden;
  opacity: 0;
  background-color: rgba(0,0,0,.5);
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}
.ldmap-vue-lock-screen-touch-message {
  position: relative;
  top: 50%;
  position: relative;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #fff;
  user-select: none;
}
.ldmap-vue-lock-screen-touch-active {
  opacity: 1;
}
</style>
