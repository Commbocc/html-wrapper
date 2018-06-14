import Vue from 'vue'

export default {
  state: {
    logoUrl: 'https://github.com/Commbocc/html-wrapper/raw/master/src/assets/hc-logo-horizontal-RGB.png',
    links: [
      {
        text: 'Residents',
        identifier: 'residents-children',
        linkClass: null,
        children: []
      },
      {
        text: 'Businesses',
        identifier: 'businesses-children',
        linkClass: null,
        children: []
      },
      {
        text: 'Government',
        identifier: 'government-children',
        linkClass: null,
        children: []
      },
      {
        text: 'About Hillsborough',
        identifier: 'about-hillsborough-children',
        linkClass: null,
        children: []
      },
      {
        text: 'I Want To...',
        identifier: 'i-want-to-children',
        linkClass: 'text-primary',
        children: []
      }
    ]
  },
  actions: {
    fetchNavChildren ({state}) {
      state.links.forEach(x => {
        var url = `https://gist.githubusercontent.com/mccarthyk/93e7ece6a2d1ba903261c6f25479a6cd/raw/2b01d85967dfb2a7727caba9b8f8f44b5010fea9/${x.identifier}.json`
        Vue.http.get(url).then(response => {
          x.children = response.body.filter(c => c['Show in Menu'])
        })
      })
    }
  }
}

export const footer = {
  state: {
    logoUrl: 'https://raw.githubusercontent.com/Commbocc/html-wrapper/master/src/assets/hc-logo-horizontal-RGB_drkbgrd.png',
    links: [
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
    ]
  }
}

export const social = {
  state: {
    links: [
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/HillsboroughFL/',
        iconClass: 'fa-facebook'
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/HillsboroughFL',
        iconClass: 'fa-twitter'
      },
      {
        name: 'YouTube',
        href: 'https://www.youtube.com/user/HillsboroughCounty',
        iconClass: 'fa-youtube'
      },
      {
        name: 'InstaGram',
        href: 'https://www.instagram.com/hillsboroughfl/',
        iconClass: 'fa-instagram'
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/hillsborough-county',
        iconClass: 'fa-linkedin'
      }
    ]
  }
}
