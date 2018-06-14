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
</head>
<body>
  <div id="hc-main">

    <nav is="hc-navigation" logo-href="./"></nav>

    <ol is="hc-banner" title="Page Title">
      <!-- ancestors -->
      <li class="breadcrumb-item"><a href="./">Home</a></li>
    </ol>

    <section class="bg-white py-5" aria-labelledby="dynamicallyGeneratedSectionId">
      <div class="container">

        <h2 id="dynamicallyGeneratedSectionId">Section Heading</h2>

        <!-- PLACE CONTENT HERE -->

      </div>
    </section>

    <footer is="hc-footer"></footer>

  </div>

  <script type="text/javascript" src="https://commbocc.github.io/html-wrapper/static/js/manifest.js"></script>
  <script type="text/javascript" src="https://commbocc.github.io/html-wrapper/static/js/vendor.js"></script>
  <script type="text/javascript" src="https://commbocc.github.io/html-wrapper/static/js/app.js"></script>
</body>
</html>
```

### Customizations

#### HTML & CSS

Refer to the [Bootstrap documentation](https://getbootstrap.com/).

#### Navigation Component

> the props below show the default values

* `logo-href="https://hillsboroughcounty.org"` - the URL (absolute or relative) that the logo links to.
* `logo-target="_self"` - the [HTML target attribute](https://www.w3schools.com/tags/att_a_target.asp) of the logo.
* `link-targets="_self"` - the [HTML target attribute](https://www.w3schools.com/tags/att_a_target.asp) of the dropdown links.
* `:show-form="true"` - Show the search form dropdown in the navbar.
* `form-action="https://hillsboroughcounty.org/en/search"` - the [HTML form Action attribute](https://www.w3schools.com/tags/att_form_action.asp) of the search form.
* `form-method="get"` - the [HTML form method attribute](https://www.w3schools.com/tags/att_form_method.asp) of the search form.
* `form-target="_self"` - the [HTML form target attribute](https://www.w3schools.com/tags/att_form_target.asp) of the search form.
* `:form-show-filters="true"` - whether or not to show the content type filters below the search form.
* `:cutom-nav="false"` - When set to true a [Vue Slot](https://vuejs.org/v2/guide/components.html#Single-Slot) can be used to populate custom [nav content](https://getbootstrap.com/docs/4.0/components/navbar/#nav). See the example below:

```html
<nav is="hc-navigation" logo-href="/" :custom-nav="true">
  <li class="nav-item active">
    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </li>
</nav>
```

#### Banner Component

A [Vue Slot](https://vuejs.org/v2/guide/components.html#Single-Slot) is used to populate the banner's [breadcrumb](https://getbootstrap.com/docs/4.0/components/breadcrumb/) ancestry.

```html
<ol is="hc-banner" title="Banner Title">
  <!-- ancestors -->
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item"><a href="#">Parent Page</a></li>
</ol>
```

> the props below show the default values

* `title=""` - _(required)_ the title of the current page

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
