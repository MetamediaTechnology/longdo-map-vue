<template>
  <div
    v-show="lockScreenReady"
    :class="['ldmap-vue-lock-screen', { 'ldmap-vue-lock-screen-unlock': !value }]"
  >
    <div
      v-if="mode === 'touch'"
      class="ldmap-vue-lock-screen-area"
      ref="areaTouchMode"
      @touchstart="touchStartEvent"
      @touchmove="touchMoveEvent"
      @touchend="touchEndEvent"
    >
      <div class="ldmap-vue-lock-screen-area-message">
        {{ unlockMessageTouch }}
      </div>
    </div>
    <div
      v-else-if="mode === 'keyboard'"
      class="ldmap-vue-lock-screen-area"
      ref="areaKeyboardMode"
      @wheel="wheelEvent"
      @click="clickEvent"
    >
      <div class="ldmap-vue-lock-screen-area-message">
        {{ unlockMessageKeyboard }}
      </div>
    </div>
    <div v-else-if="!hideButton" class="ldmap-vue-lock-screen-button-container">
      <slot name="button">
        <button
          @click="lockMap(!value)"
          class="ldmap-vue-lock-screen-button"
        >
          {{ value ? unlockMessage : lockMessage }}
        </button>
      </slot>
    </div>
  </div>
</template>

<script>
import childDefault from '@/mixins/childDefault'

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
      default: 'Unlock'
    },
    unlockMessageTouch: {
      type: String,
      default: 'Use two fingers to move the map'
    },
    unlockMessageKeyboard: {
      type: String,
      default: `Press and hold ${(navigator.appVersion.indexOf('Mac') != -1) ? '⌘' : 'Ctrl'} to move the map`
    },
    hideButton: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      lockScreenReady: false,
      wheelTimeout: undefined,
    }
  },
  mounted () {
    this.mapReady.then(() => {
      this.lockScreenReady = true
      if (this.mode === 'keyboard') {
        this.setKeyboardMode()
      }
    })
  },
  methods: {
    keyDownEvent (e) {
      if (e.key === 'Meta' || e.key === 'Control') {
        this.lockMap(false)
      }
    },
    keyUpEvent (e) {
      if (e.key === 'Meta' || e.key === 'Control') {
        this.lockMap(true)
      }
    },
    wheelEvent () {
      if (this.mode !== 'keyboard') return
      if (!this.wheelTimeout && this.$refs.areaKeyboardMode) {
        this.$refs.areaKeyboardMode.classList.add('ldmap-vue-lock-screen-area-active')
        this.wheelTimeout = setTimeout(() => {
          this.$refs.areaKeyboardMode.classList.remove('ldmap-vue-lock-screen-area-active')
          this.wheelTimeout = undefined
        }, 1000)
      }
    },
    setKeyboardMode () {
      window.addEventListener('keydown', this.keyDownEvent)
      window.addEventListener('keyup', this.keyUpEvent)
    },
    clickEvent () {
      if (this.mode !== 'keyboard') return
      if (!this.wheelTimeout && this.$refs.areaKeyboardMode) {
        this.$refs.areaKeyboardMode.classList.add('ldmap-vue-lock-screen-area-active')
        this.wheelTimeout = setTimeout(() => {
          this.$refs.areaKeyboardMode.classList.remove('ldmap-vue-lock-screen-area-active')
          this.wheelTimeout = undefined
        }, 1000)
      }
    },
    touchStartEvent (e) {
      if (this.mode !== 'touch') return
      if (e.touches.length > 0) {
        this.lockMap(false)
        this.$refs.areaTouchMode.classList.add('ldmap-vue-lock-screen-area-active')
      }
    },
    touchMoveEvent (e) {
      if (this.mode !== 'touch') return
      if (e.touches.length > 1) {
        this.$refs.areaTouchMode.classList.remove('ldmap-vue-lock-screen-area-active')
      }
    },
    touchEndEvent () {
      if (this.mode !== 'touch') return
      this.lockMap(true)
      this.$refs.areaTouchMode.classList.remove('ldmap-vue-lock-screen-area-active')
    },
    clearKeyboardModeEvent () {
      window.removeEventListener('keydown', this.keyDownEvent)
      window.removeEventListener('keyup', this.keyUpEvent)
    },
    lockMap (lock) {
      this.$emit('input', lock)
    }
  },
  watch: {
    mode (n) {
      this.clearKeyboardModeEvent()
      if (n === 'keyboard') {
        this.setKeyboardMode()
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
  z-index: 1;
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
  transition-timing-function: linear;
  transition-duration: 500ms;
}
.ldmap-vue-lock-screen:hover .ldmap-vue-lock-screen-button {
  opacity: 1;
}
.ldmap-vue-lock-screen-area {
  height: 100%;
  width: 100%;
  overflow: hidden;
  opacity: 0;
  background-color: rgba(0,0,0,.5);
  transition-property: opacity;
  transition-timing-function: linear;
  transition-duration: 500ms;
}
.ldmap-vue-lock-screen-area-message {
  position: relative;
  top: 50%;
  position: relative;
  padding: 0 0.5rem;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #fff;
  user-select: none;
}
.ldmap-vue-lock-screen-area-active {
  opacity: 1;
}
</style>
