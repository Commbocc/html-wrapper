let navEnpoint = 'https://hillsboroughcounty.org/endpoints/navbar.aspx'

export default {
  props: {
    crossOrigin: {
      type: Boolean,
      default: true
    },
    crossOriginRoot: {
      type: String,
      default: 'https://hillsboroughcounty.org'
    }
  },
  data () {
    return {
      navLinks: []
    }
  },
  methods: {
    fetchNavbar () {
      return this.$http.get(navEnpoint).then(res => {
        this.navLinks = res.body
      })
    },
    navbarUrl (item) {
      return (this.crossOrigin) ? this.crossOriginRoot + item.Path : item.Path
    }
  },
  mounted () {
    this.fetchNavbar()
  }
}
