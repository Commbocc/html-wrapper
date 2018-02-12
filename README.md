# Hillsborough County HTML Wrapper

> A Vue.js project

## Basic Usage

Use the HTML below as a base layout.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>
    <!-- PROJECT TITLE -->
  </title>

  <link rel="stylesheet" href="https://commbocc.github.io/html-wrapper/static/css/app.css">
  <noscript>
    <link rel="stylesheet" href="https://commbocc.github.io/html-wrapper/static/css/noscript.css">
  </noscript>
</head>
<body>
  <noscript>
    <center>
      <strong>This site is best viewed with Javascript Enabled.</strong>
      <br>
      <em><a href="http://www.enable-javascript.com/" target="_blank">How to enable JavaScript in your browser.</a></em>
    </center>
    <hr>
  </noscript>

  <main id="hc-main">

    <header>
      <nav is="hc-navigation" logo-href="/"></nav>
    </header>

    <section class="bg-white py-5">
      <div class="container">


      <!-- PLACE CONTENT HERE -->

      </div>
    </section>

    <footer is="hc-footer"></footer>

  </main>

  <script type="text/javascript" src="https://commbocc.github.io/html-wrapper/static/js/manifest.js"></script>
  <script type="text/javascript" src="https://commbocc.github.io/html-wrapper/static/js/vendor.js"></script>
  <script type="text/javascript" src="https://commbocc.github.io/html-wrapper/static/js/app.js"></script>
</body>
</html>
```

### Customizations

#### HTML

* `<title>` - the project title.
* `class="mb-3"` - the class of the `<header>` element. `mb-3` is a [Bootstrap 4 utility spacing](http://getbootstrap.com/docs/4.0/utilities/spacing/#notation) class that sets the bottom margin of the element.
* `class="mt-3"` - the class of the `<footer>` element. `mt-3` is a [Bootstrap 4 utility spacing](http://getbootstrap.com/docs/4.0/utilities/spacing/#notation) class that sets the top margin of the element.
* `<section class="container">` - See [Bootstrap Containers](https://getbootstrap.com/docs/4.0/layout/overview/#containers).

#### Navigation Component

> the props below show the default values

* `logo-href="http://hcflgov.net"` - the URL (absolute or relative) that the logo links to.
* `logo-target="_self"` - the [HTML target attribute](https://www.w3schools.com/tags/att_a_target.asp) of the logo.
* `link-targets="_self"` - the [HTML target attribute](https://www.w3schools.com/tags/att_a_target.asp) of the dropdown links.
* `form-action="http://www.hillsboroughcounty.org/en/search"` - the [HTML form Action attribute](https://www.w3schools.com/tags/att_form_action.asp) of the search form.
* `form-method="get"` - the [HTML form method attribute](https://www.w3schools.com/tags/att_form_method.asp) of the search form.
* `form-target="_self"` - the [HTML form target attribute](https://www.w3schools.com/tags/att_form_target.asp) of the search form.
* `:form-show-filters="true"` - whether or not to show the content type filters below the search form.

#### Banner Component

> the props below show the default values

* `title=""` - _(required)_ the title of the current page
* `:crumbs="{'Home': '/'}"` - a Javascript object that populates the breadcrumbs of the banner where each key is the Link's text and each value is the Link's destination. Another example would be: `{'Home': '/', 'Residents': '/residents'}`

#### Footer Component

> the props below show the default values

* `link-targets="_self"` - the [HTML target attribute](https://www.w3schools.com/tags/att_a_target.asp) of the footer links.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
