<template lang="html">
  <div class="">

    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a class="nav-item nav-link active" id="nav-edit-tab" data-toggle="tab" href="#nav-edit" role="tab" aria-controls="nav-edit" aria-selected="true">Edit</a>
        <a class="nav-item nav-link" id="nav-preview-tab" data-toggle="tab" href="#nav-preview" role="tab" aria-controls="nav-preview" aria-selected="false">Preview</a>
      </div>
    </nav>
    <div class="tab-content my-3" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-edit" role="tabpanel" aria-labelledby="nav-edit-tab">
        <textarea v-model="prevHtml" class="form-control" rows="15"></textarea>
      </div>
      <div v-html="prevHtml" class="tab-pane fade" id="nav-preview" role="tabpanel" aria-labelledby="nav-preview-tab"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'preview',
  data () {
    return {
      prevHtml: '<h1>Edit the HTML!</h1>'
    }
  }
}
</script>
