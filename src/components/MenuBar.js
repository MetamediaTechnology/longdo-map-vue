import childDefault from '@/mixins/childDefault'

export default {
  name: 'MenuBar',
  mixins: [childDefault],
  data () {
    return {
      menuBar: null
    }
  },
  props: {
    button: {
      type: Array,
      default: () => {
        return []
      }
    },
    dropdown: {
      type: Array,
      default: () => {
        return []
      }
    },
    dropdownLabel: {
      type: String,
      default: null
    },
    change: {
      type: Function,
      default: null
    }
  },
  mounted () {
    let self = this
    this.mapReady.then(() => {
      self.addMenuBar()
    })
  },
  destroyed () {
    this.$parent.map.Ui.remove(this.menuBar)
  },
  methods: {
    addMenuBar () {
      let options = {}
      if (this.button.length) {
        options.button = this.button
      }
      if (this.dropdown.length) {
        options.dropdown = this.dropdown
      }
      if (this.dropdownLabel) {
        options.dropdownLabel = this.dropdownLabel
      }
      if (this.change) {
        options.change = this.change
      }
      this.menuBar = new window.longdo.MenuBar(options)
      this.$parent.map.Ui.add(this.menuBar)
      this.$emit('add', this.menuBar)
    }
  }
}
