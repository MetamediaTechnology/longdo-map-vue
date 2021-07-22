import childDefault from '@/mixins/childDefault'

export default {
  name: 'TagPanel',
  mixins: [childDefault],
  data () {
    return {
      tagPanel: null
    }
  },
  props: {
    tag: {
      type: Array,
      default: null
    },
  },
  mounted () {
    let self = this
    this.mapReady.then(() => {
      self.addTagPanel()
    })
  },
  destroyed () {
    this.$parent.map.Ui.remove(this.tagPanel)
  },
  methods: {
    addTagPanel () {
      this.tagPanel = this.tag ? new window.longdo.TagPanel({ tag: this.tag }) : new window.longdo.TagPanel()
      this.$parent.map.Ui.add(this.tagPanel)
      this.$emit('add', this.tagPanel)
    }
  }
}
