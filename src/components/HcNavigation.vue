<template>
  <nav id="hc-nav" class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">

      <a class="navbar-brand" :href="logoHref">
        <img :src="logoUrl" alt="Hillsborough County Logo" class="logo">
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav ml-auto">

          <li v-for="link in navLinks" class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" :class="link.linkClass" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {{ link.text }}
            </a>
            <div class="dropdown-menu">
              <h4 class="d-none d-lg-block text-info">{{ link.text }}</h4>
              <div class="dropdown-menu-2-col">
                <a v-for="child in link.children" class="dropdown-item" :href="child.href">{{ child.text }}</a>
              </div>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a @click="focusSearch()" href="#" class="nav-link dropdown-toggle" title="Search" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fa fa-fw fa-search"></i>
            </a>
            <div class="dropdown-menu">
              <form action="http://www.hillsboroughcounty.org/en/search" method="get" class="ml-auto my-2 my-lg-0">
                <div class="input-group input-group-lg">
                  <input class="form-control" name="q" type="search" placeholder="Search For..." aria-label="Search" ref="searchInput" required>
                  <span class="input-group-btn">
                    <button class="btn btn-primary text-white" type="submit">Search</button>
                  </span>
                </div>
              </form>
            </div>
          </li>
        </ul>

      </div>

    </div>
  </nav>
</template>

<script>
import Vue from 'vue'
import NavLinks from '@/mixins/NavLinks'

export default {
  mixins: [NavLinks],
  props: {
    logoHref: {
      type: String,
      default: 'http://hcflgov.net'
    }
  },
  data () {
    return {
      logoUrl: 'http://www.hillsboroughcounty.org/library/hillsborough/system/logos/hc-logo-horizontal-rgb.png'
    }
  },
  methods: {
    focusSearch () {
      Vue.nextTick(() => {
        this.$refs.searchInput.focus()
      })
    }
  }
}
</script>
