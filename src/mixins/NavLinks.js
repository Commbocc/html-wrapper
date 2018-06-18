export default {
  data () {
    return {
      navLinks: [
        {
          text: 'Residents',
          identifier: 'residents-children',
          linkClass: null,
          children: []
        },
        {
          text: 'Businesses',
          identifier: 'businesses-children',
          linkClass: null,
          children: []
        },
        {
          text: 'Government',
          identifier: 'government-children',
          linkClass: null,
          children: []
        },
        {
          text: 'About Hillsborough',
          identifier: 'about-hillsborough-children',
          linkClass: null,
          children: []
        },
        {
          text: 'I Want To...',
          identifier: 'i-want-to-children',
          linkClass: 'text-primary',
          children: []
        }
      ]
    }
  },
  methods: {
    fetchNavChildren () {
      this.navLinks.forEach(x => {
        var url = `https://gist.githubusercontent.com/mccarthyk/93e7ece6a2d1ba903261c6f25479a6cd/raw/2b01d85967dfb2a7727caba9b8f8f44b5010fea9/${x.identifier}.json`
        this.$http.get(url).then(res => {
          x.children = res.body.filter(c => c['Show in Menu'])
        })
      })
    }
  },
  mounted () {
    this.fetchNavChildren()
  }
}
