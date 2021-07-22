import childDefault from '@/mixins/childDefault'

export default {
  name: 'CustomControl',
  mixins: [childDefault],
  data () {
    return {
      customControl: null
    }
  },
  props: {
    html: {
      type: String,
      default: ''
    },
  },
  mounted () {
    let self = this
    this.mapReady.then(() => {
      self.addCustomControl()
    })
  },
  destroyed () {
    this.$parent.map.Ui.remove(this.customControl)
  },
  methods: {
    addCustomControl () {
      this.customControl = new window.longdo.CustomControl({ html: this.html })
      this.$parent.map.Ui.add(this.customControl)
      this.$emit('add', this.customControl)
    }
  }
}
