!(function (o) {
  'use strict';

  function n() {
    for (
      var t = document
          .getElementById('topnav-menu-content')
          .getElementsByTagName('a'),
        e = 0,
        a = t.length;
      e < a;
      e++
    )
      'nav-item dropdown active' === t[e].parentElement.getAttribute('class') &&
        (t[e].parentElement.classList.remove('active'),
        t[e].nextElementSibling.classList.remove('show'));
  }

  function e(t) {
    document.getElementById(t).checked = !0;
  }

  function t() {
    document.webkitIsFullScreen ||
      document.mozFullScreen ||
      document.msFullscreenElement ||
      (console.log('pressed'), o('body').removeClass('fullscreen-enable'));
  }
  var a, r, d;
  o('#side-menu').metisMenu(),
    (a = document.body.getAttribute('data-sidebar-size')),
    o(window).on('load', function () {
      o('.switch').on('switch-change', function () {
        toggleWeather();
      }),
        1024 <= window.innerWidth &&
          window.innerWidth <= 1366 &&
          (document.body.setAttribute('data-sidebar-size', 'sm'),
          e('sidebar-size-small'));
    }),
    o('.vertical-menu-btn').on('click', function (t) {
      t.preventDefault(),
        o('body').toggleClass('sidebar-enable'),
        992 <= o(window).width() &&
          (null == a
            ? null == document.body.getAttribute('data-sidebar-size') ||
              'lg' == document.body.getAttribute('data-sidebar-size')
              ? document.body.setAttribute('data-sidebar-size', 'sm')
              : document.body.setAttribute('data-sidebar-size', 'lg')
            : 'md' == a
            ? 'md' == document.body.getAttribute('data-sidebar-size')
              ? document.body.setAttribute('data-sidebar-size', 'sm')
              : document.body.setAttribute('data-sidebar-size', 'md')
            : 'sm' == document.body.getAttribute('data-sidebar-size')
            ? document.body.setAttribute('data-sidebar-size', 'lg')
            : document.body.setAttribute('data-sidebar-size', 'sm'));
    }),
    o('#sidebar-menu a').each(function () {
      var t = window.location.href.split(/[?#]/)[0];
      this.href == t &&
        (o(this).addClass('active'),
        o(this).parent().addClass('mm-active'),
        o(this).parent().parent().addClass('mm-show'),
        o(this).parent().parent().prev().addClass('mm-active'),
        o(this).parent().parent().parent().addClass('mm-active'),
        o(this).parent().parent().parent().parent().addClass('mm-show'),
        o(this)
          .parent()
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass('mm-active'));
    }),
    o(document).ready(function () {
      var t;
      0 < o('#sidebar-menu').length &&
        0 < o('#sidebar-menu .mm-active .active').length &&
        300 < (t = o('#sidebar-menu .mm-active .active').offset().top) &&
        ((t -= 300),
        o('.vertical-menu .simplebar-content-wrapper').animate(
          { scrollTop: t },
          'slow',
        ));
    }),
    o('[data-bs-toggle="fullscreen"]').on('click', function (t) {
      t.preventDefault(),
        o('body').toggleClass('fullscreen-enable'),
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement
          ? document.cancelFullScreen
            ? document.cancelFullScreen()
            : document.mozCancelFullScreen
            ? document.mozCancelFullScreen()
            : document.webkitCancelFullScreen &&
              document.webkitCancelFullScreen()
          : document.documentElement.requestFullscreen
          ? document.documentElement.requestFullscreen()
          : document.documentElement.mozRequestFullScreen
          ? document.documentElement.mozRequestFullScreen()
          : document.documentElement.webkitRequestFullscreen &&
            document.documentElement.webkitRequestFullscreen(
              Element.ALLOW_KEYBOARD_INPUT,
            );
    }),
    document.addEventListener('fullscreenchange', t),
    document.addEventListener('webkitfullscreenchange', t),
    document.addEventListener('mozfullscreenchange', t),
    o('.navbar-nav a').each(function () {
      var t = window.location.href.split(/[?#]/)[0];
      this.href == t &&
        (o(this).addClass('active'),
        o(this).parent().addClass('active'),
        o(this).parent().parent().addClass('active'),
        o(this).parent().parent().parent().addClass('active'),
        o(this).parent().parent().parent().parent().addClass('active'),
        o(this)
          .parent()
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass('active'));
    }),
    o('.right-bar-toggle').on('click', function (t) {
      o('body').toggleClass('right-bar-enabled');
    }),
    o(document).on('click', 'body', function (t) {
      0 < o(t.target).closest('.right-bar-toggle, .right-bar').length ||
        o('body').removeClass('right-bar-enabled');
    }),
    (function () {
      if (document.getElementById('topnav-menu-content')) {
        for (
          var t = document
              .getElementById('topnav-menu-content')
              .getElementsByTagName('a'),
            e = 0,
            a = t.length;
          e < a;
          e++
        )
          t[e].onclick = function (t) {
            '#' === t.target.getAttribute('href') &&
              (t.target.parentElement.classList.toggle('active'),
              t.target.nextElementSibling.classList.toggle('show'));
          };
        window.addEventListener('resize', n);
      }
    })(),
    (function () {
      [].slice
        .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        .map(function (t) {
          return new bootstrap.Tooltip(t);
        }),
        [].slice
          .call(document.querySelectorAll('[data-bs-toggle="popover"]'))
          .map(function (t) {
            return new bootstrap.Popover(t);
          });
      var a = o(this).attr('data-delay') ? o(this).attr('data-delay') : 100,
        n = o(this).attr('data-time') ? o(this).attr('data-time') : 1200;
      o('[data-plugin="counterup"]').each(function (t, e) {
        o(this).counterUp({ delay: a, time: n });
      });
    })(),
    window.sessionStorage &&
      ((r = sessionStorage.getItem('is_visited'))
        ? o('#' + r).prop('checked', !0)
        : sessionStorage.setItem('is_visited', 'layout-ltr')),
    o(window).on('load', function () {
      o('#status').fadeOut(), o('#preloader').delay(350).fadeOut('slow');
    }),
    (d = document.getElementsByTagName('body')[0]),
    o('#mode-setting-btn').on('click', function (t) {
      d.hasAttribute('data-bs-theme') &&
      'dark' == d.getAttribute('data-bs-theme')
        ? (document.body.setAttribute('data-bs-theme', 'light'),
          document.body.setAttribute('data-topbar', 'light'),
          document.body.setAttribute('data-sidebar', 'light'),
          (d.hasAttribute('data-layout') &&
            'horizontal' == d.getAttribute('data-layout')) ||
            document.body.setAttribute('data-sidebar', 'light'),
          e('topbar-color-light'),
          e('sidebar-color-light'),
          e('topbar-color-light'))
        : (document.body.setAttribute('data-bs-theme', 'dark'),
          document.body.setAttribute('data-topbar', 'dark'),
          document.body.setAttribute('data-sidebar', 'dark'),
          (d.hasAttribute('data-layout') &&
            'horizontal' == d.getAttribute('data-layout')) ||
            document.body.setAttribute('data-sidebar', 'dark'),
          e('layout-mode-dark'),
          e('sidebar-color-dark'),
          e('topbar-color-dark'));
    }),
    o(document).on('click', 'body', function (t) {
      0 < o(t.target).closest('.right-bar-toggle, .right-bar').length ||
        o('body').removeClass('right-bar-enabled');
    }),
    d.hasAttribute('data-layout') &&
    'horizontal' == d.getAttribute('data-layout')
      ? (e('layout-horizontal'), o('.sidebar-setting').hide())
      : e('layout-vertical'),
    d.hasAttribute('data-bs-theme') && 'dark' == d.getAttribute('data-bs-theme')
      ? e('layout-mode-dark')
      : e('layout-mode-light'),
    d.hasAttribute('data-layout-size') &&
    'boxed' == d.getAttribute('data-layout-size')
      ? e('layout-width-boxed')
      : e('layout-width-fuild'),
    d.hasAttribute('data-topbar') && 'dark' == d.getAttribute('data-topbar')
      ? e('topbar-color-dark')
      : e('topbar-color-light'),
    d.hasAttribute('data-sidebar-size') &&
    'sm' == d.getAttribute('data-sidebar-size')
      ? e('sidebar-size-small')
      : d.hasAttribute('data-sidebar-size') &&
        'md' == d.getAttribute('data-sidebar-size')
      ? e('sidebar-size-compact')
      : e('sidebar-size-default'),
    d.hasAttribute('data-sidebar') &&
    'colored' == d.getAttribute('data-sidebar')
      ? e('sidebar-color-colored')
      : d.hasAttribute('data-sidebar') &&
        'dark' == d.getAttribute('data-sidebar')
      ? e('sidebar-color-dark')
      : e('sidebar-color-light'),
    document.getElementsByTagName('html')[0].hasAttribute('dir') &&
    'rtl' == document.getElementsByTagName('html')[0].getAttribute('dir')
      ? e('layout-direction-rtl')
      : e('layout-direction-ltr'),
    o("input[name='layout']").on('change', function () {
      window.location.href =
        'vertical' == o(this).val() ? 'index.html' : 'layouts-horizontal.html';
    }),
    o("input[name='layout-mode']").on('change', function () {
      'light' == o(this).val()
        ? (document.body.setAttribute('data-bs-theme', 'light'),
          document.body.setAttribute('data-topbar', 'light'),
          document.body.setAttribute('data-sidebar', 'light'),
          (d.hasAttribute('data-layout') &&
            'horizontal' == d.getAttribute('data-layout')) ||
            document.body.setAttribute('data-sidebar', 'light'),
          e('topbar-color-light'),
          e('sidebar-color-light'))
        : (document.body.setAttribute('data-bs-theme', 'dark'),
          document.body.setAttribute('data-topbar', 'dark'),
          document.body.setAttribute('data-sidebar', 'dark'),
          (d.hasAttribute('data-layout') &&
            'horizontal' == d.getAttribute('data-layout')) ||
            document.body.setAttribute('data-sidebar', 'dark'),
          e('topbar-color-dark'),
          e('sidebar-color-dark'));
    }),
    o("input[name='layout-direction']").on('change', function () {
      'ltr' == o(this).val()
        ? (document.getElementsByTagName('html')[0].removeAttribute('dir'),
          document
            .getElementById('bootstrap-style')
            .setAttribute('href', 'assets/css/bootstrap.min.css'),
          document
            .getElementById('app-style')
            .setAttribute('href', 'assets/css/app.min.css'))
        : (document
            .getElementById('bootstrap-style')
            .setAttribute('href', 'assets/css/bootstrap-rtl.min.css'),
          document
            .getElementById('app-style')
            .setAttribute('href', 'assets/css/app-rtl.min.css'),
          document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl'));
    }),
    Waves.init();
})(jQuery);
