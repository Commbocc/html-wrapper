<template>
  <footer id="hc-footer" class="bg-secondary text-white py-5">
    <div class="container">

      <section class="row align-items-center text-center">

        <div class="col-md-4 mb-4 order-md-4">
          <ul class="list-inline mb-0">
            <li v-for="link in footerLinks" class="list-inline-item mx-3">
              <a :href="link.href" class="text-white">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>

        <div class="col-md-4 mb-4 order-md-1">
          <a href="http://hcflgov.net">
            <img :src="logoUrl" alt="Hillsborough County Logo" class="logo img-fluid">
          </a>
        </div>

        <div class="col-md-4 mb-4 order-md-12">
          <ul class="list-inline mb-0">
            <li v-for="link in socialLinks" class="list-inline-item">
              <a :href="link.href" :title="link.name" class="text-white" target="_blank">
                <i class="fa fa-fw" :class="link.iconClass"></i>
              </a>
            </li>
          </ul>
        </div>

      </section>

      <p class="text-center small mt-3 mb-0">
        <a href="https://goo.gl/maps/jetXJdK71mu" class="text-white" target="_blank">
          601 E. Kennedy Blvd.<br>
          Tampa, FL 33602
        </a>
      </p>

    </div>
  </footer>
</template>

<script>
import FooterLinks from '@/mixins/FooterLinks'
import SocialLinks from '@/mixins/SocialLinks'

export default {
  mixins: [FooterLinks, SocialLinks],
  data () {
    return {
      logoUrl: 'https://raw.githubusercontent.com/Commbocc/html-wrapper/master/src/assets/hc-logo-horizontal-RGB_drkbgrd.png'
    }
  }
}
</script>

<style lang="scss">
#hc-footer {
  .logo {
    max-height: 50px;
  }
}
</style>
