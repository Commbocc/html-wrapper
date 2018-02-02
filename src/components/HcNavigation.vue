<template>
  <nav id="hc-nav" class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">

      <a class="navbar-brand" :href="logoHref" :target="logoTarget">
        <img :src="logoUrl" alt="Hillsborough County Logo" class="logo">
      </a>

      <button ref="navToggler" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav ml-auto">

          <li class="nav-item order-lg-12 dropdown">
            <a @click="focusSearch()" href="#" class="nav-link dropdown-toggle d-none d-lg-inline-block" title="Search" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fa fa-fw fa-search"></i>
            </a>
            <div ref="searchDropdown" class="dropdown-menu">

              <!-- search -->
              <NavSearchForm ref="searchForm" :action="formAction" :method="formMethod" :target="formTarget" show-filters="formShowFilters" />

            </div>
          </li>

          <li v-for="link in navLinks" class="nav-item order-lg-1 dropdown">
            <a href="#" class="nav-link dropdown-toggle" :class="link.linkClass" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{ link.text }}
            </a>
            <div class="dropdown-menu">
              <h4 class="d-none d-lg-block text-info font-serif font-weight-bold">{{ link.text }}</h4>
              <div class="dropdown-menu-2-col">
                <a v-for="child in link.children" class="dropdown-item" :href="`http://hcflgov.net/${child.ItemUrl}`" :target="linkTargets">
                  {{ child.DisplayName }}
                </a>
              </div>
            </div>
          </li>

        </ul>

      </div>

    </div>
  </nav>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import NavSearchForm from '@/components/HcNavSearchForm'
import NavLinks from '@/mixins/NavLinks'
import LinkTargets from '@/mixins/LinkTargets'

export default {
  mixins: [NavLinks, LinkTargets],
  props: {
    logoHref: {
      type: String,
      default: 'http://hcflgov.net'
    },
    logoTarget: {
      type: String,
      default: '_self'
    },
    // search form props
    formAction: {
      type: String,
      default: 'http://www.hillsboroughcounty.org/en/search'
    },
    formMethod: {
      type: String,
      default: 'get'
    },
    formTarget: {
      type: String,
      default: '_self'
    },
    formShowFilters: {
      type: Boolean,
      default: true
    }
  },
  components: {
    NavSearchForm
  },
  computed: mapState({
    logoUrl: state => state.navigation.logoUrl
  }),
  methods: {
    focusSearch () {
      Vue.nextTick(() => {
        this.$refs.searchForm.$refs.searchInput.focus()
      })
    },
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
</script>
