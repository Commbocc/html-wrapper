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
      let url = 'https://hillsboroughcounty.org/endpoints/navbar.aspx'
      return this.$http.get(url).then(res => {
        this.navLinks = res.body
      })
    },
    navbarUrl (item) {
      return (this.crossOrigin) ? this.crossOriginRoot + item.Url : item.Url
    }
  },
  mounted () {
    this.fetchNavbar()
  }
}
