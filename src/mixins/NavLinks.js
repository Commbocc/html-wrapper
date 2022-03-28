// let navEnpoint = 'https://www.hillsboroughcounty.org/apis/v1/endpoints/navbar'
import navbarJson from '../assets/navbar.json'

export default {
  // props: {
  //   crossOrigin: {
  //     type: Boolean,
  //     default: true
  //   },
  //   crossOriginRoot: {
  //     type: String,
  //     default: 'https://hillsboroughcounty.org'
  //   }
  // },
  data() {
    return {
      navLinks: []
    }
  },
  methods: {
    fetchNavbar() {
      this.navLinks = navbarJson
    },
    navbarUrl(item) {
      return item.Path
    }
  },
  mounted() {
    this.fetchNavbar()
  }
}
