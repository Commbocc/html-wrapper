<template>
  <nav id="hc-nav" aria-label="Site Navigation" class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">

      <!-- https://www.w3.org/WAI/GL/2016/WD-WCAG20-TECHS-20160105/G1 -->
      <a :href="skipContentLink" class="sr-only">Skip to Main Content</a>

      <a class="navbar-brand" :href="logoHref" :target="logoTarget">
        <img :src="logoUrl" alt="Hillsborough County Logo" class="logo">
      </a>

      <button ref="navToggler" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav ml-auto">

          <li id="hc-nav-search-nav-item" v-if="showForm" class="nav-item order-lg-12 dropdown">
            <a @click="focusSearch()" href="#" class="nav-link dropdown-toggle d-none d-lg-inline-block" title="Search" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="fas fa-fw fa-search" aria-hidden="true"></span>
              <span class="sr-only">Search</span>
            </a>

            <div class="dropdown-menu hc-nav-search-dropdown-menu">

              <!-- search -->
              <NavSearchForm ref="searchForm" :action="formAction" :method="formMethod" :target="formTarget" show-filters="formShowFilters" />

            </div>
          </li>

          <slot v-if="customNav"></slot>

          <li v-else v-for="link in navLinks" class="nav-item order-lg-1 dropdown">
            <a href="#" class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{ link.Name }}
            </a>
            <div class="dropdown-menu">
              <h4 class="d-none d-lg-block text-info font-serif font-weight-bold">{{ link.Name }}</h4>
              <div class="dropdown-menu-2-col">
                <a v-for="child in link.Children" class="dropdown-item" :href="navbarUrl(child)" :target="linkTargets">
                  {{ child.Name }}
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
import NavSearchForm from './HcNavSearchForm'
import NavLinks from '@/mixins/NavLinks'
import LinkTargets from '@/mixins/LinkTargets'

export default {
  mixins: [NavLinks, LinkTargets],
  props: {
    logoHref: {
      type: String,
      default: 'https://hillsboroughcounty.org'
    },
    logoTarget: {
      type: String,
      default: '_self'
    },
    // search form props
    showForm: {
      type: Boolean,
      default: true
    },
    formAction: {
      type: String,
      default: 'https://hillsboroughcounty.org/search'
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
    },
    customNav: {
      type: Boolean,
      default: false
    },
    skipContentLink: {
      type: String,
      default: '#main-content'
    }
  },
  components: { NavSearchForm },
  data () {
    return {
      logoUrl: 'https://github.com/Commbocc/html-wrapper/raw/master/src/assets/hc-logo-horizontal-RGB.png'
    }
  },
  methods: {
    focusSearch () {
      Vue.nextTick(() => {
        this.$refs.searchForm.$refs.searchInput.focus()
      })
    }
  }
}
</script>
