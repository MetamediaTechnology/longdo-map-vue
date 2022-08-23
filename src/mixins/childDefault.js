export default {
  data() {
    return {
      mapReady: new Promise((resolve) => {
        this.$parent.$on('mapReady', () => {
          resolve()
        })
      }),
    }
  },
  render() {
    return ''
  }
}
