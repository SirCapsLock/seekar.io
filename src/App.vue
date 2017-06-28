<template>

  <div>
    <nav class="nav" id="mainMenu">
      <div class="nav-right">
        <a data-menuanchor="home" href="#home" class="nav-item nav-link">Home</a>
        <a data-menuanchor="how" href="#how" class="nav-item nav-link">How it Works</a>
        <a data-menuanchor="try" href="#try" class="nav-item nav-link">Try it Out</a>
        <a data-menuanchor="contact" href="#contact" class="nav-item nav-link">Contact Us</a>
      </div>
    </nav>
    <div id="fullpage">
      <div class="section">
        <Home/>
      </div>
      <div class="section">
        <How/>
      </div>
      <div class="section">
        <Try/>
      </div>
      <div class="section">
        <Contact/>
      </div>
    </div>
  </div>


</template>

<script>

  import Home from './components/Home'
  import How from './components/How'
  import Try from './components/Try'
  import Contact from './components/Contact'
  import Get from './components/Get'


  export default {
    name: 'app',
    components: { Home, How, Try, Contact, Get },
    data () {
      return {
        transitionName: "fade",
        mobileNavActive: false
      }
    },
    methods: {
      hideNav() {
        this.mobileNavActive = false;
      }
    }
  }

  $(document).ready(function () {
    /* 
      Initialize Fullpage.js. 
      Do not initialize on mobile devices.
    */

    if($(window).width() > 765)
    {
      $('#fullpage').fullpage({
        anchors: ['home', 'how', 'try', 'contact', 'get'],
        menu: '#mainMenu',
        fixedElements: '#mainMenu',
        css3: true
      });
    }
  });

</script>

<style lang="sass">
  #mainMenu 
    position: fixed
    top: 0px
    display: block
    width: 100%
    background: #000
    

  .nav-toggle span
    background-color: #FFF
  .nav-toggle:hover
    background-color: #000
  a.nav-item:hover 
    color: #fff
  .nav-link
    font-size: 1.3em
    display: block
  .nav-link.active
    border-left: 3px #14b5eb
    color: #ccc
  
</style>
