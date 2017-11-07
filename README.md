# Hillsborough County HTML Wrapper

> A Vue.js project

## Basic Usage

Use the HTML below as a base layout.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>
    <!-- PROJECT TITLE -->
  </title>

  <link rel="stylesheet" href="https://commbocc.github.io/html-wrapper/static/css/app.css">
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

    <header class="mb-3">
      <nav id="hc-nav" is="hc-navigation" logo-href="/"></nav>
    </header>

    <section class="container">


      <!-- PLACE CONTENT HERE -->


    </section>

    <footer id="hc-footer" is="hc-footer" class="mt-3"></footer>

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
* `form-target="_self"` - the [HTML target attribute](https://www.w3schools.com/tags/att_a_target.asp) of the search form.

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
