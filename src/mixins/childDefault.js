export default {
  data () {
    return {
      mapReady: this.$parent.mapPromise || new Promise(() => console.error('Longdo Map Vue: Longdo Map API is not ready')),
    }
  },
  render () {
    return ''
  }
}
