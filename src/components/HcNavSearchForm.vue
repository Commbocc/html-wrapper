<template lang="html">
  <form :action="action" :method="method" :target="target">

    <div class="row justify-content-center">
      <div class="col-lg-8">

        <hr class="mb-2 mb-lg-0 d-lg-none">

        <div id="hc-nav-search-input-group" class="input-group input-group-lg">
          <input class="form-control" name="q" type="search" placeholder="Search For..." aria-label="Search Input" ref="searchInput" required>
          <span class="input-group-btn">
            <button type="submit" class="btn btn-link">
              <span class="fa fa-fw fa-search" aria-label="Search"></span>
            </button>
          </span>
        </div>

        <hr class="mt-2 mt-lg-0 mb-0 mb-lg-2">

      </div>
    </div>

    <fieldset v-if="showFilters">
      <legend class="sr-only">Filters</legend>
      <div class="d-flex justify-content-center small">
        <label v-for="filter in filters" class="px-2">
          <input type="checkbox" :value="filter.key" :checked="filter.checked" :aria-label="filter.text">
          <span class="fa fa-fw" :class="filter.icon" aria-hidden="true"></span>
          {{ filter.text }}
        </label>
      </div>
    </fieldset>

    <div v-if="false" role="group">
      <ul v-if="showFilters" class="list-inline small text-center d-none d-lg-block mt-3 mb-0">
        <li v-for="filter in filters" class="list-inline-item px-2">
          <input name="t" type="checkbox" :value="filter.key" :id="`searchFilter${filter.key}`" :checked="filter.checked" :aria-labelledby="`searchFilterLabel${filter.key}`">
          <label class="form-check-label" :for="`searchFilter${filter.key}`" :id="`searchFilterLabel${filter.key}`">
            <span class="fa fa-fw" :class="filter.icon"></span>
            {{ filter.text }}
          </label>
        </li>
      </ul>
    </div>

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
