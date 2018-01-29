export default {
  state: {
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
