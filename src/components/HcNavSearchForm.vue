<template lang="html">
  <form :action="action" :method="method" :target="target">

    <div class="row justify-content-center">
      <div class="col-lg-8">

        <hr class="mb-2 mb-lg-0 d-lg-none">

        <div id="hc-nav-search-input-group" class="input-group input-group-lg">
          <input class="form-control" name="q" type="search" placeholder="Search For..." aria-label="Search" ref="searchInput" required>
          <span class="input-group-btn">
            <button class="btn btn-link" type="submit">
              <span class="fa fa-fw fa-search" aria-label="Search"></span>
            </button>
          </span>
        </div>

        <hr class="mt-2 mt-lg-0 mb-0 mb-lg-2">

      </div>
    </div>

    <ul v-if="showFilters" class="list-inline small text-center d-none d-lg-block mt-3 mb-0">
      <li v-for="filter in filters" class="list-inline-item px-2">
        <input name="t" type="checkbox" :value="filter.key" :id="`searchFilter-${filter.key}`" :checked="filter.checked">
        <label class="" :for="`searchFilter-${filter.key}`">
          <span class="fa fa-fw" :class="filter.icon"></span>
          {{ filter.text }}
        </label>
      </li>
    </ul>

  </form>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['action', 'method', 'target', 'showFilters'],
  computed: mapState({
    filters: state => state.search.filters
  })
}
</script>
