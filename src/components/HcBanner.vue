<template lang="html">
  <div class="hc-banner jumbotron jumbotron-fluid bg-info text-white my-0 p-4">
    <div class="container">

      <h1 class="hc-banner-title font-weight-bold m-0">
        {{ title }}
      </h1>

      <nav aria-label="breadcrumbs">
        <ol class="breadcrumb hc-banner-breadcrumb mb-0">
          <li v-for="(link, text, index) in crumbs" class="breadcrumb-item">
            <a :href="link">{{ text }}</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
        </ol>
      </nav>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    crumbs: {
      type: Object,
      default: function () {
        return {'Home': '/'}
      }
    }
  }
}
</script>
