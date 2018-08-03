# Bootstrap Better Nav

###  Tiny library that replaces the default Bootstrap navbar collapse with an elegant off-screen menu.

No configuration and no additional HTML markup required. Just include the library's JavaScript and CSS files, and your new navigation is ready.

![Demo](https://raw.githubusercontent.com/bootstrapstudio/bootstrap-better-nav/master/images/demo.gif)

## Installation

The library works only in Bootstrap 4 projects and requires a valid Navbar to be present on the page.

To use it, simply include its CSS and JavaScript in your HTML. You can find the necessary files in the `/dist` directory of this project. CDN versions are also available via unpkg.

```html
<!-- In <head> after the Bootstrap CSS. -->
<link rel="stylesheet" href="https://unpkg.com/@bootstrapstudio/bootstrap-better-nav/dist/bootstrap-better-nav.min.css">

<!-- At the end of <body>, after jQuery and the Bootstrap js -->
<script src="https://unpkg.com/@bootstrapstudio/bootstrap-better-nav/dist/bootstrap-better-nav.min.js"></script>
```

Once the JavaScript is included in the page the library is automatically enabled. A new off-screen menu is added to the HTML, which is synced with the contents of your navbar automatically. 

```html
<div id="side-menu">
  <button class="close"><span aria-hidden="true">×</span></button>
  <div class="contents">
      <!-- The items from the Bootstrap Navbar will be copied here by the library. -->
  </div>
</div>
```

Clicking on the navbar toggle button will show the off-screen menu instead of expanding the Bootstrap navbar.

The menu has only basic styling, you can easily customize it with CSS. 

## Configuring menu direction

The slide-in menu can be positioned on the left or the right side of the screen. By default it is on the right, but that can be easily changed by adding the `better-bootstrap-nav-left` class to the Bootstrap navbar.

```html
<nav class="navbar navbar-expand-md better-bootstrap-nav-left">
```


## Using in Bootstrap Studio

To add this plugin to your Bootstrap Studio project, simply go to the Design panel (bottom-right) and add the needed resources.

In Styles add the CSS part of the library as an external link.

![Demo](https://raw.githubusercontent.com/bootstrapstudio/bootstrap-better-nav/master/images/link-external.png)

A dialog window should open. Inside, paste the CSS URL from the [Installation](https://github.com/bootstrapstudio/bootstrap-better-nav#installation) guide.

![Demo](https://raw.githubusercontent.com/bootstrapstudio/bootstrap-better-nav/master/images/paste-url.png)

Repeat this process for the JavaScript part of the library.
