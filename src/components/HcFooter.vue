<template>
  <footer id="hc-footer" class="bg-secondary text-white py-5">
    <div class="container">

      <div class="row align-items-center text-center">
        <div class="col-md-4 mb-4 order-md-4">
          <ul class="list-inline mb-0">
            <li v-for="link in footerLinks" class="list-inline-item mx-3">
              <a :href="link.href" class="text-white" :target="linkTargets">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>

        <div class="col-md-4 mb-4 order-md-1">
          <a href="https://hillsboroughcounty.org" :target="linkTargets">
            <img :src="logoUrl" alt="Hillsborough County Logo" class="logo img-fluid">
          </a>
        </div>

        <div class="col-md-4 mb-4 order-md-12">
          <ul class="list-inline my-2 hide-external-indicator">
            <li v-for="link in socialLinks" class="list-inline-item">
              <a :href="link.href" :title="link.name" class="text-white" target="_blank" :aria-label="link.name">
                <span class="fa-fw" :class="link.iconClass" aria-hidden="true"></span>
              </a>
            </li>
          </ul>

          <!-- google translate -->
          <div id="google_translate_element"></div>

        </div>
      </div>

      <p class="text-center small mt-3 mb-0">
        <a href="https://goo.gl/maps/jetXJdK71mu" class="text-white hide-external-indicator" target="_blank">
          601 E. Kennedy Blvd.<br>
          Tampa, FL 33602
        </a>
      </p>

    </div>
  </footer>
</template>

<script>
import LinkTargets from '@/mixins/LinkTargets'

export default {
  mixins: [LinkTargets],
  data () {
    return {
      footerLinks: [
        {
          text: 'Board of County Commissioners',
          href: 'https://hillsboroughcounty.org/government/board-of-county-commissioners'
        },
        {
          text: 'County Locations',
          href: 'https://hillsboroughcounty.org/residents/citizens/county-locations'
        },
        {
          text: 'Jobs',
          href: 'https://hillsboroughcounty.org/about-hillsborough/jobs'
        },
        {
          text: 'Contact Us',
          href: 'https://hillsboroughcounty.org/about-hillsborough/contact-us'
        }
      ],
      socialLinks: [
        {
          name: 'Facebook',
          href: 'https://www.facebook.com/HillsboroughFL/',
          iconClass: 'fab fa-facebook'
        },
        {
          name: 'Twitter',
          href: 'https://twitter.com/HillsboroughFL',
          iconClass: 'fab fa-twitter'
        },
        {
          name: 'YouTube',
          href: 'https://www.youtube.com/user/HillsboroughCounty',
          iconClass: 'fab fa-youtube'
        },
        {
          name: 'InstaGram',
          href: 'https://www.instagram.com/hillsboroughfl/',
          iconClass: 'fab fa-instagram'
        },
        {
          name: 'LinkedIn',
          href: 'https://www.linkedin.com/company/hillsborough-county',
          iconClass: 'fab fa-linkedin'
        }
      ],
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
