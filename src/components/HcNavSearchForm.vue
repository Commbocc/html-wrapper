<template lang="html">
  <form action="http://www.hillsboroughcounty.org/en/search" method="get" :target="formTarget">

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

    <ul class="list-inline small text-center d-none d-lg-block mt-3 mb-0">
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
export default {
  props: ['formTarget'],
  data () {
    return {
      filters: [
        {
          key: 'article',
          text: 'Web Pages',
          icon: 'fa-file-o',
          checked: true
        },
        {
          key: 'story',
          text: 'Newsroom Stories',
          icon: 'fa-newspaper-o',
          checked: true
        },
        {
          key: 'documents',
          text: 'Documents',
          icon: 'fa-file-pdf-o',
          checked: false
        },
        {
          key: 'events',
          text: 'Events',
          icon: 'fa-calendar',
          checked: false
        },
        {
          key: 'locations',
          text: 'Locations',
          icon: 'fa-map-marker',
          checked: false
        },
        {
          key: 'departments',
          text: 'Departments',
          icon: 'fa-building-o',
          checked: false
        }
      ]
    }
  }
}
</script>
