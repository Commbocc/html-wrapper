<template lang="html">
  <form :action="action" :method="method" :target="target">

    <div class="row justify-content-center">
      <div class="col-lg-8">

        <hr class="mb-2 mb-lg-0 d-lg-none">

        <div id="hc-nav-search-input-group" class="input-group input-group-lg">
          <input class="form-control" name="q" type="search" placeholder="Search For..." aria-label="Search Input" ref="searchInput" required>
          <div class="input-group-append">
            <button type="submit" class="btn btn-link">
              <span class="fas fa-fw fa-search" aria-label="Search"></span>
            </button>
          </div>
        </div>

        <hr class="mt-2 mt-lg-0 mb-0 mb-lg-2">

      </div>
    </div>

    <fieldset v-if="showFilters" class="d-none d-lg-block">
      <legend class="sr-only">Filters</legend>
      <div class="d-flex justify-content-center small">
        <label v-for="filter in filters" class="px-2">
          <input type="checkbox" :value="filter.key" :checked="filter.checked" :aria-label="filter.text">
          <span class="fa-fw" :class="filter.icon" aria-hidden="true"></span>
          {{ filter.text }}
        </label>
      </div>
    </fieldset>

  </form>
</template>

<script>
export default {
  props: ['action', 'method', 'target', 'showFilters'],
  data () {
    return {
      filters: [
        {
          key: 'article',
          text: 'Web Pages',
          icon: ' far fa-file',
          checked: true
        },
        {
          key: 'story',
          text: 'Newsroom Stories',
          icon: ' far fa-newspaper',
          checked: true
        },
        {
          key: 'documents',
          text: 'Documents',
          icon: ' far fa-file-pdf',
          checked: false
        },
        {
          key: 'events',
          text: 'Events',
          icon: ' far fa-calendar-alt',
          checked: false
        },
        {
          key: 'locations',
          text: 'Locations',
          icon: ' fas fa-map-marker-alt',
          checked: false
        },
        {
          key: 'departments',
          text: 'Departments',
          icon: ' far fa-building',
          checked: false
        }
      ]
    }
  }
}
</script>
