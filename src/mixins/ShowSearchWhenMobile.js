export default {
  methods: {
    showSearchWhenMobile () {
      if (this.$refs.navToggler.offsetLeft > 0) {
        this.$refs.searchDropdown.classList.add('show')
      } else {
        this.$refs.searchDropdown.classList.remove('show')
      }
    }
  },
  mounted () {
    window.onload = this.showSearchWhenMobile
    window.onresize = this.showSearchWhenMobile
  }
}
