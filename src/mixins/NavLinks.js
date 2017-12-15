import { mapState, mapActions } from 'vuex'

export default {
  methods: mapActions([
    'fetchNavChildren'
  ]),
  computed: mapState({
    navLinks: state => state.navigation.links
  }),
  mounted () {
    this.fetchNavChildren()
  }
}
