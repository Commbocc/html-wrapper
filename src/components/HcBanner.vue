<template lang="html">
	<div class="jumbotron jumbotron-fluid bg-info text-white p-4">
		<div class="container">

			<h1 class="font-weight-bold m-0">
				{{ title }}
			</h1>

			<nav aria-label="breadcrumbs">
				<ol class="breadcrumb hc-banner-breadcrumb">
					<li class="breadcrumb-item"><a href="#">Home</a></li>
					<li class="breadcrumb-item"><a href="#">Residents</a></li>
					<li class="breadcrumb-item"><a href="#">Animals &amp; Pets</a></li>
					<li class="breadcrumb-item active" aria-current="page">Current Page</li>
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
    }
  }
}
</script>
