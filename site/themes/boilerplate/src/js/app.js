///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  Ingest Engines & Libraries                                               //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

window.Vue = require('vue');

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  Load Vue Components                                                      //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

Vue.component('nav-dropdown', require('./components/NavDropdown.vue'));

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  Define Vue Applications                                                  //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

const nav = new Vue({
  el: '#header',
  data: {
    open: false,
    sizeClass: 'large',
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
    handleScroll () {
      if (window.scrollY > 30) {
        this.sizeClass = 'small';
      } else {
        this.sizeClass = 'large';
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
})

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//  Script                                                                   //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
